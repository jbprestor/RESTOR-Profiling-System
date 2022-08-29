import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({persons}) => (
  <div className="card-list"  >
    {persons.map((person) => {
      return <Card person={person} key={person.id} />;
    })}
  </div>
);
export default CardList;
