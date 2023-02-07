require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;

// const URL = `https://api.steampowered.com/ISteamApps/GetAppList/v2/?lkey=${API_KEY}&count=20`;
const URL = `http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?appid=440&count=3&maxlength=300&format=json`

axios.get(URL)
  .then(response => {
    // const {apps} = response.data.applist;
    // const result = apps.map(app => {
    //   return {
    //     id: app.appid,
    //     name: app.name
    //   }
    // }
    // );
    // console.table(result);
    console.log(response.data.appnews.newsitems)
  })
  .catch(error => {
    console.error(error);
  });
