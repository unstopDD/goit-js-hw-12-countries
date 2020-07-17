import countryCardTpl from '../templates/country-card.hbs';
import countryListTpl from '../templates/country-list.hbs';
import refs from './refs';
import error from './error-notify';

function updateCountryMarkup(countries) {
  if (countries.length >= 2 && countries.length <= 10) {
    const countryList = countryListTpl(countries);
    refs.coutryContainer.insertAdjacentHTML('beforeend', countryList);
  } else if (countries.length === 1) {
    const countryCard = countryCardTpl(countries);
    refs.coutryContainer.insertAdjacentHTML('beforeend', countryCard);
  } else {
    error();
  }
}

export default updateCountryMarkup;
