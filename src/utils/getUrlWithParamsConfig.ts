import config from "../config"

export interface IApiConfigUri {
  query?: object;
  pathname: string;
  protocol: string;
  host: string;
}

interface IEndPoint {
  method: string,
  uri: {
    pathname: string,
    query?: object
  }
}

interface IFinalConfig {
  method: string,
  uri: {
    pathname: string,
    query?: object
  },
  body?: object
}

const getUrlWithParamsConfig = (endpointConfig: string, params: any) => {
  const { method, uri }: IEndPoint = config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint];
  console.log('getUrlWithParamsConfig uri ', uri)
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri, // pathname: "/api/v1/pokemon/{id}"
    query: {
      ...uri.query
    }
  }

  console.log('getUrlWithParamsConfig query ', apiConfigUri.query)
  console.log('getUrlWithParamsConfig pathname ', apiConfigUri.pathname)

  const query = {
    ...params // id: 1
  }

  const path = Object.keys(query).reduce((acc, val) => {
    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val]);
      delete query[val];
      return result
    }
    return acc
  }, apiConfigUri.pathname);

  if (method === "GET") {
    apiConfigUri.query = {
      ...apiConfigUri.query,
      ...query
    }

    console.log(method)
    console.log(apiConfigUri)
  } else {
    body = query
  }

  apiConfigUri.pathname = path;
  apiConfigUri.query = {
    ...query
  }

  const finalConfig = {
    method,
    uri: apiConfigUri,
    body
  }

  return finalConfig
}

export default getUrlWithParamsConfig
