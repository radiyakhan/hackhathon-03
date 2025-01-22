const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
  };

  const userDetail = {
    name: 'userDetails',
    title: 'User Details',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
      },
      {
        name: 'address',
        title: 'Address',
        type: 'text',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
    ],
  };

  const order = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'userDetails' }],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'totalAmount',
        title: 'Total Amount',
        type: 'number',
      },
      {
        name: 'status',
        title: 'Status',
        type: 'string',
        options: {
          list: [
            { title: 'Pending', value: 'pending' },
            { title: 'Completed', value: 'completed' },
            { title: 'Cancelled', value: 'cancelled' },
          ],
        },
      },
    ],
  };

  const paymentMethod = {
    name: 'paymentMethod',
    title: 'Payment Method',
    type: 'document',
    fields: [
      {
        name: 'method',
        title: 'Method',
        type: 'string',
        options: {
          list: [
            { title: 'Credit Card', value: 'creditCard' },
            { title: 'PayPal', value: 'paypal' },
            { title: 'Cash on Delivery', value: 'cod' },
          ],
        },
      },
      {
        name: 'status',
        title: 'Status',
        type: 'boolean',
        description: 'Whether the payment method is active',
      },
    ],
  };