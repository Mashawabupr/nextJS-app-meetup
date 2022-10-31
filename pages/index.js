import MeetupList from "../components/meetups/MeetupList";

let dummy_list = [
  {
    id: "m1",
    image:
      "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg",
    title: "meetup",
    address: "tbilisi",
  },
  {
    id: "m2",
    image:
      "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg",
    title: "meetup2",
    address: "kiev",
  },
];
let Homepage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};
export default Homepage;
export async function getStaticProps() {
  return { props: { meetups: dummy_list } };
}
