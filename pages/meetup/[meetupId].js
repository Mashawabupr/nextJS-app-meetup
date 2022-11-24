import Link from "next/link";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";
import { useRouter } from "next/router";

let DetailPage = (props) => {
  let router = useRouter();

  return (
    <Card>
      <div className={classes.image}>
        <img src={props.meetup.image} alt={props.meetup.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.meetup.title}</h3>
        <address>{props.address}</address>
      </div>
    </Card>
  );
};
export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}
export function getStaticProps(context) {
  let id = context.params.meetupId;
  console.log(id);

  return {
    props: {
      meetup: {
        id,
        image:
          "https://www.pinkvilla.com/imageresize/bts_jungkook_be_cp_main_0.jpg?width=752&t=pvorg",
        title: "meetup 1",
        address: "toronto",
      },
    },
  };
}
export default DetailPage;
