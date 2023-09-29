import Handlebars from 'handlebars';
import {tmpl} from "@/components/Chat/ChatList/ChatList.tmpl.ts";
import {ChatListItem} from "@/components/Chat/ChatListItem";

const testData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},{}, {}, {}];

export const ChatList = () => {
  return Handlebars.compile(tmpl)({
    chatListItems: testData.map(i => ChatListItem(i)),
  });
};