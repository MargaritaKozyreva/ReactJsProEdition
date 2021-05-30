import config from "../config"

interface IApiConfigUri {
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
  let body = {};

  const apiConfigUri: IApiConfigUri = {
    ...config.client.server,
    ...uri,
    query: {
      ...uri.query
    }
  }

  const query = {
    ...params
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
  } else {
    body = query
  }

  apiConfigUri.pathname = path;
  apiConfigUri.query = {
    ...query
  }

  const finalConfig: IFinalConfig = {
    method,
    uri: apiConfigUri,
    body
  }

  console.log(finalConfig)

  return finalConfig
}

export default getUrlWithParamsConfig
