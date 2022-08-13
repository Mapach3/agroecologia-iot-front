import { Route, Routes } from "react-router-dom";
import { RolesEnum } from "../api/roles/enum";
import AuthorizedRoute from "../components/AuthorizedRoute/AuthorizedRoute";
import { URLs } from "../config/enums";

const GardensPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path={URLs.ROOT}
        element={
          <AuthorizedRoute roles={[RolesEnum.ADMIN]}>
            <span>Grilla de Huertas</span>
          </AuthorizedRoute>
        }
      />

      <Route
        path={URLs.NEW}
        element={
          <AuthorizedRoute roles={[RolesEnum.GARDEN_MANAGER]}>
            <span>TEST: Ruta solamente visible para GARDEN_MANAGER</span>
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
};

export default GardensPage;
