'use strict';
//vh
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
window.addEventListener('resize', function () {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', ''.concat(vh, 'px'));
});
//scroll down sidebar
let sidebar = document.querySelector('.sidebar');
let sidebarList = document.querySelector('.sidebar__list');
let sidebarScrollBottom = document.querySelector('.sidebar__list-scroller');
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
});
//btn-toggle
let btnToggle = document.querySelectorAll('[data-toggle="btn-toggle"]');
let btnMore = document.querySelectorAll('.chat__message-more-btn');
for (let i = 0; i < btnToggle.length; i++) {
	const el = btnToggle[i];
	el.addEventListener('click', function () {
		this.closest('.chat__message-more').classList.add('active');
	});
}
for (let i = 0; i < btnMore.length; i++) {
	const el = btnMore[i];
	el.addEventListener('click', function () {
		this.closest('.chat__message-more').classList.remove('active');
	});
}
//chat body
let chatBody = document.querySelectorAll('.chat__body');
for (let i = 0; i < chatBody.length; i++) {
	const el = chatBody[i];
	el.scrollTop = el.clientHeight;
}
//chat items chat inner
let listItems = document.querySelectorAll('[data-toggle="list-item"]');
let chatInners = document.querySelectorAll('.chat__inner');
//  data-target="1"
for (let i = 0; i < listItems.length; i++) {
	const listItem = listItems[i];
	listItem.addEventListener('click', function() {
		for (let i = 0; i < chatInners.length; i++) {
			const el = chatInners[i];
			const target = listItem.getAttribute('data-target');
			const chatInner = document.getElementById(target);
			el.classList.remove('active');
			chatInner.classList.add('active');
			burger.classList.add('active');
			sidebar.classList.add('active');
			chat.classList.add('active');
		}
		for (let i = 0; i < chatBody.length; i++) {
			const el = chatBody[i];
			el.scrollTop = el.clientHeight;
		}
	});
}
//burger
let burger = document.querySelector('.burger');
let chat = document.querySelector('.chat');
burger.addEventListener('click', function () {
	this.classList.remove('active');
	sidebar.classList.remove('active');
	chat.classList.remove('active');
});