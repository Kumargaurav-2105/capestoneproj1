import "./Search.css"
function Search(){
    return(
        
        <div class="container"> <div class="search"> <div class="row"> <div class="col-md-6"> <div class="search-1"> <i class='bx bx-search-alt'></i> <input type="text" placeholder="Search by Place"/> </div> </div> <div class="col-md-6"> <div> <div class="search-2"> <i class='bx bxs-map' ></i> <input type="text" placeholder="Search by Name"/> <button>Search</button> </div> </div> </div> </div> </div>
</div>

    )
}
export default Search