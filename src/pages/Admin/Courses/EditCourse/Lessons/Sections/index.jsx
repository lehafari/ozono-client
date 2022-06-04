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
import EditLesson from "./Lessons&Quizzes/EditLesson";
import Deletelesson from "./Lessons&Quizzes/DeleteLesson";

const Sections = ({ i, text, sectionId, dispatchSection }) => {
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
  //? SortItems state
  let sortItems = [];
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
    };

    if (expanded) {
      fetchLessons();
      fetchQuizzes();
    }
  }, [expanded]);

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
    }
  };
  //! SortItems **//
  if (lessons.lessons.length !== 0 || quizzes.quizzes.length !== 0) {
    // Ordenamos los lessons y quizzes en un solo array
    sortItems = sortByCreateDate(lessons.lessons, quizzes.quizzes);
  }

  return (
    <div>
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
          {sortItems.length === 0 ? (
            <span> No hay nada para mostrar para mostrar </span>
          ) : (
            sortItems.map((item, i) => {
              if (item.status) {
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      backgroundColor: "#eea5a5",
                      margin: "5px 0px",
                    }}
                  >
                    <span>Contenido: Quiz</span>
                    <span>{item.name}</span>
                  </div>
                );
              } else {
                return (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      backgroundColor: "#a5bcee",
                      margin: "5px 0px",
                    }}
                  >
                    <div>
                      <span style={{ margin: "0 50px 0 0" }}>
                        Contenido: Clase
                      </span>
                      <span>{item.name}</span>
                    </div>
                    <div>
                      <span>
                        {
                          <EditLesson
                            lessonId={item.id}
                            lessons={lessons.lessons}
                            dispatch={dispatchLessons}
                          />
                        }
                      </span>
                      <span>
                        <Deletelesson
                          lessonId={item.id}
                          dispatch={dispatchLessons}
                        />
                      </span>
                    </div>
                  </div>
                );
              }
            })
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Sections;
