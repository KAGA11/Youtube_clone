import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'x-rapidapi-key': 'ce9d4da23fmshc752171a673ae46p1b8f3djsn2a6b34265499',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
};



export const fetchFromAPI = async ( url:string ):Promise<any> => {
    // response
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}