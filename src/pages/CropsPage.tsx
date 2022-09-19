import { Route, Routes } from "react-router-dom";
import { RolesEnum } from "../api/roles/enum";
import AuthorizedRoute from "../components/AuthorizedRoute/AuthorizedRoute";
import CropDetail from "../components/Crops/CropDetail";
import CropsGrid from "../components/Crops/CropsGrid";
import { URLs } from "../config/enums";

const CropsPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path={URLs.ROOT}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <CropsGrid />
          </AuthorizedRoute>
        }
      />

      <Route
        path={URLs.NEW}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <CropDetail />
          </AuthorizedRoute>
        }
      />

      <Route
        path={URLs.DETAIL}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <CropDetail />
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
};

export default CropsPage;
