import classes from "./Film.module.css";

const Film = (props) => {
  return (
    <ul>
      <li className={classes.title}>{props.title}</li>
      <li className={classes.date}>{props.release_date}</li>
    </ul>
  );
};

export default Film;
