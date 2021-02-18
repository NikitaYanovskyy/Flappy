var images = new Array();
var imagesPreloader = new Array();
var currentLocation = 0;
var currentLocationPreloader = 0;
var totalImages = 787;
var totalImagesPreloader = 115;
var rLine = false;
// timeout 50ms
var ci = 1;

var inits = true;

var finishL = true;

var rev = false;

var startR = false;

let direction = true;

let startScroll = false;

let dicountActive = false;
let discountLine = false;

var scrollTop = 0;
// update logic please > TEST ( bad code, a want sleep)
var testWhell = true;
var keyI = ["253", "654", "787"];
var folder = ["first", "second", "third"];
folder.forEach(function (value, key) {
  for (var i = ci; i <= keyI[key]; i++) {
    var img = new Image();
    ci++;
    var slug = "000" + i;
    img.src = `./img/bg/${value}/${i.toString().padStart(4, "0")}.jpg`;
    i <= totalImagesPreloader ? imagesPreloader.push(img) : images.push(img);
    console.log("Foreach");
  }
});

var c = document.getElementById("canvas1");
var ctx = c.getContext("2d");

// off animation for < 1200 px
go();
window.addEventListener('resize', go );
function go() {
  var widthPage = document.documentElement.clientWidth;
  if (widthPage < 1200) {
    document.querySelector('canvas#canvas1').style.display= 'none';
    document.body.style.overflowY = "scroll";
    startScroll = true;
    mouseWheel = null;
    // textAnimation(670);
    console.log(widthPage);
  }
  // else{
  //   document.querySelector('canvas#canvas1').style.display= 'block';
  // }
}
// ------------------------------

window.addEventListener("scroll", () => {
  if (!testWhell) {
    /*  debugger; */
    const html = document.documentElement;
    scrollTop = html.scrollTop;
    let scrollTextBox5 = document.getElementsByClassName("text_box5")[0];
    scrollTextBox5.classList.remove("text_play");
    scrollTextBox5.classList.add("text_closed");
    console.log("scrollTop ", scrollTop);

    if(scrollTop == 800 ){
      $(".box6-container").css({
        top: 70 + "px",
        position: "fixed",
      });
      document.body.style.overflowY = "hidden";
      // testWhell = true;

      const beforeAfterContainer = document.querySelector('.box6');
        const before = beforeAfterContainer.querySelector('.box6-before');
        const beforeText = beforeAfterContainer.querySelector('.box6-beforePosition');
        const afterText = beforeAfterContainer.querySelector('.box6-afterPosition');
        const handle = beforeAfterContainer.querySelector('.box6-handle');
        let widthChange = 10;
        console.log(widthChange);

        
      beforeAfterContainer.addEventListener('wheel', (e) => {
        let containerWidth = beforeAfterContainer.offsetWidth;
        widthChange += e.deltaY/2;
        let newWidth = widthChange * 100 / containerWidth;

        if(newWidth < 0  ){
          scrollTop-=20;
          widthChange = 10;
          $(".box6-container").css({
            top: 0 + "px",
            position: "relative",
          });
          document.body.style.overflowY = "scroll";
        }
        if(newWidth >= 100){
          scrollTop+=20;
          widthChange = 90;
          $(".box6-container").css({
            top: 0 + "px",
            position: "relative",
          });
          document.body.style.overflowY = "scroll";
        }
        if (newWidth > 0 && newWidth < beforeAfterContainer.offsetWidth - 10) {
            before.setAttribute('style', "width:" + newWidth + "%;");
            // afterText.setAttribute('style', "z-index: 1;");
            handle.setAttribute('style', "left:" + newWidth + "%;");
        }
      });
    }
    // else{
    //   $(".box6-container").css({
    //     top: 0 + "px",
    //     position: "relative",
    //   });
    // }
    // disable-active canvas
    if (scrollTop >= 1) {
      document.querySelector("canvas#canvas1").style.display = "none";
      clearC();
    } else if (scrollTop < 1) {
      document.querySelector("canvas#canvas1").style.display = "block";
      // if(currentLocation > 662){
      //   currentLocation = 660;
      // }
      clearC();
    }

    if (scrollTop < 1 && dicountActive == true) {
      finishL = true;
      startR = true;
      // scrollPos = 4;
      startScroll = false;
      // $(".box_img.box4_img").css({
      //   opacity: 1,
      // });
    }

    if (scrollTop <= 1) {
      /*  testWhell = true; */
      finishL = true;
      startR = true;
      // scrollPos = 4;
      startScroll = false;
      scrollTextBox5.classList.remove("text_play");
      scrollTextBox5.classList.add("text_closed");
    }
    if (!dicountActive) {
      if (scrollTop <= 760) {
        scrollTextBox5.classList.remove("text_closed");
        scrollTextBox5.classList.add("text_play");
      } else if (scrollTop > 760) {
        scrollTextBox5.classList.remove("text_play");
        scrollTextBox5.classList.add("text_closed");
      }
    } else if (dicountActive == true && discountLine == false) {
      if (scrollTop <= 760) {
        scrollTextBox5.classList.remove("text_closed");
        scrollTextBox5.classList.add("text_play");
      } else if (scrollTop > 760) {
        scrollTextBox5.classList.remove("text_play");
        scrollTextBox5.classList.add("text_closed");
      }
    }else if (dicountActive == true && discountLine == true) {
      if (scrollTop <= 1900) {
        scrollTextBox5.classList.remove("text_closed");
        scrollTextBox5.classList.add("text_play");
      } else if (scrollTop > 1900) {
        scrollTextBox5.classList.remove("text_play");
        scrollTextBox5.classList.add("text_closed");
      }
    }
  }
});

var getDisc = document.querySelector(".discount");
getDisc.addEventListener("click", function () {
  if(currentLocation < 140 && dicountActive == false){
    discountLine = true;
  }
  dicountActive = true;
  testWhell = false; 
  clearC();
  $(".box_img.box4_img").css({
    // top: 100 + "vh",
    opacity: 0,
  });
  $(".text_box4").css({
    opacity: 0,
  });
  var textBox05 = document.querySelector(".text_box5");
  textBox05.classList.remove("text_play");
  textBox05.classList.add("text_closed");
  console.log("getFormDisc");
  document.querySelector("canvas#canvas1").style.display = "none";
  document.body.style.overflowY = "scroll";
  // finishL = false;
  // startR = true;
  rLine = true;
  // rev = true;
  direction = false;
  scrollPos = 7;
  currentLocation = 661;
  startScroll = true;
  textAnimation(670);
  // offsetTop + "100vh"//порівняти чи висота екрану рівна офсеттоп
});

var whyPillow = document.querySelector(".why-pillow");
whyPillow.addEventListener("click", function(){
  currentLocation = 541;
  textAnimation(541);
  proc = 99;
  delta = 1;
  clearC();
  var textBox3 = document.querySelector(".text_box3");
  textBox3.classList.remove("text_play");
  textBox3.classList.add("text_closed");
  var textBox4 = document.querySelector(".text_box4");
  textBox4.classList.remove("text_closed");
  textBox4.classList.add("text_play");

});

// go to top
function scrollToTop (duration) {
  // cancel if already on top
  if (document.scrollingElement.scrollTop === 0) return;

  const totalScrollDistance = document.scrollingElement.scrollTop;
  let scrollY = totalScrollDistance, oldTimestamp = null;

  function step (newTimestamp) {
      if (oldTimestamp !== null) {
          // if duration is 0 scrollY will be -Infinity
          scrollY -= totalScrollDistance * (newTimestamp - oldTimestamp) / duration;
          if (scrollY <= 0) return document.scrollingElement.scrollTop = 0;
          document.scrollingElement.scrollTop = scrollY;
      }
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

var getLogo = document.querySelector(".logo");
getLogo.addEventListener("click", function(){
  // document.body.scrollIntoView({behavior: "smooth"});
  scrollToTop(500);
  startR = false;
  rLine = false;
  rev = false;
  dicountActive = false;
  currentLocation = 1;
  textAnimation(currentLocation);
  // delta = 1;
  $(".box_img.box4_img").css({
    top: 100 + "vh",
    opacity: 1,
  });
  $(".text_box4").css({
    opacity: 0,
  });
  scrollTop = 0;
  scrollPos = 100;
  direction = true;
  startScroll = false;
  document.body.style.overflowY = "hidden";
  document.querySelector("canvas#canvas1").style.display = "block";
  // testWhell = true;
  clearC();
  setTimeout(function () {
    var textBoxR5 = document.querySelector(".text_box5");
  textBoxR5.classList.remove("text_play");
  textBoxR5.classList.remove("text_closed");
  textBoxR5.classList.add("text_closed");
    ctx.drawImage(images[currentLocation], 0, 0, 1920, 1080);
  }, 550);

});

// end go to top

var mouseWheel = function () {
  var evt = null; // avoids a new 'draw' function generation
  window.addEventListener(
    "wheel",
    function (e) {
      if (testWhell || scrollTop <= 1) {
        // e.preventDefault();
        e.stopImmediatePropagation();
        if (!evt) {
          // if set, we already are waiting
          if (finishL) {
            if (!startScroll) {
              evt = e; // store our event
              console.log("requestAnimationFrame(draw)");
              requestAnimationFrame(draw);

              // wait next screen refresh to fire
            } else {
              document.body.style.overflowY = "scroll";
            }
          }
        }
      }
    },
    { passive: true }
  );
  function draw() {
    console.log("Draw");
    var e = evt;
    setTimeout(function () {
      var delta = Math.max(-1, Math.min(1, e.deltaY));
      //if (currentLocation >= 349 && delta == 1) return false
      if (delta == 1) {
        currentLocation += 1;
        direction = true;
        if(currentLocation == 607){
          startScroll = true;
        }
      }
      if (delta == -1) {
        currentLocation -= 1;
        direction = false;
        if(currentLocation == 607 || currentLocation == 606){
          startScroll = false;
        }
      }
      if (currentLocation < 0) currentLocation = 0;
      if (currentLocation >= totalImages - 1) currentLocation = totalImages - 1;

      console.group("Var Log");
        console.log("Whell");
        console.log("evt", evt);
        console.log("discountActive", dicountActive);
        console.log("startR", startR);
        console.log("rLine", rLine);
        console.log("currentLocation", currentLocation);
        console.log("finishL", finishL);
        console.log("rev", rev);
      console.groupEnd("Var Log");
      textAnimation(currentLocation);
      if(currentLocation >= 465 && currentLocation <= 538 && delta == 1){
        currentLocation = 540;
      }else if(currentLocation >= 465 && currentLocation <= 538 && delta == -1){
        currentLocation = 464;
      }
      if (currentLocation >= 539 && currentLocation <= 543) {
        console.log("one");
        document.body.style.overflowY = "hidden";
        clearC();
      }else if (currentLocation >= 607){
        finishL = true;
        startR = true;
        rev = true;
        console.log("info");
        var scrollTextBox5 = document.querySelector(".text_box5");
        scrollTextBox5.classList.remove("text_closed");
        scrollTextBox5.classList.remove("cartTxtZum");
        scrollTextBox5.classList.add("cartTxtZum");
        document.body.style.overflowY = "scroll";
        $(".text_box5").css({
          opacity: 1,
        });
        testWhell = false;
        currentLocation = 608;
        clearC();
      }else if(currentLocation <= 607 && rev == true){
        scrollTop = 0;
        scrollPos = 100;
        direction = true;
        startScroll = false;
        rev = false;
        document.querySelector("canvas#canvas1").style.display = "block";
        document.body.style.overflowY = "hidden";
        startScroll = false;
        finishL = true;
        evt = false;
        testWhell = true;
        var scrollTextBox5 = document.querySelector(".text_box5");
        scrollTextBox5.classList.remove("cartTxtZum");
        document.body.style.overflowY = "scroll";
        $(".text_box5").css({
          opacity: 0,
        });
      } else {
          console.log("else");
          inits = true;
          setImage(currentLocation);
      }

      evt = null; // so the throttler knows we can kick again
    }, 0);
  }
};
function clearC() {
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "white";
}
let prevInd = 0;
let scrollPos = 100;
const textAnimation = (index) => {
  console.log("textAnimation", index);
  let textBox = document.querySelector(".text_box");
  let textBox1 = document.querySelector(".text_box1");
  let textBox2 = document.querySelector(".text_box2");
  let textBox3 = document.querySelector(".text_box3");
  let textBox4 = document.querySelector(".text_box4");
  // let textBox5 = document.querySelector('.text_box5');
  let textPlay = document.querySelector(".text_play");
  let textPlayReverse = document.querySelector(".text_play");
  let textClose = document.querySelector(".text_close");
  console.log("textAnimation", index);
  textBox.classList.remove("text_play");
  textBox1.classList.remove("text_play");
  textBox2.classList.remove("text_play");
  textBox3.classList.remove("text_play");
  textBox4.classList.remove("text_play");
  // textBox5.classList.remove("text_play");
  textBox1.classList.add("text_closed");
  textBox2.classList.add("text_closed");
  textBox3.classList.add("text_closed");
  textBox4.classList.add("text_closed");
  // textBox5.classList.add("text_closed");
  if (index >= 0 && index <= 11) {
    textBox.classList.remove("text_play");
    textBox.classList.remove("text_closed");
    textBox1.classList.add("text_play");
    textBox1.classList.add("text_fixed");
  }
  if (index >= 25 && index <= 137) {
    textBox2.classList.remove("text_play");
    textBox2.classList.remove("text_closed");
    textBox2.classList.add("text_play");
    textBox2.classList.add("text_fixed");
  }
  if (index >= 138 && index <= 540) {
    $(".text_box4").css({
      opacity: 0,
    });
    textBox3.classList.remove("text_play");
    textBox3.classList.remove("text_closed");
    textBox3.classList.add("text_play");
    textBox3.classList.add("text_fixed");
  }
  // if (index >= 541 && index <= 650) {
    if (index >= 540 && index <= 657) {
      var scrollCoef = 0.011;
      var count = 1 - (100 - (scrollPos-1)) * scrollCoef;
      //alert(count);
      var textBoxOp4 = document.querySelector(".text_box4");
      // textBoxOp4.style.cssText = `opacity: ${count}`; 
      console.log(`opacity: ${count}`);
      if(direction){
        currentLocation ++;
        scrollPos -=110;
              }else{
                currentLocation--;
                scrollPos +=110;
      }
      //currentLocation += 3;
  
      if(index == 540  && scrollPos >= 98){
        textBox4.classList.remove("text_play");
        textBox4.classList.remove("text_fixed");
      }else{
        console.log("541");
        document.querySelector(".box_img.box4_img").classList.remove("hide");
        textBox4.classList.remove("text_play");
        textBox4.classList.remove("text_closed");
        // textBox4.classList.add("text_play");
        textBox4.classList.add("text_fixed");
      }

    if (direction) {
      console.log("%c Direction7 ", "background: red;", direction);
      if (scrollPos == 1) return;
      console.log("542");
      scrollPos--;
      prevInd++;
      console.log("proc", scrollPos);
      $(".box_img.box4_img").animate(
        {
          top: scrollPos + "%",
        },
        5
      );
    } else {
      console.log("%c Direction100 ", "background: green;", direction);
      if (scrollPos == 100) return;
      console.log("543");
      scrollPos++;
      prevInd--;
      console.log("proc", scrollPos);
      $(".box_img.box4_img").animate(
        {
          top: scrollPos + "%",
        },
        5
      );
    }
  }
};

var setImage = function (newLocation) {
  console.log("images.length: ", images.length);
  if (!images[newLocation]) return;
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "white";
  console.log("set ", currentLocation);
  if (currentLocation >= 0 && currentLocation <= 137) {
    if (currentLocation >= 0 && currentLocation <= 45) {
      ctx.drawImage(
        images[newLocation],
        0,
        currentLocation,
        images[newLocation].width,
        images[newLocation].height
      );
    } else {
      ctx.drawImage(
        images[newLocation],
        0,
        50,
        images[newLocation].width,
        images[newLocation].height
      );
    }
  } else if (currentLocation >= 138 && currentLocation <= 538) {
    ctx.drawImage(
      images[newLocation],
      -100,
      0,
      images[newLocation].width,
      images[newLocation].height
    );
  } else {
    ctx.drawImage(
      images[newLocation],
      0,
      0,
      images[newLocation].width,
      images[newLocation].height
    );
  }
};
images[0].onload = function () {
  $("header").css({
    transform: "translate(0px, -100px)",
  });
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "white";
  for (let k = 0; k <= imagesPreloader.length - 1; k++) {
    setTimeout(function () {
      ctx.drawImage(imagesPreloader[k], 0, 0, 1920, 1080);
      if (k == imagesPreloader.length - 1) {
        startS();
      }
    }, k * 50);
  }
  function startS() {
    $("header").css({
      transform: "translate(0px, 0px)",
    });
    ctx.drawImage(images[currentLocation], 0, 0, 1920, 1080);
    mouseWheel();
  }
};

