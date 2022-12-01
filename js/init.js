window.onload = function(){
    bod = document.getElementById("body")
    bod.style.fontFamily = localStorage.getItem("fontt") ?? "kwfontregular";
}

function changeStyle(){
    bod = document.getElementById("body")

    if(bod.style.fontFamily == "kwfontregular")
    {
        bod.style.fontFamily = "bluenesia";
        localStorage.setItem("fontt", bod.style.fontFamily);
    }
    else
    {
        bod.style.fontFamily = "kwfontregular";
        localStorage.setItem("fontt", bod.style.fontFamily);
    }
}