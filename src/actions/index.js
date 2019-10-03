import axios from 'axios'
import Swal from 'sweetalert2'


// Action untuk Login
export const LoginAct = (nameLogin, passwordLogin) => {
    return (dispatch) => {
        axios.get(
            'http://localhost:2099/users',
            {
                params: {
                    username: nameLogin,
                    password: passwordLogin
                }
            }
        ).then((res) => {
            if (res.data.length === 0) {
                Swal.fire({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Login gagal !',
                })
            } else {
                dispatch(
                    {
                        type: 'LOGIN_SUCCESS',
                        payload: {
                            id: res.data[0].id,
                            username: res.data[0].username
                        }
                    }
                )
                Swal.fire(
                    'Login Berhasil',
                    'Welcome Back !',
                    'success'
                )
            }
        })
    }
}


// Action untuk Logout
export const LogOut = () => {
    return{
        type: 'LOGOUT_SUCCESS'
    }
}