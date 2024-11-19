<script>
  import { onMount } from "svelte";
  import { fetchTopStories } from "./api";

  let stories = [];

  const generateRandomHeight = () => {
    const minHeight = 400;
    const maxHeight = 600;
    return Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    // return Math.random() < 0.5 ? minHeight : maxHeight;
  };

  const generateRandomReadingTime = () => {
    const minTime = 3;
    const maxTime = 12;
    return Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
  };

  const customArticles = [
    {
      title: "This Wonder Fruit Lowers Years From Your Age",
      subheading:
        "Find out what this wonder fruit is and how it can change your life.",
      category: "advertisement",
      link: "https://example.com/",
      image: "/ads/1.jpg",
    },
    {
      title: "Get Your Confidence Back, Just Like The Good Old Days.",
      subheading:
        "We get it, you hair is gone! But it is not too late, meet our hair experts and see what we can do.",
      category: "advertisement",
      link: "https://example.com/",
      image: "/ads/2.jpg",
    },
    {
      title: "Safe Money On Your Phone Every Month",
      subheading:
        "You could be overpaying on your phone bill but don't worry, we have a solution for you.",
      category: "advertisement",
      link: "https://example.com/",
      image: "/ads/3.jpg",
    },
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  onMount(async () => {
    try {
      const fetchedStories = await fetchTopStories();
      const enhancedFetchedStories = fetchedStories.map((story) => ({
        ...story,
        randomHeight: generateRandomHeight(),
        readingTime: generateRandomReadingTime(),
      }));
      const enhancedCustomArticles = customArticles.map((story) => ({
        ...story,
        randomHeight: generateRandomHeight(),
        readingTime: generateRandomReadingTime(),
      }));
      stories = shuffleArray([
        ...enhancedFetchedStories,
        ...enhancedCustomArticles,
      ]);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  });

  const categoryColors = {
    arts: "#FF5733",
    automobiles: "#C70039",
    books: "#900C3F",
    climate: "#3498DB",
    business: "#581845",
    fashion: "#FFC300",
    food: "#FF5733",
    health: "#28B463",
    home: "#3498DB",
    insider: "#E74C3C",
    magazine: "#8E44AD",
    movies: "#2E86C1",
    national: "#1ABC9C",
    nyregion: "#F1C40F",
    obituaries: "#7F8C8D",
    opinion: "#34495E",
    politics: "#E67E22",
    realEstate: "#D35400",
    science: "#2ECC71",
    sports: "#3498DB",
    sundayReview: "#9B59B6",
    technology: "#16A085",
    theater: "#D5D8DC",
    travel: "#1F618D",
    upshot: "#AF7AC5",
    world: "#F39C12",
    us: "#FF0000",
    briefing: "#ff5733",
    advertisement: "#8e44ad",
  };

  const defaultColor = "gray";
</script>

<div class="trending-container">
  <h2>Trending Today</h2>
  <div class="gallery">
    {#each stories as story}
      <a target="_blank" href={story.link}>
        <div class="gallery-item" style="height: {story.randomHeight}px;">
          <div class="reading-pill">{story.readingTime} MIN READ</div>
          <div class="image-wrapper">
            <img draggable="false" src={story.image} alt={story.title} />
            <div class="overlay">
              <div class="text">
                <h3>{story.title}</h3>
                <p>{story.subheading}</p>
                <p
                  style="font-weight: 600; text-transform: capitalize; color: {categoryColors[
                    story.category
                  ] || defaultColor};"
                >
                  {story.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .trending-container {
    width: 100%;
    text-align: center;
  }

  h2 {
    color: #6000d3;
    margin: 0;
    padding: 20px;
  }

  .gallery {
    column-count: 4;
    column-gap: 20px;
    padding: 30px;
    box-sizing: border-box;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
  }

  .gallery-item {
    break-inside: avoid;
    margin-bottom: 20px;
    background-color: #f9f9f9;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    position: relative;
    cursor: pointer;
  }

  .image-wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  .image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .image-wrapper:hover img {
    transform: scale(1.05);
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.5),
      transparent
    );
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 10px;
    box-sizing: border-box;
    pointer-events: none;
  }

  .text {
    color: white;
    text-align: left;
  }

  .reading-pill {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: rgba(223, 227, 230, 0.8);
    color: black;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    z-index: 1;
    pointer-events: none;
    font-weight: 400;
    border-style: solid;
  }
</style>
