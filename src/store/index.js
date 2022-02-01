import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['status']
};

const reducer = persistCombineReducers(config, reducers);
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  sagaMiddleware.run(sagas);

  const persistor = persistStore(
    store,
    null,
    () => { store.getState(); }
  );
  return { persistor, store };
};

export default configureStore;
