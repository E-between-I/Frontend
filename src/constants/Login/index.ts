interface SIGN_FORM_TYPE {
  name: string;
  placeholder: string;
  type: string;
}

export const SIGN_FORM: SIGN_FORM_TYPE[] = [
  { name: "username", placeholder: "UserName", type: "text" },
  { name: "password", placeholder: "Password", type: "password" },
];
