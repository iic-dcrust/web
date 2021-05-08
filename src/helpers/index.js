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

export const validateInput = ({ name, roll, year, branch }) => {
  const error = { title: "", body: "", items: [] };
  if (!name) {
    error.items.push("name");
  }
  if (!roll) {
    error.items.push("roll");
  }
  if (!year) {
    error.items.push("year");
  }
  if (!branch) {
    error.items.push("branch");
  }
  if (error.items.length > 0) {
    error.title = "Missing Inputs";
    error.body = "Please fill all entries";
    return error;
  }
  return null;
};

export const validateDetails = ({ email, phone, password }) => {
  const error = { title: "", body: "", items: [] };
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );
  if (!email) {
    error.items.push("email");
  }
  if (!phone) {
    error.items.push("phone");
  }
  if (!password) {
    error.items.push("password");
  }
  if (error.items.length > 0) {
    error.title = "Missing Inputs";
    error.body = "Please fill all entries";
    return error;
  }
  if (password.length < 6) {
    error.items.push("passInvalid");
    error.title = "Invalid Password";
    error.body = "Password must be at least 6 characters";
    return error;
  }
  if (phone.toString().length !== 10) {
    error.items.push("phoneInvalid");
    error.title = "Invalid Phone Number";
    error.body = "Please enter a valid phone number";
    return error;
  }
  if (!validEmail.test(email)) {
    error.items.push("emailInvalid");
    error.title = "Invalid Email";
    error.body = "Please enter a valid email address";
    return error;
  }

  return null;
};
