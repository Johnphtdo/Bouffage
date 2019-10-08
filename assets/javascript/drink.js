
$(document).ready(function () {

    
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
            var drinkInfo = response.drinks;
            var drinkName = drinkInfo[i].strDrink;
            var drinkImage = drinkInfo[i].strDrinkThumb;
            var drinkId = drinkInfo[i].idDrink;
            
            // Added see more button to all the cards 
            // var addBtn = $(`<button type="button" id="seemore-btn${[i]}">See More</button>`)
            
            //Pushing the information from the API into the HTML 

            var cardDiv = $(` <div class="col-sm-3 card m-1 meal" id="food-card0" >
            <img class="img-fluid foodImg" id="foodImg0" src="${drinkImage}" class="card-img-top" alt="${drinkName}">
            <div class="card-img-overlay">
                <h5 class="card-title text-white food-name" id="food-name0">${drinkName}</h5>
            </div>
            <div class="card-body">
                <p class="card-text food-info" id="food-info0">
                
                </p>
            </div>
            </div>`);

        //     var mainDiv = $("<div class='col-sm-3 card m-1 meal drink'>");
        //     var img = $("<img class='img-fluid drinkImg card-img-top'>").attr({src: drinkImage, alt: drinkName});
        //     var cardDiv = $("<div class='card-img-overlay'>");
        //     var nameDiv = $("<h5 class='card-title text-white drinkName'>").text(drinkName).appendTo(cardDiv);   
            var idSettings = {

                "async": true,
                "card": cardDiv,
                "crossDomain": true,
                "url": "https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                    "x-rapidapi-key": "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1"
        
                }
            }

            $.ajax(idSettings).then(function(idResponse){
                console.log(idResponse)
                console.log(this.card)
                

                var ingredients = [];
                for (let j=1; j < 15; j++){
                  if (idResponse.drinks[0][`strIngredient${j}`] === null){
                        break
                    }
                    else{
                        var currentIngredient=idResponse.drinks[0][`strIngredient${j}`];
                        ingredients.push(currentIngredient)
                   

                        $(this.card.find("#food-info0")).append($("<p>"+currentIngredient+"</p>"))
                        
                    }

                }
            
               
            
                console.log(ingredients)
                
                
            })
            
            
            // mainDiv.append(nameDiv);
            // mainDiv.append(cardDiv);
            // mainDiv.append(img);
            // mainDiv.append(addBtn);
           
            
            
            
            
            $("#drinksDiv").append(cardDiv);
            // $(`#drinkInfo${[i]}`).append(addBtn);
          
          
           

        }
   
  
        });




        // $("#seemore-btn").on("click", function (event){

        // })
    })
});


