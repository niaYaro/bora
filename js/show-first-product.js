const productsBox = document.querySelector('.products-box');
const darkenWrapper = document.querySelector('.global-wrapper-darken');

const firstProductLink = document.getElementById('product-1');
const secondProductLink = document.getElementById('product-2');
const thirdProductLink = document.getElementById('product-3');
const fourthProductLink = document.getElementById('product-4');
const fifthProductLink = document.getElementById('product-5');
const sixthProductLink = document.getElementById('product-6');

const firstProduct = document.querySelector('.first-product-wrapper');
const secondProduct = document.querySelector('.second-product-wrapper');
const thirdProduct = document.querySelector('.third-product-wrapper');
const fourthProduct = document.querySelector('.fourth-product-wrapper');
const fifthProduct = document.querySelector('.fifth-product-wrapper');
const sixthProduct = document.querySelector('.sixth-product-wrapper');

firstProductLink.addEventListener ('click', showProduct(firstProduct));
secondProductLink.addEventListener ('click', showProduct(secondProduct));
thirdProductLink.addEventListener ('click', showProduct(thirdProduct));
fourthProductLink.addEventListener ('click', showProduct(fourthProduct));
fifthProductLink.addEventListener ('click', showProduct(fifthProduct));
sixthProductLink.addEventListener ('click', showProduct(sixthProduct));

function showProduct(product) {
    return function() {
        darkenWrapper.classList.add('up');
        productsBox.classList.remove('hidden');  
        productsBox.classList.add('moving-left');
        productsBox.classList.remove('moving-right');  
        product.classList.remove('hidden');
    }
}

const closingCross = document.querySelector('.product-closing-cross');
closingCross.addEventListener ('click', closeProduct);

const productsArray = [
    firstProduct,
    secondProduct,
    thirdProduct,
    fourthProduct,
    fifthProduct,
    sixthProduct
];

function closeProduct () {
    darkenWrapper.classList.remove('up');
    if (productsBox.classList.contains('moving-left')) {
        productsBox.classList.add('moving-right');
    }
    const activeProduct = productsArray.filter(item => !item.classList.contains('hidden'))
    activeProduct[0].classList.add('hidden')
    productsBox.classList.add('hidden');
}