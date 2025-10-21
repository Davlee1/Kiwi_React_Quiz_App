import styles from "./About.module.css";
const About = function () {
  return (
    <>
      <p className={styles.about}>
        &nbsp;&nbsp;&nbsp;&nbsp;Hello! This is a quiz app made using react for
        the ctd Kiwi react course. To start, first Create a quiz using the
        header link. Quizes are saved using local storage. After creating your
        quiz, it will be shown on the home page. All saved Quizes will be shown
        there to be selected and taken.
      </p>
      <p>Dependancies used:</p>
      <ul className={styles.list}>
        <li>react-router</li>
        <li>Babel plugin for styled components</li>
        
      </ul>
    </>
  );
};
export default About;
