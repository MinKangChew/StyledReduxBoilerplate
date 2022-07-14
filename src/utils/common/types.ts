import { ReactElement, ChangeEvent, MouseEvent, ReactNode } from "react";
import { Dispatch } from "redux";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type Nullable<T> = T | null;

export type StateMeta = {
  error: any;
  isLoading: boolean;
};

export type AnyGenerator = Generator<any, any, any>;
export type AnyObject = Record<string, any>;
export type AnyList = any[];
export type AnyPromise = Promise<any>;
export type AnyReduxDispatch = Dispatch<any>;
export type AnyReduxAction = { payload: AnyObject | undefined; type: string };

export type NullableAnyObject = Nullable<AnyObject>;
export type NullableAnyList = Nullable<AnyList>;
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

export type ReturnReactElement<T> = (key: T) => ReactElement;

/** Type for onChange event for input, textarea and select element*/
export type OnChangeEvent = ChangeEvent<
  HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

/** Type for button's onClick event */
export type ButtonClickEvent = MouseEvent<HTMLButtonElement | MouseEvent>;

export type ProviderProps = { children: ReactNode };
