$(document).ready(function () {
    var drinkUrl = "https://the-cocktail-db.p.rapidapi.com/list.php?i=list";
    var drinkAPI = "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1";
    var drinkChoices = "";
    var liquorType = "";


    var drinkQueryUrl = drinkUrl+ "apikey=" + drinkAPI + "a=" + drinkChoices + "i=" + liquorType;


    $.ajax({
        url: drinkQueryUrl,
        method: "GET"
    }).then(function (response) {
       

    });

    $("#drinkcoicebtn").on("click", function(event) {


})


