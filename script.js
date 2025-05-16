document.addEventListener('DOMContentLoaded', function () {
    // === Initialize the Leaflet Map ===
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        const map = L.map('map').setView([-1.286389, 36.817223], 7);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const waterSources = [
            { lat: -1.286389, lng: 36.817223, status: 'safe', description: 'Nairobi - Safe Water Source' },
            { lat: -0.091702, lng: 34.767956, status: 'moderately safe', description: 'Kisumu - Moderately Safe Water Source' },
            { lat: -3.386925, lng: 37.530125, status: 'unsafe', description: 'Arusha - Unsafe Water Source' },
            { lat: 0.514277, lng: 35.269779, status: 'safe', description: 'Eldoret - Safe Water Source' },
            { lat: -1.292066, lng: 36.821946, status: 'moderately safe', description: 'Nairobi (Westlands) - Moderately Safe Water Source' },
            { lat: -4.043477, lng: 39.668206, status: 'safe', description: 'Mombasa - Safe Water Source' },
            { lat: -0.425, lng: 36.951, status: 'unsafe', description: 'Nyeri - Unsafe Water Source' },
            { lat: -0.514277, lng: 37.269779, status: 'moderately safe', description: 'Meru - Moderately Safe Water Source' },
            { lat: -0.28333, lng: 36.06667, status: 'safe', description: 'Nakuru - Safe Water Source' },
            { lat: -1.356, lng: 36.677, status: 'unsafe', description: 'Machakos - Unsafe Water Source' },
            { lat: -0.716667, lng: 36.433333, status: 'moderately safe', description: 'Naivasha - Moderately Safe Water Source' },
            { lat: -1.2921, lng: 36.8219, status: 'safe', description: 'Karen (Nairobi) - Safe Water Source' }
        ];

        waterSources.forEach(source => {
            let color = source.status === 'safe' ? 'blue' :
                        source.status === 'moderately safe' ? 'lightblue' :
                        'red';

            L.circleMarker([source.lat, source.lng], {
                color: color,
                fillColor: color,
                radius: 8,
                fillOpacity: 0.8
            })
            .bindPopup(`<b>${source.description}</b><br>Status: ${source.status.charAt(0).toUpperCase() + source.status.slice(1)}`)
            .addTo(map);
        });
    }

   // ...existing code...

// === Testimonial Slider ===
const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    const slides = testimonialSlider.querySelectorAll('.testimonial-slide');
    const prevButton = testimonialSlider.querySelector('.prev-testimonial');
    const nextButton = testimonialSlider.querySelector('.next-testimonial');
    const indicators = testimonialSlider.querySelectorAll('.indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    // Show the first slide on load
    showSlide(currentIndex);
}

function showRestrictedContent() {
    const publicContent = document.getElementById('public-content');
    const restrictedContent = document.getElementById('restricted-content');
    if (publicContent) publicContent.classList.add('hide');
    if (restrictedContent) {
        restrictedContent.classList.remove('hide');
        restrictedContent.style.display = 'block';
        restrictedContent.setAttribute('data-signed-in', 'true');
    }
}

function showPublicContent() {
    const publicContent = document.getElementById('public-content');
    const restrictedContent = document.getElementById('restricted-content');
    if (publicContent) publicContent.classList.remove('hide');
    if (restrictedContent) {
        restrictedContent.classList.add('hide');
        restrictedContent.style.display = 'none';
        restrictedContent.setAttribute('data-signed-in', 'false');
    }
}

    // === Form Validation ===
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    alert(`Please fill out the required field: ${field.name}`);
                    field.classList.add('error');
                    event.preventDefault();
                } else {
                    field.classList.remove('error');
                }
            });

            const emailField = this.querySelector('input[type="email"][required]');
            if (emailField && !isValidEmail(emailField.value.trim())) {
                isValid = false;
                alert('Please enter a valid email address.');
                emailField.classList.add('error');
                event.preventDefault();
            }
        });
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
// Update your login form submit handler:
// if (loginForm) {
//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();
//         showRestrictedContent();
//         alert('You are now signed in! Restricted content is now visible.');
//     });
// }

// // Update your sign out logic:
// function signOut() {
//     showPublicContent();
//     alert('You are now signed out! Restricted content is hidden.');
// }
    if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        showRestrictedContent();
        alert('You are now signed in! Restricted content is now visible.');
    });
}

function signOut() {
    showPublicContent();
    alert('You are now signed out! Restricted content is hidden.');
}

    // Add Sign Out Button to Footer
    const footer = document.querySelector('footer');
    const signOutButton = document.createElement('button');
    signOutButton.className = 'footer-btn';
    signOutButton.textContent = 'Sign Out';
    signOutButton.style.marginTop = '10px';
    signOutButton.style.padding = '8px 12px';
    signOutButton.style.backgroundColor = '#043897';
    signOutButton.style.color = 'white';
    signOutButton.style.border = 'none';
    signOutButton.style.borderRadius = '5px';
    signOutButton.style.cursor = 'pointer';
    signOutButton.addEventListener('click', signOut);
    footer.appendChild(signOutButton);
});
