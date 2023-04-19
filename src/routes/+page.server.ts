import type { ChatDetail } from '$lib/types'
import { remoteAPI } from '$lib/route';

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({fetch}) => {

    const url = remoteAPI().getChats();
    const response = await fetch(url);
    const chats: Array<ChatDetail> = await response.json()

    return {
        chats
    }
}