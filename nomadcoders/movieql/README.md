일반 REST의 경우 모든 정보를 과하게 주는 경우가 생긴다.
db에 내가 사용하지 않을 영역을 요청하는 방식은 부적절한다.
필요한 것만을 위해서 사용하기 좋다.
고객들이 필요한 정보만 받게 된다
over-fetching 현상
개발자 역시 어떤 정보를 어떻게 보냈는지 전부 log를 통해 확인해야한다.

frontend는 db에 오직 사용자명만 요청한다(필요한것만 요청한다)
grahpqhl은 rest의 over-fetching의 단점을 해결한다.

/users/ GET


under-fetching
/feed/ GET
/notificaions/ GET
/user/1/ GET
하나의 기능 즉(REST)를 완성하려면 3개의 API을 요청응답해야하므로 불필요하다

grahql은 이것을 해결하기위해 하나의 URL에서 모든 것을 받는다
URL체계가 사라진다
쉽게 /graphql 하나로 모든것을 제어할 수 있다
query {
    feed {
        comments
        likeNumber
    }
    notifications {
        isRead
    }
    user {
        userName
        profilePic
    }
}

javascript
{
    feed: [
        {
            comment: 1,
            likeNumber: 20
        }
    ],
    notifications: [
        {
            isRead: true
        },
        {
            isRead: false
        }
    ],
    user: {
        userName: "hiyong"
        profile: "https:"
    }
}

- Query와 Mutation
- 쿼리를 해결하는 resolvers