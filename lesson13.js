

let col = document.getElementById('color');
col.addEventListener('click', function() {
  let op = document.getElementsByClassName('cl');
  for (let i = 0; i < op.length; i++) {
    let element = op[i];
    element.classList.add('cl_is');
  }
});
let ph = document.getElementById('image');
ph.addEventListener('click', function() {
  let op_1 = document.getElementsByClassName('al');
  for (let i = 0; i < op_1.length; i++) {
    let element_1 = op_1[i];
    element_1.classList.add('cl_is_1');
  }
});

let omg = document.getElementById('photo_1');
omg.addEventListener('click', function() {
  let bgImage = this.getAttribute('data-bg-image');
  document.body.style.backgroundImage = 'url(' + bgImage + ')';
});
let omg_1 = document.getElementById('photo_2');
omg_1.addEventListener('click', function() {
  let bgImage_1 = this.getAttribute('data-bg-image');
  document.body.style.backgroundImage = 'url(' + bgImage_1 + ')';
});
let omg_2=document.getElementById('photo_3');
omg_2.addEventListener('click',function(){
    let bgImage_2 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_2 + ')';
});
let omg_3=document.getElementById('photo_4');
omg_3.addEventListener('click',function(){
    let bgImage_3 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_3 + ')';
});

let omg_4=document.getElementById('photo_5');
omg_4.addEventListener('click',function(){
    let bgImage_4 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_4 + ')';
});
let omg_5=document.getElementById('photo_6');
omg_5.addEventListener('click',function(){
    let bgImage_5 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_5 + ')';
});

let omg_6=document.getElementById('photo_7');
omg_6.addEventListener('click',function(){
    let bgImage_6 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_6 + ')';
});
let omg_7=document.getElementById('photo_8');
omg_7.addEventListener('click',function(){
    let bgImage_7 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_7 + ')';
});
let omg_8=document.getElementById('photo_9');
omg_8.addEventListener('click',function(){
    let bgImage_8 = this.getAttribute('data-bg-image');
    document.body.style.backgroundImage = 'url(' + bgImage_8 + ')';
});





let back = document.getElementById('class_1');
back.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_1 = document.getElementById('class_2');
back_1.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});
let back_2 = document.getElementById('class_3');
back_2.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});
let back_3 = document.getElementById('class_4');
back_3.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_4 = document.getElementById('class_5');
back_4.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_5 = document.getElementById('class_6');
back_5.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_6 = document.getElementById('class_7');
back_6.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_7 = document.getElementById('class_8');
back_7.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});

let back_8 = document.getElementById('class_9');
back_8.addEventListener('click', function() {
  let color = this.getAttribute('data-color');
  document.body.style.backgroundColor = color;
});
