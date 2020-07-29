### 노마드코더 Clone Startups.

##### 강의제목 : GraphQL로 영화 API 만들기 [출처](https://nomadcoders.co/react-graphql-for-beginners/lobby)
##### 강의자 : Nicolás Serrano Arévalo

- 활용 API : [출처](https://yts.mx/)
- 강의 내용 : Node.js에서 GraphQL을 활용하여 영화 정보 API 제공하기
- 활용 기술 : Node.js, GraphQL, yarn package manager, graphql-yoga, babel

<br>

> - 메모 내용 :
>   - OverFetching
>       - REST API의 경우 모든 정보를 과하게 주는 경우가 생긴다.
>       - Database에 사용하지 않을 데이터를 요청하는 방식은 부적절할 수 있다.
>       - 따라서 필요한 데이터만을 사용하기 좋다.
>       - 고객들이 필요한 정보만 받게 된다.
>       - Front-End는 db에 오직 사용자명만 요청한다.(필요한것만 요청한다)
>       - 다음과 같이 무분별 한 데이터를 보내게 된다면 개발자 역시 어떤 데이터를 어떻게 보냈는지 log를 통해 확인해야한다.
>       - 결론적으로 GraphQL을 통해 REST API의 OverFetching을 해결할 수 있다.
>   - UnderFetching
>       - REST API를 활용하는 경우, 하나의 기능을 완성하기 위해 여러 개의 요청을 보내야하는 경우가 있다.
>       ```
>       // 예를 들면 3개의 GET 요청을 통해 하나의 기능을 완성하는 경우가 있다.
>       [GET] /feed
>       [GET] /notificaions
>       [GET] /user/1
>       ```
>       - 하지만 GraphQL은 한 개의 Endpoint를 통해 REST API의 다음과 같은 단점을 해결할 수 있다.
>       ```
>       // 다음과 같이 한개의 URL로 불 필요한 요청을 해결할 수 있다.
>       [Query] /graphql
>       ```
>       - 따라서 URL의 체계를 사라지게하며, 불필요함을 최소화 할 수 있다.
>       
>       - 다음과 같이 예를 들어 GraphQL Query를 요청하면 Javascript 응답을 받을 수 있다.
>   ```
>   query {
>       feed {
>           comments
>           likeNumber
>       }
>       notifications {
>           isRead
>       }
>       user {
>           userName
>           profilePic
>       }
>   }
>   ```
>   다음 GraphQL Query는 Javascript 코드를 반환한다.
>   ```
>    javascript
>    {
>        feed: [
>            {
>                comment: 1,
>                likeNumber: 20
>            }
>        ],
>        notifications: [
>            {
>                isRead: true
>            },
>            {
>                isRead: false
>            }
>        ],
>        user: {
>            userName: "hiyong"
>            profile: "https:"
>        }
>    }
>
>   - Query : 데이터를 받아오는 역할 (조회)
>   - Mutation : 데이터를 변경하는 역할 (입력, 수정, 삭제)
>   - Resolver 는 Query에 대한 요청을 서버가 어떻게 처리할지 정의한다.
