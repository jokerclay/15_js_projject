// get button and the value of the color
const btn = document.getElementById("btn");
var showed_color = document.querySelector('.show-color-number');



// get a random color number 
const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

// give the color number to span tag and the main section's background
btn.addEventListener("click",()=>{
    showed_color.innerText = random_hex_color_code();
    document.querySelector("main").style.backgroundColor = random_hex_color_code();
})