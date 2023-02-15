/*DOORS AND WINDOWS*/
"use strict";
const path = "/wp-content/themes/gl-windows/inc/img/";
const backsplash = document.getElementById("backsplash");
const doubleDoor = document.getElementById("double-door-rectangle");
const singleDoor = document.getElementById("single-door-rectangle");
const handles = document.getElementsByClassName("handles");
const sidelight = document.getElementsByClassName("sidelight");
const door = document.getElementsByClassName("door-sidelight");
const svgDoor = document.getElementsByClassName("svg-door");
const svgSingleDoor = document.getElementsByClassName("svg-single-door");

const bgWindow = document.getElementById("bg-background-window");
const svg = document.getElementById("svg");
const svgWindow = document.getElementsByClassName("svg-window");

svgDoor[0].style.fill = "url(#door-color-walnut)";
svgSingleDoor[0].style.fill = "url(#single-door-color-walnut)";

// backsplash color
var backsplashColor = document.getElementsByClassName("backsplash-color");
for (var bc = 0; bc < backsplashColor.length; bc++) {
    backsplashColor[bc].onclick = changeBacksplashColor;
}
function changeBacksplashColor(e) {
    document.getElementById("backsplash-picker").style.backgroundColor = "#ffffff";
    document.getElementById("backsplash-picker").value = "FFFFFF";
    backsplash.style.backgroundColor = "transparent";
    let bg = this.getAttribute("data-bg");
    document.getElementById("backsplash-background").src = path + "wall/big/" + (bg == null ? "wall-03" : bg) + ".jpg";
}
function changeBacksplashCustomColor(picker) {
    document.getElementById("backsplash-background").src = path + "wall/big/wall-03.jpg";
    backsplash.style.backgroundColor = picker.toHEXString();
}

//door type
var doorType = document.getElementsByClassName("door-type");
for (var d = 0; d < doorType.length; d++) {
    doorType[d].onclick = changeDoor;
}
function changeDoor(e) {
    let title = e.target.getAttribute("data-title");
    document.getElementById("door-type").innerHTML = title;
    let type = this.getAttribute("data-type");
    let slight = this.getAttribute("data-sidelight");
    for (var di = 0; di < doorInserts.length; di++) {

        doorInserts[di].style.display = "none";
    }
    for (var ds = 0; ds < doorSidelight.length; ds++) {
        doorSidelight[ds].style.display = "none";
    }
    for (var j = 0; j < document.getElementsByClassName(type).length; j++) {
        document.getElementsByClassName(type)[j].style.display = "block";
    }
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let inserts = document.getElementsByClassName("inserts-" + type);
    for (var dt = 0; dt < inserts.length; dt++) {
        inserts[dt].style.display = "block";
    }
    document.getElementById("door").src = path + "door/" + type + ".png";

    if (type == "door-01") {
        document.getElementById("double-door").style.display = "block";
        document.getElementById("door-handles").style.display = "block";
        document.getElementById("handles").src = path + "handles/handles-01.png";
        document.getElementById("single-door").style.display = "none";
        document.getElementById("single-door-handles").style.display = "none";
    } else if (type == "door-11") {
        document.getElementById("double-door").style.display = "none";
        document.getElementById("door-handles").style.display = "none";
        document.getElementById("handles").src = path + "handles/handles-02.png";
        document.getElementById("single-door").style.display = "block";
        document.getElementById("single-door-handles").style.display = "block";
    }
}

//door color
var doorColor = document.getElementsByClassName("door-color");
for (var dc = 0; dc < doorColor.length; dc++) {
    doorColor[dc].onclick = changeDoorColor;
}
function changeDoorColor(e) {
    let hex = this.getAttribute("data-hex");
    doubleDoor.style.fill = hex;
    singleDoor.style.fill = hex;
    let url = e.target.getAttribute("data-url");
    let title = e.target.getAttribute("data-title");
    document.getElementById("door-color").innerHTML = title;

    for (var dc = 0; dc < svgDoor.length; dc++) {
        svgDoor[dc].style.fill = "url(#door-color-" + url +")";
    }
    for (var sc = 0; sc < svgSingleDoor.length; sc++) {
        svgSingleDoor[sc].style.fill = "url(#single-door-color-" + url +")";
    }
}

//door inserts
var doorInserts = document.getElementsByClassName("door-inserts");
for (var di = 0; di < doorInserts.length; di++) {
    doorInserts[di].onclick = changeDoorInserts;
}
function changeDoorInserts(e) {
    for (var a = 0; a < door.length; a++) {
        door[a].style.display = "none";
    }
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let inserts = this.getAttribute("data-inserts");
    let doorModel = document.getElementsByClassName(inserts);
    document.getElementById("door").src = path + "door/" + inserts + ".png";
    for (var i = 0; i < doorModel.length; i++) {
        doorModel[i].style.display = "block";
    }
}

//door sidelight
var doorSidelight = document.getElementsByClassName("door-sidelight");
for (var ds = 0; ds < doorSidelight.length; ds++) {
    doorSidelight[ds].onclick = changeSidelight;
}
function changeSidelight(e) {
    for (var s = 0; s < sidelight.length; s++) {
        sidelight[s].style.fill = "transparent";
    }
    let sidelightBg = this.getAttribute("data-hex");
    let sidelightType = this.getAttribute("data-sidelight");
    let type = document.getElementsByClassName(sidelightType);
    for (var h = 0; h < type.length; h++) {
        type[h].style.fill = sidelightBg;
    }
}

//handles color
var handlesColor = document.getElementsByClassName("handles-color");
for (var hc = 0; hc < handlesColor.length; hc++) {
    handlesColor[hc].onclick = changeHandlesColor;
}
function changeHandlesColor(e) {
    let handlesHex = this.getAttribute("data-handles-hex");
    for (var h = 0; h < handles.length; h++) {
        handles[h].style.fill = handlesHex;
    }
    let title = e.target.getAttribute("data-title");
    document.getElementById("handles-color").innerHTML = title;
}

// Background color
var bgWindowColor = document.getElementsByClassName("bg-color");
for (var bwc = 0; bwc < bgWindowColor.length; bwc++) {
    bgWindowColor[bwc].onclick = changeBgColor;
}
function changeBgColor(e) {
    document.getElementById("window-picker").style.backgroundColor = "#ffffff";
    document.getElementById("window-picker").value = "FFFFFF";
    bgWindow.style.backgroundColor = "transparent";
    let bgc = this.getAttribute("data-bg");
    console.log(bgc);
    document.getElementById("bg-window").src = path + "wall/big/" + (bgc == null ? "wall-06" : bgc) + ".jpg";
}
function changeBgCustomColor(picker) {
    document.getElementById("bg-window").src = path + "wall/big/wall-06.jpg";
    bgWindow.style.backgroundColor = picker.toHEXString();
}

//Window type
var windowType = document.getElementsByClassName("window-type");
for (var wt = 0; wt < windowType.length; wt++) {
    windowType[wt].onclick = changeWindow;
}
function changeWindow(e) {
    let window = this.getAttribute("data-type");
    let title = e.target.getAttribute("data-title");
    document.getElementById("type").innerHTML = title;
    for (var wc = 0; wc < svgWindow.length; wc++) {
        svgWindow[wc].style.display = "none";
    }
    let activeType = document.getElementsByClassName("svg-" + window);
    for (var at = 0; at < activeType.length; at++) {
        activeType[at].style.display = "block";
    }
    document.getElementById("window-type").src = path + "window/big/" + window + ".png";
}

var windowColor = document.getElementsByClassName("window-color");
for (var i = 0; i < windowColor.length; i++) {
    windowColor[i].onclick = changeWindowColor;
}

function changeWindowColor(e) {
    let hex = e.target.getAttribute("data-hex");
    let url = e.target.getAttribute("data-url");
    let title = e.target.getAttribute("data-title");
    document.getElementById("window-color").innerHTML = title;

    for (var wc = 0; wc < svgWindow.length; wc++) {
        svgWindow[wc].style.fill = "url(#window-color-" + url +")";
    }
}



//Visualizer calc
$(document).ready(function () {

    var doorPrice = 630, //base door price
        basePrice = 32, //base price of windows
        usdCoeffitient = 0.8, //usd coefficient
        hurricanePrice = 3.4, //hurricane glass additive
        temperedPrice = 5, //tempered glass additive
        
        colorNormal = "#000", //color of normal item marker
        colorActive = "#00bcd4", //color of active item marker
        colorDisabled = "#aaa", //color of disabled item marker

        totalPrice, //total price
        averageAreaRatio, //coefficient of the average area of windows and doors
        priceRatio, //price ratio
        sqFeet = $("#sq_ft"), //total area of windows and doors
        windowsQty = $("#windows_qty"), //number of windows
        entranceDoors = $("#entrance_doors"), //number of doors
        patioDoors = $("#patio_doors"), //number of rear doors
        currency, //currency selection
        energy, //energy efficiency of windows and doors
        color, //color of windows and doors
        glazing, //glazing of windows and doors
        soundproof, //soundproofing of windows and doors
        hurricane, //hurricane glass
        tempered; //strained glass

    $("#usd").val(usdCoeffitient);

    //price ratio function
    function ratio() {
        //coefficient of the average area of windows and doors
        averageAreaRatio = parseInt(+sqFeet.val() / (+windowsQty.val() + +entranceDoors.val() + +patioDoors.val()));

        //allowable error
        if (averageAreaRatio >= 6 && averageAreaRatio < 13) {
            priceRatio = 1.02;
        } else if (averageAreaRatio >= 13 && averageAreaRatio < 30 && averageAreaRatio != 20) {
            priceRatio = 1.01;
        } else if (averageAreaRatio >= 31) {
            priceRatio = 1.005;
        } else if (averageAreaRatio == 20) {
            priceRatio = 1;
        }
        return priceRatio;
    }

    ratio();

    //total price function
    function total() {
        currency = $(".form-control.currency:checked"),
            energy = $(".form-control.energy:checked"),
            color = $(".form-control.color:checked"),
            glazing = $(".form-control.glazing:checked"),
            soundproof = $(".form-control.soundproof:checked"),
            hurricane = $("#other-1"),
            tempered = $("#other-2");

        totalPrice = (priceRatio * +sqFeet.val() * basePrice + doorPrice * (+entranceDoors.val() + +patioDoors.val())) * +color.val() + +sqFeet.val() * (+energy.val() + +glazing.val() + +soundproof.val() + (+hurricane.val() / 100 * hurricanePrice + +tempered.val() / 100 * temperedPrice));
        $("#total").text(parseInt(+currency.val() * 0.92 * totalPrice, 10) + " - " + (parseInt(+currency.val() * 1.12 * totalPrice, 10)) + " " + currency.next("label").text());
    }

    total();

    //change settings
    $("#sq_ft, #windows_qty, #entrance_doors, #patio_doors, .form-control.currency, .form-control.color, .form-control.energy, .form-control.glazing, .form-control.soundproof, .form-control.other").on("change input keyup keydown keypress", function () {
        total();
    });

    //active item marker
    $(".form-control.radio").each(function () {
        $(this).next("label").css({"color": colorNormal});
        $(this)[0].disabled == true ? $(this).next("label").css({"color": colorDisabled}) : $(this);
        $(this)[0].checked == true ? $(this).next("label").css({"color": colorActive}) : $(this);
    });

    //color of the filled options window
    $(".tab-content input").on("change", function () {
        $(".form-control.radio").each(function () {
            $(this).next("label").css({"color": colorNormal});
            $(this)[0].disabled == true ? $(this).next("label").css({"color": colorDisabled}) : $(this);
            $(this)[0].checked == true ? $(this).next("label").css({"color": colorActive}) : $(this);
        });
        if ($(this).val() == "") {
            $(".wizard-footer").find("input[name=next]").prop("disabled", true);
        }
    });

    //color of disabled item marker
    $("input[type=radio]").click(function () {
        $(this).prop("checked") ? $(this).next("label").css({"color": colorActive}) : $(this).next("label").css({"color": colorNormal});
    });

});

