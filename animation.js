document.addEventListener('click', function(event){
   let x = event.clientX;
   let y = event.clientY;
   
   let spans = document.createElement('span');
   spans.classList.add('balls');
   spans.style.left = x + "px"
   spans.style.top = y + "px"
   document.body.appendChild(spans)
})