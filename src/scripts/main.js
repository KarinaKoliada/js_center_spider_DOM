'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const wallRect = wall.getBoundingClientRect();
const wallCenterX = wallRect.width / 2;
const wallCenterY = wallRect.height / 2;

spider.style.position = 'absolute';
spider.style.left = `${wallCenterX - spider.offsetWidth / 2}px`;
spider.style.top = `${wallCenterY - spider.offsetHeight / 2}px`;
