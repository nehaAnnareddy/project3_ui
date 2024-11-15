export async function fetchTrendingNews() {
  const apiKey = "fkzmGJWZU84L8CddLeZXDTKgSgByox3R";
  const API_URL = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${apiKey}`;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return data.results.map((item) => ({
      title: item.title,
      image: item.media[0]?.["media-metadata"]?.[2]?.url || "",
      subheading: item.abstract,
      link: item.url,
    }));
  } catch (error) {
    console.error("Error fetching trending news:", error);
    return [];
  }
}
