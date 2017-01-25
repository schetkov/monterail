import { SOME_ACTION } from '../constants/constants';

export function getRatings(ratings) {
  return {
    type: SOME_ACTION,
    ratings
  }
}

export function performAction {
  return function (dispatch, getState) {
    .then(res => res.json())
    .then(ratings => {
      dispatch(getRatings("123"))
    })
  }
}
