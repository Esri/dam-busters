import './style.css'
import simpleParallax from "simple-parallax-js/vanilla";

// Global error handler to prevent crashes
window.onerror = function(message, source, lineno, colno, error) {
    console.error('Global error:', message, 'at', source, lineno, colno, error);
    // Optionally, send to analytics or handle gracefully
    return true; // Prevent default handling
};

document.addEventListener('DOMContentLoaded', function() {
    // Skip parallax on mobile devices to improve performance
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile) return;

    // Background layer (slowest movement)
    new simpleParallax(document.getElementById('scene-layer1'), {
        scale: 0.1,
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: true
    });

    // Midground layer
    new simpleParallax(document.getElementById('scene-layer2'), {
        scale: 0.25,
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: true
    });

    // Foreground layer
    new simpleParallax(document.getElementById('scene-layer3'), {
        scale: 0.5,
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: true
    });

    // Top layer (fastest movement)
    new simpleParallax(document.getElementById('scene-layer4'), {
        scale: 1,
        delay: 0.5,
        transition: 'cubic-bezier(0,0,0,1)',
        overflow: true
    });
});