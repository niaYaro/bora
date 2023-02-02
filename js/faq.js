const accordionWrapper = document.querySelector('.mobile-accordion-wrapper');
const downArrow = document.querySelector('.arrow-down');
const upArrow = document.querySelector('.arrow-up');
downArrow.addEventListener('click', showAccardion);
function showAccardion() {
    accordionWrapper.classList.remove('hidden');
    downArrow.classList.add('hidden');
    upArrow.classList.remove('hidden');
}
upArrow.addEventListener('click', hideAccordion);
function hideAccordion() {
    accordionWrapper.classList.add('hidden');
    downArrow.classList.remove('hidden');
    upArrow.classList.add('hidden');
}