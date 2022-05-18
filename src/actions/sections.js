import { endPoints } from "const/endPoints";
import { fetchWithToken } from "helpers/fetch";
import { types } from "context/types/types";

//**** Create Section ****/
export const startCreate = async (value, courseId) => {
  const resp = await fetchWithToken(
    `${endPoints.create_section}/${courseId}`,
    value,
    "PUT"
  );
  const body = await resp.json();

  return body;
};

//**** Fetch Sections ****/

export const startFetchSections = async (courseId) => {
  const resp = await fetchWithToken(
    `${endPoints.get_all_sections_by_course}/${courseId}`,
    {}
  );
  const body = await resp.json();
  return body;
};

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
