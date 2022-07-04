import React from 'react'
import styles from  './Message.module.css';

type dataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message({...data}: dataType) {

    return (
        <div style={{backgroundColor: 'violet'}}>
            <div className={styles.message}>
                <img className={styles.message__img} src={data.avatar} alt={`foto ${data.name}`}/>
                <div className={styles.message__item}>
                    <h3 className={styles.message__name}>{data.name}</h3>
                    <p className={styles.message__text}>{data.message}</p>
                    <p className={styles.message__time}>{data.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
