import Head from "next/head";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
let MeetupPage = () => {
  async function handleMeetUpForm(data) {
    await fetch("/api/meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" },
    });
  }
  return (
    <Fragment>
      <Head>
        <title>Add a new meetup</title>
        <meta name="description" content="Form for adding a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={handleMeetUpForm} />
    </Fragment>
  );
};
export default MeetupPage;
