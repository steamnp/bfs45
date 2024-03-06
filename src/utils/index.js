const COUNTRY_LIST_API = "https://restcountries.com/v3.1/all";
const COUNTRY_DETAIL_API = "https://restcountries.com/v3.1/name/"; // ADD COUNTRY NAME AT THE END

export async function getCountryList() {
  const countries = await fetch(COUNTRY_LIST_API);
  const countryJSON = await countries.json();

  return countryJSON;
}

export async function getCountryDetail(country) {
  const detail = await fetch(COUNTRY_DETAIL_API + country + "?fullText=true");
  const detailJSON = await detail.json();

  return detailJSON;
}
