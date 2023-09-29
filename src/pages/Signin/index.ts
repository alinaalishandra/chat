import Handlebars from 'handlebars';
import {tmpl} from "../../components/Auth/Auth.tmpl.ts";
import {FormField} from "@/components/FormField/index.ts";
import {Form} from "@/components/Auth/Form/index.ts";
import {Options} from "@/interfaces/interfaces.ts";


export const Signin = (options: Options) => {
  return Handlebars.compile(tmpl)({
    form: Form({
      title: options.title,
      submitBtnText: options.submitBtnText,
      actionBtnText: options.actionBtnText,
      linkHref: '/sign-up',
      formFields: [
        FormField({typeInput: 'text', name: 'login', text: 'Логин', textError: 'Неверный логин'}),
        FormField({typeInput: 'password', name: 'password', text: 'Пароль', textError: 'Неверный пароль'}),
      ],
      link: '/chat',
    }),
  });
};