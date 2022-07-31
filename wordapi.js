// let api={
//     "word": "example",
//     "results": [
//       {
//         "definition": "a representative form or pattern",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "model"
//         ],
//         "typeOf": [
//           "representation",
//           "internal representation",
//           "mental representation"
//         ],
//         "hasTypes": [
//           "prefiguration",
//           "archetype",
//           "epitome",
//           "guide",
//           "holotype",
//           "image",
//           "loadstar",
//           "lodestar",
//           "microcosm",
//           "original",
//           "paradigm",
//           "pilot",
//           "prototype",
//           "template",
//           "templet",
//           "type specimen"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "I profited from his example"
//         ]
//       },
//       {
//         "definition": "something to be imitated",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exemplar",
//           "good example",
//           "model"
//         ],
//         "typeOf": [
//           "ideal"
//         ],
//         "hasTypes": [
//           "pacemaker",
//           "pattern",
//           "beauty",
//           "prodigy",
//           "beaut",
//           "pacesetter"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ]
//       },
//       {
//         "definition": "an occurrence of something",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "case",
//           "instance"
//         ],
//         "typeOf": [
//           "happening",
//           "natural event",
//           "occurrence",
//           "occurrent"
//         ],
//         "hasTypes": [
//           "clip",
//           "mortification",
//           "piece",
//           "time",
//           "humiliation",
//           "bit"
//         ],
//         "derivation": [
//           "exemplify"
//         ],
//         "examples": [
//           "but there is always the famous example of the Smiths"
//         ]
//       },
//       {
//         "definition": "an item of information that is typical of a class or group",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "illustration",
//           "instance",
//           "representative"
//         ],
//         "typeOf": [
//           "information"
//         ],
//         "hasTypes": [
//           "excuse",
//           "apology",
//           "specimen",
//           "case in point",
//           "sample",
//           "exception",
//           "quintessence",
//           "precedent"
//         ],
//         "derivation": [
//           "exemplify",
//           "exemplary"
//         ],
//         "examples": [
//           "this patient provides a typical example of the syndrome",
//           "there is an example on page 10"
//         ]
//       },
//       {
//         "definition": "punishment intended as a warning to others",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "deterrent example",
//           "lesson",
//           "object lesson"
//         ],
//         "typeOf": [
//           "monition",
//           "admonition",
//           "word of advice",
//           "warning"
//         ],
//         "derivation": [
//           "exemplary"
//         ],
//         "examples": [
//           "they decided to make an example of him"
//         ]
//       },
//       {
//         "definition": "a task performed or problem solved in order to develop skill or understanding",
//         "partOfSpeech": "noun",
//         "synonyms": [
//           "exercise"
//         ],
//         "typeOf": [
//           "lesson"
//         ],
//         "examples": [
//           "you must work the examples at the end of each chapter in the textbook"
//         ]
//       }
//     ],
//     "syllables": {
//       "count": 3,
//       "list": [
//         "ex",
//         "am",
//         "ple"
//       ]
//     },
//     "pronunciation": {
//       "all": "ɪɡ'zæmpəl"
//     },
//     "frequency": 4.67
//   }


let api;
function displayDefinition(){
    let xhr=new XMLHttpRequest();
    let search=document.getElementById("search").value;
    // console.log(search);
    xhr.open("GET",`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`,true);
    xhr.onprogress=function(){
        console.log("on progress");
    }
    xhr.onload=function(){
        // console.log(JSON.parse(this.responseText));
        let a=JSON.parse(this.responseText);
        console.log(a);
        if (a.title=="No Definitions Found"){
            // console.log("true");
            clearDef();
            document.getElementById("title").innerText=a.title;
            document.getElementById("message1").innerText=a.message;
            document.getElementById("message2").innerText=a.resolution;
        }
        else {
            clearError();
            clearDef();
            a=a[0].meanings;
            // console.log(a);
            let def=document.getElementById("def");
            a.forEach(function(elem){
                let li=document.createElement("li");
                li.innerText=elem.definitions[0].definition;
                def.appendChild(li);
                // console.log(elem.definitions[0].definition);
            })
        }
        // console.log(JSON.parse(this.responseText)[0].meanings[0].definitions[0].definition);

    }
    xhr.send();
}

document.getElementById("clear").addEventListener("click",function(){
    document.getElementById("def").innerHTML=null;
    document.getElementById("search").value=null;
    document.getElementById("title").innerText=null;
    document.getElementById("message1").innerText=null;
    document.getElementById("message2").innerText=null;
});

function clearDef(){
    document.getElementById("def").innerHTML=null;
}

function clearError(){
    document.getElementById("title").innerText=null;
    document.getElementById("message1").innerText=null;
    document.getElementById("message2").innerText=null;
}

let enter=document.getElementById("search");
enter.addEventListener("keyup",(event)=>{
    console.log(document.getElementById("search").value.length);
    if (document.getElementById("search").value.length==0){
        clearDef();
        clearError();
    }
    // if (event.code="Enter"){
    // }
    displayDefinition();
    // else {
    //     clearDef();
    //     clearError();
    // }
})

// console.log(api.results.length)
let populate=document.getElementById("populate");
populate.addEventListener("click",displayDefinition);
// populate.addEventListener("click",function(){
//     let def=document.getElementById("def");
//     api.results.forEach(function(elem){
//         let li=document.createElement("li");
//         li.innerText=elem.definition;
//         def.append(li);
//     });
// });


// console.log(api.results[0].definition);