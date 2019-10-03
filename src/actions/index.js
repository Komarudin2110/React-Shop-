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
                let { id, username, password } = res.data[0]
                localStorage.setItem('userData', JSON.stringify({ id, username, password }))
                dispatch(
                    {
                        type: 'LOGIN_SUCCESS',
                        payload: {
                            id: id,
                            username: username,
                            password: password
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
    localStorage.removeItem('userData')
    return {
        type: 'LOGOUT_SUCCESS'
    }
}

// Agar Tetap Login
export const keepLogin = (userData) => {
    return {
        type: 'LOGIN_SUCCESS',
        payload: {
            id: userData.id,
            username: userData.username
        }
    }
}