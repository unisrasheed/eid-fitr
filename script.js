const endDate = "21 April 2023 12:01 AM ";

const days = document.getElementById('days')
const hours = document.getElementById("hr");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");




function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  console.log(end)
  console.log(now)
    if(diff < 0){
    alert('Eid Mubarak')
    return
  }
  days.innerHTML = Math.floor(diff/3600/24);
  hours.innerHTML = Math.floor((diff/3600)%24);
  minutes.innerHTML = Math.floor((diff/60)%60);
  seconds.innerHTML = Math.floor(diff % 60);
  

  setTimeout('clock()', 1000 );


}
clock();
