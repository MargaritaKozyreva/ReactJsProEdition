import config from "../config"

const getUrlWithParamsConfig = (endpointConfig: string, query: object) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {}
  };

  const path = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result
    }
    return acc
  }, url.pathname);

  url.pathname = path;
  url.query = {
    ...query
  }

  return url
}

export default getUrlWithParamsConfig