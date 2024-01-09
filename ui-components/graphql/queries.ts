/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBooking = /* GraphQL */ `
  query GetBooking($id: ID!) {
    getBooking(id: $id) {
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
export const listBookings = /* GraphQL */ `
  query ListBookings(
    $filter: ModelBookingFilterInput
    $id: ID
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBookings(
      filter: $filter
      id: $id
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
