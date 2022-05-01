export function getFileName(fileInput) {
    const files = fileInput.files;
    let name = ""
    for (var i = 0; i < files.length; i++) {
       name = `${name} ${files[i].name}`
    }
    return name
}