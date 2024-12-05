const validationRules = [
  {
    name: 'size of number less',
    function: (number: string): boolean => {
      if (number.length < 11) {
        return false;
      } else return true;
    },
    error: 'size of the number is less than 11',
  },
  {
    name: 'size of number greater',
    function: (number: string): boolean => {
      if (number.length > 11) {
        return false;
      } else return true;
    },
    error: 'size of the number is greater 11',
  },
  {
    name: 'please input a Bangladesh-i number',
    function: (number: string): boolean => {
      if (number.slice(0, 2) !== '01') {
        return false;
      } else return true;
    },
    error: 'please input a Bangladesh-i number',
  },
];

export const validatePhoneNumber = (number: string): string => {
  console.log(number);
  let error = '';
  validationRules.forEach((validationRule) => {
    if (!validationRule.function(number)) {
      error = validationRule.error;
      return;
    }
  });
  if (error) return error;
  else return 'success';
};
