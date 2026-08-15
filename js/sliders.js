function initTestimonialsSlider() {
    const track = document.getElementById('testimonial-track');
    const prevBtn = document.getElementById('testi-prev-btn');
    const nextBtn = document.getElementById('testi-next-btn');
    
    if (!track || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    let currentIndex = 1; // Default to middle card

    function updateCards() {
        cards.forEach((card, index) => {
            // Reset classes
            card.className = 'testimonial-card absolute transition-all duration-500 bg-white rounded-[32px] shadow-sm';
            
            const avatar = card.querySelector('div.absolute');
            avatar.className = 'absolute -top-10 left-1/2 -translate-x-1/2 w-[80px] h-[80px] rounded-full overflow-hidden transition-all duration-500';

            if (index === currentIndex) {
                // Center Active Card
                card.classList.add('left-1/2', '-translate-x-1/2', 'w-[420px]', 'p-10', 'pt-14', 'shadow-xl', 'opacity-100', 'scale-100', 'z-10');
                avatar.classList.add('border-4', 'border-white', 'shadow-xl');
            } else if (index < currentIndex) {
                // Cards to the Left
                card.classList.add('left-0', 'w-[400px]', 'p-8', 'pt-12', 'opacity-50', 'scale-90', '-translate-x-[15%]', 'z-0');
                avatar.classList.add('border-4', 'border-[#F8F7F2]', 'shadow-lg');
            } else {
                // Cards to the Right
                card.classList.add('right-0', 'w-[400px]', 'p-8', 'pt-12', 'opacity-50', 'scale-90', 'translate-x-[15%]', 'z-0');
                avatar.classList.add('border-4', 'border-[#F8F7F2]', 'shadow-lg');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cards.length - 1;
        updateCards();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < cards.length - 1) ? currentIndex + 1 : 0;
        updateCards();
    });

    updateCards();
}

function initWorksSlider() {
    const track = document.getElementById('works-track');
    const prevBtn = document.getElementById('works-prev-btn');
    const nextBtn = document.getElementById('works-next-btn');
    const dotsContainer = document.getElementById('works-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

    let currentIndex = 0;
    // 460px card width + 40px gap
    const cardWidth = 500; 
    const totalCards = track.children.length;
    const dots = Array.from(dotsContainer.children);

    function updateSlider() {
        const maxIndex = Math.max(0, totalCards - Math.floor(track.parentElement.offsetWidth / cardWidth));
        if (currentIndex > maxIndex) currentIndex = maxIndex;
        
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        
        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        prevBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
        
        nextBtn.style.opacity = currentIndex >= maxIndex ? '0.5' : '1';
        nextBtn.style.pointerEvents = currentIndex >= maxIndex ? 'none' : 'auto';

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.className = 'w-3 h-3 rounded-full bg-[#0f2631] transition-all duration-300 scale-125';
            } else {
                dot.className = 'w-3 h-3 rounded-full bg-gray-300 transition-all duration-300';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    });

    nextBtn.addEventListener('click', () => {
        const maxIndex = Math.max(0, totalCards - Math.floor(track.parentElement.offsetWidth / cardWidth));
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }
    });

    // Dot clicks
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const maxIndex = Math.max(0, totalCards - Math.floor(track.parentElement.offsetWidth / cardWidth));
            if (index <= maxIndex) {
                currentIndex = index;
                updateSlider();
            }
        });
    });

    // Initial setup
    setTimeout(updateSlider, 100);
    window.addEventListener('resize', updateSlider);

    // Auto-play animation
    function startAutoPlay() {
        return setInterval(() => {
            const maxIndex = Math.max(0, totalCards - Math.floor(track.parentElement.offsetWidth / cardWidth));
            if (currentIndex < maxIndex) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateSlider();
        }, 1000); // 1 second
    }
    
    let autoPlayInterval = startAutoPlay();

    // Pause on hover
    const worksSection = document.getElementById('works');
    if (worksSection) {
        worksSection.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        worksSection.addEventListener('mouseleave', () => {
            clearInterval(autoPlayInterval);
            autoPlayInterval = startAutoPlay();
        });
    }
}
