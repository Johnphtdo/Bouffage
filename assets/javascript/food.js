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
    // For loop to push information into i
    for (let i = 0; i < 3; i++) {
      // Setting variables for the information that we want to use in the response
    var foodInfo = response.hits
    var foodName = foodInfo[i].recipe.label
    var foodImg = foodInfo[i].recipe.image
    var recipeUrl = $(`<a href="">Recipe Link</a>`)
    recipeUrl.attr("href",foodInfo[i].recipe.url)
    var foodYield = foodInfo[i].recipe.yield
    var calCount = Math.round(foodInfo[i].recipe.calories)
    var ingredients = foodInfo[i].recipe.ingredientLines
    
    
    // Pushing the information from the API into the HTML
    $(`#food-name${[i]}`).text(foodName)
    $(`#foodImg${[i]}`).attr("src",foodImg)
    $(`#food-info${[i]}`).append("Serving Size: "+foodYield+`<br>`)
    $(`#food-info${[i]}`).append("Total Calories: "+calCount+`<hr>`)
    for (let j = 0; j < ingredients.length; j++) {
      var itemList = $(`<li>`+ingredients[j]+`</li>`)
      $(`#food-info${[i]}`).append(itemList)
    }  
    $(`#food-info${[i]}`).append(recipeUrl)
    
    // Testing and debugging
  //   console.log(foodInfo)
  //   console.log(ingredients)
  //   console.log(foodImg)
  }
  })


})


