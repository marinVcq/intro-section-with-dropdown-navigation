var dropdownButton = document.getElementsByClassName('dropdown-btn');
var dropContent = document.getElementsByClassName('dropdown-content');
var arrow = document.getElementsByClassName('icon-arrow');

for(let i = 0; i<dropdownButton.length; i++){
  dropdownButton[i].addEventListener('click', function(){
    let content = dropContent[i];
    let arr = arrow[i];

    if(content.classList.contains('visible')){
      content.classList.remove('visible');
      arr.classList.remove('up');
      arr.classList.add('down');

    }else{
      content.classList.add('visible');
      arr.classList.remove('down');
      arr.classList.add('up');
    }
  });
}