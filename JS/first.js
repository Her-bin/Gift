var selected = 1
let old = 2

let i = 0

var styles = [
`
position: relative;
right: 30%;
`,
`
position: relative;
left: 30%;
`,
`
position: relative;
right: 25%;
margin: 10%;
`,
`
margin-top: 12%;
`,
`
margin-bottom: 15%;
`,
`
position: relative;
right: 40%;
margin-bottom: 5%;
`,
`
position: relative;
left: 40%;
margin-bottom: 10%;
`]
const btn = document.getElementById("btn1");
btn.addEventListener("click", function(){
  while(old === selected){
    selected = Math.floor(Math.random() * styles.length) + 1;
  }
      old = selected
  if(i != 10){
    btn.style.cssText = styles[selected];
    i = i+1
  }
  else{
    window.location.replace("second.html")
  }
})
