import React, { useState } from "react";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import "../WarehouseListPage/WarehouseListPage.scss";
import Footer from "../../components/footer/footer";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";

function WarehouseListPage() {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("warehouse_name");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  return (
    <>
      <div className="backgroundcolor">
        <HeaderNav />
        <div className="pagebackground">
          <div className="warehousetop">
            <div className="warehousetop__title">Farmhouses</div>
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
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("warehouse_name")}
              >
                FARMHOUSE
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("address")}
              >
                ADDRESS
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("contact_name")}
              >
                CONTACT NAME
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("contact_information")}
              >
                CONTACT INFORMATION
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
            </div>
            <div className="warehouse__desktoptitleoption">ACTIONS</div>
          </div>
          <WarehouseList sortOrder={sortOrder} sortColumn={sortColumn} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default WarehouseListPage;
