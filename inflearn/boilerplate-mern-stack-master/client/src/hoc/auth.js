import React, { useEffect } from 'react'
import { auth } from '../_actions/user_actions'
import { useSelector, useDispatch } from "react-redux"

// adminRoute에 값이 들어오면 admin만 가능

// option(null, true, false)
// null =>. 아무나 출입 가능
// true => 로그인 유저만 출입 가능
// false => 로그인한 유저는 출입 불가능
export default function (SpecificComponent, option, adminRoute = null) {
    // back-end에 request
    function AuthenticationCheck(props) {
        let user = useSelector(state => state.user);
        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(auth()).then(response => {
                // 로그인 하지 않은 상태
                if (!response.payload.isAuth) {
                    if (option) {
                        props.history.push('/login')
                    }
                } else {
                    // 로그인한 상태
                    if (adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    }
                    else {
                        if (option === false) {
                            props.history.push('/')
                        }
                    }
                }
            })

        }, [])

        return (
            <SpecificComponent {...props} user={user} />
        )
    }
    return AuthenticationCheck
}


