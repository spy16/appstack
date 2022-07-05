import md5 from "md5";
import * as R from "ramda";

function getGravatarURL(email: string) {
  const address = String(email).trim().toLowerCase();
  const hash = md5(address);
  return `https://www.gravatar.com/avatar/${hash}`;
}

export type AppState = {};

export type Action = {
  name: string;
  value: any;
};

export function applyAction(state: AppState, action: Action) {
  switch (action.name) {
    case "MERGE":
      return _merge(state, action.value);

    default:
      console.warn("invalid app-state action: ", action.name);
      return state;
  }
}

let concatValues = (k: any, l: any, r: any) =>
  k == "values" ? R.concat(l, r) : r;
const _merge = R.mergeDeepWithKey(concatValues);
