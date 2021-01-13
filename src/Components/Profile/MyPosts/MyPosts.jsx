import MyPostsCss from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
  return (
    <div>
      <b>My Posts:</b>
      <div>
        <textarea
          className={MyPostsCss.post_content}
          placeholder="Начните создавать вместе с porn hub!"
        ></textarea>
        <button className={MyPostsCss.add_post}>Add post</button>
      </div>
      <div className={MyPostsCss.posts}>
        <Post message="1st post" />
        <Post message="Another post" />
        <Post message="Go win this" />
        <Post message="Wild Rift top" />
      </div>
    </div>
  )
}

export default MyPosts
