const productsBox = document.querySelector('.products-box');
const darkenWrapper = document.querySelector('.global-wrapper-darken');

const firstProductLink = document.getElementById('product-1');
const secondProductLink = document.getElementById('product-2');
const thirdProductLink = document.getElementById('product-3');
const fourthProductLink = document.getElementById('product-4');
const fifthProductLink = document.getElementById('product-5');
const sixthProductLink = document.getElementById('product-6');

firstProductLink.addEventListener ('click', showFirstProduct);
secondProductLink.addEventListener ('click', showSecondProduct);
thirdProductLink.addEventListener ('click', showThirdProduct);
fourthProductLink.addEventListener ('click', showFourthProduct);
fifthProductLink.addEventListener ('click', showFifthProduct);
sixthProductLink.addEventListener ('click', showSixthProduct);

const firstProduct = document.querySelector('.first-product-wrapper');
const secondProduct = document.querySelector('.second-product-wrapper');
const thirdProduct = document.querySelector('.third-product-wrapper');
const fourthProduct = document.querySelector('.fourth-product-wrapper');
const fifthProduct = document.querySelector('.fifth-product-wrapper');
const sixthProduct = document.querySelector('.sixth-product-wrapper');

function showFirstProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');  
    firstProduct.classList.remove('hidden');
}

function showSecondProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');    
    secondProduct.classList.remove('hidden');
}

function showThirdProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');    
    thirdProduct.classList.remove('hidden');
}

function showFourthProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');    
    fourthProduct.classList.remove('hidden');
}

function showFifthProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');    
    fifthProduct.classList.remove('hidden');
}

function showSixthProduct () {
    darkenWrapper.classList.add('up');
    productsBox.classList.add('moving-left');
    productsBox.classList.remove('moving-right');    
    sixthProduct.classList.remove('hidden');
}

const closingCross = document.querySelector('.product-closing-cross');
closingCross.addEventListener ('click', closeProduct);

const productsArray = [
    fifthProduct,
    secondProduct,
    thirdProduct,
    fourthProduct,
    fifthProduct,
    sixthProduct
];

function closeProduct () {
    console.log('close');
    darkenWrapper.classList.remove('up');
    if (productsBox.classList.contains('moving-left')) {
        productsBox.classList.add('moving-right');
    }
    const activeProduct = productsArray.filter(item => !item.classList.contains('hidden'))
    console.log('array', activeProduct)
    activeProduct[0].classList.add('hidden')
    // if (firstProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     firstProduct.classList.add('hidden')
    // }
    // if (secondProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     secondProduct.classList.add('hidden')
    // }
    // if (thirdProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     thirdProduct.classList.add('hidden')
    // }
    // if (fourthProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     fourthProduct.classList.add('hidden')
    // }
    // if (fifthProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     fifthProduct.classList.add('hidden')
    // }
    // if (sixthProduct.classList.contains('hidden')) {
    //     return;
    // } else {
    //     sixthProduct.classList.add('hidden');
    // }
}
// 
// thirdProductLink.addEventListener ('click', showThirdProduct);
// fourthProductLink.addEventListener ('click', showFourthProduct);
// fifthProductLink.addEventListener ('click', showFifthProduct);
// sixthProductLink.addEventListener ('click', showSixthProduct);