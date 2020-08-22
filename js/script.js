
// document.getElementById("is-active").style.cssText = "box-shadow: 0px -5px"; 



var executed = false;
if (!executed) {
    executed = true;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    console.log('running counter')
}else{
    console.log('NOT running counter')
}



