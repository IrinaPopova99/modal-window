function knowMore(buttonClass, overlayClass, popupCloseClass, animationClass) {
    let more = document.querySelector(buttonClass),
        overlay = document.querySelector(overlayClass),
        close = document.querySelector(popupCloseClass);

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add(animationClass);
        //запрест на пролистование страницы, пока открыто модальное окно
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove(animationClass);
        document.body.style.overflow = '';
    });
}