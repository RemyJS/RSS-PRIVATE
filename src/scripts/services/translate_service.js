async function getEnglishTitle(title) {
  // console.log("export translate");
  const key = "trnsl.1.1.20200503T203406Z.732ca858232efec6.abdb64d495644f843b7b88aed96ccdb7ffac5ac2";
  const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${key}&text=${title}&lang=ru-en`;
  const res = await fetch(url);
  const data = await res.json();

  return data;
}
// eslint-disable-next-line import/prefer-default-export
export { getEnglishTitle };
