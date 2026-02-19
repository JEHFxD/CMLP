(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.nav');
        
        if (!hamburger || !nav) return;
        
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            nav.classList.toggle('active');
            this.textContent = nav.classList.contains('active') ? '✕' : '☰';
        });
        
        // Cerrar al hacer click en enlaces
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                nav.classList.remove('active');
                hamburger.textContent = '☰';
            });
        });
        
        // Cerrar al hacer click fuera
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                nav.classList.remove('active');
                hamburger.textContent = '☰';
            }
        });
    });
})();