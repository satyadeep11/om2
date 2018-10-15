import { GenieModule } from './genie.module';

describe('GenieModule', () => {
  let genieModule: GenieModule;

  beforeEach(() => {
    genieModule = new GenieModule();
  });

  it('should create an instance', () => {
    expect(genieModule).toBeTruthy();
  });
});
