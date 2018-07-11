//RED: 255,0,0 / ORANGE: 255,150,0 / YELLOW: 255,255,0 / GREEN: 0,255,0 / BBLUE: 255, 255,0 / BLUE: 0,0,255 / PURPLE: 255,0,255

//Direction: 0 = do nothing, 1 = add, 2 = subtract

var hue = {
  r:255,
  g:0,
  b:0,
  rD:0, //Directional variables, tells the function when to change r, g or b
  gD:1,
  bD:0
};

$(document).ready(function () {

  window.setInterval(function () {
    $(".colors").css("color", "rgb(" + hue.r + "," + hue.g + "," + hue.b + ")");
    changeHue(hue);
  }, 20);

  function changeHue(h) {
    switch(h.rD) {
      case 1:
        if (h.r < 255) {
        	h.r = h.r + 5;
        } else {
          h.rD = 0;
          h.bD = 2;
          h.b = h.b - 5;
        }
        break;
      case 2:
        if (h.r > 0) {
        	h.r = h.r - 5;
        } else {
          h.rD = 0;
          h.bD = 1;
          h.b = h.b + 5;
        }
        break;
    }

    switch(h.gD) {
      case 1:
        if (h.g < 255) {
        	h.g = h.g + 5;
        } else {
          h.gD = 0;
          h.rD = 2;
          h.r = h.r - 5;
        }
        break;
      case 2:
        if (h.g > 0) {
        	h.g = h.g - 5;
        } else {
          h.gD = 0;
          h.rD = 1;
          h.r = h.r + 5;
        }
        break;
    }

    switch(h.bD) {
      case 1:
        if (h.b < 255) {
        	h.b = h.b + 5;
        } else {
          h.bD = 0;
          h.gD = 2;
          h.g = h.g - 5;
        }
        break;
      case 2:
        if (h.b > 0) {
        	h.b = h.b - 5;
        } else {
          h.bD = 0;
          h.gD = 1;
          h.g = h.g + 5;
        }
        break;
    }

    return h;
  }
});
