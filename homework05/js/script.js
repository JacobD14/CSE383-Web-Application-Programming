function generatePrime() {
    var n = document.getElementById("n").value;
    var nums = "";
    for (var i = 2; i <= n; i++) {
        var prime = true;
        for (var j = 2; j <= i; j++) {
            if (i%j === 0 && j !== i) {
                prime = false;
            }
        }
        if (prime === true) {
            nums = nums + i + ", ";
        }
    }
    document.getElementById("output").innerHTML = nums;
}

function updateCss() {
    var red = document.getElementById("R").value;
    var green = document.getElementById("G").value;
    var blue = document.getElementById("B").value;

    document.getElementById("cssOutput").style.color = "rgb(" + red + "," + green + "," + blue + ")";

    var left = document.getElementById("left").checked;
    var center = document.getElementById("center").checked;
    var right = document.getElementById("right").checked;
    
    if (left) {
        document.getElementById("cssOutput").style.textAlign = "left";
    } else if (right) {
        document.getElementById("cssOutput").style.textAlign = "right";
    } else {
        document.getElementById("cssOutput").style.textAlign = "center";
    }

    var bold = document.getElementById("bold").checked;
    var italic = document.getElementById("italic").checked;
    var underline = document.getElementById("underline").checked;

    if (bold) {
        document.getElementById("cssOutput").style.fontWeight = "bold";
    } else {
        document.getElementById("cssOutput").style.fontWeight = "normal";
    }
    if (italic) {
        document.getElementById("cssOutput").style.fontStyle = "italic";
    } else {
        document.getElementById("cssOutput").style.fontStyle = "normal";
    }
    if (underline) {
        document.getElementById("cssOutput").style.textDecoration = "underline";
    } else {
        document.getElementById("cssOutput").style.textDecoration = "none";
    }
}