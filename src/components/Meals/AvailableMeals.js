import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./Mealsitem/MealsItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 23,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 13,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 19,
  },
];

const AvailableMeals = (props) => {
  const mealslist = DUMMY_MEALS.map((contents) => (
    <MealsItem
      id={contents.id}
      key={contents.id}
      name={contents.name}
      description={contents.description}
      price={contents.price}
    ></MealsItem>
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealslist}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
