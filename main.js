const display = document.querySelector(".display");
display.textContent = "";
let needscls = false;

let click = new Audio("audio/click.m4a");
let chunk = new Audio("audio/chunk.m4a");
let ding = new Audio("audio/ding.m4a");

function CLS() {
    display.textContent = "";
    chunk.play();
    needscls = false;
}

function setOpFunc(clame, sign) {
    document.querySelector(clame).addEventListener(
        "mousedown",
        function(event) {
            needscls = false;
            display.textContent += sign;
            chunk.play();
        }
    );
}

function setNumFunc(clame, num) {
    document.querySelector(clame).addEventListener(
        "mousedown",
        function(event) {
            if(needscls)
                CLS();
            display.textContent += num;
            click.play();
        }
    );
}

document.querySelector(".cls").addEventListener("mousedown", CLS);

document.querySelector(".evaluate").addEventListener(
    "mousedown",
    function(event) {
        display.textContent = eval(display.textContent);
        needscls = true;
        ding.play();
    }
);

setOpFunc(".add","+");
setOpFunc(".subtract","-");
setOpFunc(".multiply","*");
setOpFunc(".divide","/");

setNumFunc(".one","1");
setNumFunc(".two","2");
setNumFunc(".three","3");
setNumFunc(".four","4");
setNumFunc(".five","5");
setNumFunc(".six","6");
setNumFunc(".seven","7");
setNumFunc(".eight","8");
setNumFunc(".nine","9");
setNumFunc(".zero","0");
setNumFunc(".decimal",".");