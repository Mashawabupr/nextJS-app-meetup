import MeetupList from "../components/meetups/MeetupList";

let dummy_list = [
  {
    id: "i1",
    image:
      "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg",
    title: "meetup",
    address: "tbilisi",
  },
  {
    id: "i2",
    image:
      "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg",
    title: "meetup2",
    address: "kiev",
  },
];
let Homepage = () => {
  return <MeetupList meetups={dummy_list} />;
};
export default Homepage;
