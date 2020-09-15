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

WebRTC에 대한 기타 내용 정리

- 어떻게 서버를 통하지 않고 클라이언트끼리 연결을 하는가? 
최초에 서버가 각각 클라이언트들에게 연결하는 과정을 진행하고 그 후에는 관여하지 않는다

- 중계과정 

- [x] Indentify (클라이언트 인식, 검증)
- [x] Type of Data (전송받은 데이터의 타입을 체크: 비디오인지 오디오인지 등등)
- [x] NAT traversal (Peer to Peer 컨넥션: 클라이언트간 연결해주는 기술이라고 하는데 자세히는 모름)
- [x] Security (데이터 Encrypt 과정)
- [x] Codec (데이터 압축)

- 특징
 
- [x] 주로 UDP를 사용: TCP와 UDP의 차이는 속도와 데이터 전송의 안정성에 주로 있는데, UDP는 안정성보다는 속도에 특화된 프로토콜이다 따라서 스트리밍 서비스나 액션 게임등에 적합하다 (webSocket은 TCP를 사용)
- [x] 표준 프로토콜이 없다
- [x] 일부 브라우저에서 지원이 되지 않는다 (ex) MS Edge

## 결론
- webSocket과 WebRTC의 특성을 비교하여 용도에 맞게 사용해주면 됩니다.

webSocket은 안정성
WebRTC는 속도
에 각각 무게가 실려있다는 것을 알 수 있습니다.

WebSocket으로도 영상 스트리밍을 구현할 수 있으나 WebRTC를 선호하는 것은 이 때문입니다.
