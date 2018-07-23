function startTime() {
    
var d = new Date('July 7, 2018')
var t = new Date()
var since = t -d
var days = parseInt(since/86400000)
var hours = parseInt((since%86400000)/3600000)
var mins = parseInt(since%3600000/60000)
var secs = parseInt(since%60000/1000)
//var msecs = parseInt(since%1000)
    document.getElementById('days').innerHTML =
    days
   document.getElementById('hours').innerHTML =
   hours
document.getElementById('ht').innerHTML =
   hour(hours)
   document.getElementById('mins').innerHTML =
    mins
 document.getElementById('mt').innerHTML =
    minute(mins)
   document.getElementById('secs').innerHTML =
    secs
  
  
var t = setTimeout(startTime,1000)
var name = document.getElementById('ttitle')

name.onclick = function() {
 var win=window.open('https://twitter.com/search?q=%23adeosungate&src=typd', '_blank')
  win.focus()
}

}

function hour(h) {
  if(h>1){return " Hours "}
  else{return " Hour "}
}

function minute(m) {
  if(m>1){return " Minutes "}
  else{return " Minute "}
}
