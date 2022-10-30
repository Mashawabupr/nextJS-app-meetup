import classes from "./MeetupDetails.module.css";
let MeetupDetails = (props) => {
  return (
    <div className={classes.meetup}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <adress>{props.adress}</adress>
      <p>{props.description}</p>
    </div>
  );
};
export default MeetupDetails;
