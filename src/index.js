import fetchCountries from './js/fetchCountries';
import refs from './js/refs';
import './styles.css';
const debounce = require('lodash.debounce');

refs.serchBox.addEventListener('input', debounce(handleInput, 500));

function handleInput(e) {
  const inputValue = e.target.value;

  fetchCountries(inputValue);

  refs.coutryContainer.innerHTML = '';
}
