import ProfileMenu from '../../components/layout/ProfileMenu';
import {
  MyCourses,
  ProfileContainer,
  ProfileCourseList,
  ProfileDashboard,
  ProfileInfo,
  ProfileInfoText,
  SpaceContainer,
} from './styles';
import profileImage from '../../assets/images/profile-image.svg';
import { MyCourseItem } from '../../components/layout/MyCourseItem';
import { MenuBar } from '../../components/common/MenuBar';

const Profile = () => {
  return (
    <>
      <SpaceContainer></SpaceContainer>
      <MenuBar />
      <ProfileContainer>
        <ProfileInfo>
          <img src={profileImage} alt="profile image" />
          <ProfileInfoText>
            <h2>Alejandra Rodriguez</h2>
            <p>Profesora en tal cosa</p>
            <p>Se unit en 2022</p>
          </ProfileInfoText>
        </ProfileInfo>
        <ProfileDashboard>
          <MyCourses>
            <h1>Cursos adquiridos</h1>
            <ProfileCourseList>
              <MyCourseItem />
              <MyCourseItem />
              <MyCourseItem />
              <MyCourseItem />
            </ProfileCourseList>
          </MyCourses>
        </ProfileDashboard>
      </ProfileContainer>
    </>
  );
};

export default Profile;
