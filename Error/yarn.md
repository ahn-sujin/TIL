# [오류] yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\user\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다.

<br>

> npm을 통해서 yarn 설치

```
npm install --global yarn
```

<br>

### vscode에서 yarn을 실행하려고 위와 같이 설치하고 실행했는데 다음과 같은 오류가 발생했다.

![image]()

<br>

### 💥오류 발생 원인
- **스크립트 실행 권한이 제한**되어 있기 때문에 발생한 에러이다. **스크립트 실행 권한을 변경**해주어야 한다.
- 실행 권한이 제한 되었는지 확인 방법은 터미널에 ```ExecutionPolicy```를 입력했을 때 ```Restricted```라고 나오면 설정을 변경해 주어야 한다.

![image]()

<br>

### 🔅오류 해결 방법
- 실행 권한을 변경해주기 위해선 ```Windows PowerShell```을 **권리자 권한으로 실행** 하는 것이다.

<br>

> Windows10 PowerShell 권리자 권한으로 실행하는 방법

  ![image]()

- ```Window + X``` 단축키를 누르고 ```Windows PowerShell(관리자)(A)```를 선택하면 **권리자 권한** 으로 실행된다.

<br>

``` get-help Set-ExecutionPolicy ```

- Windows Powershell을 관리자 권한으로 실행해 준 뒤에, 위와 같이 입력하고 Y를 입력한다.

![image]()


<br>

``` Set-ExecutionPolicy RemoteSigned ```

- 위와 같이 입력하고 Y를 입력한다.

![image]()

<br>

- 모두 입력을 했으면 다시 vscode로 가서 ``` yarn -v ```를 입력하고 yarn이 정상적으로 작동하는지 확인한다. 

![image]()






