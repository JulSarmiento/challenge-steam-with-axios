require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

// const getGamesByCategory = async (category) => {
//   try {
//     const URL = `https://api.rawg.io/api/games?key=${API_KEY}&genre=${category}`;
    
//     const response =  await axios.get(URL, {
//       'headers': {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       }
//     })

//     return response.data.results.map((game) => {
//       return {
//         'name': game.name,
//         'genres': game.genres.map((genre) => genre.name)
//       }
//     })
//   } catch (error) {
//     console.log(error);
//   }
// }

// getGamesByCategory('Action')
//   .then((games) => console.log(games))
//   .catch((error) => console.log(error));
    

// const instance = axios.create({
//   baseURL: 'https://api.rawg.io/api/games'
// });

// async function getGamesByCategory(category) {
//   try {
//     const response = await instance.get('', {
//       params: {
//         genres: category,
//         key: API_KEY
//       }
//     });
//     const games = response.data.results.map((game) => {
//       return {
//         'name': game.name,
//         'genres': game.genres.map((genre) => genre.name)
//         };
//       });
//     console.log(games);
//   } catch (error) {
//     console.error(error);
//   }
// }

const instance = axios.create({
  baseURL: 'https://www.giantbomb.com/api/games/'
});

async function getGamesByCategory(category) {
  try {
    const response = await instance.get('', {
      params: {
        filter: `genre:genre:${category}`,
        format: 'json',
        limit: 10,
        api_key: API_KEY,
      }
    });

    // console.log('response', response.data.results.length);
    const gamesArray = response.data.results

    const gamesToShow = gamesArray.map((game) => {
      return {
        'name': game.name,
        'genres': game.genres ? game.genres.map((genre) => genre.name) : []
      }
    })

    console.log(gamesToShow);

  } catch (error) {
    console.error(error);
  }
}

getGamesByCategory('MMORPG');

