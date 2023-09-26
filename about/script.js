document.addEventListener("DOMContentLoaded", function() {
    let pressButton = document.getElementById("pressButton");
    pressButton.addEventListener("click",function(){
        console.log("pressed");
        document.querySelector(".whoWeAre").style.display="none";
        document.querySelector(".Press").style.display="block";
        document.getElementById("aboutButton").style.color="#919491";
        document.getElementById("pressButton").style.color="black";
        document.querySelector(".aboutDiv").style.borderBottom="1px solid black"
        document.querySelector(".pressDiv").style.borderBottom="5px solid black"
    });

    let aboutButton = document.getElementById("aboutButton");
    aboutButton.addEventListener("click",function(){
        console.log("pressed");
        document.querySelector(".whoWeAre").style.display="block";
        document.querySelector(".Press").style.display="none";
        document.getElementById("aboutButton").style.color="black";
        document.getElementById("pressButton").style.color="#919491";
        document.querySelector(".pressDiv").style.borderBottom="1px solid black"
        document.querySelector(".aboutDiv").style.borderBottom="5px solid black"
    });
});
