<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Trending from './lib/Trending.svelte';
  import RightSideCards from './lib/RightSideCards.svelte';
  
</script>

<div class="container">
  <div class="sidebar"> <!-- Ensure this matches the CSS selector -->
    <Sidebar />
  </div>
  <div class="main-content">
    <Navbar />
    <Trending />

    <RightSideCards />
    
  </div>
</div>

<style>
  .container {
    display: flex;
  }

  .sidebar {
    width: 90px; /* Match sidebar width here */
    flex-shrink: 0; /* Ensure sidebar width stays fixed */
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
</style>
