import updateCountryMarkup from './update-country-markup';
import refs from './refs';

function fetchCountries(serchQuery) {
  if (refs.serchBox.value.length > 0) {
    fetch(`${refs.url}/${serchQuery}`)
      .then(res => res.json())
      .then(data => updateCountryMarkup(data))
      .catch(eror => console.log(eror));
  }
}

export default fetchCountries;
