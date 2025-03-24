export const extract = (param: string | string[] | undefined) => {
  if (typeof param === "undefined") {
    throw new Error("Cant't extract parameter of type string[]");
  }

  if (Array.isArray(param)) {
    throw new Error("Cant't extract parameter of type Array");
  }

  if (isNaN(Number(param))) {
    throw new Error("Cant't extract non numeric parameter.");
  }

  return Number(param);
};
