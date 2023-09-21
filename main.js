const buttons = document.querySelectorAll('.button')
//console.log(buttons)

buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        //console.log(e)
        if(e.target.id == "grey") document.querySelector('body').style.backgroundColor = e.target.id;
        if(e.target.id == "blue") document.querySelector('body').style.backgroundColor = e.target.id;
        if(e.target.id == "white") document.querySelector('body').style.backgroundColor = e.target.id;
        if(e.target.id == "yellow") document.querySelector('body').style.backgroundColor = e.target.id;
        if(e.target.id == "purple") document.querySelector('body').style.backgroundColor = e.target.id;
    })
})