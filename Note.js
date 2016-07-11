
dt00=new Date()

tmp=''
var M = new Array ()
var N = new Array ()
var miWindow= new Array ()

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



function Reminder(dat, txt) 
{ 
   this.dat = dat 
   this.txt = txt 
   
} 
function note(N){


for (i=1;i<N.length;i++){
newx="<body bgcolor='yellow' text='blue'><font face='kids'><center>"
newx+=(N[i].length<45)?"<H2>":"<H4>"
newx+="REMINDER FOR TODAY#"+i+":<BR>"+N[i].fontcolor('red')
//newx+="<H6>"+(REMINDER.dat).fontsize('3')+"</H6>#"+i+": <BR>"+N[i].fontcolor('red')
newx+='<H6><a href="javascript://" onclick="javascript:self.close();">[ PLEASE CLOSE ME ]<BR></a>'
wx="nyWindow"+i
miWindow[i] = window.open('', wx,'alwaysRaised=1,titlebar=0,scrollbars=0,width=420,height=230'+',screenY='+(i*70)+',screenX='+(i*90))

if (miWindow[i]){
miWindow[i].document.write(newx)

}

}

	
}



function Idata2(){


tmp=unescape(document.cookie)
date=mth(dt00.getMonth())+' '+dt00.getDate()+' '+dt00.getFullYear()   //"May"
REMINDER=new Reminder()
REMINDER.dat=date
//M[0]=REMINDER.dat
for(i=0;i<20;i++){
if(i==0){p=0}else{p=1}
tmp=tmp.substring(p,tmp.length)
subtmp=tmp.search(date)
if(subtmp==-1){if (i==0){alert("There is No Reminder For "+date);REMINDER.dat="";REMINDER.txt="";for(i=1;i<M.length;i++){M[i]=""};break;}}
if(subtmp&&subtmp!=-1){
REMINDER.txt=""
REMINDER.txt=tmp.substring(subtmp,tmp.length)
tmp=REMINDER.txt
REMINDER.txt=(REMINDER.txt).substring((REMINDER.txt).indexOf(",")+1,(REMINDER.txt).indexOf("~"))
M[i+1]=REMINDER.txt


//alert(" Reminder #"+(i+1)+"\n for "+ date +"\n"+(REMINDER.txt))
}else{break;}

}

note(M)

}

