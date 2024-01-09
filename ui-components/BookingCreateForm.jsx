/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createBooking } from "../mutations";
const client = generateClient();
export default function BookingCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    start: "",
    end: "",
    bookingMade: "",
    user: "",
    cost: "",
    invoiceSent: false,
    invoicePaid: false,
  };
  const [start, setStart] = React.useState(initialValues.start);
  const [end, setEnd] = React.useState(initialValues.end);
  const [bookingMade, setBookingMade] = React.useState(
    initialValues.bookingMade
  );
  const [user, setUser] = React.useState(initialValues.user);
  const [cost, setCost] = React.useState(initialValues.cost);
  const [invoiceSent, setInvoiceSent] = React.useState(
    initialValues.invoiceSent
  );
  const [invoicePaid, setInvoicePaid] = React.useState(
    initialValues.invoicePaid
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStart(initialValues.start);
    setEnd(initialValues.end);
    setBookingMade(initialValues.bookingMade);
    setUser(initialValues.user);
    setCost(initialValues.cost);
    setInvoiceSent(initialValues.invoiceSent);
    setInvoicePaid(initialValues.invoicePaid);
    setErrors({});
  };
  const validations = {
    start: [{ type: "Required" }],
    end: [{ type: "Required" }],
    bookingMade: [{ type: "Required" }],
    user: [{ type: "Required" }],
    cost: [{ type: "Required" }],
    invoiceSent: [{ type: "Required" }],
    invoicePaid: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          start,
          end,
          bookingMade,
          user,
          cost,
          invoiceSent,
          invoicePaid,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createBooking.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BookingCreateForm")}
      {...rest}
    >
      <TextField
        label="Start"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={start && convertToLocal(new Date(start))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              start: value,
              end,
              bookingMade,
              user,
              cost,
              invoiceSent,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.start ?? value;
          }
          if (errors.start?.hasError) {
            runValidationTasks("start", value);
          }
          setStart(value);
        }}
        onBlur={() => runValidationTasks("start", start)}
        errorMessage={errors.start?.errorMessage}
        hasError={errors.start?.hasError}
        {...getOverrideProps(overrides, "start")}
      ></TextField>
      <TextField
        label="End"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={end && convertToLocal(new Date(end))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              start,
              end: value,
              bookingMade,
              user,
              cost,
              invoiceSent,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.end ?? value;
          }
          if (errors.end?.hasError) {
            runValidationTasks("end", value);
          }
          setEnd(value);
        }}
        onBlur={() => runValidationTasks("end", end)}
        errorMessage={errors.end?.errorMessage}
        hasError={errors.end?.hasError}
        {...getOverrideProps(overrides, "end")}
      ></TextField>
      <TextField
        label="Booking made"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={bookingMade && convertToLocal(new Date(bookingMade))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              start,
              end,
              bookingMade: value,
              user,
              cost,
              invoiceSent,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.bookingMade ?? value;
          }
          if (errors.bookingMade?.hasError) {
            runValidationTasks("bookingMade", value);
          }
          setBookingMade(value);
        }}
        onBlur={() => runValidationTasks("bookingMade", bookingMade)}
        errorMessage={errors.bookingMade?.errorMessage}
        hasError={errors.bookingMade?.hasError}
        {...getOverrideProps(overrides, "bookingMade")}
      ></TextField>
      <TextField
        label="User"
        isRequired={true}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              start,
              end,
              bookingMade,
              user: value,
              cost,
              invoiceSent,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Cost"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              start,
              end,
              bookingMade,
              user,
              cost: value,
              invoiceSent,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.cost ?? value;
          }
          if (errors.cost?.hasError) {
            runValidationTasks("cost", value);
          }
          setCost(value);
        }}
        onBlur={() => runValidationTasks("cost", cost)}
        errorMessage={errors.cost?.errorMessage}
        hasError={errors.cost?.hasError}
        {...getOverrideProps(overrides, "cost")}
      ></TextField>
      <SwitchField
        label="Invoice sent"
        defaultChecked={false}
        isDisabled={false}
        isChecked={invoiceSent}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start,
              end,
              bookingMade,
              user,
              cost,
              invoiceSent: value,
              invoicePaid,
            };
            const result = onChange(modelFields);
            value = result?.invoiceSent ?? value;
          }
          if (errors.invoiceSent?.hasError) {
            runValidationTasks("invoiceSent", value);
          }
          setInvoiceSent(value);
        }}
        onBlur={() => runValidationTasks("invoiceSent", invoiceSent)}
        errorMessage={errors.invoiceSent?.errorMessage}
        hasError={errors.invoiceSent?.hasError}
        {...getOverrideProps(overrides, "invoiceSent")}
      ></SwitchField>
      <SwitchField
        label="Invoice paid"
        defaultChecked={false}
        isDisabled={false}
        isChecked={invoicePaid}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              start,
              end,
              bookingMade,
              user,
              cost,
              invoiceSent,
              invoicePaid: value,
            };
            const result = onChange(modelFields);
            value = result?.invoicePaid ?? value;
          }
          if (errors.invoicePaid?.hasError) {
            runValidationTasks("invoicePaid", value);
          }
          setInvoicePaid(value);
        }}
        onBlur={() => runValidationTasks("invoicePaid", invoicePaid)}
        errorMessage={errors.invoicePaid?.errorMessage}
        hasError={errors.invoicePaid?.hasError}
        {...getOverrideProps(overrides, "invoicePaid")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
