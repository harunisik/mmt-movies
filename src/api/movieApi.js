import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/movies";

export function getMovies(queryParams) {
  let url = baseUrl;
  if (queryParams) {
    url = baseUrl + "?" + queryParams;
  }
  return fetch(url).then(handleResponse).catch(handleError);
}
