import { dev } from '$app/environment';

export const remoteAPI = () => {
    const API_BASE = dev 
        ? import.meta.env["VITE_API_DOMAIN"]
        : process.env["API_DOMAIN"];

    return {
        getChats: () => `${API_BASE}/dataview/chats`,
        getChatInfo: (chatId: string) => `${API_BASE}/dataview/chats/${chatId}`,
        getMembers: (chatId: string) => `${API_BASE}/dataview/chats/${chatId}/members`,
        getDeletedMsg: (chatId: string) => `${API_BASE}/dataview/chats/${chatId}/deletedmsg`
    }
}

export const pageRoute = {
    getDeletedMsgRoute: (chatId: string) => `/chats/${chatId}/deletedmsg`,
    getMembersRoute: (chatId: string) => `/chats/${chatId}/members`,
}