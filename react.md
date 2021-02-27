# React에 관하여 

# 목차 
[1. 수업소개](#1-수업소개)


[2. 공부 전략](#2-공부-전략)


[3. 개발환경 종류](#3-개발환경-종류)


[4. npm을 이용해서 Create React App 설치](#4-npm을-이용해서-create-react-app-설치)


[5. create react app을 이용해서 개발환경구축](#5-create-react-app을-이용해서-개발환경구축)


[6. 샘플 웹앱 실행](#6-샘플-웹앱-실행)


[7. JS 코딩하는 법](#7-js-코딩하는-법)


[8. CSS 코딩하는 법](#8-css-코딩하는-법)


[9. 배포하는 법](#9-배포하는-법)




## 1. 수업소개 
### 1-1. 리액트 란? 
* 페이스 북의 ui를 더 잘 만들기 위해서 페이스북에서 만든 자바스크립트 ui 라이브러리 
* 사용자 정의 태그(Component)를 만들어 주는 기능을 함

### 1-2. 컴포넌트 (Component)
* 가독성 높임 
* 재사용 가능
* 유지보수 편리 


## 2. 공부 전략 
* 코딩 (coding) 
* 실행 (Run)
* 디플로이 (deploy) : 소비자에게 전달 


## 3. 개발환경 종류
* tip: 공식 문서에 익숙해 질 것! 

  [React설치 사이트 이동](https://reactjs.org/) 

### 3-1. Add React to a Website
* 부분적으로 리액트 기능을 추가 할 때 
* 초급 사용자들에게 까다로울 수 있음 

### 3-2. Create a New React App
* Toolchain : 리액트로 앱을 개발 할 때, 목표를 달성하기 위해서 필요한 개발 환경 및 도구를 제공
* npm : node.js 를 이용해서 만들어진 앱을 명령어 환경에서 손쉽게 설치 할 수 있도록 도와주는 도구 ( node.js 계의 앱스토어, 구글 플레이어 역할을 하는 소프트 웨어) 


## 4. npm을 이용해서 Create React App 설치

  [Node.js설치 사이트 이동](https://nodejs.org/en/)

### 4-1. npm설치
* LTS는 안정화된 버전 , Current는 가장 최신화 버전
* window키 + R  ->  cmd 입력 -> nmp-v 입력 -> 숫자 나오면 설치 성공

### 4-2. Create React App 설치 
#### 1) npm install -g creat-react-app
* npm install -g : 어디에서든지 실행 
* ERR 떴을 때 ' sudo npm install -g creat-react-app ' 다시 입력 
* ' creat-react-app -V ' 입력하여 설치 확인
* 장점 : 한번 다운로드 받고 이후 추가적인 다운로드 필요 없음
* 단점 : 최신 버전을 사용하지 못 할 수 있음

#### 2) npx create-react-app
* 임시로 설치하여 한번만 실행하는 방법 
* 장점: 컴퓨터 공간을 낭비 하지 않음 / 항상 최신버전이 react를 사용할 수 있다.
* 단점: 매번 새롭게 다운로드 받아야 한다

## 5. create react app을 이용해서 개발환경구축
### window 버전 기준 
* cd 입력 
* 디렉토리 드래그 (경로 자동 입력 됨)
* create-react-app .  입력 

## 6. 샘플 웹앱 실행 
* terminal 실행  npm run start
* 실행 되지 않을 때  welcome 페이지에서 open folder로 디렉토리 열기 (해당 디렉토리 단독으로 실행 되어야 함)

## 7. JS 코딩하는 법 
* public > index.html  에서 id=root 안에 컴포넌트가 입력됨
* src > index.js 에서  <App />안에서 내용이 입력 및 수정 됨
* document.getElementById( 'root' )  =>  <App /> 파일을 root로 가져감
* src > App.js  에서  <App /> 내용을 보고, 입력 및 수정 할 수 있음


* App.js 파일의 입력 방식을 함수방식에서 클라스 방식으로 바꿀 때,  오류 또는 실행이 되지 않는 경우

=> '첫 줄'에 import React, { Component } from 'react'; 또 함께 입력 되었는지 확인!

## 8. CSS 코딩하는 법 
* index.css 
* App.css : App.js 안에 있는 리액트의 컴퍼넌트가 로드 됐을 때, 실행되는 디자인 파일
* 사용자 정의 컴퍼넌트 App의 이름은 수정 가능 (이름이 같아야함)  but 파일의 이름은 수정되면 안됨.

## 9. 배포하는 법 
* build 할 때 : terminal에서 npm run build 입력 --> build 폴더 생성 


* npm run start : react 기능들이 많이 들어있어서 용량이 크다. 
* npm run build : 개발완료 후에 생성, 용량을 줄여준다.

* npm install -g serve : 컴퓨터 어디에서느 serve 라는 명령어를 통해서 웹서버를 설치 할 수 있음 
* npx serve :  한번만 실행 시킬 웹서버를 실행 시킴 
* npx serve -s build : serve라는 웹서버를 다운로드 받아서 실행시킬 때, build라는 디렉토리를 document root로 하겠다는 의


