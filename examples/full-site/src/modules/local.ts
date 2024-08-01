const LOCAL_KEY = "b61a7d95-8aea-4a5c-8827-94605f9ae1eb";

const swap = (
  array: string[],
  [from, to]: [number, number]
) => {
  const newArray = [...array];
  const [item] = newArray.splice(from, 1);
  newArray.splice(to, 0, item);
  return newArray;
};

export const get = (): string[] => {
  const string = window.localStorage.getItem(LOCAL_KEY);
  if (!string) return [];
  return JSON.parse(string);
};

export const set = (array: string[]) => {
  window.localStorage.setItem(
    LOCAL_KEY,
    JSON.stringify(array)
  );
};

export const has = (id: string) => {
  return get().includes(id);
};

export const move = (
  direction: "up" | "down",
  id: string
) => {
  const index = get().indexOf(id);

  if (direction === "up") {
    return set(swap(get(), [index, index - 1]));
  }

  return set(swap(get(), [index, index + 1]));
};

export const remove = (id: string) => {
  set(get().filter((item) => item !== id));
};

export const add = (id: string) => {
  set([id, ...get()]);
};

export const toggle = (id: string): boolean => {
  const newValue = !has(id);
  if (!newValue) remove(id);
  if (newValue) add(id);
  return newValue;
};
