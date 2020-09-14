export const validateMobile = (string: string) => {
  return string.match(
    /^(?:\+62|\(0\d{2,3}\)|0)\s?(?:361|8[17]\s?\d?)?(?:[ -]?\d{3,4}){2,3}$/
  );
};
export const validateEmail = (string: string) => {
  return string.match(
    /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  );
};
export const validateRequired = (string: string) => {
  return string !== "";
};
