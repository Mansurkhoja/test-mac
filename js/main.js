'use strict'; //vh

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
}); //scroll down sidebar

var sidebar = document.querySelector('.sidebar');
var sidebarList = document.querySelector('.sidebar__list');
var sidebarScrollBottom = document.querySelector('.sidebar__list-scroller');

if (sidebarList.scrollHeight - sidebar.clientHeight < 81) {
  sidebarScrollBottom.classList.add('hide');
} else {
  sidebarScrollBottom.classList.remove('hide');
}

sidebar.addEventListener('scroll', function name(params) {
  sidebarScrollBottom.classList.add('hide');
});
sidebarScrollBottom.addEventListener('click', function () {
  sidebar.scrollTop = sidebar.clientHeight;
  sidebarScrollBottom.classList.add('hide');
}); //btn-toggle

var btnToggle = document.querySelectorAll('[data-toggle="btn-toggle"]');
var btnMore = document.querySelectorAll('.chat__message-more-btn');

for (var i = 0; i < btnToggle.length; i++) {
  var el = btnToggle[i];
  el.addEventListener('click', function () {
    this.closest('.chat__message-more').classList.add('active');
  });
}

for (var _i = 0; _i < btnMore.length; _i++) {
  var _el = btnMore[_i];

  _el.addEventListener('click', function () {
    this.closest('.chat__message-more').classList.remove('active');
  });
} //chat body


var chatBody = document.querySelectorAll('.chat__body');

for (var _i2 = 0; _i2 < chatBody.length; _i2++) {
  var _el2 = chatBody[_i2];
  _el2.scrollTop = _el2.clientHeight;
} //chat items chat inner


var listItems = document.querySelectorAll('[data-toggle="list-item"]');
var chatInners = document.querySelectorAll('.chat__inner'); //  data-target="1"

var _loop = function _loop(_i3) {
  var listItem = listItems[_i3];
  listItem.addEventListener('click', function () {
    for (var _i4 = 0; _i4 < chatInners.length; _i4++) {
      var _el3 = chatInners[_i4];
      var target = listItem.getAttribute('data-target');
      var chatInner = document.getElementById(target);

      _el3.classList.remove('active');

      chatInner.classList.add('active');
      burger.classList.add('active');
      sidebar.classList.add('active');
      chat.classList.add('active');
    }

    for (var _i5 = 0; _i5 < chatBody.length; _i5++) {
      var _el4 = chatBody[_i5];
      _el4.scrollTop = _el4.clientHeight;
    }
  });
};

for (var _i3 = 0; _i3 < listItems.length; _i3++) {
  _loop(_i3);
} //burger


var burger = document.querySelector('.burger');
var chat = document.querySelector('.chat');
burger.addEventListener('click', function () {
  this.classList.remove('active');
  sidebar.classList.remove('active');
  chat.classList.remove('active');
});