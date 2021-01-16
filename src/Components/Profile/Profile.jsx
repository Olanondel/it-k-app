import MyPosts from './MyPosts/MyPosts'
import ProfileCss from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileInfoCss from './ProfileInfo/ProfileInfo.module.css'

function Profile() {
    return (
        <div className={ProfileCss.user_profile}>

            <div className={ProfileInfoCss.profile}>
                <h4>User Profile:</h4>
                <ProfileInfo src='https://previews.123rf.com/images/uvaconcept/uvaconcept1612/uvaconcept161200345/67704034-cartoon-illustration-banner-for-holiday-theme-on-winter-background-greeting-card-for-merry-christmas.jpg' />
            </div>

            <MyPosts/>
        </div>
    )
}

export default Profile
