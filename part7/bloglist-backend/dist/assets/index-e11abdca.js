(function () {
    const t = document.createElement('link').relList;
    if (t && t.supports && t.supports('modulepreload')) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
        r(l);
    new MutationObserver((l) => {
        for (const o of l)
            if (o.type === 'childList')
                for (const i of o.addedNodes)
                    i.tagName === 'LINK' && i.rel === 'modulepreload' && r(i);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(l) {
        const o = {};
        return (
            l.integrity && (o.integrity = l.integrity),
            l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
            l.crossOrigin === 'use-credentials'
                ? (o.credentials = 'include')
                : l.crossOrigin === 'anonymous'
                  ? (o.credentials = 'omit')
                  : (o.credentials = 'same-origin'),
            o
        );
    }
    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const o = n(l);
        fetch(l.href, o);
    }
})();
function Lf(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e;
}
var Qs = { exports: {} },
    kl = {},
    Ks = { exports: {} },
    z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sr = Symbol.for('react.element'),
    zf = Symbol.for('react.portal'),
    jf = Symbol.for('react.fragment'),
    Ff = Symbol.for('react.strict_mode'),
    Df = Symbol.for('react.profiler'),
    Af = Symbol.for('react.provider'),
    If = Symbol.for('react.context'),
    Uf = Symbol.for('react.forward_ref'),
    Mf = Symbol.for('react.suspense'),
    Bf = Symbol.for('react.memo'),
    $f = Symbol.for('react.lazy'),
    Cu = Symbol.iterator;
function Hf(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Cu && e[Cu]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var Js = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Xs = Object.assign,
    Ys = {};
function yn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ys),
        (this.updater = n || Js);
}
yn.prototype.isReactComponent = {};
yn.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
yn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Gs() {}
Gs.prototype = yn.prototype;
function ki(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ys),
        (this.updater = n || Js);
}
var Ei = (ki.prototype = new Gs());
Ei.constructor = ki;
Xs(Ei, yn.prototype);
Ei.isPureReactComponent = !0;
var _u = Array.isArray,
    qs = Object.prototype.hasOwnProperty,
    xi = { current: null },
    Zs = { key: !0, ref: !0, __self: !0, __source: !0 };
function bs(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = '' + t.key),
        t))
            qs.call(t, r) && !Zs.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: sr,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: xi.current,
    };
}
function Vf(e, t) {
    return {
        $$typeof: sr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Ci(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === sr;
}
function Wf(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Pu = /\/+/g;
function Kl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? Wf('' + e.key)
        : t.toString(36);
}
function Dr(e, t, n, r, l) {
    var o = typeof e;
    (o === 'undefined' || o === 'boolean') && (e = null);
    var i = !1;
    if (e === null) i = !0;
    else
        switch (o) {
            case 'string':
            case 'number':
                i = !0;
                break;
            case 'object':
                switch (e.$$typeof) {
                    case sr:
                    case zf:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === '' ? '.' + Kl(i, 0) : r),
            _u(l)
                ? ((n = ''),
                  e != null && (n = e.replace(Pu, '$&/') + '/'),
                  Dr(l, t, n, '', function (c) {
                      return c;
                  }))
                : l != null &&
                  (Ci(l) &&
                      (l = Vf(
                          l,
                          n +
                              (!l.key || (i && i.key === l.key)
                                  ? ''
                                  : ('' + l.key).replace(Pu, '$&/') + '/') +
                              e
                      )),
                  t.push(l)),
            1
        );
    if (((i = 0), (r = r === '' ? '.' : r + ':'), _u(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + Kl(o, u);
            i += Dr(o, t, n, s, l);
        }
    else if (((s = Hf(e)), typeof s == 'function'))
        for (e = s.call(e), u = 0; !(o = e.next()).done; )
            (o = o.value), (s = r + Kl(o, u++)), (i += Dr(o, t, n, s, l));
    else if (o === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        );
    return i;
}
function gr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        Dr(e, r, '', '', function (o) {
            return t.call(n, o, l++);
        }),
        r
    );
}
function Qf(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var fe = { current: null },
    Ar = { transition: null },
    Kf = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Ar,
        ReactCurrentOwner: xi,
    };
z.Children = {
    map: gr,
    forEach: function (e, t, n) {
        gr(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            gr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            gr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ci(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            );
        return e;
    },
};
z.Component = yn;
z.Fragment = jf;
z.Profiler = Df;
z.PureComponent = ki;
z.StrictMode = Ff;
z.Suspense = Mf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kf;
z.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        );
    var r = Xs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = xi.current)),
            t.key !== void 0 && (l = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in t)
            qs.call(t, s) &&
                !Zs.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
        r.children = u;
    }
    return { $$typeof: sr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
    return (
        (e = {
            $$typeof: If,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Af, _context: e }),
        (e.Consumer = e)
    );
};
z.createElement = bs;
z.createFactory = function (e) {
    var t = bs.bind(null, e);
    return (t.type = e), t;
};
z.createRef = function () {
    return { current: null };
};
z.forwardRef = function (e) {
    return { $$typeof: Uf, render: e };
};
z.isValidElement = Ci;
z.lazy = function (e) {
    return { $$typeof: $f, _payload: { _status: -1, _result: e }, _init: Qf };
};
z.memo = function (e, t) {
    return { $$typeof: Bf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
    var t = Ar.transition;
    Ar.transition = {};
    try {
        e();
    } finally {
        Ar.transition = t;
    }
};
z.unstable_act = function () {
    throw Error('act(...) is not supported in production builds of React.');
};
z.useCallback = function (e, t) {
    return fe.current.useCallback(e, t);
};
z.useContext = function (e) {
    return fe.current.useContext(e);
};
z.useDebugValue = function () {};
z.useDeferredValue = function (e) {
    return fe.current.useDeferredValue(e);
};
z.useEffect = function (e, t) {
    return fe.current.useEffect(e, t);
};
z.useId = function () {
    return fe.current.useId();
};
z.useImperativeHandle = function (e, t, n) {
    return fe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function (e, t) {
    return fe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function (e, t) {
    return fe.current.useLayoutEffect(e, t);
};
z.useMemo = function (e, t) {
    return fe.current.useMemo(e, t);
};
z.useReducer = function (e, t, n) {
    return fe.current.useReducer(e, t, n);
};
z.useRef = function (e) {
    return fe.current.useRef(e);
};
z.useState = function (e) {
    return fe.current.useState(e);
};
z.useSyncExternalStore = function (e, t, n) {
    return fe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function () {
    return fe.current.useTransition();
};
z.version = '18.2.0';
Ks.exports = z;
var ne = Ks.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jf = ne,
    Xf = Symbol.for('react.element'),
    Yf = Symbol.for('react.fragment'),
    Gf = Object.prototype.hasOwnProperty,
    qf =
        Jf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Zf = { key: !0, ref: !0, __self: !0, __source: !0 };
function ea(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    n !== void 0 && (o = '' + n),
        t.key !== void 0 && (o = '' + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) Gf.call(t, r) && !Zf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Xf,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: qf.current,
    };
}
kl.Fragment = Yf;
kl.jsx = ea;
kl.jsxs = ea;
Qs.exports = kl;
var R = Qs.exports,
    xo = {},
    ta = { exports: {} },
    Ee = {},
    na = { exports: {} },
    ra = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(_, O) {
        var L = _.length;
        _.push(O);
        e: for (; 0 < L; ) {
            var K = (L - 1) >>> 1,
                Z = _[K];
            if (0 < l(Z, O)) (_[K] = O), (_[L] = Z), (L = K);
            else break e;
        }
    }
    function n(_) {
        return _.length === 0 ? null : _[0];
    }
    function r(_) {
        if (_.length === 0) return null;
        var O = _[0],
            L = _.pop();
        if (L !== O) {
            _[0] = L;
            e: for (var K = 0, Z = _.length, yr = Z >>> 1; K < yr; ) {
                var _t = 2 * (K + 1) - 1,
                    Ql = _[_t],
                    Pt = _t + 1,
                    vr = _[Pt];
                if (0 > l(Ql, L))
                    Pt < Z && 0 > l(vr, Ql)
                        ? ((_[K] = vr), (_[Pt] = L), (K = Pt))
                        : ((_[K] = Ql), (_[_t] = L), (K = _t));
                else if (Pt < Z && 0 > l(vr, L))
                    (_[K] = vr), (_[Pt] = L), (K = Pt);
                else break e;
            }
        }
        return O;
    }
    function l(_, O) {
        var L = _.sortIndex - O.sortIndex;
        return L !== 0 ? L : _.id - O.id;
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var o = performance;
        e.unstable_now = function () {
            return o.now();
        };
    } else {
        var i = Date,
            u = i.now();
        e.unstable_now = function () {
            return i.now() - u;
        };
    }
    var s = [],
        c = [],
        h = 1,
        f = null,
        m = 3,
        k = !1,
        y = !1,
        v = !1,
        T = typeof setTimeout == 'function' ? setTimeout : null,
        p = typeof clearTimeout == 'function' ? clearTimeout : null,
        a = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function d(_) {
        for (var O = n(c); O !== null; ) {
            if (O.callback === null) r(c);
            else if (O.startTime <= _)
                r(c), (O.sortIndex = O.expirationTime), t(s, O);
            else break;
            O = n(c);
        }
    }
    function w(_) {
        if (((v = !1), d(_), !y))
            if (n(s) !== null) (y = !0), Vl(E);
            else {
                var O = n(c);
                O !== null && Wl(w, O.startTime - _);
            }
    }
    function E(_, O) {
        (y = !1), v && ((v = !1), p(N), (N = -1)), (k = !0);
        var L = m;
        try {
            for (
                d(O), f = n(s);
                f !== null && (!(f.expirationTime > O) || (_ && !Le()));

            ) {
                var K = f.callback;
                if (typeof K == 'function') {
                    (f.callback = null), (m = f.priorityLevel);
                    var Z = K(f.expirationTime <= O);
                    (O = e.unstable_now()),
                        typeof Z == 'function'
                            ? (f.callback = Z)
                            : f === n(s) && r(s),
                        d(O);
                } else r(s);
                f = n(s);
            }
            if (f !== null) var yr = !0;
            else {
                var _t = n(c);
                _t !== null && Wl(w, _t.startTime - O), (yr = !1);
            }
            return yr;
        } finally {
            (f = null), (m = L), (k = !1);
        }
    }
    var C = !1,
        P = null,
        N = -1,
        Q = 5,
        j = -1;
    function Le() {
        return !(e.unstable_now() - j < Q);
    }
    function Sn() {
        if (P !== null) {
            var _ = e.unstable_now();
            j = _;
            var O = !0;
            try {
                O = P(!0, _);
            } finally {
                O ? kn() : ((C = !1), (P = null));
            }
        } else C = !1;
    }
    var kn;
    if (typeof a == 'function')
        kn = function () {
            a(Sn);
        };
    else if (typeof MessageChannel < 'u') {
        var xu = new MessageChannel(),
            Of = xu.port2;
        (xu.port1.onmessage = Sn),
            (kn = function () {
                Of.postMessage(null);
            });
    } else
        kn = function () {
            T(Sn, 0);
        };
    function Vl(_) {
        (P = _), C || ((C = !0), kn());
    }
    function Wl(_, O) {
        N = T(function () {
            _(e.unstable_now());
        }, O);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (_) {
            _.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || k || ((y = !0), Vl(E));
        }),
        (e.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (Q = 0 < _ ? Math.floor(1e3 / _) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (_) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var O = 3;
                    break;
                default:
                    O = m;
            }
            var L = m;
            m = O;
            try {
                return _();
            } finally {
                m = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (_, O) {
            switch (_) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    _ = 3;
            }
            var L = m;
            m = _;
            try {
                return O();
            } finally {
                m = L;
            }
        }),
        (e.unstable_scheduleCallback = function (_, O, L) {
            var K = e.unstable_now();
            switch (
                (typeof L == 'object' && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == 'number' && 0 < L ? K + L : K))
                    : (L = K),
                _)
            ) {
                case 1:
                    var Z = -1;
                    break;
                case 2:
                    Z = 250;
                    break;
                case 5:
                    Z = 1073741823;
                    break;
                case 4:
                    Z = 1e4;
                    break;
                default:
                    Z = 5e3;
            }
            return (
                (Z = L + Z),
                (_ = {
                    id: h++,
                    callback: O,
                    priorityLevel: _,
                    startTime: L,
                    expirationTime: Z,
                    sortIndex: -1,
                }),
                L > K
                    ? ((_.sortIndex = L),
                      t(c, _),
                      n(s) === null &&
                          _ === n(c) &&
                          (v ? (p(N), (N = -1)) : (v = !0), Wl(w, L - K)))
                    : ((_.sortIndex = Z), t(s, _), y || k || ((y = !0), Vl(E))),
                _
            );
        }),
        (e.unstable_shouldYield = Le),
        (e.unstable_wrapCallback = function (_) {
            var O = m;
            return function () {
                var L = m;
                m = O;
                try {
                    return _.apply(this, arguments);
                } finally {
                    m = L;
                }
            };
        });
})(ra);
na.exports = ra;
var bf = na.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var la = ne,
    ke = bf;
function S(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n]);
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    );
}
var oa = new Set(),
    Wn = {};
function Bt(e, t) {
    sn(e, t), sn(e + 'Capture', t);
}
function sn(e, t) {
    for (Wn[e] = t, e = 0; e < t.length; e++) oa.add(t[e]);
}
var Ze = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Co = Object.prototype.hasOwnProperty,
    ed =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Nu = {},
    Tu = {};
function td(e) {
    return Co.call(Tu, e)
        ? !0
        : Co.call(Nu, e)
          ? !1
          : ed.test(e)
            ? (Tu[e] = !0)
            : ((Nu[e] = !0), !1);
}
function nd(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0;
        case 'boolean':
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)),
                    e !== 'data-' && e !== 'aria-');
        default:
            return !1;
    }
}
function rd(e, t, n, r) {
    if (t === null || typeof t > 'u' || nd(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function de(e, t, n, r, l, o, i) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = l),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = o),
        (this.removeEmptyString = i);
}
var le = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        le[e] = new de(e, 0, !1, e, null, !1, !1);
    });
[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0];
    le[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    le[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    le[e] = new de(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        le[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    le[e] = new de(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
    le[e] = new de(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
    le[e] = new de(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
    le[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var _i = /[\-:]([a-z])/g;
function Pi(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(_i, Pi);
        le[t] = new de(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(_i, Pi);
        le[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(_i, Pi);
    le[t] = new de(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
    le[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new de(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
    le[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Ni(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (rd(t, n, l, r) && (n = null),
        r || l === null
            ? td(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : l.mustUseProperty
              ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
              : ((t = l.attributeName),
                (r = l.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((l = l.type),
                      (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    wr = Symbol.for('react.element'),
    Vt = Symbol.for('react.portal'),
    Wt = Symbol.for('react.fragment'),
    Ti = Symbol.for('react.strict_mode'),
    _o = Symbol.for('react.profiler'),
    ia = Symbol.for('react.provider'),
    ua = Symbol.for('react.context'),
    Ri = Symbol.for('react.forward_ref'),
    Po = Symbol.for('react.suspense'),
    No = Symbol.for('react.suspense_list'),
    Oi = Symbol.for('react.memo'),
    it = Symbol.for('react.lazy'),
    sa = Symbol.for('react.offscreen'),
    Ru = Symbol.iterator;
function En(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Ru && e[Ru]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var V = Object.assign,
    Jl;
function Ln(e) {
    if (Jl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Jl = (t && t[1]) || '';
        }
    return (
        `
` +
        Jl +
        e
    );
}
var Xl = !1;
function Yl(e, t) {
    if (!e || Xl) return '';
    Xl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == 'string') {
            for (
                var l = c.stack.split(`
`),
                    o = r.stack.split(`
`),
                    i = l.length - 1,
                    u = o.length - 1;
                1 <= i && 0 <= u && l[i] !== o[u];

            )
                u--;
            for (; 1 <= i && 0 <= u; i--, u--)
                if (l[i] !== o[u]) {
                    if (i !== 1 || u !== 1)
                        do
                            if ((i--, u--, 0 > u || l[i] !== o[u])) {
                                var s =
                                    `
` + l[i].replace(' at new ', ' at ');
                                return (
                                    e.displayName &&
                                        s.includes('<anonymous>') &&
                                        (s = s.replace(
                                            '<anonymous>',
                                            e.displayName
                                        )),
                                    s
                                );
                            }
                        while (1 <= i && 0 <= u);
                    break;
                }
        }
    } finally {
        (Xl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? Ln(e) : '';
}
function ld(e) {
    switch (e.tag) {
        case 5:
            return Ln(e.type);
        case 16:
            return Ln('Lazy');
        case 13:
            return Ln('Suspense');
        case 19:
            return Ln('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Yl(e.type, !1)), e;
        case 11:
            return (e = Yl(e.type.render, !1)), e;
        case 1:
            return (e = Yl(e.type, !0)), e;
        default:
            return '';
    }
}
function To(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case Wt:
            return 'Fragment';
        case Vt:
            return 'Portal';
        case _o:
            return 'Profiler';
        case Ti:
            return 'StrictMode';
        case Po:
            return 'Suspense';
        case No:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case ua:
                return (e.displayName || 'Context') + '.Consumer';
            case ia:
                return (e._context.displayName || 'Context') + '.Provider';
            case Ri:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case Oi:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : To(e.type) || 'Memo'
                );
            case it:
                (t = e._payload), (e = e._init);
                try {
                    return To(e(t));
                } catch {}
        }
    return null;
}
function od(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return 'Cache';
        case 9:
            return (t.displayName || 'Context') + '.Consumer';
        case 10:
            return (t._context.displayName || 'Context') + '.Provider';
        case 18:
            return 'DehydratedFragment';
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName ||
                    (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            );
        case 7:
            return 'Fragment';
        case 5:
            return t;
        case 4:
            return 'Portal';
        case 3:
            return 'Root';
        case 6:
            return 'Text';
        case 16:
            return To(t);
        case 8:
            return t === Ti ? 'StrictMode' : 'Mode';
        case 22:
            return 'Offscreen';
        case 12:
            return 'Profiler';
        case 21:
            return 'Scope';
        case 13:
            return 'Suspense';
        case 19:
            return 'SuspenseList';
        case 25:
            return 'TracingMarker';
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null;
            if (typeof t == 'string') return t;
    }
    return null;
}
function St(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e;
        case 'object':
            return e;
        default:
            return '';
    }
}
function aa(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    );
}
function id(e) {
    var t = aa(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t];
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var l = n.get,
            o = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return l.call(this);
                },
                set: function (i) {
                    (r = '' + i), o.call(this, i);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (i) {
                    r = '' + i;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Sr(e) {
    e._valueTracker || (e._valueTracker = id(e));
}
function ca(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (
        e && (r = aa(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Gr(e) {
    if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
        return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function Ro(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Ou(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = St(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        });
}
function fa(e, t) {
    (t = t.checked), t != null && Ni(e, 'checked', t, !1);
}
function Oo(e, t) {
    fa(e, t);
    var n = St(t.value),
        r = t.type;
    if (n != null)
        r === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n);
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value');
        return;
    }
    t.hasOwnProperty('value')
        ? Lo(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Lo(e, t.type, St(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Lu(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type;
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return;
        (t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
    }
    (n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n);
}
function Lo(e, t, n) {
    (t !== 'number' || Gr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zn = Array.isArray;
function tn(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + St(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function zo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function zu(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(S(92));
            if (zn(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: St(n) };
}
function da(e, t) {
    var n = St(t.value),
        r = St(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r);
}
function ju(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t);
}
function pa(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function jo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? pa(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var kr,
    ha = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, l) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, l);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t;
        else {
            for (
                kr = kr || document.createElement('div'),
                    kr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = kr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Qn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Dn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    ud = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Dn).forEach(function (e) {
    ud.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dn[t] = Dn[e]);
    });
});
function ma(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
            typeof t != 'number' ||
            t === 0 ||
            (Dn.hasOwnProperty(e) && Dn[e])
          ? ('' + t).trim()
          : t + 'px';
}
function ya(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                l = ma(n, t[n], r);
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var sd = V(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function Fo(e, t) {
    if (t) {
        if (sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(S(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(S(60));
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(S(61));
        }
        if (t.style != null && typeof t.style != 'object') throw Error(S(62));
    }
}
function Do(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string';
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1;
        default:
            return !0;
    }
}
var Ao = null;
function Li(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Io = null,
    nn = null,
    rn = null;
function Fu(e) {
    if ((e = fr(e))) {
        if (typeof Io != 'function') throw Error(S(280));
        var t = e.stateNode;
        t && ((t = Pl(t)), Io(e.stateNode, e.type, t));
    }
}
function va(e) {
    nn ? (rn ? rn.push(e) : (rn = [e])) : (nn = e);
}
function ga() {
    if (nn) {
        var e = nn,
            t = rn;
        if (((rn = nn = null), Fu(e), t))
            for (e = 0; e < t.length; e++) Fu(t[e]);
    }
}
function wa(e, t) {
    return e(t);
}
function Sa() {}
var Gl = !1;
function ka(e, t, n) {
    if (Gl) return e(t, n);
    Gl = !0;
    try {
        return wa(e, t, n);
    } finally {
        (Gl = !1), (nn !== null || rn !== null) && (Sa(), ga());
    }
}
function Kn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Pl(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            (r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != 'function') throw Error(S(231, t, typeof n));
    return n;
}
var Uo = !1;
if (Ze)
    try {
        var xn = {};
        Object.defineProperty(xn, 'passive', {
            get: function () {
                Uo = !0;
            },
        }),
            window.addEventListener('test', xn, xn),
            window.removeEventListener('test', xn, xn);
    } catch {
        Uo = !1;
    }
function ad(e, t, n, r, l, o, i, u, s) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (h) {
        this.onError(h);
    }
}
var An = !1,
    qr = null,
    Zr = !1,
    Mo = null,
    cd = {
        onError: function (e) {
            (An = !0), (qr = e);
        },
    };
function fd(e, t, n, r, l, o, i, u, s) {
    (An = !1), (qr = null), ad.apply(cd, arguments);
}
function dd(e, t, n, r, l, o, i, u, s) {
    if ((fd.apply(this, arguments), An)) {
        if (An) {
            var c = qr;
            (An = !1), (qr = null);
        } else throw Error(S(198));
        Zr || ((Zr = !0), (Mo = c));
    }
}
function $t(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Ea(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated;
    }
    return null;
}
function Du(e) {
    if ($t(e) !== e) throw Error(S(188));
}
function pd(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = $t(e)), t === null)) throw Error(S(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var l = n.return;
        if (l === null) break;
        var o = l.alternate;
        if (o === null) {
            if (((r = l.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (l.child === o.child) {
            for (o = l.child; o; ) {
                if (o === n) return Du(l), e;
                if (o === r) return Du(l), t;
                o = o.sibling;
            }
            throw Error(S(188));
        }
        if (n.return !== r.return) (n = l), (r = o);
        else {
            for (var i = !1, u = l.child; u; ) {
                if (u === n) {
                    (i = !0), (n = l), (r = o);
                    break;
                }
                if (u === r) {
                    (i = !0), (r = l), (n = o);
                    break;
                }
                u = u.sibling;
            }
            if (!i) {
                for (u = o.child; u; ) {
                    if (u === n) {
                        (i = !0), (n = o), (r = l);
                        break;
                    }
                    if (u === r) {
                        (i = !0), (r = o), (n = l);
                        break;
                    }
                    u = u.sibling;
                }
                if (!i) throw Error(S(189));
            }
        }
        if (n.alternate !== r) throw Error(S(190));
    }
    if (n.tag !== 3) throw Error(S(188));
    return n.stateNode.current === n ? e : t;
}
function xa(e) {
    return (e = pd(e)), e !== null ? Ca(e) : null;
}
function Ca(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Ca(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var _a = ke.unstable_scheduleCallback,
    Au = ke.unstable_cancelCallback,
    hd = ke.unstable_shouldYield,
    md = ke.unstable_requestPaint,
    J = ke.unstable_now,
    yd = ke.unstable_getCurrentPriorityLevel,
    zi = ke.unstable_ImmediatePriority,
    Pa = ke.unstable_UserBlockingPriority,
    br = ke.unstable_NormalPriority,
    vd = ke.unstable_LowPriority,
    Na = ke.unstable_IdlePriority,
    El = null,
    Ve = null;
function gd(e) {
    if (Ve && typeof Ve.onCommitFiberRoot == 'function')
        try {
            Ve.onCommitFiberRoot(
                El,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var Ae = Math.clz32 ? Math.clz32 : kd,
    wd = Math.log,
    Sd = Math.LN2;
function kd(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((wd(e) / Sd) | 0)) | 0;
}
var Er = 64,
    xr = 4194304;
function jn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function el(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? (r = jn(u)) : ((o &= i), o !== 0 && (r = jn(o)));
    } else (i = n & ~l), i !== 0 ? (r = jn(i)) : o !== 0 && (r = jn(o));
    if (r === 0) return 0;
    if (
        t !== 0 &&
        t !== r &&
        !(t & l) &&
        ((l = r & -r),
        (o = t & -t),
        l >= o || (l === 16 && (o & 4194240) !== 0))
    )
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Ae(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function Ed(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function xd(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - Ae(o),
            u = 1 << i,
            s = l[i];
        s === -1
            ? (!(u & n) || u & r) && (l[i] = Ed(u, t))
            : s <= t && (e.expiredLanes |= u),
            (o &= ~u);
    }
}
function Bo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function Ta() {
    var e = Er;
    return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function ql(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function ar(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Ae(t)),
        (e[t] = n);
}
function Cd(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var l = 31 - Ae(n),
            o = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
}
function ji(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - Ae(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var A = 0;
function Ra(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Oa,
    Fi,
    La,
    za,
    ja,
    $o = !1,
    Cr = [],
    dt = null,
    pt = null,
    ht = null,
    Jn = new Map(),
    Xn = new Map(),
    st = [],
    _d =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Iu(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            dt = null;
            break;
        case 'dragenter':
        case 'dragleave':
            pt = null;
            break;
        case 'mouseover':
        case 'mouseout':
            ht = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Jn.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Xn.delete(t.pointerId);
    }
}
function Cn(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          t !== null && ((t = fr(t)), t !== null && Fi(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function Pd(e, t, n, r, l) {
    switch (t) {
        case 'focusin':
            return (dt = Cn(dt, e, t, n, r, l)), !0;
        case 'dragenter':
            return (pt = Cn(pt, e, t, n, r, l)), !0;
        case 'mouseover':
            return (ht = Cn(ht, e, t, n, r, l)), !0;
        case 'pointerover':
            var o = l.pointerId;
            return Jn.set(o, Cn(Jn.get(o) || null, e, t, n, r, l)), !0;
        case 'gotpointercapture':
            return (
                (o = l.pointerId),
                Xn.set(o, Cn(Xn.get(o) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function Fa(e) {
    var t = Ot(e.target);
    if (t !== null) {
        var n = $t(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Ea(n)), t !== null)) {
                    (e.blockedOn = t),
                        ja(e.priority, function () {
                            La(n);
                        });
                    return;
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function Ir(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ho(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Ao = r), n.target.dispatchEvent(r), (Ao = null);
        } else return (t = fr(n)), t !== null && Fi(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Uu(e, t, n) {
    Ir(e) && n.delete(t);
}
function Nd() {
    ($o = !1),
        dt !== null && Ir(dt) && (dt = null),
        pt !== null && Ir(pt) && (pt = null),
        ht !== null && Ir(ht) && (ht = null),
        Jn.forEach(Uu),
        Xn.forEach(Uu);
}
function _n(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        $o ||
            (($o = !0),
            ke.unstable_scheduleCallback(ke.unstable_NormalPriority, Nd)));
}
function Yn(e) {
    function t(l) {
        return _n(l, e);
    }
    if (0 < Cr.length) {
        _n(Cr[0], e);
        for (var n = 1; n < Cr.length; n++) {
            var r = Cr[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        dt !== null && _n(dt, e),
            pt !== null && _n(pt, e),
            ht !== null && _n(ht, e),
            Jn.forEach(t),
            Xn.forEach(t),
            n = 0;
        n < st.length;
        n++
    )
        (r = st[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < st.length && ((n = st[0]), n.blockedOn === null); )
        Fa(n), n.blockedOn === null && st.shift();
}
var ln = nt.ReactCurrentBatchConfig,
    tl = !0;
function Td(e, t, n, r) {
    var l = A,
        o = ln.transition;
    ln.transition = null;
    try {
        (A = 1), Di(e, t, n, r);
    } finally {
        (A = l), (ln.transition = o);
    }
}
function Rd(e, t, n, r) {
    var l = A,
        o = ln.transition;
    ln.transition = null;
    try {
        (A = 4), Di(e, t, n, r);
    } finally {
        (A = l), (ln.transition = o);
    }
}
function Di(e, t, n, r) {
    if (tl) {
        var l = Ho(e, t, n, r);
        if (l === null) uo(e, t, r, nl, n), Iu(e, r);
        else if (Pd(l, e, t, n, r)) r.stopPropagation();
        else if ((Iu(e, r), t & 4 && -1 < _d.indexOf(e))) {
            for (; l !== null; ) {
                var o = fr(l);
                if (
                    (o !== null && Oa(o),
                    (o = Ho(e, t, n, r)),
                    o === null && uo(e, t, r, nl, n),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else uo(e, t, r, null, n);
    }
}
var nl = null;
function Ho(e, t, n, r) {
    if (((nl = null), (e = Li(r)), (e = Ot(e)), e !== null))
        if (((t = $t(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Ea(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (nl = e), null;
}
function Da(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1;
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4;
        case 'message':
            switch (yd()) {
                case zi:
                    return 1;
                case Pa:
                    return 4;
                case br:
                case vd:
                    return 16;
                case Na:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var ct = null,
    Ai = null,
    Ur = null;
function Aa() {
    if (Ur) return Ur;
    var e,
        t = Ai,
        n = t.length,
        r,
        l = 'value' in ct ? ct.value : ct.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Ur = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Mr(e) {
    var t = e.keyCode;
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function _r() {
    return !0;
}
function Mu() {
    return !1;
}
function xe(e) {
    function t(n, r, l, o, i) {
        (this._reactName = n),
            (this._targetInst = l),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = i),
            (this.currentTarget = null);
        for (var u in e)
            e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
        return (
            (this.isDefaultPrevented = (
                o.defaultPrevented != null
                    ? o.defaultPrevented
                    : o.returnValue === !1
            )
                ? _r
                : Mu),
            (this.isPropagationStopped = Mu),
            this
        );
    }
    return (
        V(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = _r));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = _r));
            },
            persist: function () {},
            isPersistent: _r,
        }),
        t
    );
}
var vn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ii = xe(vn),
    cr = V({}, vn, { view: 0, detail: 0 }),
    Od = xe(cr),
    Zl,
    bl,
    Pn,
    xl = V({}, cr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Ui,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== Pn &&
                      (Pn && e.type === 'mousemove'
                          ? ((Zl = e.screenX - Pn.screenX),
                            (bl = e.screenY - Pn.screenY))
                          : (bl = Zl = 0),
                      (Pn = e)),
                  Zl);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : bl;
        },
    }),
    Bu = xe(xl),
    Ld = V({}, xl, { dataTransfer: 0 }),
    zd = xe(Ld),
    jd = V({}, cr, { relatedTarget: 0 }),
    eo = xe(jd),
    Fd = V({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Dd = xe(Fd),
    Ad = V({}, vn, {
        clipboardData: function (e) {
            return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Id = xe(Ad),
    Ud = V({}, vn, { data: 0 }),
    $u = xe(Ud),
    Md = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    Bd = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    $d = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };
function Hd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = $d[e])
          ? !!t[e]
          : !1;
}
function Ui() {
    return Hd;
}
var Vd = V({}, cr, {
        key: function (e) {
            if (e.key) {
                var t = Md[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = Mr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                  ? Bd[e.keyCode] || 'Unidentified'
                  : '';
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Ui,
        charCode: function (e) {
            return e.type === 'keypress' ? Mr(e) : 0;
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === 'keypress'
                ? Mr(e)
                : e.type === 'keydown' || e.type === 'keyup'
                  ? e.keyCode
                  : 0;
        },
    }),
    Wd = xe(Vd),
    Qd = V({}, xl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    Hu = xe(Qd),
    Kd = V({}, cr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Ui,
    }),
    Jd = xe(Kd),
    Xd = V({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yd = xe(Xd),
    Gd = V({}, xl, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                  ? -e.wheelDeltaX
                  : 0;
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                  ? -e.wheelDeltaY
                  : 'wheelDelta' in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    qd = xe(Gd),
    Zd = [9, 13, 27, 32],
    Mi = Ze && 'CompositionEvent' in window,
    In = null;
Ze && 'documentMode' in document && (In = document.documentMode);
var bd = Ze && 'TextEvent' in window && !In,
    Ia = Ze && (!Mi || (In && 8 < In && 11 >= In)),
    Vu = String.fromCharCode(32),
    Wu = !1;
function Ua(e, t) {
    switch (e) {
        case 'keyup':
            return Zd.indexOf(t.keyCode) !== -1;
        case 'keydown':
            return t.keyCode !== 229;
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0;
        default:
            return !1;
    }
}
function Ma(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Qt = !1;
function ep(e, t) {
    switch (e) {
        case 'compositionend':
            return Ma(t);
        case 'keypress':
            return t.which !== 32 ? null : ((Wu = !0), Vu);
        case 'textInput':
            return (e = t.data), e === Vu && Wu ? null : e;
        default:
            return null;
    }
}
function tp(e, t) {
    if (Qt)
        return e === 'compositionend' || (!Mi && Ua(e, t))
            ? ((e = Aa()), (Ur = Ai = ct = null), (Qt = !1), e)
            : null;
    switch (e) {
        case 'paste':
            return null;
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case 'compositionend':
            return Ia && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var np = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function Qu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!np[e.type] : t === 'textarea';
}
function Ba(e, t, n, r) {
    va(r),
        (t = rl(t, 'onChange')),
        0 < t.length &&
            ((n = new Ii('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Un = null,
    Gn = null;
function rp(e) {
    qa(e, 0);
}
function Cl(e) {
    var t = Xt(e);
    if (ca(t)) return e;
}
function lp(e, t) {
    if (e === 'change') return t;
}
var $a = !1;
if (Ze) {
    var to;
    if (Ze) {
        var no = 'oninput' in document;
        if (!no) {
            var Ku = document.createElement('div');
            Ku.setAttribute('oninput', 'return;'),
                (no = typeof Ku.oninput == 'function');
        }
        to = no;
    } else to = !1;
    $a = to && (!document.documentMode || 9 < document.documentMode);
}
function Ju() {
    Un && (Un.detachEvent('onpropertychange', Ha), (Gn = Un = null));
}
function Ha(e) {
    if (e.propertyName === 'value' && Cl(Gn)) {
        var t = [];
        Ba(t, Gn, e, Li(e)), ka(rp, t);
    }
}
function op(e, t, n) {
    e === 'focusin'
        ? (Ju(), (Un = t), (Gn = n), Un.attachEvent('onpropertychange', Ha))
        : e === 'focusout' && Ju();
}
function ip(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return Cl(Gn);
}
function up(e, t) {
    if (e === 'click') return Cl(t);
}
function sp(e, t) {
    if (e === 'input' || e === 'change') return Cl(t);
}
function ap(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == 'function' ? Object.is : ap;
function qn(e, t) {
    if (Ue(e, t)) return !0;
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!Co.call(t, l) || !Ue(e[l], t[l])) return !1;
    }
    return !0;
}
function Xu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Yu(e, t) {
    var n = Xu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = Xu(n);
    }
}
function Va(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Va(e, t.parentNode)
                : 'contains' in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function Wa() {
    for (var e = window, t = Gr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Gr(e.document);
    }
    return t;
}
function Bi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    );
}
function cp(e) {
    var t = Wa(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Va(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Bi(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length));
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection();
                var l = n.textContent.length,
                    o = Math.min(r.start, l);
                (r = r.end === void 0 ? o : Math.min(r.end, l)),
                    !e.extend && o > r && ((l = r), (r = o), (o = l)),
                    (l = Yu(n, o));
                var i = Yu(n, r);
                l &&
                    i &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== l.node ||
                        e.anchorOffset !== l.offset ||
                        e.focusNode !== i.node ||
                        e.focusOffset !== i.offset) &&
                    ((t = t.createRange()),
                    t.setStart(l.node, l.offset),
                    e.removeAllRanges(),
                    o > r
                        ? (e.addRange(t), e.extend(i.node, i.offset))
                        : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
    }
}
var fp = Ze && 'documentMode' in document && 11 >= document.documentMode,
    Kt = null,
    Vo = null,
    Mn = null,
    Wo = !1;
function Gu(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wo ||
        Kt == null ||
        Kt !== Gr(r) ||
        ((r = Kt),
        'selectionStart' in r && Bi(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (Mn && qn(Mn, r)) ||
            ((Mn = r),
            (r = rl(Vo, 'onSelect')),
            0 < r.length &&
                ((t = new Ii('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Kt))));
}
function Pr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var Jt = {
        animationend: Pr('Animation', 'AnimationEnd'),
        animationiteration: Pr('Animation', 'AnimationIteration'),
        animationstart: Pr('Animation', 'AnimationStart'),
        transitionend: Pr('Transition', 'TransitionEnd'),
    },
    ro = {},
    Qa = {};
Ze &&
    ((Qa = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Jt.animationend.animation,
        delete Jt.animationiteration.animation,
        delete Jt.animationstart.animation),
    'TransitionEvent' in window || delete Jt.transitionend.transition);
function _l(e) {
    if (ro[e]) return ro[e];
    if (!Jt[e]) return e;
    var t = Jt[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Qa) return (ro[e] = t[n]);
    return e;
}
var Ka = _l('animationend'),
    Ja = _l('animationiteration'),
    Xa = _l('animationstart'),
    Ya = _l('transitionend'),
    Ga = new Map(),
    qu =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function Et(e, t) {
    Ga.set(e, t), Bt(t, [e]);
}
for (var lo = 0; lo < qu.length; lo++) {
    var oo = qu[lo],
        dp = oo.toLowerCase(),
        pp = oo[0].toUpperCase() + oo.slice(1);
    Et(dp, 'on' + pp);
}
Et(Ka, 'onAnimationEnd');
Et(Ja, 'onAnimationIteration');
Et(Xa, 'onAnimationStart');
Et('dblclick', 'onDoubleClick');
Et('focusin', 'onFocus');
Et('focusout', 'onBlur');
Et(Ya, 'onTransitionEnd');
sn('onMouseEnter', ['mouseout', 'mouseover']);
sn('onMouseLeave', ['mouseout', 'mouseover']);
sn('onPointerEnter', ['pointerout', 'pointerover']);
sn('onPointerLeave', ['pointerout', 'pointerover']);
Bt(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
);
Bt(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
Bt('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Bt(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Bt(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Bt(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Fn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    hp = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Fn)
    );
function Zu(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), dd(r, t, void 0, e), (e.currentTarget = null);
}
function qa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var o = void 0;
            if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                    var u = r[i],
                        s = u.instance,
                        c = u.currentTarget;
                    if (((u = u.listener), s !== o && l.isPropagationStopped()))
                        break e;
                    Zu(l, u, c), (o = s);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                        (s = u.instance),
                        (c = u.currentTarget),
                        (u = u.listener),
                        s !== o && l.isPropagationStopped())
                    )
                        break e;
                    Zu(l, u, c), (o = s);
                }
        }
    }
    if (Zr) throw ((e = Mo), (Zr = !1), (Mo = null), e);
}
function U(e, t) {
    var n = t[Yo];
    n === void 0 && (n = t[Yo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Za(t, e, 2, !1), n.add(r));
}
function io(e, t, n) {
    var r = 0;
    t && (r |= 4), Za(n, e, r, t);
}
var Nr = '_reactListening' + Math.random().toString(36).slice(2);
function Zn(e) {
    if (!e[Nr]) {
        (e[Nr] = !0),
            oa.forEach(function (n) {
                n !== 'selectionchange' &&
                    (hp.has(n) || io(n, !1, e), io(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Nr] || ((t[Nr] = !0), io('selectionchange', !1, t));
    }
}
function Za(e, t, n, r) {
    switch (Da(t)) {
        case 1:
            var l = Td;
            break;
        case 4:
            l = Rd;
            break;
        default:
            l = Di;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Uo ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (l = !0),
        r
            ? l !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
            : l !== void 0
              ? e.addEventListener(t, n, { passive: l })
              : e.addEventListener(t, n, !1);
}
function uo(e, t, n, r, l) {
    var o = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var i = r.tag;
            if (i === 3 || i === 4) {
                var u = r.stateNode.containerInfo;
                if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
                if (i === 4)
                    for (i = r.return; i !== null; ) {
                        var s = i.tag;
                        if (
                            (s === 3 || s === 4) &&
                            ((s = i.stateNode.containerInfo),
                            s === l || (s.nodeType === 8 && s.parentNode === l))
                        )
                            return;
                        i = i.return;
                    }
                for (; u !== null; ) {
                    if (((i = Ot(u)), i === null)) return;
                    if (((s = i.tag), s === 5 || s === 6)) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    ka(function () {
        var c = o,
            h = Li(n),
            f = [];
        e: {
            var m = Ga.get(e);
            if (m !== void 0) {
                var k = Ii,
                    y = e;
                switch (e) {
                    case 'keypress':
                        if (Mr(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        k = Wd;
                        break;
                    case 'focusin':
                        (y = 'focus'), (k = eo);
                        break;
                    case 'focusout':
                        (y = 'blur'), (k = eo);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        k = eo;
                        break;
                    case 'click':
                        if (n.button === 2) break e;
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        k = Bu;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        k = zd;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        k = Jd;
                        break;
                    case Ka:
                    case Ja:
                    case Xa:
                        k = Dd;
                        break;
                    case Ya:
                        k = Yd;
                        break;
                    case 'scroll':
                        k = Od;
                        break;
                    case 'wheel':
                        k = qd;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        k = Id;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        k = Hu;
                }
                var v = (t & 4) !== 0,
                    T = !v && e === 'scroll',
                    p = v ? (m !== null ? m + 'Capture' : null) : m;
                v = [];
                for (var a = c, d; a !== null; ) {
                    d = a;
                    var w = d.stateNode;
                    if (
                        (d.tag === 5 &&
                            w !== null &&
                            ((d = w),
                            p !== null &&
                                ((w = Kn(a, p)),
                                w != null && v.push(bn(a, w, d)))),
                        T)
                    )
                        break;
                    a = a.return;
                }
                0 < v.length &&
                    ((m = new k(m, y, null, n, h)),
                    f.push({ event: m, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === 'mouseover' || e === 'pointerover'),
                    (k = e === 'mouseout' || e === 'pointerout'),
                    m &&
                        n !== Ao &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Ot(y) || y[be]))
                )
                    break e;
                if (
                    (k || m) &&
                    ((m =
                        h.window === h
                            ? h
                            : (m = h.ownerDocument)
                              ? m.defaultView || m.parentWindow
                              : window),
                    k
                        ? ((y = n.relatedTarget || n.toElement),
                          (k = c),
                          (y = y ? Ot(y) : null),
                          y !== null &&
                              ((T = $t(y)),
                              y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((k = null), (y = c)),
                    k !== y)
                ) {
                    if (
                        ((v = Bu),
                        (w = 'onMouseLeave'),
                        (p = 'onMouseEnter'),
                        (a = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((v = Hu),
                            (w = 'onPointerLeave'),
                            (p = 'onPointerEnter'),
                            (a = 'pointer')),
                        (T = k == null ? m : Xt(k)),
                        (d = y == null ? m : Xt(y)),
                        (m = new v(w, a + 'leave', k, n, h)),
                        (m.target = T),
                        (m.relatedTarget = d),
                        (w = null),
                        Ot(h) === c &&
                            ((v = new v(p, a + 'enter', y, n, h)),
                            (v.target = d),
                            (v.relatedTarget = T),
                            (w = v)),
                        (T = w),
                        k && y)
                    )
                        t: {
                            for (v = k, p = y, a = 0, d = v; d; d = Ht(d)) a++;
                            for (d = 0, w = p; w; w = Ht(w)) d++;
                            for (; 0 < a - d; ) (v = Ht(v)), a--;
                            for (; 0 < d - a; ) (p = Ht(p)), d--;
                            for (; a--; ) {
                                if (
                                    v === p ||
                                    (p !== null && v === p.alternate)
                                )
                                    break t;
                                (v = Ht(v)), (p = Ht(p));
                            }
                            v = null;
                        }
                    else v = null;
                    k !== null && bu(f, m, k, v, !1),
                        y !== null && T !== null && bu(f, T, y, v, !0);
                }
            }
            e: {
                if (
                    ((m = c ? Xt(c) : window),
                    (k = m.nodeName && m.nodeName.toLowerCase()),
                    k === 'select' || (k === 'input' && m.type === 'file'))
                )
                    var E = lp;
                else if (Qu(m))
                    if ($a) E = sp;
                    else {
                        E = ip;
                        var C = op;
                    }
                else
                    (k = m.nodeName) &&
                        k.toLowerCase() === 'input' &&
                        (m.type === 'checkbox' || m.type === 'radio') &&
                        (E = up);
                if (E && (E = E(e, c))) {
                    Ba(f, E, n, h);
                    break e;
                }
                C && C(e, m, c),
                    e === 'focusout' &&
                        (C = m._wrapperState) &&
                        C.controlled &&
                        m.type === 'number' &&
                        Lo(m, 'number', m.value);
            }
            switch (((C = c ? Xt(c) : window), e)) {
                case 'focusin':
                    (Qu(C) || C.contentEditable === 'true') &&
                        ((Kt = C), (Vo = c), (Mn = null));
                    break;
                case 'focusout':
                    Mn = Vo = Kt = null;
                    break;
                case 'mousedown':
                    Wo = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Wo = !1), Gu(f, n, h);
                    break;
                case 'selectionchange':
                    if (fp) break;
                case 'keydown':
                case 'keyup':
                    Gu(f, n, h);
            }
            var P;
            if (Mi)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var N = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            N = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            N = 'onCompositionUpdate';
                            break e;
                    }
                    N = void 0;
                }
            else
                Qt
                    ? Ua(e, n) && (N = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (N = 'onCompositionStart');
            N &&
                (Ia &&
                    n.locale !== 'ko' &&
                    (Qt || N !== 'onCompositionStart'
                        ? N === 'onCompositionEnd' && Qt && (P = Aa())
                        : ((ct = h),
                          (Ai = 'value' in ct ? ct.value : ct.textContent),
                          (Qt = !0))),
                (C = rl(c, N)),
                0 < C.length &&
                    ((N = new $u(N, e, null, n, h)),
                    f.push({ event: N, listeners: C }),
                    P
                        ? (N.data = P)
                        : ((P = Ma(n)), P !== null && (N.data = P)))),
                (P = bd ? ep(e, n) : tp(e, n)) &&
                    ((c = rl(c, 'onBeforeInput')),
                    0 < c.length &&
                        ((h = new $u(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            h
                        )),
                        f.push({ event: h, listeners: c }),
                        (h.data = P)));
        }
        qa(f, t);
    });
}
function bn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Kn(e, n)),
            o != null && r.unshift(bn(e, o, l)),
            (o = Kn(e, t)),
            o != null && r.push(bn(e, o, l))),
            (e = e.return);
    }
    return r;
}
function Ht(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function bu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            c = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            c !== null &&
            ((u = c),
            l
                ? ((s = Kn(n, o)), s != null && i.unshift(bn(n, s, u)))
                : l || ((s = Kn(n, o)), s != null && i.push(bn(n, s, u)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var mp = /\r\n?/g,
    yp = /\u0000|\uFFFD/g;
function es(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            mp,
            `
`
        )
        .replace(yp, '');
}
function Tr(e, t, n) {
    if (((t = es(t)), es(e) !== t && n)) throw Error(S(425));
}
function ll() {}
var Qo = null,
    Ko = null;
function Jo(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Xo = typeof setTimeout == 'function' ? setTimeout : void 0,
    vp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    ts = typeof Promise == 'function' ? Promise : void 0,
    gp =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof ts < 'u'
              ? function (e) {
                    return ts.resolve(null).then(e).catch(wp);
                }
              : Xo;
function wp(e) {
    setTimeout(function () {
        throw e;
    });
}
function so(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(l), Yn(t);
                    return;
                }
                r--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
        n = l;
    } while (n);
    Yn(t);
}
function mt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
            if (t === '/$') return null;
        }
    }
    return e;
}
function ns(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e;
                t--;
            } else n === '/$' && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var gn = Math.random().toString(36).slice(2),
    $e = '__reactFiber$' + gn,
    er = '__reactProps$' + gn,
    be = '__reactContainer$' + gn,
    Yo = '__reactEvents$' + gn,
    Sp = '__reactListeners$' + gn,
    kp = '__reactHandles$' + gn;
function Ot(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[be] || n[$e])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = ns(e); e !== null; ) {
                    if ((n = e[$e])) return n;
                    e = ns(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function fr(e) {
    return (
        (e = e[$e] || e[be]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Xt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
}
function Pl(e) {
    return e[er] || null;
}
var Go = [],
    Yt = -1;
function xt(e) {
    return { current: e };
}
function M(e) {
    0 > Yt || ((e.current = Go[Yt]), (Go[Yt] = null), Yt--);
}
function I(e, t) {
    Yt++, (Go[Yt] = e.current), (e.current = t);
}
var kt = {},
    se = xt(kt),
    me = xt(!1),
    Dt = kt;
function an(e, t) {
    var n = e.type.contextTypes;
    if (!n) return kt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        o;
    for (o in n) l[o] = t[o];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        l
    );
}
function ye(e) {
    return (e = e.childContextTypes), e != null;
}
function ol() {
    M(me), M(se);
}
function rs(e, t, n) {
    if (se.current !== kt) throw Error(S(168));
    I(se, t), I(me, n);
}
function ba(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, od(e) || 'Unknown', l));
    return V({}, n, r);
}
function il(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            kt),
        (Dt = se.current),
        I(se, e),
        I(me, me.current),
        !0
    );
}
function ls(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n
        ? ((e = ba(e, t, Dt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          M(me),
          M(se),
          I(se, e))
        : M(me),
        I(me, n);
}
var Je = null,
    Nl = !1,
    ao = !1;
function ec(e) {
    Je === null ? (Je = [e]) : Je.push(e);
}
function Ep(e) {
    (Nl = !0), ec(e);
}
function Ct() {
    if (!ao && Je !== null) {
        ao = !0;
        var e = 0,
            t = A;
        try {
            var n = Je;
            for (A = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Je = null), (Nl = !1);
        } catch (l) {
            throw (Je !== null && (Je = Je.slice(e + 1)), _a(zi, Ct), l);
        } finally {
            (A = t), (ao = !1);
        }
    }
    return null;
}
var Gt = [],
    qt = 0,
    ul = null,
    sl = 0,
    Ce = [],
    _e = 0,
    At = null,
    Xe = 1,
    Ye = '';
function Tt(e, t) {
    (Gt[qt++] = sl), (Gt[qt++] = ul), (ul = e), (sl = t);
}
function tc(e, t, n) {
    (Ce[_e++] = Xe), (Ce[_e++] = Ye), (Ce[_e++] = At), (At = e);
    var r = Xe;
    e = Ye;
    var l = 32 - Ae(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - Ae(t) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (Xe = (1 << (32 - Ae(t) + l)) | (n << l) | r),
            (Ye = o + e);
    } else (Xe = (1 << o) | (n << l) | r), (Ye = e);
}
function $i(e) {
    e.return !== null && (Tt(e, 1), tc(e, 1, 0));
}
function Hi(e) {
    for (; e === ul; )
        (ul = Gt[--qt]), (Gt[qt] = null), (sl = Gt[--qt]), (Gt[qt] = null);
    for (; e === At; )
        (At = Ce[--_e]),
            (Ce[_e] = null),
            (Ye = Ce[--_e]),
            (Ce[_e] = null),
            (Xe = Ce[--_e]),
            (Ce[_e] = null);
}
var Se = null,
    we = null,
    B = !1,
    De = null;
function nc(e, t) {
    var n = Pe(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function os(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (Se = e), (we = mt(t.firstChild)), !0)
                    : !1
            );
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (Se = e), (we = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = At !== null ? { id: Xe, overflow: Ye } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Pe(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (Se = e),
                      (we = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function qo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Zo(e) {
    if (B) {
        var t = we;
        if (t) {
            var n = t;
            if (!os(e, t)) {
                if (qo(e)) throw Error(S(418));
                t = mt(n.nextSibling);
                var r = Se;
                t && os(e, t)
                    ? nc(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e));
            }
        } else {
            if (qo(e)) throw Error(S(418));
            (e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e);
        }
    }
}
function is(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Se = e;
}
function Rr(e) {
    if (e !== Se) return !1;
    if (!B) return is(e), (B = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !Jo(e.type, e.memoizedProps))),
        t && (t = we))
    ) {
        if (qo(e)) throw (rc(), Error(S(418)));
        for (; t; ) nc(e, t), (t = mt(t.nextSibling));
    }
    if ((is(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(S(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            we = mt(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            we = null;
        }
    } else we = Se ? mt(e.stateNode.nextSibling) : null;
    return !0;
}
function rc() {
    for (var e = we; e; ) e = mt(e.nextSibling);
}
function cn() {
    (we = Se = null), (B = !1);
}
function Vi(e) {
    De === null ? (De = [e]) : De.push(e);
}
var xp = nt.ReactCurrentBatchConfig;
function je(e, t) {
    if (e && e.defaultProps) {
        (t = V({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var al = xt(null),
    cl = null,
    Zt = null,
    Wi = null;
function Qi() {
    Wi = Zt = cl = null;
}
function Ki(e) {
    var t = al.current;
    M(al), (e._currentValue = t);
}
function bo(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function on(e, t) {
    (cl = e),
        (Wi = Zt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
    var t = e._currentValue;
    if (Wi !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Zt === null)) {
            if (cl === null) throw Error(S(308));
            (Zt = e), (cl.dependencies = { lanes: 0, firstContext: e });
        } else Zt = Zt.next = e;
    return t;
}
var Lt = null;
function Ji(e) {
    Lt === null ? (Lt = [e]) : Lt.push(e);
}
function lc(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), Ji(t)) : ((n.next = l.next), (l.next = n)),
        (t.interleaved = n),
        et(e, r)
    );
}
function et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var ut = !1;
function Xi(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function oc(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function Ge(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    };
}
function yt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), D & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            et(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), Ji(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        et(e, n)
    );
}
function Br(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n);
    }
}
function us(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var l = null,
            o = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var i = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (l = o = t) : (o = o.next = t);
        } else l = o = t;
        (n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: o,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t);
}
function fl(e, t, n, r) {
    var l = e.updateQueue;
    ut = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            c = s.next;
        (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (u = h.lastBaseUpdate),
            u !== i &&
                (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
                (h.lastBaseUpdate = s)));
    }
    if (o !== null) {
        var f = l.baseState;
        (i = 0), (h = c = s = null), (u = o);
        do {
            var m = u.lane,
                k = u.eventTime;
            if ((r & m) === m) {
                h !== null &&
                    (h = h.next =
                        {
                            eventTime: k,
                            lane: 0,
                            tag: u.tag,
                            payload: u.payload,
                            callback: u.callback,
                            next: null,
                        });
                e: {
                    var y = e,
                        v = u;
                    switch (((m = t), (k = n), v.tag)) {
                        case 1:
                            if (((y = v.payload), typeof y == 'function')) {
                                f = y.call(k, f, m);
                                break e;
                            }
                            f = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = v.payload),
                                (m =
                                    typeof y == 'function'
                                        ? y.call(k, f, m)
                                        : y),
                                m == null)
                            )
                                break e;
                            f = V({}, f, m);
                            break e;
                        case 2:
                            ut = !0;
                    }
                }
                u.callback !== null &&
                    u.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = l.effects),
                    m === null ? (l.effects = [u]) : m.push(u));
            } else
                (k = {
                    eventTime: k,
                    lane: m,
                    tag: u.tag,
                    payload: u.payload,
                    callback: u.callback,
                    next: null,
                }),
                    h === null ? ((c = h = k), (s = f)) : (h = h.next = k),
                    (i |= m);
            if (((u = u.next), u === null)) {
                if (((u = l.shared.pending), u === null)) break;
                (m = u),
                    (u = m.next),
                    (m.next = null),
                    (l.lastBaseUpdate = m),
                    (l.shared.pending = null);
            }
        } while (1);
        if (
            (h === null && (s = f),
            (l.baseState = s),
            (l.firstBaseUpdate = c),
            (l.lastBaseUpdate = h),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (i |= l.lane), (l = l.next);
            while (l !== t);
        } else o === null && (l.shared.lanes = 0);
        (Ut |= i), (e.lanes = i), (e.memoizedState = f);
    }
}
function ss(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (((r.callback = null), (r = n), typeof l != 'function'))
                    throw Error(S(191, l));
                l.call(r);
            }
        }
}
var ic = new la.Component().refs;
function ei(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : V({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Tl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? $t(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = gt(e),
            o = Ge(r, l);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = yt(e, o, l)),
            t !== null && (Ie(t, e, l, r), Br(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = gt(e),
            o = Ge(r, l);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = yt(e, o, l)),
            t !== null && (Ie(t, e, l, r), Br(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ce(),
            r = gt(e),
            l = Ge(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = yt(e, l, r)),
            t !== null && (Ie(t, e, r, n), Br(t, e, r));
    },
};
function as(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !qn(n, r) || !qn(l, o)
              : !0
    );
}
function uc(e, t, n) {
    var r = !1,
        l = kt,
        o = t.contextType;
    return (
        typeof o == 'object' && o !== null
            ? (o = Re(o))
            : ((l = ye(t) ? Dt : se.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? an(e, l) : kt)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Tl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function cs(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
}
function ti(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = ic), Xi(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
        ? (l.context = Re(o))
        : ((o = ye(t) ? Dt : se.current), (l.context = an(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (ei(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof l.getSnapshotBeforeUpdate == 'function' ||
            (typeof l.UNSAFE_componentWillMount != 'function' &&
                typeof l.componentWillMount != 'function') ||
            ((t = l.state),
            typeof l.componentWillMount == 'function' && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == 'function' &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Tl.enqueueReplaceState(l, l.state, null),
            fl(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Nn(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(S(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(S(147, e));
            var l = r,
                o = '' + e;
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === o
                ? t.ref
                : ((t = function (i) {
                      var u = l.refs;
                      u === ic && (u = l.refs = {}),
                          i === null ? delete u[o] : (u[o] = i);
                  }),
                  (t._stringRef = o),
                  t);
        }
        if (typeof e != 'string') throw Error(S(284));
        if (!n._owner) throw Error(S(290, e));
    }
    return e;
}
function Or(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            S(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e
            )
        ))
    );
}
function fs(e) {
    var t = e._init;
    return t(e._payload);
}
function sc(e) {
    function t(p, a) {
        if (e) {
            var d = p.deletions;
            d === null ? ((p.deletions = [a]), (p.flags |= 16)) : d.push(a);
        }
    }
    function n(p, a) {
        if (!e) return null;
        for (; a !== null; ) t(p, a), (a = a.sibling);
        return null;
    }
    function r(p, a) {
        for (p = new Map(); a !== null; )
            a.key !== null ? p.set(a.key, a) : p.set(a.index, a),
                (a = a.sibling);
        return p;
    }
    function l(p, a) {
        return (p = wt(p, a)), (p.index = 0), (p.sibling = null), p;
    }
    function o(p, a, d) {
        return (
            (p.index = d),
            e
                ? ((d = p.alternate),
                  d !== null
                      ? ((d = d.index), d < a ? ((p.flags |= 2), a) : d)
                      : ((p.flags |= 2), a))
                : ((p.flags |= 1048576), a)
        );
    }
    function i(p) {
        return e && p.alternate === null && (p.flags |= 2), p;
    }
    function u(p, a, d, w) {
        return a === null || a.tag !== 6
            ? ((a = vo(d, p.mode, w)), (a.return = p), a)
            : ((a = l(a, d)), (a.return = p), a);
    }
    function s(p, a, d, w) {
        var E = d.type;
        return E === Wt
            ? h(p, a, d.props.children, w, d.key)
            : a !== null &&
                (a.elementType === E ||
                    (typeof E == 'object' &&
                        E !== null &&
                        E.$$typeof === it &&
                        fs(E) === a.type))
              ? ((w = l(a, d.props)), (w.ref = Nn(p, a, d)), (w.return = p), w)
              : ((w = Kr(d.type, d.key, d.props, null, p.mode, w)),
                (w.ref = Nn(p, a, d)),
                (w.return = p),
                w);
    }
    function c(p, a, d, w) {
        return a === null ||
            a.tag !== 4 ||
            a.stateNode.containerInfo !== d.containerInfo ||
            a.stateNode.implementation !== d.implementation
            ? ((a = go(d, p.mode, w)), (a.return = p), a)
            : ((a = l(a, d.children || [])), (a.return = p), a);
    }
    function h(p, a, d, w, E) {
        return a === null || a.tag !== 7
            ? ((a = Ft(d, p.mode, w, E)), (a.return = p), a)
            : ((a = l(a, d)), (a.return = p), a);
    }
    function f(p, a, d) {
        if ((typeof a == 'string' && a !== '') || typeof a == 'number')
            return (a = vo('' + a, p.mode, d)), (a.return = p), a;
        if (typeof a == 'object' && a !== null) {
            switch (a.$$typeof) {
                case wr:
                    return (
                        (d = Kr(a.type, a.key, a.props, null, p.mode, d)),
                        (d.ref = Nn(p, null, a)),
                        (d.return = p),
                        d
                    );
                case Vt:
                    return (a = go(a, p.mode, d)), (a.return = p), a;
                case it:
                    var w = a._init;
                    return f(p, w(a._payload), d);
            }
            if (zn(a) || En(a))
                return (a = Ft(a, p.mode, d, null)), (a.return = p), a;
            Or(p, a);
        }
        return null;
    }
    function m(p, a, d, w) {
        var E = a !== null ? a.key : null;
        if ((typeof d == 'string' && d !== '') || typeof d == 'number')
            return E !== null ? null : u(p, a, '' + d, w);
        if (typeof d == 'object' && d !== null) {
            switch (d.$$typeof) {
                case wr:
                    return d.key === E ? s(p, a, d, w) : null;
                case Vt:
                    return d.key === E ? c(p, a, d, w) : null;
                case it:
                    return (E = d._init), m(p, a, E(d._payload), w);
            }
            if (zn(d) || En(d)) return E !== null ? null : h(p, a, d, w, null);
            Or(p, d);
        }
        return null;
    }
    function k(p, a, d, w, E) {
        if ((typeof w == 'string' && w !== '') || typeof w == 'number')
            return (p = p.get(d) || null), u(a, p, '' + w, E);
        if (typeof w == 'object' && w !== null) {
            switch (w.$$typeof) {
                case wr:
                    return (
                        (p = p.get(w.key === null ? d : w.key) || null),
                        s(a, p, w, E)
                    );
                case Vt:
                    return (
                        (p = p.get(w.key === null ? d : w.key) || null),
                        c(a, p, w, E)
                    );
                case it:
                    var C = w._init;
                    return k(p, a, d, C(w._payload), E);
            }
            if (zn(w) || En(w))
                return (p = p.get(d) || null), h(a, p, w, E, null);
            Or(a, w);
        }
        return null;
    }
    function y(p, a, d, w) {
        for (
            var E = null, C = null, P = a, N = (a = 0), Q = null;
            P !== null && N < d.length;
            N++
        ) {
            P.index > N ? ((Q = P), (P = null)) : (Q = P.sibling);
            var j = m(p, P, d[N], w);
            if (j === null) {
                P === null && (P = Q);
                break;
            }
            e && P && j.alternate === null && t(p, P),
                (a = o(j, a, N)),
                C === null ? (E = j) : (C.sibling = j),
                (C = j),
                (P = Q);
        }
        if (N === d.length) return n(p, P), B && Tt(p, N), E;
        if (P === null) {
            for (; N < d.length; N++)
                (P = f(p, d[N], w)),
                    P !== null &&
                        ((a = o(P, a, N)),
                        C === null ? (E = P) : (C.sibling = P),
                        (C = P));
            return B && Tt(p, N), E;
        }
        for (P = r(p, P); N < d.length; N++)
            (Q = k(P, p, N, d[N], w)),
                Q !== null &&
                    (e &&
                        Q.alternate !== null &&
                        P.delete(Q.key === null ? N : Q.key),
                    (a = o(Q, a, N)),
                    C === null ? (E = Q) : (C.sibling = Q),
                    (C = Q));
        return (
            e &&
                P.forEach(function (Le) {
                    return t(p, Le);
                }),
            B && Tt(p, N),
            E
        );
    }
    function v(p, a, d, w) {
        var E = En(d);
        if (typeof E != 'function') throw Error(S(150));
        if (((d = E.call(d)), d == null)) throw Error(S(151));
        for (
            var C = (E = null), P = a, N = (a = 0), Q = null, j = d.next();
            P !== null && !j.done;
            N++, j = d.next()
        ) {
            P.index > N ? ((Q = P), (P = null)) : (Q = P.sibling);
            var Le = m(p, P, j.value, w);
            if (Le === null) {
                P === null && (P = Q);
                break;
            }
            e && P && Le.alternate === null && t(p, P),
                (a = o(Le, a, N)),
                C === null ? (E = Le) : (C.sibling = Le),
                (C = Le),
                (P = Q);
        }
        if (j.done) return n(p, P), B && Tt(p, N), E;
        if (P === null) {
            for (; !j.done; N++, j = d.next())
                (j = f(p, j.value, w)),
                    j !== null &&
                        ((a = o(j, a, N)),
                        C === null ? (E = j) : (C.sibling = j),
                        (C = j));
            return B && Tt(p, N), E;
        }
        for (P = r(p, P); !j.done; N++, j = d.next())
            (j = k(P, p, N, j.value, w)),
                j !== null &&
                    (e &&
                        j.alternate !== null &&
                        P.delete(j.key === null ? N : j.key),
                    (a = o(j, a, N)),
                    C === null ? (E = j) : (C.sibling = j),
                    (C = j));
        return (
            e &&
                P.forEach(function (Sn) {
                    return t(p, Sn);
                }),
            B && Tt(p, N),
            E
        );
    }
    function T(p, a, d, w) {
        if (
            (typeof d == 'object' &&
                d !== null &&
                d.type === Wt &&
                d.key === null &&
                (d = d.props.children),
            typeof d == 'object' && d !== null)
        ) {
            switch (d.$$typeof) {
                case wr:
                    e: {
                        for (var E = d.key, C = a; C !== null; ) {
                            if (C.key === E) {
                                if (((E = d.type), E === Wt)) {
                                    if (C.tag === 7) {
                                        n(p, C.sibling),
                                            (a = l(C, d.props.children)),
                                            (a.return = p),
                                            (p = a);
                                        break e;
                                    }
                                } else if (
                                    C.elementType === E ||
                                    (typeof E == 'object' &&
                                        E !== null &&
                                        E.$$typeof === it &&
                                        fs(E) === C.type)
                                ) {
                                    n(p, C.sibling),
                                        (a = l(C, d.props)),
                                        (a.ref = Nn(p, C, d)),
                                        (a.return = p),
                                        (p = a);
                                    break e;
                                }
                                n(p, C);
                                break;
                            } else t(p, C);
                            C = C.sibling;
                        }
                        d.type === Wt
                            ? ((a = Ft(d.props.children, p.mode, w, d.key)),
                              (a.return = p),
                              (p = a))
                            : ((w = Kr(
                                  d.type,
                                  d.key,
                                  d.props,
                                  null,
                                  p.mode,
                                  w
                              )),
                              (w.ref = Nn(p, a, d)),
                              (w.return = p),
                              (p = w));
                    }
                    return i(p);
                case Vt:
                    e: {
                        for (C = d.key; a !== null; ) {
                            if (a.key === C)
                                if (
                                    a.tag === 4 &&
                                    a.stateNode.containerInfo ===
                                        d.containerInfo &&
                                    a.stateNode.implementation ===
                                        d.implementation
                                ) {
                                    n(p, a.sibling),
                                        (a = l(a, d.children || [])),
                                        (a.return = p),
                                        (p = a);
                                    break e;
                                } else {
                                    n(p, a);
                                    break;
                                }
                            else t(p, a);
                            a = a.sibling;
                        }
                        (a = go(d, p.mode, w)), (a.return = p), (p = a);
                    }
                    return i(p);
                case it:
                    return (C = d._init), T(p, a, C(d._payload), w);
            }
            if (zn(d)) return y(p, a, d, w);
            if (En(d)) return v(p, a, d, w);
            Or(p, d);
        }
        return (typeof d == 'string' && d !== '') || typeof d == 'number'
            ? ((d = '' + d),
              a !== null && a.tag === 6
                  ? (n(p, a.sibling), (a = l(a, d)), (a.return = p), (p = a))
                  : (n(p, a), (a = vo(d, p.mode, w)), (a.return = p), (p = a)),
              i(p))
            : n(p, a);
    }
    return T;
}
var fn = sc(!0),
    ac = sc(!1),
    dr = {},
    We = xt(dr),
    tr = xt(dr),
    nr = xt(dr);
function zt(e) {
    if (e === dr) throw Error(S(174));
    return e;
}
function Yi(e, t) {
    switch ((I(nr, t), I(tr, e), I(We, dr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : jo(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = jo(t, e));
    }
    M(We), I(We, t);
}
function dn() {
    M(We), M(tr), M(nr);
}
function cc(e) {
    zt(nr.current);
    var t = zt(We.current),
        n = jo(t, e.type);
    t !== n && (I(tr, e), I(We, n));
}
function Gi(e) {
    tr.current === e && (M(We), M(tr));
}
var $ = xt(0);
function dl(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var co = [];
function qi() {
    for (var e = 0; e < co.length; e++)
        co[e]._workInProgressVersionPrimary = null;
    co.length = 0;
}
var $r = nt.ReactCurrentDispatcher,
    fo = nt.ReactCurrentBatchConfig,
    It = 0,
    H = null,
    G = null,
    b = null,
    pl = !1,
    Bn = !1,
    rr = 0,
    Cp = 0;
function oe() {
    throw Error(S(321));
}
function Zi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ue(e[n], t[n])) return !1;
    return !0;
}
function bi(e, t, n, r, l, o) {
    if (
        ((It = o),
        (H = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        ($r.current = e === null || e.memoizedState === null ? Tp : Rp),
        (e = n(r, l)),
        Bn)
    ) {
        o = 0;
        do {
            if (((Bn = !1), (rr = 0), 25 <= o)) throw Error(S(301));
            (o += 1),
                (b = G = null),
                (t.updateQueue = null),
                ($r.current = Op),
                (e = n(r, l));
        } while (Bn);
    }
    if (
        (($r.current = hl),
        (t = G !== null && G.next !== null),
        (It = 0),
        (b = G = H = null),
        (pl = !1),
        t)
    )
        throw Error(S(300));
    return e;
}
function eu() {
    var e = rr !== 0;
    return (rr = 0), e;
}
function Be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return b === null ? (H.memoizedState = b = e) : (b = b.next = e), b;
}
function Oe() {
    if (G === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = G.next;
    var t = b === null ? H.memoizedState : b.next;
    if (t !== null) (b = t), (G = e);
    else {
        if (e === null) throw Error(S(310));
        (G = e),
            (e = {
                memoizedState: G.memoizedState,
                baseState: G.baseState,
                baseQueue: G.baseQueue,
                queue: G.queue,
                next: null,
            }),
            b === null ? (H.memoizedState = b = e) : (b = b.next = e);
    }
    return b;
}
function lr(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function po(e) {
    var t = Oe(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = G,
        l = r.baseQueue,
        o = n.pending;
    if (o !== null) {
        if (l !== null) {
            var i = l.next;
            (l.next = o.next), (o.next = i);
        }
        (r.baseQueue = l = o), (n.pending = null);
    }
    if (l !== null) {
        (o = l.next), (r = r.baseState);
        var u = (i = null),
            s = null,
            c = o;
        do {
            var h = c.lane;
            if ((It & h) === h)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var f = {
                    lane: h,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                s === null ? ((u = s = f), (i = r)) : (s = s.next = f),
                    (H.lanes |= h),
                    (Ut |= h);
            }
            c = c.next;
        } while (c !== null && c !== o);
        s === null ? (i = r) : (s.next = u),
            Ue(r, t.memoizedState) || (he = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), (H.lanes |= o), (Ut |= o), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function ho(e) {
    var t = Oe(),
        n = t.queue;
    if (n === null) throw Error(S(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        o = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var i = (l = l.next);
        do (o = e(o, i.action)), (i = i.next);
        while (i !== l);
        Ue(o, t.memoizedState) || (he = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o);
    }
    return [o, r];
}
function fc() {}
function dc(e, t) {
    var n = H,
        r = Oe(),
        l = t(),
        o = !Ue(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (he = !0)),
        (r = r.queue),
        tu(mc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (b !== null && b.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            or(9, hc.bind(null, n, r, l, t), void 0, null),
            ee === null)
        )
            throw Error(S(349));
        It & 30 || pc(n, t, l);
    }
    return l;
}
function pc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = H.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (H.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function hc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), yc(t) && vc(e);
}
function mc(e, t, n) {
    return n(function () {
        yc(t) && vc(e);
    });
}
function yc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ue(e, n);
    } catch {
        return !0;
    }
}
function vc(e) {
    var t = et(e, 1);
    t !== null && Ie(t, e, 1, -1);
}
function ds(e) {
    var t = Be();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: lr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Np.bind(null, H, e)),
        [t.memoizedState, e]
    );
}
function or(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = H.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (H.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    );
}
function gc() {
    return Oe().memoizedState;
}
function Hr(e, t, n, r) {
    var l = Be();
    (H.flags |= e),
        (l.memoizedState = or(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rl(e, t, n, r) {
    var l = Oe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var i = G.memoizedState;
        if (((o = i.destroy), r !== null && Zi(r, i.deps))) {
            l.memoizedState = or(t, n, o, r);
            return;
        }
    }
    (H.flags |= e), (l.memoizedState = or(1 | t, n, o, r));
}
function ps(e, t) {
    return Hr(8390656, 8, e, t);
}
function tu(e, t) {
    return Rl(2048, 8, e, t);
}
function wc(e, t) {
    return Rl(4, 2, e, t);
}
function Sc(e, t) {
    return Rl(4, 4, e, t);
}
function kc(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function Ec(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Rl(4, 4, kc.bind(null, t, e), n)
    );
}
function nu() {}
function xc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zi(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function Cc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zi(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function _c(e, t, n) {
    return It & 21
        ? (Ue(n, t) ||
              ((n = Ta()), (H.lanes |= n), (Ut |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (he = !0)),
          (e.memoizedState = n));
}
function _p(e, t) {
    var n = A;
    (A = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = fo.transition;
    fo.transition = {};
    try {
        e(!1), t();
    } finally {
        (A = n), (fo.transition = r);
    }
}
function Pc() {
    return Oe().memoizedState;
}
function Pp(e, t, n) {
    var r = gt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Nc(e))
    )
        Tc(t, n);
    else if (((n = lc(e, t, n, r)), n !== null)) {
        var l = ce();
        Ie(n, e, r, l), Rc(n, t, r);
    }
}
function Np(e, t, n) {
    var r = gt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Nc(e)) Tc(t, l);
    else {
        var o = e.alternate;
        if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            ((o = t.lastRenderedReducer), o !== null)
        )
            try {
                var i = t.lastRenderedState,
                    u = o(i, n);
                if (((l.hasEagerState = !0), (l.eagerState = u), Ue(u, i))) {
                    var s = t.interleaved;
                    s === null
                        ? ((l.next = l), Ji(t))
                        : ((l.next = s.next), (s.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = lc(e, t, l, r)),
            n !== null && ((l = ce()), Ie(n, e, r, l), Rc(n, t, r));
    }
}
function Nc(e) {
    var t = e.alternate;
    return e === H || (t !== null && t === H);
}
function Tc(e, t) {
    Bn = pl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Rc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), ji(e, n);
    }
}
var hl = {
        readContext: Re,
        useCallback: oe,
        useContext: oe,
        useEffect: oe,
        useImperativeHandle: oe,
        useInsertionEffect: oe,
        useLayoutEffect: oe,
        useMemo: oe,
        useReducer: oe,
        useRef: oe,
        useState: oe,
        useDebugValue: oe,
        useDeferredValue: oe,
        useTransition: oe,
        useMutableSource: oe,
        useSyncExternalStore: oe,
        useId: oe,
        unstable_isNewReconciler: !1,
    },
    Tp = {
        readContext: Re,
        useCallback: function (e, t) {
            return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Re,
        useEffect: ps,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Hr(4194308, 4, kc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Hr(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Hr(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Be();
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            );
        },
        useReducer: function (e, t, n) {
            var r = Be();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = Pp.bind(null, H, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Be();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: ds,
        useDebugValue: nu,
        useDeferredValue: function (e) {
            return (Be().memoizedState = e);
        },
        useTransition: function () {
            var e = ds(!1),
                t = e[0];
            return (e = _p.bind(null, e[1])), (Be().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = H,
                l = Be();
            if (B) {
                if (n === void 0) throw Error(S(407));
                n = n();
            } else {
                if (((n = t()), ee === null)) throw Error(S(349));
                It & 30 || pc(r, t, n);
            }
            l.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (l.queue = o),
                ps(mc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                or(9, hc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Be(),
                t = ee.identifierPrefix;
            if (B) {
                var n = Ye,
                    r = Xe;
                (n = (r & ~(1 << (32 - Ae(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = rr++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = Cp++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    Rp = {
        readContext: Re,
        useCallback: xc,
        useContext: Re,
        useEffect: tu,
        useImperativeHandle: Ec,
        useInsertionEffect: wc,
        useLayoutEffect: Sc,
        useMemo: Cc,
        useReducer: po,
        useRef: gc,
        useState: function () {
            return po(lr);
        },
        useDebugValue: nu,
        useDeferredValue: function (e) {
            var t = Oe();
            return _c(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = po(lr)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: fc,
        useSyncExternalStore: dc,
        useId: Pc,
        unstable_isNewReconciler: !1,
    },
    Op = {
        readContext: Re,
        useCallback: xc,
        useContext: Re,
        useEffect: tu,
        useImperativeHandle: Ec,
        useInsertionEffect: wc,
        useLayoutEffect: Sc,
        useMemo: Cc,
        useReducer: ho,
        useRef: gc,
        useState: function () {
            return ho(lr);
        },
        useDebugValue: nu,
        useDeferredValue: function (e) {
            var t = Oe();
            return G === null
                ? (t.memoizedState = e)
                : _c(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = ho(lr)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: fc,
        useSyncExternalStore: dc,
        useId: Pc,
        unstable_isNewReconciler: !1,
    };
function pn(e, t) {
    try {
        var n = '',
            r = t;
        do (n += ld(r)), (r = r.return);
        while (r);
        var l = n;
    } catch (o) {
        l =
            `
Error generating stack: ` +
            o.message +
            `
` +
            o.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
}
function mo(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ni(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var Lp = typeof WeakMap == 'function' ? WeakMap : Map;
function Oc(e, t, n) {
    (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            yl || ((yl = !0), (di = r)), ni(e, t);
        }),
        n
    );
}
function Lc(e, t, n) {
    (n = Ge(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                ni(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (n.callback = function () {
                ni(e, t),
                    typeof r != 'function' &&
                        (vt === null ? (vt = new Set([this])) : vt.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : '',
                });
            }),
        n
    );
}
function hs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Lp();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Qp.bind(null, e, t, n)), t.then(e, e));
}
function ms(e) {
    do {
        var t;
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function ys(e, t, n, r, l) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = l), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Ge(-1, 1)), (t.tag = 2), yt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var zp = nt.ReactCurrentOwner,
    he = !1;
function ae(e, t, n, r) {
    t.child = e === null ? ac(t, null, n, r) : fn(t, e.child, n, r);
}
function vs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
        on(t, l),
        (r = bi(e, t, n, r, o, l)),
        (n = eu()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              tt(e, t, l))
            : (B && n && $i(t), (t.flags |= 1), ae(e, t, r, l), t.child)
    );
}
function gs(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == 'function' &&
            !cu(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), zc(e, t, o, r, l))
            : ((e = Kr(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : qn),
            n(i, r) && e.ref === t.ref)
        )
            return tt(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = wt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function zc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (qn(o, r) && e.ref === t.ref)
            if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (he = !0);
            else return (t.lanes = e.lanes), tt(e, t, l);
    }
    return ri(e, t, n, r, l);
}
function jc(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        o = e !== null ? e.memoizedState : null;
    if (r.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                I(en, ge),
                (ge |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = o !== null ? o.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    I(en, ge),
                    (ge |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                I(en, ge),
                (ge |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            I(en, ge),
            (ge |= r);
    return ae(e, t, l, n), t.child;
}
function Fc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ri(e, t, n, r, l) {
    var o = ye(n) ? Dt : se.current;
    return (
        (o = an(t, o)),
        on(t, l),
        (n = bi(e, t, n, r, o, l)),
        (r = eu()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              tt(e, t, l))
            : (B && r && $i(t), (t.flags |= 1), ae(e, t, n, l), t.child)
    );
}
function ws(e, t, n, r, l) {
    if (ye(n)) {
        var o = !0;
        il(t);
    } else o = !1;
    if ((on(t, l), t.stateNode === null))
        Vr(e, t), uc(t, n, r), ti(t, n, r, l), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var s = i.context,
            c = n.contextType;
        typeof c == 'object' && c !== null
            ? (c = Re(c))
            : ((c = ye(n) ? Dt : se.current), (c = an(t, c)));
        var h = n.getDerivedStateFromProps,
            f =
                typeof h == 'function' ||
                typeof i.getSnapshotBeforeUpdate == 'function';
        f ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== r || s !== c) && cs(t, i, r, c)),
            (ut = !1);
        var m = t.memoizedState;
        (i.state = m),
            fl(t, r, i, l),
            (s = t.memoizedState),
            u !== r || m !== s || me.current || ut
                ? (typeof h == 'function' &&
                      (ei(t, n, h, r), (s = t.memoizedState)),
                  (u = ut || as(t, n, u, r, m, s, c))
                      ? (f ||
                            (typeof i.UNSAFE_componentWillMount != 'function' &&
                                typeof i.componentWillMount != 'function') ||
                            (typeof i.componentWillMount == 'function' &&
                                i.componentWillMount(),
                            typeof i.UNSAFE_componentWillMount == 'function' &&
                                i.UNSAFE_componentWillMount()),
                        typeof i.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof i.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = s)),
                  (i.props = r),
                  (i.state = s),
                  (i.context = c),
                  (r = u))
                : (typeof i.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (i = t.stateNode),
            oc(e, t),
            (u = t.memoizedProps),
            (c = t.type === t.elementType ? u : je(t.type, u)),
            (i.props = c),
            (f = t.pendingProps),
            (m = i.context),
            (s = n.contextType),
            typeof s == 'object' && s !== null
                ? (s = Re(s))
                : ((s = ye(n) ? Dt : se.current), (s = an(t, s)));
        var k = n.getDerivedStateFromProps;
        (h =
            typeof k == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function') ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== f || m !== s) && cs(t, i, r, s)),
            (ut = !1),
            (m = t.memoizedState),
            (i.state = m),
            fl(t, r, i, l);
        var y = t.memoizedState;
        u !== f || m !== y || me.current || ut
            ? (typeof k == 'function' &&
                  (ei(t, n, k, r), (y = t.memoizedState)),
              (c = ut || as(t, n, c, r, m, y, s) || !1)
                  ? (h ||
                        (typeof i.UNSAFE_componentWillUpdate != 'function' &&
                            typeof i.componentWillUpdate != 'function') ||
                        (typeof i.componentWillUpdate == 'function' &&
                            i.componentWillUpdate(r, y, s),
                        typeof i.UNSAFE_componentWillUpdate == 'function' &&
                            i.UNSAFE_componentWillUpdate(r, y, s)),
                    typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof i.componentDidUpdate != 'function' ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof i.getSnapshotBeforeUpdate != 'function' ||
                        (u === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = y)),
              (i.props = r),
              (i.state = y),
              (i.context = s),
              (r = c))
            : (typeof i.componentDidUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return li(e, t, n, r, o, l);
}
function li(e, t, n, r, l, o) {
    Fc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ls(t, n, !1), tt(e, t, o);
    (r = t.stateNode), (zp.current = t);
    var u =
        i && typeof n.getDerivedStateFromError != 'function'
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = fn(t, e.child, null, o)),
              (t.child = fn(t, null, u, o)))
            : ae(e, t, u, o),
        (t.memoizedState = r.state),
        l && ls(t, n, !0),
        t.child
    );
}
function Dc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? rs(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && rs(e, t.context, !1),
        Yi(e, t.containerInfo);
}
function Ss(e, t, n, r, l) {
    return cn(), Vi(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var oi = { dehydrated: null, treeContext: null, retryLane: 0 };
function ii(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function Ac(e, t, n) {
    var r = t.pendingProps,
        l = $.current,
        o = !1,
        i = (t.flags & 128) !== 0,
        u;
    if (
        ((u = i) ||
            (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
        u
            ? ((o = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (l |= 1),
        I($, l & 1),
        e === null)
    )
        return (
            Zo(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((i = r.children),
                  (e = r.fallback),
                  o
                      ? ((r = t.mode),
                        (o = t.child),
                        (i = { mode: 'hidden', children: i }),
                        !(r & 1) && o !== null
                            ? ((o.childLanes = 0), (o.pendingProps = i))
                            : (o = zl(i, r, 0, null)),
                        (e = Ft(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = ii(n)),
                        (t.memoizedState = oi),
                        e)
                      : ru(t, i))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return jp(e, t, i, r, u, l, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
        var s = { mode: 'hidden', children: r.children };
        return (
            !(i & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = wt(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (o = wt(u, o))
                : ((o = Ft(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? ii(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = oi),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = wt(o, { mode: 'visible', children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function ru(e, t) {
    return (
        (t = zl({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Lr(e, t, n, r) {
    return (
        r !== null && Vi(r),
        fn(t, e.child, null, n),
        (e = ru(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function jp(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = mo(Error(S(422)))), Lr(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (l = t.mode),
                (r = zl({ mode: 'visible', children: r.children }, l, 0, null)),
                (o = Ft(o, l, i, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                t.mode & 1 && fn(t, e.child, null, i),
                (t.child.memoizedState = ii(i)),
                (t.memoizedState = oi),
                o);
    if (!(t.mode & 1)) return Lr(e, t, i, null);
    if (l.data === '$!') {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (o = Error(S(419))), (r = mo(o, r, void 0)), Lr(e, t, i, r)
        );
    }
    if (((u = (i & e.childLanes) !== 0), he || u)) {
        if (((r = ee), r !== null)) {
            switch (i & -i) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0;
            }
            (l = l & (r.suspendedLanes | i) ? 0 : l),
                l !== 0 &&
                    l !== o.retryLane &&
                    ((o.retryLane = l), et(e, l), Ie(r, e, l, -1));
        }
        return au(), (r = mo(Error(S(421)))), Lr(e, t, i, r);
    }
    return l.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Kp.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (we = mt(l.nextSibling)),
          (Se = t),
          (B = !0),
          (De = null),
          e !== null &&
              ((Ce[_e++] = Xe),
              (Ce[_e++] = Ye),
              (Ce[_e++] = At),
              (Xe = e.id),
              (Ye = e.overflow),
              (At = t)),
          (t = ru(t, r.children)),
          (t.flags |= 4096),
          t);
}
function ks(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), bo(e.return, t, n);
}
function yo(e, t, n, r, l) {
    var o = e.memoizedState;
    o === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: l,
          })
        : ((o.isBackwards = t),
          (o.rendering = null),
          (o.renderingStartTime = 0),
          (o.last = r),
          (o.tail = n),
          (o.tailMode = l));
}
function Ic(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((ae(e, t, r.children, n), (r = $.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && ks(e, n, t);
                else if (e.tag === 19) ks(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((I($, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case 'forwards':
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && dl(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    yo(t, !1, l, n, o);
                break;
            case 'backwards':
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && dl(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                yo(t, !0, n, null, o);
                break;
            case 'together':
                yo(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Vr(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Ut |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (
            e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = wt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Fp(e, t, n) {
    switch (t.tag) {
        case 3:
            Dc(t), cn();
            break;
        case 5:
            cc(t);
            break;
        case 1:
            ye(t.type) && il(t);
            break;
        case 4:
            Yi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            I(al, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (I($, $.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? Ac(e, t, n)
                      : (I($, $.current & 1),
                        (e = tt(e, t, n)),
                        e !== null ? e.sibling : null);
            I($, $.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Ic(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                I($, $.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), jc(e, t, n);
    }
    return tt(e, t, n);
}
var Uc, ui, Mc, Bc;
Uc = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
ui = function () {};
Mc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), zt(We.current);
        var o = null;
        switch (n) {
            case 'input':
                (l = Ro(e, l)), (r = Ro(e, r)), (o = []);
                break;
            case 'select':
                (l = V({}, l, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                break;
            case 'textarea':
                (l = zo(e, l)), (r = zo(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = ll);
        }
        Fo(n, r);
        var i;
        n = null;
        for (c in l)
            if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
                if (c === 'style') {
                    var u = l[c];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                } else
                    c !== 'dangerouslySetInnerHTML' &&
                        c !== 'children' &&
                        c !== 'suppressContentEditableWarning' &&
                        c !== 'suppressHydrationWarning' &&
                        c !== 'autoFocus' &&
                        (Wn.hasOwnProperty(c)
                            ? o || (o = [])
                            : (o = o || []).push(c, null));
        for (c in r) {
            var s = r[c];
            if (
                ((u = l != null ? l[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
            )
                if (c === 'style')
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                                (s && s.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ''));
                        for (i in s)
                            s.hasOwnProperty(i) &&
                                u[i] !== s[i] &&
                                (n || (n = {}), (n[i] = s[i]));
                    } else n || (o || (o = []), o.push(c, n)), (n = s);
                else
                    c === 'dangerouslySetInnerHTML'
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (o = o || []).push(c, s))
                        : c === 'children'
                          ? (typeof s != 'string' && typeof s != 'number') ||
                            (o = o || []).push(c, '' + s)
                          : c !== 'suppressContentEditableWarning' &&
                            c !== 'suppressHydrationWarning' &&
                            (Wn.hasOwnProperty(c)
                                ? (s != null &&
                                      c === 'onScroll' &&
                                      U('scroll', e),
                                  o || u === s || (o = []))
                                : (o = o || []).push(c, s));
        }
        n && (o = o || []).push('style', n);
        var c = o;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
Bc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Tn(e, t) {
    if (!B)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail;
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case 'collapsed':
                n = e.tail;
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling);
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null);
        }
}
function ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags & 14680064),
                (r |= l.flags & 14680064),
                (l.return = e),
                (l = l.sibling);
    else
        for (l = e.child; l !== null; )
            (n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Dp(e, t, n) {
    var r = t.pendingProps;
    switch ((Hi(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ie(t), null;
        case 1:
            return ye(t.type) && ol(), ie(t), null;
        case 3:
            return (
                (r = t.stateNode),
                dn(),
                M(me),
                M(se),
                qi(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Rr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          De !== null && (mi(De), (De = null)))),
                ui(e, t),
                ie(t),
                null
            );
        case 5:
            Gi(t);
            var l = zt(nr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Mc(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return ie(t), null;
                }
                if (((e = zt(We.current)), Rr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[$e] = t), (r[er] = o), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            U('cancel', r), U('close', r);
                            break;
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            U('load', r);
                            break;
                        case 'video':
                        case 'audio':
                            for (l = 0; l < Fn.length; l++) U(Fn[l], r);
                            break;
                        case 'source':
                            U('error', r);
                            break;
                        case 'img':
                        case 'image':
                        case 'link':
                            U('error', r), U('load', r);
                            break;
                        case 'details':
                            U('toggle', r);
                            break;
                        case 'input':
                            Ou(r, o), U('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                U('invalid', r);
                            break;
                        case 'textarea':
                            zu(r, o), U('invalid', r);
                    }
                    Fo(n, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === 'children'
                                ? typeof u == 'string'
                                    ? r.textContent !== u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Tr(r.textContent, u, e),
                                      (l = ['children', u]))
                                    : typeof u == 'number' &&
                                      r.textContent !== '' + u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Tr(r.textContent, u, e),
                                      (l = ['children', '' + u]))
                                : Wn.hasOwnProperty(i) &&
                                  u != null &&
                                  i === 'onScroll' &&
                                  U('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            Sr(r), Lu(r, o, !0);
                            break;
                        case 'textarea':
                            Sr(r), ju(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof o.onClick == 'function' && (r.onclick = ll);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = pa(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = i.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                  ? (e = i.createElement(n, { is: r.is }))
                                  : ((e = i.createElement(n)),
                                    n === 'select' &&
                                        ((i = e),
                                        r.multiple
                                            ? (i.multiple = !0)
                                            : r.size && (i.size = r.size)))
                            : (e = i.createElementNS(e, n)),
                        (e[$e] = t),
                        (e[er] = r),
                        Uc(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = Do(n, r)), n)) {
                            case 'dialog':
                                U('cancel', e), U('close', e), (l = r);
                                break;
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                U('load', e), (l = r);
                                break;
                            case 'video':
                            case 'audio':
                                for (l = 0; l < Fn.length; l++) U(Fn[l], e);
                                l = r;
                                break;
                            case 'source':
                                U('error', e), (l = r);
                                break;
                            case 'img':
                            case 'image':
                            case 'link':
                                U('error', e), U('load', e), (l = r);
                                break;
                            case 'details':
                                U('toggle', e), (l = r);
                                break;
                            case 'input':
                                Ou(e, r), (l = Ro(e, r)), U('invalid', e);
                                break;
                            case 'option':
                                l = r;
                                break;
                            case 'select':
                                (e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (l = V({}, r, { value: void 0 })),
                                    U('invalid', e);
                                break;
                            case 'textarea':
                                zu(e, r), (l = zo(e, r)), U('invalid', e);
                                break;
                            default:
                                l = r;
                        }
                        Fo(n, l), (u = l);
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === 'style'
                                    ? ya(e, s)
                                    : o === 'dangerouslySetInnerHTML'
                                      ? ((s = s ? s.__html : void 0),
                                        s != null && ha(e, s))
                                      : o === 'children'
                                        ? typeof s == 'string'
                                            ? (n !== 'textarea' || s !== '') &&
                                              Qn(e, s)
                                            : typeof s == 'number' &&
                                              Qn(e, '' + s)
                                        : o !==
                                              'suppressContentEditableWarning' &&
                                          o !== 'suppressHydrationWarning' &&
                                          o !== 'autoFocus' &&
                                          (Wn.hasOwnProperty(o)
                                              ? s != null &&
                                                o === 'onScroll' &&
                                                U('scroll', e)
                                              : s != null && Ni(e, o, s, i));
                            }
                        switch (n) {
                            case 'input':
                                Sr(e), Lu(e, r, !1);
                                break;
                            case 'textarea':
                                Sr(e), ju(e);
                                break;
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + St(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? tn(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          tn(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == 'function' &&
                                    (e.onclick = ll);
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus;
                                break e;
                            case 'img':
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ie(t), null;
        case 6:
            if (e && t.stateNode != null) Bc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(S(166));
                if (((n = zt(nr.current)), zt(We.current), Rr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[$e] = t),
                        (o = r.nodeValue !== n) && ((e = Se), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Tr(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    o && (t.flags |= 4);
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[$e] = t),
                        (t.stateNode = r);
            }
            return ie(t), null;
        case 13:
            if (
                (M($),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (B && we !== null && t.mode & 1 && !(t.flags & 128))
                    rc(), cn(), (t.flags |= 98560), (o = !1);
                else if (((o = Rr(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!o) throw Error(S(318));
                        if (
                            ((o = t.memoizedState),
                            (o = o !== null ? o.dehydrated : null),
                            !o)
                        )
                            throw Error(S(317));
                        o[$e] = t;
                    } else
                        cn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ie(t), (o = !1);
                } else De !== null && (mi(De), (De = null)), (o = !0);
                if (!o) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || $.current & 1
                              ? q === 0 && (q = 3)
                              : au())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ie(t),
                  null);
        case 4:
            return (
                dn(),
                ui(e, t),
                e === null && Zn(t.stateNode.containerInfo),
                ie(t),
                null
            );
        case 10:
            return Ki(t.type._context), ie(t), null;
        case 17:
            return ye(t.type) && ol(), ie(t), null;
        case 19:
            if ((M($), (o = t.memoizedState), o === null)) return ie(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) Tn(o, !1);
                else {
                    if (q !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = dl(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        Tn(o, !1),
                                        r = i.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (o = n),
                                        (e = r),
                                        (o.flags &= 14680066),
                                        (i = o.alternate),
                                        i === null
                                            ? ((o.childLanes = 0),
                                              (o.lanes = e),
                                              (o.child = null),
                                              (o.subtreeFlags = 0),
                                              (o.memoizedProps = null),
                                              (o.memoizedState = null),
                                              (o.updateQueue = null),
                                              (o.dependencies = null),
                                              (o.stateNode = null))
                                            : ((o.childLanes = i.childLanes),
                                              (o.lanes = i.lanes),
                                              (o.child = i.child),
                                              (o.subtreeFlags = 0),
                                              (o.deletions = null),
                                              (o.memoizedProps =
                                                  i.memoizedProps),
                                              (o.memoizedState =
                                                  i.memoizedState),
                                              (o.updateQueue = i.updateQueue),
                                              (o.type = i.type),
                                              (e = i.dependencies),
                                              (o.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling);
                                return I($, ($.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        J() > hn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Tn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = dl(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Tn(o, !0),
                            o.tail === null &&
                                o.tailMode === 'hidden' &&
                                !i.alternate &&
                                !B)
                        )
                            return ie(t), null;
                    } else
                        2 * J() - o.renderingStartTime > hn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Tn(o, !1),
                            (t.lanes = 4194304));
                o.isBackwards
                    ? ((i.sibling = t.child), (t.child = i))
                    : ((n = o.last),
                      n !== null ? (n.sibling = i) : (t.child = i),
                      (o.last = i));
            }
            return o.tail !== null
                ? ((t = o.tail),
                  (o.rendering = t),
                  (o.tail = t.sibling),
                  (o.renderingStartTime = J()),
                  (t.sibling = null),
                  (n = $.current),
                  I($, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ie(t), null);
        case 22:
        case 23:
            return (
                su(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? ge & 1073741824 &&
                      (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : ie(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(S(156, t.tag));
}
function Ap(e, t) {
    switch ((Hi(t), t.tag)) {
        case 1:
            return (
                ye(t.type) && ol(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                dn(),
                M(me),
                M(se),
                qi(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Gi(t), null;
        case 13:
            if (
                (M($),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(S(340));
                cn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return M($), null;
        case 4:
            return dn(), null;
        case 10:
            return Ki(t.type._context), null;
        case 22:
        case 23:
            return su(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var zr = !1,
    ue = !1,
    Ip = typeof WeakSet == 'function' ? WeakSet : Set,
    x = null;
function bt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null);
            } catch (r) {
                W(e, t, r);
            }
        else n.current = null;
}
function si(e, t, n) {
    try {
        n();
    } catch (r) {
        W(e, t, r);
    }
}
var Es = !1;
function Up(e, t) {
    if (((Qo = tl), (e = Wa()), Bi(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var l = r.anchorOffset,
                        o = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, o.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var i = 0,
                        u = -1,
                        s = -1,
                        c = 0,
                        h = 0,
                        f = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var k;
                            f !== n ||
                                (l !== 0 && f.nodeType !== 3) ||
                                (u = i + l),
                                f !== o ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (s = i + r),
                                f.nodeType === 3 && (i += f.nodeValue.length),
                                (k = f.firstChild) !== null;

                        )
                            (m = f), (f = k);
                        for (;;) {
                            if (f === e) break t;
                            if (
                                (m === n && ++c === l && (u = i),
                                m === o && ++h === r && (s = i),
                                (k = f.nextSibling) !== null)
                            )
                                break;
                            (f = m), (m = f.parentNode);
                        }
                        f = k;
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Ko = { focusedElem: e, selectionRange: n }, tl = !1, x = t;
        x !== null;

    )
        if (
            ((t = x),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (x = e);
        else
            for (; x !== null; ) {
                t = x;
                try {
                    var y = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (y !== null) {
                                    var v = y.memoizedProps,
                                        T = y.memoizedState,
                                        p = t.stateNode,
                                        a = p.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? v
                                                : je(t.type, v),
                                            T
                                        );
                                    p.__reactInternalSnapshotBeforeUpdate = a;
                                }
                                break;
                            case 3:
                                var d = t.stateNode.containerInfo;
                                d.nodeType === 1
                                    ? (d.textContent = '')
                                    : d.nodeType === 9 &&
                                      d.documentElement &&
                                      d.removeChild(d.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(S(163));
                        }
                } catch (w) {
                    W(t, t.return, w);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), (x = e);
                    break;
                }
                x = t.return;
            }
    return (y = Es), (Es = !1), y;
}
function $n(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && si(t, n, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function Ol(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function ai(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == 'function' ? t(e) : (t.current = e);
    }
}
function $c(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), $c(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[$e],
                delete t[er],
                delete t[Yo],
                delete t[Sp],
                delete t[kp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function xs(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Hc(e.return)) return null;
            e = e.return;
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function ci(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = ll));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ci(e, t, n), e = e.sibling; e !== null; )
            ci(e, t, n), (e = e.sibling);
}
function fi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (fi(e, t, n), e = e.sibling; e !== null; )
            fi(e, t, n), (e = e.sibling);
}
var te = null,
    Fe = !1;
function rt(e, t, n) {
    for (n = n.child; n !== null; ) Vc(e, t, n), (n = n.sibling);
}
function Vc(e, t, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
        try {
            Ve.onCommitFiberUnmount(El, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ue || bt(n, t);
        case 6:
            var r = te,
                l = Fe;
            (te = null),
                rt(e, t, n),
                (te = r),
                (Fe = l),
                te !== null &&
                    (Fe
                        ? ((e = te),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : te.removeChild(n.stateNode));
            break;
        case 18:
            te !== null &&
                (Fe
                    ? ((e = te),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? so(e.parentNode, n)
                          : e.nodeType === 1 && so(e, n),
                      Yn(e))
                    : so(te, n.stateNode));
            break;
        case 4:
            (r = te),
                (l = Fe),
                (te = n.stateNode.containerInfo),
                (Fe = !0),
                rt(e, t, n),
                (te = r),
                (Fe = l);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !ue &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                l = r = r.next;
                do {
                    var o = l,
                        i = o.destroy;
                    (o = o.tag),
                        i !== void 0 && (o & 2 || o & 4) && si(n, t, i),
                        (l = l.next);
                } while (l !== r);
            }
            rt(e, t, n);
            break;
        case 1:
            if (
                !ue &&
                (bt(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    (r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount();
                } catch (u) {
                    W(n, t, u);
                }
            rt(e, t, n);
            break;
        case 21:
            rt(e, t, n);
            break;
        case 22:
            n.mode & 1
                ? ((ue = (r = ue) || n.memoizedState !== null),
                  rt(e, t, n),
                  (ue = r))
                : rt(e, t, n);
            break;
        default:
            rt(e, t, n);
    }
}
function Cs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ip()),
            t.forEach(function (r) {
                var l = Jp.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(l, l));
            });
    }
}
function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var o = e,
                    i = t,
                    u = i;
                e: for (; u !== null; ) {
                    switch (u.tag) {
                        case 5:
                            (te = u.stateNode), (Fe = !1);
                            break e;
                        case 3:
                            (te = u.stateNode.containerInfo), (Fe = !0);
                            break e;
                        case 4:
                            (te = u.stateNode.containerInfo), (Fe = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (te === null) throw Error(S(160));
                Vc(o, i, l), (te = null), (Fe = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (c) {
                W(l, t, c);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) Wc(t, e), (t = t.sibling);
}
function Wc(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(t, e), Me(e), r & 4)) {
                try {
                    $n(3, e, e.return), Ol(3, e);
                } catch (v) {
                    W(e, e.return, v);
                }
                try {
                    $n(5, e, e.return);
                } catch (v) {
                    W(e, e.return, v);
                }
            }
            break;
        case 1:
            ze(t, e), Me(e), r & 512 && n !== null && bt(n, n.return);
            break;
        case 5:
            if (
                (ze(t, e),
                Me(e),
                r & 512 && n !== null && bt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Qn(l, '');
                } catch (v) {
                    W(e, e.return, v);
                }
            }
            if (r & 4 && ((l = e.stateNode), l != null)) {
                var o = e.memoizedProps,
                    i = n !== null ? n.memoizedProps : o,
                    u = e.type,
                    s = e.updateQueue;
                if (((e.updateQueue = null), s !== null))
                    try {
                        u === 'input' &&
                            o.type === 'radio' &&
                            o.name != null &&
                            fa(l, o),
                            Do(u, i);
                        var c = Do(u, o);
                        for (i = 0; i < s.length; i += 2) {
                            var h = s[i],
                                f = s[i + 1];
                            h === 'style'
                                ? ya(l, f)
                                : h === 'dangerouslySetInnerHTML'
                                  ? ha(l, f)
                                  : h === 'children'
                                    ? Qn(l, f)
                                    : Ni(l, h, f, c);
                        }
                        switch (u) {
                            case 'input':
                                Oo(l, o);
                                break;
                            case 'textarea':
                                da(l, o);
                                break;
                            case 'select':
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var k = o.value;
                                k != null
                                    ? tn(l, !!o.multiple, k, !1)
                                    : m !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? tn(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : tn(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : '',
                                                !1
                                            ));
                        }
                        l[er] = o;
                    } catch (v) {
                        W(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((ze(t, e), Me(e), r & 4)) {
                if (e.stateNode === null) throw Error(S(162));
                (l = e.stateNode), (o = e.memoizedProps);
                try {
                    l.nodeValue = o;
                } catch (v) {
                    W(e, e.return, v);
                }
            }
            break;
        case 3:
            if (
                (ze(t, e),
                Me(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Yn(t.containerInfo);
                } catch (v) {
                    W(e, e.return, v);
                }
            break;
        case 4:
            ze(t, e), Me(e);
            break;
        case 13:
            ze(t, e),
                Me(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (iu = J())),
                r & 4 && Cs(e);
            break;
        case 22:
            if (
                ((h = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((ue = (c = ue) || h), ze(t, e), (ue = c))
                    : ze(t, e),
                Me(e),
                r & 8192)
            ) {
                if (
                    ((c = e.memoizedState !== null),
                    (e.stateNode.isHidden = c) && !h && e.mode & 1)
                )
                    for (x = e, h = e.child; h !== null; ) {
                        for (f = x = h; x !== null; ) {
                            switch (((m = x), (k = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    $n(4, m, m.return);
                                    break;
                                case 1:
                                    bt(m, m.return);
                                    var y = m.stateNode;
                                    if (
                                        typeof y.componentWillUnmount ==
                                        'function'
                                    ) {
                                        (r = m), (n = m.return);
                                        try {
                                            (t = r),
                                                (y.props = t.memoizedProps),
                                                (y.state = t.memoizedState),
                                                y.componentWillUnmount();
                                        } catch (v) {
                                            W(r, n, v);
                                        }
                                    }
                                    break;
                                case 5:
                                    bt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        Ps(f);
                                        continue;
                                    }
                            }
                            k !== null ? ((k.return = m), (x = k)) : Ps(f);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, f = e; ; ) {
                    if (f.tag === 5) {
                        if (h === null) {
                            h = f;
                            try {
                                (l = f.stateNode),
                                    c
                                        ? ((o = l.style),
                                          typeof o.setProperty == 'function'
                                              ? o.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (o.display = 'none'))
                                        : ((u = f.stateNode),
                                          (s = f.memoizedProps.style),
                                          (i =
                                              s != null &&
                                              s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (u.style.display = ma('display', i)));
                            } catch (v) {
                                W(e, e.return, v);
                            }
                        }
                    } else if (f.tag === 6) {
                        if (h === null)
                            try {
                                f.stateNode.nodeValue = c
                                    ? ''
                                    : f.memoizedProps;
                            } catch (v) {
                                W(e, e.return, v);
                            }
                    } else if (
                        ((f.tag !== 22 && f.tag !== 23) ||
                            f.memoizedState === null ||
                            f === e) &&
                        f.child !== null
                    ) {
                        (f.child.return = f), (f = f.child);
                        continue;
                    }
                    if (f === e) break e;
                    for (; f.sibling === null; ) {
                        if (f.return === null || f.return === e) break e;
                        h === f && (h = null), (f = f.return);
                    }
                    h === f && (h = null),
                        (f.sibling.return = f.return),
                        (f = f.sibling);
                }
            }
            break;
        case 19:
            ze(t, e), Me(e), r & 4 && Cs(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Me(e);
    }
}
function Me(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Hc(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(S(160));
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Qn(l, ''), (r.flags &= -33));
                    var o = xs(e);
                    fi(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = xs(e);
                    ci(e, u, i);
                    break;
                default:
                    throw Error(S(161));
            }
        } catch (s) {
            W(e, e.return, s);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function Mp(e, t, n) {
    (x = e), Qc(e);
}
function Qc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; x !== null; ) {
        var l = x,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || zr;
            if (!i) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || ue;
                u = zr;
                var c = ue;
                if (((zr = i), (ue = s) && !c))
                    for (x = l; x !== null; )
                        (i = x),
                            (s = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? Ns(l)
                                : s !== null
                                  ? ((s.return = i), (x = s))
                                  : Ns(l);
                for (; o !== null; ) (x = o), Qc(o), (o = o.sibling);
                (x = l), (zr = u), (ue = c);
            }
            _s(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (x = o))
                : _s(e);
    }
}
function _s(e) {
    for (; x !== null; ) {
        var t = x;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ue || Ol(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !ue)
                                if (n === null) r.componentDidMount();
                                else {
                                    var l =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : je(t.type, n.memoizedProps);
                                    r.componentDidUpdate(
                                        l,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    );
                                }
                            var o = t.updateQueue;
                            o !== null && ss(t, o, r);
                            break;
                        case 3:
                            var i = t.updateQueue;
                            if (i !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                ss(t, i, n);
                            }
                            break;
                        case 5:
                            var u = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = u;
                                var s = t.memoizedProps;
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        s.autoFocus && n.focus();
                                        break;
                                    case 'img':
                                        s.src && (n.src = s.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var h = c.memoizedState;
                                    if (h !== null) {
                                        var f = h.dehydrated;
                                        f !== null && Yn(f);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(S(163));
                    }
                ue || (t.flags & 512 && ai(t));
            } catch (m) {
                W(t, t.return, m);
            }
        }
        if (t === e) {
            x = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (x = n);
            break;
        }
        x = t.return;
    }
}
function Ps(e) {
    for (; x !== null; ) {
        var t = x;
        if (t === e) {
            x = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (x = n);
            break;
        }
        x = t.return;
    }
}
function Ns(e) {
    for (; x !== null; ) {
        var t = x;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Ol(4, t);
                    } catch (s) {
                        W(t, n, s);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == 'function') {
                        var l = t.return;
                        try {
                            r.componentDidMount();
                        } catch (s) {
                            W(t, l, s);
                        }
                    }
                    var o = t.return;
                    try {
                        ai(t);
                    } catch (s) {
                        W(t, o, s);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ai(t);
                    } catch (s) {
                        W(t, i, s);
                    }
            }
        } catch (s) {
            W(t, t.return, s);
        }
        if (t === e) {
            x = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (x = u);
            break;
        }
        x = t.return;
    }
}
var Bp = Math.ceil,
    ml = nt.ReactCurrentDispatcher,
    lu = nt.ReactCurrentOwner,
    Ne = nt.ReactCurrentBatchConfig,
    D = 0,
    ee = null,
    X = null,
    re = 0,
    ge = 0,
    en = xt(0),
    q = 0,
    ir = null,
    Ut = 0,
    Ll = 0,
    ou = 0,
    Hn = null,
    pe = null,
    iu = 0,
    hn = 1 / 0,
    Ke = null,
    yl = !1,
    di = null,
    vt = null,
    jr = !1,
    ft = null,
    vl = 0,
    Vn = 0,
    pi = null,
    Wr = -1,
    Qr = 0;
function ce() {
    return D & 6 ? J() : Wr !== -1 ? Wr : (Wr = J());
}
function gt(e) {
    return e.mode & 1
        ? D & 2 && re !== 0
            ? re & -re
            : xp.transition !== null
              ? (Qr === 0 && (Qr = Ta()), Qr)
              : ((e = A),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : Da(e.type))),
                e)
        : 1;
}
function Ie(e, t, n, r) {
    if (50 < Vn) throw ((Vn = 0), (pi = null), Error(S(185)));
    ar(e, n, r),
        (!(D & 2) || e !== ee) &&
            (e === ee && (!(D & 2) && (Ll |= n), q === 4 && at(e, re)),
            ve(e, r),
            n === 1 &&
                D === 0 &&
                !(t.mode & 1) &&
                ((hn = J() + 500), Nl && Ct()));
}
function ve(e, t) {
    var n = e.callbackNode;
    xd(e, t);
    var r = el(e, e === ee ? re : 0);
    if (r === 0)
        n !== null && Au(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Au(n), t === 1))
            e.tag === 0 ? Ep(Ts.bind(null, e)) : ec(Ts.bind(null, e)),
                gp(function () {
                    !(D & 6) && Ct();
                }),
                (n = null);
        else {
            switch (Ra(r)) {
                case 1:
                    n = zi;
                    break;
                case 4:
                    n = Pa;
                    break;
                case 16:
                    n = br;
                    break;
                case 536870912:
                    n = Na;
                    break;
                default:
                    n = br;
            }
            n = bc(n, Kc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Kc(e, t) {
    if (((Wr = -1), (Qr = 0), D & 6)) throw Error(S(327));
    var n = e.callbackNode;
    if (un() && e.callbackNode !== n) return null;
    var r = el(e, e === ee ? re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = gl(e, r);
    else {
        t = r;
        var l = D;
        D |= 2;
        var o = Xc();
        (ee !== e || re !== t) && ((Ke = null), (hn = J() + 500), jt(e, t));
        do
            try {
                Vp();
                break;
            } catch (u) {
                Jc(e, u);
            }
        while (1);
        Qi(),
            (ml.current = o),
            (D = l),
            X !== null ? (t = 0) : ((ee = null), (re = 0), (t = q));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Bo(e)), l !== 0 && ((r = l), (t = hi(e, l)))),
            t === 1)
        )
            throw ((n = ir), jt(e, 0), at(e, r), ve(e, J()), n);
        if (t === 6) at(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !$p(l) &&
                    ((t = gl(e, r)),
                    t === 2 &&
                        ((o = Bo(e)), o !== 0 && ((r = o), (t = hi(e, o)))),
                    t === 1))
            )
                throw ((n = ir), jt(e, 0), at(e, r), ve(e, J()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    Rt(e, pe, Ke);
                    break;
                case 3:
                    if (
                        (at(e, r),
                        (r & 130023424) === r && ((t = iu + 500 - J()), 10 < t))
                    ) {
                        if (el(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ce(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = Xo(Rt.bind(null, e, pe, Ke), t);
                        break;
                    }
                    Rt(e, pe, Ke);
                    break;
                case 4:
                    if ((at(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - Ae(r);
                        (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
                    }
                    if (
                        ((r = l),
                        (r = J() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * Bp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Xo(Rt.bind(null, e, pe, Ke), r);
                        break;
                    }
                    Rt(e, pe, Ke);
                    break;
                case 5:
                    Rt(e, pe, Ke);
                    break;
                default:
                    throw Error(S(329));
            }
        }
    }
    return ve(e, J()), e.callbackNode === n ? Kc.bind(null, e) : null;
}
function hi(e, t) {
    var n = Hn;
    return (
        e.current.memoizedState.isDehydrated && (jt(e, t).flags |= 256),
        (e = gl(e, t)),
        e !== 2 && ((t = pe), (pe = n), t !== null && mi(t)),
        e
    );
}
function mi(e) {
    pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function $p(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        o = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Ue(o(), l)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function at(e, t) {
    for (
        t &= ~ou,
            t &= ~Ll,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Ae(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Ts(e) {
    if (D & 6) throw Error(S(327));
    un();
    var t = el(e, 0);
    if (!(t & 1)) return ve(e, J()), null;
    var n = gl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Bo(e);
        r !== 0 && ((t = r), (n = hi(e, r)));
    }
    if (n === 1) throw ((n = ir), jt(e, 0), at(e, t), ve(e, J()), n);
    if (n === 6) throw Error(S(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Rt(e, pe, Ke),
        ve(e, J()),
        null
    );
}
function uu(e, t) {
    var n = D;
    D |= 1;
    try {
        return e(t);
    } finally {
        (D = n), D === 0 && ((hn = J() + 500), Nl && Ct());
    }
}
function Mt(e) {
    ft !== null && ft.tag === 0 && !(D & 6) && un();
    var t = D;
    D |= 1;
    var n = Ne.transition,
        r = A;
    try {
        if (((Ne.transition = null), (A = 1), e)) return e();
    } finally {
        (A = r), (Ne.transition = n), (D = t), !(D & 6) && Ct();
    }
}
function su() {
    (ge = en.current), M(en);
}
function jt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), vp(n)), X !== null))
        for (n = X.return; n !== null; ) {
            var r = n;
            switch ((Hi(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && ol();
                    break;
                case 3:
                    dn(), M(me), M(se), qi();
                    break;
                case 5:
                    Gi(r);
                    break;
                case 4:
                    dn();
                    break;
                case 13:
                    M($);
                    break;
                case 19:
                    M($);
                    break;
                case 10:
                    Ki(r.type._context);
                    break;
                case 22:
                case 23:
                    su();
            }
            n = n.return;
        }
    if (
        ((ee = e),
        (X = e = wt(e.current, null)),
        (re = ge = t),
        (q = 0),
        (ir = null),
        (ou = Ll = Ut = 0),
        (pe = Hn = null),
        Lt !== null)
    ) {
        for (t = 0; t < Lt.length; t++)
            if (((n = Lt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                n.pending = r;
            }
        Lt = null;
    }
    return e;
}
function Jc(e, t) {
    do {
        var n = X;
        try {
            if ((Qi(), ($r.current = hl), pl)) {
                for (var r = H.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                pl = !1;
            }
            if (
                ((It = 0),
                (b = G = H = null),
                (Bn = !1),
                (rr = 0),
                (lu.current = null),
                n === null || n.return === null)
            ) {
                (q = 1), (ir = t), (X = null);
                break;
            }
            e: {
                var o = e,
                    i = n.return,
                    u = n,
                    s = t;
                if (
                    ((t = re),
                    (u.flags |= 32768),
                    s !== null &&
                        typeof s == 'object' &&
                        typeof s.then == 'function')
                ) {
                    var c = s,
                        h = u,
                        f = h.tag;
                    if (!(h.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var m = h.alternate;
                        m
                            ? ((h.updateQueue = m.updateQueue),
                              (h.memoizedState = m.memoizedState),
                              (h.lanes = m.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var k = ms(i);
                    if (k !== null) {
                        (k.flags &= -257),
                            ys(k, i, u, o, t),
                            k.mode & 1 && hs(o, c, t),
                            (t = k),
                            (s = c);
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set();
                            v.add(s), (t.updateQueue = v);
                        } else y.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            hs(o, c, t), au();
                            break e;
                        }
                        s = Error(S(426));
                    }
                } else if (B && u.mode & 1) {
                    var T = ms(i);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                            ys(T, i, u, o, t),
                            Vi(pn(s, u));
                        break e;
                    }
                }
                (o = s = pn(s, u)),
                    q !== 4 && (q = 2),
                    Hn === null ? (Hn = [o]) : Hn.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var p = Oc(o, s, t);
                            us(o, p);
                            break e;
                        case 1:
                            u = s;
                            var a = o.type,
                                d = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof a.getDerivedStateFromError ==
                                    'function' ||
                                    (d !== null &&
                                        typeof d.componentDidCatch ==
                                            'function' &&
                                        (vt === null || !vt.has(d))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = Lc(o, u, t);
                                us(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Gc(n);
        } catch (E) {
            (t = E), X === n && n !== null && (X = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Xc() {
    var e = ml.current;
    return (ml.current = hl), e === null ? hl : e;
}
function au() {
    (q === 0 || q === 3 || q === 2) && (q = 4),
        ee === null || (!(Ut & 268435455) && !(Ll & 268435455)) || at(ee, re);
}
function gl(e, t) {
    var n = D;
    D |= 2;
    var r = Xc();
    (ee !== e || re !== t) && ((Ke = null), jt(e, t));
    do
        try {
            Hp();
            break;
        } catch (l) {
            Jc(e, l);
        }
    while (1);
    if ((Qi(), (D = n), (ml.current = r), X !== null)) throw Error(S(261));
    return (ee = null), (re = 0), q;
}
function Hp() {
    for (; X !== null; ) Yc(X);
}
function Vp() {
    for (; X !== null && !hd(); ) Yc(X);
}
function Yc(e) {
    var t = Zc(e.alternate, e, ge);
    (e.memoizedProps = e.pendingProps),
        t === null ? Gc(e) : (X = t),
        (lu.current = null);
}
function Gc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Ap(n, t)), n !== null)) {
                (n.flags &= 32767), (X = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (q = 6), (X = null);
                return;
            }
        } else if (((n = Dp(n, t, ge)), n !== null)) {
            X = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            X = t;
            return;
        }
        X = t = e;
    } while (t !== null);
    q === 0 && (q = 5);
}
function Rt(e, t, n) {
    var r = A,
        l = Ne.transition;
    try {
        (Ne.transition = null), (A = 1), Wp(e, t, n, r);
    } finally {
        (Ne.transition = l), (A = r);
    }
    return null;
}
function Wp(e, t, n, r) {
    do un();
    while (ft !== null);
    if (D & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(S(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (Cd(e, o),
        e === ee && ((X = ee = null), (re = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            jr ||
            ((jr = !0),
            bc(br, function () {
                return un(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Ne.transition), (Ne.transition = null);
        var i = A;
        A = 1;
        var u = D;
        (D |= 4),
            (lu.current = null),
            Up(e, n),
            Wc(n, e),
            cp(Ko),
            (tl = !!Qo),
            (Ko = Qo = null),
            (e.current = n),
            Mp(n),
            md(),
            (D = u),
            (A = i),
            (Ne.transition = o);
    } else e.current = n;
    if (
        (jr && ((jr = !1), (ft = e), (vl = l)),
        (o = e.pendingLanes),
        o === 0 && (vt = null),
        gd(n.stateNode),
        ve(e, J()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (yl) throw ((yl = !1), (e = di), (di = null), e);
    return (
        vl & 1 && e.tag !== 0 && un(),
        (o = e.pendingLanes),
        o & 1 ? (e === pi ? Vn++ : ((Vn = 0), (pi = e))) : (Vn = 0),
        Ct(),
        null
    );
}
function un() {
    if (ft !== null) {
        var e = Ra(vl),
            t = Ne.transition,
            n = A;
        try {
            if (((Ne.transition = null), (A = 16 > e ? 16 : e), ft === null))
                var r = !1;
            else {
                if (((e = ft), (ft = null), (vl = 0), D & 6))
                    throw Error(S(331));
                var l = D;
                for (D |= 4, x = e.current; x !== null; ) {
                    var o = x,
                        i = o.child;
                    if (x.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var c = u[s];
                                for (x = c; x !== null; ) {
                                    var h = x;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            $n(8, h, o);
                                    }
                                    var f = h.child;
                                    if (f !== null) (f.return = h), (x = f);
                                    else
                                        for (; x !== null; ) {
                                            h = x;
                                            var m = h.sibling,
                                                k = h.return;
                                            if (($c(h), h === c)) {
                                                x = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = k), (x = m);
                                                break;
                                            }
                                            x = k;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var T = v.sibling;
                                        (v.sibling = null), (v = T);
                                    } while (v !== null);
                                }
                            }
                            x = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (x = i);
                    else
                        e: for (; x !== null; ) {
                            if (((o = x), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        $n(9, o, o.return);
                                }
                            var p = o.sibling;
                            if (p !== null) {
                                (p.return = o.return), (x = p);
                                break e;
                            }
                            x = o.return;
                        }
                }
                var a = e.current;
                for (x = a; x !== null; ) {
                    i = x;
                    var d = i.child;
                    if (i.subtreeFlags & 2064 && d !== null)
                        (d.return = i), (x = d);
                    else
                        e: for (i = a; x !== null; ) {
                            if (((u = x), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ol(9, u);
                                    }
                                } catch (E) {
                                    W(u, u.return, E);
                                }
                            if (u === i) {
                                x = null;
                                break e;
                            }
                            var w = u.sibling;
                            if (w !== null) {
                                (w.return = u.return), (x = w);
                                break e;
                            }
                            x = u.return;
                        }
                }
                if (
                    ((D = l),
                    Ct(),
                    Ve && typeof Ve.onPostCommitFiberRoot == 'function')
                )
                    try {
                        Ve.onPostCommitFiberRoot(El, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (A = n), (Ne.transition = t);
        }
    }
    return !1;
}
function Rs(e, t, n) {
    (t = pn(n, t)),
        (t = Oc(e, t, 1)),
        (e = yt(e, t, 1)),
        (t = ce()),
        e !== null && (ar(e, 1, t), ve(e, t));
}
function W(e, t, n) {
    if (e.tag === 3) Rs(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Rs(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (vt === null || !vt.has(r)))
                ) {
                    (e = pn(n, e)),
                        (e = Lc(t, e, 1)),
                        (t = yt(t, e, 1)),
                        (e = ce()),
                        t !== null && (ar(t, 1, e), ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Qp(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ce()),
        (e.pingedLanes |= e.suspendedLanes & n),
        ee === e &&
            (re & n) === n &&
            (q === 4 || (q === 3 && (re & 130023424) === re && 500 > J() - iu)
                ? jt(e, 0)
                : (ou |= n)),
        ve(e, t);
}
function qc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = xr), (xr <<= 1), !(xr & 130023424) && (xr = 4194304))
            : (t = 1));
    var n = ce();
    (e = et(e, t)), e !== null && (ar(e, t, n), ve(e, n));
}
function Kp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), qc(e, n);
}
function Jp(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(S(314));
    }
    r !== null && r.delete(t), qc(e, n);
}
var Zc;
Zc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (he = !1), Fp(e, t, n);
            he = !!(e.flags & 131072);
        }
    else (he = !1), B && t.flags & 1048576 && tc(t, sl, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Vr(e, t), (e = t.pendingProps);
            var l = an(t, se.current);
            on(t, n), (l = bi(null, t, r, e, l, n));
            var o = eu();
            return (
                (t.flags |= 1),
                typeof l == 'object' &&
                l !== null &&
                typeof l.render == 'function' &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ye(r) ? ((o = !0), il(t)) : (o = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      Xi(t),
                      (l.updater = Tl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      ti(t, r, e, n),
                      (t = li(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      B && o && $i(t),
                      ae(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Vr(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = Yp(r)),
                    (e = je(r, e)),
                    l)
                ) {
                    case 0:
                        t = ri(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ws(null, t, r, e, n);
                        break e;
                    case 11:
                        t = vs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = gs(null, t, r, je(r.type, e), n);
                        break e;
                }
                throw Error(S(306, r, ''));
            }
            return t;
        case 0:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                ri(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                ws(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((Dc(t), e === null)) throw Error(S(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (l = o.element),
                    oc(e, t),
                    fl(t, r, null, n);
                var i = t.memoizedState;
                if (((r = i.element), o.isDehydrated))
                    if (
                        ((o = {
                            element: r,
                            isDehydrated: !1,
                            cache: i.cache,
                            pendingSuspenseBoundaries:
                                i.pendingSuspenseBoundaries,
                            transitions: i.transitions,
                        }),
                        (t.updateQueue.baseState = o),
                        (t.memoizedState = o),
                        t.flags & 256)
                    ) {
                        (l = pn(Error(S(423)), t)), (t = Ss(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = pn(Error(S(424)), t)), (t = Ss(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            we = mt(t.stateNode.containerInfo.firstChild),
                                Se = t,
                                B = !0,
                                De = null,
                                n = ac(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((cn(), r === l)) {
                        t = tt(e, t, n);
                        break e;
                    }
                    ae(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                cc(t),
                e === null && Zo(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                Jo(r, l)
                    ? (i = null)
                    : o !== null && Jo(r, o) && (t.flags |= 32),
                Fc(e, t),
                ae(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Zo(t), null;
        case 13:
            return Ac(e, t, n);
        case 4:
            return (
                Yi(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = fn(t, null, r, n)) : ae(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                vs(e, t, r, l, n)
            );
        case 7:
            return ae(e, t, t.pendingProps, n), t.child;
        case 8:
            return ae(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ae(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (l = t.pendingProps),
                    (o = t.memoizedProps),
                    (i = l.value),
                    I(al, r._currentValue),
                    (r._currentValue = i),
                    o !== null)
                )
                    if (Ue(o.value, i)) {
                        if (o.children === l.children && !me.current) {
                            t = tt(e, t, n);
                            break e;
                        }
                    } else
                        for (
                            o = t.child, o !== null && (o.return = t);
                            o !== null;

                        ) {
                            var u = o.dependencies;
                            if (u !== null) {
                                i = o.child;
                                for (var s = u.firstContext; s !== null; ) {
                                    if (s.context === r) {
                                        if (o.tag === 1) {
                                            (s = Ge(-1, n & -n)), (s.tag = 2);
                                            var c = o.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var h = c.pending;
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next),
                                                      (h.next = s)),
                                                    (c.pending = s);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= n),
                                            bo(o.return, n, t),
                                            (u.lanes |= n);
                                        break;
                                    }
                                    s = s.next;
                                }
                            } else if (o.tag === 10)
                                i = o.type === t.type ? null : o.child;
                            else if (o.tag === 18) {
                                if (((i = o.return), i === null))
                                    throw Error(S(341));
                                (i.lanes |= n),
                                    (u = i.alternate),
                                    u !== null && (u.lanes |= n),
                                    bo(i, n, t),
                                    (i = o.sibling);
                            } else i = o.child;
                            if (i !== null) i.return = o;
                            else
                                for (i = o; i !== null; ) {
                                    if (i === t) {
                                        i = null;
                                        break;
                                    }
                                    if (((o = i.sibling), o !== null)) {
                                        (o.return = i.return), (i = o);
                                        break;
                                    }
                                    i = i.return;
                                }
                            o = i;
                        }
                ae(e, t, l.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (l = t.type),
                (r = t.pendingProps.children),
                on(t, n),
                (l = Re(l)),
                (r = r(l)),
                (t.flags |= 1),
                ae(e, t, r, n),
                t.child
            );
        case 14:
            return (
                (r = t.type),
                (l = je(r, t.pendingProps)),
                (l = je(r.type, l)),
                gs(e, t, r, l, n)
            );
        case 15:
            return zc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                Vr(e, t),
                (t.tag = 1),
                ye(r) ? ((e = !0), il(t)) : (e = !1),
                on(t, n),
                uc(t, r, l),
                ti(t, r, l, n),
                li(null, t, r, !0, e, n)
            );
        case 19:
            return Ic(e, t, n);
        case 22:
            return jc(e, t, n);
    }
    throw Error(S(156, t.tag));
};
function bc(e, t) {
    return _a(e, t);
}
function Xp(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function Pe(e, t, n, r) {
    return new Xp(e, t, n, r);
}
function cu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Yp(e) {
    if (typeof e == 'function') return cu(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Ri)) return 11;
        if (e === Oi) return 14;
    }
    return 2;
}
function wt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Pe(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function Kr(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) cu(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
        e: switch (e) {
            case Wt:
                return Ft(n.children, l, o, t);
            case Ti:
                (i = 8), (l |= 8);
                break;
            case _o:
                return (
                    (e = Pe(12, n, t, l | 2)),
                    (e.elementType = _o),
                    (e.lanes = o),
                    e
                );
            case Po:
                return (
                    (e = Pe(13, n, t, l)),
                    (e.elementType = Po),
                    (e.lanes = o),
                    e
                );
            case No:
                return (
                    (e = Pe(19, n, t, l)),
                    (e.elementType = No),
                    (e.lanes = o),
                    e
                );
            case sa:
                return zl(n, l, o, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case ia:
                            i = 10;
                            break e;
                        case ua:
                            i = 9;
                            break e;
                        case Ri:
                            i = 11;
                            break e;
                        case Oi:
                            i = 14;
                            break e;
                        case it:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(S(130, e == null ? e : typeof e, ''));
        }
    return (
        (t = Pe(i, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function Ft(e, t, n, r) {
    return (e = Pe(7, e, r, t)), (e.lanes = n), e;
}
function zl(e, t, n, r) {
    return (
        (e = Pe(22, e, r, t)),
        (e.elementType = sa),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function vo(e, t, n) {
    return (e = Pe(6, e, null, t)), (e.lanes = n), e;
}
function go(e, t, n) {
    return (
        (t = Pe(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Gp(e, t, n, r, l) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ql(0)),
        (this.expirationTimes = ql(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = ql(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function fu(e, t, n, r, l, o, i, u, s) {
    return (
        (e = new Gp(e, t, n, u, s)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Pe(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Xi(o),
        e
    );
}
function qp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Vt,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function ef(e) {
    if (!e) return kt;
    e = e._reactInternals;
    e: {
        if ($t(e) !== e || e.tag !== 1) throw Error(S(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (ye(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(S(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (ye(n)) return ba(e, n, t);
    }
    return t;
}
function tf(e, t, n, r, l, o, i, u, s) {
    return (
        (e = fu(n, r, !0, e, l, o, i, u, s)),
        (e.context = ef(null)),
        (n = e.current),
        (r = ce()),
        (l = gt(n)),
        (o = Ge(r, l)),
        (o.callback = t ?? null),
        yt(n, o, l),
        (e.current.lanes = l),
        ar(e, l, r),
        ve(e, r),
        e
    );
}
function jl(e, t, n, r) {
    var l = t.current,
        o = ce(),
        i = gt(l);
    return (
        (n = ef(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ge(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = yt(l, t, i)),
        e !== null && (Ie(e, l, i, o), Br(e, l, i)),
        i
    );
}
function wl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Os(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function du(e, t) {
    Os(e, t), (e = e.alternate) && Os(e, t);
}
function Zp() {
    return null;
}
var nf =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function pu(e) {
    this._internalRoot = e;
}
Fl.prototype.render = pu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    jl(e, t, null, null);
};
Fl.prototype.unmount = pu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Mt(function () {
            jl(null, e, null, null);
        }),
            (t[be] = null);
    }
};
function Fl(e) {
    this._internalRoot = e;
}
Fl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = za();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < st.length && t !== 0 && t < st[n].priority; n++);
        st.splice(n, 0, e), n === 0 && Fa(e);
    }
};
function hu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Dl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Ls() {}
function bp(e, t, n, r, l) {
    if (l) {
        if (typeof r == 'function') {
            var o = r;
            r = function () {
                var c = wl(i);
                o.call(c);
            };
        }
        var i = tf(t, r, e, 0, null, !1, !1, '', Ls);
        return (
            (e._reactRootContainer = i),
            (e[be] = i.current),
            Zn(e.nodeType === 8 ? e.parentNode : e),
            Mt(),
            i
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
        var u = r;
        r = function () {
            var c = wl(s);
            u.call(c);
        };
    }
    var s = fu(e, 0, !1, null, null, !1, !1, '', Ls);
    return (
        (e._reactRootContainer = s),
        (e[be] = s.current),
        Zn(e.nodeType === 8 ? e.parentNode : e),
        Mt(function () {
            jl(t, s, n, r);
        }),
        s
    );
}
function Al(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == 'function') {
            var u = l;
            l = function () {
                var s = wl(i);
                u.call(s);
            };
        }
        jl(t, i, e, l);
    } else i = bp(n, t, e, l, r);
    return wl(i);
}
Oa = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = jn(t.pendingLanes);
                n !== 0 &&
                    (ji(t, n | 1),
                    ve(t, J()),
                    !(D & 6) && ((hn = J() + 500), Ct()));
            }
            break;
        case 13:
            Mt(function () {
                var r = et(e, 1);
                if (r !== null) {
                    var l = ce();
                    Ie(r, e, 1, l);
                }
            }),
                du(e, 1);
    }
};
Fi = function (e) {
    if (e.tag === 13) {
        var t = et(e, 134217728);
        if (t !== null) {
            var n = ce();
            Ie(t, e, 134217728, n);
        }
        du(e, 134217728);
    }
};
La = function (e) {
    if (e.tag === 13) {
        var t = gt(e),
            n = et(e, t);
        if (n !== null) {
            var r = ce();
            Ie(n, e, t, r);
        }
        du(e, t);
    }
};
za = function () {
    return A;
};
ja = function (e, t) {
    var n = A;
    try {
        return (A = e), t();
    } finally {
        A = n;
    }
};
Io = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Oo(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = Pl(r);
                        if (!l) throw Error(S(90));
                        ca(r), Oo(r, l);
                    }
                }
            }
            break;
        case 'textarea':
            da(e, n);
            break;
        case 'select':
            (t = n.value), t != null && tn(e, !!n.multiple, t, !1);
    }
};
wa = uu;
Sa = Mt;
var eh = { usingClientEntryPoint: !1, Events: [fr, Xt, Pl, va, ga, uu] },
    Rn = {
        findFiberByHostInstance: Ot,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    th = {
        bundleType: Rn.bundleType,
        version: Rn.version,
        rendererPackageName: Rn.rendererPackageName,
        rendererConfig: Rn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: nt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = xa(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Rn.findFiberByHostInstance || Zp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fr.isDisabled && Fr.supportsFiber)
        try {
            (El = Fr.inject(th)), (Ve = Fr);
        } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eh;
Ee.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!hu(t)) throw Error(S(200));
    return qp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
    if (!hu(e)) throw Error(S(299));
    var n = !1,
        r = '',
        l = nf;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = fu(e, 1, !1, null, null, n, !1, r, l)),
        (e[be] = t.current),
        Zn(e.nodeType === 8 ? e.parentNode : e),
        new pu(t)
    );
};
Ee.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(S(188))
            : ((e = Object.keys(e).join(',')), Error(S(268, e)));
    return (e = xa(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
    return Mt(e);
};
Ee.hydrate = function (e, t, n) {
    if (!Dl(t)) throw Error(S(200));
    return Al(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
    if (!hu(e)) throw Error(S(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = nf;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = tf(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[be] = t.current),
        Zn(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new Fl(t);
};
Ee.render = function (e, t, n) {
    if (!Dl(t)) throw Error(S(200));
    return Al(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
    if (!Dl(e)) throw Error(S(40));
    return e._reactRootContainer
        ? (Mt(function () {
              Al(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[be] = null);
              });
          }),
          !0)
        : !1;
};
Ee.unstable_batchedUpdates = uu;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!Dl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Al(e, t, n, !1, r);
};
Ee.version = '18.2.0-next-9e3b772b8-20220608';
function rf() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rf);
        } catch (e) {
            console.error(e);
        }
}
rf(), (ta.exports = Ee);
var nh = ta.exports,
    zs = nh;
(xo.createRoot = zs.createRoot), (xo.hydrateRoot = zs.hydrateRoot);
var lf = { exports: {} },
    rh = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
    lh = rh,
    oh = lh;
function of() {}
function uf() {}
uf.resetWarningCache = of;
var ih = function () {
    function e(r, l, o, i, u, s) {
        if (s !== oh) {
            var c = new Error(
                'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            );
            throw ((c.name = 'Invariant Violation'), c);
        }
    }
    e.isRequired = e;
    function t() {
        return e;
    }
    var n = {
        array: e,
        bigint: e,
        bool: e,
        func: e,
        number: e,
        object: e,
        string: e,
        symbol: e,
        any: e,
        arrayOf: t,
        element: e,
        elementType: e,
        instanceOf: t,
        node: e,
        objectOf: t,
        oneOf: t,
        oneOfType: t,
        shape: t,
        exact: t,
        checkPropTypes: uf,
        resetWarningCache: of,
    };
    return (n.PropTypes = n), n;
};
lf.exports = ih();
var uh = lf.exports;
const ot = Lf(uh),
    sf = ({ blog: e, onLike: t, onRemove: n }) => {
        const [r, l] = ne.useState(!1),
            o = () => l(!r),
            i = {
                paddingTop: 10,
                paddingLeft: 2,
                border: 'solid',
                borderWidth: 1,
                marginBottom: 5,
            },
            u = { display: r ? '' : 'none' },
            s = () => {
                window.confirm(`Remove blog "${e.title}" by ${e.author}?`) &&
                    n(e.id);
            };
        return R.jsx('div', {
            children: R.jsxs('div', {
                style: i,
                children: [
                    R.jsxs('div', {
                        children: [
                            e.title,
                            '  ',
                            R.jsx('button', {
                                onClick: o,
                                children: r ? 'hide' : 'view',
                            }),
                        ],
                    }),
                    R.jsxs('div', {
                        style: u,
                        children: [
                            R.jsx('p', { children: e.url }),
                            R.jsxs('p', {
                                children: [
                                    e.likes,
                                    ' likes ',
                                    R.jsx('button', {
                                        onClick: () => t(e),
                                        children: 'like',
                                    }),
                                ],
                            }),
                            R.jsx('p', { children: e.author }),
                            e.user &&
                                R.jsx('button', {
                                    onClick: s,
                                    children: 'remove',
                                }),
                        ],
                    }),
                ],
            }),
        });
    };
sf.propTypes = {
    blog: ot.shape({
        id: ot.string.isRequired,
        title: ot.string.isRequired,
        author: ot.string.isRequired,
        url: ot.string.isRequired,
        likes: ot.number.isRequired,
    }).isRequired,
    onLike: ot.func.isRequired,
};
const sh = ({ createBlog: e }) => {
        const [t, n] = ne.useState(''),
            [r, l] = ne.useState(''),
            [o, i] = ne.useState(''),
            u = (s) => {
                s.preventDefault(),
                    e({ title: t, author: r, url: o }),
                    n(''),
                    l(''),
                    i('');
            };
        return R.jsxs('form', {
            onSubmit: u,
            children: [
                R.jsx('h2', { children: 'Create New Blog' }),
                R.jsxs('div', {
                    children: [
                        'Title: ',
                        R.jsx('input', {
                            value: t,
                            onChange: (s) => n(s.target.value),
                        }),
                    ],
                }),
                R.jsxs('div', {
                    children: [
                        'Author: ',
                        R.jsx('input', {
                            value: r,
                            onChange: (s) => l(s.target.value),
                        }),
                    ],
                }),
                R.jsxs('div', {
                    children: [
                        'URL: ',
                        R.jsx('input', {
                            value: o,
                            onChange: (s) => i(s.target.value),
                        }),
                    ],
                }),
                R.jsx('button', { type: 'submit', children: 'create' }),
            ],
        });
    },
    js = ({ message: e, isError: t }) => {
        if (e === null) return null;
        const n = {
            color: t ? 'red' : 'green',
            background: 'lightgrey',
            fontSize: '20px',
            borderStyle: 'solid',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
        };
        return R.jsx('div', { style: n, children: e });
    },
    mu = ne.forwardRef((e, t) => {
        const [n, r] = ne.useState(!1),
            l = { display: n ? 'none' : '' },
            o = { display: n ? '' : 'none' },
            i = () => {
                r(!n);
            };
        return (
            ne.useImperativeHandle(t, () => ({ toggleVisibility: i })),
            R.jsxs('div', {
                children: [
                    R.jsx('div', {
                        style: l,
                        children: R.jsx('button', {
                            onClick: i,
                            children: e.buttonLabel,
                        }),
                    }),
                    R.jsxs('div', {
                        style: o,
                        children: [
                            e.children,
                            R.jsx('button', { onClick: i, children: 'cancel' }),
                        ],
                    }),
                ],
            })
        );
    });
mu.displayName = 'Togglable';
mu.propTypes = { buttonLabel: ot.string.isRequired };
function af(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: ah } = Object.prototype,
    { getPrototypeOf: yu } = Object,
    Il = ((e) => (t) => {
        const n = ah.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Qe = (e) => ((e = e.toLowerCase()), (t) => Il(t) === e),
    Ul = (e) => (t) => typeof t === e,
    { isArray: wn } = Array,
    ur = Ul('undefined');
function ch(e) {
    return (
        e !== null &&
        !ur(e) &&
        e.constructor !== null &&
        !ur(e.constructor) &&
        Te(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const cf = Qe('ArrayBuffer');
function fh(e) {
    let t;
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && cf(e.buffer)),
        t
    );
}
const dh = Ul('string'),
    Te = Ul('function'),
    ff = Ul('number'),
    Ml = (e) => e !== null && typeof e == 'object',
    ph = (e) => e === !0 || e === !1,
    Jr = (e) => {
        if (Il(e) !== 'object') return !1;
        const t = yu(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    hh = Qe('Date'),
    mh = Qe('File'),
    yh = Qe('Blob'),
    vh = Qe('FileList'),
    gh = (e) => Ml(e) && Te(e.pipe),
    wh = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (Te(e.append) &&
                    ((t = Il(e)) === 'formdata' ||
                        (t === 'object' &&
                            Te(e.toString) &&
                            e.toString() === '[object FormData]'))))
        );
    },
    Sh = Qe('URLSearchParams'),
    kh = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function pr(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let r, l;
    if ((typeof e != 'object' && (e = [e]), wn(e)))
        for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length;
        let u;
        for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e);
    }
}
function df(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        l;
    for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
    return null;
}
const pf = (() =>
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : global)(),
    hf = (e) => !ur(e) && e !== pf;
function yi() {
    const { caseless: e } = (hf(this) && this) || {},
        t = {},
        n = (r, l) => {
            const o = (e && df(t, l)) || l;
            Jr(t[o]) && Jr(r)
                ? (t[o] = yi(t[o], r))
                : Jr(r)
                  ? (t[o] = yi({}, r))
                  : wn(r)
                    ? (t[o] = r.slice())
                    : (t[o] = r);
        };
    for (let r = 0, l = arguments.length; r < l; r++)
        arguments[r] && pr(arguments[r], n);
    return t;
}
const Eh = (e, t, n, { allOwnKeys: r } = {}) => (
        pr(
            t,
            (l, o) => {
                n && Te(l) ? (e[o] = af(l, n)) : (e[o] = l);
            },
            { allOwnKeys: r }
        ),
        e
    ),
    xh = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Ch = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    _h = (e, t, n, r) => {
        let l, o, i;
        const u = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
                (i = l[o]),
                    (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
            e = n !== !1 && yu(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    Ph = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    Nh = (e) => {
        if (!e) return null;
        if (wn(e)) return e;
        let t = e.length;
        if (!ff(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    Th = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && yu(Uint8Array)),
    Rh = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let l;
        for (; (l = r.next()) && !l.done; ) {
            const o = l.value;
            t.call(e, o[0], o[1]);
        }
    },
    Oh = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    Lh = Qe('HTMLFormElement'),
    zh = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
            return r.toUpperCase() + l;
        }),
    Fs = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    jh = Qe('RegExp'),
    mf = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        pr(n, (l, o) => {
            let i;
            (i = t(l, o, e)) !== !1 && (r[o] = i || l);
        }),
            Object.defineProperties(e, r);
    },
    Fh = (e) => {
        mf(e, (t, n) => {
            if (Te(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
                return !1;
            const r = e[n];
            if (Te(r)) {
                if (((t.enumerable = !1), 'writable' in t)) {
                    t.writable = !1;
                    return;
                }
                t.set ||
                    (t.set = () => {
                        throw Error(
                            "Can not rewrite read-only method '" + n + "'"
                        );
                    });
            }
        });
    },
    Dh = (e, t) => {
        const n = {},
            r = (l) => {
                l.forEach((o) => {
                    n[o] = !0;
                });
            };
        return wn(e) ? r(e) : r(String(e).split(t)), n;
    },
    Ah = () => {},
    Ih = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    wo = 'abcdefghijklmnopqrstuvwxyz',
    Ds = '0123456789',
    yf = { DIGIT: Ds, ALPHA: wo, ALPHA_DIGIT: wo + wo.toUpperCase() + Ds },
    Uh = (e = 16, t = yf.ALPHA_DIGIT) => {
        let n = '';
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function Mh(e) {
    return !!(
        e &&
        Te(e.append) &&
        e[Symbol.toStringTag] === 'FormData' &&
        e[Symbol.iterator]
    );
}
const Bh = (e) => {
        const t = new Array(10),
            n = (r, l) => {
                if (Ml(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!('toJSON' in r)) {
                        t[l] = r;
                        const o = wn(r) ? [] : {};
                        return (
                            pr(r, (i, u) => {
                                const s = n(i, l + 1);
                                !ur(s) && (o[u] = s);
                            }),
                            (t[l] = void 0),
                            o
                        );
                    }
                }
                return r;
            };
        return n(e, 0);
    },
    $h = Qe('AsyncFunction'),
    Hh = (e) => e && (Ml(e) || Te(e)) && Te(e.then) && Te(e.catch),
    g = {
        isArray: wn,
        isArrayBuffer: cf,
        isBuffer: ch,
        isFormData: wh,
        isArrayBufferView: fh,
        isString: dh,
        isNumber: ff,
        isBoolean: ph,
        isObject: Ml,
        isPlainObject: Jr,
        isUndefined: ur,
        isDate: hh,
        isFile: mh,
        isBlob: yh,
        isRegExp: jh,
        isFunction: Te,
        isStream: gh,
        isURLSearchParams: Sh,
        isTypedArray: Th,
        isFileList: vh,
        forEach: pr,
        merge: yi,
        extend: Eh,
        trim: kh,
        stripBOM: xh,
        inherits: Ch,
        toFlatObject: _h,
        kindOf: Il,
        kindOfTest: Qe,
        endsWith: Ph,
        toArray: Nh,
        forEachEntry: Rh,
        matchAll: Oh,
        isHTMLForm: Lh,
        hasOwnProperty: Fs,
        hasOwnProp: Fs,
        reduceDescriptors: mf,
        freezeMethods: Fh,
        toObjectSet: Dh,
        toCamelCase: zh,
        noop: Ah,
        toFiniteNumber: Ih,
        findKey: df,
        global: pf,
        isContextDefined: hf,
        ALPHABET: yf,
        generateString: Uh,
        isSpecCompliantForm: Mh,
        toJSONObject: Bh,
        isAsyncFn: $h,
        isThenable: Hh,
    };
function F(e, t, n, r, l) {
    Error.call(this),
        Error.captureStackTrace
            ? Error.captureStackTrace(this, this.constructor)
            : (this.stack = new Error().stack),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        l && (this.response = l);
}
g.inherits(F, Error, {
    toJSON: function () {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: g.toJSONObject(this.config),
            code: this.code,
            status:
                this.response && this.response.status
                    ? this.response.status
                    : null,
        };
    },
});
const vf = F.prototype,
    gf = {};
[
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
].forEach((e) => {
    gf[e] = { value: e };
});
Object.defineProperties(F, gf);
Object.defineProperty(vf, 'isAxiosError', { value: !0 });
F.from = (e, t, n, r, l, o) => {
    const i = Object.create(vf);
    return (
        g.toFlatObject(
            e,
            i,
            function (s) {
                return s !== Error.prototype;
            },
            (u) => u !== 'isAxiosError'
        ),
        F.call(i, e.message, t, n, r, l),
        (i.cause = e),
        (i.name = e.name),
        o && Object.assign(i, o),
        i
    );
};
const Vh = null;
function vi(e) {
    return g.isPlainObject(e) || g.isArray(e);
}
function wf(e) {
    return g.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function As(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (l, o) {
                  return (l = wf(l)), !n && o ? '[' + l + ']' : l;
              })
              .join(n ? '.' : '')
        : t;
}
function Wh(e) {
    return g.isArray(e) && !e.some(vi);
}
const Qh = g.toFlatObject(g, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function Bl(e, t, n) {
    if (!g.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new FormData()),
        (n = g.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (v, T) {
                return !g.isUndefined(T[v]);
            }
        ));
    const r = n.metaTokens,
        l = n.visitor || h,
        o = n.dots,
        i = n.indexes,
        s = (n.Blob || (typeof Blob < 'u' && Blob)) && g.isSpecCompliantForm(t);
    if (!g.isFunction(l)) throw new TypeError('visitor must be a function');
    function c(y) {
        if (y === null) return '';
        if (g.isDate(y)) return y.toISOString();
        if (!s && g.isBlob(y))
            throw new F('Blob is not supported. Use a Buffer instead.');
        return g.isArrayBuffer(y) || g.isTypedArray(y)
            ? s && typeof Blob == 'function'
                ? new Blob([y])
                : Buffer.from(y)
            : y;
    }
    function h(y, v, T) {
        let p = y;
        if (y && !T && typeof y == 'object') {
            if (g.endsWith(v, '{}'))
                (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
            else if (
                (g.isArray(y) && Wh(y)) ||
                ((g.isFileList(y) || g.endsWith(v, '[]')) && (p = g.toArray(y)))
            )
                return (
                    (v = wf(v)),
                    p.forEach(function (d, w) {
                        !(g.isUndefined(d) || d === null) &&
                            t.append(
                                i === !0
                                    ? As([v], w, o)
                                    : i === null
                                      ? v
                                      : v + '[]',
                                c(d)
                            );
                    }),
                    !1
                );
        }
        return vi(y) ? !0 : (t.append(As(T, v, o), c(y)), !1);
    }
    const f = [],
        m = Object.assign(Qh, {
            defaultVisitor: h,
            convertValue: c,
            isVisitable: vi,
        });
    function k(y, v) {
        if (!g.isUndefined(y)) {
            if (f.indexOf(y) !== -1)
                throw Error('Circular reference detected in ' + v.join('.'));
            f.push(y),
                g.forEach(y, function (p, a) {
                    (!(g.isUndefined(p) || p === null) &&
                        l.call(t, p, g.isString(a) ? a.trim() : a, v, m)) ===
                        !0 && k(p, v ? v.concat(a) : [a]);
                }),
                f.pop();
        }
    }
    if (!g.isObject(e)) throw new TypeError('data must be an object');
    return k(e), t;
}
function Is(e) {
    const t = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\0',
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
        return t[r];
    });
}
function vu(e, t) {
    (this._pairs = []), e && Bl(e, this, t);
}
const Sf = vu.prototype;
Sf.append = function (t, n) {
    this._pairs.push([t, n]);
};
Sf.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, Is);
          }
        : Is;
    return this._pairs
        .map(function (l) {
            return n(l[0]) + '=' + n(l[1]);
        }, '')
        .join('&');
};
function Kh(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function kf(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || Kh,
        l = n && n.serialize;
    let o;
    if (
        (l
            ? (o = l(t, n))
            : (o = g.isURLSearchParams(t)
                  ? t.toString()
                  : new vu(t, n).toString(r)),
        o)
    ) {
        const i = e.indexOf('#');
        i !== -1 && (e = e.slice(0, i)),
            (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
    }
    return e;
}
class Jh {
    constructor() {
        this.handlers = [];
    }
    use(t, n, r) {
        return (
            this.handlers.push({
                fulfilled: t,
                rejected: n,
                synchronous: r ? r.synchronous : !1,
                runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
        );
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
    }
    clear() {
        this.handlers && (this.handlers = []);
    }
    forEach(t) {
        g.forEach(this.handlers, function (r) {
            r !== null && t(r);
        });
    }
}
const Us = Jh,
    Ef = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Xh = typeof URLSearchParams < 'u' ? URLSearchParams : vu,
    Yh = typeof FormData < 'u' ? FormData : null,
    Gh = typeof Blob < 'u' ? Blob : null,
    qh = {
        isBrowser: !0,
        classes: { URLSearchParams: Xh, FormData: Yh, Blob: Gh },
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    xf = typeof window < 'u' && typeof document < 'u',
    Zh = ((e) => xf && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
        typeof navigator < 'u' && navigator.product
    ),
    bh = (() =>
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function')(),
    em = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: xf,
                hasStandardBrowserEnv: Zh,
                hasStandardBrowserWebWorkerEnv: bh,
            },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    He = { ...em, ...qh };
function tm(e, t) {
    return Bl(
        e,
        new He.classes.URLSearchParams(),
        Object.assign(
            {
                visitor: function (n, r, l, o) {
                    return He.isNode && g.isBuffer(n)
                        ? (this.append(r, n.toString('base64')), !1)
                        : o.defaultVisitor.apply(this, arguments);
                },
            },
            t
        )
    );
}
function nm(e) {
    return g
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function rm(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const l = n.length;
    let o;
    for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
    return t;
}
function Cf(e) {
    function t(n, r, l, o) {
        let i = n[o++];
        if (i === '__proto__') return !0;
        const u = Number.isFinite(+i),
            s = o >= n.length;
        return (
            (i = !i && g.isArray(l) ? l.length : i),
            s
                ? (g.hasOwnProp(l, i) ? (l[i] = [l[i], r]) : (l[i] = r), !u)
                : ((!l[i] || !g.isObject(l[i])) && (l[i] = []),
                  t(n, r, l[i], o) && g.isArray(l[i]) && (l[i] = rm(l[i])),
                  !u)
        );
    }
    if (g.isFormData(e) && g.isFunction(e.entries)) {
        const n = {};
        return (
            g.forEachEntry(e, (r, l) => {
                t(nm(r), l, n, 0);
            }),
            n
        );
    }
    return null;
}
function lm(e, t, n) {
    if (g.isString(e))
        try {
            return (t || JSON.parse)(e), g.trim(e);
        } catch (r) {
            if (r.name !== 'SyntaxError') throw r;
        }
    return (n || JSON.stringify)(e);
}
const gu = {
    transitional: Ef,
    adapter: ['xhr', 'http'],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || '',
                l = r.indexOf('application/json') > -1,
                o = g.isObject(t);
            if (
                (o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
            )
                return l ? JSON.stringify(Cf(t)) : t;
            if (
                g.isArrayBuffer(t) ||
                g.isBuffer(t) ||
                g.isStream(t) ||
                g.isFile(t) ||
                g.isBlob(t)
            )
                return t;
            if (g.isArrayBufferView(t)) return t.buffer;
            if (g.isURLSearchParams(t))
                return (
                    n.setContentType(
                        'application/x-www-form-urlencoded;charset=utf-8',
                        !1
                    ),
                    t.toString()
                );
            let u;
            if (o) {
                if (r.indexOf('application/x-www-form-urlencoded') > -1)
                    return tm(t, this.formSerializer).toString();
                if (
                    (u = g.isFileList(t)) ||
                    r.indexOf('multipart/form-data') > -1
                ) {
                    const s = this.env && this.env.FormData;
                    return Bl(
                        u ? { 'files[]': t } : t,
                        s && new s(),
                        this.formSerializer
                    );
                }
            }
            return o || l
                ? (n.setContentType('application/json', !1), lm(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || gu.transitional,
                r = n && n.forcedJSONParsing,
                l = this.responseType === 'json';
            if (t && g.isString(t) && ((r && !this.responseType) || l)) {
                const i = !(n && n.silentJSONParsing) && l;
                try {
                    return JSON.parse(t);
                } catch (u) {
                    if (i)
                        throw u.name === 'SyntaxError'
                            ? F.from(
                                  u,
                                  F.ERR_BAD_RESPONSE,
                                  this,
                                  null,
                                  this.response
                              )
                            : u;
                }
            }
            return t;
        },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: He.classes.FormData, Blob: He.classes.Blob },
    validateStatus: function (t) {
        return t >= 200 && t < 300;
    },
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': void 0,
        },
    },
};
g.forEach(['delete', 'get', 'head', 'post', 'put', 'patch'], (e) => {
    gu.headers[e] = {};
});
const wu = gu,
    om = g.toObjectSet([
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
    ]),
    im = (e) => {
        const t = {};
        let n, r, l;
        return (
            e &&
                e
                    .split(
                        `
`
                    )
                    .forEach(function (i) {
                        (l = i.indexOf(':')),
                            (n = i.substring(0, l).trim().toLowerCase()),
                            (r = i.substring(l + 1).trim()),
                            !(!n || (t[n] && om[n])) &&
                                (n === 'set-cookie'
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ', ' + r : r));
                    }),
            t
        );
    },
    Ms = Symbol('internals');
function On(e) {
    return e && String(e).trim().toLowerCase();
}
function Xr(e) {
    return e === !1 || e == null ? e : g.isArray(e) ? e.map(Xr) : String(e);
}
function um(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const sm = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function So(e, t, n, r, l) {
    if (g.isFunction(r)) return r.call(this, t, n);
    if ((l && (t = n), !!g.isString(t))) {
        if (g.isString(r)) return t.indexOf(r) !== -1;
        if (g.isRegExp(r)) return r.test(t);
    }
}
function am(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function cm(e, t) {
    const n = g.toCamelCase(' ' + t);
    ['get', 'set', 'has'].forEach((r) => {
        Object.defineProperty(e, r + n, {
            value: function (l, o, i) {
                return this[r].call(this, t, l, o, i);
            },
            configurable: !0,
        });
    });
}
class $l {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const l = this;
        function o(u, s, c) {
            const h = On(s);
            if (!h) throw new Error('header name must be a non-empty string');
            const f = g.findKey(l, h);
            (!f ||
                l[f] === void 0 ||
                c === !0 ||
                (c === void 0 && l[f] !== !1)) &&
                (l[f || s] = Xr(u));
        }
        const i = (u, s) => g.forEach(u, (c, h) => o(c, h, s));
        return (
            g.isPlainObject(t) || t instanceof this.constructor
                ? i(t, n)
                : g.isString(t) && (t = t.trim()) && !sm(t)
                  ? i(im(t), n)
                  : t != null && o(n, t, r),
            this
        );
    }
    get(t, n) {
        if (((t = On(t)), t)) {
            const r = g.findKey(this, t);
            if (r) {
                const l = this[r];
                if (!n) return l;
                if (n === !0) return um(l);
                if (g.isFunction(n)) return n.call(this, l, r);
                if (g.isRegExp(n)) return n.exec(l);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(t, n) {
        if (((t = On(t)), t)) {
            const r = g.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || So(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let l = !1;
        function o(i) {
            if (((i = On(i)), i)) {
                const u = g.findKey(r, i);
                u && (!n || So(r, r[u], u, n)) && (delete r[u], (l = !0));
            }
        }
        return g.isArray(t) ? t.forEach(o) : o(t), l;
    }
    clear(t) {
        const n = Object.keys(this);
        let r = n.length,
            l = !1;
        for (; r--; ) {
            const o = n[r];
            (!t || So(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
        }
        return l;
    }
    normalize(t) {
        const n = this,
            r = {};
        return (
            g.forEach(this, (l, o) => {
                const i = g.findKey(r, o);
                if (i) {
                    (n[i] = Xr(l)), delete n[o];
                    return;
                }
                const u = t ? am(o) : String(o).trim();
                u !== o && delete n[o], (n[u] = Xr(l)), (r[u] = !0);
            }),
            this
        );
    }
    concat(...t) {
        return this.constructor.concat(this, ...t);
    }
    toJSON(t) {
        const n = Object.create(null);
        return (
            g.forEach(this, (r, l) => {
                r != null &&
                    r !== !1 &&
                    (n[l] = t && g.isArray(r) ? r.join(', ') : r);
            }),
            n
        );
    }
    [Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]();
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n)
            .join(`
`);
    }
    get [Symbol.toStringTag]() {
        return 'AxiosHeaders';
    }
    static from(t) {
        return t instanceof this ? t : new this(t);
    }
    static concat(t, ...n) {
        const r = new this(t);
        return n.forEach((l) => r.set(l)), r;
    }
    static accessor(t) {
        const r = (this[Ms] = this[Ms] = { accessors: {} }).accessors,
            l = this.prototype;
        function o(i) {
            const u = On(i);
            r[u] || (cm(l, i), (r[u] = !0));
        }
        return g.isArray(t) ? t.forEach(o) : o(t), this;
    }
}
$l.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
]);
g.reduceDescriptors($l.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r;
        },
    };
});
g.freezeMethods($l);
const qe = $l;
function ko(e, t) {
    const n = this || wu,
        r = t || n,
        l = qe.from(r.headers);
    let o = r.data;
    return (
        g.forEach(e, function (u) {
            o = u.call(n, o, l.normalize(), t ? t.status : void 0);
        }),
        l.normalize(),
        o
    );
}
function _f(e) {
    return !!(e && e.__CANCEL__);
}
function hr(e, t, n) {
    F.call(this, e ?? 'canceled', F.ERR_CANCELED, t, n),
        (this.name = 'CanceledError');
}
g.inherits(hr, F, { __CANCEL__: !0 });
function fm(e, t, n) {
    const r = n.config.validateStatus;
    !n.status || !r || r(n.status)
        ? e(n)
        : t(
              new F(
                  'Request failed with status code ' + n.status,
                  [F.ERR_BAD_REQUEST, F.ERR_BAD_RESPONSE][
                      Math.floor(n.status / 100) - 4
                  ],
                  n.config,
                  n.request,
                  n
              )
          );
}
const dm = He.hasStandardBrowserEnv
    ? {
          write(e, t, n, r, l, o) {
              const i = [e + '=' + encodeURIComponent(t)];
              g.isNumber(n) && i.push('expires=' + new Date(n).toGMTString()),
                  g.isString(r) && i.push('path=' + r),
                  g.isString(l) && i.push('domain=' + l),
                  o === !0 && i.push('secure'),
                  (document.cookie = i.join('; '));
          },
          read(e) {
              const t = document.cookie.match(
                  new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
              );
              return t ? decodeURIComponent(t[3]) : null;
          },
          remove(e) {
              this.write(e, '', Date.now() - 864e5);
          },
      }
    : {
          write() {},
          read() {
              return null;
          },
          remove() {},
      };
function pm(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function hm(e, t) {
    return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Pf(e, t) {
    return e && !pm(t) ? hm(e, t) : t;
}
const mm = He.hasStandardBrowserEnv
    ? (function () {
          const t = /(msie|trident)/i.test(navigator.userAgent),
              n = document.createElement('a');
          let r;
          function l(o) {
              let i = o;
              return (
                  t && (n.setAttribute('href', i), (i = n.href)),
                  n.setAttribute('href', i),
                  {
                      href: n.href,
                      protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                      host: n.host,
                      search: n.search ? n.search.replace(/^\?/, '') : '',
                      hash: n.hash ? n.hash.replace(/^#/, '') : '',
                      hostname: n.hostname,
                      port: n.port,
                      pathname:
                          n.pathname.charAt(0) === '/'
                              ? n.pathname
                              : '/' + n.pathname,
                  }
              );
          }
          return (
              (r = l(window.location.href)),
              function (i) {
                  const u = g.isString(i) ? l(i) : i;
                  return u.protocol === r.protocol && u.host === r.host;
              }
          );
      })()
    : (function () {
          return function () {
              return !0;
          };
      })();
function ym(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
}
function vm(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let l = 0,
        o = 0,
        i;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (s) {
            const c = Date.now(),
                h = r[o];
            i || (i = c), (n[l] = s), (r[l] = c);
            let f = o,
                m = 0;
            for (; f !== l; ) (m += n[f++]), (f = f % e);
            if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), c - i < t))
                return;
            const k = h && c - h;
            return k ? Math.round((m * 1e3) / k) : void 0;
        }
    );
}
function Bs(e, t) {
    let n = 0;
    const r = vm(50, 250);
    return (l) => {
        const o = l.loaded,
            i = l.lengthComputable ? l.total : void 0,
            u = o - n,
            s = r(u),
            c = o <= i;
        n = o;
        const h = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: u,
            rate: s || void 0,
            estimated: s && i && c ? (i - o) / s : void 0,
            event: l,
        };
        (h[t ? 'download' : 'upload'] = !0), e(h);
    };
}
const gm = typeof XMLHttpRequest < 'u',
    wm =
        gm &&
        function (e) {
            return new Promise(function (n, r) {
                let l = e.data;
                const o = qe.from(e.headers).normalize();
                let { responseType: i, withXSRFToken: u } = e,
                    s;
                function c() {
                    e.cancelToken && e.cancelToken.unsubscribe(s),
                        e.signal && e.signal.removeEventListener('abort', s);
                }
                let h;
                if (g.isFormData(l)) {
                    if (
                        He.hasStandardBrowserEnv ||
                        He.hasStandardBrowserWebWorkerEnv
                    )
                        o.setContentType(!1);
                    else if ((h = o.getContentType()) !== !1) {
                        const [v, ...T] = h
                            ? h
                                  .split(';')
                                  .map((p) => p.trim())
                                  .filter(Boolean)
                            : [];
                        o.setContentType(
                            [v || 'multipart/form-data', ...T].join('; ')
                        );
                    }
                }
                let f = new XMLHttpRequest();
                if (e.auth) {
                    const v = e.auth.username || '',
                        T = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : '';
                    o.set('Authorization', 'Basic ' + btoa(v + ':' + T));
                }
                const m = Pf(e.baseURL, e.url);
                f.open(
                    e.method.toUpperCase(),
                    kf(m, e.params, e.paramsSerializer),
                    !0
                ),
                    (f.timeout = e.timeout);
                function k() {
                    if (!f) return;
                    const v = qe.from(
                            'getAllResponseHeaders' in f &&
                                f.getAllResponseHeaders()
                        ),
                        p = {
                            data:
                                !i || i === 'text' || i === 'json'
                                    ? f.responseText
                                    : f.response,
                            status: f.status,
                            statusText: f.statusText,
                            headers: v,
                            config: e,
                            request: f,
                        };
                    fm(
                        function (d) {
                            n(d), c();
                        },
                        function (d) {
                            r(d), c();
                        },
                        p
                    ),
                        (f = null);
                }
                if (
                    ('onloadend' in f
                        ? (f.onloadend = k)
                        : (f.onreadystatechange = function () {
                              !f ||
                                  f.readyState !== 4 ||
                                  (f.status === 0 &&
                                      !(
                                          f.responseURL &&
                                          f.responseURL.indexOf('file:') === 0
                                      )) ||
                                  setTimeout(k);
                          }),
                    (f.onabort = function () {
                        f &&
                            (r(new F('Request aborted', F.ECONNABORTED, e, f)),
                            (f = null));
                    }),
                    (f.onerror = function () {
                        r(new F('Network Error', F.ERR_NETWORK, e, f)),
                            (f = null);
                    }),
                    (f.ontimeout = function () {
                        let T = e.timeout
                            ? 'timeout of ' + e.timeout + 'ms exceeded'
                            : 'timeout exceeded';
                        const p = e.transitional || Ef;
                        e.timeoutErrorMessage && (T = e.timeoutErrorMessage),
                            r(
                                new F(
                                    T,
                                    p.clarifyTimeoutError
                                        ? F.ETIMEDOUT
                                        : F.ECONNABORTED,
                                    e,
                                    f
                                )
                            ),
                            (f = null);
                    }),
                    He.hasStandardBrowserEnv &&
                        (u && g.isFunction(u) && (u = u(e)),
                        u || (u !== !1 && mm(m))))
                ) {
                    const v =
                        e.xsrfHeaderName &&
                        e.xsrfCookieName &&
                        dm.read(e.xsrfCookieName);
                    v && o.set(e.xsrfHeaderName, v);
                }
                l === void 0 && o.setContentType(null),
                    'setRequestHeader' in f &&
                        g.forEach(o.toJSON(), function (T, p) {
                            f.setRequestHeader(p, T);
                        }),
                    g.isUndefined(e.withCredentials) ||
                        (f.withCredentials = !!e.withCredentials),
                    i && i !== 'json' && (f.responseType = e.responseType),
                    typeof e.onDownloadProgress == 'function' &&
                        f.addEventListener(
                            'progress',
                            Bs(e.onDownloadProgress, !0)
                        ),
                    typeof e.onUploadProgress == 'function' &&
                        f.upload &&
                        f.upload.addEventListener(
                            'progress',
                            Bs(e.onUploadProgress)
                        ),
                    (e.cancelToken || e.signal) &&
                        ((s = (v) => {
                            f &&
                                (r(!v || v.type ? new hr(null, e, f) : v),
                                f.abort(),
                                (f = null));
                        }),
                        e.cancelToken && e.cancelToken.subscribe(s),
                        e.signal &&
                            (e.signal.aborted
                                ? s()
                                : e.signal.addEventListener('abort', s)));
                const y = ym(m);
                if (y && He.protocols.indexOf(y) === -1) {
                    r(
                        new F(
                            'Unsupported protocol ' + y + ':',
                            F.ERR_BAD_REQUEST,
                            e
                        )
                    );
                    return;
                }
                f.send(l || null);
            });
        },
    gi = { http: Vh, xhr: wm };
g.forEach(gi, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t });
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t });
    }
});
const $s = (e) => `- ${e}`,
    Sm = (e) => g.isFunction(e) || e === null || e === !1,
    Nf = {
        getAdapter: (e) => {
            e = g.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const l = {};
            for (let o = 0; o < t; o++) {
                n = e[o];
                let i;
                if (
                    ((r = n),
                    !Sm(n) &&
                        ((r = gi[(i = String(n)).toLowerCase()]), r === void 0))
                )
                    throw new F(`Unknown adapter '${i}'`);
                if (r) break;
                l[i || '#' + o] = r;
            }
            if (!r) {
                const o = Object.entries(l).map(
                    ([u, s]) =>
                        `adapter ${u} ` +
                        (s === !1
                            ? 'is not supported by the environment'
                            : 'is not available in the build')
                );
                let i = t
                    ? o.length > 1
                        ? `since :
` +
                          o.map($s).join(`
`)
                        : ' ' + $s(o[0])
                    : 'as no adapter specified';
                throw new F(
                    'There is no suitable adapter to dispatch the request ' + i,
                    'ERR_NOT_SUPPORT'
                );
            }
            return r;
        },
        adapters: gi,
    };
function Eo(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new hr(null, e);
}
function Hs(e) {
    return (
        Eo(e),
        (e.headers = qe.from(e.headers)),
        (e.data = ko.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        Nf.getAdapter(e.adapter || wu.adapter)(e).then(
            function (r) {
                return (
                    Eo(e),
                    (r.data = ko.call(e, e.transformResponse, r)),
                    (r.headers = qe.from(r.headers)),
                    r
                );
            },
            function (r) {
                return (
                    _f(r) ||
                        (Eo(e),
                        r &&
                            r.response &&
                            ((r.response.data = ko.call(
                                e,
                                e.transformResponse,
                                r.response
                            )),
                            (r.response.headers = qe.from(
                                r.response.headers
                            )))),
                    Promise.reject(r)
                );
            }
        )
    );
}
const Vs = (e) => (e instanceof qe ? e.toJSON() : e);
function mn(e, t) {
    t = t || {};
    const n = {};
    function r(c, h, f) {
        return g.isPlainObject(c) && g.isPlainObject(h)
            ? g.merge.call({ caseless: f }, c, h)
            : g.isPlainObject(h)
              ? g.merge({}, h)
              : g.isArray(h)
                ? h.slice()
                : h;
    }
    function l(c, h, f) {
        if (g.isUndefined(h)) {
            if (!g.isUndefined(c)) return r(void 0, c, f);
        } else return r(c, h, f);
    }
    function o(c, h) {
        if (!g.isUndefined(h)) return r(void 0, h);
    }
    function i(c, h) {
        if (g.isUndefined(h)) {
            if (!g.isUndefined(c)) return r(void 0, c);
        } else return r(void 0, h);
    }
    function u(c, h, f) {
        if (f in t) return r(c, h);
        if (f in e) return r(void 0, c);
    }
    const s = {
        url: o,
        method: o,
        data: o,
        baseURL: i,
        transformRequest: i,
        transformResponse: i,
        paramsSerializer: i,
        timeout: i,
        timeoutMessage: i,
        withCredentials: i,
        withXSRFToken: i,
        adapter: i,
        responseType: i,
        xsrfCookieName: i,
        xsrfHeaderName: i,
        onUploadProgress: i,
        onDownloadProgress: i,
        decompress: i,
        maxContentLength: i,
        maxBodyLength: i,
        beforeRedirect: i,
        transport: i,
        httpAgent: i,
        httpsAgent: i,
        cancelToken: i,
        socketPath: i,
        responseEncoding: i,
        validateStatus: u,
        headers: (c, h) => l(Vs(c), Vs(h), !0),
    };
    return (
        g.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
            const f = s[h] || l,
                m = f(e[h], t[h], h);
            (g.isUndefined(m) && f !== u) || (n[h] = m);
        }),
        n
    );
}
const Tf = '1.6.7',
    Su = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
        Su[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
    }
);
const Ws = {};
Su.transitional = function (t, n, r) {
    function l(o, i) {
        return (
            '[Axios v' +
            Tf +
            "] Transitional option '" +
            o +
            "'" +
            i +
            (r ? '. ' + r : '')
        );
    }
    return (o, i, u) => {
        if (t === !1)
            throw new F(
                l(i, ' has been removed' + (n ? ' in ' + n : '')),
                F.ERR_DEPRECATED
            );
        return (
            n &&
                !Ws[i] &&
                ((Ws[i] = !0),
                console.warn(
                    l(
                        i,
                        ' has been deprecated since v' +
                            n +
                            ' and will be removed in the near future'
                    )
                )),
            t ? t(o, i, u) : !0
        );
    };
};
function km(e, t, n) {
    if (typeof e != 'object')
        throw new F('options must be an object', F.ERR_BAD_OPTION_VALUE);
    const r = Object.keys(e);
    let l = r.length;
    for (; l-- > 0; ) {
        const o = r[l],
            i = t[o];
        if (i) {
            const u = e[o],
                s = u === void 0 || i(u, o, e);
            if (s !== !0)
                throw new F(
                    'option ' + o + ' must be ' + s,
                    F.ERR_BAD_OPTION_VALUE
                );
            continue;
        }
        if (n !== !0) throw new F('Unknown option ' + o, F.ERR_BAD_OPTION);
    }
}
const wi = { assertOptions: km, validators: Su },
    lt = wi.validators;
class Sl {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new Us(), response: new Us() });
    }
    async request(t, n) {
        try {
            return await this._request(t, n);
        } catch (r) {
            if (r instanceof Error) {
                let l;
                Error.captureStackTrace
                    ? Error.captureStackTrace((l = {}))
                    : (l = new Error());
                const o = l.stack ? l.stack.replace(/^.+\n/, '') : '';
                r.stack
                    ? o &&
                      !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, '')) &&
                      (r.stack +=
                          `
` + o)
                    : (r.stack = o);
            }
            throw r;
        }
    }
    _request(t, n) {
        typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
            (n = mn(this.defaults, n));
        const { transitional: r, paramsSerializer: l, headers: o } = n;
        r !== void 0 &&
            wi.assertOptions(
                r,
                {
                    silentJSONParsing: lt.transitional(lt.boolean),
                    forcedJSONParsing: lt.transitional(lt.boolean),
                    clarifyTimeoutError: lt.transitional(lt.boolean),
                },
                !1
            ),
            l != null &&
                (g.isFunction(l)
                    ? (n.paramsSerializer = { serialize: l })
                    : wi.assertOptions(
                          l,
                          { encode: lt.function, serialize: lt.function },
                          !0
                      )),
            (n.method = (
                n.method ||
                this.defaults.method ||
                'get'
            ).toLowerCase());
        let i = o && g.merge(o.common, o[n.method]);
        o &&
            g.forEach(
                ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
                (y) => {
                    delete o[y];
                }
            ),
            (n.headers = qe.concat(i, o));
        const u = [];
        let s = !0;
        this.interceptors.request.forEach(function (v) {
            (typeof v.runWhen == 'function' && v.runWhen(n) === !1) ||
                ((s = s && v.synchronous), u.unshift(v.fulfilled, v.rejected));
        });
        const c = [];
        this.interceptors.response.forEach(function (v) {
            c.push(v.fulfilled, v.rejected);
        });
        let h,
            f = 0,
            m;
        if (!s) {
            const y = [Hs.bind(this), void 0];
            for (
                y.unshift.apply(y, u),
                    y.push.apply(y, c),
                    m = y.length,
                    h = Promise.resolve(n);
                f < m;

            )
                h = h.then(y[f++], y[f++]);
            return h;
        }
        m = u.length;
        let k = n;
        for (f = 0; f < m; ) {
            const y = u[f++],
                v = u[f++];
            try {
                k = y(k);
            } catch (T) {
                v.call(this, T);
                break;
            }
        }
        try {
            h = Hs.call(this, k);
        } catch (y) {
            return Promise.reject(y);
        }
        for (f = 0, m = c.length; f < m; ) h = h.then(c[f++], c[f++]);
        return h;
    }
    getUri(t) {
        t = mn(this.defaults, t);
        const n = Pf(t.baseURL, t.url);
        return kf(n, t.params, t.paramsSerializer);
    }
}
g.forEach(['delete', 'get', 'head', 'options'], function (t) {
    Sl.prototype[t] = function (n, r) {
        return this.request(
            mn(r || {}, { method: t, url: n, data: (r || {}).data })
        );
    };
});
g.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
        return function (o, i, u) {
            return this.request(
                mn(u || {}, {
                    method: t,
                    headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: o,
                    data: i,
                })
            );
        };
    }
    (Sl.prototype[t] = n()), (Sl.prototype[t + 'Form'] = n(!0));
});
const Yr = Sl;
class ku {
    constructor(t) {
        if (typeof t != 'function')
            throw new TypeError('executor must be a function.');
        let n;
        this.promise = new Promise(function (o) {
            n = o;
        });
        const r = this;
        this.promise.then((l) => {
            if (!r._listeners) return;
            let o = r._listeners.length;
            for (; o-- > 0; ) r._listeners[o](l);
            r._listeners = null;
        }),
            (this.promise.then = (l) => {
                let o;
                const i = new Promise((u) => {
                    r.subscribe(u), (o = u);
                }).then(l);
                return (
                    (i.cancel = function () {
                        r.unsubscribe(o);
                    }),
                    i
                );
            }),
            t(function (o, i, u) {
                r.reason || ((r.reason = new hr(o, i, u)), n(r.reason));
            });
    }
    throwIfRequested() {
        if (this.reason) throw this.reason;
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return;
        }
        this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const n = this._listeners.indexOf(t);
        n !== -1 && this._listeners.splice(n, 1);
    }
    static source() {
        let t;
        return {
            token: new ku(function (l) {
                t = l;
            }),
            cancel: t,
        };
    }
}
const Em = ku;
function xm(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function Cm(e) {
    return g.isObject(e) && e.isAxiosError === !0;
}
const Si = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511,
};
Object.entries(Si).forEach(([e, t]) => {
    Si[t] = e;
});
const _m = Si;
function Rf(e) {
    const t = new Yr(e),
        n = af(Yr.prototype.request, t);
    return (
        g.extend(n, Yr.prototype, t, { allOwnKeys: !0 }),
        g.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (l) {
            return Rf(mn(e, l));
        }),
        n
    );
}
const Y = Rf(wu);
Y.Axios = Yr;
Y.CanceledError = hr;
Y.CancelToken = Em;
Y.isCancel = _f;
Y.VERSION = Tf;
Y.toFormData = Bl;
Y.AxiosError = F;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
    return Promise.all(t);
};
Y.spread = xm;
Y.isAxiosError = Cm;
Y.mergeConfig = mn;
Y.AxiosHeaders = qe;
Y.formToJSON = (e) => Cf(g.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = Nf.getAdapter;
Y.HttpStatusCode = _m;
Y.default = Y;
const mr = Y,
    Hl = '/api/blogs';
let Eu = null;
const Pm = (e) => {
        Eu = `Bearer ${e}`;
    },
    Nm = async () => (await mr.get(Hl)).data,
    Tm = async (e) => {
        const t = { headers: { Authorization: Eu } };
        return (await mr.post(Hl, e, t)).data;
    },
    Rm = async (e, t) => (await mr.put(`${Hl}/${e}`, t)).data,
    Om = async (e) => {
        const t = { headers: { Authorization: Eu } };
        await mr.delete(`${Hl}/${e}`, t);
    },
    Nt = { getAll: Nm, create: Tm, update: Rm, remove: Om, setToken: Pm },
    Lm = '/api/login',
    zm = async (e) => (await mr.post(Lm, e)).data,
    jm = { login: zm },
    Fm = () => {
        const [e, t] = ne.useState([]),
            [n, r] = ne.useState(''),
            [l, o] = ne.useState(''),
            [i, u] = ne.useState(null),
            [s, c] = ne.useState({ message: null, isError: !1 }),
            h = ne.useRef();
        ne.useEffect(() => {
            const a = window.localStorage.getItem('loggedBlogAppUser');
            if (a) {
                const d = JSON.parse(a);
                u(d), Nt.setToken(d.token);
            }
        }, []),
            ne.useEffect(() => {
                Nt.getAll().then((a) => {
                    const d = a.sort((w, E) => E.likes - w.likes);
                    t(d);
                });
            }, []);
        const f = (a, d = !1) => {
                c({ message: a, isError: d }),
                    setTimeout(() => {
                        c({ message: null, isError: !1 });
                    }, 3e3);
            },
            m = async (a) => {
                h.current.toggleVisibility();
                try {
                    const d = await Nt.create(a),
                        w = e.concat(d);
                    w.sort((E, C) => C.likes - E.likes),
                        t(w),
                        f(`A new blog ${d.title} by ${d.author} added`);
                } catch {
                    f('Failed to add blog', !0);
                }
            },
            k = async (a) => {
                a.preventDefault();
                try {
                    const d = await jm.login({ username: n, password: l });
                    window.localStorage.setItem(
                        'loggedBlogAppUser',
                        JSON.stringify(d)
                    ),
                        Nt.setToken(d.token),
                        u(d),
                        f('Logged in successfully'),
                        r(''),
                        o('');
                } catch {
                    f('Wrong username or password', !0),
                        setTimeout(() => {
                            c(null);
                        }, 3e3);
                }
            },
            y = () => {
                window.localStorage.removeItem('loggedBlogAppUser'),
                    u(null),
                    Nt.setToken(null);
            },
            v = async (a) => {
                try {
                    const d = { ...a, likes: a.likes + 1 },
                        w = await Nt.update(a.id, d),
                        E = e.map((C) => (C.id === w.id ? w : C));
                    E.sort((C, P) => P.likes - C.likes), t(E);
                } catch (d) {
                    console.error('Error updating the blog:', d);
                }
            },
            T = async (a) => {
                try {
                    await Nt.remove(a),
                        t(e.filter((d) => d.id !== a)),
                        f('Blog deleted successfully');
                } catch {
                    f('Failed to delete blog', !0);
                }
            },
            p = () =>
                R.jsxs('div', {
                    children: [
                        R.jsx('h2', { children: 'Log in to application' }),
                        R.jsx(js, { message: s.message, isError: s.isError }),
                        R.jsxs('form', {
                            onSubmit: k,
                            children: [
                                R.jsxs('div', {
                                    children: [
                                        'username  ',
                                        R.jsx('input', {
                                            type: 'text',
                                            value: n,
                                            name: 'Username',
                                            onChange: ({ target: a }) =>
                                                r(a.value),
                                        }),
                                    ],
                                }),
                                R.jsxs('div', {
                                    children: [
                                        'password  ',
                                        R.jsx('input', {
                                            type: 'password',
                                            value: l,
                                            name: 'Password',
                                            onChange: ({ target: a }) =>
                                                o(a.value),
                                        }),
                                    ],
                                }),
                                R.jsx('button', {
                                    type: 'submit',
                                    children: 'login',
                                }),
                            ],
                        }),
                    ],
                });
        return i === null
            ? p()
            : R.jsxs('div', {
                  children: [
                      R.jsx('h2', { children: 'Blogs' }),
                      R.jsx(js, { message: s.message, isError: s.isError }),
                      R.jsxs('p', {
                          children: [
                              i.name,
                              ' logged in ',
                              R.jsx('button', {
                                  onClick: y,
                                  children: 'logout',
                              }),
                          ],
                      }),
                      R.jsx(mu, {
                          buttonLabel: 'create blog',
                          ref: h,
                          children: R.jsx(sh, { createBlog: m }),
                      }),
                      R.jsx('br', {}),
                      e.map((a) =>
                          R.jsx(
                              sf,
                              {
                                  blog: a,
                                  onLike: () => v(a),
                                  onRemove: () => T(a.id),
                                  currentUser: i,
                              },
                              a.id
                          )
                      ),
                  ],
              });
    };
xo.createRoot(document.getElementById('root')).render(R.jsx(Fm, {}));
