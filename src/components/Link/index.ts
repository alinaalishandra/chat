import Handlebars from 'handlebars';
import {tmpl} from "@/components/Link/Link.tmpl.ts";
import {LinkOptions} from "@/interfaces/interfaces.ts";


export const Link = (options: LinkOptions) => {
  return Handlebars.compile(tmpl)({
    text: options.text,
    linkHref: options.linkHref,
  });
};