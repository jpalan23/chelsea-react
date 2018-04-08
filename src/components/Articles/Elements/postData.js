import React from 'react';
import styles from '../articles.css';
import moment from 'moment';

const postData = (props) => (
    <div className={styles.articlePostData}>
        <div>
            Date:
            <span>{ moment(props.data.date).format(' MM/DD/YYYY')}</span>
        </div>
        <div>
            Author:
            <span>{props.data.author}</span>
        </div>
    </div>
) 

export default postData;