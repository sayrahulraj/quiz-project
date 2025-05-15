
export default {
  basePath: 'https://sayrahulraj.github.io/quiz-project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
