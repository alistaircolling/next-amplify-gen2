/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBooking = /* GraphQL */ `
  subscription OnCreateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onCreateBooking(filter: $filter, owner: $owner) {
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
export const onDeleteBooking = /* GraphQL */ `
  subscription OnDeleteBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onDeleteBooking(filter: $filter, owner: $owner) {
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
export const onUpdateBooking = /* GraphQL */ `
  subscription OnUpdateBooking(
    $filter: ModelSubscriptionBookingFilterInput
    $owner: String
  ) {
    onUpdateBooking(filter: $filter, owner: $owner) {
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
