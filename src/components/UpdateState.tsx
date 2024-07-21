import { useState } from "react";
import Button from "./Button";

function UpdateState() {
  // object
  const [drink, setDrink] = useState({
    title: "Mojo",
    price: 20,
  });

  // nested object
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  // object of array
  const [pizza, setPizza] = useState({
    name: "Double decker chicken",
    topings: ["Spicy"],
  });

  // array
  const [tags, setTags] = useState(["Tech", "Retail"]);

  // nested object
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "Dhaka",
      zipCode: 1212,
    },
  });

  // array of object
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", isFixed: false },
    { id: 2, title: "Bug 2", isFixed: false },
  ]);

  // object of array of object
  const [cart, setCart] = useState({
    discount: 1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 25 });

    setGame({ ...game, player: { ...game.player, name: "Doe" } });

    setPizza({ ...pizza, topings: [...pizza.topings, "Garlic"] });

    // add
    setTags([...tags, "Food"]);

    // remove
    setTags(tags.filter((tag) => tag !== "Tech"));

    // update
    setTags(tags.map((tag) => (tag == "Retail" ? "Retails" : tag)));

    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 1213 },
    });

    setBugs(
      bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    );

    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id == 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  console.log(drink);
  console.log(game);
  console.log(pizza);
  console.log(tags);
  console.log(customer);
  console.log(bugs);
  console.log(cart);

  return <Button onClick={handleClick}>Button</Button>;
}

export default UpdateState;
