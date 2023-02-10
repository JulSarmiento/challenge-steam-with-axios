require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

const instance = axios.create({
  baseURL: 'https://www.giantbomb.com/api/games/'
});

async function getGamesByCategory(plataform) {
  try {
    const response = await instance.get('', {
      params: {
        filter: `plataform:plataform:${plataform}`,
        offset: 100,
        format: 'json',
        limit: 10,
        api_key: API_KEY,
      }
    });

    const gamesArray = response.data.results

    const gamesToShow = gamesArray.map((game) => {
      return {
        'name': game.name,
        'platforms': game.platforms.map((platform) => platform.name)
      }
    })

    console.log(gamesToShow);

  } catch (error) {
    console.error(error);
  }
}

getGamesByCategory('snes');

