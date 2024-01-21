export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

/**
 * @description GETリクエストを送信する
 * @param path リクエストパス
 * @returns {Promise<T | undefined>} レスポンスデータ
 */
export const commonGetFetch = async <T>(
  path: string
): Promise<T | undefined> => {
  const url = new URL(path, BASE_URL).href;

  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return undefined;
    });
};

/**
 * @description PUTリクエストを送信する
 * @param path リクエストパス
 * @param body リクエストボディ
 * @returns {Promise<T | undefined>} レスポンスデータ
 */
export const commonPutFetch = async <T, U>(
  path: string,
  body: U
): Promise<T | undefined> => {
  const url = new URL(path, BASE_URL).href;

  return fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return undefined;
    });
};
