
$(document).ready(function () {

    $("#drinkchoicebtn").on("click", function (event) {
        var drinkAPI = "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1";
        var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPI + "/filter.php?"
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
            console.log(drinkId)
            
            //Pushing the information from the API into the HTML 
           var mainDiv = $("<div class='col-sm-3 card m-1 meal drink'>");
           var img = $("<img class='img-fluid drinkImg'>").attr({src: drinkImage, alt: drinkName})
           var nameDiv = $("<h5 class='card-title text-white drinkName'>").text(drinkName).appendTo($("<div class='card-img-overlay'>"))     
           var cardDiv = $("<div class='card-body'>");
           
           
           
           mainDiv.append(img);
           mainDiv.append(nameDiv);
           mainDiv.append(cardDiv);
           $("#drinksDiv").append(mainDiv);
           
        }
            
        });




    })
});


