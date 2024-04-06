import css from "./TransactionHistory.module.css"
export default function TransactionHistoryCard({data:{type, amount, currency}}) {
    return <>
           
            <td className={css.rowItem}>{type}</td>
            <td className={css.rowItem}>{amount}</td>
            <td className={css.rowItem}>{currency}</td>
        
    </>
}
