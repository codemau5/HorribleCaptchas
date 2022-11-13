tiles = document.getElementsByClassName("rc-imageselect-tile");
for (var i=0; i < tiles.length; i++) {
  tiles[i].onclick = function(){
      this.classList.toggle("rc-imageselect-tileselected");
  }
};



