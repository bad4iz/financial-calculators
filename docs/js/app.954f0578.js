(function(t) {
  function e(e) {
    for (
      var o, s, i = e[0], c = e[1], l = e[2], u = 0, p = [];
      u < i.length;
      u++
    )
      (s = i[u]),
        Object.prototype.hasOwnProperty.call(r, s) && r[s] && p.push(r[s][0]),
        (r[s] = 0);
    for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
    f && f(e);
    while (p.length) p.shift()();
    return a.push.apply(a, l || []), n();
  }
  function n() {
    for (var t, e = 0; e < a.length; e++) {
      for (var n = a[e], o = !0, s = 1; s < n.length; s++) {
        var c = n[s];
        0 !== r[c] && (o = !1);
      }
      o && (a.splice(e--, 1), (t = i((i.s = n[0]))));
    }
    return t;
  }
  var o = {},
    r = { app: 0 },
    a = [];
  function s(t) {
    return (
      i.p +
      'js/' +
      ({ about: 'about' }[t] || t) +
      '.' +
      { about: 'dcf04e73' }[t] +
      '.js'
    );
  }
  function i(e) {
    if (o[e]) return o[e].exports;
    var n = (o[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.e = function(t) {
    var e = [],
      n = r[t];
    if (0 !== n)
      if (n) e.push(n[2]);
      else {
        var o = new Promise(function(e, o) {
          n = r[t] = [e, o];
        });
        e.push((n[2] = o));
        var a,
          c = document.createElement('script');
        (c.charset = 'utf-8'),
          (c.timeout = 120),
          i.nc && c.setAttribute('nonce', i.nc),
          (c.src = s(t));
        var l = new Error();
        a = function(e) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var n = r[t];
          if (0 !== n) {
            if (n) {
              var o = e && ('load' === e.type ? 'missing' : e.type),
                a = e && e.target && e.target.src;
              (l.message =
                'Loading chunk ' + t + ' failed.\n(' + o + ': ' + a + ')'),
                (l.name = 'ChunkLoadError'),
                (l.type = o),
                (l.request = a),
                n[1](l);
            }
            r[t] = void 0;
          }
        };
        var u = setTimeout(function() {
          a({ type: 'timeout', target: c });
        }, 12e4);
        (c.onerror = c.onload = a), document.head.appendChild(c);
      }
    return Promise.all(e);
  }),
    (i.m = t),
    (i.c = o),
    (i.d = function(t, e, n) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (i.r = function(t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (i.t = function(t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          i.d(
            n,
            o,
            function(e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (i.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t['default'];
            }
          : function() {
              return t;
            };
      return i.d(e, 'a', e), e;
    }),
    (i.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = '/'),
    (i.oe = function(t) {
      throw (console.error(t), t);
    });
  var c = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = c.push.bind(c);
  (c.push = e), (c = c.slice());
  for (var u = 0; u < c.length; u++) e(c[u]);
  var f = l;
  a.push([0, 'chunk-vendors']), n();
})({
  0: function(t, e, n) {
    t.exports = n('56d7');
  },
  '56d7': function(t, e, n) {
    'use strict';
    n.r(e);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var o = n('2b0e'),
      r = function() {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          'v-app',
          [
            n(
              'v-app-bar',
              { attrs: { app: '', color: 'primary', dark: '' } },
              [
                n(
                  'div',
                  { staticClass: 'd-flex align-center' },
                  [
                    n('v-img', {
                      staticClass: 'shrink mr-2',
                      attrs: {
                        alt: 'Vuetify Logo',
                        contain: '',
                        src:
                          'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png',
                        transition: 'scale-transition',
                        width: '40',
                      },
                    }),
                    n('v-img', {
                      staticClass: 'shrink mt-1 hidden-sm-and-down',
                      attrs: {
                        alt: 'Vuetify Name',
                        contain: '',
                        'min-width': '100',
                        src:
                          'https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png',
                        width: '100',
                      },
                    }),
                  ],
                  1
                ),
                n('v-spacer'),
                n(
                  'v-btn',
                  {
                    attrs: {
                      href:
                        'https://github.com/vuetifyjs/vuetify/releases/latest',
                      target: '_blank',
                      text: '',
                    },
                  },
                  [
                    n('span', { staticClass: 'mr-2' }, [
                      t._v('Latest Release'),
                    ]),
                    n('v-icon', [t._v('mdi-open-in-new')]),
                  ],
                  1
                ),
              ],
              1
            ),
            n('v-content', [n('HelloWorld')], 1),
          ],
          1
        );
      },
      a = [],
      s = function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o(
          'v-container',
          [
            o(
              'v-row',
              { staticClass: 'text-center' },
              [
                o(
                  'v-col',
                  { attrs: { cols: '12' } },
                  [
                    o('v-img', {
                      staticClass: 'my-3',
                      attrs: { src: n('9b19'), contain: '', height: '200' },
                    }),
                  ],
                  1
                ),
                o('v-col', { staticClass: 'mb-4' }, [
                  o('h1', { staticClass: 'display-2 font-weight-bold mb-3' }, [
                    t._v(' Welcome to Vuetify '),
                  ]),
                  o('p', { staticClass: 'subheading font-weight-regular' }, [
                    t._v(
                      ' For help and collaboration with other Vuetify developers, '
                    ),
                    o('br'),
                    t._v('please join our online '),
                    o(
                      'a',
                      {
                        attrs: {
                          href: 'https://community.vuetifyjs.com',
                          target: '_blank',
                        },
                      },
                      [t._v('Discord Community')]
                    ),
                  ]),
                ]),
                o(
                  'v-col',
                  { staticClass: 'mb-5', attrs: { cols: '12' } },
                  [
                    o('h2', { staticClass: 'headline font-weight-bold mb-3' }, [
                      t._v(" What's next? "),
                    ]),
                    o(
                      'v-row',
                      { attrs: { justify: 'center' } },
                      t._l(t.whatsNext, function(e, n) {
                        return o(
                          'a',
                          {
                            key: n,
                            staticClass: 'subheading mx-3',
                            attrs: { href: e.href, target: '_blank' },
                          },
                          [t._v(' ' + t._s(e.text) + ' ')]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
                o(
                  'v-col',
                  { staticClass: 'mb-5', attrs: { cols: '12' } },
                  [
                    o('h2', { staticClass: 'headline font-weight-bold mb-3' }, [
                      t._v(' Important Links '),
                    ]),
                    o(
                      'v-row',
                      { attrs: { justify: 'center' } },
                      t._l(t.importantLinks, function(e, n) {
                        return o(
                          'a',
                          {
                            key: n,
                            staticClass: 'subheading mx-3',
                            attrs: { href: e.href, target: '_blank' },
                          },
                          [t._v(' ' + t._s(e.text) + ' ')]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
                o(
                  'v-col',
                  { staticClass: 'mb-5', attrs: { cols: '12' } },
                  [
                    o('h2', { staticClass: 'headline font-weight-bold mb-3' }, [
                      t._v(' Ecosystem '),
                    ]),
                    o(
                      'v-row',
                      { attrs: { justify: 'center' } },
                      t._l(t.ecosystem, function(e, n) {
                        return o(
                          'a',
                          {
                            key: n,
                            staticClass: 'subheading mx-3',
                            attrs: { href: e.href, target: '_blank' },
                          },
                          [t._v(' ' + t._s(e.text) + ' ')]
                        );
                      }),
                      0
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      i = [],
      c = {
        name: 'HelloWorld',
        data: function() {
          return {
            ecosystem: [
              {
                text: 'vuetify-loader',
                href: 'https://github.com/vuetifyjs/vuetify-loader',
              },
              { text: 'github', href: 'https://github.com/vuetifyjs/vuetify' },
              {
                text: 'awesome-vuetify',
                href: 'https://github.com/vuetifyjs/awesome-vuetify',
              },
            ],
            importantLinks: [
              { text: 'Documentation', href: 'https://vuetifyjs.com' },
              { text: 'Chat', href: 'https://community.vuetifyjs.com' },
              {
                text: 'Made with Vuetify',
                href: 'https://madewithvuejs.com/vuetify',
              },
              { text: 'Twitter', href: 'https://twitter.com/vuetifyjs' },
              { text: 'Articles', href: 'https://medium.com/vuetify' },
            ],
            whatsNext: [
              {
                text: 'Explore components',
                href: 'https://vuetifyjs.com/components/api-explorer',
              },
              {
                text: 'Select a layout',
                href: 'https://vuetifyjs.com/layout/pre-defined',
              },
              {
                text: 'Frequently Asked Questions',
                href:
                  'https://vuetifyjs.com/getting-started/frequently-asked-questions',
              },
            ],
          };
        },
      },
      l = c,
      u = n('2877'),
      f = n('6544'),
      p = n.n(f),
      d = n('62ad'),
      h = n('a523'),
      m = n('adda'),
      v = n('0fd9'),
      g = Object(u['a'])(l, s, i, !1, null, null, null),
      b = g.exports;
    p()(g, { VCol: d['a'], VContainer: h['a'], VImg: m['a'], VRow: v['a'] });
    var y = {
        name: 'App',
        components: { HelloWorld: b },
        data: function() {
          return {};
        },
      },
      w = y,
      x = n('7496'),
      j = n('40dc'),
      _ = n('8336'),
      k = n('a75b'),
      C = n('132d'),
      V = n('2fa4'),
      O = Object(u['a'])(w, r, a, !1, null, null, null),
      A = O.exports;
    p()(O, {
      VApp: x['a'],
      VAppBar: j['a'],
      VBtn: _['a'],
      VContent: k['a'],
      VIcon: C['a'],
      VImg: m['a'],
      VSpacer: V['a'],
    });
    var E = n('9483');
    Object(E['a'])(''.concat('/', 'service-worker.js'), {
      ready: function() {
        console.log(
          'App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB'
        );
      },
      registered: function() {
        console.log('Service worker has been registered.');
      },
      cached: function() {
        console.log('Content has been cached for offline use.');
      },
      updatefound: function() {
        console.log('New content is downloading.');
      },
      updated: function() {
        console.log('New content is available; please refresh.');
      },
      offline: function() {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      },
      error: function(t) {
        console.error('Error during service worker registration:', t);
      },
    });
    n('d3b7');
    var P = n('8c4f'),
      S = function() {
        var t = this,
          e = t.$createElement,
          o = t._self._c || e;
        return o(
          'div',
          { staticClass: 'home' },
          [
            o('img', { attrs: { alt: 'Vue logo', src: n('cf05') } }),
            o('HelloWorld', { attrs: { msg: 'Welcome to Your Vue.js App' } }),
          ],
          1
        );
      },
      W = [],
      H = { name: 'Home', components: { HelloWorld: b } },
      L = H,
      N = Object(u['a'])(L, S, W, !1, null, null, null),
      T = N.exports;
    o['a'].use(P['a']);
    var q = [
        { path: '/', name: 'Home', component: T },
        {
          path: '/about',
          name: 'About',
          component: function() {
            return n.e('about').then(n.bind(null, 'f820'));
          },
        },
      ],
      M = new P['a']({ mode: 'history', base: '/', routes: q }),
      F = M,
      I = n('2f62');
    o['a'].use(I['a']);
    var $ = new I['a'].Store({
        state: {},
        mutations: {},
        actions: {},
        modules: {},
      }),
      B = n('f309'),
      D = n('2992'),
      J = n.n(D);
    o['a'].use(B['a']);
    var R = new B['a']({ lang: { locales: { ru: J.a }, current: 'ru' } });
    n('d5e8'), n('5363');
    (o['a'].config.productionTip = !1),
      new o['a']({
        router: F,
        store: $,
        vuetify: R,
        render: function(t) {
          return t(A);
        },
      }).$mount('#app');
  },
  '9b19': function(t, e, n) {
    t.exports = n.p + 'img/logo.63a7d78d.svg';
  },
  cf05: function(t, e, n) {
    t.exports = n.p + 'img/logo.82b9c7a5.png';
  },
});
//# sourceMappingURL=app.954f0578.js.map
