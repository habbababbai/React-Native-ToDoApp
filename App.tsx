import React from 'react';
import { Provider } from 'react-redux';
import { store, persistedStore } from './src/store';
import Main from './src/Main';
import { PersistGate } from 'redux-persist/es/integration/react'

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                <Main />
            </PersistGate>
        </Provider>
    );
}
