# Dice — AI Desktop Companion

> Your little AI companion.  
> A little companion that learns with you.

## 1. Project Overview

**Dice**는 데스크톱에 상주하는 AI 기반 개인 비서 및 영어 학습 프로그램이다.

일반적인 웹 애플리케이션이나 챗봇과 달리, 작은 주사위 형태의 마스코트가 사용자의 데스크톱에 상주하며 필요할 때 대화를 시작하는 Desktop Companion을 지향한다.

평소에는 화면 구석에서 쉬거나 다양한 표정을 짓는 작은 캐릭터로 존재하고, 사용자가 캐릭터를 클릭하면 말풍선 형태의 대화 인터페이스가 나타난다.

초기에는 영어 회화, 음성 인식, 번역 및 학습 기록 관리 기능을 중심으로 개발하며, 장기적으로는 사용자의 작업 환경을 이해하고 컴퓨터 작업을 수행하는 AI Desktop Agent로 확장하는 것을 목표로 한다.

### Core Concept

- Desktop Pet: 데스크톱에 상주하는 인터랙티브 캐릭터
- AI Conversation: 사용자와 자연스럽게 대화하는 AI
- English Learning: 영어 회화, 문법 교정, 번역 및 발음 연습
- Persistent Memory: 이전 대화와 사용자의 학습 정보를 기억하는 시스템
- Desktop Agent: 추후 운영체제 및 데스크톱 작업과 연동

---

## 2. Character & UI Design

### 2.1 Character Concept

- 기본 형태: 둥근 모서리를 가진 정육면체(주사위)
- 초기 구현: 2D Sprite 기반
- 디자인: 단순하고 귀여운 흑백 계열의 미니멀한 캐릭터
- 얼굴: 눈과 입의 조합으로 다양한 감정 표현
- 애니메이션: 표정 변화, 눈 깜빡임, 회전, 통통 튀기, 잠자기 등

캐릭터는 단순한 장식이 아니라 AI의 상태와 감정을 시각적으로 전달하는 역할을 한다.

### 2.2 Character States

| State | Description |
|---|---|
| Idle | 평상시 대기 상태 |
| Listening | 사용자의 음성을 듣는 상태 |
| Thinking | AI가 답변을 생성하는 상태 |
| Speaking | AI가 음성으로 답변하는 상태 |
| Happy | 긍정적인 반응 및 기쁨 |
| Confused | 이해하지 못하거나 의문을 표현 |
| Sleeping | 장시간 상호작용이 없을 때 |

각 상태에 맞는 스프라이트와 애니메이션을 적용한다.

### 2.3 Desktop Pet Mode

- 화면 모서리에 작은 캐릭터 상주
- 투명한 배경의 플로팅 윈도우
- 다른 프로그램 위에 표시 가능
- 캐릭터 드래그 및 위치 이동
- 마우스 오버 및 클릭 이벤트
- 일정 시간 상호작용이 없으면 대기 또는 수면 상태로 전환

### 2.4 Conversation Mode

캐릭터를 클릭하면 대화 인터페이스가 나타난다.

UI 방향:
- 캐릭터와 대화창이 자연스럽게 연결되는 디자인
- 말풍선 형태의 대화 메시지
- 영어 원문과 한국어 번역을 함께 표시
- 텍스트 입력 및 음성 입력 지원
- 음성 재생, 번역, 기록 등의 보조 기능
- 대화창 열기 및 닫기

대화 인터페이스는 일반적인 메신저보다 작고 간결하게 유지하여 다른 데스크톱 작업을 방해하지 않도록 한다.

---

## 3. Core Features

### 3.1 AI English Conversation

프로젝트의 초기 핵심 기능.

- AI와 자유로운 영어 회화
- 사용자의 영어 수준에 따른 대화 난이도 조절
- 문법 및 어휘 오류 교정
- 자연스러운 영어 표현 추천
- 영어 표현에 대한 한국어 설명
- 사용자의 관심사와 이전 대화 맥락을 활용한 대화

AI는 단순한 번역기나 문제 풀이 도구가 아니라 친근한 영어 대화 상대 역할을 수행한다.

### 3.2 Voice Recognition & Recording

- 마이크를 통한 음성 입력
- Speech-to-Text를 통한 음성 텍스트 변환
- 녹음 내용 저장
- 사용자가 말한 문장과 교정된 문장 비교
- 음성 재생 및 다시 듣기
- 추후 실시간 음성 대화 지원

초기에는 녹음 후 텍스트로 변환하는 방식으로 구현하고, 이후 실시간 음성 처리 기능을 추가한다.

### 3.3 Text-to-Speech

- AI 답변을 영어 음성으로 출력
- 영어 문장 다시 듣기
- 음성 재생 속도 조절
- 추후 음성 및 발음 설정 지원

### 3.4 Instant Translation

- 단어나 문장 선택 시 즉시 번역
- 영어 원문과 한국어 번역 표시
- 문맥에 따른 단어의 의미 설명
- 유사한 영어 표현 추천
- 예문 제공

단순히 번역 결과만 제공하는 것이 아니라 실제 영어 사용 상황과 표현의 차이를 설명하는 것을 목표로 한다.

### 3.5 Learning History

- 대화 기록 저장
- 대화 세션별 기록 관리
- 새롭게 학습한 단어 및 표현 저장
- 문법 교정 내역 저장
- 자주 틀리는 표현 분석
- 이전 학습 내용 복습

---

## 4. AI Memory & Context Management

Dice의 중요한 차별점 중 하나는 대화의 연속성이다.

단순히 최근 메시지만 AI에게 전달하는 방식이 아니라, 대화 기록과 사용자 정보를 별도로 관리하여 장기적인 맥락을 유지한다.

### 4.1 Memory Architecture

**Layer 1. Recent Conversation**
- 현재 대화의 최근 메시지 관리
- 직전 질문과 답변의 문맥 유지
- AI 요청 시 최근 대화 내역 전달

**Layer 2. Conversation Summary**
- 이전 대화의 핵심 내용 요약
- 세션 종료 또는 일정 메시지 수 도달 시 요약 갱신
- 필요할 때 이전 대화의 관련 내용 검색

**Layer 3. User Profile & Long-term Memory**
- 사용자의 영어 수준
- 관심사와 취미
- 학습 목표
- 자주 틀리는 문법 및 표현
- 장기적으로 기억할 만한 사용자 정보

### 4.2 Memory Principles

- 모든 대화를 무조건 AI에게 전달하지 않는다.
- 실제 대화 기록과 장기 기억을 분리한다.
- 현재 대화와 관련 있는 기억을 우선적으로 활용한다.
- 사용자 정보와 학습 기록을 로컬 데이터베이스에 저장한다.
- 사용자가 기억 내용을 확인하고 수정 및 삭제할 수 있도록 한다.

초기에는 SQLite와 대화 요약을 활용하고, 추후 임베딩 및 벡터 검색을 통한 RAG 구조를 도입한다.

---

## 5. Technology Stack

### Desktop Application
- Electron
- React
- TypeScript

### Frontend
- HTML
- CSS
- React Components
- 2D Sprite Animation

### AI
- OpenAI API
- AI Conversation
- Context Management
- Conversation Summarization

### Voice
- Speech-to-Text
- Text-to-Speech
- 추후 Realtime Voice API

### Database
- SQLite
- Local File Storage

### Security
- Electron Main / Renderer Process 분리
- Preload 및 Context Isolation
- API Key 안전한 로컬 관리
- 사용자 데이터 및 녹음 파일 관리

---

## 6. Project Architecture

```text
Dice
│
├── Desktop Application
│   ├── Electron Main Process
│   ├── Window Manager
│   ├── Preload
│   └── System Integration
│
├── Frontend
│   ├── Desktop Pet
│   ├── Character Animation
│   ├── Conversation UI
│   ├── Voice UI
│   └── Settings
│
├── AI Services
│   ├── AI Conversation
│   ├── Translation
│   ├── Grammar Correction
│   ├── Voice Processing
│   └── Context Manager
│
├── Memory System
│   ├── Recent Conversation
│   ├── Conversation Summary
│   └── User Profile
│
└── Database
    ├── Conversations
    ├── Messages
    ├── Memories
    ├── Vocabulary
    └── Recordings
```

### Initial Folder Structure

```text
dice-desktop/
│
├── electron/
│   ├── main.js
│   ├── preload.js
│   └── windowManager.js
│
├── src/
│   ├── components/
│   │   ├── Pet/
│   │   ├── Chat/
│   │   ├── Voice/
│   │   └── Settings/
│   │
│   ├── services/
│   │   ├── aiService.js
│   │   ├── voiceService.js
│   │   ├── translationService.js
│   │   └── memoryService.js
│   │
│   ├── database/
│   │   ├── db.js
│   │   ├── conversations.js
│   │   └── memories.js
│   │
│   ├── assets/
│   │   ├── characters/
│   │   └── animations/
│   │
│   ├── App.jsx
│   └── styles/
│
├── package.json
└── README.md
```

---

## 7. Development Roadmap

### Phase 1. Desktop Pet Prototype

가장 먼저 구현할 단계.

- Electron 프로젝트 구성
- 투명한 플로팅 윈도우 구현
- 2D 캐릭터 화면 출력
- 캐릭터 표정 및 애니메이션
- 화면 모서리에 캐릭터 배치
- 드래그 및 클릭 이벤트
- 클릭 시 대화창 표시
- 대화창 열기 및 닫기

**목표:** AI 기능 없이도 독립적으로 작동하는 데스크톱 펫 완성.

### Phase 2. AI Conversation

- OpenAI API 연결
- 사용자 API Key 입력 및 관리
- 영어 회화 기능
- 문법 교정 및 번역
- AI 응답 표시
- 대화 기록 저장

**목표:** 텍스트 기반 영어 회화가 가능한 프로그램 완성.

### Phase 3. Memory System

- SQLite 데이터베이스 구성
- 대화 세션 관리
- 대화 요약 생성
- 사용자 프로필 저장
- 장기 기억 검색
- 이전 대화 맥락 활용

**목표:** 대화를 종료하고 다시 시작해도 이전 맥락을 활용할 수 있는 AI 구현.

### Phase 4. Voice & Learning

- 음성 녹음
- Speech-to-Text
- Text-to-Speech
- 음성 재생
- 영어 학습 기록
- 단어장 및 복습 기능
- 실시간 음성 대화

**목표:** 텍스트와 음성을 모두 지원하는 영어 학습 프로그램 완성.

### Phase 5. AI Desktop Agent

장기 확장 단계.

- 화면 캡처 및 화면 이해
- 프로그램 실행
- 파일 검색 및 관리
- 시스템 명령 실행
- MCP 연동
- 사용자 작업 지원

**목표:** 영어 학습을 넘어 사용자의 데스크톱 작업을 보조하는 개인용 AI 에이전트로 발전.

---

## 8. Future Expansion

### 3D Character
초기에는 2D Sprite를 사용하지만, 추후 Blender 등의 도구를 활용하여 3D 캐릭터로 전환할 수 있도록 캐릭터의 상태 관리와 UI를 분리한다.

### Desktop Automation
AI가 사용자의 요청을 이해하고 데스크톱 환경에서 실제 작업을 수행할 수 있도록 확장한다.

### Personalized Learning
장기적인 학습 데이터를 기반으로 사용자에게 적합한 학습 난이도와 복습 내용을 추천한다.

### Local AI Support
추후 Ollama 등 로컬 LLM과 연동하여 외부 API뿐 아니라 로컬 모델도 선택할 수 있도록 확장한다.

---

## 9. Development Principles

1. 기능을 한 번에 모두 구현하지 않고 단계별로 개발한다.
2. 캐릭터, 대화 UI, AI 서비스, 데이터베이스를 독립적으로 구성한다.
3. 초기에는 2D 캐릭터와 텍스트 대화에 집중한다.
4. 대화 기록과 장기 기억을 분리하여 관리한다.
5. API Key와 사용자 데이터의 보안을 고려한다.
6. 새로운 기능을 추가하더라도 기존 구조를 최대한 재사용할 수 있도록 설계한다.
7. 실제 사용 가능한 프로그램을 우선 완성하고 점진적으로 기능을 확장한다.

---

## 10. Initial Development Goal

첫 번째 목표는 복잡한 AI 기능을 구현하는 것이 아니다.

**데스크톱 구석에 작은 주사위 캐릭터가 상주하고, 캐릭터를 클릭하면 대화 인터페이스가 나타나는 프로그램을 만드는 것.**

이 기본 구조를 안정적으로 구현한 뒤 AI API를 연결하고, 대화와 기억 기능을 차례대로 추가한다.

Dice는 단순한 영어 회화 프로그램에서 시작하지만, 궁극적으로는 사용자의 일상과 작업 환경에 자연스럽게 녹아드는 개인용 AI Desktop Companion을 지향한다.
