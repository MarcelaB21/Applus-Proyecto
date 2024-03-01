
  document.addEventListener('DOMContentLoaded', () => {
   //Slider
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems,{
      indicar:false,
      height:500,
      duration:500,
      interval:3000
    });
  //Menu
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });



  