import Handlebars from 'handlebars';
import {tmpl} from "@/components/Button/Button.tmpl.ts";
import {ButtonOptions} from "@/interfaces/interfaces.ts";
import {Link} from "@/components/Link";


export const Button = (options: ButtonOptions) => {
  return Handlebars.compile(tmpl)({
    text: options.text,
    type: options.type,
    class: options.class,
    link: options.link ? Link({linkHref: options.link, text: options.text}) : null,
  });
};