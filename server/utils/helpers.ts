const mlaValidId = RegExp(/^MLA\d{9}$/);

export const validId = (id) => mlaValidId.test(id);
