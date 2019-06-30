

  function toggleMenu(){
    var menuItems = document.getElementById('menuItems').getElementsByTagName('a')
    for(var i=0;i<menuItems.length;i++){
        // console.log(i,menuItems[i]);
        menuItems[i].classList.toggle("invisible");
        
    }
    // console.log(document.getElementById('menuItems').getElementsByTagName('a'));
  }