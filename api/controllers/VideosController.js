const config = require('../config');
const axios = require('axios');

class VideosController {
 
  async getVideos(lim) {
    const limit = lim > 0 ? `&maxResults=${lim}` : '';
    return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q="Kylie Minogue"&type=video${limit}&key=${config.credentials.youtubeKey}`)
        .then( async (response) => response.data.items)
        .catch((error) => {
            console.log(error);
        });
  }

}

module.exports = VideosController;
