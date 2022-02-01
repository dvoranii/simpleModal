'use strict';

const btn1 = document.querySelector('.show-modal-1');
const btn2 = document.querySelector('.show-modal-2');
const btn3 = document.querySelector('.show-modal-3');

const modal = document.querySelector('.modal');
const modal1 = document.querySelector('.modal-1');
const modal2 = document.querySelector('.modal-2');
const modal3 = document.querySelector('.modal-3');

const closeModal1 = document.querySelector('.close-modal-1');
const closeModal2 = document.querySelector('.close-modal-2');
const closeModal3 = document.querySelector('.close-modal-3');
const overlay = document.querySelector('.overlay');

btn1.addEventListener('click', e => {
  modal1.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btn2.addEventListener('click', e => {
  modal2.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
btn3.addEventListener('click', e => {
  modal3.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

closeModal1.addEventListener('click', e => {
  modal1.classList.add('hidden');
  overlay.classList.add('hidden');
});
closeModal2.addEventListener('click', e => {
  modal2.classList.add('hidden');
  overlay.classList.add('hidden');
});
closeModal3.addEventListener('click', e => {
  modal3.classList.add('hidden');
  overlay.classList.add('hidden');
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (!modal1.classList.contains('hidden')) {
      modal1.classList.add('hidden');
      overlay.classList.add('hidden');
    }
    if (!modal2.classList.contains('hidden')) {
      modal2.classList.add('hidden');
      overlay.classList.add('hidden');
    }
    if (!modal3.classList.contains('hidden')) {
      modal3.classList.add('hidden');
      overlay.classList.add('hidden');
    }
  }
});
