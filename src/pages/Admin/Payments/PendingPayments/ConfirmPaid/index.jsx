import { Box, Button, TextField } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import React from "react";
import { Dialog } from "primereact/dialog";

const ConfirmPaid = (props) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button size="small" onClick={() => setVisible(true)}>
        <FactCheckIcon />
      </Button>

      <Dialog
        header="Confirmar Pago"
        visible={visible}
        onHide={() => setVisible(false)}
        draggable={false}
        resizable={false}
      >
        <Box>
          <TextField />
        </Box>
      </Dialog>
    </>
  );
};

export default ConfirmPaid;
