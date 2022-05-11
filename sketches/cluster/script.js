let gallery = document.getElementById("gallery");

for (i=1; i<=100 ; i++){
gallery.innerHTML += "<a href='images/" + i +".png' target='_blank' class='thumbnail'><img src='images/" + i + ".png' class='thumbnail'></a>"
}