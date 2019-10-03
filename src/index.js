import React from 'react' // Import dari React
import ReactDOM from 'react-dom' // Import React DOM
import App from './components/App' // Import App dari components
import 'bootstrap/dist/css/bootstrap.min.css' // Import Bootstrap
import { createStore, applyMiddleware, compose } from 'redux' // Membuat store untuk redux
import { Provider } from 'react-redux' // Menghubungkan redux ke react
import reducers from './reducers/index' // Menghubungkan ke file reducers
import thunk from 'redux-thunk' // Menghubungkan ke redux thunk


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rduxStore = createStore(reducers, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)
));
// Membuat store Redux

ReactDOM.render(
    // Provider agar state redux bisa digunakan ke semua komponen
    <Provider store={rduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
)