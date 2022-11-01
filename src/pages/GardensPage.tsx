import { Route, Routes } from "react-router-dom";
import { RolesEnum } from "../api/roles/enum";
import AuthorizedRoute from "../components/AuthorizedRoute/AuthorizedRoute";
import GardenDetail from "../components/Gardens/GardenDetail";
import GardensList from "../components/Gardens/GardensList";
import { URLs } from "../config/enums";

const GardensPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path={URLs.ROOT}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            {/* <GardensGrid /> */}
            <GardensList />
          </AuthorizedRoute>
        }
      />

      <Route
        path={URLs.NEW}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <GardenDetail />
          </AuthorizedRoute>
        }
      />

      <Route
        path={URLs.DETAIL}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <GardenDetail />
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
};

export default GardensPage;
