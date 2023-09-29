import Handlebars from 'handlebars';
import {tmpl} from "@/components/Auth/Form/Form.tmpl.ts";
import {FormOptions} from "@/interfaces/interfaces.ts";
import {Link} from "@/components/Link";
import {Button} from "@/components/Button";


export const Form = (options: FormOptions) => {
  return Handlebars.compile(tmpl)({
    title: options.title,
    formFields: options.formFields,
    button: Button({text: options.submitBtnText, class: 'submit-btn', type: 'submit', link: options.link}),
    link: Link({linkHref: options.linkHref, text: options.actionBtnText}),
  })
};