<script>
  export let trendingNews = [
    'Matt Gaetz',
    'Hurricane Sara',
    'Detroit Lions',
    'The Golden Bachelor',
    'Russia-Ukraine',
    'Alex Jones',
    'Craig Melvin',
    'Tyson vs. Pau',
    'Caitlin Clark',
    'Dave Coulier'
  ];
</script>

<div class="trending-card">
  <div class="header">
    <div class="title">
      <span class="icon" style= "width: 8px; height: 16px; background-color: #7E1FFF; border-radius: 2px; /* Rounded edges */ display: inline-block;"></span>
      <span>Trending Now</span>
    </div>
  </div>

  <div class="trending-list">
    <div class="column">
      {#each trendingNews.slice(0, 5) as item, index}
        <div class="item">
          <span class="index">{index + 1}.</span> {item}
        </div>
      {/each}
    </div>
    <div class="column">
      {#each trendingNews.slice(5) as item, index}
        <div class="item">
          <span class="index">{index + 6}.</span> {item}
        </div>
      {/each}
    </div>
  </div>

</div>

<style>
  .trending-card {
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

  .trending-list {
    display: flex;
    gap: 16px;
    text-align: center;
  }

  .column {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
  }

  .item {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .index {
    color: #7E1FFF;
    font-weight: bold;
  }

</style>
