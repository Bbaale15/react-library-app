import types from './types';
import HttpClient from '../Services/httpClient';

const authenticateUser = payload => dispatch => {
    HttpClient.post('auth/login', null, payload).then(res => {
        if (res) {
            if (res.token) {
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    payload: res
                })
                // Show success message here.
                localStorage.setItem('token', res.token)
                localStorage.setItem('username', res.username)
            }
            // // Redirect to private area.
            // this.props.history.push('/menu');
        } else {
            dispatch({
                type: types.LOGIN_FAILS,
                payload: res
            })
            // Show error message here.
        }
    });

}

export default authenticateUser;