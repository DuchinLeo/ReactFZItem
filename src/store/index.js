import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// 拿到所有小仓库的数据
import * as reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// 创建一个仓库的实例，把所有小仓库的数据，挂载到这个实例上面，然后在项目入口index.js里面使用
export default createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunk))
);
