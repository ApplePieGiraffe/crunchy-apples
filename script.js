// PREVIEW TEXT

let previewText = document.querySelector('.preview-text');
let input = document.querySelector('.input');

input.addEventListener('input', () => {
    previewText.textContent = input.value;
    n;
});

// IMGs

let landscapeImgs = [
    'img/landscape/night-sky.jpg',
    'img/landscape/hazy-mountains.jpg',
    'img/landscape/sunset-beach-tree.jpg',
];

let spaceImgs = [
    'img/space/colorful-galaxy.jpg',
    'img/space/galaxy.jpg',
    'img/space/long-exposure-rocket.jpg',
];

let teslaImgs = [
    'img/tesla/tesla-logo.jpg',
    'img/tesla/tesla-road.jpg',
    'img/tesla/tesla-trunk-logo.jpg',
];

let applesImgs = [
    'img/apples/apple-pie.jpg',
    'img/apples/apple.jpg',
    'img/apples/birthday-apple-pie.jpg',
];

// VARIABLES

let theme = landscapeImgs;
let index = 0;

// FUNCTIONS

function changeTheme() {
    switch (select.value) {
        case 'landscape':
            theme = landscapeImgs;
            break;
        case 'space':
            theme = spaceImgs;
            break;
        case 'tesla':
            theme = teslaImgs;
            break;
        case 'apples':
            theme = applesImgs;
            break;
    }
    index = 0;
}

function prevIndex() {
    index = index === 0 ? theme.length - 1 : index - 1;
}

function nextIndex() {
    index = index === theme.length - 1 ? 0 : index + 1;
}

// SELECTORS

let img = document.querySelector('.preview-img');
let prevBtn = document.querySelector('.arrow-back');
let nextBtn = document.querySelector('.arrow-forward');
let select = document.querySelector('.select');

// EVENT LISTENERS

prevBtn.addEventListener('click', () => {
    prevIndex();
    img.src = theme[index];
});

nextBtn.addEventListener('click', () => {
    nextIndex();
    img.src = theme[index];
});

select.addEventListener('change', () => {
    changeTheme();
    img.src = theme[index];
});
