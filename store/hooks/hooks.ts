import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {AppDispatch, RootState} from "../reducers/items";

export const appSelector: TypedUseSelectorHook<RootState> = useSelector
export const appDispatch = () => useDispatch<AppDispatch>();