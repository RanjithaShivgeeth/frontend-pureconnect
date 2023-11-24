import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import WarehouseListPage from "./pages/WarehouseListPage/WarehouseListPage";
import WarehouseItemPage from "./pages/WarehouseItemPage/WarehouseItemPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import InventoryListPage from "./pages/InventoryListPage/InventoryListPage";
import InventoryItemPage from "./pages/InventoryItemPage/InventoryItemPage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import HomePage from "./pages/HomePage/HomePage";
import OrbsListingPage from "./pages/OrbsListingPage/OrbsListingPage";
import UploadOrbsPage from "./pages/UploadOrbsPage/UploadOrbsPage";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <HeaderNav /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/videos/:id" element={<HomePage />} />
          <Route path="/Orbs" element={<OrbsListingPage />} />
          <Route path="/upload" element={<UploadOrbsPage />} />
          <Route path="/warehouses" element={<WarehouseListPage />} />
          <Route path="/warehouses/:id" element={<WarehouseItemPage />} />
          <Route path="/warehouses/add" element={<AddWarehousePage />} />
          <Route path="/warehouses/edit/:id" element={<EditWarehousePage />} />
          <Route path="/inventory" element={<InventoryListPage />} />
          <Route path="/inventory/:id" element={<InventoryItemPage />} />
          <Route path="/inventory/add" element={<AddInventoryPage />} />
          <Route path="/inventory/edit/:id" element={<EditInventoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
