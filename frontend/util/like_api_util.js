export const fetchLikes = () => (
  $.ajax({
    method: 'GET',
    url: 'api/likes',
  })
);

export const fetchLike = id => (
  $.ajax({
    method: 'GET',
    url: `api/likes/${id}`
  })
);

export const createLike = like => (
  $.ajax({
    method: 'POST',
    url: 'api/likes',
    data: { like: like }
  })
);

export const deleteLike = likeId => (
  $.ajax({
    method: 'DELETE',
    url: `api/likes/${likeId}`
  })
)