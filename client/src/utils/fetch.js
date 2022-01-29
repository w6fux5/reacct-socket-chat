const SERVER = 'http://localhost:8081/api';

export const fetchSinToken = async (endPoint, data, method = 'GET') => {
  const url = `${SERVER}/${endPoint}`;

  if (method === 'GET') {
    const response = await fetch(url);

    return await response.json();
  } else {
    const response = await fetch(url, {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(data),
    });

    return await response.json();
  }
};
