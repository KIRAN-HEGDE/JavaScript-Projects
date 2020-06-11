const hex_vars = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const printer = document.getElementById('bg-color-printer');


function getHex() {
    var hexColor = "#";
    for(var i = 0; i < 6; i++){
        index = Math.floor(Math.random() * hex_vars.length)
        hexColor += String(hex_vars[index]);
    }
    return hexColor;
}


btn.addEventListener("click", function(){
    var color = getHex();
    //console.log(color);
    document.body.style.backgroundColor = color;
    printer.innerHTML = color;
});
