// JavaScript by Peter Hayes http://www.peter-hayes.freeserve.co.uk/
// Copyright 2001-2002
// This code is made freely available but please keep this notice.
// The calculations are approximate but should be good enough for general use,
// I accept no responsibility for errors in astronomy or coding.
// some changes have been made by Rabbi Charytan to the returning array - 2002
function SunRiseSet(year,month,day,latitude,longitude) {
  // Based on method in sci.astro FAQ by Paul Schlyter
  // returns an array holding rise and set times in UTC hours
  // NOT accurate at high latitudes 
  // latitude = your local latitude: north positive, south negative
  // longitude = your local longitude: east positive, west negative
  // Calculate the Suns position at noon local zone time
  var d=dayno(year,month,day,12.0-longitude/15);
  var oblecl=23.4393-3.563E-7*d;
  var w=282.9404+4.70935E-5*d;
  var M=356.0470+0.9856002585*d;
  e=0.016709-1.151E-9*d;
  var E=M+e*(180/Math.PI)*sind(M)*(1.0+e*cosd(M));
  var A=cosd(E)-e;
  var B=Math.sqrt(1-e*e)*sind(E);
  var slon=w+atan2d(B,A);
  var sRA=atan2d(sind(slon)*cosd(oblecl),cosd(slon));
  while(sRA<0)sRA+=360; while(sRA>360)sRA-=360; sRA=sRA/15;
  var sDec=asind(sind(oblecl)*sind(slon));
  // Time sun is on the meridian
  var lst=local_sidereal(year,month,day,12-longitude/15,longitude);
  var MT=12.0-longitude/15+sRA-lst;
  while(MT<0)MT+=24; while(MT>24)MT-=24;
  // hour angle

  var cHA0=(sind(-0.833)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
  //var cHA2=(sind(-8.5)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
  var cHA01=(sind(-25.9)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
  var cHA00=(sind(-16.1)-sind(latitude)*sind(sDec))/(cosd(latitude)*cosd(sDec));
  var HA0=acosd(cHA0);
  HA0=rev(HA0)/15;
  //var HA2=acosd(cHA2);
  //HA2=rev(HA2)/15;
var HA00=acosd(cHA00);
  HA00=rev(HA00)/15;
var HA01=acosd(cHA01);
  HA01=rev(HA01)/15;
  // return rise and set times and chatzsois and other zmanim
  return new Array((MT-HA0),(MT+HA0),(MT-HA0/2.0),(MT-HA0/3.0),MT,(MT+0.5),(MT+HA0*7.0/12.0),(MT+HA0*19.0/24.0),(MT-HA00),(MT-HA01),(MT-HA0/6.0));
}



