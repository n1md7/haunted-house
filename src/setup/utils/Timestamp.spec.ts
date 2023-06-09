import { Timestamp } from './Timestamp';

describe('Timestamp', () => {
  it('should verify timestamp', async () => {
    const timestamp = new Timestamp();
    process.nextTick(() => timestamp.update());
    expect(timestamp.delta).toBeGreaterThanOrEqual(0);
  });
});
