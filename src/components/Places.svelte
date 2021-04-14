<script>
    import PlacesData from "../assets/places.json";

    const data = PlacesData;
    var searchValue = "";

    $: placesList = data.filter(
        (item) =>
            item.location.toUpperCase().includes(searchValue.toUpperCase()) ||
            item.country.toUpperCase().startsWith(searchValue.toUpperCase())
    );

    // function placesList() {

    //     var tempPlaces = data;
    //     //Not rly sure about this to be honest
    //     if (searchValue != "" && searchValue) {

    //         tempPlaces = tempPlaces.filter((item) => {
    //             return (
    //                 item.location
    //                     .toUpperCase()
    //                     .includes(searchValue.toUpperCase()) ||
    //                 item.country
    //                     .toUpperCase()
    //                     .startsWith(searchValue.toUpperCase())
    //             );
    //         });
    //     }
    //     console.log(tempPlaces);
    //     return tempPlaces;

    // }
</script>

<div>
    <h1>Places</h1>
    <div class="show_Places_panel">
        <button>Get Places</button>
        <div class="show_Places">
            <div class="search_panel">
                <!-- <label>Search places:</label> -->
                <input
                    on:input={placesList}
                    bind:value={searchValue}
                    placeholder="Filter..."
                />
            </div>

            {#each placesList as place (place.id)}
                <div class="place_data">
                    <div class="places">
                        <div>{place.country}</div>
                        <div>{place.location}</div>
                        <div class="card">
                            <!-- svelte-ignore a11y-missing-attribute -->
                            <img src={place.image} />
                        </div>
                    </div>
                </div>
            {/each}
        </div>
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
    /* label {
  font-weight: bold;
  margin-right: 1rem;
} */
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
