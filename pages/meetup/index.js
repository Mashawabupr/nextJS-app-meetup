import Link from "next/link";
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
    <div>
      <h1>MeetupPage</h1>
      <NewMeetupForm onAddMeetup={handleMeetUpForm} />
      <Link href="/">homepage</Link>
    </div>
  );
};
export default MeetupPage;
