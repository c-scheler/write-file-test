let opfsRoot, testFileHandle;
setupOPFS();

function saveText() {
    statusMessage.innerHTML = "Saving...";
    writeToFile(textarea.value);
    statusMessage.innerHTML = "Saved!";
}

async function readText() {
    textarea.value = "Reading file..."
    textarea.value = await readFile();
}

async function setupOPFS() {
    //see https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system
    opfsRoot = await navigator.storage.getDirectory();
    testFileHandle = await opfsRoot.getFileHandle("test.txt", { create: true });
}

async function readFile() {
    return await testFileHandle.getFile().text();
}

async function writeToFile(content) {
    const writableStream = await testFileHandle.createWritable();
    await writableStream.write(content);
    await writableStream.close();
}

/*async function saveFile(content = textarea.value) {
    try { 
        const newHandle = await window.showSaveFilePicker();
        const writableStream = await newHandle.createWritable();
        await writableStream.write(content);
        await writableStream.close();
        document.write("File saved with content: " + content);
    } catch (err) {
        document.write(err.name, err.message);
    }
}*/
