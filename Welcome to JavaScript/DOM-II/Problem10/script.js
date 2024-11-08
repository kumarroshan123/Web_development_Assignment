let text = document.querySelector("#text");
let countbutton = document.querySelector("#count");
let lowerbutton = document.querySelector("#lowercase");
let upperbutton = document.querySelector("#Uppercase");
let subtext = document.querySelector("#sub-text");
let substring = document.querySelector("#substring");
let result = document.querySelector(".result");

function countwords() {
  result.innerHTML = "";
  let w = text.value;
  w = w.split(/\s+/);
  let h2 = document.createElement("h2");
  h2.innerHTML = `Count of Words in Text : ${w.length}`;
  result.append(h2);
}

function tolowercase() {
  result.innerHTML = "";
  let w = text.value.toLowerCase();
  let h2 = document.createElement("h2");
  h2.innerHTML = `Text in Lower case : ${w}`;
  result.append(h2);
}

function touppercase() {
  result.innerHTML = "";
  let w = text.value.toUpperCase();
  let h2 = document.createElement("h2");
  h2.innerHTML = `Text in Upper case : ${w}`;
  result.append(h2);
}

function tochecksubstring() {
  result.innerHTML = "";
  if (text.value !== "" && subtext.value !== "") {
    let w = text.value.toLowerCase().includes(subtext.value.toLowerCase())
      ? "Substring present in the text"
      : "Substring not found";
    let h2 = document.createElement("h2");
    h2.innerHTML = `${w}`;
    result.append(h2);
  }else{
    alert("Please input Both text field and substring field");
  }
}

countbutton.addEventListener("click",countwords);
lowerbutton.addEventListener("click",tolowercase);
upperbutton.addEventListener("click",touppercase);
substring.addEventListener("click",tochecksubstring);

