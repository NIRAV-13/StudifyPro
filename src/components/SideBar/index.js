/**
 * @author ${abhishekuppe}
 */

import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

function SideBar() {
  return (
    <ProSidebar breakPoint="md">
      <SidebarContent>
        <Menu>
          <MenuItem>
            {" "}
            <Link to={routes.home.path}>HomePage</Link>
          </MenuItem>
          <SubMenu title={"User Management"}>
            <MenuItem>
              {" "}
              <Link to={routes.login.path}>Login</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.register.path}>Register</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.forgotPassword.path}>Magic Link</Link>
            </MenuItem>
            <MenuItem>
              <Link to={routes.passwordChanged.path}>Change Password</Link>
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
    </ProSidebar>
  );
}

export { SideBar };
