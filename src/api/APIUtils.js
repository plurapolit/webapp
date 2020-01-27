export const fetchData = async (url, params = null) => {
  const res = await fetch(url, params);
  if (!res.ok) {
    const errorOkj = await res.json();
    throw errorOkj;
  }
  return res.json();
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

  const post = (body) => ({
    method: HttpMethods.POST,
    headers: {
      'Content-Type': ContentTypes.JSON,
    },
    body: JSON.stringify(body),
  });

  const get = (bearer = null) => ({
    method: HttpMethods.GET,
    headers: {
      Accept: ContentTypes.JSON,
      Authorization: bearer,
    },
  });

  return {
    post,
    get,
  };
};

export const Parameter = getParameter();
