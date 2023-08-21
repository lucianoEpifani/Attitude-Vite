import "./Search.css";
import { Link } from "react-router-dom";

function Search() {
  return (
    <div className="buscador">
      <Link to="/products" className="busqueda"> 
        <button>Search</button>
      </Link>
    </div>
  );
}

export default Search;
