
// ----------------------------------- Slider Images functionality -----------
let sliderImages = document.querySelectorAll('.image-slider .slider');
let slideImagesCount = sliderImages.length;
let currentSlide = 0;
let leftArrow = document.querySelector('.image-slider .left-arrow');
let rightArrow = document.querySelector('.image-slider .right-arrow');
leftArrow.onclick = prevSlide;
rightArrow.onclick = nextSlide;

let oldSliderImages = document.querySelectorAll('.old-image-slider .slider');
let oldSlideImagesCount = oldSliderImages.length;
let currentOldSlide = 0;
let oldLeftArrow = document.querySelector('.old-image-slider .left-arrow');
let oldRightArrow = document.querySelector('.old-image-slider .right-arrow');
// console.log(slideImagesCount);

oldLeftArrow.onclick = prevOldSlide;
oldRightArrow.onclick = nextOldSlide;

// ---------------- going to the next slider image --------------------
Interval();
oldInterval();
function nextSlide() {
    clearInterval(autoChangeSlide);
    console.log('next');
    if (currentSlide < slideImagesCount - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    console.log(currentSlide);
    SlideControl();
    changeSliderImages = localStorage.getItem('slider-opt');
    if (changeSliderImages !== null) {
        if (changeSliderImages === 'yes') {
            Interval();
        }
    }else{
        clearInterval(autoChangeSlide);
        Interval();
    }
}
// ---------------- going to the previous slider image --------------------
function prevSlide() {
    clearInterval(autoChangeSlide);
    console.log('previous');
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = slideImagesCount - 1;
    }
    console.log(currentSlide);
    SlideControl();
    changeSliderImages = localStorage.getItem('slider-opt');
    if (changeSliderImages !== null) {
        if (changeSliderImages === 'yes') {
            Interval();
        }
    }else{
        clearInterval(autoChangeSlide);
        Interval();
    }
}
function nextOldSlide() {
    clearInterval(autoChangeOldSlide);
    console.log('next');
    if (currentOldSlide < oldSlideImagesCount - 1) {
        currentOldSlide++;
    } else {
        currentOldSlide = 0;
    }
    console.log(currentOldSlide);
    oldSlideControl();
        clearInterval(autoChangeOldSlide);
        oldInterval();
    
}
// ---------------- going to the previous slider image --------------------
function prevOldSlide() {
    clearInterval(autoChangeOldSlide);
    console.log('previous');
    if (currentOldSlide > 0) {
        currentOldSlide--;
    } else {
        currentOldSlide = oldSlideImagesCount - 1;
    }
    console.log(currentOldSlide);
    oldSlideControl();
    clearInterval(autoChangeOldSlide);
        oldInterval();
    
}
// ---------------- Auto Swip Slide Images --------------------
function Interval() {
    autoChangeSlide = setInterval(() => {
        if (currentSlide < slideImagesCount - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        SlideControl();
    
    }, 3000);
}
function oldInterval() {
    autoChangeOldSlide = setInterval(() => {
        if (currentOldSlide < oldSlideImagesCount - 1) {
            currentOldSlide++;
        } else {
            currentOldSlide = 0;
        }
        oldSlideControl();
    
    }, 3000);
}
// ---------------- control the active image and the active bullet --------------------
SlideControl();
function SlideControl() {
    sliderImages.forEach(slide => {
        slide.classList.remove('active');
    });
    sliderImages[currentSlide].classList.add('active');
}

oldSlideControl();
function oldSlideControl() {
    oldSliderImages.forEach(slide => {
        slide.classList.remove('active');
    });
    oldSliderImages[currentOldSlide].classList.add('active');
}



let featSlide = document.querySelectorAll('.features .featinput');
let teamSlide = document.querySelectorAll('.team .teaminput');
let testRightSlide = document.querySelectorAll('.testomonials .right-test .testinput');
let testLeftSlide = document.querySelectorAll('.testomonials .left-test .testinput');
let testRightSlideCount = testRightSlide.length;
let testLeftSlideCount = testLeftSlide.length;
let featSlideCount = featSlide.length;
let teamSlideCount = teamSlide.length;
let currentTestRightSlide = 0;
let currentTestLeftSlide = 0;
let currentFeatSlide = 0;
let currentTeamSlide = 0;
featInterval();
function featInterval() {
    let featInt = setInterval(()=>{
        if (currentFeatSlide < featSlideCount - 1) {
            currentFeatSlide++;
        }else{
            currentFeatSlide = 0;
        }
        changeFeatSlide();
    },3000);
}
teamInterval();
function teamInterval() {
    let teamInt = setInterval(()=>{
        if (currentTeamSlide < teamSlideCount - 1) {
            currentTeamSlide++;
        }else{
            currentTeamSlide = 0;
        }
        changeTeamSlide();
    },3000);
}
testInterval();
function testInterval() {
    let teamInt = setInterval(()=>{
        if (currentTestRightSlide < testRightSlideCount - 1) {
            currentTestRightSlide++;
        }else{
            currentTestRightSlide = 0;
        }
        if (currentTestLeftSlide < testLeftSlideCount - 1) {
            currentTestLeftSlide++;
        }else{
            currentTestLeftSlide = 0;
        }
        changeTestSlide();
    },3000);
}
function changeFeatSlide() {
    featSlide[currentFeatSlide].checked = true;
}
function changeTeamSlide() {
    teamSlide[currentTeamSlide].checked = true;
}
function changeTestSlide() {
    testRightSlide[currentTestRightSlide].checked = true;
    testLeftSlide[currentTestLeftSlide].checked = true;
}

// ----------------------------------- animate the progress bar when reveal on screen -----------
let stats = document.querySelector('.stats');
let counters = document.querySelectorAll('.stats .counters');
const speed = 50000;
const observer = new IntersectionObserver( items => {
    items.forEach(item=>{
        if(item.isIntersecting){
            const target = item.target;
            console.log(target);
            const animate = () => {
                const value = + target.getAttribute('data-value');
                console.log(value);
                const data = + target.innerText;
                
                const time = value / speed;
                if(data < value) {
                    target.innerText = Math.ceil(data + time);
                    setTimeout(animate, 25);
                }else{
                    target.innerText = value;
                }     
                // observer.unobserve(target);
            }   
            animate();
        }else{
            item.target.innerText = 0;
        }
    });
    
})

counters.forEach( counter => observer.observe(counter));

    
function countoneup() {
    oneIncr++;
    if (oneIncr >= 7) {
        clearInterval(oneInterval);
    }
    one.innerHTML = `${oneIncr}`;
    countdown = false;
}
function counttwoup() {
    twoIncr++;
    if (twoIncr >= 50) {
        clearInterval(twoInterval);
    }
    two.innerText = `${twoIncr}+`;
}
function countthreeup() {
    threeIncr++;
    if (threeIncr >= 40) {
        clearInterval(threeInterval);
    }
    three.innerText = `${threeIncr}`;
}
function countfourup() {
    fourIncr++;
    if (fourIncr >= 300) {
        clearInterval(fourInterval);
    }
    four.innerText = `${fourIncr}+`;
}