import "./card.styles.scss";

const Card = ({ person }) => {
  const {name, email, id , } = person
  return (
    <div className="card-container" >
      <img
        alt={`person ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{`Name: ${name}`}</h2>
      <p>{`Email: ${email}`}</p>
    </div>
  );
};

export default Card;
