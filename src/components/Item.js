export default function Item(item) {
  return (
    <>
      <div id="item">
        <img src={item.img} width="250" height="250" alt="" />
        <div id="infoItem">
          <h3>{item.name}</h3>
          <h5>Price: {item.price} ETH</h5>
          <button>More Info</button>
        </div>
      </div>
    </>
  );
}