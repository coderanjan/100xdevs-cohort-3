// var typed =new Typed(".auto-type",{
//     strings:["Alpha - DSA","Delta - Web Development","Sigma - DSA + Web Development","C++ DSA"],
//     typeSpeed:140,
//     backSpeed:140,
//     loop:true
// })

// var typedS=new Typed(".auto-type1",{
//     strings:["#youtube","#instagram","#telegram"],
//     typeSpeed:140,
//     backSpeed:140,
//     loop:true
// })

// typedS.strings.forEach((string, index) => {
//     typedS.strings[index] = `<span style="color: #667ACC;">${string}</span>`;
// });

// var typed = new Typed(".auto-type", {
//   strings: [
//     "Alpha - DSA",
//     "Delta - Web Development",
//     "Sigma - DSA + Web Development",
//     "C++ DSA",
//   ],
//   typeSpeed: 140,
//   backSpeed: 140,
//   loop: true,
// });

// var typedS = new Typed(".auto-type1", {
//   strings: ["#youtube", "#instagram", "#telegram"],
//   typeSpeed: 140,
//   backSpeed: 140,
//   loop: true,
// });
// const colors = ["red", "green", "blue"];

// typedS.strings.forEach((string, index) => {
//   typedS.strings[index] = `<span style="color: red;">${string.text}</span>`;
// });

// var typed = new Typed(".auto-type", {
//   strings: [
//     "Alpha - DSA",
//     "Delta - Web Development",
//     "Sigma - DSA + Web Development",
//     "C++ DSA",
//   ],
//   typeSpeed: 140,
//   backSpeed: 140,
//   loop: true,
// });

// var typedS = new Typed(".auto-type1", {
//   strings: [
//     { color: "red", text: "#youtube" },
//     { color: "green", text: "#instagram" },
//     { color: "blue", text: "#telegram" },
//   ],
//   typeSpeed: 140,
//   backSpeed: 140,
//   loop: true,
// });

// typedS.strings.forEach((string, index) => {
//   typedS.strings[index] =
//     `<span style="color: ${string.color};">${string.text}</span>`;
// });


var typed =new Typed(".auto-type",{
    strings:["Alpha - DSA","Delta - Web Development","Sigma - DSA + Web Development","C++ DSA"],
    typeSpeed:140,
    backSpeed:140,
    loop:true
})

var typedS=new Typed(".auto-type1",{
    strings:["#youtube","#instagram","#telegram"],
    typeSpeed:140,
    backSpeed:140,
    loop:true
})
const colors = ["red","green","blue"]

typedS.strings.forEach((string, index) => {
    typedS.strings[index] =`<span style="color: ${colors[index]};">${string}</span>`;
});