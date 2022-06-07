import { TabPanel, TabView } from 'primereact/tabview';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import img from 'assets/images/course-image.png';
import {
  ButtonContainer,
  Container,
  ImgContainer,
  MenuContainer,
  NavbarContainer,
  ShadowContainer,
  TileContainer,
} from './styles';
import { Description } from './Description';
import { CourseTeachers } from './Teachers';
import { Lessons } from './Lessons';
import { Button } from 'components/common/Buttons/MainButton';

export const CourseTab = ({ setTab, Tab }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  setTab(activeIndex);
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
  return (
    <Container>
      <ShadowContainer>
        <ImgContainer>
          <img src={img} alt="imagen del curso" />
          <ButtonContainer>
            <Button
              text={'Entrar a clase'}
              fontSize={'1.5rem'}
              padding={'2rem 4rem'}
              alignItems={'center'}
              display={'flex'}
              path={`/course/classroom/${courseTitle}`}
            />
          </ButtonContainer>
        </ImgContainer>
        <NavbarContainer>
          <MenuContainer maxHeight={Tab === 0 ? '450px' : null}>
            <TabView
              activeIndex={activeIndex}
              onTabChange={(e) => setActiveIndex(e.index)}
            >
              <TabPanel header="Descripcion" headerStyle={{}}>
                <Description description={thisCourse.description} />
              </TabPanel>
              <TabPanel header="Profesores">
                <CourseTeachers />
              </TabPanel>
              <TabPanel header="Clases">
                <Lessons courseId={thisCourse.id} courseTitle={courseTitle} />
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
