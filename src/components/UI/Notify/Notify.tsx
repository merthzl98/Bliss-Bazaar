import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../store";
import { setIsNotified } from "../../../store/notify-slice";

const Notify = () => {
  const dispatch = useDispatch();
  const notify = useSelector((state: RootState) => state.notify);
  const { isNotified, message, severity } = notify;

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar
        autoHideDuration={4000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={isNotified}
        key={"top" + "center"}
        onClose={() => {
          dispatch(
            setIsNotified({
              isNotified: false,
              message: message,
              severity: "error",
            })
          );
        }}
      >
        <Alert severity={severity} sx={{ fontSize: "1.5rem" }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Notify;
