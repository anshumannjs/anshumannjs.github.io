let obj=JSON.parse(sessionStorage.getItem("info"));
console.log(obj);
let title=document.getElementById("title");
title.innerText=obj.title;
let author=document.getElementById("author");
author.innerText=`Author : ${obj.author}`;
let time=document.getElementById("time");
time.innerText=`Published At : ${new Date(obj.publishedAt)}`;
let ori=document.getElementById("origin");
let a=document.createElement("a");
a.innerText="Read the original and full article here";
a.href=obj.url;
ori.append(a);
// let img=document.getElementById("articlePic");
// img.innerHTML=`<img src="${obj.urlToImage} " alt="">`;
let story=document.getElementById("articleStory");
let txt=` To read the full article please click the link above or `;
story.innerText=txt;
let b=document.createElement("a");
b.innerText="here";
b.href=obj.url;
story.append(b);
// console.log(str.length);
// str.content.foreach(function(elem){
//     txt=txt+elem;
// });
// for (let i=0;i<str.length;i++){
//     txt=txt+str[i];
// }
// console.log(txt);