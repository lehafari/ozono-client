import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Box } from "@mui/system";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { MainButton } from "components/common/Buttons/MainButton/styles";
import Input from "components/common/Forms/Inputs/";
import InputButton from "components/common/Forms/FormButton";

const ModalFormSection = () => {
  //*** Modal */
  const [display, setDisplay] = useState(false);
  const onClick = () => {
    setDisplay(true);
  };
  const onHide = () => {
    setDisplay(false);
  };

  //** Form */
  const INITIAL_VALUES = {
    name: "",
  };
  const VALIDATION_SCHEMA = Yup.object({
    name: Yup.string().required("El nombre de la seccion es obligatorio"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <MainButton
        onClick={() => {
          onClick();
        }}
      >
        Agregar seccion
      </MainButton>

      <Dialog
        header="Titulo de la seccion"
        visible={display}
        contentStyle={{ borderRadius: " 0 0 10px 10px" }}
        style={{ width: "50vw" }}
        onHide={() => onHide()}
        resizable={false}
        draggable={false}
      >
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={handleSubmit}
        >
          <Form>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Nombre de la seccion"
                margin={"0 0 0.9rem 0"}
                errorPadding="0 0 0 calc(100% - 80%)"
              />
              <InputButton
                width="22%"
                text="Agregar"
                display="flex"
                justifyContent="center"
                alignItems="center"
              />
            </Box>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

export default ModalFormSection;
