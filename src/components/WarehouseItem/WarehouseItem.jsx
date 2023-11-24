import "../WarehouseItem/WarehouseItem.scss";
import rightIcon from "../../assets/Icons/chevron_right-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import deleteIcon from "../../assets/Icons/delete.svg";
import Modal from "../../components/modal/modal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function WarehouseItem({ warehouseData }) {
  const params = useParams();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const [inventoryData, setInventoryData] = useState([]);

  const getStatusClass = (status) => {
    return status === "Out of Stock" ? "warehouse--red" : "warehouse--green";
  };

  useEffect(() => {
    async function getInventories() {
      const data = await axios.get(
        "https://instock-team-2-api.fly.dev/warehouses/" +
          params.id +
          "/inventories"
      );
      console.log("called Inventory Item");
      setInventoryData(data.data);
    }
    getInventories();
  }, []);

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
      axios.delete(
        "https://instock-team-2-api.fly.dev/inventories/" + selectedItem.id
      );
      const updatedItems = inventoryData.filter((inventoryItem) => {
        return inventoryItem.id !== selectedItem.id;
      });

      setInventoryData(updatedItems);
    }
    setModalOpen(false);
  };

  return (
    <>
      <ul className="warehouse__list">
        {inventoryData.map((inventory, index) => {
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
                        {inventory.item_name}
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
                    <div className="warehouse__listtitle">QUANTITY</div>
                    <div className="warehouse__contactinfooption">
                      {inventory.quantity}
                    </div>
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
                  ></img>
                </button>
                <Link
                  className="warehouse__button"
                  to={"/inventory/edit/" + inventory.id}
                >
                  <img
                    src={editIcon}
                    alt="edit icon"
                    className="warehouse__editicon"
                  ></img>
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

export default WarehouseItem;
