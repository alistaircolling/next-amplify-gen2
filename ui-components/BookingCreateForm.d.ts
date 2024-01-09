/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BookingCreateFormInputValues = {
    start?: string;
    end?: string;
    bookingMade?: string;
    user?: string;
    cost?: number;
    invoiceSent?: boolean;
    invoicePaid?: boolean;
};
export declare type BookingCreateFormValidationValues = {
    start?: ValidationFunction<string>;
    end?: ValidationFunction<string>;
    bookingMade?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
    cost?: ValidationFunction<number>;
    invoiceSent?: ValidationFunction<boolean>;
    invoicePaid?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BookingCreateFormOverridesProps = {
    BookingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    start?: PrimitiveOverrideProps<TextFieldProps>;
    end?: PrimitiveOverrideProps<TextFieldProps>;
    bookingMade?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    invoiceSent?: PrimitiveOverrideProps<SwitchFieldProps>;
    invoicePaid?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type BookingCreateFormProps = React.PropsWithChildren<{
    overrides?: BookingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BookingCreateFormInputValues) => BookingCreateFormInputValues;
    onSuccess?: (fields: BookingCreateFormInputValues) => void;
    onError?: (fields: BookingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BookingCreateFormInputValues) => BookingCreateFormInputValues;
    onValidate?: BookingCreateFormValidationValues;
} & React.CSSProperties>;
export default function BookingCreateForm(props: BookingCreateFormProps): React.ReactElement;
