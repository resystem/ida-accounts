export function phoneMask(input: string): string {
  let v = input;
  v = v.replace(/\D/g, '');
  v = v.length > 11 ? v.substring(0, 11) : v;
  v = v.replace(/^(\d\d)(\d)/g, '($1) $2');
  v = v.replace(/(\d{5})(\d)/, '$1-$2');
  return v;
}

export function isPhone(input: string): boolean {
  const inputWithoutChars = input.replace(/\W/g, '');
  const inputPhoneFormatted = `+55${inputWithoutChars}`;
  const regexPhone = /^\+[0-9]{9,}$/;
  return regexPhone.test(inputPhoneFormatted);
}

export function isEmail(input: string): boolean {
  const regexW3C = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regexW3C.test(input);
}

export function emailValidation(email: string): string {
  return isEmail(email) ? '' : 'formato de e-mail inválido';
}

export function phoneValidation(phone: string): string {
  return isPhone(phone) ? '' : 'número de celular inválido';
}

export function usernameValidation(username: string): string {
  const errorMessage = 'Utilize apenas letras e números';
  const regexUsername = /^[a-zA-Z0-9]*$/;
  return regexUsername.test(username) ? '' : errorMessage;
}

function passwordPoints(password: string): number {
  let points = 0;

  let regex = /[0-9]/;
  if (regex.test(password)) points += 10;

  regex = /[a-zA-Z]/;
  if (regex.test(password)) points += 10;

  if (password.length >= 8) points += 10;

  return points;
}

export function passwordValidation(password: string): string {
  const errorMessage =
    'A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra e um número';
  const points = passwordPoints(password);
  return points < 30 ? errorMessage : '';
}
