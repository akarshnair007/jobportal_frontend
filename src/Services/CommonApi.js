import axios from "axios";

export const CommonApi = async (httpmethod, url, reqBody, reqHeader) => {
  const config = {
    method: httpmethod,
    url,
    data: reqBody,
    headers: reqHeader ? reqHeader : { "Content-Type": "application/json" },
  };

  return await axios(config)
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => {
      return error;
    });
};
