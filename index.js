var opacity = 0; 
var intervalID = 0;


function fadeInLogo(){
    intervalID = setInterval(showLogo,80);
    
}

function showLogo(){
    
    var appleLogo = document.getElementById("appleLogo");
    opacity = Number(window.getComputedStyle(appleLogo).getPropertyValue("opacity"));
    if (opacity<1) {
        opacity=opacity+0.1;
        appleLogo.style.opacity=opacity
    } else {
        clearInterval(intervalID);
    }
}

window.onload = fadeInLogo();

function fadeInWWDC(){
    intervalID = setInterval(showWWDC,100);
    
}

function showWWDC(){
    
    var wwdcImg = document.getElementById("wwdcImg");
    
    opacity = Number(window.getComputedStyle(wwdcImg).getPropertyValue("opacity"));
    if (opacity<1) {
        opacity=opacity+0.1;
        wwdcImg.style.opacity=opacity
        
    } else {
        clearInterval(intervalID);
        
    }
}

window.onload = fadeInWWDC();

// function fadeInText(){
//     intervalID = setInterval(showTxt,100);
//     console.log("fadeInText");
// }

// function hello(){
//     console.log("Hello");
// }

// function showTxt(){
    
//     var wwdcImg = document.getElementById("text-animation");
//     var i = 0;
//     opacity = Number(window.getComputedStyle(wwdcImg).getPropertyValue("opacity"));
//     if (opacity<1) {
//         opacity=opacity+0.1;
//         wwdcImg.style.opacity=opacity
//         i++;
//     } else {
//         clearInterval(intervalID);
        
//     }
// }

// window.onload = fadeInText();

//To get fade in on scroll

const fadeInAnim = document.querySelectorAll(".fadeInAnim");
const fadeInImg = document.querySelectorAll(".fadeInImg");
const fadeInBtn = document.querySelectorAll(".fadeInBtn");

document.addEventListener("scroll", function(){
    fadeInAnim.forEach((paragraph) =>{
        if(isInView(paragraph)){
            paragraph.classList.add("intro-visible")
        }
    });
   
});

document.addEventListener("scroll", function(){
    fadeInImg.forEach((image) =>{
        if(isInView(image)){
            image.classList.add("fadeInImg-Visible");
        }
    });
});

document.addEventListener("scroll", function(){
    fadeInBtn.forEach((button) =>{
        if(isInView(button)){
            button.classList.add("fadeInBtn-Visible");
        }
    });
});

function isInView(element){
    const rect = element.getBoundingClientRect();
    return(
        rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    );
}

// Slider Movement

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter>5){
        counter = 1;
    }
}, 5000);
