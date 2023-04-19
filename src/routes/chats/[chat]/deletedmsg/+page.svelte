<script lang="ts">
    import { JsonView } from '@zerodevx/svelte-json-view'; 
    import type { PageData } from './$types';

    export let data: PageData;

    const dateGroup = Object.entries(data.dateGroup)
        .map( ([date, records]) => {
            records = records.sort((d1, d2) => new Date(d2.record_time).getTime() - new Date(d1.record_time).getTime());
            return {date, records}
        }).sort((d1, d2) => new Date(d2.date).getTime() - new Date(d1.date).getTime());

</script>

<div class="deleted-wrapper">
    <div class="deleted-container">
        {#each dateGroup as group}
            <h2>{group.date}</h2>
        
            {#each group.records as message} 
                <details>
                    <summary class="flex">
                        <div class="flex w-full px-4 py-1 deleted-item">
                            <div class="inline-flex">{message.record_time}</div>
                            <div class="inline-flex px-8 justify-center">{message.content_type}</div>
                            <div class="inline-flex flex-col flex-grow ">
                                <div class="flex justify-center fullname">
                                    {message.full_name}
                                </div>
                                {#if message.username !== ""}
                                    <div class="flex justify-center username">
                                        ({message.username})
                                    </div>    
                                {/if}

                            </div>

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
        font-size: 18px;
        color: #333;
    }

    .deleted-item > * {
        align-self: center;
    }

    .deleted-item .fullname {
        color: #000;
    }

    details {
        padding: 0;
        border-bottom: 1px solid #f6f7f8;
    }
</style>