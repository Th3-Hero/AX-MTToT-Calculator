<script>
    import InfoTable from './info-table/InfoTable.svelte';
    import { KNOWN_INTERCEPTOR } from '../../typescript/util';
</script>

<!-- The spacing needs to be worked on for sure -->

<h1 class="title has-text-centered mt-1">
    Minimum Theoretical <br>
    Time on Target
</h1>

{#each KNOWN_INTERCEPTOR as interceptor}
    <InfoTable {interceptor}/>
{/each}

