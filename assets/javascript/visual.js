var backArr = ["url(./assets/images/food_back01.jpg)", "url(./assets/images/food_back03.jpg)", "url(./assets/images/food_back04.jpg)", "url(./assets/images/food_back05.jpg)", "url(./assets/images/food_back06.jpg)", "url(./assets/images/food_back07.jpg)", "url(./assets/images/food_back08.jpg)", "url(./assets/images/food_back09.jpg)", "url(./assets/images/food_back10.jpg)", "url(./assets/images/food_back11.jpg)"];

var randomNumber = Math.floor(Math.random() * backArr.length);

document.getElementById('background').style.backgroundImage = backArr[randomNumber];


