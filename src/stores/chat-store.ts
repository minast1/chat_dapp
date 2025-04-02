import { createStore } from "zustand/vanilla";

type Message = {
  message: string;
  roomId: string;
  sender: string;
  timestamp: string;
};
export type ChatState = {
  messages: Message[];
};

export type ChatActions = {
  addMessage: (msg: Message) => void;
};

export type ChatStore = ChatState & ChatActions;

export const defaultInitState: ChatState = {
  messages: [],
};

export const createChatStore = (initState: ChatState = defaultInitState) => {
  return createStore<ChatStore>()((set) => ({
    ...initState,
    addMessage: (msg) =>
      set((state) => ({ messages: [...state.messages, msg] })),
  }));
};
