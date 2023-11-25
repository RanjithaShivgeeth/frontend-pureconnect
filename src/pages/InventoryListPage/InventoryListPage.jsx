import React, { useState, useEffect } from "react";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import InventoryList from "../../components/InventoryList/InventoryList";
import "../InventoryListPage/InventoryListPage.scss";
import Footer from "../../components/footer/footer";
import searchIcon from "../../assets/Icons/search-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function InventoryListPage() {
  const [inventoriesData, setInventoriesData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColumn, setSortColumn] = useState("item_name");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    async function getInventoriesData() {
      const data = await axios.get("http://localhost:8080/products");
      const sortedData = data.data.slice().sort((a, b) => {
        const valueA = a[sortColumn];
        const valueB = b[sortColumn];

        const compareResult =
          typeof valueA === "string"
            ? valueA.localeCompare(valueB)
            : valueA - valueB;

        return sortOrder === "asc" ? compareResult : -compareResult;
      });

      setInventoriesData(sortedData);
    }
    getInventoriesData();
  }, [sortOrder, sortColumn]);

  return (
    <>
      <div className="backgroundcolor">
        <HeaderNav />
        <div className="pagebackground">
          <div className="warehousetop">
            <div className="warehousetop__title">OrganicOrbs</div>
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
              <Link to={"/inventory/add"} className="warehousetop__addbutton">
                + Add New Orbs
              </Link>
            </div>
          </div>
          <div className="warehouse__desktoptitle">
            <div className="warehouse__desktoptitlewrap">
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("item_name")}
              >
                ORGANIC ORBS
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("category")}
              >
                CATEGORY
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("status")}
              >
                STATUS
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>

              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("quantity")}
              >
                QTY
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
              <div
                className="warehouse__desktoptitleoption"
                onClick={() => handleSort("warehouse")}
              >
                FARMHOUSE
                <img
                  src={sortIcon}
                  className="warehouse__sorticon"
                  alt="sort icon"
                />
              </div>
            </div>
            <div className="warehouse__desktoptitleoption">ACTIONS</div>
          </div>
          <InventoryList
            inventoriesData={inventoriesData}
            setInventoriesData={setInventoriesData}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default InventoryListPage;
