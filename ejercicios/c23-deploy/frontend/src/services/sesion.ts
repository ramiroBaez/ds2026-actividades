const CLAVE_TOKEN = "libreria_token";

export function guardarToken(token: string) {
  localStorage.setItem(CLAVE_TOKEN, token);
}

export function obtenerToken(): string | null {
  return localStorage.getItem(CLAVE_TOKEN);
}

export function borrarToken() {
  localStorage.removeItem(CLAVE_TOKEN);
}