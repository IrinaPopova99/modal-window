# modal-window
Creating a modal window to display more detailed information.

## Getting Started

It is just a Javascript file. You can copy the code and paste into your code or download this file. See deployment for notes on how to deploy the project on a live system.

## Deployment

Call function `knowMore` and pass 4 parameters:

#### buttonClass

This is the class name of the button which should call a modal window. 
In your HTML it can be like:
```
<button class="more"> Узнать больше</button>
```
buttonClass is `.more`.

#### overlayClass

This is the class name of the `div` which involves a content of the modal window. 
In your HTML it can be like:
```
<div class="overlay">
    <h2>Title</h2>
    <p>TEXT</p>
</div>
```
overlayClass is `.overlay`.

#### popupCloseClass

This is the class name of the element which closes the modal window. 
In your HTML it can be like:
```
<div class="popup-close">&times;</div>
```
popupCloseClasss is `.popup-close`.

#### animationClass

This is the class name from CSS file. It adds an animation for the modal window. 
In your CSS it can be like:
```
.more-splash {
  -webkit-animation-name: splash;
          animation-name: splash;
  -webkit-animation-duration: 1.7s;
          animation-duration: 1.7s;
}
```
animationClass is `.more-splash`.
