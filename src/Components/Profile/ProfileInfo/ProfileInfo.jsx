import ProfileInfoCss from './ProfileInfo.module.css'

function ProfileInfo(props) {
    return (
        <div>
            <div>
                <img
                    src={props.src}
                    className={ProfileInfoCss.top_img}
                />
            </div>
            <div>Ava + Description</div>
        </div>
    )
}

export default ProfileInfo