import { CustomerOrdersModule } from './customer-orders.module';

describe('CustomerOrdersModule', () => {
  let customerOrdersModule: CustomerOrdersModule;

  beforeEach(() => {
    customerOrdersModule = new CustomerOrdersModule();
  });

  it('should create an instance', () => {
    expect(customerOrdersModule).toBeTruthy();
  });
});
