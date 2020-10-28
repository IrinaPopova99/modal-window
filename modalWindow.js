function knowMore(buttonClass, overlayClass, popupCloseClass, animationClass) {
    let more = document.querySelectorAll(buttonClass),
        overlay = document.querySelector(overlayClass),
        close = document.querySelector(popupCloseClass);
     more.forEach(more => {       
        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            this.classList.add(animationClass);
            document.body.style.overflow = 'hidden';
        });
     });

    close.addEventListener('click', () => {
        overlay.style.display = 'none';
        more.classList.remove(animationClass);
        document.body.style.overflow = '';
    });
}
