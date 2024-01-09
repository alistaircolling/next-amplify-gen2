/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo =
  /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateTodoSubscriptionVariables,
    APITypes.OnCreateTodoSubscription
  >;
export const onUpdateTodo =
  /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateTodoSubscriptionVariables,
    APITypes.OnUpdateTodoSubscription
  >;
export const onDeleteTodo =
  /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteTodoSubscriptionVariables,
    APITypes.OnDeleteTodoSubscription
  >;
export const onCreateBooking =
  /* GraphQL */ `subscription OnCreateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onCreateBooking(filter: $filter) {
    id
    start
    end
    bookingMade
    user
    cost
    invoiceSent
    invoicePaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateBookingSubscriptionVariables,
    APITypes.OnCreateBookingSubscription
  >;
export const onUpdateBooking =
  /* GraphQL */ `subscription OnUpdateBooking($filter: ModelSubscriptionBookingFilterInput) {
  onUpdateBooking(filter: $filter) {
    id
    start
    end
    bookingMade
    user
    cost
    invoiceSent
    invoicePaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateBookingSubscriptionVariables,
    APITypes.OnUpdateBookingSubscription
  >;
export const onDeleteBooking =
  /* GraphQL */ `subscription OnDeleteBooking($filter: ModelSubscriptionBookingFilterInput) {
  onDeleteBooking(filter: $filter) {
    id
    start
    end
    bookingMade
    user
    cost
    invoiceSent
    invoicePaid
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteBookingSubscriptionVariables,
    APITypes.OnDeleteBookingSubscription
  >;
