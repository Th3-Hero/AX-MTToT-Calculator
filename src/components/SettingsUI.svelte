<script lang="ts">
    import WeaponSelector from './SubComponents/SettingsUI/Weapon.svelte'
	import DistroSelector from './SubComponents/SettingsUI/Distro.svelte'
    function testButton() {console.log("Click!")}
</script>

<div>
    <div class="title-wrap">
        Settings:
    </div>

    <div>
        <WeaponSelector/>
    </div>

    <div>
        <DistroSelector/>
    </div>

    <div>
        <div class="custom-label">
            Active Heatsinks
        </div>

        <input type="text" id="sinks" class="text-input small-text-input" placeholder="0">
    </div>

    <div>
        <div class="custom-label">
            Target Range
        </div>

        <input type="text" id="range" class="text-input small-text-input" placeholder="0">
    </div>

    <div>
        <button class="custom-button" on:click={testButton}>Calculate</button>
    </div>
</div>

<style>

	.custom-button {
		left: 162px;
		bottom: 20px;
		width: 125px;
		padding: 5px 5px;
		position: absolute;
		transform: translate(-50%, 0%);
		background: none;
		color: white;
		border: 3px solid #ff7100;
		border-radius: 10px;
		text-align: center;
		font-size: 16px;
		font-weight: bold;
		cursor: pointer;
	}

</style>