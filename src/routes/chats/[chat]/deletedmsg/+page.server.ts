import type { DeleteMessageDetail } from '$lib/types';
import type { PageServerLoad } from './$types';
import { remoteAPI } from '$lib/route';
import dayjs from 'dayjs';


export const load: PageServerLoad = async ({params, fetch}) => {

    const chatId: string = params.chat;
    const endpoint = remoteAPI().getDeletedMsg(chatId);
    // fetch data from remote
    const result = await fetch(new URL(endpoint));
    const deletedList: Array<DeleteMessageDetail> = await result.json()

    // formate datetime
    const formatedList = deletedList.map(item => {
        item.record_time = dayjs(item.record_time).format("YYYY-MM-DD HH:mm")
        return item;
    })

    // group
    const groupMap = formatedList.reduce((groups: Record<string, Array<DeleteMessageDetail>>, item: DeleteMessageDetail) => {
        const _date = dayjs(new Date(item.record_time)).format("YYYY-MM-DD");
        // add group
        groups[_date] = groups[_date] || [];
        groups[_date].push(item);
        return groups;
    }, {})

    return {
        dateGroup: groupMap,
    }
}