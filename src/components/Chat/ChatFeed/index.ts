import Handlebars from 'handlebars';
import {tmpl} from "@/components/Chat/ChatFeed/ChatFeed.tmpl.ts";
import {ChatList} from "@/components/Chat/ChatList";


export const ChatFeed = () => {
  return Handlebars.compile(tmpl)({
    chatList: ChatList(),
  });
};