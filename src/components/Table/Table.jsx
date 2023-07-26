import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bottom from "../../images/bottom.svg";
import styles from "./Table.module.css";
import TableDate from "../TableDate";
import PageiNation from "../Pagination"
import { firstDate, sortDate } from "../../store/feautures/searchSlice"

const Table = () => {
  const { pageDate, date } = useSelector((state) => state.search);

  const dispatch = useDispatch();
  useEffect(() => {
    if (date.length > 1) {
      dispatch(firstDate());
    }
  }, [date]);

  const handleSort = () => {
    dispatch(sortDate());
  };

  return (
    <div className={styles.table}>
      <div className={styles.tableContainer}>
        <div className={styles.tableTitle}>
          <div className={styles.tableId}>
            <span> ID </span>
            <img src={bottom} alt="bottom" />
          </div>

          <div className={styles.tableId}>
            <span> Заголовок </span>

            <img
              src={bottom}
              alt="bottom"
              onClick={handleSort}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <div className={styles.tableId}>
          <span> Описание </span>

          <img src={bottom} alt="bottom" />
        </div>
      </div>
      <table>
        <tbody className={styles.tableDate}>
          {pageDate.map((elem) => (
            <TableDate
              key={elem.id}
              id={elem.id}
              title={elem.title}
              body={elem.body}
            />
          ))}
        </tbody>
      </table>

      <PageiNation />
    </div>
  );
};

export default Table;
