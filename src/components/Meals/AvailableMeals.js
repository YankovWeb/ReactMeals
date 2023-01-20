import {useEffect, useState} from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  const url =
    "https://reactmeals-5e619-default-rtdb.europe-west1.firebasedatabase.app/meals.jso";
  useEffect(() => {
    const fetchMeals = async () => {
      const respons = await fetch(url);
      if (!respons.ok) {
        throw new Error("Something went wrong!");
      }
      const responsData = await respons.json();

      const loadedMeals = [];

      for (const key in responsData) {
        loadedMeals.push({
          id: key,
          name: responsData[key].name,
          description: responsData[key].description,
          price: responsData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error);
    });
  }, []);
  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>Http Error</p>
      </section>
    );
  }
  if (isLoading) {
    return (
      <section className={classes.MealIsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  const MelasList = meals.map((meal) => (
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
        <ul>{MelasList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
