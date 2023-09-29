import Handlebars from 'handlebars';
import {tmpl} from "@/components/ProfileForm/ProfileForm.tmpl.ts";
import {Button} from "@/components/Button";
import {ButtonOptions} from "@/interfaces/interfaces.ts";


export const ProfileForm = (options: Record<string,any>) => {
  return Handlebars.compile(tmpl)({
    title: options.title,
    formFields: options.formFields,
    buttons: options.buttons.map((btn: ButtonOptions) => Button(btn)),
  })
};