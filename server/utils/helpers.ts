const mlaValidId = RegExp(/^MLA\d{9}$/);

export const validId = (id: string) => mlaValidId.test(id);
