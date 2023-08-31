// Icons
import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Context } from "../utils/CartContext";
import bmw from "../assets/img/bmw.png";
const ViewAllProduct = () => {
  // Gloabl State
  const { cart, incrementProduct, decrementProduct, removeProduct, total } =
    useContext(Context);
  return (
    <section className="allCars">
      <div className="container">
        <div className="row">
          <h2 className="title">All Cars List</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Car Image</th>
                <th>Car Name</th>
                <th>Car Details</th>
                <th>Quantify</th>
                <th>Car Price</th>
                <th>Edit Car</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="carImg">
                <img src={bmw} alt="" />
                </td>
                <td>Bmw</td>
                <td>
                  
                  BMW is a German brand known for its luxurious and sporty cars.
                  BMW models, which are made with high-quality materials and
                  offer powerful engine options, enhance the driving experience.
                </td>
                <td>
                  <div className="btn">
                    <button>+</button>
                    <div className="quantify">1</div>

                    <button> -</button>
                  </div>
                </td>
                <td>$84.000</td>
                <td className="edit">
                  <FaTrash />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="total-sum">
            Total: <span>$84.000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllProduct;
