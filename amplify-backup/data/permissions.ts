const userPermissions = {
  Client: {
    Space: ['Read'],
    Todo: ['Read', 'Edit', 'Create'],
    Booking: ['Read', 'Edit'],
    Invoice: ['Read'],
  },
  Engineer: {
    Equipment: ['Read', 'Edit'],
    Fault: ['Read', 'Edit'],
  },
  Admin: {
    // Full access to all data types
    Space: ['Read', 'Edit', 'Create', 'Delete'],
    Booking: ['Read', 'Edit', 'Create', 'Delete'],
    Invoice: ['Read', 'Edit', 'Create', 'Delete'],
    User: ['Read', 'Edit', 'Create', 'Delete'],
    UserType: ['Read', 'Edit', 'Create', 'Delete'],
    UserPermission: ['Read', 'Edit', 'Create', 'Delete'],
    InvoiceStatus: ['Read', 'Edit', 'Create', 'Delete'],
    Location: ['Read', 'Edit', 'Create', 'Delete'],
    Equipment: ['Read', 'Edit', 'Create', 'Delete'],
    Component: ['Read', 'Edit', 'Create', 'Delete'],
    FaultStatus: ['Read', 'Edit', 'Create', 'Delete'],
    Fault: ['Read', 'Edit', 'Create', 'Delete'],
  },
  Billing: {
    Invoice: ['Read', 'Edit'],
    User: ['Read'],
    Booking: ['Read'],
  },
  Tech: {
    Booking: ['Read'],
    User: ['Read'],
    Invoice: ['Read'],
  },
  Booker: {
    Booking: ['Read', 'Edit'],
    User: ['Read'],
    Location: ['Read'],
    Equipment: ['Read'],
  },
  ReadOnly: {
    // Read-only access to all data types
    Space: ['Read'],
    Booking: ['Read'],
    Invoice: ['Read'],
    User: ['Read'],
    UserType: ['Read'],
    UserPermission: ['Read'],
    InvoiceStatus: ['Read'],
    Location: ['Read'],
    Equipment: ['Read'],
    Component: ['Read'],
    FaultStatus: ['Read'],
    Fault: ['Read'],
  },
};

export default userPermissions;
