//external
import React from "react";
import { Switch, Route } from "react-router-dom";
// import PropTypes from "prop-types";
//material
//internal
import UserWorkers from "@/components/UserWorkers/UserWorkers";
import UserTechnics from "@/components/UserTechnics/UserTechnics";
import UserMap from "@/components/UserMap/UserMap";
import UserFields from "@/components/UserFields/UserFields";
import "./UserFrame.scss";

const UserFrame = () => {
    return (
        <div className='frame'>
            <Switch>
                <>
                    <div className='frame__sidebar'>
                        <Route exact path='/user/map' component={UserMap} />
                        <Route
                            exact
                            path='/user/fields'
                            component={UserFields}
                        />
                        <Route
                            exact
                            path='/user/workers'
                            component={UserWorkers}
                        />
                        <Route
                            exact
                            path='/user/technics'
                            component={UserTechnics}
                        />
                    </div>
                </>
            </Switch>
            <div className='frame__body'>
                <div className='frame__body-map'></div>
            </div>
        </div>
    );
};

export default UserFrame;
