export const convertStringToDate = (stringDate: string) => {
  const dateParts = stringDate.split("/").map(value => {
    return parseInt(value);
  });

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
