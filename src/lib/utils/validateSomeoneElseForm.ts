export function validateSomeoneElse(name: string, dob: Date, gender: string) {
  if (!name || !dob || !gender) {
    return 'Please enter all info';
  } else {
    return 'success';
  }
}
