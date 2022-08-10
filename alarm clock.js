let add=document.getElementById("add");
let div=document.getElementById("alarms");
let arr=new Array();
let S=false;
let M=false;
let T=false;
let W=false;
let TH=false;
let F=false;
let SA=false;
let C=false;
let SUN=document.getElementById("S");
let MON=document.getElementById("M");
let TUE=document.getElementById("T");
let WED=document.getElementById("W");
let THU=document.getElementById("TH");
let FRI=document.getElementById("F");
let SAT=document.getElementById("SA");
let Sc=2;
let Mc=2;
let Tc=2;
let Wc=2;
let THc=2;
let Fc=2;
let SAc=2;
let Cc=2;





function ring(value){
    let elem=document.getElementsByTagName("audio");
    let l= document.getElementsByTagName("audio").length;
    for (let i=0;i<l;i++){
        elem[i].pause();
    }
    try{
        document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].play();
    }
    catch(err){
        console.log(err);
    }
}

function alarm(value){
    let dt=new Date();
    dt=dt.getDay();
    console.log(document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].parentNode.childNodes[1].childNodes[dt+1].className);
    if (document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].parentNode.childNodes[1].childNodes[dt+1].className=="active"){
        ring(value);
        console.log(value);
        let div3=document.createElement("div");
        let snooze=document.createElement("button");
        snooze.innerText="snooze";
        snooze.className=value;
        let cancel=document.createElement("button");
        cancel.innerText="cancel";
        cancel.className=value;
        div3.append(snooze);
        div3.append(cancel);
        div3.style.border="2px solid red";
        document.body.prepend(div3);

    }
    else if (document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].parentNode.childNodes[1].childNodes[0].className=="active"){
        ring(value);
        console.log(value);
        let div3=document.createElement("div");
        let snooze=document.createElement("button");
        snooze.innerText="snooze";
        snooze.className=value;
        let cancel=document.createElement("button");
        cancel.innerText="cancel";
        cancel.className=value;
        div3.append(snooze);
        div3.append(cancel);
        div3.style.border="2px solid red";
        document.body.prepend(div3);
    }
    else {
        addAlarm(value,86400000);
    }

    
}

try{
    document.body.addEventListener("click",(event)=>{
        if (event.target.innerText=="snooze"){
            console.log(event.path[1]);
            document.body.removeChild(event.path[1]);
            let value=event.target.className;
            console.log(document.getElementsByClassName(value)[0]);
            document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].pause();
            document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].currentTime=0;
            let time=10000;
            addAlarm(value,time);
        }
        else if(event.target.innerText=="cancel"){
            console.log(event.path[1]);
            document.body.removeChild(event.path[1]);
            let value=event.target.className;
            console.log(value);
            document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].pause();
            document.getElementsByClassName(value)[document.getElementsByClassName(value).length-1].currentTime=0;
            let parent=document.getElementsByClassName(value)[0].parentNode.childNodes[1].childNodes[0].className;
            if (parent=="active"){
                document.getElementById("alarms").removeChild(document.getElementsByClassName(value)[0].parentNode);
            }
            else {
                addAlarm(value,86400000);
            }
        }
    })
}
catch{
    console.log("nothing1");
}

function addAlarm(value,time){
    console.log(time);
    setTimeout(function(){
        alarm(value);
    }, time);
}

add.addEventListener("click",function (){
    let value=document.getElementById("time").value;
    if (value.length>0){
        let hour=parseInt(value.slice(0,2));
        let min=parseInt(value.slice(3));
        let currHour= new Date().getHours();
        let currMin=new Date().getMinutes();


        let time;
        if (hour==currHour){
            let timeMin=min-currMin;
            if (timeMin<0){
                time=(24*60)+timeMin;
            }
            else if(timeMin==0){

            }
            else {
                time=timeMin;
            }
            console.log(time);
        }
        else {
            let timeMin=min-currMin;
            let timeHour=hour-currHour;
            if (timeHour<0){
                timeHour=24+timeHour;
            }
            time=(timeHour*60)+timeMin;
        }
        time=time*60000;
        
        
        
        let div1=document.createElement("div");
        div1.className="alarm";
        let x1=document.createElement("h3");
        x1.innerText=value;
        let x2=document.createElement("button");
        x2.className="delete";
        x2.innerText="delete";
        let sun=document.createElement("button");
        sun.innerText="Sunday";
        let mon=document.createElement("button");
        mon.innerText="Monday";
        let tue=document.createElement("button");
        tue.innerText="Tuesday";
        let wed=document.createElement("button");
        wed.innerText="Wednesday";
        let thu=document.createElement("button");
        thu.innerText="Thursday";
        let fri=document.createElement("button");
        fri.innerText="Friday";
        let sat=document.createElement("button");
        sat.innerText="Saturday";
        let c=0;

        if (S){
            sun.className="active";
            c++;
            S=false;
            SUN.className="inactive";
        }
        else {
            sun.className="inactive";
        }
        if (M){
            mon.className="active";
            c++;
            M=false;
            MON.className="inactive";
        }
        else {
            mon.className="inactive";
        }
        if (T){
            tue.className="active";
            c++;
            T=false;
            TUE.className="inactive";
        }
        else {
            tue.className="inactive";
        }
        if (W){
            wed.className="active";
            c++;
            W=false;
            WED.className="inactive";
        }
        else {
            wed.className="inactive";
        }
        if (TH){
            thu.className="active";
            c++;
            TH=false;
            THU.className="inactive";
        }
        else {
            thu.className="inactive";
        }
        if (F){
            fri.className="active";
            c++;
            F=false;
            FRI.className="inactive";
        }
        else {
            fri.className="inactive";
        }
        if (SA){
            sat.className="active";
            c++;
            SA=false;
            SAT.className="inactive";
        }
        else {
            sat.className="inactive";
        }
        let once=document.createElement("button");
        once.innerText="Once";
        once.className="inactive";
        if (c==0){
            once.className="active";
        }
        
        let x5=document.createElement("div");
        x5.append(once);
        x5.append(sun);
        x5.append(mon);
        x5.append(tue);
        x5.append(wed);
        x5.append(thu);
        x5.append(fri);
        x5.append(sat);

        div1.append(x1);
        div1.append(x5);
        div1.append(x2);

        let div2=document.createElement("audio");
        div2.className=value;
        let song=document.getElementById("song").value;
        console.log(song);
        try{
            div2.innerHTML=`<source src=${song}>`;
        }
        catch{
            div2.innerHTML=`<source src="y2mate.com - NF  The Search lyrics.mp3">`
        }
        div1.append(div2);
        div.append(div1);

        addAlarm(value,time);
    }
});

div.addEventListener("click",(event)=>{
    if (event.target.className=="delete"){
        div.removeChild(event.path[1]);
    }
    if (event.target.className=="inactive"){
        event.target.className="active";
    }
    else if (event.target.className=="active"){
        event.target.className="inactive";
    }
});

document.getElementById("S").addEventListener("click",(event)=>{
    if (Sc%2==0){
        S=true;
        SUN.className="active";
        Sc++;
    }
    else {
        S=false;
        SUN.className="inactive";
        Sc++;
    }
});

document.getElementById("M").addEventListener("click",(event)=>{
    if (Mc%2==0){
        M=true;
        MON.className="active";
        Mc++;
    }
    else {
        M=false;
        MON.className="inactive";
        Mc++;
    }
});

document.getElementById("T").addEventListener("click",(event)=>{
    if (Tc%2==0){
        T=true;
        TUE.className="active";
        Tc++;
    }
    else {
        T=false;
        TUE.className="inactive";
        Tc++;
    }
});

document.getElementById("W").addEventListener("click",(event)=>{
    if (Wc%2==0){
        W=true;
        WED.className="active";
        Wc++;
    }
    else {
        W=false;
        WED.className="inactive";
        Wc++;
    }
});

document.getElementById("TH").addEventListener("click",(event)=>{
    if (THc%2==0){
        TH=true;
        THU.className="active";
        THc++;
    }
    else{
        TH=false;
        THU.className="inactive";
        THc++;
    }
});

document.getElementById("F").addEventListener("click",(event)=>{
    if (Fc%2==0){
        F=true;
        FRI.className="active";
        Fc++;
    }
    else {
        F=false;
        FRI.className="inactive";
        Fc++;
    }
});

document.getElementById("SA").addEventListener("click",(event)=>{
    if (SAc%2==0){
        SA=true;
        SAT.className="active";
        SAc++;
    }
    else{
        SA=false;
        SAT.className="inactive";
        SAc++;
    }
});
