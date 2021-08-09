export const fetchPosts = () => (
  $.ajax({
    method: 'GET',
    url: 'api/posts',
  })
);

export const fetchPost = id => (
  $.ajax({
    method: 'GET',
    url: `api/posts/${id}`
  })
);

export const createPost = post => (
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: { post: post }
  })
);

export const updatePost = (id, post) => (
  $.ajax({
    method: 'PATCH',
    url: `api/posts/${id}`,
    data: { post: post }
  })
)

export const deletePost = postId => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${postId}`
  })
)