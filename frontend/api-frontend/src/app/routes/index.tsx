import {
  BrowserRouter,
  Route,
  Navigate,
  Routes as Switch,
} from "react-router-dom";
import { Home } from "../pages/home/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};
