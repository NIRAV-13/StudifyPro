import Menu from "../Helpers/menu";

const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <main>{children}</main>
    </>
  );
};

export default Layout;
