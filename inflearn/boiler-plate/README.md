## Infearn Study
#### 강의제목 : 따라하며 배우는 노드, 리액트 시리즈 - 기본강의 [출처](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B8%B0%EB%B3%B8)
#### 강의자 : John Ahn

- <b>Back-End :</b> Node.js
- <b>Front-End :</b> React.js
- <b>Database :</b> MongoDB
- <b>구현내용 :</b> 회원가입, 로그인, 로그아웃, Auth인증

<hr>

- <b>학습내용 개인 기록</b>
	- Mongodb 란?
	>	- Document-Oriented(문서지향적) NoSQL Database이다.
	>	- Document는 RDMS의 record와 유사한 개념으로 JSON Object 형태의 Key-Value의 쌍으로 이루어진 데이터 구조를 갖고있다.
	>	- Value에는 다른 document, array, document array가 포함될 수 있다.		
	>	```
	>	{
	>		name: "hiYong",
	>		age: 27,
	>		status: "A"
	>	}
	>	```
	>	- Document의 형태
	>	```
	>	{
	>		_id: ObjectId("5099803df3f4948bd2f98391"),
	>		name: { first: "Alan", last: "Turing" },
	>		birth: new Date('Jun 23, 1912'),
	>		death: new Date('Jun 07, 1954'),
	>		contribs: [ "Turing machine", "Turing test", "Turingery" ],
	>		views : NumberLong(1250000)
	>	}
	>	```
	>	- Collection은 RDBMS의 Table과 유사한 개념으로 Document의 집합으로 구성되어있다.
	>	- Database는 0개 이상의 Collection들의 집합으로 구성되며 Collection은 0개 이상의 Document로 구성되고 Document는 1개 이상의 field로 구성된다.
	>
	>	- SQL과 NoSQL
	>	  |  | SQL | NoSQL |
	>	  | :------------- | :------------- | :------------- |
	>	  | 데이터베이스 | 관계형 데이터베이스 | 비관계형 데이터베이스 |
	>	  | 스키마 구조 | 엄격한 데이터 스키마 구조(스키마구조 준수) | 스키마 없음 |
	>	  | 관계 | 관계를 통한 테이블 분산 | 관계 없음 |
	>	  | 확장성 | 수직적 확장 | 수평적 확장 |
	>	  | 장점 | 명확하게 정의된 스키마구조,<br>데이터 무결성 보장 | 스키마가 없기 때문에 유연한 구조,<br>수직 및 수평적 확장이 가능,<br>쓰기와 읽기 성능이빠름 |
	>	  | 단점 | 데이터 스키마의 계획이 확실해야함,<br>관계형이기 때문에 JOIN문에 의한 복잡한 쿼리,<br>수평적 확장이 어렵다 | 유연성 때문에 데이터 구조에 대한 결정이 어려울수 있다,<br>데이터의 중복 때문에 수정을 하는 경우 모든 컬렉션에서 수행해야한다 |

	<hr>

	* Mongoose 란?
	> - mongoose는 Node.js에서 MongoDB의 확장 모듈이다.
	> - mongoose는 데이터를 관리하기 위해 스키마(Schema)를 만들고, 그 스키마를 통해 모델(Model)을 만들어 사용한다
	> - [mongoose Document](https://mongoosejs.com/docs/guide.html)

	<hr>

	* Bcrypt 란?
	> - 암호 해시를 도와주는 라이브러리이다
	> - bcrypt는 패스워드 저장 목적으로 설계 되었으며 입력 값으로 72bytes charcter를 사용해야 하는 제약이있다.

	<hr>

	* 쿠키(Cookie)와 세션(Session)
	> - 쿠키(Cookie)와 세션(Session)은 HTTP 프로토콜에서 비연결성과 비상태성이라는 특성을 보완하는 기술이다.
	> - 쿠키(Cookie)
	> 	>- 쿠키는 클라이언트 로컬에 저장되는 Key-Value 형태의 작은 데이터 파일이다
	>	>- 쿠키는 웹 서버가 브라우저에게 지시하여 사용자의 로컬 컴퓨터에 파일 또는 메모리에 저장하는 기록 정보 파일이다.
	>	>- 파일에 담긴 정보는 인터넷 사용자가 같은 웹사이트를 방문할때마다 정보를 접근한다.
	>	>- 유효 시간이 정해지면 브라우저가 종료되어도 인증이 유지된다.
	>	>- 쿠키의 동작방식
	>	>	1. 클라이언트가 페이지를 요청한다.
	>	>	2. 서버에서 쿠키를 생성한다.
	>	>	3. HTTP Header에 쿠키를 포함시켜 응답한다.
	>	>	4. 브라우저가 종료되어도 쿠키에 만료 기간이 있다면 클라이언트에서 유지하고 있다.
	>	>	5. 쿠키가 존재하면 요청을 할 경우 HTTP 헤더에 쿠키를 함께 보내서 요청한다.
	>	>	6. 서버에서 쿠키를 읽어 이전 상태 정보를 변경할 필요가 있을 경우, 쿠키를 업데이트 하여 변경된 쿠키를 재응답한다.
	>	>- ex) 방문 사이트의 회원 정보 유지, 쇼핑몰의 장바구니
	>
	> - 세션(Session)
	> 	>- 세션은 데이터를 클라이언트가 아닌 접속한 서버의 DB에 정보를 저장한다.
	> 	>- 정보를 서버에 저장하고 있어 쿠키보다 보안성이 좋지만, 사용자가 많으면 메모리 관리가 비효율적이다.
	> 	>- 클라이언트에서 HTTP Session id를쿠키로 메모리 저장된 형태로 가지고 있다
	> 	>- 브라우저가 종료되면 세션은 사라진다.
	>
	>	>- 세션의 동작방식
	>	>	1. 클라이언트가 서버에 접속 시 Session ID를 발급한다.
	>	>	2. 클라이언트는 Session ID에 대해 쿠키를 사용해서 저장한다.
	>	>	3. 클라이언트가 서버에 다시 접속 시 이 쿠키를 이용해서 Session ID값을 서버에 전달한다
	>	>-ex) 로그인과 같이 보안상 작업을 수행할 때, 로그인 정보
	>
	>  |  | 쿠키(Cookie) | 세션(Session) |
	>  | :------------- | :------------- | :------------- |
	>  | 저장위치 | 클라이언트 | 서버 |
	>  | 속도 | 세션보다 빠르다 | 쿠키보다 느리다 |
	>  | 보안성 | 세션보다 취약하다 | 쿠키보다 좋다 |
	>  | 만료 시점 | 쿠키 저장시 설정 - 만료시점이 지나지 않으면 자동 삭제 되지 않음| 브라우저 종료시 삭제 - 기간 지정 가능 |

	<hr>

	* JWT(JSON Web Token) 란?
	> - JSON 포멧을 이용하여 사용자에 대한 속성을 저장하는 Web Token이다. 토큰 자체를 정보로 하여 정보를 전달하는 방식이다. 주로 회원 인증이나 정보전달에 사용된다.
	> - 서버와 클라이언트 간 정보를 주고 받을 때 HTTP Request Header에 JSON Token을넣은 후 서버는 별도의 인증 과정없이 Header에 포함 되어있는 JWT 정보를 통해 인증한다.
	> - JWT의 구조는 ' . '를 구분자로 헤더(Header), 내용(Payload), 서명(Signature)로 이루어져 있다.
	>	> 1. 헤더(Header)는 typ와 alg로 구성되어있다.
	>	> ```
	>	> 	{
	>	>		"typ": "JWT",	// 토큰의 타입
	>	>		"alg: "RSA"	// 해싱 알고리즘을 지정한다. SHA256 또는 RSA가 사용되며, 토큰을 검증할 때 사용한다.
	>	>	}
	>	> ```
	>	> 2. 정보(Payload)는 토큰의 정보가 담겨 있으며, 담겨 있는 정보의 한 조각을 클레임(claim)이라고 명칭한다. 클레임은 name/value의 한쌍으로 이루어져 있다.
	>	> ```
	>	>	{
	>	>		"iss": "hiYong",	// 토큰의 발급자
	>	>   	"exp": "1485270000000",	// 토큰의 만료시간
	>	>	    "https://...: true,	// 공개 클레임(충돌이 방지된 이름으로 이루어져야하며 해당 클레임은 URI형식으로 이루어져있다.)
	>	>	    "userId": "11028373727102",	// 비공개 클레임
	>	>	    "username": "velopert"	// 비공개 클레임
	>	>	}
	>	> ```
	>	> 3. 서명(signature)는 헤더의 인코딩 값과 정보의 인코딩 값을 합쳐 비밀키로 해쉬를 하여 생성하는 부분이며 인코딩은 BASE64로 한다.

	<hr>

	* Auth란?

	<hr>

	* React란?
	> - 페이스북이 만든 컴포넌트 기반의 프론트엔드 라이브러리이다.
	> - 리액트는 컴포넌트 기반의 라이브러리이기 때문에 재사용성이 뛰어나다.
	> - Virtual DOM은 가상의 Document Object Model을 의미하며 일반적인 DOM은 변경이 일어나면 전체 DOM을 다시 만들어 비효율적인 구조이다. 이 단점을 Virtual DOM으로 해결하였고 변경된 부분만 DOM을 반영하는 방식으로 수행된다.
	> - 리액트의 컴포넌트 종류는 클래스형과 함수형이 있다.
	> 	* React vs React Hooks (React 16.8 부터)
	> 		1. Class component
	> 			- 더 많은 기능들을 사용할수 있다.
	>	 		- 길어지고 복잡해질수 있다. 성능적으로 느려진다.
	> 		2. Functional Component
	> 			- 제공하는 기능은 한정적이다.
	> 			- 코드가 줄어들고, 성능적으로 빠르다.
	> 		3. 비교
	> 			- React 16.8 기준으로 Functional Component를 Class Component 처럼 사용할 수 있다.
	> 			- React 생명주기를 참고할 것
	> - 리액트는 데이터의 흐름이 한 방향으로 흐른다. 따라서 부모 컴포넌트의 데이터를 변경하기 위해서는 state를 이용해야한다<br>
	>	<img src="https://user-images.githubusercontent.com/40785404/85841405-0c473180-b7d9-11ea-873c-896eaac34aa3.PNG" width="550" height="350" />
	>
	> - 리덕스(Redux) 란?
	> 	- 상태 관리 라이브러리이다. -> redux를 이용하여 컴포넌트를 직접 거치지 않고 state를 관리할 수 있다.
	>	- redux를 이용하면 redux store를 통해 원하는 컴포넌트에 원하는 상태값과 함수를 직접 주입할 수 있다.
	>	- 1. 액션(Action) : 상태에 변화가 필요하게 되면 액션이 발생되며 하나의 객체로 표현된다.
	>	```
	>	{
	>		type: "TOGGLE_VALUE"
	>	}
	>	```
	>	- 2. 리듀서(Reducer) : 변화를 일으키는 함수이며, 리듀서는 state와 action을 파라미터로 갖는다.
	>	- 3. 스토어(Store) : 리덕스에서 한 애플리케이션 당 하나의 스토어를 가지며, 스토어 안에는 현재의 앱상태와 리듀서와 내장함수들이 존재한다.
	>	- 4. 디스패치(Dispatch) : 스토어의 내장함수 중 하나로 액션을 발생시킨다, dispatch라는 함수에는 action을 파라미터로 전달한다.
	> 	- Props : 부모 컴포넌트 -> 자식 컴포넌트가 속할 수 있는데, 컴포넌트간의 소통을 할 수 있다. 소통방식은 부모에서 자식으로만 전달할 수 있다. 전달 받은 값은 변할수 없다. 전달 받은 값을 변경하고 싶을 경우 부모 컴포넌트에서 새로운 값을 받아야 한다. 읽기 전용 데이터라고 표현할 수 있다.
	>	```
	> 	<ChatMessage
	> 		messages={messages}
	> 		currentMember={member}
	> 	/>
	>	```
	> 	- State : 컴포넌트 내부에서 값을 전달하기 위해서 사용한다. Props와 다르게 State를 계속 변동시킬수 있다. 하지만 값이 변할 때는 re-render가 된다. 동적인 데이터를 다룰 때 사용한다.
	>	```
	> 	state = {
	> 		message: '',
	> 		attachFile: undefined,
	> 		openMenu: false
	> 	}
	>	```
	> 	- 리덕스 데이터 흐름<br>
	>	<img src="https://user-images.githubusercontent.com/40785404/85841357-f9346180-b7d8-11ea-8a06-cbce179ddcd7.PNG" width="550" height="350" />
	> - [리액트 및 리덕스 참고자료](https://react.vlpt.us/)

	<hr>

	* Axios란?
	> - HTTP 클라이언트 라이브러리로써, 비동기 방식으로 HTTP 데이터 요청을 실행한다.
	> - Promise 기반의 API 형식이다.
	> - 내부적으로 Ajax를 호출할 수 있다.

	<hr>

	* HOC란?
	> - higher-order component = function 다른 컴포넌트를 받아 새로운 컴포넌트로 리턴하는 함수
	> - Auth(HOC)에서 LogginedInComponent(회원만 들어올 수 있는 곳)를 만들수 있다.
	> - LandingPage request를 통해 back-end -> 값을 전송하여 상태를 가져온다. ex)로그인 인지 로그인이 안되어있는지 등에 대한 정보상태
	> - AdminPage ex) 만약 로그인이 안되어있거나 관리자가 아니면 못들어오게하고 다른 Page로 Redirect 해버린다.

	* [리액트 베스트 10 css 프레임워크](https://www.vobour.com/%EB%B2%A0%EC%8A%A4%ED%8A%B8-10-%EB%A6%AC%EC%95%A1%ED%8A%B8-ui-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-10-best-react-ui-lib)
