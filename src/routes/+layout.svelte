<script lang="ts">
    import "../app.css";
    import "../theme.css";
    import Navbar from "$lib/components/navbar.svelte";
    import Footer from "$lib/components/footer.svelte";
    import type { LayoutData } from './$types'

    export let data: LayoutData;
    const config = data.config
</script>

<svelte:head>
    <title>{config.title}</title>
</svelte:head>

<Navbar title={config.title} />
<div class="pt-20 px-4 main-wrapper">
    <slot/>
</div>
<Footer />
    
<style lang="postcss">
    @import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";
    
    .main-wrapper {
        min-height: 100vh;
        width: clamp(375px, 100%, 1200px);
        margin: 0 auto;
        overflow: hidden;
    }

</style>