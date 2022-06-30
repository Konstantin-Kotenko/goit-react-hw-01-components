import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return friends.map(friend => {
    return (
      <li class="item" key={friend.id}>
        <span class="status">{friend.isOnline}</span>
        <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <p class="name">{friend.name}</p>
      </li>
    );
  });
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
  avatar: PropTypes.string,
};
