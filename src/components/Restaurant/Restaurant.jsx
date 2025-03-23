import { Recipies } from "./Recipies/Recipies"

import style from "./Restaurant.module.scss";

export const Restaurant = () => {
    return <section className={style.restaurant}>
        <h1 className={style.restaurant__title}>Recipies from our restaurant</h1>
        <Recipies />
    </section>
}