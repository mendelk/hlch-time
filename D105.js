var hbYr = 1 * hbYr
var kYr = 1 * kYr
var  c0 = 0
 var  H0 = 0
 var  d0 = 0
var  hc0 = 0
var  dh0 = 0
var engYr
var flagBack=0
var flagYZ = false
var xal=""
var fName=""


function HBy(EYR){
return EYR + 3761
}


function koy(hbYr)
{
var y = 1 * hbYr;
var mzr = Math.floor(y/19)
var k= y % 19;
var RHsep = 1 * RHsep

 switch ( k ) {

case 2:
	kYr = 1;
        RHsep = 22;
	addMth = 0;
	break;

case 5:
	kYr = 1;
        RHsep = 18;
	addMth = 1;
	break;

case 10:
	kYr = 1;
        RHsep = 24;
	addMth = 3;
	break;

case 13:
	kYr = 1;
        RHsep = 20;
	addMth = 4;
	break;

case 16:
	kYr = 1;
        RHsep = 16;
	addMth = 5;
	break;

case 1:
	kYr = 2;
        RHsep = 32;
	addMth = 0;
	break;

case 4:
	kYr = 2;
        RHsep = 29;
	addMth = 1;
	break;

case 7:
	kYr = 2;
        RHsep = 27;
	addMth = 2;
	break;

case 9:
	kYr = 2;
        RHsep = 34;
	addMth = 3;
	break;

case 12:
	kYr = 2;
        RHsep = 30;
	addMth = 4;
	break;

case 15:
	kYr = 2;
        RHsep = 28;
	addMth = 5;
	break;

case 18:
	kYr = 2;
        RHsep = 25;
	addMth = 6;
	break;

case 3:
	kYr = 3;
        RHsep = 11;
	addMth = 1;
	break;

case 6:
	kYr = 3;
        RHsep = 8;
	addMth = 2;
	break;

case 8:
	kYr = 3;
        RHsep = 16;
	addMth = 3;
	break;

case 11:
	kYr = 3;
        RHsep = 12;
	addMth = 4;
	break;

case 14:
	kYr = 3;
        RHsep = 9;
	addMth = 5;
	break;

case 17:
	kYr = 3;
        RHsep = 6;
	addMth = 6;
	break;

case 0:
	kYr = 3;
        RHsep = 14;
	addMth = 0;
	break;

	}

    if (kYr == 3) {
var YrS = "" + "M"
var MHB = "MEUBERES"
}
else
{ YrS = "P"
var MHB = "PSHUTA"
}
var sp = " "+kYr+"kYr"+" "+RHsep+"RHsep"+" "+k+"k"+" "+addMth+"addMth"+" " + MHB + " " + YrS + " " + mzr
var koy=sp.split(" "); 
 return koy  
}



function  machzorShairis(mchz, dmchz, hmchz, cmchz) {
// initalize  and determine amt of days, hrs, and chalokim
//in the 19yr cycles till this year from creation
 cmchz = 595 * mchz    // each 19 year cycle has 2d,16hrs,
                 //and 595chalokim
 hmchz = 16 * mchz    // beyond the exact number of weeks
 dmchz = 2 * mchz

 hcmchz = parseInt(cmchz / 1080)
 cmchz = cmchz % 1080
 hmchz = hmchz + hcmchz
 dhmchz = parseInt(hmchz / 24)
 hmchz = hmchz % 24
 dmchz = dmchz + dhmchz
  dmchz = dmchz % 7

return (" "+mchz+"mchz "+ dmchz+"dmchz "+ hmchz+"hmchz "+ cmchz+"cmchz")
}



function shairisAdd(d, H, c) {

      hc = Math.floor(c / 1080)
        c = c % 1080
              H = H + hc
                    dh = Math.floor(H / 24)
                      H = H % 24
                            d = d + dh
                              d = d % 7
shairisadd=(" " + d + " " + H + " " + c)
shairis=shairisadd.split(" ")
return (shairis)
}



function ERh(eyr) {
var eyr = 1 * eyr
var d = 1 * d


var erh = eyr % 28;

  switch (erh) {

 case 0:
d = 5;
break;

case 1:
d = 6;
break;
case 2:
d = 7;
break;
case 3:
d = 1;
break;
case 4:
d = 3;
break;
case 5:
d = 4;
break;
case 6:
d = 5;
break;
case 7:
d = 6;
break;
case 8:
d = 1;
break;
case 9:
d = 2;
break;
case 10:
d = 3;
break;
case 11:
d = 4;
break;
case 12:
d = 6;
break;
case 13:
d = 7;
break;
case 14:
d = 1;
break;
case 15:
d = 2;
break;
case 16:
d = 4;
break;
case 17:
d = 5;
break;
case 18:
d = 6;
break;
case 19:
d = 7;
break;
case 20:
d = 2;
break;
case 21:
d = 3;
break;
case 22:
d = 4;
break;
case 23:
d = 5;
break;
case 24:
d = 7;
break;
case 25:
d = 1;
break;
case 26:
d = 2;
break;
case 27:
d = 3;
break;
           }
   if (eyr < 1900) { d = d + 1}    //corrections for Gregorian cal
    if (eyr < 1800) { d = d + 1}
     if (eyr < 1600) { d = d + 1}
     
    if (eyr > 2100) { d = d - 1;if(d==0){d=7}}
    if (eyr > 2200) { d = d - 1;if(d==0){d=7}}
    if (eyr > 2300) { d = d - 1;if(d==0){d=7}}
//alert("eng d= "+d)
return d
} 


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

function mthN(N){
var m=99
if(N=="January"){m=0}
if(N=="February"){m=1}
if(N=="March"){m=2}
if(N=="April"){m=3}
if(N=="May"){m=4}
if(N=="June"){m=5}
if(N=="July"){m=6}
if(N=="August"){m=7}
if(N=="September"){m=8}
if(N=="October"){m=9}
if(N=="November"){m=10}
if(N=="December"){m=11}

return m
}

function dOw(m,d,y){
dWK=0
if (m <=2){
m=m+12
y=y-1
}
dayOfWeeK = (d + 2*m + Math.floor(3*(m+1)/5) +y + Math.floor(y/4) - Math.floor(y/100) + Math.floor(y/400) +2 )%7
return dayOfWeeK
}

function SRHd(Yhb) {
var RHsep=0
var hbcycl = Yhb%19
switch (hbcycl) {

                    case 1:
                          RHsep = 32; 
break;
                    case 2:
                          RHsep = 22; 
break;
                    case 3:
                          RHsep = 11; 
break;
                    case 4:
                          RHsep = 29; 
break;
                    case 5:
                          RHsep = 18; 
break;
                    case 6:
                          RHsep = 8; 
break;
                    case 7:
                          RHsep = 27; 
break;
                    case 8:
                          RHsep = 16; 
break;
                    case 9:
                          RHsep = 34; 
break;
                    case 10:
                          RHsep = 24; 
break;
                    case 11:
                          RHsep = 12; 
break;
                    case 12:
                          RHsep = 30; 
break;
                    case 13:
                          RHsep = 20; 
break;
                    case 14:
                          RHsep = 9; 
break;
                    case 15:
                          RHsep = 28; 
break;
                    case 16:
                          RHsep = 16; 
break;
                    case 17:
                          RHsep = 6; 
break;
                    case 18:
                          RHsep = 25; 
break;
                    case 0:
                          RHsep = 14; 
break;
}

return RHsep
}


function MT(HByr){
 var yh0=0
var yh0k=0


yh0=koy(HByr-1) 
yh0k=parseInt(yh0[3])
yh0addMth=parseInt(yh0[4]) 
var yi=1*yi
yi= (parseInt(yh0k*12)) + (parseInt(yh0addMth))

var c0=0
var H0=0
var d0=0

for(var i=0; i < parseInt(yi); i++){

   c0 +=  793
    H0 += 12
     d0 +=  1
       hc0 = Math.floor(c0 / 1080)
            c0 = c0 % 1080
 H0 +=  hc0
   dh0 = Math.floor(H0 / 24)
       H0 = H0 % 24
         d0 += dh0
           d0 = d0 % 7

}

var d1=0
var H1=0
var c1=0



yhx = machzorShairis(parseInt(yh0[7]),d1,H1,c1)
            yhxo=yhx.split(" ")

	dy=parseInt(yhxo[2])
	Hy=parseInt(yhxo[3])
	cy=parseInt(yhxo[4])

      dyr=d0+dy+2
	Hyr=H0+Hy+5
	 cyr=c0+cy+204
KYR1=koy(HByr)
var moladTishrei = shairisAdd(dyr,Hyr,cyr)+ "," +parseInt(KYR1[1])
//alert(moladTishrei)
return moladTishrei
}


function Dechia1(d,h) {
	if (h>=18){
	d = d+1
	}
	else {
	d=d
	}

return d
}

function Dechia2(d) {
	 if (d==1||d==4||d==6) {
	d=d+1}
	else {
	d=d
	}

return d
}

function Dechia3(k,d,h,c) {
	if ((k!=3&&d==3&&h==9&&c>=204)||(k!=3&&d==3&&h>9)){
	d=5
	}
	else {
	d=d
	}

return d
}

function Dechia4(k,d,h,c) {
	if ((k==2&&d==2&&h==15&&c>=589)||(k==2&&d==2&&h>15)){
	d=3
	}
	else {
	d=d
	}

return d
}


function DECH(k,d,h,c){
d0=d

if (d==3){
d=Dechia3(k,d,h,c)
if(d0!=d){d0=99}
}
if(d!=5&&d0==2){
d=Dechia4(k,d,h,c)
}
if(d!=3&&d!=5||d0==5||d0==3){
d=Dechia1(d,h)
d=Dechia2(d)
}
if (d==7){d=0}
//alert(d)
return d
}



function MK(KYR){ //kind of Jyear M or P
    if (KYR == 3) {
var YrS = "" + "M"
var MHB = "MEUBERES"
}
else
{ YrS = "P"
var MHB = "PSHUTA"}
return MHB
}

function RHaug(R,SEPr,eYR){
while(SEPr!=RH){
if (dOw(8,SEPr,eYR)==RH){SEPr=SEPr}
else
{SEPr=SEPr+1}
}
return SEPr
}

function ml(j,sy){
switch (j){
case 0:
k=30;
break;
case 1:
if(sy!="molei"){k=29}else{k=30};
break;
case 2:
if(sy=="choser"){k=29}else{k=30};
break;
case 3:
k=29;
break;
case 4:
k=30;
break;
case 5:
k=29;
break;
case 6:
k=30;
break;
case 7:
k=29;
break;
case 8:
k=30;
break;
case 9:
k=29;
break;
case 10:
k=30;
break;
case 11:
k=29;
break;
}
return k
}


function mlM(j,sy){
switch (j){
case 0:
k=30;
break;
case 1:
if(sy!="molei"){k=29}else{k=30};
break;
case 2:
if(sy=="choser"){k=29}else{k=30};
break;
case 3:
k=29;
break;
case 4:
k=30;
break;
case 5:
k=30;
break;
case 6:
k=29;
break;
case 7:
k=30;
break;
case 8:
k=29;
break;
case 9:
k=30;
break;
case 10:
k=29;
break;
case 11:
k=30;
break;
case 12:
k=29;
break;
}
return k
}




function toDay(){
d=new Date()
Xdate="("+(d.getMonth()+1) + "/"+d.getDate()+"/"+d.getFullYear()+")"
return Xdate
}

function toDate(){
d=new Date()
Xdate=""+(d.getMonth()+1) + "/"+d.getDate()
return Xdate
}


function mthL(N,Y)
{
if(N=="January"){L=31}
if(N=="February"){if(Y%4==0 && Y%100!=0 || Y%400==0){L=29}else{L=28}}
if(N=="March"){L=31}
if(N=="April"){L=30}
if(N=="May"){L=31}
if(N=="June"){L=30}
if(N=="July"){L=31}
if(N=="August"){L=31}
if(N=="September"){L=30}
if(N=="October"){L=31}
if(N=="November"){L=30}
if(N=="December"){L=31}
return L
}



function Dcn(fMonth,fDate,fYr){
engYr=fYr

{
if(mthN(fMonth) <=7){engYr--}

if (flagBack==0){

heint=(mthN(fMonth)+1)+"/"+fDate
var Eyr =engYr
EYR = parseInt(Eyr)

if (EYR < 1600){alert("ALL DATES PRIOR TO 1600 MAY NOT BE VALID")}
 HBY =HBy(EYR)

moladTishrei=MT(HBY) 
 mt=moladTishrei.split(","); 
for (i = 1; i < 4;  i++) {
	mt[i] = parseInt(mt[i]);
}



HBY2=HBY+1

moladTishrei2=MT(HBY2)

mt2=moladTishrei2.split(",")

for (i = 1; i < 4;  i++) {
	mt2[i] = parseInt(mt2[i])
}


mt[1]=DECH(mt[4],mt[1],mt[2],mt[3])
mt2[1]=DECH(mt2[4],mt2[1],mt2[2],mt2[3])



YD=((7-mt[1])+mt2[1])%7
if(YD==0){YD=7};
if (mt[4]==3){
YL=378+YD
}
else {
YL=350+YD
}
if (YL==353||YL==383){SY="choser"}
if (YL==354||YL==384){SY="ksidron"}
if (YL==355||YL==385){SY="molei"}

SEPrh=SRHd(HBY)
RH=0; SEPrh0=SEPrh
if (EYR<1900){SEPrh=SEPrh-1}
else if (EYR<1800){SEPrh=SEPrh-2}
else if (EYR<1700){SEPrh=SEPrh-3}
if (EYR<1582 ){SEPrh=SEPrh-14}
DaS = dOw(9,SEPrh,EYR);if (DaS==0){DaS=7}

RH=mt[1]
if (RH==0){RH=7}

	for (i=0;(i)<=(RH-DaS);i++){
            SEPrh = SEPrh+1; 
}
if (SEPrh-SEPrh0>=6) {SEPrh=SEPrh0-1}
var Ssep=" September "
if (SEPrh>30){SEPrh=SEPrh-30; Ssep=" October "}
//if (SEPrh<=0){SEPrh=31+SEPrh; Ssep=" August "}

Mrh=9; if (Ssep !=" September "){Mrh=10};
//if (Ssep ==" August "){Mrh=8;
//SEPrh=SEPaug(RH,SEPrh,EYR)
//}


FD=dOw(Mrh,SEPrh,EYR);if (FD==0){FD=7}
if (FD!=RH){
SEPrhO=SEPrh
SEPrh=SEPrh-1}
FD2=dOw(Mrh,SEPrh,EYR);if (FD2==0){FD2=7}
if (FD2!=RH){
SEPrh=SEPrhO+1}
if (SEPrh==0){Mrh=9;Ssep =" September ";SEPrh=30}
if((flagBack==0)&&(SEPrh>fDate)&&((Mrh-1)==(mthN(fMonth)))||((Mrh==10)&&mthN(fMonth)==8)||((Mrh==10)&&mthN(fMonth)==9&&SEPrh>fDate)){

engYr--

flagBack=1}



}
if (flagBack==1){

heint=(mthN(fMonth)+1)+"/"+fDate
var Eyr =engYr


EYR = parseInt(Eyr)

if (EYR < 1600){alert("ALL DATES PRIOR TO 1600 MAY NOT BE VALID")}
 HBY =HBy(EYR)

  
moladTishrei=MT(HBY) 
 mt=moladTishrei.split(","); 

for (i = 1; i < 4;  i++) {
	mt[i] = parseInt(mt[i])
}



HBY2=HBY+1

moladTishrei2=MT(HBY2)

mt2=moladTishrei2.split(","); 

for (i = 1; i < 4;  i++) {
	mt2[i] = parseInt(mt2[i])
}


mt[1]=DECH(mt[4],mt[1],mt[2],mt[3])
mt2[1]=DECH(mt2[4],mt2[1],mt2[2],mt2[3])


YD=((7-mt[1])+mt2[1])%7;
if(YD==0){YD=7};
if (mt[4]==3){
YL=378+YD
}
else {
YL=350+YD
}

if (YL==353||YL==383){SY="choser"}
if (YL==354||YL==384){SY="ksidron"}
if (YL==355||YL==385){SY="molei"}

SEPrh=SRHd(HBY);
RH=0; SEPrh0=SEPrh
if (EYR<1900){SEPrh=SEPrh-1}
else if (EYR<1800){SEPrh=SEPrh-2}
else if (EYR<1700){SEPrh=SEPrh-3}
if (EYR<1582 ){SEPrh=SEPrh-14}
DaS = dOw(9,SEPrh,EYR);if (DaS==0){DaS=7}

RH=mt[1];//alert("RH="+RH)
if (RH==0){RH=7};//alert("RH="+RH)

	for (i=0;(i)<=(RH-DaS);i++){
            SEPrh = SEPrh+1; //alert(i +" SEPrh= "+SEPrh)
}
if (SEPrh-SEPrh0>=6) {SEPrh=SEPrh0-1}
var Ssep=" September "
if (SEPrh>30){SEPrh=SEPrh-30; Ssep=" October "}
//if (SEPrh<=0){SEPrh=31+SEPrh; Ssep=" August "}

Mrh=9; if (Ssep !=" September "){Mrh=10};
//if (Ssep ==" August "){Mrh=8
//SEPrh=SEPaug(RH,SEPrh,EYR)
//}


FD=dOw(Mrh,SEPrh,EYR);if (FD==0){FD=7}
if (FD!=RH){
SEPrhO=SEPrh
SEPrh=SEPrh-1}

FD2=dOw(Mrh,SEPrh,EYR);if (FD2==0){FD2=7}
if (FD2!=RH){
SEPrh=SEPrhO+1}
if (SEPrh==0){Mrh=9;Ssep =" September ";SEPrh=30}

}

if(YL<=355){
YJ=new Array("Tishrei","Cheshvan","Kislev","Teves","Shvat","Adar","Nisan","Iyar","Sivan","Tammuz","Av","Elul")
}
else{
YJ=new Array("Tishrei","Cheshvan","Kislev","Teves","Shvat","Adar I","Adar II","Nisan","Iyar","Sivan","Tammuz","Av","Elul")
}



i=1;day1=mt[1]
for (j=0;j<YJ.length;j++){
if(YL<=355){doM=ml(j,SY)}else{doM=mlM(j,SY)}

for (mthlgth=1;mthlgth<=doM;mthlgth++){
   cal="<BR>"

RHdate= new Date(EYR, (Mrh-1), SEPrh++, 00, 00, 00)
if(mthlgth==30||mthlgth==1&&i>1){rChdsh=" Rosh Chodesh"}
else{rChdsh=" "}


var Bday="-"+(YJ[j]+" "+mthlgth+" "+HBY)+" "+(RHdate.getMonth()+1)+" "+RHdate.getDate() +" "+RHdate.getFullYear()+" "+((RHdate.getDay()<6)?day((RHdate.getDay()+1)):"ъбщ".fontcolor("red"))

//alert(Bday)
if (flagYZ==true){
xal+="<BR>"+Bday
}


caln=""+(RHdate.getMonth()+1)+"/"+RHdate.getDate()

if (caln==heint&&RHdate.getFullYear()==fYr){



flagYZ = true

 xal=Bday


}



}
}




}
if(xal.match("Elul")) {flagBack=0}
//alert(xal)
return xal
xal=""
}