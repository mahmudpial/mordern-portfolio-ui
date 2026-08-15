async function loadComponents() {
    try {
        const components = ['hero', 'services', 'experience', 'works', 'testimonials', 'contact'];
        
        for (const component of components) {
            const response = await fetch(`pages/${component}.html`);
            const html = await response.text();
            document.getElementById(`section-${component}`).innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading components:', error);
    }
}

async function init() {
    await loadComponents();
    
    // Check if slider functions exist and run them
    if (typeof initTestimonialsSlider === 'function') initTestimonialsSlider();
    if (typeof initWorksSlider === 'function') initWorksSlider();
    
    // Check if other components exist and run them
    if (typeof initTypewriter === 'function') initTypewriter();
    if (typeof initCounters === 'function') initCounters();
}

// Start the app when DOM is ready
document.addEventListener('DOMContentLoaded', init);
