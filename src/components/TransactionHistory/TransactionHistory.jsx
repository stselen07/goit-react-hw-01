import TransactionHistoryCard from "./TransactionHistoryCard"
import css from "./TransactionHistory.module.css"
export default function TransactionHistory({ data }) {
    return <>
     <table className={css.table}>
        <thead className={css.tableHead}>
            <tr className={css.headText}>
                <th className={css.headItem}>Type</th>
                <th className={css.headItem}>Amount</th>
                <th className={css.headItem}>Currency</th>
            </tr>
        </thead>
        <tbody>
                    {data.map((transaction) =>( 
                        <tr  key = {transaction.id} className={css.row}>
                            <TransactionHistoryCard data={transaction} />
                        </tr>    
                    ))}
        </tbody>
    </table>
    </>
         
         
       

   
}