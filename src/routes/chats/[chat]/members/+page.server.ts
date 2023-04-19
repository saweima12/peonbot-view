import dayjs from 'dayjs';
import type { MemberDetail } from '$lib/types';
import { remoteAPI } from '$lib/route';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async({params, fetch}) => {
    
    const chatId = params.chat;
    const url = remoteAPI().getMembers(chatId);
    const response = await fetch(url);
    const data: Array<MemberDetail> = await response.json()

    const formatedData = data.map(item => {
        item.last_updated = dayjs(item.last_updated).format("YYYY-MM-DD")
        return item
    }).sort((p1, p2) => p2.point - p1.point)

    return{
        members: formatedData
    }
};