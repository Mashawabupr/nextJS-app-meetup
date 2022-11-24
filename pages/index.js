import Link from "next/link";
import MeetupList from "../components/meetups/MeetupList";
let HomePage = (props) => {
  return (
    <div>
      <h1>HomePage</h1>
      <MeetupList meetups={props.meetups} />
      <Link href="/meetup">meetup</Link>
    </div>
  );
};
export function getStaticProps() {
  let dummy_data = [
    {
      id: "m1",
      image:
        "https://www.pinkvilla.com/imageresize/bts_jungkook_be_cp_main_0.jpg?width=752&t=pvorg",
      title: "meetup 1",
      address: "toronto",
    },
  ];
  return {
    props: {
      meetups: dummy_data,
    },
    //re-generate a page  every 10 sec
    revalidate: 10,
  };
}
export default HomePage;
