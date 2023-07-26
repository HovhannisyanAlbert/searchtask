import React from "react";
import { nextPage, prevPage } from "../../store/feautures/searchSlice"
import { useDispatch, useSelector } from "react-redux";
import styles from "./Pagination.module.css"

const PageiNation = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.search);
  const handleNextPage = () => {
    dispatch(nextPage());
  };
  const handlePrevPage = () => {
    dispatch(prevPage());
  };
  return (
    <div className={styles.pagination}>
      <button
        onClick={handlePrevPage}
        className={styles.prevBtn}
        disabled={count > 1 ? false : true}
      >
        Назад
      </button>
      <div className={styles.numbersPage}>
        <span
          className={count === 1 ? styles.colorPageActive : styles.colorPage}
        >
          1
        </span>
        <span
          className={count === 2 ? styles.colorPageActive : styles.colorPage}
        >
          2
        </span>
        <span
          className={count === 3 ? styles.colorPageActive : styles.colorPage}
        >
          3
        </span>
        <span
          className={count === 4 ? styles.colorPageActive : styles.colorPage}
        >
          4
        </span>
        <span
          className={count === 5 ? styles.colorPageActive : styles.colorPage}
        >
          5
        </span>
        <span
          className={count === 6 ? styles.colorPageActive : styles.colorPage}
        >
          6
        </span>
        <span
          className={count === 7 ? styles.colorPageActive : styles.colorPage}
        >
          7
        </span>
        <span
          className={count === 8 ? styles.colorPageActive : styles.colorPage}
        >
          8
        </span>
        <span
          className={count === 9 ? styles.colorPageActive : styles.colorPage}
        >
          9
        </span>
        <span
          className={count === 10 ? styles.colorPageActive : styles.colorPage}
        >
          10
        </span>
      </div>

      <button
        onClick={handleNextPage}
        disabled={count >= 10 ? true : false}
        className={styles.nextBtn}
      >
      
        Далее
      </button>
    </div>
  );
};

export default PageiNation;
