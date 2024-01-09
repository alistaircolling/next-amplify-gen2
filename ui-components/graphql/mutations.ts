/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBooking = /* GraphQL */ `
  mutation CreateBooking(
    $condition: ModelBookingConditionInput
    $input: CreateBookingInput!
  ) {
    createBooking(condition: $condition, input: $input) {
      bookingMade
      cost
      createdAt
      end
      id
      invoicePaid
      invoiceSent
      owner
      start
      updatedAt
      user
      __typename
    }
  }
`;
export const deleteBooking = /* GraphQL */ `
  mutation DeleteBooking(
    $condition: ModelBookingConditionInput
    $input: DeleteBookingInput!
  ) {
    deleteBooking(condition: $condition, input: $input) {
      bookingMade
      cost
      createdAt
      end
      id
      invoicePaid
      invoiceSent
      owner
      start
      updatedAt
      user
      __typename
    }
  }
`;
export const updateBooking = /* GraphQL */ `
  mutation UpdateBooking(
    $condition: ModelBookingConditionInput
    $input: UpdateBookingInput!
  ) {
    updateBooking(condition: $condition, input: $input) {
      bookingMade
      cost
      createdAt
      end
      id
      invoicePaid
      invoiceSent
      owner
      start
      updatedAt
      user
      __typename
    }
  }
`;
