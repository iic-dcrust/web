export const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};

export const validateInput = ({ username, pass, confirm }) => {
  if (username.length < 6) {
    return {
      title: "Username too short",
      body: "Please enter atleast 6 characters",
    };
  }
  if (pass.length < 6) {
    return {
      title: "Password too short",
      body: "Please enter atleast 6 characters",
    };
  }
  if (pass !== confirm) {
    return {
      title: "Password and Confirm Password should match",
      body: "Please check the details entered",
    };
  }
  return null;
};

export const validateDetails = () => {
  return null;
};
