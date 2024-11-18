<script>
    import { onMount } from "svelte";
    import Carousel from "svelte-carousel";
    import { fetchPopular } from "./api";
    
    let stories = [];
    let isLoading = true;
  
    onMount(async () => {
      try {
        stories = await fetchPopular();
        console.log("Fetched stories:", stories);
      } catch (error) {
        console.error("Error fetching stories:", error);
        stories = [];
      } finally {
        isLoading = false;
      }
    });
  </script>
  
<div class="stories-for-you">
  <h2>Popular Stories</h2>
  <div class="stories-container">
    
  
    {#if isLoading}
      <p>Loading...</p>
    {:else if stories.length === 0}
      <p>No stories available.</p>
    {:else}
      <Carousel
        particlesToShow={6}
        particlesToScroll={1}
        infinite={true}
        autoplay={true}
        dots={false}
        arrows={true}
      >
        {#each stories as story (story.link)}
          <div class="news-item">
            <a href={story.link} target="_blank" rel="noopener noreferrer">
              <div class="image-container">
                <img src={story.image || "https://via.placeholder.com/300x200"} alt={story.title} />
                <div class="overlay">
                  <h3>{story.title}</h3>
                </div>
              </div>
            </a>
          </div>
        {/each}
      </Carousel>
    {/if}
  </div>
</div>
  
  <style>

    .stories-for-you{
        width: 100%;
      max-width: 1800px;
      margin: 0 auto;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }
    .stories-container {
      width: 100%;
      max-width: 1800px;
      margin: 0 auto;
      text-align: center;
      padding: 20px;
      box-sizing: border-box;
    }
  
    h2 {
        color: #6000d3;
        margin: 0;
        padding: 20px;
        text-align: center;
    }
  
    .news-item {
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-sizing: border-box;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s ease;
    }
  
    .news-item:hover {
      transform: scale(1.05); 
    }
  
    .image-container {
      position: relative;
      height: 400px; 
      width: 100%;  
      max-width: 300px;
      margin: 0 auto;
      overflow: hidden;
    }
  
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    color: white;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
    padding: 10px;
    box-sizing: border-box;
  }
  
    .overlay h3 {
      font-size: 1.2rem;
      margin: 0;
      text-align: left;
    }
  </style>
  