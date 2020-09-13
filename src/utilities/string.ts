export const getThreeDigitNumber = (number: any) => {
  if (number < 10) {
    number = "00" + number;
  } else if (number < 100) {
    number = "0" + number;
  }
  return number;
};

export const upperCaseFirst = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const removeUnusedCharacter = (string: string) => {
  return string.replace("\f", "\n");
};
