# how-to-use-fetch-api
Javascript fetch api, module ES6, the Dog Api

## 0. 실행화면
<div style="display:flex; justify-content:center; align-items:center;">
  <img width="50%" src="https://user-images.githubusercontent.com/36183001/90401205-94123380-e0d8-11ea-9825-baebf34d743b.gif">
</div>

## 1. Fetch

- Fetch : XMLHttpRequest의 대체재, Request나 Response를 관리하기 쉽다.

> async, await 키워드를 사용하여 비동기적으로 데이터를 가져온다. (Promise 객체가 아닌 실제 데이터를 얻기 위함)

> try, catch 를 통해 비동기처리 중 발생할 수 있는 오류를 예방한다.

```
const request = async url => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const result = await response.json();
            return result
        } else {
            const err = await response.json();
            return err;
        }
    } catch(e) {
        return {
            message: e.message,
            status: e.status
        }
    }
};
```


## 2. 모듈화

- 모듈화를 하는 이유 : 
> 비동기 방식으로 필요한 부분의 데이터를 가져오기 때문에 성능과 메모리상에서 이점이 있다.

> default, export, import, from 과 같은 모듈 키워드를 사용해 가독성이 높다.

> 파일이 분리되어 있기 때문에 유지보수, 재사용 측면에서 유리하다.

1) 모듈화를 위해 module script 생성

```
...
<script type="module" src="src/main.js"></script>
...
```

2) App.js 를 구성하는 요소를 컴포넌트화 하여 관리

```
import HeaderSection from './components/headerSection.js';
import ContentSection from './components/contentSection.js';

import { api } from './api/theDogApi.js';
...
```


## 3. theDogApi

임의의 랜덤 강아지 사진을 가져오기 위해 TheDogAPI 를 사용하였다.

- TheDogAPI DOCS 링크 : https://docs.thedogapi.com/

1) 임의의 강아지 하나의 데이터를 가져오기 위해 '/images/search?limit=1' 키워드 사용

```
const API_BASE_URL = 'https://api.thedogapi.com/v1';
...
const requestData = await request(`${API_BASE_URL}/images/search?limit=1`);
...
```

2) 비동기적으로 랜덤 강아지 데이터를 하나 가져왔을 때, 본문이 변경되도록 설정하였다.

```
const request = await api.fetchRandom();
if(!request.isError) {
    const data = await request.data;
    contentSection.setState(data);
} else {
    contentSection.setErrorMessage();
}
```


### 4. 서버 설정

서버 설정을 따로 하지 않고 실행하기 위해 Web Server for Chrome 사용

- 링크 : https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb

