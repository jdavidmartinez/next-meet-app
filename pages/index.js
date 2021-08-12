import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: " A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Torre_del_Filarete_y_la_Fontana_di_Piazza_Castello.jpg/1280px-Torre_del_Filarete_y_la_Fontana_di_Piazza_Castello.jpg",
    addres: "Some address in some City",
    description: " this is a first meetup",
  },
  {
    id: "m2",
    title: " A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Altar_della_Patria_September_2015-1.jpg/1280px-Altar_della_Patria_September_2015-1.jpg",
    addres: "Some address in some City",
    description: " this is a first meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
