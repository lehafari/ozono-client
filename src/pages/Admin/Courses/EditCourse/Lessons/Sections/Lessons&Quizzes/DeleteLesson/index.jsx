import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import InputButton from "components/common/Forms/FormButton";

import { Box } from "@mui/system";
import { types } from "context/types/types";
import Toast from "components/common/Popup/Toast";
import { startDelete } from "actions/lessons";
import { ButtonsContainer } from "pages/Admin/Users/DeleteUser/styles";

const Deletelesson = ({ lessonId, dispatch }) => {
  //*MODAL*
  const [displayBasic, setDisplayBasic] = useState(false);
  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };
  const onClick = (name) => {
    dialogFuncMap[`${name}`](true);
  };
  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };
  //*Borrar usuario */
  const handleSubmit = async () => {
    dispatch({
      type: types.lessonStartDelete,
      payload: {},
    });
    const body = await startDelete(lessonId);
    if (body.statusCode !== 200) {
      dispatch({
        type: types.lessonDeleteError,
        payload: body.message,
      });
      Toast("error", body.message);
      onHide("displayBasic");
    } else {
      dispatch({
        type: types.lessonDelete,
        payload: lessonId,
      });
      Toast("success", body.message);
      onHide("displayBasic");
    }
  };
  return (
    <>
      <button
        onClick={() => onClick("displayBasic")}
        style={{
          margin: "0px",
          padding: "0px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <DeleteForeverIcon color="error" />
      </button>

      <Dialog
        header="Confirma tu contraseña"
        visible={displayBasic}
        style={{ width: "50vw", boxShadow: "none" }}
        onHide={() => onHide("displayBasic")}
        position="center"
        contentStyle={{
          borderRadius: "0 0 15px 15px",
        }}
        draggable={false}
        resizable={false}
      >
        <Box
          sx={{ textAlign: "center", margin: "30px 0px", fontSize: "1.2rem" }}
        >
          <p>¿Estas seguro de eliminar esta clase?</p>
        </Box>

        <ButtonsContainer>
          <InputButton
            text="Si"
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b63"
            fontSize="1.2rem"
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
            margin="0px 10px"
            onClick={() => handleSubmit()}
          />
          <InputButton
            text="No"
            backgroundColor="#ff555b"
            backgroundColorHover="#ff555b63"
            fontSize="1.2rem"
            width="50px"
            height="50px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
            margin="0px 10px"
            onClick={() => onHide("displayBasic")}
          />
        </ButtonsContainer>
      </Dialog>
    </>
  );
};

export default Deletelesson;
