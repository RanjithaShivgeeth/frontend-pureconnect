import "../AddInventoryPage/AddInventoryPage.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";

function EditInventoryPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [inventoryData, setInventoryData] = useState({});
  var [listOfWarehouses, setListOfWarehouses] = useState([]);

  useEffect(() => {
    async function getInventoryItem() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/inventories/" + params.id
      );
      setInventoryData(data.data);
      console.log("called from EditInventoryPage component");
      const listOfWarehouses = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses/"
      );
      setListOfWarehouses(listOfWarehouses.data);
    }
    getInventoryItem();
  }, []);

  function handlePatch() {
    try {
      axios.patch(
        "https://instock-team-2-api.fly.dev/inventories/" + inventoryData.id,
        {
          ...inventoryData,
        }
      );
    } catch (err) {
      return "Could not save the warehouse resource, something went wrong.";
    }

    navigate("/inventory/");
  }

  if (!inventoryData) {
    return <div></div>;
  }
  return (
    <>
      <div className="backgroundcolor">
        <HeaderNav />

        <div className="pagebackground">
          <div className="inventory__heading">
            <h2 className="inventory__header">
              <NavLink to="/">
                <img
                  src={arrowIcon}
                  className="inventory__arrowicon"
                  alt="arrow icon"
                />
              </NavLink>
              Edit Organic Orbs
            </h2>
          </div>
          <div className="inventory__divider"></div>
          <div className="pagebackground__container">
            <div className="inventoryDetails">
              <div className="inventory">
                <form className="inventory__form">
                  <div className="form__column">
                    <div className="inventory">
                      <p className="inventory__title">Orbs Details</p>
                    </div>
                    <label className="inventory__name " htmlFor="">
                      Orbs Name
                      <input
                        className="inventory__name1 Warehouse--text"
                        type="text"
                        name="item_name"
                        placeholder="item Name"
                        value={inventoryData.item_name}
                        onChange={(e) => {
                          const updatedinventoryData = { ...inventoryData };
                          updatedinventoryData["item_name"] = e.target.value;
                          setInventoryData(updatedinventoryData);
                        }}
                      />
                    </label>

                    <label className="inventory__description">
                      Description
                      <textarea
                        className="inventory__description1 Warehouse--text"
                        type="text"
                        name="description"
                        placeholder="description"
                        value={inventoryData.description}
                        onChange={(e) => {
                          const updatedinventoryData = { ...inventoryData };
                          updatedinventoryData["description"] = e.target.value;
                          setInventoryData(updatedinventoryData);
                        }}
                      />
                    </label>

                    <label className="inventory__category" htmlFor="">
                      Category
                      <input
                        className="inventory__category1 Warehouse--text"
                        type="text"
                        name="category"
                        placeholder="category"
                        value={inventoryData.category}
                        onChange={(e) => {
                          const updatedinventoryData = { ...inventoryData };
                          updatedinventoryData["category"] = e.target.value;
                          setInventoryData(updatedinventoryData);
                        }}
                      />
                    </label>
                  </div>
                </form>
              </div>
            </div>
            {/* ************** */}
            {/* ************** */}
            {/* ************** */}
            {/* ************** */}
            <div className="inventory__divider2"></div>
            <div className="form__column2">
              <div className="inventory">
                <p className="inventory__title">Orbs Availability</p>
              </div>
              <label className="inventory__status">
                Status
                {inventoryData.status === "In Stock" ? (
                  <div className="inventory__radio-group">
                    <div className="inventory__radio-stocks">
                      <label className="inventory__radio-text">
                        <input
                          className="inventory__radio-input"
                          type="radio"
                          name="status"
                          value="In Stock"
                          onClick={(e) => {
                            const updatedinventoryData = {
                              ...inventoryData,
                            };
                            updatedinventoryData["status"] = e.target.value;
                            setInventoryData(updatedinventoryData);
                          }}
                          checked
                        />
                        In Stock
                      </label>
                      <label className="inventory__radio-text">
                        <input
                          className="inventory__status1"
                          type="radio"
                          name="status"
                          value="Out Stock"
                          onClick={(e) => {
                            const updatedinventoryData = {
                              ...inventoryData,
                            };
                            updatedinventoryData["quantity"] = "0";
                            updatedinventoryData["status"] = e.target.value;
                            setInventoryData(updatedinventoryData);
                          }}
                        />
                        Out of Stock
                      </label>
                    </div>

                    <label className="inventory__quantity" htmlFor="">
                      Quantity
                      <input
                        className="inventory__quantity1 Warehouse--text"
                        type="text"
                        name="quantity"
                        placeholder="Quantity of items"
                        value={inventoryData.quantity}
                        onChange={(e) => {
                          const updatedinventoryData = {
                            ...inventoryData,
                          };
                          updatedinventoryData["quantity"] = e.target.value;
                          setInventoryData(updatedinventoryData);
                        }}
                      />
                    </label>
                  </div>
                ) : (
                  <div className="inventory__radio-group">
                    <div className="inventory__radio-stocks">
                      <label className="inventory__radio-text">
                        <input
                          className="inventory__radio-input"
                          type="radio"
                          name="status"
                          value="In Stock"
                          onClick={(e) => {
                            const updatedinventoryData = {
                              ...inventoryData,
                            };
                            updatedinventoryData["status"] = e.target.value;
                            setInventoryData(updatedinventoryData);
                          }}
                        />
                        In Stock
                      </label>
                      <label className="inventory__radio-text">
                        <input
                          className="inventory__radio-input"
                          type="radio"
                          name="status"
                          value="Out Stock"
                          checked
                          onClick={(e) => {
                            const updatedinventoryData = {
                              ...inventoryData,
                            };
                            updatedinventoryData["quantity"] = "0";
                            updatedinventoryData["status"] = e.target.value;
                            setInventoryData(updatedinventoryData);
                          }}
                        />
                        Out of Stock
                      </label>
                    </div>
                  </div>
                )}
              </label>

              <label className="inventory__address ">
                Farmhouse
                <select
                  className="inventory__select"
                  onChange={(e) => {
                    const updatedinventoryData = { ...inventoryData };
                    updatedinventoryData["warehouse_id"] = e.target.value;
                    setInventoryData(updatedinventoryData);
                  }}
                >
                  {listOfWarehouses.map((warehouse, index) => {
                    if (inventoryData.warehouse == warehouse.id)
                      return (
                        <option key={index} value={warehouse.id} selected>
                          {warehouse.warehouse_name}
                        </option>
                      );
                    else
                      return (
                        <option key={index} value={warehouse.id}>
                          {warehouse.warehouse_name}
                        </option>
                      );
                  })}
                  {/* <option value={warehouse.id} selected>
                       
                       </option> */}
                </select>
              </label>
            </div>
          </div>

          <div className="addwarehouse">
            <Link
              to={"/inventory/"}
              className="addwarehouse__cancel addwarehouse--button"
            >
              Cancel
            </Link>
            <button
              onClick={handlePatch}
              className="addwarehouse__btn addwarehouse--button"
            >
              Save
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default EditInventoryPage;
