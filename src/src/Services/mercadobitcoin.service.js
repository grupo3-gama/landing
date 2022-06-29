const api = require('axios').default;


const ENDPOINT_API = 'https://www.mercadobitcoin.com.br/api/v4';
const ENDPOINT_TRADE_PATH = "/tapi/v3/";

const config = {
  headers: {
    'Accept': 'application/json',
  }
};

async function exchangeInfo(currency) {
  try {
    const url = `${ENDPOINT_API}${currency}/fees`;

    const response = await api.get(url, config);

    return response.data;
  } catch (err) {
    console.error(err);
    return false;
  }

  
}

export { exchangeInfo }