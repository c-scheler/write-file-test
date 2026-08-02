let opfsRoot, testFileHandle;
setupOPFS();

function save() {
    writeToFile(textArea.value);
}

function read() {
    textArea.value = readFile();
}

async function setupOPFS() {
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
