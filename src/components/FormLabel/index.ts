import Handlebars from 'handlebars';
import {tmpl} from "@/components/FormLabel/FormLabel.tmpl.ts";
import {FormLabelOptions} from "@/interfaces/interfaces.ts";


export const FormLabel = (options: FormLabelOptions) => {
  return Handlebars.compile(tmpl)({
    text: options.text,
    textError: options.textError,
  });
};