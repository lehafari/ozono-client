import { useEffect, useReducer, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button } from "@mui/material";
import ModalForm from "./Lessons&Quizzes/ModalForm";
import {
  initialStateLessons,
  lessonsReducer,
} from "context/courseLessons/lessonsReducer";
import {
  initialStateQuizzes,
  quizReducer,
} from "context/courseQuizzes/quizzesReducer";
import { startFetchLessons } from "actions/lessons";
import { types } from "context/types/types";
import { startFetchQuizzes } from "actions/quizzes";
import { startDelete } from "actions/sections";
import { sortByCreateDate } from "helpers/sort";

const Sections = ({ i, text, sectionId, dispatchSection, setFlag }) => {
  //!acordeon stuff**
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => (event, isExpanded) => {
    setExpanded(isExpanded ? true : false);
  };

  //!Lessons & Quizzes stuff**
  //?Lessons reducer
  const [lessons, dispatchLessons] = useReducer(
    lessonsReducer,
    initialStateLessons
  );
  //? Quizzes reducer
  const [quizzes, dispatchQuizzes] = useReducer(
    quizReducer,
    initialStateQuizzes
  );
  useEffect(() => {
    //fetch LESSONS
    const fetchLessons = async () => {
      dispatchLessons({ type: types.lessonStartFetch, payload: {} });
      const body = await startFetchLessons(sectionId);
      if (body.statusCode) {
        dispatchLessons({
          type: types.lessonFetchError,
          payload: body.message,
        });
      } else {
        dispatchLessons({ type: types.lessonFetch, payload: body });
      }
    };
    //fetch QUIZZES
    const fetchQuizzes = async () => {
      dispatchQuizzes({ type: types.quizStartFetch, payload: {} });
      const body = await startFetchQuizzes(sectionId);
      if (body.statusCode) {
        dispatchQuizzes({
          type: types.quizFetchError,
          payload: body.message,
        });
      } else {
        dispatchQuizzes({ type: types.quizFetch, payload: body });
      }
      console.log(body);
    };
    if (expanded) {
      fetchLessons();
      fetchQuizzes();
    }
  }, [expanded, sectionId]);

  //! Borrar Secciones **//
  const handleDelete = async () => {
    dispatchSection({ type: types.sectionStartDelete, payload: {} });
    const body = await startDelete(sectionId);
    if (body.statusCode !== 200) {
      dispatchSection({
        type: types.sectionDeleteError,
        payload: body.message,
      });
    } else {
      dispatchSection({ type: types.sectionDelete, payload: sectionId });
      setFlag(true);
    }
  };
  if (lessons.lessons.length !== 0 && quizzes.quizzes.length !== 0) {
    //Ordenamos los lessons y quizzes en un solo array
    // const sortItems = sortByCreateDate(lessons, quizzes);
    // console.log("ordenados", sortItems);
  }
  return (
    <div>
      {/* <Box>
       

      </Box> */}
      <Accordion expanded={expanded} onChange={handleChange()} square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          {" "}
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Seccion {i}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{text}</Typography>
          <Button sx={{ width: "33%" }}>Editar</Button>
          <Button sx={{ width: "33%" }} color="error" onClick={handleDelete}>
            Borrar
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              textAlign: "center",
              fontSize: "1rem",
              fontWeight: "bold",
              color: "red",
            }}
          >
            <span>Presione el boton para agregar una clase o Quiz</span>
          </Box>
          {/* Boton crear clase/quiz  */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ModalForm
              sectionId={sectionId}
              dispatchLessons={dispatchLessons}
              dispatchQuizzes={dispatchQuizzes}
            />
          </Box>
          {/* AQUI VAMOS A IMPRIMIR TODAS LAS CLASES  */}
          {quizzes.quizzes.length === 0 ? (
            <span> No hay nada para mostrar para mostrar </span>
          ) : (
            <span>ola</span>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Sections;
