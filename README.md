6. 개발 환경 설정
6.1 Next3 Vue3 Composition API 개발 환경 설정 (Mac, Windows 10+)

Mac과 Windows 10 이상에서 Nuxt3와 Vue3 Composition API를 사용하여 개발 환경을 설정하는 방법을 설명합니다. 다음 단계를 따라 환경을 구성합니다.

6.2. 사전 요구 사항
- Mac 또는 Windows 10 이상의 운영 체제
- VSCode 에디터 설치 (https://code.visualstudio.com/)
- Git 설치 (https://git-scm.com/downloads)

6.3 Node.js 설치 (nvm 사용)
6.3.1. nvm 설치:
   - Mac: 터미널에서 다음 명령어를 실행합니다.
     curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   - Windows: nvm-windows 설치 프로그램을 다운로드하여 설치합니다. (https://github.com/coreybutler/nvm-windows/releases)

6.3.2. 터미널을 재시작하거나 `source ~/.bashrc` 명령어를 실행하여 nvm을 활성화합니다.

6.3.3. 다음 명령어를 사용하여 Node.js 18.18.0 버전을 설치합니다.
   nvm install 18.18.0
   nvm use 18.18.0

6.3.4 Yarn 설치
1. 터미널에서 다음 명령어를 실행하여 Yarn을 설치합니다.
   npm install -g yarn

6.3.5 프로젝트 설정
1. 터미널에서 다음 명령어를 실행하여 프로젝트를 클론합니다.
   git clone git@github.com:gamjaradio/ibk_admin_front.git

2. 프로젝트 디렉토리로 이동합니다.
   cd ibk_admin_front

3. VSCode에서 프로젝트를 엽니다.
   code .

4. VSCode의 터미널에서 다음 명령어를 실행하여 종속성을 설치합니다.
   yarn install

5. 개발 서버를 시작합니다.
   yarn dev
  

이제 Nuxt3와 Vue3 Composition API를 사용하여 프로젝트 개발을 시작할 수 있습니다. 브라우저에서 `http://localhost:3000`으로 접속하여 앱을 확인합니다.

### 구조
“도메인 기반” 폴더 구조 또는 “모듈 기반” 로 개발 되었으며, 이 방식은 각 도메인(기능)별로 관련된 파일들을 그룹화하여 관리합니다. 이러한 구조는 특정 도메인과 관련된 모든 것을 한 곳에 모아 관리하기 때문에 유지보수와 확장이 용이합니다.

## api 생성
npm install @openapitools/openapi-generator-cli -g
openapi-generator-cli generate -i http://localhost:10002/v3/api-docs -g typescript-axios -o ./api-client --skip-validate-spec

### api 호출
0. 서버 재기동
1. npm run generate-api 실행
2. controller 가 새로 추가 되었다면 BaseService.ts 에
    - ApiFactoryType 에 api 추가.
    - this.apiFactory  = {} 에 Factory 추가.
    ** BaseService.ts 참고할것.

3. api 호출.
ex) index.vue 참고.
let res = await $request().inqCommonCodeList({ cmcdId: '', comCdNm: '', useYn: 'Y' }); 
const data = $response<Array<CommonCodeOutVo>>(res);
// console.log(data);

if (data.success == true) {
  // console.log(data.response);
}
     