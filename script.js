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
    
        for (let i = 0; i <animals.length;i++) {
    
            let a = $("<button>")
            a.addClass("animal")
            a.attr("data-name", animals[i]),
            a.text(animals[i])
            
            $("#animal-buttons").append(a)
          }
        
    }
    
    // La logica del click de cada boton para hacer la llamda al API
    $("#animal-buttons").on("click", ".animal", function() {
        let animalName = $(this).attr("data-name")
        var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=81nR4UTAbEUOMDiG3T90vaRvjJbxNdCp&q=${animalName}&limit=10&offset=0&rating=g&lang=en`;
        
        $.ajax({
            url:queryURL,
            method: "GET"
          }).then(function(response){

            for(let i=0;i<response.data.length;i++){


                $("#animals").append(`<p>'${response.data[i].rating}'</p>`);
                $("#animals").append(`<img src= '${response.data[i].images.fixed_height.url}' >`);

            }

          })
        
    })
    
    
    // La lógica del click de cada imagen para "intercambiar las urls"
    $("#animals").on("click", ".animal-image", function(){
    
        if(state=="still"){
            $(this).attr("src",$(this).attr("data-animate"))
            $(this).attr("data-state","animate");
        }
        else{
            $(this).attr("src",$(this).attr("data-still"))
            $(this).attr("data-state","still");
        }
    
    })
    
    
    // La lógica del formulario para agregar mas botones a la lista
    $("#add-animal").on("click", function(e) {
        e.preventDefault();
         let animal = $("#animal-input").val().trim()
         animals.push(animal)
         populateButtons()
      
    
    })
    
    
    populateButtons(animals);
    });
    