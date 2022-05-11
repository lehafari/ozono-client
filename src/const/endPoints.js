export const endPoints = {
  //auth
  signup: `/auth/signup`,
  signin: `/auth/signin`,
  logout: `/auth/logout`,
  refresh_token: `/auth/refresh`,

  //user
  get_user: `/users/me`,
  get_profile_image: `/users/profileImage`,

  update_user: `/users/update`,
  upload_profile_image: `/users/profileImage/upload`,

  //All users
  get_all_users: `/users/all`,

  //courses
  create_course: `/courses/create`,

  get_all_courses: `/courses/all`,
  get_courses_by_status: `/courses/status`,
  get_students: `/courses/users`,
  get_number_of_students: `/courses/users/count`,

  update_course: `/courses/update`,

  delete_course: `/courses/delete`,

  set_feature_course: `/courses/featured`,

  //Categories
  create_category: `/categories/create`,

  get_all_categories: `/categories/all`,

  delete_category: `/categories/delete`,
  delete_categories: `/categories/delete-categories`,
};
