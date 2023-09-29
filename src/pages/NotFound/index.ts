import Handlebars from 'handlebars';
import {tmpl} from "@/components/Error/Error.tmpl.ts";
import {Link} from "@/components/Link";
import '../../components/Error/Error.scss';


export const NotFound = (options: Record<string, string>) => {
  return Handlebars.compile(tmpl)({
    link: Link({linkHref: '/chat', text: 'Назад к чатам'}),
    status: options.status,
    text: options.text,
  });
};