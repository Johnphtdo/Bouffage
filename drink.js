$(document).ready(function () {
    var drinkUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?";
    var drinkChoicesUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    var liquorType = "Gin";


    var drinkQueryUrl = drinkUrl + "a=" + drinkChoicesUrl + "i=" + liquorType;


    $.ajax({
        url: drinkQueryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(drinkUrl);
        console.log(drinkChoicesUrl)

    });
})
