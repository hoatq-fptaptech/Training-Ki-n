var min = 10;
var sec = 0;
var t;
var mi = document.getElementById("minutes");// object
var se = document.getElementById("seconds");
function timer(){
    t = setInterval(function(){
        // Toán tử 3 ngôi
        let m = min<10?"0"+min:min; // variable = condition? expression (if true): expression (if false)
        let s = sec<10?"0"+sec:sec;
       //console.log(m+":"+s);
    //    mi.innerText = m;
        mi.innerHTML = `<i>${m}</i>`;
        mi.style.color = "red"
        mi.style.fontSize = "50px"
       se.innerText = s;
       sec--;
       if(sec < 0){
        sec = 59;
        min--;
       }
       if(min<0){
         clearInterval(t);// xóa bỏ chạy vĩnh viễn;
       }     
    },100);
}
//timer();
var students = [
    "Nguyễn Văn An",
    "Lê Minh Khôi",
    "Đỗ Văn Dũng"
]
var list = document.getElementById("list");
for(let i =0;i<students.length;i++){
    list.innerHTML += `<li>${students[i]}</li>`;
}
var data = {
    "coord": {
      "lon": 105.8412,
      "lat": 21.0245
    },
    "weather": [
      {
        "id": 802,
        "main": "Clouds",
        "description": "scattered clouds",
        "icon": "03d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 20,
      "feels_like": 19.57,
      "temp_min": 20,
      "temp_max": 20,
      "pressure": 1014,
      "humidity": 58,
      "sea_level": 1014,
      "grnd_level": 1012
    },
    "visibility": 10000,
    "wind": {
      "speed": 3.03,
      "deg": 130,
      "gust": 2.92
    },
    "clouds": {
      "all": 39
    },
    "dt": 1670058069,
    "sys": {
      "type": 1,
      "id": 9308,
      "country": "VN",
      "sunrise": 1670023104,
      "sunset": 1670062471
    },
    "timezone": 25200,
    "id": 1581130,
    "name": "Hanoi",
    "cod": 200
  }