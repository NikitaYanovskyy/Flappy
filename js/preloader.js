window.onload = function () {
  // document.body.classList.add('loaded_hiding');
function start () {
  //document.querySelector('.zirov').classList.add("load");
  document.body.scrollTo(pageYOffset, 0);
  window.scrollTo(pageYOffset, 0);
  document.body.style.overflowY = 'hidden';
      // //document.querySelector('.zirov').classList.add("load");
      // document.body.scrollTo(pageYOffset, 0);
      // window.scrollTo(pageYOffset, 0);
      // document.body.style.overflowY = 'hidden';
      // document.body.scrollTo(pageYOffset, 0);
      setTimeout(function(){
        //document.querySelector('.zirov').classList.add("nol");
        $(".header_wrapper").addClass("act");
        
        let textBox = document.querySelector('.text_box');
        let textBox1 = document.querySelector('.text_box1');
        textBox.classList.remove("text_play");
        textBox.classList.remove("text_closed");
        setTimeout(function(){
          textBox1.classList.add("text_play");
        },600)
      },4000)
      
    window.addEventListener('scroll', () => {
        
    });
  }
  window.setTimeout(async function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
    let textBox5 = document.querySelector('.text_box5');
    textBox5.classList.remove("text_play");
    textBox5.classList.add("text_closed");
    await start()
  }, 1100);
}
