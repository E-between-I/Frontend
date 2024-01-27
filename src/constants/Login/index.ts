interface SIGN_FORM_TYPE {
  name: string;
  placeholder: string;
  type: string;
}

export const SIGN_FORM: SIGN_FORM_TYPE[] = [
  { name: "e-mail", placeholder: "Email", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];
