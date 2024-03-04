// arquivo de configuracao da store

import { configureStore } from '@reduxjs/toolkit'

import combine from './root-reducer'

export const Store = configureStore({
    reducer: combine
})