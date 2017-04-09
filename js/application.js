var buttonOpen = $('<button class="hamburger hamburger--collapse burger" type="button"><span class="hamburger-box"><span class="hamburger-inner"></span></span></button>');
var buttonClose = $('<button class="burger button--close">Меню</button>');

function showBurger() {
  $('.menu').removeClass('menu').addClass('menu-burger');
  $('.menu-burger').prependTo($('.header'));
  buttonOpen.prependTo($('.lang'));
  buttonClose.prependTo($('.menu-burger'));
  $('.burger').on('click', function() {
    $('.menu-burger').slideToggle();
  });
}

function showNormalMenu() {
  buttonOpen.remove();
  buttonClose.remove();
  $('.menu-burger').removeClass('menu-burger').addClass('menu');
  $('.menu').prependTo($('.nav'));
}

function windowSize() {
  if ($(window).width() <= '724') {
    showBurger();
  } else {
    showNormalMenu();
  }
}

$(document).ready(function() {
  $(window).on('load resize', windowSize);
});