document.addEventListener('DOMContentLoaded', () => {

    /* --- SEARCH DUMMY TOGGLE --- */
    const searchBtn = document.getElementById('search-btn');
    const searchDropdown = document.getElementById('dummy-search-results');
    const closeSearch = document.getElementById('close-search');

    searchBtn.addEventListener('click', () => {
        searchDropdown.classList.toggle('visible');
    });

    closeSearch.addEventListener('click', () => {
        searchDropdown.classList.remove('visible');
    });

    /* --- AUTOMATED FADING TEXT CAROUSEL --- */
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    const slideIntervalMs = 6000; // 6 seconds per slide for high readability

    const goToSlide = (index) => {
        // Remove active class from current
        slides[currentSlide].classList.remove('slide-active');
        dots[currentSlide].classList.remove('active');

        // Update current index
        currentSlide = index;

        // Add active class to new
        slides[currentSlide].classList.add('slide-active');
        dots[currentSlide].classList.add('active');
    };

    const nextSlide = () => {
        let newIndex = currentSlide + 1;
        if (newIndex >= slides.length) {
            newIndex = 0;
        }
        goToSlide(newIndex);
    };

    // Automatically transition
    let slideTimer = setInterval(nextSlide, slideIntervalMs);

    // Optional: Allow manual dot clicking
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(slideTimer); // Reset timer on manual click
            goToSlide(index);
            slideTimer = setInterval(nextSlide, slideIntervalMs);
        });
    });

});

/* --- MODAL LOGIC (Global Scope) --- */

function openModal(id) {
    const modalID = `${id}-modal`;
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('active');
        // Prevent background scrolling
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modalID = `${id}-modal`;
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.remove('active');
        // Restore background scrolling
        document.body.style.overflow = '';
    }
}

// Close over overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
