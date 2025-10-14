import { NavLink } from "react-router";
import styles from "./NotFound.module.css";

const NotFound = function () {
  return (
    <>
      <br />
      <p>😵‍💫</p>
      <p>This page is either unavailable or doesn't exist, sorry :c</p>
      <NavLink
          to={"/"}
          className={styles.returnLink}
        >
          Go Home
        </NavLink>
    </>
  );
};
export default NotFound;
