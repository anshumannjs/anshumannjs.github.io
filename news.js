getNews("India");

function getNews(news){
    let xhr=new XMLHttpRequest();
    xhr.open("GET",`https://newsapi.org/v2/everything?q=${news} &from=2022-07-02&sortBy=publishedAt&apiKey=68bee47762d040e294b0b15264fabbdc
    `,true);
    xhr.onprogress=function(){
        console.log("on progress");
    }
    xhr.onload=function(){
        let box=document.getElementById("articleBox");
        let a=JSON.parse(this.responseText);
        if (a.totalResults>0){
            remove();
            document.getElementById("mainHeading").innerHTML=`<h1>News on ${news} </h1>`;
            console.log(a);
            for (let i=0;i<10;i++){
                let main=document.createElement("div");
                main.className="articles";
                let photo=document.createElement("div");
                photo.className="articlePhoto";
                photo.innerHTML=`<img src="${a.articles[i].urlToImage}" alt="">`;
                main.append(photo);
                let content=document.createElement("div");
                content.className="articleContent";
                let heading=document.createElement("div");
                heading.className="articleHeading";
                heading.innerHTML=`<h2>${a.articles[i].title} </h2>`
                content.append(heading);
                let desc=document.createElement("div");
                desc.className="articleDes";
                desc.innerHTML=`<p>${a.articles[i].description}.... </p>`
                content.append(desc);
                main.append(content);
                let temp=document.createElement("div");
                temp.className="hide";
                temp.innerText=JSON.stringify(a.articles[i]);
                temp.style.display="none";
                main.append(temp);
                // heading.onclick=trans(temp);
                let hr=document.createElement("hr");
                box.append(main);
                box.append(hr);
            }
            console.log("done");
        }
        else {
            document.getElementById("mainHeading").innerHTML=`<h1>Couldn't find any news on ${news} </h1>`;
        }
        
    }
    xhr.send();
}

function ge(){
    let txt=document.getElementById("txt").value;
    document.getElementById("txt").value=null;
    getNews(txt);
}

let button=document.getElementById("search");
button.addEventListener("click",ge);

function remove(){
    document.getElementById("mainHeading").innerHTML=null;
    document.getElementById("articleBox").innerHTML=null;
}
document.getElementById("txt").addEventListener("keyup",function(event){
    if (event.key==='Enter'){
        ge();
    }
});
document.getElementById("articleBox").addEventListener("click",(event)=>{
    if (event.target.nodeName=="H2"){
        let a=JSON.parse(event.path[3].childNodes[2].innerText);
        // console.log(event.path[3].childNodes[2].innerText);
        sessionStorage.setItem("info",JSON.stringify(a));
        window.open("news2.html","_blank");
        // window.location.href="news2.html";
    }
    else if (event.target.nodeName=="P"){
        let a=JSON.parse(event.path[3].childNodes[2].innerText);
        // console.log(event.path[3].childNodes[2].innerText);
        sessionStorage.setItem("info",JSON.stringify(a));
        window.open("news2.html","_blank");
        // window.location.href="news2.html";
    }
    else if (event.target.nodeName=="IMG"){
        let a=JSON.parse(event.path[2].childNodes[2].innerText);
        // console.log(event.path[3].childNodes[2].innerText);
        sessionStorage.setItem("info",JSON.stringify(a));
        window.open("news2.html","_blank");
        // window.location.href="news2.html";
    }
})
// function trans(temp){
//     console.log("hello");
//     console.log(temp);
// }