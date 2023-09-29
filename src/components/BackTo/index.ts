import Handlebars from 'handlebars';
import {tmpl} from "@/components/BackTo/BackTo.tmpl.ts";
import {Link} from "@/components/Link";
import './BackTo.scss';

export const BackTo = (options: Record<string,string>) => {
  return Handlebars.compile(tmpl)({
    link: Link({linkHref: options.path, text: ''}),
  })
};