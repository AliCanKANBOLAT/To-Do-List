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
    userInfo.value ='';
    infoList.append(liElement);
    addToLocalStorage(liElement);
    liElement.classList.add('animate__animated', 'animate__bounceInLeft');
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
  localStorage.removeItem('localItem');
  
} )

function addToLocalStorage(itemWhichAdd) {
  let data = JSON.parse(localStorage.getItem('localItem')); //JSON.parse using for getting item from localstorage

  if (data === null) {
    localStorage.setItem('localItem', JSON.stringify(itemWhichAdd.innerHTML)); //JSON.stringify using to send to localstorage
  } else {
    data.push(itemWhichAdd.innerHTML);
    localStorage.setItem('localItem', JSON.stringify(data));
  }
}
  
