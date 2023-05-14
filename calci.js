
const text=document.getElementById('textbox');
const buttons=document.querySelectorAll('button');

function clicked(){
  buttons.addEventListener('click',clicked);
  console.log(clicked);
  text.value = buttons.innerText;

}
