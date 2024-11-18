import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
    return (
      <div className="item-list-container">
        <h1>{greeting} </h1>
        <br />
        
        <ItemCount stock={10} initial={5} onAdd={(count) => console.log(`Cantidad añadida: ${count}`)} />
      </div>


    );
  }
  
  export default ItemListContainer;
  