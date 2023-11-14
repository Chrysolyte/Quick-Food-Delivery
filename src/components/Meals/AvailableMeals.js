import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "CHICKEN BRIYANI",
    description: "The Classic Briyani",
    price: 100,
  },
  {
    id: "m2",
    name: "CHICKEN RICE",
    description: "Special crispy chicken.",
    price: 120,
  },
  {
    id: "m3",
    name: "CHICKEN NOODLES",
    description: "Tasty, raw, meaty",
    price: 110,
  },
  {
    id: "m4",
    name: "GOBI MANCHURIAN",
    description: "Delicious...and ...yummy",
    price: 130,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
