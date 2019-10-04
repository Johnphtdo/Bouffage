$(document).ready(function() {
var foodUrl = "https://api.edamam.com/search";
var foodAPI = "&app_id=$b64e001c&app_key=$8203f05bcefbb343beaae6139be4661d";
var foodItem = "chicken"
var foodTimeFrame = "lunch"
var foodCal = 1500;
var foodDiet = "vegetarian"
var foodAllergies = "peanuts"

var foodQueryUrl = foodUrl +"?q="+ foodItem +  "&mealType=" +  foodTimeFrame +  "&calories=" +  foodCal +  "&health=" +  foodDiet +  "&excluded=" +  foodAllergies + foodAPI;


  $.ajax({
    url: foodQueryUrl,
    method: "GET"
  }).then(function(response) {
    var foodInfo = response.hits
    console.log(foodInfo)
    
  })


})


