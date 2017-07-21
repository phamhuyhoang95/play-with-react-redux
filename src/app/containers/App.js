import React from "react";

import { User } from '../components/User';
import { Main } from '../components/Main';
import {connect} from 'react-redux'
import {setName} from '../Actions/userActions'
class App extends React.Component {
    constructor() {
        super();
    }

    changeUsername(newName) {
    }

    render() {
        return (
            <div className="container">
                <Main changeUsername={() => this.props.setName("Bich Dao")} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setName:  (name) => {
            dispatch(setName(name))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)