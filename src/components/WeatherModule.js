
function WeatherModule (props){
  let WhatIsTheWeather = props.weather;
  return <>
  <h2 className="fs-5"><a href="https://ya.ru?s=weather" className="text-decoration-none">Погода</a></h2>
  <div className="d-flex align-items-center justify-content-between">
    <img src = {WhatIsTheWeather.icon} alt="weather"/>
    <div className="fs-1">{WhatIsTheWeather.temperatureNow}°</div>
    <div >
      <div >Утром {WhatIsTheWeather.temperatureMorning},</div>
      <div >днём {WhatIsTheWeather.temperatureEvening}</div>
    </div>
  </div>
  </>


 

}
export default WeatherModule