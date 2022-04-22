export const types = {
  // auth
  authCheckingFinish: '[auth] Finish checking login state',
  authStartLogin: '[auth] Start login',
  authLogin: '[auth] Login',
  authStartRegister: '[auth] Start Register',
  authStartStartTokenRenew: '[auth] Start token renew',
  authLogout: '[auth] Logout',

  // courses
  coursesStartFetch: '[courses] Start fetch',
  coursesFetch: '[courses] Fetch',
  coursesFetchSuccess: '[courses] Fetch success',
  coursesFetchError: '[courses] Fetch error',

  coursesStartCreate: '[courses] Start create',
  coursesCreate: '[courses] Create',
  coursesCreateSuccess: '[courses] Create success',
  coursesCreateError: '[courses] Create error',

  coursesStartUpdate: '[courses] Start update',
  coursesUpdate: '[courses] Update',
  coursesUpdateSuccess: '[courses] Update success',
  coursesUpdateError: '[courses] Update error',

  coursesStartDelete: '[courses] Start delete',
  coursesDelete: '[courses] Delete',
  coursesDeleteSuccess: '[courses] Delete success',
  coursesDeleteError: '[courses] Delete error',
};
