import React from 'react';
import styles from '../articles.css';


const teamNfo = (props) => (
    <div className={styles.articleTeamHeader}>
        <div className={styles.left}
            style={{
                background:`url('/images/teams/${props.team.logo}')`
            }}
        >
        </div>
        <div className={styles.right}>
            <div>
                <span> {props.team.name}</span>
            </div>
            <div>
                <strong>
                P{props.team.stats[0].points} -W{props.team.stats[0].wins} -L{props.team.stats[0].defeats} -D{props.team.stats[0].draws}                </strong>
            </div>
        </div>
    </div>
)

export default teamNfo;



