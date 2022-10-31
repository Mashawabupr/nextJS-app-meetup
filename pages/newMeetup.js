import NewMeetupForm from "../components/meetups/NewMeetupForm";

let NewMeetup = () => {
  async function mettupHandler(dataMeetups) {
    console.log(dataMeetups);
    let response = await fetch("api/new-meetup", {
      method: "POST",
      body: JSON.stringify(dataMeetups),
      headers: { "Content-Type": "application/json" },
    });
    let data = await response.json();
    console.log(data);
  }
  return <NewMeetupForm onAddMeetup={mettupHandler} />;
};
export default NewMeetup;
