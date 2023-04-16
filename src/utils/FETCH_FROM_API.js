/* eslint-disable no-lone-blocks */
import axios from 'axios';

const key = "AIzaSyAHkDwOtbYCeXQ23dgUWdiE3L7k7CAOa9A";


// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=AIzaSyAHkDwOtbYCeXQ23dgUWdiE3L7k7CAOa9A


export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// const options = {
//   params: {
//     maxResults: 50,
//     // chart: "mostPopular",
//     regionCode: "IN",

//   },
//   headers: {
//     // 'X-RapidAPI-Key': "AIzaSyAHkDwOtbYCeXQ23dgUWdiE3L7k7CAOa9A",
//     // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
//   },
// };

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}&maxResults=50&regionCode=US&key=${key}`);

  return data;
};


