let input = document.querySelector('.input_text');
let name_ = document.querySelector('#name');
let temp_ = document.querySelector('#temperature');
let desc_ = document.querySelector('#description');
let button= document.querySelector('#submit');
let changeVideo = document.querySelector('#myVideo')


button.addEventListener('click', async function () {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=60a5a078233039bfbb0986aa61412293&units=metric`);
      const data = await response.json();
     
      
        let countryName = data.name
        let countryTemp = data.main.temp 
        let countryDesc = data.weather[0].description 
        let main = data.weather[0].main
      

        name_.innerHTML = countryName;
        temp_.innerHTML = countryTemp.toFixed() + ` °C`; 
        desc_.innerHTML = countryDesc; 

        
        //change video background
        if (main == 'Thunderstorm') {

            changeVideo.src = './videos/thunderstorm.mp4';
            changeVideo.load();
            changeVideo.play();

        } else if (main == 'Drizzle') {

            changeVideo.src = './videos/rain.mp4';
            changeVideo.load();
            changeVideo.play();
        
        } else if (main == 'Rain') {

          changeVideo.src = './videos/rain.mp4';
          changeVideo.load();
          changeVideo.play();
      
        } else if (main == 'Snow') {

          changeVideo.src = './videos/snow.mp4';
          changeVideo.load();
          changeVideo.play();
    
        } else if (data.weather[0].description  == 'clear sky') {
 
          changeVideo.src = './videos/clearSky.mp4';
          changeVideo.load();
          changeVideo.play();

        } else if (data.weather[0].description == 'few clouds') {
          
          changeVideo.src = './videos/fewClouds.mp4';
          changeVideo.load();
          changeVideo.play();

        } else if (data.weather[0].description == 'scattered clouds') {
          
          changeVideo.src = './videos/scatteredClouds.mp4';
          changeVideo.load();
          changeVideo.play();

        } else if (data.weather[0].description == 'broken clouds') {
          
          changeVideo.src = './videos/brokenClouds.mov';
          changeVideo.load();
          changeVideo.play();

        } else if (data.weather[0].description == 'mist') {

          changeVideo.src = './videos/mist.mov';
          changeVideo.load();
          changeVideo.play();

        } else if (data.weather[0].description == 'overcast clouds') {

          changeVideo.src = './videos/overcastClouds.mp4';
          changeVideo.load();
          changeVideo.play();
        }        

        // the difference between "main" and "data.weather[0].description"
        // the first one 'Rain' includes several types of storms within a group. 
        // the second one is more specific, for example if the code "data.weather[0].description == 'overcast clouds"
        // is true, a specific video for that type of cloud will be shown.
      
    } catch (wrongCity) {
      alert("Error, try again");
    }
});

 
