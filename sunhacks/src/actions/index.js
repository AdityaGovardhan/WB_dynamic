import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
const ROOT_URL = 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?format=json';
// const ROOT_URL = 'https://www.googleapis.com/analytics/v3/data/ga';
// const API_KEY = 'AIzaSyCbYI_0eAQwblsi3wdGksEyLtzRrgvoUMw';

export function fetchData(st) {
  console.log('From Action:', st);
  // const request = axios.get(`${ROOT_URL}?key=${API_KEY}`);
  // const url = `${ROOT_URL}&q=${st},us`;
  const payload = axios.get(
    `https://api.datausa.io/api/?show=geo&sumlevel=state&required=avg_wage`
  );
  return { type: FETCH_DATA, payload };
}

// redux-thunk for handling async actions
// export function fetchData() {
//   const request = axios.get('http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A');

//   return dispatch => {
//     request.then(({ data }) => {
//       dispatch({ type: 'FETCH_DATA', payload: data });
//     });
//   };
// }
// const payload = axios.get(
//   'https://api.datausa.io/api/join?required=income,adult_obesity&show=geo'
// );
