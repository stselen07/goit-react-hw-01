import FriendListItem from "./FriendListItem";
import css from "./FriendList.module.css";
export default function FriendList({ data }) {
  return (
    <ul className={css.list}>
      {data.map((friend) => (
        <li className={css.item} key={friend.id}>
          <FriendListItem data={friend} />
        </li>
      ))}
    </ul>
  );
}
