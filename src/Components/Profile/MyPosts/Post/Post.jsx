import PostCss from './Post.module.css'

function Post(props) {
  return (
    <div className={PostCss.item}>
      <img
        src="https://shutniki.club/wp-content/uploads/2020/04/spanch_bob_1_09170359.jpg"
        alt=""
      />
      <p>{props.message}</p>
      <p className={PostCss.likes}>Likes: {props.like}</p>
    </div>
  )
}

export default Post
