import Handlebars from 'handlebars';
import {tmpl} from "@/components/FormField/FormField.tmpl.ts";
import {FormFieldOptions} from "@/interfaces/interfaces.ts";
import {FormLabel} from "@/components/FormLabel";


export const FormField = (options: FormFieldOptions) => {
  return Handlebars.compile(tmpl)({
    label: FormLabel({text: options.text}),
    labelError: FormLabel({textError: options.textError}),
    type: options.typeInput,
    value: options.value,
    readOnly: options.readOnly,
  });
};