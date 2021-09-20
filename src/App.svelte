<svelte:head>
    <style src="./bulma.scss"></style>
</svelte:head>

<script lang="ts">
    import Mttot from './components/Mttot.svelte';
    import { NavbarTabs } from './NavbarTabs';
    import SettingUi from './components/inputs/SettingsUi.svelte';

    let selectedTab = NavbarTabs.MTTOT;
    let newTab = NavbarTabs.MTTOT;

    const selectTab = (): void => {
        if (newTab === selectedTab) {
            return;
        }
        document.getElementById(`${ selectedTab }Nav`).classList.remove('is-active');
        document.getElementById(`${ newTab }Nav`).classList.add('is-active');
        selectedTab = newTab;
    };

    $: newTab, selectTab();

</script>

<div class="main-page-container">
    <div class="tabs is-boxed is-fullwidth mb-0 tab-container">  <!-- width of tab-buttons needs to be changed depending on how many there are -->
        <ul class="p-0 m-0 ml-3 mr-3">
            <li id="mttotNav" class="tab is-active" on:click={() => newTab = NavbarTabs.MTTOT}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a><span>Time on Target Calculator</span></a>
            </li>
            <li id="gaussNav" class="tab" on:click={() => newTab = NavbarTabs.GAUSS}>
                <!-- svelte-ignore a11y-missing-attribute -->
                <a><span>Gauss Calculator</span></a>
            </li>
        </ul>
    </div>

    <div class="is-flex content-container">
        <div class="setting-container">
            <SettingUi/>
        </div>

        {#if selectedTab === 'mttot'}
            <Mttot/>
        {:else}
            <div>Placeholder Gauss Component</div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import "src/theme";
    .main-page-container {
        position: absolute;
        left: 10%;
        right: 10%;
        width: 80%;
        height: 95%;
    }

    .tab-container {
        width: 100%;
        height: 50px;
        border: 3px solid $orange;
        border-bottom: none;
    }

    .tab a {
        color: $font;
        cursor: pointer;
    }
    
    .tabs ul {
        align-items: flex-end;
        border-bottom: none;
    }

    .tabs.is-boxed li.is-active a {
        background: $background-light;
    }

    .setting-container {
        height: 600px;
        width: 325px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .content-container {
        width: 100%;
        border: 3px solid $orange;
    }

</style>
