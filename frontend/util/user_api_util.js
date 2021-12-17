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
)