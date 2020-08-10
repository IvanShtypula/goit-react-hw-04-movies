import queryString from "query-string";

export default function getQueryParams(qsp) {
  return queryString.parse(qsp);
}
