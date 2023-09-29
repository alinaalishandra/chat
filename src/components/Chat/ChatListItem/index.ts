import Handlebars from 'handlebars';
import {tmpl} from "@/components/Chat/ChatListItem/ChatListItem.tmpl.ts";
import {Person} from "@/components/Person";
import {PersonInfo} from "@/components/Person/PersonInfo";


export const ChatListItem = (options: Record<string,string>) => {
  return Handlebars.compile(tmpl)({
    person: Person(options),
    info: PersonInfo(),
  });
};