import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch, useSelector } from "react-redux";
import { AxiosResponse } from "axios";

import Modal from "../UI/Modal/Modal";
import TextInput from "../UI/TextInput/TextInput";
import getToken from "../../api/auth-service";
import { getLogin } from "../../store/user-slice";
import { setHasError } from "../../store/error-slice";
import { RootState } from "../../store";
import { setIsShownLoginModal } from "../../store/ui-slice";
import { Typography } from "@mui/material";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNotValid, setIsNotValid] = useState(false);
  const isShownModal = useSelector(
    (state: RootState) => state.ui.isShownLoginModal
  );
  const dispatch = useDispatch();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const handleLogin = async () => {
    const formIsValid = validateEmail(email) && validatePassword(password);
    if (formIsValid) {
      try {
        const response: AxiosResponse = await getToken(email, password);
        if (response.status === 200) {
          dispatch(
            getLogin({
              hasLoggedIn: true,
              token: response.data.idToken,
            })
          );
          dispatch(setIsShownLoginModal(false));
        }
      } catch (err: any) {
        dispatch(
          setHasError({
            hasError: true,
            message: err.response.data.error.message,
          })
        );
      }
    } else {
      setIsNotValid(true);
    }
  };

  return (
    <Modal
      onOpen={isShownModal}
      onClose={() => dispatch(setIsShownLoginModal(false))}
      title="Sign Up"
      onRequest={handleLogin}
      confirmText="Login"
    >
      <TextInput
        type="email"
        width="35rem"
        value={email}
        setValue={setEmail}
        label="Email"
        maxRows={null}
        startIcon={<AccountCircleIcon />}
      />

      <TextInput
        type="password"
        width="35rem"
        value={password}
        setValue={setPassword}
        label="Password"
        maxRows={null}
        startIcon={<LockIcon />}
      />
      {isNotValid && (
        <Typography fontSize={12} color="error">
          You entered your information incorrectly or in the wrong format.
        </Typography>
      )}
    </Modal>
  );
};

export default SignUp;
