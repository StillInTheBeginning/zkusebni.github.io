/*
window.onload = function() {
    
}
 Menu 
var closeButton = document.querySelector('.menu');
    closeButton.addEventListener('click', Open);

function Open() {
    let fullMenu = document.querySelector('.full-menu');
    fullMenu.classList.toggle("myMenuOpen");

    let svgLine = document.getElementsByTagName('line');
    for (let i = 0; i < svgLine.length; i++) {
        svgLine[i].classList.toggle("menu_line");
    }
}*/

$(function() {
    /* Menu navigation */
    $('.menu').on('click', function() {
        $('.full-menu').toggleClass('myMenuOpen');
        $('line').each(function() {
            $( this ).toggleClass('menu_line');
        })
    });

    /* Lightbox */
    $('.gallery a').lightbox({
		speed: 300,
		showEffect: 'slideDown',
		hideEffect: 'slideUp'
	});
});