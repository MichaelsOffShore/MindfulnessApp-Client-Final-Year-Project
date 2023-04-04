/*
function isValidToken(token) {
  var tokenValid = false;
  axios
    .get("https://prickly-waistcoat-cod.cyclic.app/tokenValidation?token=" + token)
    .then((response) => {
      console.log("TOKEN RESPONSE IS: " + response.data);
      tokenValid = response.data === true;
      if (tokenValid) {
        console.log("Token is valid");
        return true;
      } else {
        console.log("Token is NOT valid");
        return false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
  return true;
}
*/
function isValidToken(token) {
return false;
}
module.exports = isValidToken;
