/* eslint-disable no-unused-vars */

import styles from "./netflix.module.css";
import style from "style-components";

export const SeriesCard = ({data})=>{
  //console.log(props);
  const {img_url,name,rating,description,cast,genre,watch_url} = data;
  //console.log(data);
  const ratingClass = rating>=8.5?styles.super_hit:styles.average;
    return (
        <li className={styles.card}>
        <div>
            <img src={img_url} alt="qot.jpg" height="40%" width='40%' />
          </div>
          <div className={styles["card-content"]}>
          <h2>Name: {name} </h2>
          <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
          <p className="text-3xl font-bold underline">summary:{description}</p>
          <p>Genre: {genre.join(",")}</p>
          <p>Cast: {cast.join(",")}</p>
          <a href={watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
          </div>

        </li>

    );
};

