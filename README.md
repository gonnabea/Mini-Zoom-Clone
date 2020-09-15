## Zoom 클론

### WebRTC를 배우기 위한 간단한 Zoom 클론입니다.

- [x] Pug
- [x] Express
- [x] Node.js
- [x] Socket.io
- [x] WebRTC 💎

- 실시간 스트리밍 기능을 구현하고 싶어 WebRTC 오픈소스를 찾게 되었습니다.

- 기존에 알고 있던 webSocket과 유사하다는 느낌 ( 클라이언트간의 실시간 데이터 교환 )을 받았고 차이점이 궁금하였습니다.

- 대표적인 차이점은, webSocket은 클라이언트가 요청을 보내면 "중계서버를 통하여" 해당 요청에 대한 응답을 타 모든 클라이언트에게 전달해주는 방식입니다.
그러나 WebRTC는 클라이언트와 클라이언트가 "서버를 통하지 않고" 서로 연결되어 (Peer to Peer) 빠른 응답속도를 낼 수 있는 것입니다.

- 유튜브에서 본 WebRTC를 설명하는 내용, 흥미롭게도 영상에서 webSocket과 비교해주며 설명해줍니다.
https://www.youtube.com/watch?v=2Z2PDsqgJP8&t=421s
