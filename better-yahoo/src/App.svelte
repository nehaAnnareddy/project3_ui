<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Navbar from './lib/Navbar.svelte';
  import TopBanner from './lib/TopBanner.svelte';
  import Trending from './lib/Trending.svelte';
  import StoriesForYou from './lib/StoriesForYou.svelte';
  import RightSideCards from './lib/RightSideCards.svelte';
  
</script>

<div class="container">
  <div class="sidebar"> <!-- Ensure this matches the CSS selector -->
    <Sidebar />
  </div>
  <div class="main-content">
    <Navbar />

  <div style="display:flex">
    <div style="padding: 10px 40px; width: 1000px; ">   
      <TopBanner></TopBanner>
    </div>
    <RightSideCards />
  </div>

    
    <StoriesForYou/>
    <Trending />

    
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
