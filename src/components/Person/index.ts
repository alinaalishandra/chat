import Handlebars from 'handlebars';
import {tmpl} from "@/components/Person/Person.tmpl.ts";
import {PersonOptions} from "@/interfaces/interfaces.ts";

/**
 * Аватар собеседника
 */
export const Person = (options: PersonOptions) => {
  return Handlebars.compile(tmpl)({
    // todo: src
    src: options.src,
  });
};