import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import InputButton from "../../../../../components/common/Forms/FormButton";
import Input from "../../../../../components/common/Forms/Inputs";
import Select from "../../../../../components/common/Forms/Selects";
import Textarea2 from "../../../../../components/common/Forms/TextArea2";
import { BoxButton } from "../../../../Access/Login/style";
import { Formulario, LeftSide, RightSide } from "../../CreateCourse/styled";
import { Container, OneLine } from "./styles";
import Spinner from "../../../../../components/common/Spinner";
import { startChecking } from "../../../../../actions/auth";
import { startUpdate } from "../../../../../actions/courses";
import { types } from "../../../../../context/types/types";
import PopupError from "../../../../../components/common/Popup/PopupError";
import PopupOk from "../../../../../components/common/Popup/PopupOk";

const General = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //****** Obtenemos el id del curso y el curso en cuestion ******
  const courseTitle = useParams().courseTitle;
  const cleanCourseTitle = courseTitle && courseTitle.replaceAll("-", " ");
  const { courses } = useSelector((state) => state.courses);

  //****** Obtenemos las categorias ******
  const { categories } = useSelector((state) => state.categories);
  const categoriesOptions = categories.map((category) => category.title);

  if (courses.length === 0) {
    return <Spinner />;
  }
  //****** obtenemos los datos del curso *****
  const course = courses.find(
    (course) => course.title.toLowerCase() === cleanCourseTitle
  );

  const {
    title,
    description,
    price,
    duration,
    category,
    level,
    status,
    premium,
    premiumPrice,
    own,
    id,
  } = course;
  // ****** FORMULARIO ******
  const INITIAL_VALUES = {
    title: title,
    description: "",
    price: price, //tipo number
    duration: duration, //tipo number
    category: category, //select
    level: level, //select - PRINCIPIANTE/INTERMEDIO/AVANZADO
    status: status, //select - ACTIVO/INACTIVO/BORRADOR
    premium: premium, //select- yes/no - hace referencia de un booleano
    premiumPrice: premiumPrice, //tipo number
    own: own, //select -true/false
  };
  const VALIDATION_SCHEMA = Yup.object({
    title: Yup.string()
      .required("El titulo es obligatorio")
      .min(4, "El titulo debe tener al menos 4 caracteres")
      .max(50, "El titulo debe tener máximo 50 caracteres"),
    description: Yup.string().required("La descripción es obligatoria"),
    price: Yup.number().required("El precio es obligatorio"),
    // duration en formato de horas y minutos
    duration: Yup.string()
      .required("La duración es obligatoria")
      .matches(/^([0-9]{1,2})h ([0-9]{1,2})min$/, "Ejemplo: 1h 30min"),
    category: Yup.string().required("La categoria es obligatoria"),
    level: Yup.string().required("El nivel es obligatorio"),
    status: Yup.string().required("El estado es obligatorio"),
    premium: Yup.string().required("El premium es obligatorio"),
    premiumPrice: Yup.number().when("premium", {
      is: (val) => val === "true",
      then: Yup.number().required("El precio premium es obligatorio"),
    }),
    own: Yup.string().required("El propio es obligatorio"),
  });
  const handleSubmit = async (values) => {
    await dispatch(startChecking());
    const res = await dispatch(startUpdate(id, values));
    if (res.type === types.coursesUpdateError) {
      PopupError(res.payload);
    } else {
      PopupOk("22rem", "success", "Informacion actualizada correctamente");
      navigate("/admin/courses");
    }
  };

  return (
    <Container>
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
                errorPadding="0 0 0 calc(100% - 75%)"
              />

              <Select
                name="level"
                text="Nivel"
                options={["PRINCIPIANTE", "INTERMEDIO", "AVANZADO"]}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
              <Select
                name="premium"
                text="Premium"
                options={["Si", "No"]}
                label={["Si", "No"]}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
              <Select
                name="status"
                text="Estado del curso"
                options={["ACTIVO", "INACTIVO", "BORRADOR"]}
                alignItems="flex-end"
                margin="5px 0"
                errorPadding="0 0 0 calc(100% - 75%)"
              />
            </LeftSide>
            <RightSide>
              <OneLine>
                <Input
                  id="duration"
                  name="duration"
                  type="text"
                  placeholder="Duracion del curso (h min)"
                  width="100%"
                  margin="5px 0"
                  alignItems="flex-start"
                  errorPadding="0 0 0 calc(100% - 75%)"
                />
                <Input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Precio"
                  margin="5px 0"
                  alignItems="flex-end"
                />
              </OneLine>
              <Select
                name="category"
                text="Categoria"
                options={categoriesOptions}
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
              <Select
                name="own"
                text="¿Es propio?"
                options={["Si", "No"]}
                label={["Si", "No"]}
                alignItems="flex-start"
                margin="5px 0"
              />
            </RightSide>
          </Formulario>
          <Textarea2
            id="description"
            name="description"
            placeholder="Descripcion del curso "
            editValue={description}
          />
          <BoxButton>
            <InputButton
              text="Actualizar informacion del curso"
              width="50%"
              shadow="1px 1px 10px 0px rgb(0, 0, 0, 0.5)"
            />
          </BoxButton>
        </Form>
      </Formik>
    </Container>
  );
};

export default General;
