async function saveFile(content = textarea.value) {
    try { 
        const newHandle = await window.showSaveFilePicker();
        const writableStream = await newHandle.createWritable();
        await writableStream.write(content);
        await writableStream.close();
        document.write("File saved with content: " + content);
    } catch (err) {
        document.write(err.name, err.message);
    }
}
