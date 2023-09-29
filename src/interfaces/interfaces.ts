export interface FormOptions extends Options {
  formFields: Array<string>;
  linkHref: string;
  link?: string;
}

export interface LinkOptions {
  text: string;
  linkHref: string;
}


export interface ButtonOptions {
  text: string;
  type: string;
  class: string;
  link?: string;
}

export interface Options {
  title: string;
  submitBtnText: string;
  actionBtnText: string;
}

export interface FormFieldOptions extends FormLabelOptions {
  typeInput: string;
  name: string;
  placeholder?: string;
  value?: string;
  readOnly?: boolean;
}
export interface FormLabelOptions {
  text?: string;
  textError?: string;
}

export interface PersonOptions {
  src?: string;
}