export const userInputs = [
  {
    id: "username",
    label: "Username",
    type: "text",
    placeholder: "Nombre y apellido:",
    pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30}(\\s[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30})?$",
    message:
      "Ingrese un texto alfabético válido (2 a 30 caracteres, sin signos ni caracteres especiales)",
  },  
  {
    id: "email",
    label: "Email",
    type: "mail",
    placeholder: "Email:",
    pattern: "^[a-zA-Z0-9]+([._-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,6}$",
    message: "Ingrese un correo electrónico válido",
  },

  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Contraseña:",
    pattern: "^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;':\",./<>?])(?!.*\\s).{6,10}$",
    message:
      "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial. Debe tener entre 6 y 10 caracteres.",
  },

];
