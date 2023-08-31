import Cart from "../components/Cart";

const Shop = () => {
  return (
    <main>
      <section className="shop">
        <div className="container">
          <div className="cart-box">
            <div className="row">
              <Cart />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
