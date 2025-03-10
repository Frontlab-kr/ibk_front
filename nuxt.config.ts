// https://nuxt.com/docs/api/configuration/nuxt-config
import { codeInspectorPlugin } from 'code-inspector-plugin';
import { glob } from 'glob';
import { resolve } from 'path';

export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko', // 한국어로 설정
        class: 'ibk',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'Your site description',
        },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    baseURL: '/your-repo-name/',
  },

  target: 'static', // 정적 사이트로 빌드
  generate: {
    fallback: '404.html', // SPA 모드 지원 (GitHub Pages에서 새로고침 문제 해결)
  },
  // app: {
  //   pageTransition: { name: 'page', mode: 'out-in' },
  // },
  primevue: {
    importTheme: { from: '@/assets/themes/theme.js' },
    options: {
      locale: {
        startsWith: '시작',
        contains: '포함',
        notContains: '포함하지 않음',
        endsWith: '끝',
        equals: '같음',
        notEquals: '같지 않음',
        noFilter: '필터 없음',
        lt: '보다 작음',
        lte: '보다 작거나 같음',
        gt: '보다 큼',
        gte: '보다 크거나 같음',
        dateIs: '날짜가 같음',
        dateIsNot: '날짜가 같지 않음',
        dateBefore: '이전 날짜',
        dateAfter: '이후 날짜',
        clear: '지우기',
        apply: '적용',
        matchAll: '모두 일치',
        matchAny: '아무거나 일치',
        addRule: '규칙 추가',
        removeRule: '규칙 제거',
        accept: '확인',
        reject: '취소',
        choose: '선택',
        upload: '업로드',
        cancel: '취소',
        pending: '대기',
        completed: '완료',
        dayNames: [
          '일요일',
          '월요일',
          '화요일',
          '수요일',
          '목요일',
          '금요일',
          '토요일',
        ],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        monthNames: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        monthNamesShort: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        dateFormat: 'yy-mm-dd',
        firstDayOfWeek: 0,
        today: '오늘',
        weekHeader: '주',
        weak: '약함',
        medium: '보통',
        strong: '강함',
        passwordPrompt: '비밀번호를 입력하세요',
        emptyFilterMessage: '검색 결과가 없습니다.',
        emptyMessage: '사용 가능한 옵션이 없습니다.',
        aria: {
          trueLabel: '참',
          falseLabel: '거짓',
          nullLabel: '선택되지 않음',
          star: '1점',
          stars: '{star}점',
          selectAll: '모든 항목 선택',
          unselectAll: '모든 항목 선택 해제',
          close: '닫기',
          previous: '이전',
          next: '다음',
          navigation: '탐색',
          scrollTop: '맨 위로 스크롤',
          moveTop: '맨 위로 이동',
          moveUp: '위로 이동',
          moveDown: '아래로 이동',
          moveBottom: '맨 아래로 이동',
          moveToTarget: '목표로 이동',
          moveToSource: '소스로 이동',
          moveAllToTarget: '모두 목표로 이동',
          moveAllToSource: '모두 소스로 이동',
          pageLabel: '{page}',
          firstPageLabel: '첫 페이지',
          lastPageLabel: '마지막 페이지',
          nextPageLabel: '다음 페이지',
          previousPageLabel: '이전 페이지',
          rowsPerPageLabel: '페이지당 행 수',
          jumpToPageDropdownLabel: '페이지 드롭다운으로 이동',
          jumpToPageInputLabel: '페이지 입력으로 이동',
          selectRow: '행 선택',
          unselectRow: '행 선택 해제',
          expandRow: '행 확장',
          collapseRow: '행 축소',
          showFilterMenu: '필터 메뉴 보기',
          hideFilterMenu: '필터 메뉴 숨기기',
          filterOperator: '필터 연산자',
          filterConstraint: '필터 제약 조건',
          editRow: '행 편집',
          saveEdit: '편집 저장',
          cancelEdit: '편집 취소',
          listView: '리스트 보기',
          gridView: '그리드 보기',
          slide: '슬라이드',
          slideNumber: '{slideNumber}',
          zoomImage: '이미지 확대',
          zoomIn: '확대',
          zoomOut: '축소',
          rotateRight: '오른쪽으로 회전',
          rotateLeft: '왼쪽으로 회전',
        },
      },
    },
  },
  css: [
    'primeflex/primeflex.scss',
    'bootstrap-icons/font/bootstrap-icons.scss',
    '@vuepic/vue-datepicker/dist/main.css',
    '~/assets/scss/_components.scss',
    '~/assets/scss/_dialog.scss',
    '~/assets/scss/_layout.scss',
    '~/assets/scss/_main.scss',
    '~/assets/scss/_page.scss',
    '~/assets/scss/common.scss',
  ],

  experimental: {
    reactivityTransform: true,
    treeshakeClientOnly: true,
  },

  imports: {
    autoImport: true,
    addons: {
      vueTemplate: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    strict: true,
  },
  runtimeConfig: {
    apiSecret: '',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE,
      frontBase: process.env.NUXT_PUBLIC_FRONT_BASE,
      env: process.env.ENV,
      IS_LOCAL: process.env.IS_LOCAL,
    },
  },
  components: [
    '~/components',
    // 아래 와 같은 pattern 도 componet 로 인식해라.
    ...glob.sync('domains/**/components', { cwd: __dirname }).map(
      (dir) => ({
        path: resolve(__dirname, dir),
        extensions: ['vue'],
      }),
      ...glob
        .sync('pages/pub/**/components', { cwd: __dirname })
        .map((dir) => ({
          path: resolve(__dirname, dir),
          extensions: ['vue'],
        }))
    ),
  ],
  build: {
    // 이 폴더도 감시해서 변화를 감지 해라.
    watch: ['domains/**/*'],
    transpile: ['@vuepic/vue-datepicker'],
    filenames: {
      // 개발할 때도 hash 적용하면 생기는 문제들:
      app: '[name].[contenthash].js', // 1. 매번 파일 내용이 변경될 때마다 새로운 hash가 생성됨
      chunk: '[name].[contenthash].js', // 2. HMR(Hot Module Replacement)이 제대로 동작하지 않음
      css: '[name].[contenthash].css', // 3. 디버깅이 어려워짐 (소스맵 추적이 복잡해짐)
    },
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    // "@kevinmarrec/nuxt-pwa",
    '@vueuse/nuxt',
    'nuxt-snackbar',
    '@vue-macros/nuxt',
    '@primevue/nuxt-module',
    'nuxt-swiper',
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  // pwa: {
  //   workbox: {
  //     enabled: false,
  //   },
  // },

  vite: {
    plugins: [codeInspectorPlugin({ bundler: 'vite' })],
    build: {
      sourcemap: process.env.NODE_ENV !== 'production', // Enable source map generation in development mode only
      // 이거 target 을 올려줘야 top-level-await 에러가 build 시 안나옴.
      target: 'ES2022',
      minify: 'terser', // minify 해주는애.
      terserOptions: {
        compress: {
          drop_console: false, // console.* 구문 제거
          drop_debugger: true, // debugger 구문 제거
          dead_code: true, // 사용되지 않는 코드 제거
          unused: true, // 사용되지 않는 변수 제거
        },
        mangle: true, // 변수명 축소
        output: {
          beautify: false, // 압축된 형태로 출력
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        supported: {
          // 이게 돼야 vue-pdf 가 동작함
          'top-level-await': true,
        },
      },
    },
    server: {
      // hmr: {
      //   // protocol: 'ws',
      //   // host: '0.0.0.0',
      //   // host: 'localhost',
      //   // port: 3001,
      // },
      proxy: {
        '/api': {
          target: 'http://localhost:10002',
          changeOrigin: true,
          rewrite: (path) => path.replace('/api', ''),
        },
        '/file': {
          target: 'http://localhost:10002',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/file/, ''),
        },
        '/hrd': {
          target: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:10001',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/hrd/, ''),
        },
      },
    },
    /* */
  },
  plugins: [
    '@/plugins/primevue.js',
    { src: '~/plugins/froala.js', mode: 'client' },
  ],
});
