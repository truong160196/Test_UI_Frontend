import axios from 'axios';

/**
 * Received success when send request HTTP
 *
 * @param {*} method The method include GET, POST, PUT, DELETE, ...
 * @param {*} statusCode The status code HTTP: 1xx, 2xx, 3xx, 4xx, 5xx
 * @returns true/false
 *
 * when status === 200 && method GET/PUT/DELETE => return true
 * when status === 201 && method POST => return true
 * return false
 */
export function receivedSuccess(method, statusCode) {
  // check response with status 200
  if ((method === 'GET' || method === 'PUT' || method === 'DELETE') && statusCode === 200) {
    return true;
  }

  // check response with status 201
  if (method === 'POST' && statusCode === 201) {
    return true;
  }

  return false;
}

export default function ApiHelper(endpoint, body, method = 'GET', header = {}, responseTypes = 'json') {
  return axios.request({
    method,
    url: `${endpoint}`,
    data: body,
    headers: header,
    responseType: responseTypes,
  }).then((res) => {
    const resultResponseChecker = receivedSuccess(method, res.status);
    if (resultResponseChecker === false) {
      res.data = {};
    }

    return res;
  }).catch((e) => {
    if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
      const result = {
        data: {
          error: (
            e.response && e.response.data && e.response.data.msg ? e.response.data.msg
              : e.message || 'Origin has been blocked by CORS policy'
          ),
        },
        status: (e.response && e.response.status ? e.response.status : 403),
      };
      return result;
    }
    return { data: { } };
  });
}