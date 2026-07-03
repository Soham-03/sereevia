export const ADMIN_USERNAME = 'admin';
export const ADMIN_PASSWORD = 'admin@123';
export const ADMIN_COOKIE = 'sereevia_admin';

export function isValidAdmin(username: string, password: string) {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}