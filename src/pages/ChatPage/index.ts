import Handlebars from 'handlebars';
import {tmpl} from "@/pages/ChatPage/ChatPage.tmpl.ts";
import {ChatFeed} from "@/components/Chat/ChatFeed";


export const ChatPage = () => {
  return Handlebars.compile(tmpl)({
    chatFeed: ChatFeed(),
  });
};