<script>
  import WeatherCard from './WeatherCard.svelte';
  import HoroscopeCard from './HoroscopeCard.svelte';
  import TrendingNowCard from './TrendingNowCard.svelte';

  let trendingNews = [
    'Matt Gaetz',
    'Hurricane Sara',
    'Detroit Lions',
    'The Golden Bachelor',
    'Russia-Ukraine',
    'Alex Jones',
    'Craig Melvin',
    'Tyson vs. Pau',
    'Caitlin Clark',
    'Dave Coulier',
  ];

  // Visibility states for the cards
  let showWeatherCard = true;
  let showTrendingNowCard = true;
  let showHoroscopeCard = true;

  // Hamburger menu state
  let isMenuOpen = false;
</script>

<div class="side-section">
  <div class="menu">
    <!-- Hamburger Icon -->
    <button class="hamburger" on:click={() => (isMenuOpen = !isMenuOpen)}>
      <div class="menu-icon">
        <!-- Menu icon for expanding/collapsing the sidebar -->
        <svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f17aa">
          <g id="SVGRepo_bgCarrier" stroke-width="0"/>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> 
            <path fill="#4f17aa" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
          </g>
        </svg>
      </div>
     </button>
    <!-- Dropdown Menu -->
    {#if isMenuOpen}
      <div class="dropdown">
        <label>
          <input
            type="checkbox"
            bind:checked={showWeatherCard}
          />
          Weather
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={showTrendingNowCard}
          />
          Trending Now
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={showHoroscopeCard}
          />
          Daily Horoscope
        </label>
      </div>
    {/if}
  </div>

  <div class="card-container">
    {#if showWeatherCard}
      <WeatherCard />
    {/if}
    {#if showTrendingNowCard}
      <TrendingNowCard trendingNews={trendingNews} />
    {/if}
    {#if showHoroscopeCard}
      <HoroscopeCard />
    {/if}
  </div>
</div>

<style>
  /* Side Section */
  .side-section {
   
  }

  /* Menu Styles */
  .menu {
    position: relative;
    top: 40px;
    margin-bottom: 70px; /* Space between menu and cards */
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    margin-right: 60px;
  }

  .hamburger-icon {
    width: 25px;
    height: 25px;
  }

  .dropdown {
    position: absolute;
    right: 0;
    top: 40px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .dropdown label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .dropdown input {
    cursor: pointer;
  }

  /* Card Container */
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  svg {
      padding-top: 15px;
      width: 24px;
      height: 24px;
      color: #7c59a8;
    }
</style>
