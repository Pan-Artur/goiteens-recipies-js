import { Recipies } from "../Recipies/Recipies"

import "./Restaurant.css";

export const Restaurant = () => {
    return <section className="restaurant">
        <h1 className="restaurantTitle">Recipies from our restaurant</h1>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora hic quo nesciunt reprehenderit delectus expedita vel molestiae nemo rem aut dolores nam accusantium, voluptatibus dolor ex ipsa possimus. Ad.</p>
        <Recipies />
    </section>
}