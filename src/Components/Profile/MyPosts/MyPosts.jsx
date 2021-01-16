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
        <Post message="1st post" like="12" />
        <Post message="Another post" like="7" />
        <Post message="Go win this" like="1" />
        <Post message="Wild Rift top" like="3" />
      </div>
    </div>
  )
}

export default MyPosts
