import React, {Component} from 'react'
import {withFirebase} from '../Firebase'

class AdminPage extends Component {
    // constructor(props) {
    //     super(props);
        
    //     this.state = {
    //         loading: false,
    //         users: [],
    //     }
    // }

    // componentDidMount() {
    //     this.setState({ loading: true });
        
    //     this.props.firebase.users().on('value', snapshot => {
    //         const userObject = snapshot.val();

    //         const usersList = Object.keys(userObject).map(key => ({
    //             ...userObject[key],
    //             uid: key,
    //         }));

    //         this.setState({
    //             users: usersList,
    //             loading: false,
    //         });
    //     });
    // }

    // componentWillUnmount() {
    //     this.props.firebase.users().off();
    // }

    render(){
        // const {users, loading} = this.state;

        return (
            <div>
                <h1>Admin</h1>
                <a href="https://console.firebase.google.com/u/0/project/my-project-90e16/authentication/users" target="_blank" rel="noopener noreferrer">authentication</a> 

                {/* {loading && <div>Loading ...</div>}
                <UserList users={users} /> */}
            </div>
        );
    }
}

// const UserList = ({ users }) => (
//     <ul>
//         {users.map(user => (
//             <li key={user.uid}>
//                 <span>
//                     <strong>ID:</strong> {user.id}
//                 </span>
//                 <span>
//                     <strong>Email:</strong> {user.email}
//                 </span>
//                 <span>
//                     <strong>Username: </strong> {user.username}
//                 </span>

//             </li>
//         ))}
//     </ul>
// );

export default withFirebase(AdminPage)
