import config from "../config"

const getUrlWithParamsConfig = (endpointConfig: string) => {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endpointConfig].uri,
    query: {}
  };
  return url
}

export default getUrlWithParamsConfig