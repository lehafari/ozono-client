import React from "react";
import { Formik, Form } from "formik";
import { Container, Formulario, LeftSide, RightSide } from "./styled";
import * as Yup from "yup";

import Input from "../../../../components/common/Forms/Inputs";
import Textarea2 from "../../../../components/common/Forms/TextArea2";
import Select from "../../../../components/common/Forms/Selects";
import { BoxButton } from "../../../Access/Login/style";
import InputButton from "../../../../components/common/Forms/FormButton";
import { useDispatch } from "react-redux";
import { startCreate } from "../../../../actions/courses";
import PopupError from "../../../../components/common/Popup/PopupError";
import PopupOk from "../../../../components/common/Popup/PopupOk";
import { useNavigate } from "react-router-dom";
import { types } from "../../../../context/types/types";
import { startChecking } from "../../../../actions/auth";

const CreateCourse = () => {
  const navigate = useNavigate();
  const INITIAL_VALUES = {
    title: "",
    description: "",
    price: 0, //tipo number
    duration: 0, //tipo number
    category: "", //select
    level: "", //select - PRINCIPIANTE/INTERMEDIO/AVANZADO
    status: "", //select - ACTIVO/INACTIVO/BORRADOR
    premium: "", //select- yes/no - hace referencia de un booleano
    premiumPrice: 0, //tipo number
    own: "", //select -true/false
  };
  const VALIDATION_SCHEMA = Yup.object({
    title: Yup.string()
      .required("El titulo es obligatorio")
      .min(4, "El titulo debe tener al menos 4 caracteres")
      .max(50, "El titulo debe tener máximo 50 caracteres"),
    description: Yup.string().required("La descripción es obligatoria"),
    price: Yup.number().required("El precio es obligatorio"),
    duration: Yup.number().required("La duración es obligatoria"),
    category: Yup.string().required("La categoria es obligatoria"),
    level: Yup.string().required("El nivel es obligatorio"),
    status: Yup.string().required("El estado es obligatorio"),
    premium: Yup.string().required("El premium es obligatorio"),
    // premiumPrice es obligatorio si premium es si
    premiumPrice: Yup.number().when("premium", {
      is: (val) => val === "true",
      then: Yup.number().required("El precio premium es obligatorio"),
    }),
    own: Yup.string().required("El propietario es obligatorio"),
  });

  const dispatch = useDispatch();
  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(startChecking());
    const res = await dispatch(startCreate(values));
    console.log("Datos formulario", values);
    console.log("res: ", res);
    if (res.type === types.coursesCreateError) {
      PopupError(res.payload);
      resetForm();
    } else {
      PopupOk("22rem", "success", "Curso creado correctamente");
      resetForm();
      navigate("/admin/course");
    }
  };

  return (
    <Container>
      <h1>CREAR CURSO</h1>
      <Formik
        initialValues={INITIAL_VALUES}
        validationSchema={VALIDATION_SCHEMA}
        onSubmit={handleSubmit}
      >
        <Form>
          <Formulario>
            <LeftSide>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="Titulo"
                margin="5px 0"
                alignItems="flex-end"
              />
              <Input
                id="duration"
                name="duration"
                type="number"
                placeholder="Duracion del curso"
                margin="5px 0"
                alignItems="flex-end"
              />

              <Select
                name="level"
                text="Nivel"
                options={["PRINCIPIANTE", "INTERMEDIO", "AVANZADO"]}
                alignItems="flex-end"
                margin="5px 0"
              />
              <Select
                name="premium"
                text="Premium"
                options={["Si", "No"]}
                label={["Si", "No"]}
                alignItems="flex-end"
                margin="5px 0"
              />
            </LeftSide>
            <RightSide>
              <Input
                id="price"
                name="price"
                type="number"
                placeholder="Precio"
                margin="5px 0"
                alignItems="flex-start"
              />
              <Select
                name="category"
                text="Categoria"
                options={["TECNOLOGIA", "SALUD", "AMBIENTE"]}
                alignItems="flex-start"
                margin="5px 0"
              />
              <Select
                name="status"
                text="Estado del curso"
                options={["ACTIVO", "INACTIVO", "BORRADOR"]}
                alignItems="flex-start"
                margin="5px 0"
              />
              <Input
                id="premiumPrice"
                name="premiumPrice"
                type="number"
                placeholder="Precio Premium"
                margin="5px 0"
                alignItems="flex-start"
              />
            </RightSide>
          </Formulario>
          <Select
            name="own"
            text="¿Es propio?"
            options={["Si", "No"]}
            label={["Si", "No"]}
            alignItems="center"
            margin="5px 0"
          />
          <Textarea2
            id="description"
            name="description"
            placeholder="Descripcion del curso "
          />
          <BoxButton>
            <InputButton text="Crear Curso" width="50%" />
          </BoxButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default CreateCourse;
