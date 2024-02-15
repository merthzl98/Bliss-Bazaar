import axios from "axios";

const getToken = async (email: string, password: string) => {
  return await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDjiQI3EZapPS48nMHOPNwp3H6wnWGiIKM",
    { email: email, password: password, returnSecureToken: true }
  );
};

export default getToken;
