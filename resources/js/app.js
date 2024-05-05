import './bootstrap';

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl))

const modalTriggerList = document.querySelectorAll('[data-bs-toggle="modal"]');
modalTriggerList.forEach((modalTriggerEl) => {
    let bsModal = new Modal(modalTriggerEl);

    if (modalTriggerEl.classList.contains('info-icon')) {
        modalTriggerEl.addEventListener('click', handleMobileClick);
    }else{
        modalTriggerEl.addEventListener('click', handleDesktopClick);
    }
})


const easingCards = document.querySelectorAll('.easing-card');
const playButton = document.getElementById('play-button');
const graphSlider = document.getElementById('graph-slider');

playButton.addEventListener('click', moveSlider);
graphSlider.addEventListener('change', handleGraphSlider);

easingCards.forEach(easingCard => {
    drawCurve(easingCard, easingCard.dataset.bsTitle);
    easingCard.addEventListener('click', handleEasingCardClick);
});

let currentSelectedEquation = null;

async function moveSlider(e) {
    let button = e.target;
    button.disabled = true;

    const slider = document.getElementById('graph-slider');

    let movement = setInterval(() => {
        slider.value = parseFloat(slider.value) + parseFloat(slider.getAttribute('step'));
        handleGraphSlider();

        if (slider.value == 1) {
            clearInterval(movement);
        }
    }, 30)

    button.disabled = false;
}

function addToGrapher(equation) {
    const graphContainer = document.getElementById('grapher-container');

    graphContainer.innerHTML = '';

    let curveContainer = document.createElement('div');

    curveContainer.classList.add('curve-container', 'main-easing-display');

    graphContainer.appendChild(curveContainer);

    currentSelectedEquation = equation;

    drawCurve(graphContainer, equation, 300);
}

function handleGraphSlider(e) {
    const slider = document.getElementById('graph-slider');
    const xIndicitor = document.getElementById('x-indictor');
    const graphContainer = document.getElementById('grapher-container');
    const curveContainer = graphContainer.querySelector('.curve-container');
    const sliderValue = slider.value;

    xIndicitor.value = sliderValue;

    let redDot = document.getElementById('red-dot');

    if (redDot) {
        redDot.remove();
    }

    if (currentSelectedEquation) {
        let equationSolvedWithZero = solveEquation(currentSelectedEquation, 0)

        let highestPoint = Math.max(equationSolvedWithZero, solveEquation(currentSelectedEquation, 1));
        let drawDirection = 'left';

        if (highestPoint === equationSolvedWithZero) {
            drawDirection = 'right'
        }

        let y = solveEquation(currentSelectedEquation, (sliderValue * 300) / 300);

        drawDot(curveContainer, drawDirection, 300, highestPoint, y, sliderValue * 300, 'red', 'red-dot');
    }
}

function drawCurve(element, equation, resolution = 150) {
    const curveContainer = element.querySelector('.curve-container');

    let equationSolvedWithZero = solveEquation(equation, 0)

    let highestPoint = Math.max(equationSolvedWithZero, solveEquation(equation, 1));
    let drawDirection = 'left';

    if (highestPoint === equationSolvedWithZero) {
        drawDirection = 'right'
    }

    for (let i = resolution; i >= 0; i--) {
        let y = solveEquation(equation, i / resolution);

        drawDot(curveContainer, drawDirection, resolution, highestPoint, y, i);
    }
}

function drawDot(curveContainer, drawDirection, resolution, highestPoint, y, x, color = 'white', id = null) {
    let dot = document.createElement('div');
    dot.classList.add('dot');

    dot.style.backgroundColor = color;
    dot.style.bottom = ((curveContainer.offsetHeight - 16) / highestPoint * y / curveContainer.offsetHeight * 100) + '%';
    dot.style[drawDirection] = ((curveContainer.offsetWidth / resolution) * x / curveContainer.offsetWidth * 100) + '%';

    if (id) {
        dot.id = id;
    }

    curveContainer.appendChild(dot);
}

function handleEasingCardClick(e) {
    e.preventDefault();

    let easingCard = e.target.closest('.easing-card');

    let selectedCard = document.querySelector('.selected');
    if (selectedCard) {
        selectedCard.classList.remove('selected');
        selectedCard.querySelector('input[type="checkbox"]').checked = false;
    }

    if (easingCard.classList.contains('selected')) {
        easingCard.classList.remove('selected');
        easingCard.querySelector('input[type="checkbox"]').checked = false;
    } else {
        easingCard.classList.add('selected');
        easingCard.querySelector('input[type="checkbox"]').checked = true;

        addToGrapher(easingCard.dataset.bsTitle)
    }
}

function solveEquation(equation, value) {
    equation = equation.replace(/--t/g, 't - 0.1').replace(/\)t/g, ')*t').replace(/t/g, value);
    return eval(equation);
}

function handleMobileClick(){
    const modal = document.getElementById('aboutModal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.style.animation = 'flipCard 0.5s ease-in-out';
}

function handleDesktopClick(){
    const modal = document.getElementById('aboutModal');
    const modalContent = modal.querySelector('.modal-content');

    modalContent.style.animation = 'slideFromRight 0.5s ease-in-out';
}
