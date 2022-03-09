export default function Item({item}) {
  
  const {name, price, img} = item

  return (
    <>
      <div id="product">
        <img src={img} width="250" height="250" alt="" />
        <div id="infoProduct">
          <h3>{name}</h3>
          <h5>Price: {price} ETH</h5>
          <button>More Info</button>
        </div>
      </div>
    </>
  );
}
