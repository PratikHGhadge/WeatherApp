const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const printCityName = document.getElementById("printCityName");
const tempRealValue = document.getElementById("tempRealValue");
const tempStatus = document.getElementById("tempstatus");

const day = document.getElementById('day')
const date = document.getElementById('date')


function getCurrentDate() {
  const today = new Date();
  const options = {year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  return formattedDate;
} 

function getCurrentDay() {
  const today = new Date();
  const options = {weekday: 'long'};
  const formattedDate = today.toLocaleDateString('en-US', options);
  return formattedDate;
}



const getInfo = async(event) => {
  event.preventDefault();
  let cityValue = cityName.value;
  if(cityValue===""){
    printCityName.innerText = 'Enter city name'
  }else{
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=3bbf51769ab907900c82a0dca148dee4`;
        

        const response = await fetch(url)

        const data = await response.json()
        const arrData = [data]
        printCityName.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`
        tempRealValue.innerText = (arrData[0].main.temp-273.15).toFixed(2)

        day.innerText = getCurrentDay();
        date.innerText = getCurrentDate();


        const tempMood = arrData[0].weather[0].main;
        //condition to check sunny or cloudy
        if (tempMood == "Clear") {
          tempstatus.innerHTML =
              "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
          } else if (tempMood == "Clouds") {
            tempstatus.innerHTML =
              "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
          } else if (tempMood == "Rain") {
            tempstatus.innerHTML =
              "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
          } else {
            tempstatus.innerHTML =
              "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";

          }


    }catch{
        cityValue = " "
        printCityName.innerText = 'Enter city name properly'
    }
  }
};

submitBtn.addEventListener("click", getInfo);



