var dropdownButton = document.getElementsByClassName('dropdown-btn');
var dropContent = document.getElementsByClassName('dropdown-box');
var arrow = document.getElementsByClassName('icon-arrow');

for(let i = 0; i<dropdownButton.length; i++){
  dropdownButton[i].addEventListener('click', function(){

    let btn = dropdownButton[i];
    let content = dropContent[i];
    let arr = arrow[i];

    if(content.classList.contains('visible')){
      content.classList.remove('visible');
      arr.classList.remove('up');
      arr.classList.add('down');
      btn.classList.remove('selected');

    }else{
      content.classList.add('visible');
      arr.classList.remove('down');
      arr.classList.add('up');
      btn.classList.add('selected');

    }
  });
}