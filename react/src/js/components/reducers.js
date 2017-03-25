import { combineReducers } from 'redux';
import feed from './feed/reducers';

const combinedReducers = combineReducers({
    feed
});

export default combinedReducers;
