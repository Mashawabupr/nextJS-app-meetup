import MeetupDetails from "../../components/meetups/MeetupDetails";

let MeetupId = () => {
  return (
    <MeetupDetails
      image={
        "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg"
      }
      id="i1"
      title={"mettup1"}
      description={"bts"}
      adress={"tbilisi"}
    />
  );
};
export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(c) {
  let id = c.params.meetupId;
  console.log(id);
  return {
    props: {
      meetupData: {
        image:
          "https://static01.nyt.com/images/2022/06/16/arts/14bts-1/14bts-1-mediumSquareAt3X.jpg",
        title: "mettup1",
        id,
        description: "bts",
        adress: "tbilisi",
      },
    },
  };
}
export default MeetupId;
