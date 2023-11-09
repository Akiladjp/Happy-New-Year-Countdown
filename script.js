let vDay;
let vHour;
let vMin;
let vSec;
let cYear;
let daysFeb;
let cMonth;
let daysLeft;
let daysPerYear;

 let interval = window.setInterval(function(){
    let cDate = new Date();
    cHour = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cDay = cDate.getDate();
    cYear = cDate.getFullYear();
    cMonth = cDate.getMonth() + 1;


    if(cYear % 4 == 0) {
        daysPerYear= 366;
        daysFeb = 29;
    }

    else {
        daysPerYear = 365;
        daysFeb = 28;
    }

    switch(cMonth) {
        case 1:
            daysLeft = daysPerYear;
            break;
    
        case 2:
            daysLeft = daysPerYear - 31;
            break;
    
        case 3:
            daysLeft = daysPerYear - (31 + daysFeb);
            break;
    
        case 4:
            daysLeft = daysPerYear - (31 + daysFeb + 31);
            break;
    
        case 5:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30);
            break;
    
        case 6:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31);
            break;
    
        case 7:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30);
            break;
    
        case 8:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30 + 31);
            break;
    
        case 9:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30 + 31 + 31);
            break;
    
        case 10:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30 + 31 + 31 + 30);
            break;
    
        case 11:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31);
            break;
    
        case 12:
            daysLeft = daysPerYear - (31 + daysFeb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30);
            break;
    
        default:
            break;
    }
    

    document.getElementById("seconds").innerHTML = cSec;
    document.getElementById("minutes").innerHTML = 60-cMin;
    document.getElementById("hours").innerHTML = 24-cHour;
    document.getElementById("days").innerHTML = daysLeft - cDay;

 }, 1000);
