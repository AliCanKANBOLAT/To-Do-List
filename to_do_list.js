const userInfo = document.querySelector('#inputText');
const addButton = document.querySelector('#addButton');
const invisibleButton = document.querySelector('#invisibleButton');
const clearButton = document.querySelector('#clearButton');
const infoList = document.querySelector('#infoList');

// Sayfa yüklendiğinde local storage'dan verileri çek
const savedData = JSON.parse(localStorage.getItem('localItem')) || [];

// localStorage'dan çekilen verileri sayfaya ekle
savedData.forEach(item => {
  createLiElement(item);
});

addButton.addEventListener('click', function () {
  let userValue = userInfo.value.trim();
  if (userValue !== '') {
    // Li elementini oluştur ve sayfaya ekle
    createLiElement(userValue);

    // local storage'a veriyi ekle
    savedData.push(userValue);
    localStorage.setItem('localItem', JSON.stringify(savedData));

    userInfo.value = '';
  }
});

clearButton.addEventListener('click', function () {
  // Tüm li elementlerini ve local storage'daki veriyi temizle
  infoList.innerHTML = '';
  localStorage.removeItem('localItem');
  localStorage.clear();
});

function createLiElement(value) {
  const liElement = document.createElement('li');
  liElement.innerHTML = value;
  infoList.append(liElement);
  liElement.classList.add('animate__animated', 'animate__bounceInLeft');
  
  liElement.addEventListener("click", function () {
    // Li elementine tıklandığında stil değiştir
    this.style.textDecoration = this.style.textDecoration && this.style.textDecoration === 'line-through' ? 'none' : 'line-through';
  });

  liElement.addEventListener("dblclick", function () {
    // Double click yapılan li elementini siliyoruz
    this.remove();

    // local storage'dan da veriyi kaldırın
    const index = savedData.indexOf(value);
    if (index > -1) {
      savedData.splice(index, 1);
      localStorage.setItem('localItem', JSON.stringify(savedData));
    }
  });

  invisibleButton.addEventListener("click", function () {
    // invisibleButton'a tıklandığında stil değiştir
    if (liElement.style.textDecoration === 'line-through')
      liElement.classList.add('animate__animated', 'animate__hinge');
  });
}
