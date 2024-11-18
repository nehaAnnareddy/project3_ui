<script>
  const links = [
    { text: 'rain', icon: 'src/assets/rainyDay.png' },
    { text: 'cloud', icon: 'src/assets/cloudyDay.png' }
  ];
  function findIcon(weatherType) {
    const match = links.find(link => link.text === weatherType);
    return match ? match.icon : ''; // Return the icon URL or an empty string if not found
  }
  export let location = "Louisville";
  export let weatherData = [
    { day: "Today", icon: findIcon('rain'), high: 59, low: 50 },
    { day: "Friday", icon: findIcon('cloud'), high: 58, low: 46 },
    { day: "Saturday", icon: findIcon('cloud'), high: 59, low: 44 },
    { day: "Sunday", icon: findIcon('rain'), high: 65, low: 51 },
  ];
</script>


  <div class="weather-card">
    <div class="header">
      <div class="title">
        <span class="micon" style= "width: 8px; height: 16px; background-color: #7E1FFF; border-radius: 2px; display: inline-block; position: absolute; left: 0;}"></span>
        <span>Weather</span>
      </div>
      <div class="location">
        {location} 
        <img src="src/assets/location.png" alt="Location Icon" class="location-icon" />
      </div>
    </div>

  

  <div class="forecast">
    {#each weatherData as { day, icon, high, low }}
      <div class="forecast-item">
        <div class="day">{day}</div>
        <div class="icon">
          <img src={icon} alt="{day} weather" />
        </div>
        <div class="temp">
          <span class="high">{high || "--"}°</span>
          <span class="low">{low || "--"}°</span>
        </div>
      </div>
    {/each}
  </div>

  <div class="footer">
    <a href="#" class="see-more">See more</a>
  </div>
</div>

<style>
  .weather-card {
    width: 80%;
    max-width: 400px;
    min-width: 350px;
    border-radius: 8px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 16px;
    font-family: sans-serif;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }

.title {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative; /* Enable positioning adjustments for the icon */
  padding-left: 16px; /* Add space on the left for adjustment */
}



  .icon {
    width: 8px;
    height: 32px;
    display: inline-block;
    border-radius: 4px;
  }

  .location {
    font-size: 14px;
  }

  .location-icon {
    font-size: 14px;
  }

  .forecast {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;
    text-align: center;
  }

  .forecast-item {
    font-size: 14px;
  }

  .day {
    font-weight: lighter;
  }

  .icon img {
    width: 32px;
    height: 32px;
  }

  .temp {
    font-size: 12px;
    color: gray;
  }

  .high {
    color: black;
    font-weight: bold;
  }

  .low {
    margin-left: 4px;
  }

  .footer {
    margin-top: 16px;
    text-align: center;
  }

  .see-more {
    color: #0F69FF;
    text-decoration: none;
    font-size: 12px;
  }

  .see-more:hover {
    text-decoration: underline;
  }

  .location-icon {
    width: 16px; 
    height: 20px;
    vertical-align: top; 
    margin-left: 4px; 
  }

  .forecast {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  text-align: center;
}

.forecast-item {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: middle;
  justify-content: center;
}

.icon {
  margin-left: 20px; 
  margin-top: 10px;
  margin-bottom: 10px;
}

.icon img {
  width: 38px;
  height: 38px;
}

</style>
