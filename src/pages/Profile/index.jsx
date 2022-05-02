import ProfileMenu from '../../components/layout/ProfileMenu';
import {
  DashboardContainer,
  MyCourses,
  ProfileContainer,
  ProfileCourseList,
  ProfileDashboard,
  ProfileInfo,
  ProfileInfoText,
} from './styles';
import profileImage from '../../assets/images/profile-image.svg';
import { MyCourseItem } from '../../components/layout/MyCourseItem';
import { MenuBar } from '../../components/common/MenuBar';
import { BackgroundNavbar } from '../../components/common/BackgroundNavbar';
import { useSelector } from 'react-redux';
import Spinner from '../../components/common/Spinner';
import Resize from '../../helpers/Resize';
import { Outlet } from 'react-router-dom';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const width = Resize();

  if (!user) {
    return <Spinner />;
  }

  return (
    <>
      <BackgroundNavbar />
      <MenuBar />
      <ProfileContainer>
        <ProfileInfo>
          {user.image === false ? (
            <img src={user.image} alt="profile" />
          ) : (
            <img src={profileImage} alt="profile image" />
          )}

          <ProfileInfoText>
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
            {/* <p>Profesora en tal cosa</p>
            <p>Se unit en 2022</p> */}
          </ProfileInfoText>
        </ProfileInfo>
        <ProfileDashboard>
          <DashboardContainer>
            <Outlet />
          </DashboardContainer>
        </ProfileDashboard>
      </ProfileContainer>
    </>
  );
};

export default Profile;
