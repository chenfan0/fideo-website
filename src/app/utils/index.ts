import md5 from "md5";

export function genRandomString() {
  return (
    Date.now().toString(16).slice(0, 6) +
    "-" +
    Math.random().toString(16).slice(2, 8)
  );
}
export function nowDate() {
  return Math.floor(new Date().valueOf() / 1000);
}

export function getHash(params: any, appSecret: string) {
  const sortedParams = Object.keys(params)
    .filter((key) => params[key] && key !== "hash") //过滤掉空值和hash本身
    .sort()
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  const stringSignTemp = sortedParams + appSecret;
  const hash = md5(stringSignTemp);
  return hash;
}