import Handlebars from 'handlebars';
import {tmpl} from "@/components/Person/PersonInfo/PersonInfo.tmpl.ts";

export const PersonInfo = () => {
  return Handlebars.compile(tmpl)({});
};