import { MongoClient, ObjectId } from "mongodb";
import Card from "../../components/ui/Card";
import classes from "../../components/meetups/MeetupItem.module.css";
import Head from "next/head";
import { Fragment } from "react";
let DetailPage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <Card>
        <div className={classes.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
        </div>
      </Card>
    </Fragment>
  );
};
export async function getStaticPaths() {
  let client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:hDZY0p5R2SVTg0f3@cluster0.tu6uqsx.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetups");
  let meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => {
      return {
        params: { meetupId: meetup._id.toString() },
      };
    }),
  };
}
export async function getStaticProps(context) {
  let id = context.params.meetupId;
  let client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:hDZY0p5R2SVTg0f3@cluster0.tu6uqsx.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetups");
  let selectedMeetup = await meetupsCollection.findOne({ _id: ObjectId(id) });
  console.log(selectedMeetup);
  client.close();
  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
export default DetailPage;
