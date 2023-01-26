$(document).ready(function() {

    // Start your code from here
    
    let animals = [
        "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
        "bird", "ferret", "turtle", "sugar glider", "chinchilla",
        "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
        "capybara", "teacup pig", "serval", "salamander", "frog"
      ];
    
    
      function populateButtons(array){
        $("#animal-buttons").empty();
    
    array.forEach(element => {
        
        var a = $("<button>");
        a.text(element)
        a.addClass("animal-button")
        a.attr("data-type",element)
        $("#animal-buttons").append(a);
    });
    }
    
    // La logica del click de cada boton para hacer la llamda al API
    $("#animal-buttons").on("click", ".animal-button", function() {
    
        $("#animals").empty();
    
    })
    
    
    // La lógica del click de cada imagen para "intercambiar las urls"
    $("#animals").on("click", ".animal-image", function(){
    
    
    })
    
    
    // La lógica del formulario para agregar mas botones a la lista
    $("#add-animal").on("click", function(e) {
        e.preventDefault();
         let animal = $("#animal-input").val().trim()
         animals.push(animal)
      
    
    })
    
    
    populateButtons(animals);
    });
    