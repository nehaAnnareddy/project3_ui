<script>
  import Sidebar from './lib/Sidebar.svelte';
  import Navbar from './lib/Navbar.svelte';
  import Landing from './lib/Landing.svelte';
</script>

<div class="container">
  <Sidebar />
  <div class="main-content">
    <Navbar />
    <Landing />
  </div>


<style>
  .container {
    display: flex;
  }

  .sidebar {
    width: 90px; 
    flex-shrink: 0; 
  }

  .main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-left: 90px; 
  }
</style>
