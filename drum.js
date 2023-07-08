let totalDrumButtons = document.querySelectorAll(".drum").length


// If a button is clicked
for (var i = 0; i < totalDrumButtons ; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
        let btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        anime(btnInnerHTML);
    }
    );
    
}

// If a key is pressed
document.addEventListener('keypress', function(key1){
    makeSound(key1.key);
    anime(key1.key)
});

// Audio corresponding to keyboard letter or letter on a button
function makeSound(keyBoard){
    switch (keyBoard) {
        case "w":
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            let kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break
        case "s":
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break
        case "d":
            let tom1 = new Audio ("sounds/tom-1.mp3");
            tom1.play();
            break
        case "j":
            let tom2 = new Audio ("sounds/tom-2.mp3");
            tom2.play();
            break
        case "k":
            let tom3 = new Audio ("sounds/tom-3.mp3");
            tom3.play();
            break    
        case "l":
            let tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break
        default: console.log(btnInnerHTML);
    }
    
}


function anime(keyboardPress){
    let activeBtn = document.querySelector("."+ keyboardPress);

    activeBtn.classList.add("pressed")

    setTimeout(function(){activeBtn.classList.remove("pressed");},300)
}