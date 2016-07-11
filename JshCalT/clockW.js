// Utility functions for date and time programming.
// JavaScript by Peter Hayes http://www.peter-hayes.freeserve.co.uk/
// Copyright 2001-2002
// This code is made freely available but please keep this notice.
// I accept no liability for any errors in my coding but please
// let me know of any errors you find. My address is on my home page.

//  Javascript 1.2 includes getFullYear but Netscape 4.6 does not supply it.
//added this month string function YYC

function day(da)
{
switch (da) {

case 0:
da = "Shabbos";
break;
case 1:
da = "Sunday";
break;
case 2:
da = "Monday";
break;
case 3:
da = "Tuesday";
break;
case 4:
da = "Wednesday";
break;
case 5:
da = "Thursday";
break;
case 6:
da = "Friday";
break;
case 7:
da = "Shabbos";
break;
}
 return da
}


function mth(m){
if(m==0){ms="January"}
if(m==1){ms="February"}
if(m==2){ms="March"}
if(m==3){ms="April"}
if(m==4){ms="May"}
if(m==5){ms="June"}
if(m==6){ms="July"}
if(m==7){ms="August"}
if(m==8){ms="September"}
if(m==9){ms="October"}
if(m==10){ms="November"}
if(m==11){ms="December"}

return ms
}


function getFullYear(now) {
  var year = now.getYear();
  if (year==0) {year=2000};
  if (year<1900) {year=year+1900};
  return year;
}

function datestring(year,month,day) {
// provides a locale independent format - year:month:day
  var datestr = "";  datestr += year;
  datestr += ((month < 10) ? ":0" : ":") + month;
  datestr += ((day < 10) ? ":0" : ":") + day;
  return datestr;
}

function hmstring(t) {
// takes hours and returns hh:mm
  var hours=t;
  while (hours >= 24) {hours-=24;}
  while (hours < 0) {hours+=24;}
  var minutes=Math.round(60.0*(hours-Math.floor(hours)));
  hours=Math.floor(hours);
  if (minutes >= 60) {hours+=1; minutes-=60;}
  if (hours >= 24) {hours-=24;}
  var hmstr=(t < 0) ? "-" : "";
  hmstr=((hours < 10) ? "0" : "")+hours;
  hmstr+=((minutes < 10) ? ":0" : ":")+minutes;
  return hmstr;
}

function hmsstring(t) {
// takes hours and returns hh:mm:ss
  var hours = Math.abs(t);
  var minutes = 60.0*(hours-Math.floor(hours));
  hours=Math.floor(hours);
  //var seconds = Math.ceil(60.0*(minutes-Math.floor(minutes)));
 var seconds = Math.round(60.0*(minutes-Math.floor(minutes)));
  minutes=Math.floor(minutes);
  if (seconds >= 60) { minutes+=1; seconds-=60; }
  if (minutes >= 60) { hours+=1; minutes-=60; }
  if (hours >= 24) { hours-=24; }
  var hmsstr=(t < 0) ? "-" : "";
  hmsstr=((hours < 10) ? "0" : "" )+hours;
  hmsstr+=((minutes < 10) ? ":0" : ":" )+minutes;
  hmsstr+=((seconds < 10) ? ":0" : ":" )+seconds;
  return hmsstr;
}

// The timer variables and the functions stop/startclock and showtime
// are used to update the UTC date and time form on my pages.

  var timerID = null;
  var timerRunning = false;

  function stopclock (){
    if (timerRunning) clearTimeout(timerID);
    timerRunning = false;
  }


  function startclock () {
    stopclock();
    showtime();
  }
  function showtime () {
    var now   = new Date();
    var year  = getFullYear(now);
    var month   = now.getUTCMonth()+1;
    var day     = now.getUTCDate();
    var hours = now.getUTCHours();
    var minutes = now.getUTCMinutes();
    document.date.ldate.value=datestring(year,month,day);
    document.date.ltime.value=hmstring(hours+minutes/60.0);
    timerID = setTimeout("showtime()",60000);
    timerRunning = true;
  }

function showupdated () {
// Writes to page Last updated on year:month:day at hh:mm
  var now   = new Date()//(document.lastModified);
  var year  = getFullYear(now);
  var month   = now.getMonth()+1;
  var day     = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds()
  document.write("Last updated on "+datestring(year,month,day));
  document.write(" at "+hmstring(hours+minutes/60));
}

