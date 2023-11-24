import "../AddWarehousePage/AddWarehousePage.scss";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import { NavLink, useParams, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";

function EditWarehousePage() {
  const params = useParams();
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState({});

  function handlePatch() {
    // console.log({ ...warehouseData });
    try {
      axios.patch(
        "https://instock-team-2-api.fly.dev/warehouses/" + warehouseData.id,
        {
          ...warehouseData,
        }
      );
    } catch (err) {
      return "Could not save the warehouse resource, something went wrong.";
    }

    navigate("/warehouses/");
  }

  useEffect(() => {
    async function getWarehouse() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses/" + params.id
      );
      setWarehouseData(data.data);
      console.log("called from EditWarehousePage component");
    }
    getWarehouse();
  }, []);
  if (!warehouseData) {
    return <div></div>;
  }
  return (
    <>
      <div className="backgroundcolor">
        <HeaderNav />

        <div className="pagebackground">
          <div className="warehouse__heading">
            <h2 className="Warehouse__header">
              <NavLink to="/">
                <img
                  src={arrowIcon}
                  className="warehouse__arrowicon"
                  alt="arrow icon"
                />
              </NavLink>
              Edit Farmhouse
            </h2>
          </div>
          <div className="Warehouse__divider"></div>
          <div className="pagebackground__container">
            <div className="WarehouseDetails">
              <div className="Warehouse">
                <p className="Warehouse__title">Farmhouse Details</p>
              </div>
              <div className="Warehouse">
                <form className="Warehouse__form">
                  <label
                    className="Warehouse__name Warehouse--label"
                    htmlFor=""
                  >
                    Farmhouse Name
                  </label>

                  <input
                    className="Warehouse__name1 Warehouse--text"
                    type="text"
                    name="warehouse_name"
                    placeholder="Warehouse Name"
                    value={warehouseData.warehouse_name}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["warehouse_name"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label className="Warehouse__address Warehouse--label">
                    Street Address
                  </label>

                  <textarea
                    className="Warehouse__address1 Warehouse--text"
                    type="text"
                    name="address"
                    placeholder="Street Address"
                    value={warehouseData.address}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["address"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label
                    className="Warehouse__city Warehouse--label"
                    htmlFor=""
                  >
                    City
                  </label>

                  <input
                    className="Warehouse__city1 Warehouse--text"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={warehouseData.city}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["city"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label
                    className="Warehouse__country Warehouse--label"
                    htmlFor=""
                  >
                    Country
                  </label>

                  <input
                    className="Warehouse__country1 Warehouse--text"
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={warehouseData.country}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["country"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />
                </form>
              </div>
            </div>
            <div className="Warehouse__divider2"></div>
            <div className="ContactDetails">
              <div className="AddContact">
                <p className="AddContact__title">Contact Details</p>
              </div>
              <div className="Contact">
                <form className="Warehouse__form">
                  <label className="Contact__name Warehouse--label">
                    Contact Name
                  </label>

                  <input
                    className="Contact__name1 Warehouse--text"
                    type="text"
                    name="contact_name"
                    placeholder="Contact Name"
                    value={warehouseData.contact_name}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["contact_name"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label className="Contact__position Warehouse--label">
                    Position
                  </label>

                  <textarea
                    className="Contact__position1 Warehouse--text"
                    type="text"
                    name="contact_position"
                    placeholder="Position"
                    value={warehouseData.contact_position}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["contact_position"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label
                    className="Contact__phonenumber Warehouse--label"
                    htmlFor=""
                  >
                    Phone Number
                  </label>

                  <input
                    className="Contact__phonenumber1 Warehouse--text"
                    type="text"
                    name="contact_phone"
                    placeholder="Phone Number"
                    value={warehouseData.contact_phone}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["contact_phone"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />

                  <label className="Contact__email Warehouse--label" htmlFor="">
                    Email
                  </label>

                  <input
                    className="Contact__email1 Warehouse--text"
                    type="text"
                    name="contact_email"
                    placeholder="Email"
                    value={warehouseData.contact_email}
                    onChange={(e) => {
                      const updatedWarehouseData = { ...warehouseData };
                      updatedWarehouseData["contact_email"] = e.target.value;
                      setWarehouseData(updatedWarehouseData);
                    }}
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="addwarehouse">
            <Link
              to={"/warehouses/"}
              className="addwarehouse__cancel addwarehouse--button"
              type="submit"
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
export default EditWarehousePage;
