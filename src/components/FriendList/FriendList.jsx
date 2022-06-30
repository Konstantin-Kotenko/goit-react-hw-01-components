import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};
