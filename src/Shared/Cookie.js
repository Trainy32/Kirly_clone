export const setCookie = (cookie_name, value, miuntes = 5) => {
    const expTime = new Date();
    expTime.setMinutes( expTime.getMinutes() + miuntes )
    document.cookie = `${cookie_name}=${value}; exp=${expTime.toUTCString()}`;

    console.log(expTime, expTime.toUTCString())
  }

export const getCookie = (cookie_name) => {
  console.log(cookie_name)
  let value = "; " + document.cookie;
  let parts = value.split(`; ${cookie_name}=`);

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

export const deleteCookie = (cookie_name) => {
  document.cookie = cookie_name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};


