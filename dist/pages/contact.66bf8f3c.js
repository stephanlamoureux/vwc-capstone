!(function (e, t) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('AniJS-RWWD')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function (e, t) {
  var n = (function (t) {
    var n = 'data-anijs',
      r = 'default',
      i = ['do', 'after', 'before', 'to'],
      o = '(\\s+|^)',
      a = '(\\s+|$)',
      l = 'animationend',
      s = 'transitionend'
    t = {
      rootDOMTravelScope: {},
      notifierCollection: {},
      init: function () {
        f._t = {}
        var e = f._a()
        t.registerHelper(r, e),
          (f._u = r),
          (t.rootDOMTravelScope = document),
          (t.Parser = f.Parser),
          (f._v = f._p()),
          (f._w = '')
      },
      setDOMRootTravelScope: function (e) {
        var n,
          r = document
        try {
          'document' === e ? (n = r) : (n = r.querySelector(e)) || (n = r)
        } catch (e) {
          n = r
        }
        t.rootDOMTravelScope = n
      },
      run: function () {
        var e,
          r = {}
        t.purgeAll(), (t.notifierCollection = {})
        for (var i, o = (e = f._o(t.rootDOMTravelScope)).length, a = 0; o > a; a++)
          (i = e[a]), (r = f._n(i.getAttribute(n))), f._c(i, r)
        var l = t.getNotifier('AniJSNotifier')
        l && l.dispatchEvent('onRunFinished')
      },
      createAnimation: function (e, t) {
        var n = t || ''
        f._c(n, e)
      },
      getHelper: function (e) {
        var t = f._t
        return t[e] || t[r]
      },
      registerHelper: function (e, t) {
        f._t[e] = t
      },
      purge: function (e) {
        if (e && '' !== e && ' ' !== e)
          for (var n = document.querySelectorAll(e), r = n.length, i = 0; r > i; i++)
            t.EventSystem.purgeEventTarget(n[i])
      },
      purgeAll: function () {
        t.EventSystem.purgeAll()
      },
      purgeEventTarget: function (e) {
        t.EventSystem.purgeEventTarget(e)
      },
      setClassNamesWhenAnim: function (e) {
        f._w = ' ' + e
      },
      createNotifier: function () {
        return t.EventSystem.createEventTarget()
      },
      registerNotifier: function (e) {
        var n = t.notifierCollection
        return e.id && e.value && t.EventSystem.isEventTarget(e.value)
          ? ((n[e.id] = e.value), 1)
          : ''
      },
      getNotifier: function (e) {
        return t.notifierCollection[e]
      },
    }
    var f = {
      _a: function () {
        return {
          removeAnim: function (e, t) {
            e.target && e.type && t.nodeHelper.removeClass(e.target, t.behavior)
          },
          holdAnimClass: function () {},
          fireOnce: function (e, t) {
            t.eventSystem.removeEventListenerHelper(t.eventTarget, t.event.type, t.listener)
          },
          emit: function (e, n, r) {
            var i = r[0] || null,
              o = ''
            if (null !== i) {
              ;(i = i.split('.')).length > 1 ? ((o = i[0]), (i = i[1])) : ((o = ''), (i = i[0]))
              var a = t.getNotifier(o) || null
              null !== a && a.dispatchEvent(i)
            }
            n.hasRunned || n.run()
          },
        }
      },
      _b: function () {
        return new Parser()
      },
      _c: function (e, t) {
        for (var n, r, i, o, a = t.length, l = 0; a > l; l++)
          (i = (n = t[l]).after),
            (r = n.before),
            (o = n.behavior),
            i && (n.after = f.Parser.parseDoDefinition(i)),
            r && (n.before = f.Parser.parseDoDefinition(r)),
            o && (n.behavior = f.Parser.parseDoDefinition(o)),
            f._d(e, n)
      },
      _d: function (e, n) {
        var r,
          i = f._e(n),
          o = f._f(e, n)
        if ((n.after && f.Util._x(n.after) && (r = n.after[0]), '' !== i))
          for (var a, l = o.length, s = 0; l > s; s++)
            if (((a = o[s]), t.EventSystem.isEventTarget(a))) {
              var v = function (i) {
                var o = f._g(e, n, i),
                  a = f._h(n),
                  l = f._j(e, n),
                  s = f._i(e, n)
                '' !== f._w && (f.Util._x(a) || (a += f._w))
                var u = {
                  behaviorTargetList: o,
                  nodeHelper: f.NodeHelper,
                  animationEndEvent: f._v,
                  behavior: a,
                  after: s,
                  eventSystem: t.EventSystem,
                  eventTarget: i.currentTarget,
                  afterFunctionName: r,
                  dataAniJSOwner: e,
                  listener: v,
                  event: i,
                  before: l,
                }
                new t.AnimationContext(u).runAll(u)
              }
              t.EventSystem.addEventListenerHelper(a, i, v, !1),
                t.EventSystem.registerEventHandle(a, i, v)
            }
      },
      _e: function (e) {
        var t = e.event || ''
        return t === l ? (t = f._p()) : t === s && (t = f._q()), t
      },
      _f: function (n, r) {
        var i,
          o = [n],
          a = t.rootDOMTravelScope
        if (r.eventTarget)
          if ((i = f._notifierHelper(r.eventTarget)).length > 0) o = i
          else if ('document' === r.eventTarget) o = [document]
          else if ('window' === r.eventTarget) o = [e]
          else if (r.eventTarget.split)
            try {
              o = a.querySelectorAll(r.eventTarget)
            } catch (e) {
              o = []
            }
        return o
      },
      _g: function (e, n, r) {
        var i = [e],
          o = t.rootDOMTravelScope,
          a = n.behaviorTarget
        if (a)
          if (f.Util._x(a)) {
            var l = this._y(e, n, a)
            l && f.Util.isFunction(l[0]) && (i = l[0](r, { dataAniJSOwner: e }, f._z(l)))
          } else if ('target' === a && r.currentTarget) i = [r.currentTarget]
          else {
            a = a.split('$').join(',')
            try {
              i = o.querySelectorAll(a)
            } catch (e) {
              i = []
            }
          }
        return i
      },
      _h: function (e) {
        return this._y({}, e, e.behavior)
      },
      _i: function (e, t) {
        var n = t.after
        return f.Util._x(n) ? this._y(e, t, n) : f._k(e, t, n)
      },
      _j: function (e, t) {
        var n = t.before
        return f.Util._x(n) ? this._y(e, t, n) : f._k(e, t, n)
      },
      _y: function (e, t, n) {
        var r,
          i = n || ''
        return f.Util._x(i) && ((r = f._k(e, t, i[0])) ? (i[0] = r) : (i = i.join(' '))), i
      },
      _k: function (e, t, n) {
        var r = n || '',
          i = f._l(t)
        if (r && !f.Util.isFunction(r)) {
          var o = f._t[i]
          r = !(!o || !f.Util.isFunction(o[r])) && o[r]
        }
        return r
      },
      _l: function (e) {
        return e.helper || f._u
      },
      _notifierHelper: function (e) {
        var n = []
        if ((t.notifierCollection, e))
          if (e.id && t.EventSystem.isEventTarget(e.value)) n.push(e.value), t.registerNotifier(e)
          else if (e.split) {
            notifierIDList = e.split('$')
            for (var r, i = notifierIDList.length, o = 1; i > o; o++)
              if ((r = notifierIDList[o]) && ' ' !== r) {
                r = r.trim()
                var a = t.getNotifier(r)
                a ||
                  ((a = t.EventSystem.createEventTarget()),
                  t.registerNotifier({ id: r, value: a })),
                  n.push(a)
              }
          }
        return n
      },
      _z: function (e) {
        for (var t = [], n = e.length; n-- > 1; ) t[n - 1] = e[n]
        return t
      },
      _n: function (e) {
        return f.Parser.parse(e)
      },
      _o: function (e) {
        return e.querySelectorAll('[data-anijs]')
      },
      _p: function () {
        var e = f._r()
        return [l, 'oAnimationEnd', l, 'webkitAnimationEnd'][e]
      },
      _q: function () {
        var e = f._r()
        return [s, 'oTransitionEnd', s, 'webkitTransitionEnd'][e]
      },
      _r: function () {
        for (
          var e = document.createElement('fe'),
            t = 'Animation',
            n = ['animation', 'O' + t, 'Moz' + t, 'webkit' + t],
            r = 0;
          r < n.length;
          r++
        )
          if (void 0 !== e.style[n[r]]) return r
      },
    }
    return (
      (t.AnimationContext = function (e) {
        var n = this
        ;(n.init = function (e) {
          ;(n.behaviorTargetList = e.behaviorTargetList || []),
            (n.nodeHelper = e.nodeHelper),
            (n.animationEndEvent = e.animationEndEvent),
            (n.behavior = e.behavior),
            (n.after = e.after),
            (n.eventSystem = e.eventSystem),
            (n.eventTarget = e.eventTarget),
            (n.afterFunctionName = e.afterFunctionName),
            (n.dataAniJSOwner = e.dataAniJSOwner),
            (n.listener = e.listener),
            (n.event = e.event),
            (n.before = e.before)
        }),
          (n.doDefaultAction = function (e, t) {
            var r,
              i = n,
              o = i.nodeHelper,
              a = i.animationEndEvent,
              l = i.after,
              s = i.afterFunctionName
            i.eventSystem.addEventListenerHelper(e, a, function (e) {
              e.stopPropagation(),
                i.eventSystem.removeEventListenerHelper(e.target, e.type, arguments.callee),
                l && (f.Util.isFunction(l) ? l(e, n) : f.Util._x(l) && l[0](e, n, f._z(l)))
            }),
              'holdAnimClass' !== s &&
                '$holdAnimClass' !== s &&
                ((r = e._ajLastBehavior) && o.removeClass(e, r), (e._ajLastBehavior = t)),
              (e.offsetWidth = e.offsetWidth),
              o.addClass(e, t)
          }),
          (n.doFunctionAction = function (e, t) {
            var r = n.after,
              i = { target: e }
            t[0](i, n, f._z(t)),
              f.Util.isFunction(r) ? r(i, n) : f.Util._x(r) && r[0](i, n, f._z(r))
          }),
          (n.runAll = function () {
            for (
              var e,
                r,
                i = n,
                o = i.behaviorTargetList,
                a = o.length,
                l = (i.behavior, 0),
                s = i.before,
                v = n.event;
              a > l;
              l++
            )
              (r = {
                behaviorTargetList: [o[l]],
                nodeHelper: n.nodeHelper,
                animationEndEvent: n.animationEndEvent,
                behavior: n.behavior,
                after: n.after,
                eventSystem: n.eventSystem,
                eventTarget: n.eventTarget,
                afterFunctionName: n.afterFunctionName,
                dataAniJSOwner: n.dataAniJSOwner,
                listener: n.listener,
                event: v,
              }),
                (e = new t.AnimationContext(r)),
                s ? (f.Util.isFunction(s) ? s(v, e) : f.Util._x(s) && s[0](v, e, f._z(s))) : e.run()
          }),
          (n.run = function () {
            var e = n,
              t = e.behavior,
              r = e.behaviorTargetList[0]
            ;(n.hasRunned = 1), f.Util._x(t) ? e.doFunctionAction(r, t) : e.doDefaultAction(r, t)
          }),
          n.init(e)
      }),
      (f.Parser = {
        parse: function (e) {
          return this.parseDeclaration(e)
        },
        parseDeclaration: function (e) {
          for (var t, n, r = [], i = (t = e.split(';')).length, o = 0; i > o; o++)
            (n = this.parseSentence(t[o])), r.push(n)
          return r
        },
        parseSentence: function (e) {
          for (var t, n, r = {}, i = (t = e.split(',')).length, o = 0; i > o; o++)
            r[(n = this.parseDefinition(t[o])).key] = n.value
          return r
        },
        parseDefinition: function (e) {
          var t,
            n,
            r,
            o = {},
            a = ['behavior', 'after', 'before', 'behaviorTarget']
          if ((t = e.split(':')).length > 1) {
            if (
              ((n = t[0].trim()),
              t.length > 2 ? (r = (r = (r = t.slice(1)).join(':')).trim()) : (r = t[1].trim()),
              (o.value = r),
              'if' === n)
            )
              n = 'event'
            else if ('on' === n) n = 'eventTarget'
            else
              for (var l = i.length - 1; l >= 0; l--)
                n === i[l] &&
                  (('after' !== (n = a[l]) && 'before' !== n) || '$' === r[0] || (r = '$' + r),
                  (r = this.parseDoDefinition(r)))
            ;(o.key = n), (o.value = r)
          }
          return o
        },
        parseDoDefinition: function (e) {
          var t = /^\$(\w+)\s*/g.exec(e),
            n = '',
            r = 1
          if (null !== t) {
            ;(n = t[1]),
              (doDefinitionArray = e.split(t[0])[1]),
              (doDefinitionArray = null !== doDefinitionArray ? doDefinitionArray.split('|') : []),
              ((e = [])[0] = n)
            for (var i = 0; i < doDefinitionArray.length; i++)
              '' !== doDefinitionArray[i] && (e[r++] = doDefinitionArray[i].trim())
            return e
          }
          return e
        },
      }),
      (f.NodeHelper = {
        addClass: function (e, t) {
          t instanceof Array || (t = t.split(' '))
          for (var n = 0, r = t.length; r > n; ++n)
            t[n] &&
              !new RegExp(o + t[n] + a).test(e.className) &&
              (e.className = '' === e.className ? t[n] : e.className.trim() + ' ' + t[n])
        },
        removeClass: function (e, t) {
          t instanceof Array || (t = t.split(' '))
          for (var n = 0, r = t.length; r > n; ++n)
            e.className = e.className.replace(new RegExp(o + t[n] + a), ' ').trim()
        },
        hasClass: function (e, t) {
          return t && new RegExp(o + t + a).test(e.className)
        },
      }),
      (f.Util = {
        isFunction: function (e) {
          return !!(e && e.constructor && e.call && e.apply)
        },
        _x: function (e) {
          return Array.isArray(e)
        },
      }),
      (t.EventSystem = {
        eventCollection: {},
        eventIdCounter: 0,
        isEventTarget: function (e) {
          return e.addEventListener ? 1 : 0
        },
        createEventTarget: function () {
          return new t.EventTarget()
        },
        addEventListenerHelper: function (e, t, n) {
          e.addEventListener(t, n, !1)
        },
        removeEventListenerHelper: function (e, t, n) {
          e && e.removeEventListener(t, n)
        },
        purgeAll: function () {
          for (
            var e, t, n = this.eventCollection, r = Object.keys(n), i = r.length, o = 0;
            i > o;
            o++
          )
            (t = n[(e = r[o])]) &&
              t.handleCollection &&
              t.handleCollection.length > 0 &&
              this.purgeEventTarget(t.handleCollection[0].element),
              delete n[e]
        },
        purgeAllNodes: function (e) {
          var t = e.querySelectorAll('*')
          size = t.length
          for (var n = size - 1; n >= 0; n--) this.purgeEventTarget(t[n])
        },
        purgeEventTarget: function (e) {
          var t,
            n = this,
            r = e._aniJSEventID
          if (r) {
            for (var i, o = (t = n.eventCollection[r].handleCollection).length, a = 0; o > a; a++)
              (i = t[a]), n.removeEventListenerHelper(e, i.eventType, i.listener)
            ;(n.eventCollection[r] = e._aniJSEventID = null),
              delete n.eventCollection[r],
              delete e._aniJSEventID
          }
        },
        registerEventHandle: function (e, t, n) {
          var r = this,
            i = e._aniJSEventID,
            o = r.eventCollection,
            a = { eventType: t, listener: n, element: e }
          if (i) o[i].handleCollection.push(a)
          else {
            var l = { handleCollection: [a] }
            ;(o[++r.eventIdCounter] = l), (e._aniJSEventID = r.eventIdCounter)
          }
        },
      }),
      (t.EventTarget = function () {
        this._listeners = {}
      }),
      (t.EventTarget.prototype = {
        constructor: t.EventTarget,
        addEventListener: function (e, t) {
          var n = this
          void 0 === n._listeners[e] && (n._listeners[e] = []), n._listeners[e].push(t)
        },
        dispatchEvent: function (e) {
          var t = this
          if (('string' == typeof e && (e = { type: e }), e.target || (e.target = t), !e.type))
            throw new Error('error')
          if (this._listeners[e.type] instanceof Array)
            for (var n = t._listeners[e.type], r = 0, i = n.length; i > r; r++) n[r].call(t, e)
        },
        removeEventListener: function (e, t) {
          if (this._listeners[e] instanceof Array)
            for (var n = this._listeners[e], r = 0, i = n.length; i > r; r++)
              if (n[r] === t) {
                n.splice(r, 1)
                break
              }
        },
      }),
      t
    )
  })(n || {})
  return (
    n.init(),
    n.run(),
    'function' == typeof define &&
      define.amd &&
      define('anijs', [], function () {
        return n
      }),
    void 0 === t && (e.AniJS = n),
    n
  )
})
//# sourceMappingURL=contact.66bf8f3c.js.map
