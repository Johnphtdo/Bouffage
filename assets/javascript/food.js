// Creating an empty array to contain dailyMeal
var dailyMeal = [];
sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));

$(document).ready(function() {
  $(`#foodBtn`).on("click", function() {
    // Clear information on the click.
    $(`.food-info`).empty();
    // Changing the css of #foodCol to reveal after information has been pushed
    $(`#foodCol`).css("display", "block");

    // Prevent the page from refreshing
    event.preventDefault();

    var foodUrl = "https://api.edamam.com/search";
    var foodAPI = "&app_id=$b64e001c&app_key=$8203f05bcefbb343beaae6139be4661d";
    var foodItem = $(`#mainIngredient`)
      .val()
      .trim()
      .replace(/\s/g, "-")
      .toLowerCase();
    var foodTimeFrame = $(`#mealTypes`)
      .val()
      .trim()
      .toLowerCase();
    var foodCal = `500-${$(`#customRange2`)
      .val()
      .trim()}`;
    var foodDiet = $(`#dietTypes`)
      .val()
      .trim()
      .toLowerCase();
    var foodHealth = "";
    if ($(`#healthTypes` == "none")) {
      foodHealth = "alcohol-free";
    } else {
      foodHealth = $(`#healthTypes`)
        .val()
        .trim()
        .toLowerCase();
    }

    var foodAllergies = $(`#allergenTypes`)
      .val()
      .trim()
      .toLowerCase();

    var foodQueryUrl =
      foodUrl +
      "?to=25&q=" +
      foodItem +
      "&mealType=" +
      foodTimeFrame +
      "&calories=" +
      foodCal +
      "&diet=" +
      foodDiet +
      "&health=" +
      foodHealth +
      "&excluded=" +
      foodAllergies +
      foodAPI;
    console.log(foodQueryUrl);

    $.ajax({
      url: foodQueryUrl,
      method: "GET"
    }).then(function(response) {
      // For loop to push information into i
      for (let i = 0; i < 3; i++) {
        // Setting variables for the information that we want to use in the response
        var foodInfo = response.hits;
        var foodName = foodInfo[i].recipe.label;
        var foodImg = foodInfo[i].recipe.image;
        var recipeUrl = $(`<hr> <a href="" target="_blank">Recipe Link</a>`);
        recipeUrl.attr("href", foodInfo[i].recipe.url);
        var foodYield = foodInfo[i].recipe.yield;
        var calCount = Math.round(foodInfo[i].recipe.calories);
        var ingredients = foodInfo[i].recipe.ingredientLines;

        // Creating an Add button for each card

        var addBtn = $(
          `<br><button type="button" id="addBtn${[i]}">Save Meal</button>`
        );

        // Pushing the information from the API into the HTML
        $(`#food-name${[i]}`).text(foodName);
        $(`#foodImg${[i]}`).attr("src", foodImg);
        $(`#food-info${[i]}`).append("Serving Size: " + foodYield + `<br>`);
        $(`#food-info${[i]}`).append("Total Calories: " + calCount + `<hr>`);
        for (let j = 0; j < ingredients.length; j++) {
          var itemList = $(`<li>` + ingredients[j] + `</li>`);
          $(`#food-info${[i]}`).append(itemList);
        }
        $(`#food-info${[i]}`).append(recipeUrl);
        $(`#food-info${[i]}`).append(addBtn);

        // Creating new variables to contain the card info
        // Testing and debugging
        // console.log(foodInfo)
        // console.log(ingredients)
        // console.log(foodImg)
      }
      var cardInfo0 = $(`#food-card0`);
      var cardInfo1 = $(`#food-card1`);
      var cardInfo2 = $(`#food-card2`);

      // Testing and debugging
      console.log(cardInfo0);
      console.log(cardInfo1);
      console.log(cardInfo2);
    });
  });
});
