var num_countdown = 45

var countdown = setInterval(()=> {
    if (num_countdown <= 1){
        clearInterval(countdown)
    }
    --num_countdown
}, 1000)













