import DialogItemsCss from './DialogItems.module.css'
import DialogItem from './DialogItem/DialogItem'

function Message(props) {
    return (
        <div className={DialogItemsCss.message}>
            {props.message}
        </div>
    )
}

function DialogItems(props) {
    return (
        <div className={DialogItemsCss.dialogs}>
            <div className={DialogItemsCss.dialogs_items}>
                <DialogItem id='1' username='Dimych' />
                <DialogItem id='2' username='Nikolas' />
                <DialogItem id='3' username='Mishulio' />
                <DialogItem id='4' username='Sergo' />
                <DialogItem id='5' username='Alex' />
            </div>
            <div className={DialogItemsCss.messages}>
                <Message message='Hello all, i want to buy car' />
                <Message message='Heyyy' />
                <Message message='Are your hear me??' />
            </div>
        </div>
    )
}

export default DialogItems