<script>
    import InfoTable from './info-table/InfoTable.svelte';
    import { KNOWN_INTERCEPTOR } from '../../typescript/util';
</script>

<h1 class="main-title">
    Minimum Theoretical <br>
    Time on Target
</h1>

{#each KNOWN_INTERCEPTOR as interceptor}
    <InfoTable {interceptor} range="1500"/>
{/each}

<style>
    .main-title {
		text-align: center;
        font-size: 36px;
	}

    h1 {
        margin-top: .25em;
    }
</style>
