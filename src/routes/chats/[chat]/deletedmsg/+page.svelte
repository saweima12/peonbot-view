<script lang="ts">
    import { JsonView } from '@zerodevx/svelte-json-view'; 
    import type { PageData } from './$types';

    export let data: PageData;

    const dateGroup = Object.entries(data.dateGroup);
</script>

<div class="deleted-wrapper">
    <div class="deleted-container">
        {#each dateGroup as group}
            <h2>{group[0]}</h2>
        
            {#each group[1] as message} 
                <details>
                    <summary class="flex">
                        <div class="flex w-full px-4 py-1 deleted-item">
                            <div class="inline-flex">{message.record_time}</div>
                            <div class="inline-flex px-8 justify-center">{message.content_type}</div>
                            <div class="inline-flex flex-grow justify-center">{message.full_name}</div>
                            <div class="inline-flex">{message.user_id}</div>
                        </div>    
                    </summary>
                    <JsonView json={message.raw}/>
                </details>
            {/each}
        {/each}
    </div>
</div>

<style lang="postcss">
    .deleted-wrapper {
        width: 100%;
        overflow: scroll;
    }

    .deleted-container {
        width: clamp(800px, 100%, 1200px);
    }

    .deleted-item {
        background-color: #e9eff5;
    }
    details {
        padding: 0;
        border-bottom: 1px solid #f6f7f8;
    }
</style>