export const isEven = (i: number, ifTrue?: string, ifFalse?: string): string | boolean => {
  const test = i % 2 === 0;
  if (ifTrue && ifFalse) {
    return test ? ifTrue : ifFalse;
  } else {
    return test;
  }
};
