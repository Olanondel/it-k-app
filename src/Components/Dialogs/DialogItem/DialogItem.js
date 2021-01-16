import DialogItemCss from './DialogItem.module.css'
import {NavLink} from 'react-router-dom'


function DialogItem(props) {
    return (
        <div className={DialogItemCss.dialog}>
            <NavLink activeClassName={DialogItemCss.active}
                     to={'/dialogs/' + props.id}>{props.username}</NavLink>
        </div>
    )
}

export default DialogItem