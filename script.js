let resultcont = document.getElementById('resultcont');

const API_Key = '8675c0e6e4d46615adb116ad1768cdde';

function showreport() {
  let city = document.getElementById('citynameinput').value;
  console.log(city);

  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' +
      city +
      '&appid=' +
      API_Key
  )
    .then((data) => {
      return data.json();
    })
    .then((respObj) => {
      if (respObj.cod == '404') {
        resultcont.innerHTML = `<div class="card shadow-0 border" id="notfound"><h1>City Not Found</h1></div>`;
      } else {
        console.log(respObj);
        resultcont.innerHTML = `<div class="card shadow-0 border" id=reportcard>
          <div class="card-body p-4">

            <h4 class="mb-1 sfw-normal">${
              city[0].toUpperCase() + city.substring(1)
            }, ${respObj.sys.country}</h4>
            <p class="mb-2">Current temperature: <strong>${(
              respObj.main.temp - 273.15
            ).toFixed(2)}°C</strong></p>
            <p>Feels like: <strong>${(respObj.main.feels_like - 273.15).toFixed(
              2
            )}°C</strong></p>
            <p>Max: <strong>${(respObj.main.temp_max - 273.15).toFixed(
              2
            )}°C</strong>, Min: <strong>${(
          respObj.main.temp_min - 273.15
        ).toFixed(2)}°C</strong></p>
            <p>Humidity: <strong>${respObj.main.humidity}%</strong></p>

            <div class="d-flex flex-row align-items-center">
              <p class="mb-0 me-4">${
                respObj.weather[0].description[0].toUpperCase() +
                respObj.weather[0].description.substring(1)
              }</p>
                              
              <i class="fas fa-cloud fa-3x" style="color: #eee;"></i>
            </div>

          </div>
        </div>`;
      }
    });
}
