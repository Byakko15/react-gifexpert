export const getGifs = async (category) => {
  const URL = "https://api.giphy.com/v1/gifs/search";
  const API_KEY = "iA945auGmVdql0kKFNygGsgX4Rq03IVr";
  const limit = 5;

  const response = await fetch(
    `${URL}?api_key=${API_KEY}&q=${category}&limit=${limit}`
  );
  const {data} = await response.json();

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return gifs;
};
