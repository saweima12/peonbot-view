<script lang="ts">
    export let name: string;
    export let chatId: string;
</script>

<a href={`/chats/${chatId}/deletedmsg`} class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</div>
</a>