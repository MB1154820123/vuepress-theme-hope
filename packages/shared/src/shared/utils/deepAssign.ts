import { entries, isArray, isPlainObject } from "./helper.js";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IAnyObject = Record<string, any>;

/** Deep merge objects to the first one */
export const deepAssign = <
  T extends IAnyObject,
  U extends IAnyObject = T,
  V extends Partial<T> & Partial<U> = T & U
>(
  originObject: T,
  ...overrideObjects: (U | null | undefined)[]
): V => {
  if (overrideObjects.length === 0) return originObject as unknown as V;

  /** Object being merged */
  const assignObject = overrideObjects.shift() || null;

  if (assignObject)
    entries(assignObject).forEach(([property, value]) => {
      if (property === "__proto__" || property === "constructor") return;
      if (isPlainObject(originObject[property]) && isPlainObject(value))
        deepAssign(originObject[property], value);
      else if (isArray(value))
        (originObject as IAnyObject)[property] = [...(<unknown[]>value)];
      else if (isPlainObject(value))
        (originObject as IAnyObject)[property] = {
          ...value,
        };
      else
        (originObject as IAnyObject)[property] = <unknown>(
          assignObject[property]
        );
    });

  return deepAssign(originObject, ...overrideObjects);
};
