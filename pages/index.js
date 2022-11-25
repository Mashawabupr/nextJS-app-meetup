import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import { Fragment } from "react";
let HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React-NextJs meetups</title>
        <meta name="description" content="First project with Nextjs" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};
export async function getStaticProps() {
  let client = await MongoClient.connect(
    `mongodb+srv://marikanik1999:hDZY0p5R2SVTg0f3@cluster0.tu6uqsx.mongodb.net/meetup?retryWrites=true&w=majority`
  );
  let db = client.db();
  let meetupsCollection = db.collection("meetups");
  let data = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: data.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      })),
    },
    //re-generate a page  every 10 sec
    revalidate: 1,
  };
}
export default HomePage;
