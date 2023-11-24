import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import "../InventoryItemPage/InventoryItemPage.scss";
import arrowIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px-white.svg";
import Footer from "../../components/footer/footer";
import { Link } from "react-router-dom";
import "./InventoryItemPage.scss";
import axios from "axios";
function InventoryItemPage() {
  const [inventoryItemData, setInventoryItemData] = useState({});
  var [parentData, setParentData] = useState({});
  const params = useParams();
  const getStatusClass = (status) => {
    return status === "Out of Stock" ? "warehouse--red" : "warehouse--green";
  };
  useEffect(() => {
    async function getInventoriesData() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/inventories/" + params.id
      );
      setInventoryItemData(data.data);
      let secondData = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses/" +
          data.data.warehouse_id
      );
      setParentData(secondData.data);
      console.log(secondData.data);
    }
    console.log("invoked from InventoryItemPage");
    getInventoriesData();
  }, [params.id]);
  return (
    <div>
      <HeaderNav />
      <div className="pagebackground">
        <div className="inventoryitem">
          <div className="inventoryitem__heading">
            <div>
              <Link
                to={"/warehouses/" + parentData.id}
                className="inventoryitem__link"
              >
                <img
                  className="inventoryitem__arrowicon"
                  src={arrowIcon}
                  alt="arrowIcon"
                />
              </Link>
              <h1 className="inventoryitem__title">
                {inventoryItemData.item_name}
              </h1>
            </div>
            <Link
              to={"/inventory/edit/" + inventoryItemData.id}
              className="inventoryitem__link"
            >
              <button className="inventoryitem__btn">
                <img
                  className="inventoryitem__editicon"
                  src={editIcon}
                  alt="arrowIcon"
                />
                <span className="inventoryitem__text">Edit</span>
              </button>
            </Link>
          </div>
          <div className="inventoryitem__divider1"></div>
          <div className="inventoryitem__container">
            <div className="inventoryitem__details1">
              <div className="inventoryitem__description">
                <span className="inventoryitem__title2">ORBS DESCRIPTION:</span>
                <p className="inventoryitem__text2">
                  {inventoryItemData.description}
                </p>
              </div>
              <div className="inventoryitem__category">
                <span className="inventoryitem__title2">CATEGORY:</span>
                <p className="inventoryitem__text2">
                  {inventoryItemData.category}
                </p>
              </div>
            </div>
            <div className="inventoryitem__divider2"></div>
            <div className="inventoryitem__details2">
              <div className="inventoryitem__flexrow">
                <div className="inventoryitem__status">
                  <span className="inventoryitem__title2">STATUS:</span>
                  <p
                    className={`inventoryitem__text2  ${getStatusClass(
                      inventoryItemData.status
                    )}`}
                  >
                    {inventoryItemData.status}
                  </p>
                </div>
                <div className="inventoryitem__quantity">
                  <span className="inventoryitem__title2">QUANTITY:</span>
                  <p className="inventoryitem__text2">
                    {inventoryItemData.quantity}
                  </p>
                </div>
              </div>
              <div className="inventoryitem__warehouse">
                <span className="inventoryitem__title2">FARMHOUSE:</span>
                <p className="inventoryitem__text2">
                  {parentData.warehouse_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default InventoryItemPage;
