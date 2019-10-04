$(document).ready(function() {
var foodUrl = "https://api.edamam.com/search";
var foodAPI = "&app_id=$b64e001c&app_key=$8203f05bcefbb343beaae6139be4661d";
var foodItem = "chicken"
var foodTimeFrame = "lunch"
var foodCal = "1000-2000";
var foodDiet = "alcohol-free"
var foodAllergies = "peanuts"

var foodQueryUrl = foodUrl +"?q="+ foodItem +  "&mealType=" +  foodTimeFrame +  "&calories=" +  foodCal +  "&health=" +  foodDiet +  "&excluded=" +  foodAllergies + foodAPI;
console.log(foodQueryUrl)

  $.ajax({
    url: foodQueryUrl,
    method: "GET"
  }).then(function(response) {
    var foodInfo = response.hits
    console.log(foodInfo)

    var foodName = foodInfo[0].recipe.label
    var foodImg = foodInfo[0].recipe.image
    var recipeUrl = $(`<a href="">Recipe Link</a>`)
    recipeUrl.attr("href",foodInfo[0].recipe.url)
    var yield = foodInfo[0].recipe.yield
    var calCount = foodInfo[0].recipe.calories
    var ingredients = foodInfo[0].recipe.ingredientLines
    console.log(ingredients)



    $(`.food-name`).text(foodName)
    $(`.foodImg`).attr("src",foodImg)
    for (let i = 0; i < ingredients.length; i++) {
      var itemList = $(`<li>`+ingredients[i]+`</li>`)
      $(`.food-info`).append(itemList)
 }  
    $(`.food-info`).append(recipeUrl)
    console.log(foodImg)
  })


})


