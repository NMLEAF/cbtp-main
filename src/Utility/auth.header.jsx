// Function to read the data from the user's local storage
const getAuth = async () => {
  const userData = await JSON.parse(localStorage.getItem("user"));

  if (userData && userData.userData_token) {
    const decodedToken = await decodeTokenPayload(userData.userData_token);
    userData.userRole = decodedToken.userRole;
    userData.userId = decodedToken.userId;
    userData.firstName = decodedToken.firstName;
    return userData;
  } else {
    return {};
  }
};

// Function to decode the payload from the token
// The purpose of this code is to take a JWT token, extract its payload, decode it from Base64Url encoding, and then convert the decoded payload into a JavaScript object for further use and manipulation
const decodeTokenPayload = (token) => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );
  return JSON.parse(jsonPayload);
};

export default getAuth;
