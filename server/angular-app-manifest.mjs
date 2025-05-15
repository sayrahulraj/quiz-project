
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
    'index.csr.html': {size: 495, hash: '30cc8f90016ee8c94f665402472c58beeb8830dc95fa1c6fd98da60f923527c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '39d24c3aad234f6751b9142ae0a7b1f7ea5343158e7a64bfaa503fcd55e438b5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 3775, hash: '84205c41911bad4152411a68b516a0a6d43b624d3b99794459e8f3a7b6efc6da', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'signup/index.html': {size: 4221, hash: '56a62fb79193e5e4dd9852bcee7eb5c316e454d5d2af9afb560a3f8e06c53f3c', text: () => import('./assets-chunks/signup_index_html.mjs').then(m => m.default)},
    'forgot-password/index.html': {size: 779, hash: '732e05a1127fac18b9a55d79f2dce2d4d2abc7651216513c2104dc49b939dd65', text: () => import('./assets-chunks/forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 761, hash: '05e9fb4c3de728708ac18cc2074af9307dbcfcddd494273c7fc27dfc74b49d6f', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4366, hash: '9582b1fe29a60e9f87ae4fe0c0b4a7e1c880f6aee23cbc229c2a3454f37e899d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'index.html': {size: 778, hash: 'fde9669bcd6120660e703ffd4c0ab1f507af2abc30e1b480ff1dab344e0df7dd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
