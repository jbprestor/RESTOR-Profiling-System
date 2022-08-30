import Card from "../card/card.component";
import "./card-list.styles.scss";

const CardList = ({persons}) => (
  <div className="card-list"  >
    {persons.map((person) => {
      return <Card person={person} key={person.id} />;
    })}
  </div>
);
export default CardList;
