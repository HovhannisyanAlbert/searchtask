import React from "react";
import styles from "./TableDate.module.css"

const TableDate = ({ id, title, body }) => {
  return (

     
        <tr>
          <td className={styles.tableiDDate}> {id}</td>
         <td className={styles.tableTitleText}>    {title}  </td> 
         <td className={styles.tableBody}>   {body}</td>
        </tr>
  

    
     

  );
};

export default TableDate;
