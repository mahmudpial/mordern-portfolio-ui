function initCounters() {
    const counters = document.querySelectorAll('.stat-counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const targetElement = entry.target;
                const target = +targetElement.getAttribute('data-target');
                const speed = 40; 
                const updateCount = () => {
                    const current = +targetElement.innerText.replace('+', '');
                    const inc = target / speed;
                    if (current < target) {
                        targetElement.innerText = Math.ceil(current + inc) + '+';
                        setTimeout(updateCount, 40);
                    } else {
                        targetElement.innerText = target + '+';
                    }
                };
                updateCount();
                observer.unobserve(targetElement);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}
