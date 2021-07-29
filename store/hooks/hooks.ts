import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootState} from "../reducers/items";

export const appSelector: TypedUseSelectorHook<RootState> = useSelector