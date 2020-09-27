import { hello } from '../src/main';

describe('hello function', () => {
  const name: string = "Huy";
  let result: string;

  beforeAll(async () => {
    result = `${hello()} ${name}`;
  });

  it('greets a user with `Hello, {name}` message', () => {
    expect(result).toBe(`hello world ${name}`);
  });
});
