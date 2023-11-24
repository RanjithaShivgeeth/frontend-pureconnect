import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import WarehouseItem from "../../components/WarehouseItem/WarehouseItem";
import { useState, useEffect } from "react";
import axios from "axios";
import "../WarehouseItemPage/WarehouseItemPage.scss";
import { useParams, Link } from "react-router-dom";
import Footer from "../../components/footer/footer";

function WarehouseItemPage() {
  const [warehouseData, setWarehouseData] = useState({});
  const params = useParams();

  useEffect(() => {
    async function getWarehouse() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses/" + params.id
      );
      console.log(data.data);
      setWarehouseData(data.data);
    }
    getWarehouse();
  }, []);
  return (
    <div className="backgroundcolor">
      <HeaderNav />
      <div className="pagebackground">
        <div className="warehousetop">
          <div className="warehousetop__title">
            {warehouseData.warehouse_name}
          </div>
          <div className="warehousetop__tabletright">
            <div className="warehousetop__searchbar">
              <input
                type="search"
                placeholder="Search..."
                className="warehousetop__searchinput"
              />
              <img
                src={searchIcon}
                className="warehousetop__searchicon"
                alt="search icon"
              />
            </div>
            <Link className="warehousetop__addbutton" to={"/warehouses/add"}>
              + Add New Farmhouse
            </Link>
          </div>
        </div>
        <div className="warehouse__desktoptitle">
          <div className="warehouse__desktoptitlewrap">
            <div className="warehouse__desktoptitleoption">
              ORGANIC ORBS
              <img
                src={sortIcon}
                className="warehouse__sorticon"
                alt="sort icon"
              />
            </div>
            <div className="warehouse__desktoptitleoption">
              CATEGORY
              <img
                src={sortIcon}
                className="warehouse__sorticon"
                alt="sort icon"
              />
            </div>
            <div className="warehouse__desktoptitleoption">
              STATUS
              <img
                src={sortIcon}
                className="warehouse__sorticon"
                alt="sort icon"
              />
            </div>
            <div className="warehouse__desktoptitleoption">
              QUANTITY
              <img
                src={sortIcon}
                className="warehouse__sorticon"
                alt="sort icon"
              />
            </div>
          </div>
          <div className="warehouse__desktoptitleoption">ACTIONS</div>
        </div>
        <WarehouseItem warehouseData={warehouseData} />
      </div>
      <Footer />
    </div>
  );
}

export default WarehouseItemPage;
