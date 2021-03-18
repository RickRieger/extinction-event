//======add line through ordered list items
const orderedList = document.querySelectorAll('ol li');


for (const listItem of orderedList) {
  listItem.addEventListener('click', function () {
   listItem.style.textDecoration = 'line-through';
  });
}

//========make unOrderedList fade away

const unOrderedList = document.querySelectorAll('ul li');


for (const listItem of unOrderedList) {
  listItem.addEventListener('click', function () {
   listItem.style.opacity = 0;
  });
}

//==========make images disappear========


const images = document.querySelectorAll('img');


for (const img of images) {
  img.addEventListener('click', function () {
   img.style.width = '0px';
  });
}


//========button===========================


const button = document.querySelector('#destroy-all');



for (const listItem of orderedList) {
    button.addEventListener('click', function () {
     listItem.style.textDecoration = 'line-through';
    });
  }


for (const listItem of unOrderedList) {
    button.addEventListener('click', function () {
     listItem.style.opacity = 0;
    });
  }



for (const img of images) {
  button.addEventListener('click', function () {
   img.style.width = '0px';
  });
}




// document.addEventListener('click', function (event){
//     const elementThatWasClicked = event.target;
//     elementThatWasClicked.style.backgroundColor = 'blue';
// });