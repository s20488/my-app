import React from "react";
import axios from "axios";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/800`).then(response => {
            this.props.setUserProfile(response.data);
        });
    };

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.profile
    }
}

export default ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainer);