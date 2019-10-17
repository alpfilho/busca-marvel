import md5 from "md5";
import axios from "axios";

const publicKey = "e783f35fecb11d522f145f4a2fc199f6";
/** É necessário instalar a key no .env da pasta para que a busca funcione */
const privateKey = process.env.REACT_APP_MARVEL_API_PRIVATE_KEY;

const authorize = () => {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  return `ts=${timestamp}&apikey=${publicKey}&hash=${hash}`;
};

export const fetchChars = (search, page = 0, limit = 10) => {
  /* Obti o offset a partir do valor da página 
  multiplicado pela quantidade de elementos por página */
  const offset = page * limit;

  return axios.get(
    `http://gateway.marvel.com/v1/public/characters?${authorize()}&limit=${limit}&offset=${offset}`
  );
};
