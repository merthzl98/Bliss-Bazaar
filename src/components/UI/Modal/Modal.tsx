import { ReactNode } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme, styled } from "@mui/material/styles";
import { DialogActions, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./Modal.scss";
import Button from "../Button/Button";

const MyPaper = styled(Paper)(() => ({
  minWidth: "30rem !important",
  maxWidth: "120rem !important",
  borderRadius: "0.75rem",
  padding: "0 36px !important",
}));

type ModalProps = {
  onOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  onRequest: () => void;
  confirmText: string;
};

const Modal = ({
  onOpen,
  onClose,
  title,
  children,
  onRequest,
  confirmText,
}: ModalProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={onOpen}
      onClose={onClose}
      PaperComponent={MyPaper}
      disableScrollLock
    >
      <div className="modal-header">
        <DialogTitle className="modal-title">{title}</DialogTitle>
        <span className="close-icon" onClick={onClose}>
          <CloseIcon sx={{ width: "2rem", height: "2rem" }} />
        </span>
      </div>

      <DialogContent className="modal-content">{children}</DialogContent>
      <DialogActions className="modal-actions">
        <Button
          onClick={onRequest}
          text={confirmText}
          fontSize="1.5rem"
          width="10rem"
          fontWeight="1.5rem"
          padding="1rem"
        />
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
