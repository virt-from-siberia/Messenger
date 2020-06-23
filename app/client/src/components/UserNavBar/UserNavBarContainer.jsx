//external
import React from "react";
import { connect } from "react-redux";

//internal
import userActions from "@/store/Registration/actions";
import UserNavBar from "./UserNavBar";

const UserNavBarContainer = ({
    isLoading,
    actionUserRegistration,
    successRegistration,
    showNotify,
}) => {
    return (
        <UserNavBar
            isLoading={isLoading}
            successRegistration={successRegistration}
            actionUserRegistration={actionUserRegistration}
            showNotify={showNotify}
        />
    );
};

const mapStateToProps = (state) => {
    return {
        isLoading: state.registration.isLoading,
    };
};

const mapDispatchToProps = {
    ...registrationActions,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserNavBarContainer);
