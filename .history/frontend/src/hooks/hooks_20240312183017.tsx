import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { DispatchType, RootType } from "../store/store";

export const useSelectorTyped: TypedUseSelectorHook<RootType>;
