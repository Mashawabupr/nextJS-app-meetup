import Link from "next/link";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
let MeetupPage = () => {
  let handleMeetUpForm = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>MeetupPage</h1>
      <NewMeetupForm onAddMeetup={handleMeetUpForm} />
      <Link href="/">homepage</Link>
    </div>
  );
};
export default MeetupPage;
