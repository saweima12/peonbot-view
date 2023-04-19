<script lang="ts">
    import type { PageData } from './$types';
    import Grid from 'gridjs-svelte';
    import TSwitch from '$lib/components/tswitch.svelte';

    export let data: PageData;

    let showPassMember: boolean = false;
    const members = data.members;
    $: sortedList = members.filter(item => {
        if (!showPassMember && item.point >= 60)
            return false;
        return true;
    })
</script>

<div class="member-wrapper">
    <div class="w-full flex justify-end relative">
        <TSwitch bind:checked={showPassMember} text="顯示大於 60 點的成員"/>
    </div>

    <div class="grid-wrapper">
        <div class="grid-container">
            <Grid sort columns={[
                { name: "full_name", width: "50%"},
                { name: "point", width: "20%"}, 
                { name: "last_updated", width: "29%"}
            ]} search  autoWidth data={sortedList}/>
        </div>
    </div>
</div>

<style lang="postcss">
    .member-wrapper {
        overflow: hidden;
    }
    
    .grid-wrapper {
        width: clamp(300px, 100%, 1200px);
        overflow: scroll; 
    }

    .grid-container {
        width: clamp(600px, 100%, 1200px);
    }
</style>
