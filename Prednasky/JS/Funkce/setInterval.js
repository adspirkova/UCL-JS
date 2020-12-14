setInterval(() => {
    console.log(new Date())
}, 1000);

// function currentTime() {
//     let date = new Date
//     let time = date.toLocaleTimeString();
//     document.getElementById("root").innerHTML = time;
// }

let currentTime = () => {
    let date = new Date
    let time = date.toLocaleTimeString();
    document.getElementById("root").innerHTML = time;
}

setInterval(currentTime, 1000);