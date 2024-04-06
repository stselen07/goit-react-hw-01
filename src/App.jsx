import './App.css';
import userData from "./userData.json";
import friends from "./friends.json";
import transaction from "./transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList"
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    
    <>
      < Profile data={userData} />
      <FriendList data={friends} />
      <TransactionHistory data ={transaction} />
    </>
  )
}
