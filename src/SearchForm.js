import './SearchForm.css';

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ipswich, AU
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button className="dropdown-item" type="button">
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="🔍 Search your city"
                    id="search-box"
                  />
                </div>
                <div className="col-4">
                  <input type="submit" value="Search" id="search-button w-100" />
                </div>
              </div>
            </button>
          </div>
        </div>
        <button id="current-location-button">
          <i class="fas fa-map-marker-alt"></i>
        </button>
      </form>
    </div>
  );
}