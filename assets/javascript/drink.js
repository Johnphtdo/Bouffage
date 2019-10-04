$(document).ready(function () {

    $("#drinkchoicebtn").on("click", function (event) {
        var drinkUrl = "https://the-cocktail-db.p.rapidapi.com/list.php?i=list";
        var drinkAPI = "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1";
        var drinkChoice = $("#drinktypeform").children("input:checked").attr("data-drinktype");
        var liquorType = "Bourbon";



        var drinkQueryUrl = drinkUrl+ "apikey=" + drinkAPI + "a=" + drinkChoice + "i=" + liquorType;
        console.log(drinkQueryUrl)


        $.ajax({
            url: drinkQueryUrl,
            method: "GET"
        }).then(function (response) {


        });





        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://the-cocktail-db.p.rapidapi.com/filter.php?i=" + liquorType ,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "f583c76719msh4620570ef703476p1f33bdjsn9768c87b23c1"
            }
        }
        
        $.ajax(settings).then(function (response) {
            console.log(response);
        });
        



    })
});


