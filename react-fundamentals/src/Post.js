import { shape } from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
      <article>
        <strong>
          {props.post.read ? <s>{props.post.title}</s> : props.post.title}
        </strong>
        <button onClick={() => props.onRemove(props.post.id)}>Remove</button>
        <br />
        <small>{props.post.subtitle}</small><br />
        <small>likes: {props.post.likes}</small>
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    read: PropTypes.bool,
  }).isRequired,
}