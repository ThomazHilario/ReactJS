import { all, takeEvery } from 'redux-saga/effects'

function* fetchUsers(){
    console.log('Requisição')
}

export default all([
    takeEvery('user/fetchUsers', fetchUsers)
])