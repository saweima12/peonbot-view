<script lang="ts">
    import type { PageServerData } from './$types';
    export let data: PageServerData;
</script>

<svelte:head>
    <title>{data.metadata.title}</title>
</svelte:head>

<div class="about-wrapper">
    {@html data.content}
</div>

<style lang="postcss">
    .about-wrapper {
        width: clamp(300px, 100%, 750px);
        margin: 0 auto;
    }
</style>