import { remoteAPI } from '$lib/route';
import dayjs from 'dayjs';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = async({params, fetch}) => {

    const url = remoteAPI().getChatInfo(params.chat)
    const response = await fetch(url);
    const data: Record<string, string> = await response.json();

    // get now
    const now = dayjs(new Date()).format("YYYY-MM-DD HH:mm")

    return {
        chatId: data.chat_id,
        name: data.chat_name,
        last_updated: now
    }
}