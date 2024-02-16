import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";

import { setHasError } from "../../../store/error-slice";
import { RootState } from "../../../store";

const Error = () => {
  const dispatch = useDispatch();
  const hasError = useSelector((state: RootState) => state.error.hasError);
  const message = useSelector((state: RootState) => state.error.message);

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={hasError}
        key={"top" + "center"}
      >
        <Alert
          severity="error"
          onClose={() => {
            dispatch(setHasError({ hasError: false, message: message }));
          }}
          sx={{ fontSize: "1.5rem" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Error;
