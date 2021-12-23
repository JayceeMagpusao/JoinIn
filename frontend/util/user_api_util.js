export const fetchUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users',
  })
);

export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const deleteUser = userId => (
  $.ajax({
    method: 'DELETE',
    url: `api/users/${userId}`
  })
);

export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: { user: user }
  })
);

export const createUser = user => (
  $.ajax({
    method: 'POST',
    url: 'api/users',
    data: { user: user }
  })
);