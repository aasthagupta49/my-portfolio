var icon = document.getElementById("icon");

        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
                icon.src= "lightmode.png";
            } else{
                icon.src = "darkmode.png";
            }
        }