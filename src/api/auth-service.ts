import axios from "axios";

const getToken = async (email: string, password: string) => {
  return await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
      import.meta.env.VITE_FIREBASE_API_KEY
    }`,
    { email: email, password: password, returnSecureToken: true }
  );
};

export default getToken;
