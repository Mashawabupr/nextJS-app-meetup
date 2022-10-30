import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useRouter } from "next/router";
function MeetupItem(props) {
  let router = useRouter();

  let handleButton = () => {
    router.push("/" + props.id);
  };
  return (
    <li className={classes.item} key={props.id}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={handleButton}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
