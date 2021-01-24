import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contacts, filter, isLoading } from './contacts/contacts-reducer';
// import  * as contacts from './contacts/contacts-reducer';
// import storage from 'redux-persist/lib/storage';
import {
  // persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

console.log(filter);

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    isLoading,
    // contacts: persistReducer(contactsPersistConfig, contacts),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

// export const persistor = persistStore(store);
