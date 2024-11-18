<script>
  const dropdownIcon = 'src/assets/dropdown.png';
</script>

<div class="horoscope-card">
  <div class="header">
    <div class="title">
      <span class="icon" style= "width: 8px; height: 16px; background-color: #7E1FFF; border-radius: 2px; /* Rounded edges */ display: inline-block;"></span>
      <span>Daily Horoscope</span>
    </div>
    <div class="sign">
      Scorpio
      <img src={dropdownIcon} alt="Dropdown" class="dropdown-icon" />
    </div>
  </div>

  <div class="content">
    <img src="src/assets/horoscope.png" alt="Horoscope icon" class="horoscope-icon" />
    <div class="details">
      <div class="date"><strong>November 17</strong></div>
      <div class="description">
        Your mental alarm goes off quickly when you spot something weird today. It may be
        something a friend says or a weird situation.
      </div>
    </div>
  </div>

  <div class="footer">
    <a href="#" class="see-more">See more</a>
  </div>
</div>

<style>
  .horoscope-card {
    width: 80%;
    max-width: 400px;
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
  }

  .icon {
    width: 8px;
    height: 32px;
    background-color: #7E1FFF;
    border-radius: 4px;
  }

  .sign {
    font-weight: bold;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .dropdown-icon {
    width: 10px;
    height: 7px;
  }

  .content {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 16px;
  }

  .horoscope-icon {
    width: 50px;
    height: 50px;
  }

  .details {
    flex: 1;
  }

  .date {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .description {
    font-size: 14px;
    color: #555;
  }

  .footer {
    text-align: center;
    margin-top: 16px;
  }

  .see-more {
    color: #0F69FF;
    text-decoration: none;
    font-size: 12px;
  }

  .see-more:hover {
    text-decoration: underline;
  }
</style>
