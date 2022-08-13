import { Route, Routes } from "react-router";
import { RolesEnum } from "../api/roles/enum";
import AuthorizedRoute from "../components/AuthorizedRoute/AuthorizedRoute";
import { URLs } from "../config/enums";

const RolesPage: React.FC = () => {
  return (
    <Routes>
      <Route
        path={URLs.ROOT}
        element={
          <AuthorizedRoute roles={[RolesEnum.ADMIN]}>
            <span>Grilla de Roles</span>
          </AuthorizedRoute>
        }
      />
    </Routes>
  );
};

export default RolesPage;
