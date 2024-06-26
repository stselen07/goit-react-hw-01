import css from "./FriendList.module.css";
export default function FriendListItem({ data: { avatar, name, isOnline } }) {
  return (
    <>
      <div>
        <img src={avatar} alt="Avatar" width="48" />
        <p className={css.title}>{name}</p>
        <p className={isOnline ? css.online : css.offline}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </div>
    </>
  );
}
