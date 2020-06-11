const colors= [ "aqua","black" , "blue", "fuchsia", "gray", "grey", "green", "lime", "maroon", "navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];
const btn = document.getElementById('btn');
const printer = document.getElementById('bg-color-printer');

function getRandomIndex(){
    return Math.floor(Math.random() * colors.length);
}
//console.log(getRandomIndex());
//console.log(btn);

btn.addEventListener("click", function(){
    index = getRandomIndex();
    document.body.style.backgroundColor = colors[index];
    printer.innerHTML = colors[index];
});
