function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    h = make(h);
    document.getElementById('txt').innerHTML = h + ":" + m;
    var t = setTimeout(startTime, 500);
}
function checkTime(i){
    if(i < 10){
        i = "0" + i;
        return i;
    }
    else if (!i < 10){
        i = i;
        return i;
    }
}
const make = (a) =>{
    if (a > 12){  
        return a - 12;
    }
    else if (a === 0){
        a = 1;
        return a;
    }
    else{
        a = a;
        return a;
    }
};

function toggleBar(){
    document.getElementById('side_bar').classList.toggle('active');
}




