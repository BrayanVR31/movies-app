export const withDelay = <T>(promise: Promise<T>, ms = 1_500) =>
  new Promise((resolve) => setTimeout(resolve, ms)).then(() => promise);
