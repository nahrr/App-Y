<script>
    import PlacesData from "../assets/places.json";

    const data = PlacesData;
    let isHidden = true;
    let searchValue = "";
    function toggle() {
        isHidden = false;
    }

    $: placesList = data.filter(
        (item) =>
            item.location.toUpperCase().includes(searchValue.toUpperCase()) ||
            item.country.toUpperCase().startsWith(searchValue.toUpperCase())
    );
</script>

<div>
    <h1>Places</h1>
    <div class="show_places_panel">
        {#if isHidden}
            <button on:click={toggle}>Get Places</button>
        {/if}
        {#if !isHidden}
            <div class="show_Places">
                <div class="search_panel">
                    <label
                        >Search places:
                        <input
                            on:input={placesList}
                            bind:value={searchValue}
                            placeholder="Filter..."
                        />
                    </label>
                </div>

                {#each placesList as place (place.id)}
                    <div class="place_data">
                        <div class="places">
                            <div>
                                {place.country}
                            </div>
                            <div>
                                {place.location}
                            </div>
                            <div class="card">
                                <img src={place.image} alt="city" />
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    </div>
</div>

<style scoped>
    button {
        padding: 1rem;
        background-color: #dddddd;
        color: rgb(218, 218, 218);
        border: 1px solid #ccc;
        cursor: pointer;
        transition: all 0.2s;
        color: #2c3e50;
    }
    button:hover {
        background-color: rgb(204, 248, 175);
    }
    img {
        width: 10rem;
        height: 5rem;
        object-fit: cover;
        border-radius: 0.1rem;
        box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.5);
    }
    input:hover {
        background-color: rgb(204, 248, 175);
    }
    input:focus {
        background-color: rgb(204, 248, 175);
    }
    label {
        font-weight: bold;
        margin-right: 1rem;
    }
    .place_data:nth-child(odd) {
        background-color: rgb(245, 239, 239);
    }
    .places {
        flex-grow: 8;
        text-align: left;
        padding-left: 1rem;
        display: flex;
        justify-content: space-between;
        font-weight: bold;
    }
    .place_data {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin: 0 auto;
        border-bottom: 2px solid #ccc;
        padding: 1rem;
        max-width: 55rem;
    }
    .search_panel {
        display: flex;
        align-items: center;
        margin-top: 1rem;
        margin: 0 auto;
        border-bottom: 2px solid #ccc;
        padding: 1rem;
        max-width: 55rem;
    }
</style>