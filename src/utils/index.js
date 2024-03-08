const COUNTRY_LIST_API = "https://restcountries.com/v3.1/all";
const COUNTRY_DETAIL_API = "https://restcountries.com/v3.1/name/"; // ADD COUNTRY NAME AT THE END

export async function getCountryList() {
  const countries = await fetch(COUNTRY_LIST_API);

  if (countries.status !== 200) {
    throw new Error(countries.statusText);
  }

  const countryJSON = await countries.json();

  return countryJSON;
}

export async function getCountryDetail(country) {
  const detail = await fetch(COUNTRY_DETAIL_API + country + "?fullText=true");

  if (detail.status !== 200) {
    throw new Error(detail.statusText);
  }

  const detailJSON = await detail.json();

  return detailJSON;
}
