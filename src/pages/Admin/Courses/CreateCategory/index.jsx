import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Formik, Form } from "formik";
import * as yup from "yup";

import { ButtonContainer } from "../style";
import { MainButton } from "../../../../components/common/Buttons/MainButton/styles";
import Input from "../../../../components/common/Forms/Inputs";
import InputButton from "../../../../components/common/Forms/FormButton";
import { Container } from "./styles";
import { startCreate } from "actions/categories";
import { useDispatch } from "react-redux";
import { startChecking } from "actions/auth";

const CreateCategory = () => {
  //**** Modal ****/
  const [visible, setVisible] = useState(false);

  const click = () => {
    setVisible(true);
  };
  const onHide = () => {
    setVisible(false);
  };
  //**** Formik ****/
  const INITIAL_VALUES = {
    title: "",
  };
  const VALIDATION_SCHEMA = yup.object({ title: yup.string().required() });

  const dispatch = useDispatch();
  const onSubmit = async (values, { resetForm }) => {
    await dispatch(startChecking());
    const res = await dispatch(startCreate(values));
    console.log(res);
    resetForm();
  };
  return (
    <>
      <ButtonContainer>
        <MainButton onClick={() => click()}>Categorias</MainButton>
      </ButtonContainer>
      <Dialog
        header="CATEGORIAS"
        visible={visible}
        style={{ width: "50vw" }}
        draggable={false}
        onHide={() => onHide()}
      >
        <Formik
          initialValues={INITIAL_VALUES}
          validationSchema={VALIDATION_SCHEMA}
          onSubmit={onSubmit}
        >
          <Form>
            <Container>
              <Input
                id={"title"}
                name={"title"}
                type={"text"}
                placeholder={"Nombre de la categoria"}
                color="#1a1a1a"
                errorPadding="0 0 0 calc(100% - 87%)"
              />
              <InputButton
                text={"Agregar categoria"}
                width="30%"
                fontSize="0.9rem"
                margin="2rem 0 0 0 "
              />
            </Container>
          </Form>
        </Formik>
      </Dialog>
    </>
  );
};

export default CreateCategory;
