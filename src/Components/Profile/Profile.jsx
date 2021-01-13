import MyPosts from './MyPosts/MyPosts'
import ProfileCss from './Profile.module.css'

function Profile() {
  return (
    <div className={ProfileCss.user_profile}>
      <div>
        <img
          src="https://www.meme-arsenal.com/memes/1d566c3e34a67c836c4c454f61743e19.jpg"
          className={ProfileCss.banner}
        />
      </div>

      <div className={ProfileCss.profile}>User Profile</div>

      <MyPosts />
    </div>
  )
}

export default Profile
