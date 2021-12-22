import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users,
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user,
});

export const removeUser = userId => ({
  type: REMOVE_USER,
  userId,
})

export const fetchUsers = () => dispatch => (
  UserAPIUtil.fetchUsers().then(users => (
    dispatch(receiveUsers(users))
  ))
);

export const fetchUser = id => dispatch => (
  UserAPIUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const createUser = user => dispatch => (
  UserAPIUtil.createUser(user).then(createdUser => (
    dispatch(receiveUser(createdUser))
    ))
);

export const deleteUser = userId => dispatch => (
  UserAPIUtil.deleteUser(userId)
    .then(() => dispatch(removeUser(userId)))
);

export const updateUser = user => dispatch => (
  UserAPIUtil.updateUser(user)
    .then(updatedUser => dispatch(receiveUser(updatedUser)
  ))
);