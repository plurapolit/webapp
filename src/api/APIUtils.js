export const fetchBody = async (url, params = null) => {
  const res = await fetch(url, params);
  if (!res.ok) {
    const errorOkj = await res.json();
    throw errorOkj;
  }
  return res.json();
};

export const fetchResponse = async (url, params = null) => {
  const res = await fetch(url, params);
  return res;
};

const getParameter = () => {
  const bearerToken = (jwt) => `Bearer ${jwt}`;

  const HttpMethods = {
    GET: 'get',
    PUT: 'put',
    PATCH: 'patch',
    POST: 'post',
    DELETE: 'delete',
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

  const get = (jwt = null) => {
    let bearer = jwt;
    if (jwt) {
      bearer = bearerToken(jwt);
    }
    return {
      method: HttpMethods.GET,
      headers: {
        Accept: ContentTypes.JSON,
        Authorization: bearer,
      },
    };
  };

  const deleteParam = (jwt = null) => {
    let bearer = jwt;
    if (jwt) {
      bearer = bearerToken(jwt);
    }
    return {
      method: HttpMethods.DELETE,
      headers: {
        Accept: ContentTypes.JSON,
        Authorization: bearer,
      },
    };
  };

  return {
    post,
    get,
    delete: deleteParam,
  };
};

export const Parameter = getParameter();
