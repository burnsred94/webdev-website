let btnLeft = document.getElementById("btn__icon-fill__left"),
    colorLeft = document.getElementById("icon__fill-left"),
    btnRight = document.getElementById("btn__icon-fill__right"),
    colorRight = document.getElementById("icon__fill-right");


btnLeft.addEventListener('click', function () {
    console.log('click');
    if (colorLeft) {
        colorLeft.style.fill = "green";
    }
    else {
        btnLeft !== 'click';

    };

});

btnRight.addEventListener('click', function () {

})
