const userInfo = document.querySelector('#inputText')
const addButton = document.querySelector('#addButton')
const invisibleButton = document.querySelector('#invisibleButton');
const clearButton = document.querySelector('#clearButton')
const infoList = document.querySelector('#infoList')

addButton.addEventListener('click', function () {
   let userValue = userInfo.value.trim();
  if (userValue !== '') {
    const liElement = document.createElement('li')
    liElement.innerHTML = userValue;
    infoList.append(liElement);
    liElement.classList.add('animate__animated', 'animate__bounceInLeft');
    userInfo.value ='';
    liElement.addEventListener("click", function () {
      this.style.textDecoration = this.style.textDecoration && this.style.textDecoration ===  'line-through' ? 'none' : 'line-through';
    })

    liElement.addEventListener("dblclick", function () {
      
      // Double click yapılan li elementini siliyoruz
      liElement.remove();
      
    })

    invisibleButton.addEventListener("click", function() {
      if (liElement.style.textDecoration === 'line-through')
      liElement.classList.add('animate__animated', 'animate__hinge');
    })

  }   
  
})



clearButton.addEventListener('click', function () {  
  infoList.innerHTML = '';
  
} )
