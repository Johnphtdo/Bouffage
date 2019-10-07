
$(document).ready(function () {

    $("#drinkchoicebtn").on("click", function (event) {
        var drinkAPI = "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1";
        var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/" + drinkAPI + "/filter.php?"
        var drinkChoice = $("#drinktypeform").children("input:checked").attr("data-drinktype");
        var liquorType = "";


      
        var drinkQueryUrl = drinkUrl + "a=" + drinkChoice + "&i=" + liquorType;
        console.log(drinkQueryUrl)
   


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

        $.ajax(settings).then(function (response) {
            console.log(response);
            //For loop to push information to i
            for (let i = 0; i < 3; i++){
            //Setting variables for the information that we want to use in the respnse 
            var drinkInfo = response.drinks
            var drinkName = drinkInfo[i].strDrink
            var drinkImage = drinkImage[i].strDrinkThumb
            
            //Pushing the information from the API into the HTML 

        
        }
            
        });




    })
});


