export const parseJwt = (token) => {
    if ((token !== null) & (token !== undefined)) {
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace("-", "+").replace("_", "/");
      return JSON.parse(window.atob(base64));
    }
    return undefined;
  };