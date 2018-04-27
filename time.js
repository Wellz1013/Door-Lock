function clocks(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = sureHour(h);
    document.getElementById('time').innerHTML = h + ":" + m;
    var t = setTimeout(clocks, 500);
}

function checkTime(a){
    if(a < 10){
        a = "0" + a;
        return a;
    }
    else{
        a = a;
        return a;
    }
}

function sureHour(b){
    if(b > 12){
        b -= 12;
        return b;
    }
    else if(b === 0){
        b = 1;
    }
}

