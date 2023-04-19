<script lang="ts">
    export let title: string;
</script>

<nav class="flex fixed w-full navbar">
    <div class="flex h-full nav-container items-center align-middle">
        <div class="text-xl logo">
            <a href="/">
                {title}
            </a>
        </div>
        
        <div class="grow"></div>

        <nav class="nav-links">
            <div class="nav-item"><a href="/about">關於機器人</a></div>
        </nav>
    </div>
</nav>


<style lang="postcss">
    .navbar {
        height: 60px;
        background-color: #85a1bb;
        color: #333;
        border-bottom: 1px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px -2px 10px;
        transition: all .3s;
        padding: .5rem 1rem;
        z-index: 999;
    }
    
    .logo {
        font-weight: 600;
    }

    .nav-container {
        width: clamp(300px, 100%, 1200px);
        margin: 0 auto;
    }

    .nav-links a{
        text-decoration: underline;
    }
</style>