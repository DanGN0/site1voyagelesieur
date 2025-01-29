


document.addEventListener("DOMContentLoaded", function(event){
    //console.log("DOM Loaded");

    document.querySelector(".js-plus").addEventListener("click", function(){
        // alert("Hello");

        var mavariable=document.querySelector(".conteneur-transport-visible")

        // alert(mavariable);

        if(mavariable){
            document.querySelector(".conteneur-transport").classList.add("conteneur-transport-invisible")
            document.querySelector(".conteneur-transport").classList.remove("conteneur-transport-visible")
        }
        else{
            document.querySelector(".conteneur-transport").classList.remove("conteneur-transport-invisible")
            document.querySelector(".conteneur-transport").classList.add("conteneur-transport-visible")
        }
    })
})