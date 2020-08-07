import React from 'react';
import {FirebaseContext} from '../Firebase';
import {withAuthorization} from '../Session';

const HomePage = () => {
    return (
        <div>
            <FirebaseContext.Consumer>
                {firebase => {
                    return <div>I've access to Firebase and render something.</div>;
                }}
            </FirebaseContext.Consumer>
            <hr/>
            <p>** How to capture username and display on here? **</p>
            <p>The Home Page is accessible by every signed in user.</p>    

        </div>
    );
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
