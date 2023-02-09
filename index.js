require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const getGamesByCategory = async (category) => {
  try {
    const URL = `https://api.rawg.io/api/games?key=${API_KEY}&genre=${category}`;
    
    const response =  await axios.get(URL, {
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })

    return response.data.results.map((game) => {
      return {
        'name': game.name,
        'genres': game.genres.map((genre) => genre.name)
      }
    })
  } catch (error) {
    console.log(error);
  }
}

getGamesByCategory('Action')
  .then((games) => console.log(games))
  .catch((error) => console.log(error));
    