// Main application logic
(function() {
    'use strict';
    
    // Configuration
    // Password: bearbearandslothy
    // To change: open browser console and run: generatePasswordHash('yournewpassword')
    const PASSWORD_HASH = '59a8d7922a206ddd29b9b2eeb4dd5aa2cf3584d458fb6bc0ee57f0cf85cbc5d8';
    const SESSION_KEY = 'christmas_card_authenticated';
    
    // DOM elements
    const backgroundContainer = document.getElementById('background-container');
    const contentContainer = document.getElementById('content-container');
    const passwordGate = document.getElementById('password-gate');
    const passwordForm = document.getElementById('password-form');
    const passwordInput = document.getElementById('password-input');
    const passwordError = document.getElementById('password-error');
    
    // Initialize the application
    function init() {
        console.log('Initializing story with', storyScenes.length, 'scenes');
        
        // Check if already authenticated
        if (sessionStorage.getItem(SESSION_KEY) === 'true') {
            unlockStory();
        } else {
            // Lock scrolling and set up password form
            document.body.classList.add('locked');
            setupPasswordGate();
        }
        
        // Create background layers
        createBackgroundLayers();
        
        // Create text content
        createTextContent();
        
        // Set up initial state
        setInitialState();
        
        console.log('Initialization complete');
    }
    
    // Set up password gate
    function setupPasswordGate() {
        passwordForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const password = passwordInput.value;
            
            if (!password) return;
            
            // Hash the password
            const hash = await hashPassword(password);
            
            if (hash === PASSWORD_HASH) {
                // Correct password
                sessionStorage.setItem(SESSION_KEY, 'true');
                unlockStory();
            } else {
                // Wrong password
                showPasswordError('Incorrect password. Please try again.');
                passwordInput.value = '';
                passwordInput.focus();
            }
        });
    }
    
    // Hash password using SHA-256
    async function hashPassword(password) {
        const msgBuffer = new TextEncoder().encode(password);
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
        return hashHex;
    }
    
    // Show password error message
    function showPasswordError(message) {
        passwordError.textContent = message;
        passwordError.classList.add('show');
        
        setTimeout(() => {
            passwordError.classList.remove('show');
        }, 3000);
    }
    
    // Unlock and reveal the story
    function unlockStory() {
        // Unlock scrolling
        document.body.classList.remove('locked');
        
        // Fade out password gate
        passwordGate.classList.add('hidden');
        
        // Scroll to top to ensure starting at beginning
        window.scrollTo(0, 0);
        
        // Clear password input
        setTimeout(() => {
            passwordInput.value = '';
        }, 1000);
    }
    
    // Helper function to generate password hash (for development)
    // Call this from browser console: generatePasswordHash('yourpassword')
    window.generatePasswordHash = async function(password) {
        const hash = await hashPassword(password);
        console.log('Password hash for "' + password + '":');
        console.log(hash);
        return hash;
    };
    
    // Create background image/video layers for each scene
    function createBackgroundLayers() {
        storyScenes.forEach((scene, index) => {
            const layer = document.createElement('div');
            layer.className = 'background-layer';
            layer.dataset.sceneId = scene.id;
            layer.dataset.sceneIndex = index;
            
            // Detect if URL is a video
            const isVideo = isVideoUrl(scene.imageUrl);
            
            if (isVideo) {
                const video = document.createElement('video');
                video.src = scene.imageUrl;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.playsInline = true; // Important for iOS
                video.setAttribute('playsinline', ''); // Extra iOS compatibility
                
                // Apply custom object fit if specified
                if (scene.objectFit) {
                    video.style.objectFit = scene.objectFit;
                }
                
                // Apply custom object position if specified
                if (scene.objectPosition) {
                    video.style.objectPosition = scene.objectPosition;
                }
                
                layer.appendChild(video);
            } else {
                const img = document.createElement('img');
                img.src = scene.imageUrl;
                img.alt = `Background for scene ${scene.id}`;
                
                // Apply custom object fit if specified
                if (scene.objectFit) {
                    img.style.objectFit = scene.objectFit;
                }
                
                // Apply custom object position if specified
                if (scene.objectPosition) {
                    img.style.objectPosition = scene.objectPosition;
                }
                
                layer.appendChild(img);
            }
            
            backgroundContainer.appendChild(layer);
        });
    }
    
    // Check if URL is a video file
    function isVideoUrl(url) {
        const videoExtensions = ['.mp4', '.mov', '.webm', '.ogg', '.avi'];
        const lowerUrl = url.toLowerCase();
        return videoExtensions.some(ext => lowerUrl.includes(ext));
    }
    
    // Create text content blocks for each scene
    function createTextContent() {
        storyScenes.forEach((scene, index) => {
            const textScene = document.createElement('div');
            textScene.className = 'text-scene';
            textScene.dataset.sceneId = scene.id;
            textScene.dataset.sceneIndex = index;
            
            // Add positioning class if specified
            if (scene.textPosition && scene.textPosition !== 'center') {
                textScene.classList.add(`position-${scene.textPosition}`);
            }
            
            const textCard = document.createElement('div');
            textCard.className = 'text-card';
            
            const paragraph = document.createElement('p');
            paragraph.textContent = scene.text;
            
            textCard.appendChild(paragraph);
            textScene.appendChild(textCard);
            contentContainer.appendChild(textScene);
        });
    }
    
    // Set initial state - show first scene
    function setInitialState() {
        // Make first background visible
        const firstBackground = backgroundContainer.querySelector('.background-layer[data-scene-index="0"]');
        if (firstBackground) {
            firstBackground.style.opacity = '1';
        }
        
        // Make first text card visible
        const firstTextCard = contentContainer.querySelector('.text-scene[data-scene-index="0"] .text-card');
        if (firstTextCard) {
            // Delay slightly for visual effect
            setTimeout(() => {
                firstTextCard.classList.add('visible');
            }, 300);
        }
        
        // Set up scroll listener
        setupScrollAnimation();
    }
    
    // Set up scroll-driven animation
    function setupScrollAnimation() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
        
        // Initial call to set correct state
        handleScroll();
    }
    
    // Handle scroll events and update scene visibility
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        
        // Get all text scenes
        const textScenes = Array.from(document.querySelectorAll('.text-scene'));
        const backgroundLayers = Array.from(document.querySelectorAll('.background-layer'));
        
        textScenes.forEach((textScene, index) => {
            const rect = textScene.getBoundingClientRect();
            const sceneTop = rect.top;
            const sceneBottom = rect.bottom;
            const sceneMiddle = sceneTop + (rect.height / 2);
            
            // Text card visibility - fade in when in viewport
            const textCard = textScene.querySelector('.text-card');
            const isInViewport = sceneTop < windowHeight * 0.8 && sceneBottom > windowHeight * 0.2;
            
            if (isInViewport && !textCard.classList.contains('visible')) {
                textCard.classList.add('visible');
            } else if (!isInViewport && textCard.classList.contains('visible')) {
                textCard.classList.remove('visible');
            }
            
            // Background image cross-fade logic
            // The background should be most visible when the scene is centered in viewport
            const backgroundLayer = backgroundLayers[index];
            
            if (sceneMiddle < windowHeight && sceneMiddle > 0) {
                // Scene is in viewport - calculate opacity based on distance from center
                const viewportCenter = windowHeight / 2;
                const distanceFromCenter = Math.abs(sceneMiddle - viewportCenter);
                const maxDistance = windowHeight / 2;
                
                // Opacity is highest when centered, fades as it moves away
                let opacity = 1 - (distanceFromCenter / maxDistance);
                opacity = Math.max(0, Math.min(1, opacity)); // Clamp between 0 and 1
                
                // Apply easing for smoother transition
                opacity = easeInOutCubic(opacity);
                
                backgroundLayer.style.opacity = opacity;
            } else if (sceneMiddle >= windowHeight) {
                // Scene is below viewport
                backgroundLayer.style.opacity = '0';
            } else if (sceneMiddle <= 0) {
                // Scene is above viewport
                backgroundLayer.style.opacity = '0';
            }
        });
    }
    
    // Easing function for smoother transitions
    function easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

