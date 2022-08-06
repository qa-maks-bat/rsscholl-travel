//
//  Slider
//

const boxUSA2 = document.querySelector(".box-usa-2");
const boxSpain = document.querySelector(".box-spain");
const boxJapan = document.querySelector(".box-japan");
const boxUSA = document.querySelector(".box-usa");
const boxSpain2 = document.querySelector(".box-spain-2");

const imageUSA2 = document.querySelector(".image-usa-2");
const imageSpain = document.querySelector(".image-spain");
const imageJapan = document.querySelector(".image-japan");
const imageUSA = document.querySelector(".image-usa");
const imageSpain2 = document.querySelector(".image-spain-2");

let slidesArray = [boxUSA2, boxSpain, boxJapan, boxUSA, boxSpain2];
let currentPosition = 0;

const setPosition = (position) => {
    currentPosition = position;
    slidesArray.forEach((slide) => (slide.style.transform = `translateX(${position}%)`));

    toggleDotOpacity(currentPosition);
    toggleArrowOpacity(currentPosition);
};

imageSpain.addEventListener("click", () => {
    setPosition(100);
});

imageSpain2.addEventListener("click", () => {
    setPosition(100);
});

imageJapan.addEventListener("click", () => {
    setPosition(0);
});

imageUSA.addEventListener("click", () => {
    setPosition(-100);
});

imageUSA2.addEventListener("click", () => {
    setPosition(-100);
});

//
//  Queue Data Structure (Not Used Yet)
//

const queue = {
    data: [],

    inFront: function (dataElement) {
        this.data.unshift(dataElement);
    },

    inBack: function (dataElement) {
        this.data.push(dataElement);
    },

    outFront: function () {
        return this.data.shift();
    },

    outBack: function () {
        return this.data.pop();
    },
};

//
//  Classes Togglers    //
//

const addClass = (element, className) => {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    } else {
        false;
    }
};

const removeClass = (element, className) => {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        false;
    }
};

//
//  Slider Arrows    //
//  For Mobile Mode  //
//

const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const arrowLowOpacity = "active-low-opacity";

const toggleArrowOpacity = (position) => {
    if (position === 100) {
        addClass(arrowLeft, arrowLowOpacity);
    }

    if (position === -100) {
        addClass(arrowRight, arrowLowOpacity);
    }

    if (position < 100 && position > -100) {
        removeClass(arrowLeft, arrowLowOpacity);
        removeClass(arrowRight, arrowLowOpacity);
    }
};

arrowLeft.addEventListener("click", () => {
    if (currentPosition < 100) {
        setPosition(currentPosition + 100);
    } else {
        false;
    }
});

arrowRight.addEventListener("click", () => {
    if (currentPosition > -100) {
        setPosition(currentPosition - 100);
    } else {
        false;
    }
});

//
//  Slider Navigation Dots  //
//  For Desktop Mode        //
//

const dotNavIconLeft = document.querySelector(".dot-nav-icon-left");
const dotNavIconCenter = document.querySelector(".dot-nav-icon-center");
const dotNavIconRight = document.querySelector(".dot-nav-icon-right");
const dotOpacity = "dot-opacity";

const toggleDotOpacity = (position) => {
    if (position >= 100) {
        addClass(dotNavIconLeft, dotOpacity);
        removeClass(dotNavIconCenter, dotOpacity);
        removeClass(dotNavIconRight, dotOpacity);
    } else if (position === 0) {
        removeClass(dotNavIconLeft, dotOpacity);
        addClass(dotNavIconCenter, dotOpacity);
        removeClass(dotNavIconRight, dotOpacity);
    } else if (position <= -100) {
        removeClass(dotNavIconLeft, dotOpacity);
        removeClass(dotNavIconCenter, dotOpacity);
        addClass(dotNavIconRight, dotOpacity);
    }
};

dotNavIconLeft.addEventListener("click", () => {
    setPosition(100);
});

dotNavIconCenter.addEventListener("click", () => {
    setPosition(0);
});

dotNavIconRight.addEventListener("click", () => {
    setPosition(-100);
});

//
// End
//
