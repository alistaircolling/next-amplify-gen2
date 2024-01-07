// Union Types for predefined sets of values
type UserType = 'Client' | 'Engineer' | 'Admin' | 'Billing' | 'Tech' | 'Booker' | 'Read-only';
type UserPermission = "None" | "Read" | "Edit" | "Full";
type InvoiceStatus = "Draft" | "Sent" | "Paid";
type FaultStatus = 'Working' | 'Faulty' | 'In repair' | 'Repair booked';

// Type Definitions
type Organisation = {
  name: string;
  admin: User[];
  users: User[];
  bookingList: Booking;
}

type Space = {
  name: string;
  costPerHour: number;
  costPerDay: number;
  bookingList: Booking[];
};

type Booking = {
  start: Date;
  end: Date;
  bookingMade: Date;
  user: User;
  space: Space;
  equipmentList: Equipment[];
  cost: number;
  invoiceSent: boolean;
  invoicePaid: boolean;
};

//TODO extend Cognito?
type User = {
  forename: string;
  surname: string;
  type: UserType;
  enabled: boolean;
  phoneNumber: string;
  email: string;
  billingAddress: string;
  bookingList: Booking[];
  invoiceList: Invoice[];
};

type Invoice = {
  booking: Booking;
  user: User;
  status: InvoiceStatus;
};

type Equipment = {
  brand: string;
  model: string;
  year: number;
  status: FaultStatus;
  bookingList: Booking[];
  faultList: Fault[];
  componentList: Component[];
  space: Space;
};

type Component = {
  brand: string;
  model: string;
  year: number;
  availability: 0 | 1 | 2 | 3 | 4 | 5;
  equipmentList: Equipment[];
};

type Fault = {
  equipment: Equipment;
  status: FaultStatus;
  dateReported: Date;
  userReported: User;
  userAssigned: User; // Assuming userAssigned must be of type 'Tech', this constraint should be handled in the logic, not in the type system.
};
