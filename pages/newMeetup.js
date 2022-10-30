import NewMeetupForm from "../components/meetups/NewMeetupForm";

import { useHistory } from "react";
let NewMeetup = () => {
  //let history = useHistory();
  let mettupHandler = (data) => {
    //history.push("/");
    console.log(data);
  };
  return <NewMeetupForm onAddMeetup={mettupHandler} />;
};
export default NewMeetup;
