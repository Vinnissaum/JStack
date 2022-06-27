import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';
import styles from './Post.scss';

export default function Post(props) {
  return (
    <article className={
      props.post.removed === true ? styles.post__deleted : styles.post
    }
    >
      <PostHeader 
        onRemove={props.onRemove}
        post={{
          id: props.post.id,
          title: props.post.title,
          read: props.post.read,
        }}
      />
      <br />
      <small>{props.post.subtitle}</small><br />
      <small>likes: {props.post.likes}</small>
    </article>
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