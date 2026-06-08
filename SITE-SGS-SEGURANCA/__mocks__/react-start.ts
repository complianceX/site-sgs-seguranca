export function createServerFn(_options: { method: string }) {
  const fn = (input: unknown) => Promise.resolve(input);
  fn.inputValidator = () => fn;
  fn.handler = (handlerFn: (ctx: { data: unknown }) => unknown) => {
    return (data: unknown) => handlerFn({ data });
  };
  return fn;
}
