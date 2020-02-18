const courseNameInput = document.querySelector('#input-course');
const ratingInput = document.querySelector('#input-rating');
const addBtn = document.querySelector('#btn-add');
const coursesList = document.querySelector('#courses-list');

const clear = () => {
  courseNameInput.value = '';
  ratingInput.value = '';
}

    // Copy from URL: https://ionicframework.com/docs/api/alert
function presentAlert() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Alert';
  alert.subHeader = '';
  alert.message = 'Please, review the inputs';
  alert.buttons = ['Okey'];
    
  document.body.appendChild(alert);
  return alert.present();
}

addBtn.addEventListener('click', () => {
  const enteredCourseName = courseNameInput.value;
  const enteredRating = ratingInput.value;

  if (enteredCourseName.trim().length <= 0 ||
      enteredRating <= 0 || 
      enteredRating > 5 ||
      enteredRating.trim().length <= 0)
  {
    presentAlert();
    return;
  }

  const newItem = document.createElement('ion-item');
  //newItem.textContent = enteredCourseName + ' - ' + enteredRating + '/5';
  newItem.innerHTML = `<strong>${enteredCourseName}:</strong>&nbsp;${enteredRating}/5`;

  console.log(newItem.textContent);

  coursesList.appendChild(newItem);

  clear();
});










