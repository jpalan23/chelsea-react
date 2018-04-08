import React, { Component } from 'react';
import styles from './pointstable.css';
import { firebaseLooper,firebaseTeams } from '../../firebase';


class pointstable extends Component {

    state={
        teams:[]
    }

    componentWillMount(){
        if(this.state.teams.length < 1){
            firebaseTeams.orderByChild('stand').once('value')
            .then((snapshot)=>{
                const teams= firebaseLooper(snapshot);
                this.setState({
                    teams
                })
            })
        }

        // axios.get(`${URL}/teams`)
        //     .then( response => {
        //         this.setState({
        //             teams:response.data
        //         })
        //     })
    
        }
    
    renderTeam =()=>{
        let template=null;
        template=this.state.teams.map((item,i)=>(
            <div className={styles.team_cell} key={i}>
                <div className={styles.left_info}>
                <div className={styles.team_stand}>{item.stand}</div>
                    <div className={styles.team_logo}
                    style={{
                        background:`url('/images/teams/${item.logo}')`
                    }}
                    ></div>
                    <div className={styles.team_name}>{item.name}</div>
                </div>
                <div className={styles.right_info}>
                    <div className={styles.team_wins}>{item.stats[0].wins}</div>
                    <div className={styles.team_draws}>{item.stats[0].draws}</div>
                    <div className={styles.team_defeat}>{item.stats[0].defeats}</div>
                    <div className={styles.team_points}>{item.stats[0].points}</div>
                </div>
                
            </div>
        ))

        return template;
    }

    render() {
        return (
            <div>
                <div className={styles.pheader}>
                    <h3><strong>Premier League</strong> Points Table</h3>
                </div>
                <div className={styles.team_container}>
                {this.renderTeam()}
                </div>  
            </div>
        );
    }
}

export default pointstable;