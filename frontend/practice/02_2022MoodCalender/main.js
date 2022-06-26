var date = new Date();

var currentYear = date.getFullYear();
var currentMonth = date.getMonth();

var lastMonth = new Date(currentYear, currentMonth,0)
var lastMonth_endDay = lastMonth.getDate();
var lastMonth_endDay_week = lastMonth.getDay();
var currentMonth_startDay_week = lastMonth_endDay_week +1;

var endDay = new Date(currentYear, currentMonth+1,0)
var nextDate = endDay.getDate()
var nextDay = endDay.getDay()

calendar = document.querySelector('.calendar')
calendar.innerHTML = '';

const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
const weekDay =['SUN','MON','TUE','WED','THU','FRI','SAT'];

const colors = ['#2d6b5f', '#72e3a6', '#dff4c7', '#edbf98', '#ea3d36'];
const defaultColor = '#888';
let activeColor = '';

let monthInnerHTML=''


months.forEach((month,idx)=>{
    monthInnerHTML = monthInnerHTML +`
    <div class="months month${idx}">
        <h5>${months[idx]}</h5>
        <div class="weekday_container">
            ${weekDay.map(weekDay => `<div class="weekday">${weekDay}</div>`).join('')}
        </div>
        <div class="day_container">
            <div class="day"></div>
        </div>
    </div>`
});

calendar.innerHTML = monthInnerHTML

const getAllDays = currentYear => {
    const firstDay = new Date(`Jan 1 ${currentYear}`)
    const lastDay = new Date(`Dec 31 ${currentYear}`)
    const days = [firstDay]
    const newdays=[]

    let lastAryIdx = firstDay;

    while(lastAryIdx.getTime() != lastDay.getTime()){
        days.push(addDays(lastAryIdx))
        lastAryIdx = days[days.length -1]
    }
    return days
}


function addDays(year){
    let res = new Date(year)
    res.setDate(year.getDate()+1)
    console.log(res)
}

const dates = getAllDays(currentYear)
// console.log(dates)

// var arr = [100]
// var e = 100
// for(let i = 0; i<10; i++){
//     arr.push(mult(e))
//     e = arr[arr.length-1]
// }

// function mult(e){
//     let res = e
//     return res+1
// }

// console.log(arr)