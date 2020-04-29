const display = document.querySelector(".display");
display.textContent = "";
let needscls = false;

function CLS() {
    display.textContent = "";
    needscls = false;
}

function setOpFunc(clame, sign) {
    document.querySelector(clame).addEventListener(
        "mousedown",
        function(event) {
            needscls = false;
            display.textContent += sign;
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
        }
    );
}

document.querySelector(".cls").addEventListener("mousedown", CLS);

document.querySelector(".evaluate").addEventListener(
    "mousedown",
    function(event) {
        display.textContent = eval(display.textContent);
        needscls = true;
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