import * as React from 'react';
import { TextFieldProps as MuiTextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik';
export declare type AllKeys<T> = T extends T ? keyof T : never;
export declare type Omit<T, K extends AllKeys<T>> = T extends T ? Pick<T, Exclude<keyof T, K>> : never;
export declare type TextFieldProps = FieldProps & Omit<MuiTextFieldProps, 'error' | 'name' | 'onChange' | 'value'>;
export declare const fieldToTextField: ({ field, form, disabled, ...props }: TextFieldProps) => MuiTextFieldProps;
export declare const TextField: React.ComponentType<TextFieldProps>;
