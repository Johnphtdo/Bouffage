
$(document).ready(function () {

    $("")
    $("#generate-btn").on("click", function (event) {
        var drinkAPI = "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1";
        var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPI + "/filter.php?" + "/lookup.php?"
        var drinkChoice = $("#drinktypeform").children("input:checked").attr("data-drinktype");
        var liquorType = $("#mainIngredient").val().trim();


        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + liquorType,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1"
            }
        }
        console.log(settings)
        $.ajax(settings).then(function (response) {
            console.log(response);
            //For loop to push information to i
            for (let i = 0; i < 3; i++){
            //Setting variables for the information that we want to use in the respnse 
            var drinkInfo = response.drinks
            var drinkName = drinkInfo[i].strDrink
            var drinkImage = drinkInfo[i].strDrinkThumb
            var drinkId = drinkInfo[i].idDrink
            var drinkInstructions = drinkInfo[i].strInstructions
            var drinkIngredients = drinkInfo[i].strIngredient
            var drinkMeasurments = drinkInfo[i].strMeasure
        
            // Added see more button to all the cards 
            var addBtn = $(`<br><button type="button" id="addBtn${[i]}">See More</button>`)
            
            //Pushing the information from the API into the HTML 
            var mainDiv = $("<div class='col-sm-3 card m-1 meal drink'>");
            var img = $("<img class='img-fluid drinkImg'>").attr({src: drinkImage, alt: drinkName})
            var cardDiv = $("<div class='card-img-overlay'>");
            var nameDiv = $("<h5 class='card-title text-white drinkName'>").text(drinkName).appendTo(cardDiv)     
            var seeMore = $(drinkId ,drinkInstructions, drinkIngredients ,drinkMeasurments)
            
            
           
           
           mainDiv.append(img);
           mainDiv.append(nameDiv);
           mainDiv.append(cardDiv);
           mainDiv.append(addBtn)
           mainDiv.append(seeMore);
         
           $("#drinksDiv").append(mainDiv);
           

        }
    //   var cardInfo0 = $(`#drink-card0`);
    //   var cardInfo1 = $(`#drink-card1`);
    //   var cardInfo2 = $(`#drink-card2`);
  
        });




    })
});


