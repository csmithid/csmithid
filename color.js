var colors = ['DarkOrange','Gold','YellowGreen','DodgerBlue'];
var random_color = colors[Math.floor(Math.random()*colors.length)];
var modify = document.getElementsByClassName('colored');
var i;
for(i=0;i<modify.length;i++){
  modify[i].style.color = random_color;
}
