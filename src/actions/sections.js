import { endPoints } from "const/endPoints";
import { fetchWithToken } from "helpers/fetch";
import { types } from "../context/types";

//**** Create Section ****/

export const startCreate = (value, courseId) => {
  return async (dispatch) => {
    dispatch(createStart());
    const resp = await fetchWithToken(
      `${endPoints.create_section}/${courseId}`,
      value,
      "PUT"
    );
    const body = await resp.json();
    if (resp.status !== 200) {
      return dispatch(createError(body.message));
    }
    return dispatch(createSuccess(body));
  };
};

const createStart = () => ({
  type: types.sectionStartCreate,
  payload: {},
});

const createSuccess = (section) => ({
  type: types.sectionCreate,
  payload: section,
});

const createError = (error) => ({
  type: types.sectionCreateError,
  payload: error,
});

//**** Fetch Sections ****/

export const startFetchSections = () => {
  return async (dispatch, courseId) => {
    dispatch(fetchStart());
    const resp = await fetchWithToken(
      `${endPoints.get_all_sections_by_course}/${courseId}`,
      {}
    );
    const body = await resp.json();
    if (resp.status !== 200) {
      return dispatch(fetchError(body.message));
    }
    return dispatch(fetchSuccess(body));
  };
};

const fetchStart = () => ({
  type: types.sectionStartFetch,
  payload: {},
});

const fetchSuccess = (sections) => ({
  type: types.sectionFetch,
  payload: sections,
});

const fetchError = (error) => ({
  type: types.sectionFetchError,
  payload: error,
});

//**** Update Section ****/

export const startUpdate = (value, sectionId) => {
  return async (dispatch) => {
    dispatch(updateStart());
    const resp = await fetchWithToken(
      `${endPoints.update_section}/${sectionId}`,
      value,
      "PUT"
    );
    const body = await resp.json();
    if (resp.status !== 200) {
      return dispatch(updateError(body.message));
    }
    return dispatch(updateSuccess(body));
  };
};

const updateStart = () => ({
  type: types.sectionStartUpdate,
  payload: {},
});

const updateSuccess = (section) => ({
  type: types.sectionUpdate,
  payload: section,
});

const updateError = (error) => ({
  type: types.sectionUpdateError,
  payload: error,
});

//**** Delete Section ****/

export const startDelete = (sectionId) => {
  return async (dispatch) => {
    dispatch(deleteStart());
    const resp = await fetchWithToken(
      `${endPoints.delete_section}/${sectionId}`,
      {},
      "DELETE"
    );
    const body = await resp.json();
    if (resp.status !== 200) {
      return dispatch(deleteError(body.message));
    }
    return dispatch(deleteSuccess(body));
  };
};

const deleteStart = () => ({
  type: types.sectionStartDelete,
  payload: {},
});

const deleteSuccess = (sectionId) => ({
  type: types.sectionDelete,
  payload: sectionId,
});

const deleteError = (error) => ({
  type: types.sectionDeleteError,
  payload: error,
});
