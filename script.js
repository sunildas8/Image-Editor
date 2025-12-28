let filter = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: 'deg',
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: 'px',
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
    opactiy: {
        value: 100,
        min: 0,
        max: 100,
        unit: '%',
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
};

const filterContainer = document.querySelector('.filter');

const imageCanvas = document.querySelector('#image_canvas');
const uploadImage = document.querySelector('#upload_image');
const canvasCtx = imageCanvas.getContext('2d');
const restButton = document.querySelector('#rest_btn');
const downloadButton = document.querySelector('#download_btn');
let file = null;
let image = null;

function createFilterElement(name, unit='%', value, min=0, max=200) {
    const div = document.createElement('div');
    div.classList.add('filter_item');

    const input = document.createElement('input');
    input.type = 'range';
    input.min = min;
    input.max = max;
    input.value = value;
    input.id = name;

    const label = document.createElement('label');
    label.innerText = name;

    div.appendChild(label);
    div.appendChild(input);

    input.addEventListener('input', () => {
        filter[name].value = input.value;
        applyFilter();
    });

    return div;
}

function createFilter(){
    Object.keys(filter).forEach(key => {
    const filterElement = createFilterElement(key, filter[key].unit, filter[key].value, filter[key].min, filter[key].max);
    
    filterContainer.appendChild(filterElement);
   })
}

createFilter();

uploadImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    const imagePlaceholder = document.querySelector('.placeholder');
    imageCanvas.style.display = 'block';
    imagePlaceholder.style.display = 'none';

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0)
    }
    
});

function applyFilter() {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = `brightness(${filter.brightness.value}${filter.brightness.unit})
    contrast(${filter.contrast.value}${filter.contrast.unit})
    saturate(${filter.saturation.value}${filter.saturation.unit})
    hue-rotate(${filter.hueRotation.value}${filter.hueRotation.unit})
    blur(${filter.blur.value}${filter.blur.unit})
    grayscale(${filter.grayscale.value}${filter.grayscale.unit})
    sepia(${filter.sepia.value}${filter.sepia.unit})
    opacity(${filter.opactiy.value}${filter.opactiy.unit})
    invert(${filter.invert.value}${filter.invert.unit})`.trim();
    canvasCtx.drawImage(image, 0, 0)
}

restButton.addEventListener('click', () => {
    filter = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: '%',
    },
    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: 'deg',
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: 'px',
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
    opactiy: {
        value: 100,
        min: 0,
        max: 100,
        unit: '%',
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
    },
};
    applyFilter();

    filterContainer.innerHTML = '';
    createFilter();
    
})

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'edited_image.png';
    link.href = imageCanvas.toDataURL();
    link.click();
});