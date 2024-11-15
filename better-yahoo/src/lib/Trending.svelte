<script>
  import { onMount } from "svelte";
  import { fetchTrendingNews } from "./api";

  let stories = [];
  onMount(async () => {
    try {
      stories = await fetchTrendingNews();
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  });
</script>

<div class="trending-container">
  <h2>Trending Today</h2>
  {#each stories as story}
    <div class="news-item">
      <h2>{story.title}</h2>
      {#if story.image}
        <img src={story.image} alt={story.title} />
      {/if}
      <p>{story.subheading}</p>
      <a href={story.link} target="_blank">Read More</a>
    </div>
  {/each}
</div>

<style>
  .trending-container {
    width: 100%;
    text-align: center;
  }

  h2 {
    color: #6000d3;
    margin: 0;
  }
</style>
