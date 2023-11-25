import React, { useState, useEffect } from "react";
import rightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete.svg";
import Modal from "../../components/modal/modal";
import { Link } from "react-router-dom";
import axios from "axios";
import "../InventoryList/InventoryList.scss";

function InventoryList({ inventoriesData, setInventoriesData }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [warehouseNames, setWarehouseNames] = useState({});

  // useEffect(() => {
  //   // Fetch warehouse details-- for dynamically displaying warehousename
  //   async function getWarehouseNames() {
  //     try {
  //       const warehouseDetails = await axios.get(
  //         "https://instock-team-2-api.fly.dev/warehouses"
  //       );
  //       const warehouseNameMap = {};
  //       warehouseDetails.data.forEach((warehouse) => {
  //         warehouseNameMap[warehouse.id] = warehouse.warehouse_name;
  //       });
  //       setWarehouseNames(warehouseNameMap);
  //     } catch (error) {
  //       console.error("Error fetching warehouse details:", error);
  //     }
  //   }

  //   getWarehouseNames();
  // }, []);

  const getStatusClass = (status) => {
    return status === "Out of Stock" ? "warehouse--red" : "warehouse--green";
  };

  const openModal = (inventoryItem) => {
    setSelectedItem({
      itemName: inventoryItem.item_name,
      type: "Inventory Item",
      id: inventoryItem.id,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedItem) {
      try {
        await axios.delete("http://localhost:8080/products" + selectedItem.id);
        const updatedItems = inventoriesData.filter((inventoryItem) => {
          return inventoryItem.id !== selectedItem.id;
        });

        setInventoriesData(updatedItems);
      } catch (error) {
        console.error("Error deleting inventory item:", error);
      }
    }
    setModalOpen(false);
  };

  return (
    <>
      <ul className="warehouse__list">
        {inventoriesData.map((inventory, index) => {
          return (
            <li className="warehouse__listoptions" key={index}>
              <div className="warehouse__listoptionswrap">
                <div className="warehouse__mobileleft">
                  <div className="warehouse__namegroup">
                    <div className="warehouse__listtitle">ORGANIC ORBS</div>
                    <div className="warehouse__nameoption">
                      <Link
                        className="warehouse__hyperlink"
                        to={"/inventory/" + inventory.id}
                      >
                        {inventory.orbs}
                        <img
                          src={rightIcon}
                          className="warehouse__righticon"
                          alt="right icon"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="warehouse__addressgroup">
                    <div className="warehouse__listtitle">CATEGORY</div>
                    <div className="warehouse__addressoption">
                      {inventory.category}
                    </div>
                  </div>
                </div>

                <div className="warehouse__mobileright">
                  <div className="warehouse__contactnamegroup">
                    <div className="warehouse__listtitle">STATUS</div>
                    <div
                      className={`warehouse__contactnameoption ${getStatusClass(
                        inventory.status
                      )}`}
                    >
                      {inventory.status}
                    </div>
                  </div>
                  <div className="warehouse__contactinfogroup">
                    <div className="warehouse__listtitle">QTY</div>
                    <div className="warehouse__contactinfooption">
                      {inventory.quantity}
                    </div>
                  </div>
                  <div className="warehouse__warehousename">
                    {warehouseNames[inventory.warehouse_id] || "N/A"}
                  </div>
                </div>
              </div>
              <div className="warehouse__listicons">
                <button
                  onClick={() => openModal(inventory)}
                  className="warehouse__button"
                >
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="warehouse__deleteicon"
                  />
                </button>
                <Link
                  className="warehouse__button"
                  to={"/inventory/edit/" + inventory.id}
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="warehouse__editicon"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
        items={selectedItem}
      />
    </>
  );
}

export default InventoryList;
