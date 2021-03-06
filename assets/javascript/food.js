// Creating an empty global array to contain dailyMeal and sessionStorage
var dailyMeal = [];
sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));

$(document).ready(function () {
  $(`#foodBtn`).on("click", function () {
    // Clear information on the click.
    $(`.food-info`).empty();
    // Changing the css of #foodCol to reveal after information has been pushed
    $(`#foodCol`).css("display", "block");

    // Prevent the page from refreshing
    event.preventDefault();

    var foodUrl = "https://api.edamam.com/search?to=25&q=";
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
    }).then(function (response) {
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

  // Creating new variables to contain the card info
  // var mealName0 = ;
  // var mealName1 = ;
  // var mealName2 = ;

  // Testing and debugging
  // console.log(mealName0);
  // console.log(mealName1);
  // console.log(mealName2);


  // Buttons to get dailyMeal from sessionStorage, push the information, and save back into storage with recipe names'
  $(document).on("click", "#addBtn0", function () {
    console.log("test")
    dailyMeal = JSON.parse(sessionStorage.getItem("dailyMeal"));
    dailyMeal.push($(`#food-name0`)[0].innerText);
    console.log(dailyMeal);
    sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));
    $(`#mealList`).empty();
    for (let i = 0; i < dailyMeal.length; i++) {
      $(`#mealList`).append($(`<li>${dailyMeal[i]}</li>`))
    }
  })
  $(document).on("click", "#addBtn1", function () {
    dailyMeal = JSON.parse(sessionStorage.getItem("dailyMeal"));
    dailyMeal.push($(`#food-name1`)[0].innerText);
    console.log(dailyMeal);
    sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));
    $(`#mealList`).empty();
    for (let i = 0; i < dailyMeal.length; i++) {
      $(`#mealList`).append($(`<li>${dailyMeal[i]}</li>`))
    }
  });
  $(document).on("click", "#addBtn2", function () {
    dailyMeal = JSON.parse(sessionStorage.getItem("dailyMeal"));
    dailyMeal.push($(`#food-name2`)[0].innerText);
    console.log(dailyMeal);
    sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));
    $(`#mealList`).empty();
    for (let i = 0; i < dailyMeal.length; i++) {
      $(`#mealList`).append($(`<li>${dailyMeal[i]}</li>`))
    }
  });
  $(`#btn-clear`).on("click", function () {
    dailyMeal = [];
    sessionStorage.setItem("dailyMeal", JSON.stringify(dailyMeal));
    $(`#mealList`).empty();

  })
});





