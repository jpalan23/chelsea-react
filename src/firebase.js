import * as firebase from 'firebase';

const config={
    apiKey: "AIzaSyArws0dRMgN01yu0TzDqrNV4JFsU8DGebc",
    authDomain: "chesea-react-app.firebaseapp.com",
    databaseURL: "https://chesea-react-app.firebaseio.com",
    projectId: "chesea-react-app",
    storageBucket: "chesea-react-app.appspot.com",
    messagingSenderId: "568810625326"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles=firebaseDB.ref('articles');
const firebaseTeams=firebaseDB.ref('teams');
const firebaseVideos=firebaseDB.ref('videos');

const firebaseLooper=(snapshot)=>{
    const data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export{
    firebase,
    firebaseLooper,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos
}