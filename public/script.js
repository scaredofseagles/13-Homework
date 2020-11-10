// FIXME: write on-clicks

$(function(){
    // submit new burger to burger list
    $('.addBurger').on('click', function(event){
        event.preventDefault()
        console.log('clicked submit button!')

        newBurger = {
            name: $('.burgerForm').val().trim()
           // isDevoured: 'false'
        }
        // send POST request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log(`Adding burger`)
            location.reload()
        })

        
        
    })

    $('devourBurger').on('click', function(event){
        event.preventDefault()

        var id = $(this).data("id")
        console.log(id)

        const newStatus = {
            isDevoured: true
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newStatus
        }).then(function(){
            console.log(`Changed burger status to`)
            location.reload()
        })
        playSound()
    })
    
    function playSound(){
        var audio = new Audio('bite-sound.mp3')
        audio.play()
    }
})