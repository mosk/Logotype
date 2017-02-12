$(document).ready(function() {
  var menu = $('<ul class="menu-burger"><li class="menu-burger__item"><a class="menu-burger__link" href="#about">О нас</a></li><li class="menu-burger__item"><a class="menu-burger__link menu-burger__link--active" href="#projects">Проекты</a></li><li class="menu-burger__item"><a class="menu-burger__link" href="#about">Услуги</a></li><li class="menu-burger__item"><a class="menu-burger__link" href="#contacts">Контакты</a></li></ul>');
  menu.prependTo($('.header'));
  $('.menu').remove();
  $('.menu-burger').css({'top': '0', 'margin-top': '0'});
  var menu__button = $('<button class="button-close">Закрыть меню</button>');
  menu__button.prependTo($('.menu-burger'));
});