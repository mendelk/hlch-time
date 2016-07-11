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
var cdl=false
var counted=0
var ShabCount=0
var SedraCount=0
var ESedraCount= -53
var SDRcount = new Array()

function notice(Yearn,Monthn,Daten){
var xnote=""
//alert(ArNote.length+" "+ctra1++)
//alert(Yearn+" "+Monthn+" "+Daten)
for (jl=0;jl<ArNote.length;jl++){

note=ArNote[jl].split("-")
if(note[0]==Yearn&&note[1]==Monthn&&note[2]==Daten){
//alert("For"+note[1]+"/"+note[2]+"/"+note[0]+"\n"+note[3])
xnote=note[3]


}
}
return xnote
}

function HbM(m){
var M=""
if (m=="Tishrei"){M= "ירשת"}
if (m=="Cheshvan"){M= "ןוושח"}
if (m=="Kislev"){M= "וילסכ"}
if (m=="Teves"){M= "תבט"}
if (m=="Shvat"){M= "טבש"}
if (m=="Adar"){M= "רדא"}
if (m=="AdarI"){M= "א רדא"}
if (m=="AdarII"){M= "ב רדא"}
if (m=="Nisan"){M= "ןסינ"}
if (m=="Iyar"){M= "רייא"}
if (m=="Sivan"){M= "ןויס"}
if (m=="Tammuz"){M= "זומת"}
if (m=="Av"){M= "בא"}
if (m=="Elul"){M= "לולא"}

return M
}

function hbNu(n){
var N=''
if (n=='1'){N= 'א'}
if (n=='2'){N= 'ב'}
if (n=='3'){N= 'ג'}
if (n=='4'){N= 'ד'}
if (n=='5'){N= 'ה'}
if (n=='6'){N= 'ו'}
if (n=='7'){N= 'ז'}
if (n=='8'){N= 'ח'}
if (n=='9'){N= 'ט'}
if (n=='10'){N= 'י'}
if (n=='11'){N= 'אי'}
if (n=='12'){N= 'בי'}
if (n=='13'){N= 'גי'}
if (n=='14'){N= 'די'}
if (n=='15'){N= 'וט'}
if (n=='16'){N= 'זט'}
if (n=='17'){N= 'זי'}
if (n=='18'){N= 'חי'}
if (n=='19'){N= 'טי'}
if (n=='20'){N= 'כ'}
if (n=='21'){N= 'אכ'}
if (n=='22'){N= 'בכ'}
if (n=='23'){N= 'גכ'}
if (n=='24'){N= 'דכ'}
if (n=='25'){N= 'הכ'}
if (n=='26'){N= 'וכ'}
if (n=='27'){N= 'זכ'}
if (n=='28'){N= 'חכ'}
if (n=='29'){N= 'טכ'}
if (n=='30'){N= 'ל'}
if (n=='31'){N= 'אל'}
if (n=='32'){N= 'בל'}
if (n=='33'){N= 'גל'}
if (n=='34'){N= 'דל'}
if (n=='35'){N= 'הל'}
if (n=='36'){N= 'ול'}
if (n=='37'){N= 'זל'}
if (n=='38'){N= 'חל'}
if (n=='39'){N= 'טל'}
if (n=='40'){N= 'מ'}
if (n=='41'){N= 'אמ'}
if (n=='42'){N= 'במ'}
if (n=='43'){N= 'גמ'}
if (n=='44'){N= 'דמ'}
if (n=='45'){N= 'המ'}
if (n=='46'){N= 'ומ'}
if (n=='47'){N= 'זמ'}
if (n=='48'){N= 'חמ'}
if (n=='49'){N= 'טמ'}

return N
}

function hbNo(n){
var N=''
if (n=='1'){N= 'א'}
if (n=='2'){N= 'ב'}
if (n=='3'){N= 'ג'}
if (n=='4'){N= 'ד'}
if (n=='5'){N= 'ה'}
if (n=='6'){N= 'ו'}
if (n=='7'){N= 'ז'}
if (n=='8'){N= 'ח'}
if (n=='9'){N= 'ט'}
if (n=='10'){N= 'י'}
if (n=='20'){N= 'כ'}
if (n=='30'){N= 'ל'}
if (n=='40'){N= 'מ'}
if (n=='50'){N= 'נ'}
if (n=='60'){N= 'ס'}
if (n=='70'){N= 'ע'}
if (n=='80'){N= 'פ'}
if (n=='90'){N= 'צ'}
if (n=='100'){N= 'ק'}
if (n=='200'){N= 'ר'}
if (n=='300'){N= 'ש'}
if (n=='400'){N= 'ת'}
if (n=='500'){N= 'קת'}
if (n=='600'){N= 'רת'}
if (n=='700'){N= 'שת'}
if (n=='800'){N= 'תת'}
if (n=='900'){N= 'קתת'}

return N
}

function dothis(z){
var nz=""
if (z=='קתת'){nz='ק\"תת'}
if (z=='תת'){nz='ת\"ת'}
if (z=='שת'){nz='ש\"ת'}
if (z=='רת'){nz='ר\"ת'}
if (z=='קת'){nz='ק\"ת'}
return nz
}

function Hd(dw){

if(dw=="Sunday"){HD="ןושאר"}
if(dw=="Monday"){HD="ינש"}
if(dw=="Tuesday"){HD="ישילש"}
if(dw=="Wednesday"){HD="יעיבר"}
if(dw=="Thursday"){HD="ישימח"}
if(dw=="Friday"){HD="ישש"}
if(dw=="Shabbos"){HD="תבש"}

return HD
}


function Hdn(dn){

if(dn=="Sunday"){HDn=1}
if(dn=="Monday"){HDn=2}
if(dn=="Tuesday"){HDn=3}
if(dn=="Wednesday"){HDn=4}
if(dn=="Thursday"){HDn=5}
if(dn=="Friday"){HDn=6}
if(dn=="<FONT"){HDn=7}

return HDn
}


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
/*
//SIDRA STUFF**********

++counted
alert(counted)
if(counted<=487){

if (j==0&&mthlgth==1){SedraCount=0}
//if(RHdate.getMonth()==0&&RHdate.getDate()==1){counted=1}
if (RHdate.getDay()==6){
++ShabCount
++SedraCount
++ESedraCount
if (RHdate.getMonth()==0&&(RHdate.getDate()>0&&RHdate.getDate()<8)){ESedraCount=1}
if ((YJ[j]=="Tishrei"&&(mthlgth==1||mthlgth==10||(mthlgth>14&&mthlgth<24)))||(YJ[j]=="Nisan"&&(mthlgth>14&&mthlgth<23))||(YJ[j]=="Sivan"&&(mthlgth==6||mthlgth==7))){--SedraCount, --ESedraCount}
rChdsh+=" "+String(counted)+" "+ShabCount+" " +SedraCount+" " +ESedraCount
if (ESedraCount>0){SDRcount[ESedraCount]=SedraCount}
//alert(yyyy)
//if (EYR==fYr&&ESedraCount>0){SDRcount[ESedraCount]=SedraCount}
alert(SDRcount[SDRcount.length-1]+" "+SDRcount.length)
}

alert(counted+" "+ShabCount+" " +SedraCount+"\n"+rChdsh+"\n"+"-"+YJ[j]+" "+mthlgth+" "+HBY+"\n"+SDRcount)
}
*/
//END SIDRA STUFF**********

var Bday="-"+(YJ[j]+" "+mthlgth+" "+HBY)+" "+(RHdate.getMonth()+1)+" "+RHdate.getDate()+" "+RHdate.getFullYear()+" "+((RHdate.getDay()<6)?day((RHdate.getDay()+1)):"תבש".fontcolor("red"))

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

function YomTov(hbM,hbD,SY,dAy,HBY){

cdl=false
ymtv=""

HBY=parseInt(HBY)


if (hbM=="Tishrei"&&hbD==1){ymtv="Rosh Hashana";cdl=true}
if (hbM=="Tishrei"&&hbD==2){ymtv="Rosh Hashana"}
if (hbM=="Tishrei"&&(hbD>2&&hbD<9)&&dAy==0){ymtv="Shabbos Tshuva"}
if (hbM=="Tishrei"&&hbD==10){ymtv="Yom Kippur"}
if (hbM=="Tishrei"&&hbD==14){cdl=true;ymtv="Erev Succos"}
if (hbM=="Tishrei"&&hbD==15){cdl=true;ymtv="Yom Tov Succos Day 1"}
if (hbM=="Tishrei"&&hbD==16){ymtv="Yom Tov Succos Day 2"}
if (hbM=="Tishrei"&&hbD>=17&&hbD<=20){ymtv="Chol Hamoed"}
if (hbM=="Tishrei"&&hbD==21){ymtv="Hoshana Rabba";cdl=true}
if (hbM=="Tishrei"&&hbD==22){ymtv="Yom Tov Shmini Atzeres";cdl=true}
if (hbM=="Tishrei"&&hbD==23){ymtv="Yom Tov Simchas Torah";cdl=false}
//if (hbM=="Cheshvan"&&hbD==8){ymtv=("Happy Birthday Mommy you're "+String(HBY-5715)+" years old today"+" start Ps. "+String(HBY-5715+1)).fontcolor('orange')}
//if (hbM=="Cheshvan"&&hbD==19){ymtv=("Happy Birthday Naftoli you're "+String(HBY-5742)+" years old today"+" start Ps. "+String(HBY-5742+1)).fontcolor('orange')}
if (hbM=="Cheshvan"&&hbD==20){ymtv=" Chof Cheshvan "+(String(HBY-5621)+" years since the birth of the Rebbe RaShab "+" start Ps. "+String(((HBY-5621)%150)+1)).fontcolor('gray')}
if (hbM=="Kislev"&&hbD==9){ymtv="Tes Kislev "+(String(HBY-5534)+" years since the birth of the Mitteler Rebbe "+" start Ps. "+String(((HBY-5534)%150)+1)).fontcolor('gray')}
if (hbM=="Kislev"&&hbD==10){ymtv="Yud Kislev"}
if (hbM=="Kislev"&&hbD==19){ymtv="Yud Tes Kislev"}
if (hbM=="Kislev"&&hbD==24){ymtv="Erev Chanukah 1'st Candle at night"}
if (hbM=="Kislev"&&hbD==25){ymtv="Chanukah 2'nd Candle at night"}
if (hbM=="Kislev"&&hbD==26){ymtv="Chanukah 3'rd Candle at night"}
if (hbM=="Kislev"&&hbD==27){ymtv="Chanukah 4'th Candle at night"}
if (hbM=="Kislev"&&hbD==28){ymtv="Chanukah 5'th Candle at night"}
if (hbM=="Kislev"&&hbD==29){ymtv="Chanukah 6'th Candle at night"}
if (hbM=="Kislev"&&hbD==30){ymtv="Chanukah 7'th Candle at night"}
if (hbM=="Teves"&&hbD==1&&SY!="choser"){ymtv="Chanukah 8'th Candle at night"}
if (hbM=="Teves"&&hbD==2&&SY!="choser"){ymtv="Zos Chanukah "}
if (hbM=="Teves"&&hbD==1&&SY=="choser"){ymtv="Chanukah 7'th Candle at night"}
if (hbM=="Teves"&&hbD==2&&SY=="choser"){ymtv="Chanukah 8'th Candle at night"}
if (hbM=="Teves"&&hbD==3&&SY=="choser"){ymtv="Zos Chanukah "}
if (hbM=="Teves"&&hbD==5){ymtv="Didon Notzach"}
if (hbM=="Teves"&&hbD==10){ymtv="Assoro B'Teves Fast of the Tenth of Teves<br>"}
if (hbM=="Teves"&&hbD==20){ymtv="The Rambam's Yahrzeit "}
//if (hbM=="Shvat"&&hbD==11){ymtv=("Happy Birthday Yossi you're "+String(HBY-5737)+" years old today"+" start Ps. "+String(HBY-5737+1)).fontcolor('gray')}
if (hbM=="Shvat"&&hbD==10){ymtv="Yud Shvat "+ String(HBY-5710)+" years since the Rebbe 's nesius"}
if (hbM=="Shvat"&&hbD==15){ymtv="Tu B'Shvat"}
if (hbM=="Shvat"&&hbD==22){ymtv="<BDO DIR=RTL>יארצייט פון רעבצין חי' מושקא נ''ע</BDO>"}
if (hbM=="Adar"&&hbD==7){ymtv="Moshe Rabbeinu's Birthday"+" start Ps. "+String(((HBY-2368)%150) +1)}
if (hbM=="Adar"&&hbD==11&&dAy==5){ymtv="Fast of Esther mukdom"}
if (hbM=="Adar"&&hbD==13&&dAy!=0){ymtv="Fast of Esther"}
if (hbM=="Adar"&&hbD==14){ymtv="Purim"}
if (hbM=="Adar"&&hbD==15){ymtv="Shushan Purim"}
//if (hbM=="Adar"&&hbD==22){ymtv=("Happy Birthday Tati you're "+String(HBY-5710)+" years old today"+" start Ps. "+String(HBY-5710+1)).fontcolor('gray')}
if (hbM=="AdarI"&&hbD==7){ymtv="Moshe Rabbeinu's Birthday"+" start Ps. "+String(((HBY-2368)%150) +1)}
if (hbM=="AdarI"&&hbD==14){ymtv="Purim Koton"}
if (hbM=="AdarI"&&hbD==15){ymtv="Shushan Purim Koton"}
//if (hbM=="AdarI"&&hbD==22){ymtv=("Happy Birthday Tati you're "+String(HBY-5710)+" years old today"+" start Ps. "+String(HBY-5710+1)).fontcolor('gray')}
if (hbM=="AdarII"&&hbD==11&&dAy==5){ymtv="Fast of Esther mukdom"}
if (hbM=="AdarII"&&hbD==13&&dAy!=0){ymtv="Fast of Esther"}
if (hbM=="AdarII"&&hbD==14){ymtv="Purim "}
if (hbM=="AdarII"&&hbD==15){ymtv="Shushan Purim"}
//if (hbM=="AdarII"&&hbD==22){ymtv=("Happy Birthday Tati you're "+String(HBY-5710)+" years old today"+" start Ps. "+String(HBY-5710+1)).fontcolor('lightgreen')}
if (hbM=="Nisan"&&hbD==11){ymtv="Yud Aleph Nisan "+String(HBY-5662)+" years since the birth of the Rebbe "+" start Ps. "+String(HBY-5662+1)}
//if (hbM=="Nisan"&&hbD==13){ymtv=("Happy Birthday Mattis you're "+String(HBY-5753)+" years old today"+" start Ps. "+String(HBY-5753+1)).fontcolor('lightgreen')}
if (hbM=="Nisan"&&hbD==14){cdl=true;ymtv="Erev Pesach 1'st SEDER at night"}
if (hbM=="Nisan"&&hbD==15){cdl=true;ymtv="Yom Tov Pesach 1'st day 2'nd Seder at night"}
if (hbM=="Nisan"&&hbD==16){ymtv="Yom Tov Pesach 2'nd day"}
if (hbM=="Nisan"&&hbD>=17&&hbD<=19){ymtv="Chol Hamoed"}
if (hbM=="Nisan"&&hbD==20){cdl=true;ymtv="Chol Hamoed"}
if (hbM=="Nisan"&&hbD==21){cdl=true;ymtv="Yom Tov Pesach 7'th day"}
if (hbM=="Nisan"&&hbD==22){ymtv="Yom Tov Pesach 8'th day"}
if (hbM=="Iyar"&&hbD==2){ymtv="Beis Iyar "+(String(HBY-5594)+" years since the birth of the Rebbe MaHaRash "+" start Ps. "+String(((HBY-5594)%150)+1)).fontcolor('gray')}
if (hbM=="Iyar"&&hbD==14){ymtv="Pesach Sheini"}
if (hbM=="Iyar"&&hbD==18){ymtv="Lag B'omer"}
if (hbM=="Sivan"&&hbD==5){cdl=true;ymtv="Erev Shavuos"}
if (hbM=="Sivan"&&hbD==6){ymtv="Yom Tov Shavuos 1'st day";cdl=true}
if (hbM=="Sivan"&&hbD==7){ymtv="Yom Tov Shavuos 2'nd day"}
//if (hbM=="Sivan"&&(hbD==11||hbD==12)){ymtv=("Happy Birthday Chaya Mushka you're "+String(HBY-5748)+" years old today"+" start Ps. "+String(HBY-5748+1)).fontcolor('lightgreen')}
if (hbM=="Tammuz"&&(hbD==3)){ymtv=" Gimmel Tammuz"}
//if (hbM=="Tammuz"&&(hbD==5)){ymtv=("Happy Birthday Sossia Hinda Frumet you're "+String(HBY-5750)+" years old today"+" start Ps. "+String(HBY-5750+1)).fontcolor('lightgreen')}
if (hbM=="Tammuz"&&(hbD==12)){ymtv="Chag Hageulah Yud Beis Tammuz  "+(String(HBY-5640)+" years since the birth of the Freerdiker Rebbe "+" start Ps. "+String(((HBY-5640)%150)+1)).fontcolor('gray')}
if (hbM=="Tammuz"&&hbD==13){ymtv="Chag Hageulah Yud-Beis Yud-Gimmel Tammuz "}
if (hbM=="Tammuz"&&hbD==17&&dAy!=0){ymtv="Shiva Ossor B'Tammuz"}
if (hbM=="Tammuz"&&hbD==18&&dAy==1){ymtv="Shiva Ossor B'Tammuz nidche"}
if (hbM=="Av"&&hbD==5){ymtv="Yahrzeit of the Ari Z'al"}
if (hbM=="Av"&&hbD==9&&dAy!=0){ymtv="Tisha B'av"}
if (hbM=="Av"&&hbD==10&&dAy==1){ymtv="Tisha B'av nidche"}
if (hbM=="Av"&&hbD==15){ymtv="Chamisho Ossor B'av"}
if (hbM=="Av"&&hbD==20){ymtv="Chof Av"}
//if (hbM=="Av"&&hbD==30){ymtv=("Happy Birthday Mendy you're "+String(HBY-5735)+" years old today"+" start Ps. "+String(HBY-5735+1)).fontcolor('lightgreen')}
//if (hbM=="Elul"&&hbD==12){ymtv=("Happy Birthday Sholom Ber and Leah you're "+String(HBY-5743)+" and "+String(HBY-5745)+" years old today"+" start Ps. "+String(HBY-5743+1)+" and "+" Ps. "+String(HBY-5745+1)).fontcolor('lightgreen')}
if (hbM=="Elul"&&hbD==18){ymtv="Chai Elul "+String(HBY-5458)+" and "+String(HBY-5505)+" years since the birth of the B'esht and AdmH'z"+(" start Ps. "+String(((HBY-5458)%150)+1)+" and "+" start Ps. "+String(((HBY-5505)%150)+1)).fontcolor('gray')}
if (hbM=="Elul"&&hbD==29){cdl=true;ymtv="Erev Rosh Hashana "+String(HBY+1)+" "+(String(HBY-5549)+" years since the birth of the Tzemach Tzedek "+" start Ps. "+String(((HBY-5549)%150)+1)).fontcolor('gray')}
if ((hbD==1&&hbM!="Tishrei")||hbD==30){ymtv="Rosh Chodesh "+ ymtv}
//if (cdl==true){ymtv1='<span style="margin:0;padding:0; top:0;float:left ">'+ymtv+'</span>'+'<IMG SRC="candle6.gif" style="  float:right; border:0; margin:0; padding:0; top:0;  height:70;  " ALT="Light Candles">';ymtv=ymtv1}

//if(ymtv!=""){alert(hbM+" "+hbD+" "+dAy)}
/*
if (dAy==0&&(ymtv.match("Chol","i")||ymtv.match("Yom","i")||ymtv.match("Rosh H","i"))){ymtv+="~"+" "+ShabCount+" "+SedraCount+" "+ESedraCount,  alert(ymtv +" "+hbM+" "+hbD+" "+dAy+" "+SY+" "+HBY+" "+counted + " "+YL+" "+ ShabCount+" "+SedraCount)}
*/

return ymtv


}

function Sefira(hbM,hbD){
if ((hbM=="Nisan"&&hbD>14)||(hbM=="Iyar")||(hbM=="Sivan"&&hbD<5)){
return true}
else{return false}
}

function ctrii(hbM,hbD){
var iii
if(Sefira(hbM,hbD)){
//alert(hbD+hbM)
	if(hbM=="Nisan"){iii=(hbD % 15)+1}
        if(hbM=="Nisan"&&hbD==30){iii=16}
	else if(hbM=="Iyar"){iii=(hbD%30)+16}
	else if(hbM=="Sivan"){iii=(hbD%6)+45}
//alert(iii)
return (" Count Omer "+String(iii)+" Tonight")
}else{return ""}
}
