import createHistory from "history/createHashHistory";
import {createLocation} from "history";

export const history = createHistory();

export const href = (locationOrPath) => {
  if (typeof locationOrPath === "string") {
    return history.createHref(createLocation(locationOrPath));
  } else {
    return history.createHref(locationOrPath);
  }
};