import React, { useState, useEffect } from "react";
import rightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete.svg";
import Modal from "../../components/modal/modal";
import { Link } from "react-router-dom";
import axios from "axios";

function WarehouseList({ sortOrder, sortColumn }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [warehousesData, setWarehousesData] = useState([]);

  useEffect(() => {
    async function getWarehouses() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses"
      );
      setWarehousesData(data.data);
    }
    getWarehouses();
  }, []);

  const openModal = (warehouse) => {
    setSelectedItem({
      itemName: warehouse.warehouse_name,
      type: "Warehouse",
      warehouse_id: warehouse.id,
    });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleDelete = async () => {
    if (selectedItem) {
      await axios.delete(
        "https://instock-team-2-api.fly.dev/warehouses/" +
          selectedItem.warehouse_id
      );

      const updatedWarehouses = warehousesData.filter((warehouse) => {
        return warehouse.id !== selectedItem.warehouse_id;
      });

      setWarehousesData(updatedWarehouses);
    }
    setModalOpen(false);
  };

  const sortArray = warehousesData.slice().sort((a, b) => {
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    const compareResult =
      typeof valueA === "string"
        ? valueA.localeCompare(valueB)
        : valueA - valueB;

    return sortOrder === "asc" ? compareResult : -compareResult;
  });

  return (
    <>
      <ul className="warehouse__list">
        {sortArray.map((warehouse, index) => (
          <li className="warehouse__listoptions" key={index}>
            <div className="warehouse__listoptionswrap">
              <div className="warehouse__mobileleft">
                <div className="warehouse__namegroup">
                  <div className="warehouse__listtitle">FARMHOUSE</div>
                  <div className="warehouse__nameoption">
                    <Link
                      className="warehouse__hyperlink"
                      to={"/warehouses/" + warehouse.id}
                    >
                      {warehouse.warehouse_name}
                    </Link>
                    <img
                      src={rightIcon}
                      className="warehouse__righticon"
                      alt="right icon"
                    />
                  </div>
                </div>
                <div className="warehouse__addressgroup">
                  <div className="warehouse__listtitle">ADDRESS</div>
                  <div className="warehouse__addressoption">
                    {warehouse.address}
                  </div>
                </div>
              </div>

              <div className="warehouse__mobileright">
                <div className="warehouse__contactnamegroup">
                  <div className="warehouse__listtitle">CONTACT NAME</div>
                  <div className="warehouse__contactnameoption">
                    {warehouse.contact_name}
                  </div>
                </div>
                <div className="warehouse__contactinfogroup">
                  <div className="warehouse__listtitle">
                    CONTACT INFORMATION
                  </div>
                  <div className="warehouse__contactinfooption">
                    {warehouse.contact_phone}{" "}
                    <div> {warehouse.contact_email}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="warehouse__listicons">
              <button
                onClick={() => openModal(warehouse)}
                className="warehouse__button"
              >
                <img
                  src={deleteIcon}
                  alt="delete icon"
                  className="warehouse__deleteicon"
                ></img>
              </button>
              <Link
                className="warehouse__button"
                to={"/warehouses/edit/" + warehouse.id}
              >
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="warehouse__editicon"
                ></img>
              </Link>
            </div>
          </li>
        ))}
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

export default WarehouseList;
