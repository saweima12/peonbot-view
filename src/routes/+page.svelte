<script lang="ts">
    import type { PageData } from "./$types"; 
    import Card from '$lib/components/card.svelte';
    export let data: PageData;

    const chats = data.chats;
</script>


<ul class="flex flex-wrap justify-start chat-fall">
{#each chats as chat}
    <li class="p-4 card chat-item">
        <Card chatId={chat.chat_id} name={chat.chat_name} />
    </li>
{/each}
</ul>    

<style lang="postcss">
    .chat-item {
        display: inline-flex;
        flex-grow: 1;
    }
</style>