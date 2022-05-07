import { TabPanel, TabView } from 'primereact/tabview';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import img from 'assets/images/course-image.png';
import {
  Container,
  ImgContainer,
  MenuContainer,
  NavbarContainer,
  ShadowContainer,
  TileContainer,
} from './styles';
import { Description } from './Description';

export const CourseTab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { courses } = useSelector((state) => state.courses);
  const courseTitle = useParams().courseTitle;
  const cleanCourseTitle = courseTitle && courseTitle.replaceAll('-', ' ');
  const cleanTitle = cleanCourseTitle
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
  const thisCourse = courses.find(
    (course) => course && course.title.toLowerCase() === cleanCourseTitle
  );
  console.log(thisCourse);
  return (
    <Container>
      <ShadowContainer>
        <ImgContainer>
          <img src={img} alt="imagen del curso" />
          <TileContainer>
            {/* <h1>
              Curso <br /> {cleanTitle}
            </h1> */}
          </TileContainer>
        </ImgContainer>
        <NavbarContainer>
          <MenuContainer>
            <TabView
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel header="Descripcion" headerStyle={{}}>
                <Description description={thisCourse.description} />
              </TabPanel>
              <TabPanel header="profesores">
                Content II Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="Clases">
                Content III Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="FAQS">
                Content IV Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
              <TabPanel header="Configuration">
                Content V Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Impedit doloremque itaque a voluptatum eius modi eum
                soluta saepe beatae debitis omnis facere ducimus animi ipsum
                accusamus, molestiae quae provident commodi.
              </TabPanel>
            </TabView>
          </MenuContainer>
        </NavbarContainer>
      </ShadowContainer>
    </Container>
  );
};
