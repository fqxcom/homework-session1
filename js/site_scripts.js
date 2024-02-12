var partnerImages = [
    "partner-bustour.png",
    "partner-cabinrental.png",
    "partner-campingadv.png",
    "partner-collegetours.png",
    "partner-rentalbike.png",
    "partner-tourgroup.png"
];
var ul = document.getElementById("partners");

partnerImages.forEach(function(imageSrc) {
    var li = document.createElement("li");
    li.className = "partner";
    var img = document.createElement("img");
    img.src = "images/partners/" + imageSrc;
    img.alt = "Partner " + imageSrc.split('-').slice(1, -1).join(' ');
    li.appendChild(img);
    ul.appendChild(li);
});