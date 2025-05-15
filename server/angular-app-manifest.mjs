
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sayrahulraj.github.io/quiz-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/quiz-project"
  },
  {
    "renderMode": 2,
    "route": "/quiz-project/home"
  },
  {
    "renderMode": 2,
    "route": "/quiz-project/login"
  },
  {
    "renderMode": 2,
    "route": "/quiz-project/signup"
  },
  {
    "renderMode": 2,
    "route": "/quiz-project/forgot-password"
  },
  {
    "renderMode": 2,
    "route": "/quiz-project/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 537, hash: '54945cc29b086d195979d37b29e9e0d8c1c76d628b01eab6a1e60603352b3494', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1050, hash: 'bda4c9e7c4dd79a4a35de2bb24b5c38a2c20106d9dfc6ea277f774a84841d579', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3943, hash: 'a689aa67d7e3d86da85ec7ded28273f85fac3bb1930dbe8b70b424f1ef08596e', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 820, hash: 'ed9bd3c6aec8d11e95ec89f2a44a23d27839742a456c92126bc7d7a19e544cc4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4450, hash: '16cfbf53da1cf2d61fcc4aeac19adee3937b1676f9ed988ac6094a4646c09dc5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 821, hash: '638ea4f15f586f05bd30c44805fedf39c622cdbf62a9f38dace3cd605e6df5a5', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 803, hash: '493407847d0aa137ae57b5d9c6e44688b7474256b5e406b3838928f732793483', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 4305, hash: '2947ab0807dad8f69677a01e075cb00d0dfdb8818f8dbc81d30832643562df0d', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
