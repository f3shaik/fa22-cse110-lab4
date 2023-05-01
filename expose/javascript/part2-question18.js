function timetime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(timetime, 1000);