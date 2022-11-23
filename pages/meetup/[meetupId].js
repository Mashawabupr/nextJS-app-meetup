import Link from "next/link";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";
import { useRouter } from "next/router";
let DetailPage = (props) => {
  let router = useRouter();
  console.log(props.data);
  return (
    <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>hello</h3>
        <address>paris</address>
      </div>
    </Card>
  );
};
export default DetailPage;
