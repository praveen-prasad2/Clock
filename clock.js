function dateChange(){
    let d=new Date()
    let hour=d.getHours()
    let minute=d.getMinutes()
    let second=d.getSeconds()
    let millisecond=d.getMilliseconds()
    let date=d.getDate()
    let month=d.getMonth()
    let year=d.getFullYear()

    document.getElementById("hour")
    .innerHTML=hour
    document.getElementById("minute")
    .innerHTML=minute
    document.getElementById("second")
    .innerHTML=second
    document.getElementById("milli")
    .innerHTML=millisecond
    document.getElementById("date")
    .innerHTML=date
    document.getElementById("month")
    .innerHTML=month+1
    document.getElementById("year")
    .innerHTML=year
    }

    setInterval(dateChange,1000)