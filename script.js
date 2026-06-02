// TYPING EFFECT

const typingText =
document.querySelector(".typing-text");

const words = [
    "Full Stack Developer",
    "Frontend Developer",
    "UI/UX Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect(){

    const currentWord =
    words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;
        }

    }

    else{

        typingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect,
        isDeleting ? 60 : 120);
}

typeEffect();


// SCROLL REVEAL

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll",
() => {

    reveals.forEach((section) => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");
        }

    });

});