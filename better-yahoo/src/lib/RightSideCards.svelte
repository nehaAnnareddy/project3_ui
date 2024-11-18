<script>
  import WeatherCard from "./WeatherCard.svelte";
  import HoroscopeCard from "./HoroscopeCard.svelte";
  import TrendingNowCard from "./TrendingNowCard.svelte";

  let trendingNews = [
    "Matt Gaetz",
    "Hurricane Sara",
    "Detroit Lions",
    "The Golden Bachelor",
    "Russia-Ukraine",
    "Alex Jones",
    "Craig Melvin",
    "Tyson vs. Pau",
    "Caitlin Clark",
    "Dave Coulier",
  ];

  // Visibility states for the cards
  let showWeatherCard = true;
  let showTrendingNowCard = true;
  let showHoroscopeCard = false;

  // Hamburger menu state
  let isMenuOpen = false;

  // Function to enforce at least one and at most two cards
  function enforceCardLimit(cardName) {
    const visibleCards = [
      showWeatherCard,
      showTrendingNowCard,
      showHoroscopeCard,
    ].filter((state) => state).length;

    // Ensure at least one card is selected
    if (visibleCards === 0) {
      if (cardName === "weather") showWeatherCard = true;
      if (cardName === "trending") showTrendingNowCard = true;
      if (cardName === "horoscope") showHoroscopeCard = true;
    }

    // Ensure at most two cards are selected
    if (visibleCards > 2) {
      if (cardName === "weather") {
        if (showTrendingNowCard) showTrendingNowCard = false;
        else showHoroscopeCard = false;
      } else if (cardName === "trending") {
        if (showWeatherCard) showWeatherCard = false;
        else showHoroscopeCard = false;
      } else if (cardName === "horoscope") {
        if (showWeatherCard) showWeatherCard = false;
        else showTrendingNowCard = false;
      }
    }
  }
</script>

<div class="side-section">
  <div class="menu">
    <!-- Hamburger Icon -->
    <button class="hamburger" on:click={() => (isMenuOpen = !isMenuOpen)}>
      <div class="menu-icon">
        <svg
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="#4f17aa"
        >
          <path
            fill="#4f17aa"
            fill-rule="evenodd"
            d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
          />
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
            on:change={() => enforceCardLimit("weather")}
          />
          Weather
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={showTrendingNowCard}
            on:change={() => enforceCardLimit("trending")}
          />
          Trending Now
        </label>
        <label>
          <input
            type="checkbox"
            bind:checked={showHoroscopeCard}
            on:change={() => enforceCardLimit("horoscope")}
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
      <TrendingNowCard {trendingNews} />
    {/if}
    {#if showHoroscopeCard}
      <HoroscopeCard />
    {/if}
  </div>
</div>

<style>
  /* Side Section */
  .side-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 1rem;
  }

  /* Menu Styles */
  .menu {
    position: relative;
  }

  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
  }

  .hamburger-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .dropdown {
    position: absolute;
    top: 100%; /* Positioned directly below the button */
    right: 0;
    background: white;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1000; /* Ensures it stays above other elements */
  }

  .dropdown label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1rem;
  }

  .dropdown input {
    cursor: pointer;
  }

  /* Card Container */
  .card-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #7c59a8;
  }
</style>
