import { Component } from "react";

import Card from '../card/card.component'
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { persons } = this.props;

    return (
      <div className="card-list">
        {persons.map((person) => {
          return <Card person={person} />;
        })}
      </div>
    );
  }
}

export default CardList;
