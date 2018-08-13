import { InviteListModule } from './invite-list.module';

describe('InviteListModule', () => {
  let inviteListModule: InviteListModule;

  beforeEach(() => {
    inviteListModule = new InviteListModule();
  });

  it('should create an instance', () => {
    expect(inviteListModule).toBeTruthy();
  });
});
