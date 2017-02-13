$(document).ready(function() {
  $('.menu').remove();
  $('.burger').on('click', function(){
    var menu = $('<ul class="menu-burger"><li class="menu-burger__item"><a class="menu-burger__link" href="#about">О нас</a></li><li class="menu-burger__item"><a class="menu-burger__link" href="#projects">Проекты</a></li><li class="menu-burger__item"><a class="menu-burger__link" href="#about">Услуги</a></li><li class="menu-burger__item"><a class="menu-burger__link" href="#contacts">Контакты</a></li></ul>');
    menu.prependTo($('.header'));
    var menu__button = $('<button class="button-close">Закрыть меню</button>');
    menu__button.prependTo($('.menu-burger'));
    $('.button-close').on('click', function() {
      menu.remove();
    });
    $('.menu-burger__link').on('click', function() {
      menu.remove();
    });
  });
});