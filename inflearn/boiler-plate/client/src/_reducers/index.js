import { combineReducers } from 'redux'
import user from './user_reducer'

// redux Store에 Reducer가 여러개 존재할 수 있다.
// 변한 값에 대해서 return 해주는 것이 reducer
// 다수의 reducer를 combineReducers를 이용해서 통합 해주는 것
const rootReducer = combineReducers({
    user
})

export default rootReducer