import { createStore, applyMiddleware, compose} from 'redux'
// import logger from 'redux-logger'
import reducer from '../reducers'


// const middleware = [logger];
const middleware = []

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);


export default store;