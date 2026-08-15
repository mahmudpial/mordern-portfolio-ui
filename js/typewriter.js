function initTypewriter() {
    const el = document.getElementById('typewriter-text');
    if (!el) return;

    const words = ["Laravel Developer.", "Backend Engineer.", "API Architect.", "Vue.js Enthusiast."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    // Add blinking cursor class
    el.classList.add('cursor-blink');

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            el.innerText = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Faster when deleting
        } else {
            el.innerText = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Normal typing speed
        }

        // If word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // Pause at the end of word
            isDeleting = true;
        } 
        // If word is fully deleted
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            typeSpeed = 500; // Pause before typing next word
        }

        setTimeout(type, typeSpeed);
    }

    // Start typing
    setTimeout(type, 1000);
}
