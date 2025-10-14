import { NavLink } from "react-router";
import styles from "./Header.module.css";
import styled from "styled-components";

const OrangeLine = styled.div`
  background-color: #ee6c4d;
  height: 8px;
`;

const Header = function ({ title }) {
  return (
    <>
      <div className={styles.Header}>
        <nav>
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.inactive;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => {
              return isActive ? styles.active : styles.inactive;
            }}
          >
            About
          </NavLink>

          <h1>{title}</h1>
        </nav>
        <OrangeLine />
      </div>
      
    </>
  );
};
export default Header;
