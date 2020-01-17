export const fetchData = async (url, params = null) => {
  const res = await fetch(url, params);
  // const text = await res.text();
  // const json = await res.json();
  console.log('res ', res);
  const blob = res.headers.get('x-runtime');
  // console.log('text', text);
  // console.log('blob', json);
  console.log('blob', blob);
  const data = await res.json();
  return data;
};

export const bearerToken = (jwt) => `Bearer ${jwt}`;

const getParameter = () => {
  const HttpMethods = {
    GET: 'get',
    PUT: 'put',
    PATCH: 'patch',
    POST: 'post',
  };

  const ContentTypes = {
    JSON: 'application/json',
  };

  const post = (data) => ({
    method: HttpMethods.POST,
    headers: {
      'Content-Type': ContentTypes.JSON,
    },
    body: JSON.stringify(data),
  });

  return {
    post,
  };
};

export const Parameter = getParameter();
