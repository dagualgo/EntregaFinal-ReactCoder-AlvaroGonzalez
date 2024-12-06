import "./FilterButtons.css";

const FilterButtons = ({ setFilter }) => {
    return (
      <div className="productos-buttons">
        <button onClick={() => setFilter("all")}>Todos</button>
        <button onClick={() => setFilter("men")}>Hombres</button>
        <button onClick={() => setFilter("women")}>Mujeres</button>
      </div>
    );
  };
  
  export default FilterButtons;
  