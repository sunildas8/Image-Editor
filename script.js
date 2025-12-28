const filter = {
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
    exposure: {
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
    inversion: {
        value: 0,
        min: 0,
        max: 100,
        unit: '%',
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
}

const filterContainer = document.querySelector('.filter');

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

    return div;
}

Object.keys(filter).forEach(key => {
    const filterElement = createFilterElement(key, filter[key].unit, filter[key].value, filter[key].min, filter[key].max);
    
    filterContainer.appendChild(filterElement);
})