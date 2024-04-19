// var box1 = document.getElementById("box1");
// function moveParagrap(paragraph) {
//   var box2 = document.getElementById("box2");
//   box2.appendChild(paragraph);
// }
// var kattasi = document.getElementById("kattasi");
// function moveParagraph(paragrap) {
//   var box3 = document.getElementById("box3");
//   box3.appendChild(paragrap);
// }

function moveParagraph(paragraph) {
  var box1 = document.getElementById("box1");
  var box2 = document.getElementById("box2");
  var cross = document.createElement("span");
  cross.onclick = function() {
    box2.removeChild(this);
  };
  box2.appendChild(paragraph.cloneNode(true));
}

function moveParagrap(paragrap) {
  var boxi = document.getElementById("boxi");
  var box3 = document.getElementById("box3");
  var cross = document.createElement("span");
  cross.onclick = function() {
    box3.removeChild(this);
  };
  box3.appendChild(paragrap.cloneNode(true));
}
function moveParagra(paragra) {
  var q = document.getElementById("q");
  var box4 = document.getElementById("box4");
  var cross = document.createElement("span");
  cross.onclick = function() {
    box4.removeChild(this);
  };
  box4.appendChild(paragra.cloneNode(true));
}
function moveParagr(paragr) {
  var s = document.getElementById("s");
  var box5 = document.getElementById("box5");
  var cross = document.createElement("span");
  cross.onclick = function() {
    box5.removeChild(this);
  };
  box5.appendChild(paragr.cloneNode(true));
}
let btn = document.querySelector('button')
let inp = document.querySelector('input')

btn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(inp.value===""){
alert('Adres kiriting');
  }else{
  alert('Zakaziz yolda')
  }
  inp.value='';
});
  


// btn.addEventListener('click',(e)=>{
//   e.preventDefault();
//   if(inp.value===""){
// alert('hato');
//   }else{
//       let li = document.createElement('li');
//       li.textContent=inp.value;
// ol.appendChild(li);
// let span = document.createElement('span');
// span.innerHTML= '\u00d7';
// li.appendChild(span);
//   }
//   inp.value='';
// });



// let a = document.getElementsByClassName('d1')
// function moveParagraph(paragraph) {
//   var box2 = document.getElementById("box2");
//   box2.appendChild(paragraph.cloneNode(true));

  // let span = document.createElement('span')
  // span.innerHTML="\u00d7"
  // box2.appendChild(span)
// }




  

// function moveParagraph(paragraph) {
//   var box1 = document.getElementById("box1");
//   var box2 = document.getElementById("box2");

//   if (!box2.contains(paragraph)) {
//     var clonedParagraph = paragraph.cloneNode(true);
//     box2.appendChild(clonedParagraph);
//     var cross = document.createElement("span");
//     cross.innerHTML = "❌";
//     cross.className = "cross";
//     cross.onclick = function() {
//       box1.appendChild(paragraph);
//       box2.removeChild(clonedParagraph);
//       box2.removeChild(this);
//     };
//     box2.appendChild(cross);
//   }
// }
// function moveParagrap(paragraph) {
//   var boxi = document.getElementById("boxi");
//   var box2 = document.getElementById("box2");
//   var dv1 = document.getElementsByClassName("dv1");

//   if (!box2.contains(paragraph)) {
//     var clonedParagraph = paragraph.cloneNode(true);
//     box2.appendChild(clonedParagraph);
//     var cross = document.createElement("span");
//     cross.innerHTML = "❌";
//     cross.className = "cross";
//     cross.onclick = function() {
//       boxi.appendChild(paragraph);
//       box2.removeChild(clonedParagraph);
//       box2.removeChild(this);
//     };
//     box2.appendChild(cross);
//   }
// }



