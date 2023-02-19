import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const picturesURLState = atom({
  key: "picturesState",
  default: [],
});
