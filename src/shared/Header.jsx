import { NavLink } from "react-router";
import styles from "./Header.module.css";
import styled from "styled-components";

const FairyTaleLine = styled.div`
  background-color: hsla(343, 51%, 83%, 1);
  height: 8px;
`;
const PuceLine = styled.div`
  background-color: hsla(340, 28%, 66%, 1);
  height: 8px;
`;
const MagentaHazeLine = styled.div`
  background-color: hsla(318, 34%, 48%, 1);
  height: 8px;
`;
const IndigoLine = styled.div`
  background-color: hsla(281, 86%, 28%, 1);
  height: 8px;
`;
const RussianVioletLine = styled.div`
  background-color: hsla(276, 100%, 15%, 1);
  height: 8px;
`;

const Header = function ({ title }) {
  return (
    <>
      <div className={styles.Header}>
        <nav>
          <h1>{title}</h1>
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
        </nav>

        <MagentaHazeLine />

      </div>
    </>
  );
};
export default Header;
