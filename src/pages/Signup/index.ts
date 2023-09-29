import Handlebars from 'handlebars';
import {tmpl} from "@/components/Auth/Auth.tmpl.ts";
import {Form} from "@/components/Auth/Form";
import {FormField} from "@/components/FormField";
import {Options} from "@/interfaces/interfaces.ts";
import {formFieldsData} from "@/data.ts";

export const Signup = (options: Options) => {
  const formFields = formFieldsData
    .filter(i => i.name !== 'display_name')
    .map(i => {
      i.value = '';
      return FormField(i);
    });
  
  return Handlebars.compile(tmpl)({
    form: Form({
      title: options.title,
      submitBtnText: options.submitBtnText,
      actionBtnText: options.actionBtnText,
      linkHref: '/sign-in',
      link: '/chat',
	    formFields,
    }),
  });
};