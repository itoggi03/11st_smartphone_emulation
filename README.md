# 11st_smartphone_emulation

> 11st - Frontend challenge ( 2021.08.22 ~ 2021.08.23 )

<br>

# 실행방법

```shell
$ npm install
$ npm run start
```

<br>

# 파일 구조

```
11st_smartphone_emulation
|- /css
|- /images
|- /pages
|- /src
|- index.html
|- package.json
|- package-lock.json
|- webpack.config.js
```

## 1. /css

- `style.css` : 전체에 적용되는 스타일
- `alarm-style.css`, `memo-style.css`, `photo-style.css`: 각각의 페이지에서 사용되는 스타일

<br>

## 2. /images

photo 에서 사용되는 사진 10개가 저장되어 있음

<br>

## 3. /pages

`home`, `alarm`, `memo`, `photo` 페이지 각각의 템플릿

<br>

## 4. /src

- `index.js`: 각 페이지의 js 파일을 실행하고, 이벤트에 따라 라우팅을 변경하는 코드
- `alarm.js`, `memo.js`, `photo.js`: 각 화면의 동작을 수행하는 js 파일
- `router.js`: 각 페이지의 라우팅을 설정하는 파일

<br>

## 5. index.html

가장 메인이 되는 html. 현재 시간이 보여지는 nav-bar와 각 페이지를 보여줌

<br>
<br>

# 수행 결과

## 1. 홈

- [x] 상단에 날짜와 시간이 표시되어야 합니다.(모든 화면에서 표시되어야 함)

- [x] 아래 3개의 앱이 표시되어야합니다.

- [ ] 앱은 Drag & Drop 으로 서로 위치를 이동할 수 있어야 합니다.(핸드폰에서 앱 위치 바꾸는 동작
      과 같습니다.)
- [ ] 위치는 Local Storage에 저장되어 브라우저 Reload 후에도 바뀐 위치로 나와야 합니다.
- [x] 각 앱 선택 시 해당 앱 화면으로 바뀌어야 합니다.

<br>

## 2. 알람

- [x] 우측 상단에 “NEW” 버튼이 있어야 합니다.
- [x] “NEW” 버튼 클릭 시 바로 아래 입력창이 나와야 합니다.
- [x] 분은 10분 단위로 입력 받습니다.
- [x] 저장을 클릭하면 아래 리스트에 추가되고 입력창은 사라져야 합니다.
- [x] 알람 리스트에 “삭제” 클릭 시 지워져야 합니다.
- [ ] 알람 시간이 되면 alert 창으로 알람 시간을 띄어 주고 확인 클릭시 해당 알람은 삭제되어야 합니다.(다른 앱에 있어도 알람은 동작해야 합니다.)
- [x] 알람 리스트는 LocalStorage에 저장되며 브라우저 Reload 후에도 모두 그대로 나와야 합니다.

<br>

## 3. 메모

- [x] 우측 상단에 “NEW” 버튼이 있어야 합니다.
- [x] “NEW” 버튼 클릭 시 바로 아래 입력창 이 나와야 합니다.
- [x] 메모는 input 태그를 사용하고 엔터키 입력 시 저장되며 입력창은 사라져야 합니다.
- [x] 메모 리스트에서는 2줄만 표시 되어야 합니다.
- [x] 해당 메모 클릭 시 모든 메모 내용이 나오도록 펼쳐져야 합니다.
- [x] 한번에 하나의 메모만 펼칠 수 있도록 이전에 펼쳐진 메모는 다시 2줄만 표시되도록 합니다.
- [x] 모든 메모는 LocalStorage에 저장되며 브라우저 Reload 후에도 저장된 메모가 그대로 나와야 합니다.

<br>

## 4. 사진

- [x] 사진은 로컬에 사진을 10개 정도 저장한 후 불러오도록 합니다.
- [x] 상단에 모든 사진 리스트가 나오며 가로 스크롤이 되어야 합니다.
- [x] 리스트에서 사진을 선택 하면 리스트에 Border등이 생겨 해당 사진이 선택되었다는 표시가 되어야합니다.
- [ ] 선택된 사진은 아래에 표시되어야 하고, 가로 세로 중앙 정렬이며 화면에 딱 맞게 줄어들어야 합니다.
