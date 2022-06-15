import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUser} from './Actions/index'

class User extends Component {

componentDidMount(){
    this.props.fetchUser();
}

    render() {
        console.log(this.props.users)
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
return {users: state.userData}
}

export default connect(mapStateToProps, {fetchUser})(User);