let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
  let date = new Date();

  // Getting hour, mins, secs from date
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30 * hh + mm / 2;
  let mRotation = 6 * mm;
  let sRotation = 6 * ss;

  hr.style.transform = `rotate(${hRotation}deg)`;
  min.style.transform = `rotate(${mRotation}deg)`;
  sec.style.transform = `rotate(${sRotation}deg)`;
}

setInterval(displayTime, 1000);

/*
  hours ke liye formula = 12 hour bajane ke liye 360deg rotate hoga
   to 1 hour ke liye =(360deg/12) = 30deg

   (1) formula  = for  h hour = (30h+m/2)

  minute  ke liye formula  = 60 minute rotation karane ke liye 360deg rotate hoga
  to 1 minute ke liye = (360/60) = 6 deg
  (2)  formula = for m minute = (m/2)  
  
  second ke liye formula = 60 second rotation karane ke liye 360 deg rotate hoga
  to 1 second  ke liye = (360/60) = 6 deg

*/

