const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'The username or password you entered is incorrect',
  INVALID_PASSWORD: 'The username or password you entered is incorrect'

}
export function error (code) {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Something went wrong'
}
