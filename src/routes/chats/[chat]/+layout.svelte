<script lang="ts">
	import Tabgroup from "$lib/components/tabgroup.svelte";
	import { pageRoute } from "$lib/route";
	import textlang from "$lib/textlang";
	import type { TabItem } from "$lib/types";
	import type { LayoutData } from "./$types";
    
    export let data: LayoutData;
    const chatId = data.chatId;

    const group: Array<TabItem> = [
        { id: "members", label: textlang.member_point, link: pageRoute.getMembersRoute(chatId)},
        { id: "deletedmsg", label: textlang.deleted_message, link: pageRoute.getDeletedMsgRoute(chatId)}
    ]

</script>

<header class="mb-4">
    <h2>#{data.name}</h2>
    <div class="datetime">
        {textlang.last_updated_time}
        {data.last_updated}
    </div>
</header>


<Tabgroup group={group}/>
<slot/>