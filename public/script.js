const file_option = document.getElementById("file_option")
const url_option = document.getElementById("url_option")

const file_name = document.getElementById("file_name")
const empty_images = document.getElementById("empty_images")
const submit = document.getElementById("submit")
const grid = document.getElementById("grid")

// Inputs
const title = document.getElementById("title")
const description = document.getElementById("description")
const url_box = document.getElementById("url")
const load_image = document.getElementById("load_image")
const load_image_box = document.getElementById("load_image_box")

let type_link
const images = []

// Setting one just radioButton at tome and making appear their respective elements
file_option.addEventListener("click", (e) => {
    type_link = "file"
    url_option.checked = false
    url_box.classList.add("hidden")
    load_image_box.classList.remove("hidden")
    if (!file_option.checked) load_image_box.classList.add("hidden")
})

url_option.addEventListener("click", (e) => {
    type_link = "url";
    file_option.checked = false
    load_image_box.classList.add("hidden")
    url_box.classList.remove("hidden")
    if (!url_option.checked) url_box.classList.add("hidden")
})

// Changing the caption for the file name loaded

load_image.addEventListener("change", (e) => {
    file_name.innerText = getFileName(load_image)
})

submit.addEventListener("click", () => {
    const image = {
        title: title.value,
        description: description.value,
        imageURL: getImageURL(load_image, url_box)
    }
    images.push(image)
    console.log(image)
    const template = `
    <img src="" class="object-contain h-48 w-90" alt=${description.value}>
    `
    images.forEach(item => {
        const img = createImageItem(item, template);
        grid.appendChild(img);
    });
    // renderImages(imageItemTemplate, mainContent);
    // setPagination();
})

// FUNCTIONS
function getFileName(fileInput) {
    const files = fileInput.files;
    let name = ""
    for (var i = 0; i < files.length; i++) {
       name = `${name} ${files[i].name}`
    }
    return name
}

function addImage(image) {

}

function validateEmpty() {

}

function getImageURL (fileSelector, urlSelector) {
    const file = fileSelector.files[0];
    if (!file) return urlSelector.value;
    return file;
}

function showImages (template, container) {
    itemsToDisplay.forEach(item => {
        const imageItem = createImageItem(item, template);
        container.appendChild(imageItem);
    });
}

function createImageItem (item, template) {
    const imageItem = document.createElement('img');
    imageItem.className = "object-contain h-48 w-90";
    imageItem.innerHTML = template;

    return imageItem;
}