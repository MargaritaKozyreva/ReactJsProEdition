import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

async function req(endPoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endPoint));
  const _fetch = await fetch(uri).then(res => res.json())
  return _fetch;

}

export default req
