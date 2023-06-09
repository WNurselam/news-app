import axios from "axios";


export const fetchApi = async (category) => {
  const { data } = await axios.get(
    `https://api.newscatcherapi.com/v2/search?q=${category}&lang=en&sort_by=relevancy&page=1&page_size=30`,
    {
      headers: {
        "x-api-key": "Xh-KSTnpAlsHqVvFm7xiHGubrmWv95N7e5_mdLrEjes",
      },
    }
  );
  return data.articles;

};
