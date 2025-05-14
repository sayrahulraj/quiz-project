
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/signup"
  },
  {
    "renderMode": 2,
    "route": "/forgot-password"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 495, hash: '7ce73a8595bd6f8fe716a115b21bb7a3bf92bbfd577bc9a1f4dcd4e824f6af45', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: 'cc90cff7114890acaf9f6672dfff0286781ae209a9963046dcdee68be4ac652c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 778, hash: '9d1ae3f9d0986f140a39f5689e69e85ca187c17cc633b93df2e93abf32fa3017', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3775, hash: 'e8879bc8f4677642b4685098bbc7a32ed662a07a69466b838f8b8a12215de1af', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4366, hash: 'a65325d4aa10982f39ea0acf849ebd34558355d5364209ab130f629c72441e37', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 4290, hash: '733c5eb70b3c02108c665babd858fc3503732bfc95e88a25b2ef980607708b07', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 761, hash: 'e3ebbe8a69be8f297782051ae74b4e3eec1924ed881cec1ab824ed628b49eba4', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 779, hash: 'dc65778f4ad9bb7b4410afb03f152d8bd811067060620fcbc6f8173e9110ed68', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
