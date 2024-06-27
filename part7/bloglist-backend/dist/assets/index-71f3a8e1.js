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
var Hs = { exports: {} },
    wl = {},
    Vs = { exports: {} },
    z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ur = Symbol.for('react.element'),
    Nf = Symbol.for('react.portal'),
    Pf = Symbol.for('react.fragment'),
    Tf = Symbol.for('react.strict_mode'),
    Rf = Symbol.for('react.profiler'),
    Of = Symbol.for('react.provider'),
    Lf = Symbol.for('react.context'),
    zf = Symbol.for('react.forward_ref'),
    jf = Symbol.for('react.suspense'),
    Ff = Symbol.for('react.memo'),
    Af = Symbol.for('react.lazy'),
    ku = Symbol.iterator;
function Df(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (ku && e[ku]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var Ws = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    Qs = Object.assign,
    Ks = {};
function hn(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ks),
        (this.updater = n || Ws);
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        );
    this.updater.enqueueSetState(this, e, t, 'setState');
};
hn.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Js() {}
Js.prototype = hn.prototype;
function wi(e, t, n) {
    (this.props = e),
        (this.context = t),
        (this.refs = Ks),
        (this.updater = n || Ws);
}
var Si = (wi.prototype = new Js());
Si.constructor = wi;
Qs(Si, hn.prototype);
Si.isPureReactComponent = !0;
var Eu = Array.isArray,
    Xs = Object.prototype.hasOwnProperty,
    ki = { current: null },
    Ys = { key: !0, ref: !0, __self: !0, __source: !0 };
function Gs(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (o = '' + t.key),
        t))
            Xs.call(t, r) && !Ys.hasOwnProperty(r) && (l[r] = t[r]);
    var u = arguments.length - 2;
    if (u === 1) l.children = n;
    else if (1 < u) {
        for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
        l.children = s;
    }
    if (e && e.defaultProps)
        for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
    return {
        $$typeof: ur,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: ki.current,
    };
}
function Mf(e, t) {
    return {
        $$typeof: ur,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    };
}
function Ei(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === ur;
}
function Uf(e) {
    var t = { '=': '=0', ':': '=2' };
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var xu = /\/+/g;
function Wl(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? Uf('' + e.key)
        : t.toString(36);
}
function jr(e, t, n, r, l) {
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
                    case ur:
                    case Nf:
                        i = !0;
                }
        }
    if (i)
        return (
            (i = e),
            (l = l(i)),
            (e = r === '' ? '.' + Wl(i, 0) : r),
            Eu(l)
                ? ((n = ''),
                  e != null && (n = e.replace(xu, '$&/') + '/'),
                  jr(l, t, n, '', function (a) {
                      return a;
                  }))
                : l != null &&
                  (Ei(l) &&
                      (l = Mf(
                          l,
                          n +
                              (!l.key || (i && i.key === l.key)
                                  ? ''
                                  : ('' + l.key).replace(xu, '$&/') + '/') +
                              e
                      )),
                  t.push(l)),
            1
        );
    if (((i = 0), (r = r === '' ? '.' : r + ':'), Eu(e)))
        for (var u = 0; u < e.length; u++) {
            o = e[u];
            var s = r + Wl(o, u);
            i += jr(o, t, n, s, l);
        }
    else if (((s = Df(e)), typeof s == 'function'))
        for (e = s.call(e), u = 0; !(o = e.next()).done; )
            (o = o.value), (s = r + Wl(o, u++)), (i += jr(o, t, n, s, l));
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
function yr(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return (
        jr(e, r, '', '', function (o) {
            return t.call(n, o, l++);
        }),
        r
    );
}
function If(e) {
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
    Fr = { transition: null },
    Bf = {
        ReactCurrentDispatcher: fe,
        ReactCurrentBatchConfig: Fr,
        ReactCurrentOwner: ki,
    };
z.Children = {
    map: yr,
    forEach: function (e, t, n) {
        yr(
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
            yr(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            yr(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!Ei(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            );
        return e;
    },
};
z.Component = hn;
z.Fragment = Pf;
z.Profiler = Rf;
z.PureComponent = wi;
z.StrictMode = Tf;
z.Suspense = jf;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Bf;
z.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        );
    var r = Qs({}, e.props),
        l = e.key,
        o = e.ref,
        i = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((o = t.ref), (i = ki.current)),
            t.key !== void 0 && (l = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var u = e.type.defaultProps;
        for (s in t)
            Xs.call(t, s) &&
                !Ys.hasOwnProperty(s) &&
                (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        u = Array(s);
        for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
        r.children = u;
    }
    return { $$typeof: ur, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function (e) {
    return (
        (e = {
            $$typeof: Lf,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: Of, _context: e }),
        (e.Consumer = e)
    );
};
z.createElement = Gs;
z.createFactory = function (e) {
    var t = Gs.bind(null, e);
    return (t.type = e), t;
};
z.createRef = function () {
    return { current: null };
};
z.forwardRef = function (e) {
    return { $$typeof: zf, render: e };
};
z.isValidElement = Ei;
z.lazy = function (e) {
    return { $$typeof: Af, _payload: { _status: -1, _result: e }, _init: If };
};
z.memo = function (e, t) {
    return { $$typeof: Ff, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function (e) {
    var t = Fr.transition;
    Fr.transition = {};
    try {
        e();
    } finally {
        Fr.transition = t;
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
Vs.exports = z;
var b = Vs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $f = b,
    Hf = Symbol.for('react.element'),
    Vf = Symbol.for('react.fragment'),
    Wf = Object.prototype.hasOwnProperty,
    Qf =
        $f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function qs(e, t, n) {
    var r,
        l = {},
        o = null,
        i = null;
    n !== void 0 && (o = '' + n),
        t.key !== void 0 && (o = '' + t.key),
        t.ref !== void 0 && (i = t.ref);
    for (r in t) Wf.call(t, r) && !Kf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Hf,
        type: e,
        key: o,
        ref: i,
        props: l,
        _owner: Qf.current,
    };
}
wl.Fragment = Vf;
wl.jsx = qs;
wl.jsxs = qs;
Hs.exports = wl;
var R = Hs.exports,
    ko = {},
    Zs = { exports: {} },
    Ee = {},
    bs = { exports: {} },
    ea = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(C, O) {
        var L = C.length;
        C.push(O);
        e: for (; 0 < L; ) {
            var K = (L - 1) >>> 1,
                Z = C[K];
            if (0 < l(Z, O)) (C[K] = O), (C[L] = Z), (L = K);
            else break e;
        }
    }
    function n(C) {
        return C.length === 0 ? null : C[0];
    }
    function r(C) {
        if (C.length === 0) return null;
        var O = C[0],
            L = C.pop();
        if (L !== O) {
            C[0] = L;
            e: for (var K = 0, Z = C.length, hr = Z >>> 1; K < hr; ) {
                var Ct = 2 * (K + 1) - 1,
                    Vl = C[Ct],
                    _t = Ct + 1,
                    mr = C[_t];
                if (0 > l(Vl, L))
                    _t < Z && 0 > l(mr, Vl)
                        ? ((C[K] = mr), (C[_t] = L), (K = _t))
                        : ((C[K] = Vl), (C[Ct] = L), (K = Ct));
                else if (_t < Z && 0 > l(mr, L))
                    (C[K] = mr), (C[_t] = L), (K = _t);
                else break e;
            }
        }
        return O;
    }
    function l(C, O) {
        var L = C.sortIndex - O.sortIndex;
        return L !== 0 ? L : C.id - O.id;
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
        a = [],
        h = 1,
        d = null,
        m = 3,
        k = !1,
        y = !1,
        v = !1,
        _ = typeof setTimeout == 'function' ? setTimeout : null,
        f = typeof clearTimeout == 'function' ? clearTimeout : null,
        c = typeof setImmediate < 'u' ? setImmediate : null;
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(C) {
        for (var O = n(a); O !== null; ) {
            if (O.callback === null) r(a);
            else if (O.startTime <= C)
                r(a), (O.sortIndex = O.expirationTime), t(s, O);
            else break;
            O = n(a);
        }
    }
    function w(C) {
        if (((v = !1), p(C), !y))
            if (n(s) !== null) (y = !0), $l(x);
            else {
                var O = n(a);
                O !== null && Hl(w, O.startTime - C);
            }
    }
    function x(C, O) {
        (y = !1), v && ((v = !1), f(T), (T = -1)), (k = !0);
        var L = m;
        try {
            for (
                p(O), d = n(s);
                d !== null && (!(d.expirationTime > O) || (C && !Le()));

            ) {
                var K = d.callback;
                if (typeof K == 'function') {
                    (d.callback = null), (m = d.priorityLevel);
                    var Z = K(d.expirationTime <= O);
                    (O = e.unstable_now()),
                        typeof Z == 'function'
                            ? (d.callback = Z)
                            : d === n(s) && r(s),
                        p(O);
                } else r(s);
                d = n(s);
            }
            if (d !== null) var hr = !0;
            else {
                var Ct = n(a);
                Ct !== null && Hl(w, Ct.startTime - O), (hr = !1);
            }
            return hr;
        } finally {
            (d = null), (m = L), (k = !1);
        }
    }
    var N = !1,
        P = null,
        T = -1,
        Q = 5,
        j = -1;
    function Le() {
        return !(e.unstable_now() - j < Q);
    }
    function gn() {
        if (P !== null) {
            var C = e.unstable_now();
            j = C;
            var O = !0;
            try {
                O = P(!0, C);
            } finally {
                O ? wn() : ((N = !1), (P = null));
            }
        } else N = !1;
    }
    var wn;
    if (typeof c == 'function')
        wn = function () {
            c(gn);
        };
    else if (typeof MessageChannel < 'u') {
        var Su = new MessageChannel(),
            _f = Su.port2;
        (Su.port1.onmessage = gn),
            (wn = function () {
                _f.postMessage(null);
            });
    } else
        wn = function () {
            _(gn, 0);
        };
    function $l(C) {
        (P = C), N || ((N = !0), wn());
    }
    function Hl(C, O) {
        T = _(function () {
            C(e.unstable_now());
        }, O);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (C) {
            C.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            y || k || ((y = !0), $l(x));
        }),
        (e.unstable_forceFrameRate = function (C) {
            0 > C || 125 < C
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (Q = 0 < C ? Math.floor(1e3 / C) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(s);
        }),
        (e.unstable_next = function (C) {
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
                return C();
            } finally {
                m = L;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (C, O) {
            switch (C) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    C = 3;
            }
            var L = m;
            m = C;
            try {
                return O();
            } finally {
                m = L;
            }
        }),
        (e.unstable_scheduleCallback = function (C, O, L) {
            var K = e.unstable_now();
            switch (
                (typeof L == 'object' && L !== null
                    ? ((L = L.delay),
                      (L = typeof L == 'number' && 0 < L ? K + L : K))
                    : (L = K),
                C)
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
                (C = {
                    id: h++,
                    callback: O,
                    priorityLevel: C,
                    startTime: L,
                    expirationTime: Z,
                    sortIndex: -1,
                }),
                L > K
                    ? ((C.sortIndex = L),
                      t(a, C),
                      n(s) === null &&
                          C === n(a) &&
                          (v ? (f(T), (T = -1)) : (v = !0), Hl(w, L - K)))
                    : ((C.sortIndex = Z), t(s, C), y || k || ((y = !0), $l(x))),
                C
            );
        }),
        (e.unstable_shouldYield = Le),
        (e.unstable_wrapCallback = function (C) {
            var O = m;
            return function () {
                var L = m;
                m = O;
                try {
                    return C.apply(this, arguments);
                } finally {
                    m = L;
                }
            };
        });
})(ea);
bs.exports = ea;
var Jf = bs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ta = b,
    ke = Jf;
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
var na = new Set(),
    Vn = {};
function Ut(e, t) {
    on(e, t), on(e + 'Capture', t);
}
function on(e, t) {
    for (Vn[e] = t, e = 0; e < t.length; e++) na.add(t[e]);
}
var Ze = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Eo = Object.prototype.hasOwnProperty,
    Xf =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Cu = {},
    _u = {};
function Yf(e) {
    return Eo.call(_u, e)
        ? !0
        : Eo.call(Cu, e)
          ? !1
          : Xf.test(e)
            ? (_u[e] = !0)
            : ((Cu[e] = !0), !1);
}
function Gf(e, t, n, r) {
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
function qf(e, t, n, r) {
    if (t === null || typeof t > 'u' || Gf(e, t, n, r)) return !0;
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
var xi = /[\-:]([a-z])/g;
function Ci(e) {
    return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xi, Ci);
        le[t] = new de(t, 1, !1, e, null, !1, !1);
    });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(xi, Ci);
        le[t] = new de(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
    });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(xi, Ci);
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
function _i(e, t, n, r) {
    var l = le.hasOwnProperty(t) ? le[t] : null;
    (l !== null
        ? l.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (qf(t, n, l, r) && (n = null),
        r || l === null
            ? Yf(t) &&
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
var nt = ta.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    vr = Symbol.for('react.element'),
    $t = Symbol.for('react.portal'),
    Ht = Symbol.for('react.fragment'),
    Ni = Symbol.for('react.strict_mode'),
    xo = Symbol.for('react.profiler'),
    ra = Symbol.for('react.provider'),
    la = Symbol.for('react.context'),
    Pi = Symbol.for('react.forward_ref'),
    Co = Symbol.for('react.suspense'),
    _o = Symbol.for('react.suspense_list'),
    Ti = Symbol.for('react.memo'),
    ot = Symbol.for('react.lazy'),
    oa = Symbol.for('react.offscreen'),
    Nu = Symbol.iterator;
function Sn(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (Nu && e[Nu]) || e['@@iterator']),
          typeof e == 'function' ? e : null);
}
var V = Object.assign,
    Ql;
function On(e) {
    if (Ql === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Ql = (t && t[1]) || '';
        }
    return (
        `
` +
        Ql +
        e
    );
}
var Kl = !1;
function Jl(e, t) {
    if (!e || Kl) return '';
    Kl = !0;
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
                } catch (a) {
                    var r = a;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (a) {
                    r = a;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (a) {
                r = a;
            }
            e();
        }
    } catch (a) {
        if (a && r && typeof a.stack == 'string') {
            for (
                var l = a.stack.split(`
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
        (Kl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : '') ? On(e) : '';
}
function Zf(e) {
    switch (e.tag) {
        case 5:
            return On(e.type);
        case 16:
            return On('Lazy');
        case 13:
            return On('Suspense');
        case 19:
            return On('SuspenseList');
        case 0:
        case 2:
        case 15:
            return (e = Jl(e.type, !1)), e;
        case 11:
            return (e = Jl(e.type.render, !1)), e;
        case 1:
            return (e = Jl(e.type, !0)), e;
        default:
            return '';
    }
}
function No(e) {
    if (e == null) return null;
    if (typeof e == 'function') return e.displayName || e.name || null;
    if (typeof e == 'string') return e;
    switch (e) {
        case Ht:
            return 'Fragment';
        case $t:
            return 'Portal';
        case xo:
            return 'Profiler';
        case Ni:
            return 'StrictMode';
        case Co:
            return 'Suspense';
        case _o:
            return 'SuspenseList';
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case la:
                return (e.displayName || 'Context') + '.Consumer';
            case ra:
                return (e._context.displayName || 'Context') + '.Provider';
            case Pi:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                );
            case Ti:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : No(e.type) || 'Memo'
                );
            case ot:
                (t = e._payload), (e = e._init);
                try {
                    return No(e(t));
                } catch {}
        }
    return null;
}
function bf(e) {
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
            return No(t);
        case 8:
            return t === Ni ? 'StrictMode' : 'Mode';
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
function wt(e) {
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
function ia(e) {
    var t = e.type;
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    );
}
function ed(e) {
    var t = ia(e) ? 'checked' : 'value',
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
function gr(e) {
    e._valueTracker || (e._valueTracker = ed(e));
}
function ua(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = '';
    return (
        e && (r = ia(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    );
}
function Xr(e) {
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
function Po(e, t) {
    var n = t.checked;
    return V({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function Pu(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = wt(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        });
}
function sa(e, t) {
    (t = t.checked), t != null && _i(e, 'checked', t, !1);
}
function To(e, t) {
    sa(e, t);
    var n = wt(t.value),
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
        ? Ro(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Ro(e, t.type, wt(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
}
function Tu(e, t, n) {
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
function Ro(e, t, n) {
    (t !== 'number' || Xr(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ln = Array.isArray;
function bt(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
        for (n = 0; n < e.length; n++)
            (l = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0);
    } else {
        for (n = '' + wt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                (e[l].selected = !0), r && (e[l].defaultSelected = !0);
                return;
            }
            t !== null || e[l].disabled || (t = e[l]);
        }
        t !== null && (t.selected = !0);
    }
}
function Oo(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
    return V({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    });
}
function Ru(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(S(92));
            if (Ln(n)) {
                if (1 < n.length) throw Error(S(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ''), (n = t);
    }
    e._wrapperState = { initialValue: wt(n) };
}
function aa(e, t) {
    var n = wt(t.value),
        r = wt(t.defaultValue);
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r);
}
function Ou(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t);
}
function ca(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg';
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML';
        default:
            return 'http://www.w3.org/1999/xhtml';
    }
}
function Lo(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? ca(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
          ? 'http://www.w3.org/1999/xhtml'
          : e;
}
var wr,
    fa = (function (e) {
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
                wr = wr || document.createElement('div'),
                    wr.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = wr.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function Wn(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Fn = {
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
    td = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Fn).forEach(function (e) {
    td.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Fn[t] = Fn[e]);
    });
});
function da(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
            typeof t != 'number' ||
            t === 0 ||
            (Fn.hasOwnProperty(e) && Fn[e])
          ? ('' + t).trim()
          : t + 'px';
}
function pa(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                l = da(n, t[n], r);
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, l) : (e[n] = l);
        }
}
var nd = V(
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
function zo(e, t) {
    if (t) {
        if (nd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function jo(e, t) {
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
var Fo = null;
function Ri(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var Ao = null,
    en = null,
    tn = null;
function Lu(e) {
    if ((e = cr(e))) {
        if (typeof Ao != 'function') throw Error(S(280));
        var t = e.stateNode;
        t && ((t = Cl(t)), Ao(e.stateNode, e.type, t));
    }
}
function ha(e) {
    en ? (tn ? tn.push(e) : (tn = [e])) : (en = e);
}
function ma() {
    if (en) {
        var e = en,
            t = tn;
        if (((tn = en = null), Lu(e), t))
            for (e = 0; e < t.length; e++) Lu(t[e]);
    }
}
function ya(e, t) {
    return e(t);
}
function va() {}
var Xl = !1;
function ga(e, t, n) {
    if (Xl) return e(t, n);
    Xl = !0;
    try {
        return ya(e, t, n);
    } finally {
        (Xl = !1), (en !== null || tn !== null) && (va(), ma());
    }
}
function Qn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Cl(n);
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
var Do = !1;
if (Ze)
    try {
        var kn = {};
        Object.defineProperty(kn, 'passive', {
            get: function () {
                Do = !0;
            },
        }),
            window.addEventListener('test', kn, kn),
            window.removeEventListener('test', kn, kn);
    } catch {
        Do = !1;
    }
function rd(e, t, n, r, l, o, i, u, s) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a);
    } catch (h) {
        this.onError(h);
    }
}
var An = !1,
    Yr = null,
    Gr = !1,
    Mo = null,
    ld = {
        onError: function (e) {
            (An = !0), (Yr = e);
        },
    };
function od(e, t, n, r, l, o, i, u, s) {
    (An = !1), (Yr = null), rd.apply(ld, arguments);
}
function id(e, t, n, r, l, o, i, u, s) {
    if ((od.apply(this, arguments), An)) {
        if (An) {
            var a = Yr;
            (An = !1), (Yr = null);
        } else throw Error(S(198));
        Gr || ((Gr = !0), (Mo = a));
    }
}
function It(e) {
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
function wa(e) {
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
function zu(e) {
    if (It(e) !== e) throw Error(S(188));
}
function ud(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = It(e)), t === null)) throw Error(S(188));
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
                if (o === n) return zu(l), e;
                if (o === r) return zu(l), t;
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
function Sa(e) {
    return (e = ud(e)), e !== null ? ka(e) : null;
}
function ka(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = ka(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Ea = ke.unstable_scheduleCallback,
    ju = ke.unstable_cancelCallback,
    sd = ke.unstable_shouldYield,
    ad = ke.unstable_requestPaint,
    J = ke.unstable_now,
    cd = ke.unstable_getCurrentPriorityLevel,
    Oi = ke.unstable_ImmediatePriority,
    xa = ke.unstable_UserBlockingPriority,
    qr = ke.unstable_NormalPriority,
    fd = ke.unstable_LowPriority,
    Ca = ke.unstable_IdlePriority,
    Sl = null,
    Ve = null;
function dd(e) {
    if (Ve && typeof Ve.onCommitFiberRoot == 'function')
        try {
            Ve.onCommitFiberRoot(
                Sl,
                e,
                void 0,
                (e.current.flags & 128) === 128
            );
        } catch {}
}
var De = Math.clz32 ? Math.clz32 : md,
    pd = Math.log,
    hd = Math.LN2;
function md(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pd(e) / hd) | 0)) | 0;
}
var Sr = 64,
    kr = 4194304;
function zn(e) {
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
function Zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        o = e.pingedLanes,
        i = n & 268435455;
    if (i !== 0) {
        var u = i & ~l;
        u !== 0 ? (r = zn(u)) : ((o &= i), o !== 0 && (r = zn(o)));
    } else (i = n & ~l), i !== 0 ? (r = zn(i)) : o !== 0 && (r = zn(o));
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
            (n = 31 - De(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
    return r;
}
function yd(e, t) {
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
function vd(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            l = e.expirationTimes,
            o = e.pendingLanes;
        0 < o;

    ) {
        var i = 31 - De(o),
            u = 1 << i,
            s = l[i];
        s === -1
            ? (!(u & n) || u & r) && (l[i] = yd(u, t))
            : s <= t && (e.expiredLanes |= u),
            (o &= ~u);
    }
}
function Uo(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
}
function _a() {
    var e = Sr;
    return (Sr <<= 1), !(Sr & 4194240) && (Sr = 64), e;
}
function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function sr(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - De(t)),
        (e[t] = n);
}
function gd(e, t) {
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
        var l = 31 - De(n),
            o = 1 << l;
        (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
    }
}
function Li(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - De(n),
            l = 1 << r;
        (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
    }
}
var D = 0;
function Na(e) {
    return (
        (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
}
var Pa,
    zi,
    Ta,
    Ra,
    Oa,
    Io = !1,
    Er = [],
    ft = null,
    dt = null,
    pt = null,
    Kn = new Map(),
    Jn = new Map(),
    ut = [],
    wd =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        );
function Fu(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            ft = null;
            break;
        case 'dragenter':
        case 'dragleave':
            dt = null;
            break;
        case 'mouseover':
        case 'mouseout':
            pt = null;
            break;
        case 'pointerover':
        case 'pointerout':
            Kn.delete(t.pointerId);
            break;
        case 'gotpointercapture':
        case 'lostpointercapture':
            Jn.delete(t.pointerId);
    }
}
function En(e, t, n, r, l, o) {
    return e === null || e.nativeEvent !== o
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [l],
          }),
          t !== null && ((t = cr(t)), t !== null && zi(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          l !== null && t.indexOf(l) === -1 && t.push(l),
          e);
}
function Sd(e, t, n, r, l) {
    switch (t) {
        case 'focusin':
            return (ft = En(ft, e, t, n, r, l)), !0;
        case 'dragenter':
            return (dt = En(dt, e, t, n, r, l)), !0;
        case 'mouseover':
            return (pt = En(pt, e, t, n, r, l)), !0;
        case 'pointerover':
            var o = l.pointerId;
            return Kn.set(o, En(Kn.get(o) || null, e, t, n, r, l)), !0;
        case 'gotpointercapture':
            return (
                (o = l.pointerId),
                Jn.set(o, En(Jn.get(o) || null, e, t, n, r, l)),
                !0
            );
    }
    return !1;
}
function La(e) {
    var t = Tt(e.target);
    if (t !== null) {
        var n = It(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = wa(n)), t !== null)) {
                    (e.blockedOn = t),
                        Oa(e.priority, function () {
                            Ta(n);
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
function Ar(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Bo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (Fo = r), n.target.dispatchEvent(r), (Fo = null);
        } else return (t = cr(n)), t !== null && zi(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function Au(e, t, n) {
    Ar(e) && n.delete(t);
}
function kd() {
    (Io = !1),
        ft !== null && Ar(ft) && (ft = null),
        dt !== null && Ar(dt) && (dt = null),
        pt !== null && Ar(pt) && (pt = null),
        Kn.forEach(Au),
        Jn.forEach(Au);
}
function xn(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        Io ||
            ((Io = !0),
            ke.unstable_scheduleCallback(ke.unstable_NormalPriority, kd)));
}
function Xn(e) {
    function t(l) {
        return xn(l, e);
    }
    if (0 < Er.length) {
        xn(Er[0], e);
        for (var n = 1; n < Er.length; n++) {
            var r = Er[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        ft !== null && xn(ft, e),
            dt !== null && xn(dt, e),
            pt !== null && xn(pt, e),
            Kn.forEach(t),
            Jn.forEach(t),
            n = 0;
        n < ut.length;
        n++
    )
        (r = ut[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < ut.length && ((n = ut[0]), n.blockedOn === null); )
        La(n), n.blockedOn === null && ut.shift();
}
var nn = nt.ReactCurrentBatchConfig,
    br = !0;
function Ed(e, t, n, r) {
    var l = D,
        o = nn.transition;
    nn.transition = null;
    try {
        (D = 1), ji(e, t, n, r);
    } finally {
        (D = l), (nn.transition = o);
    }
}
function xd(e, t, n, r) {
    var l = D,
        o = nn.transition;
    nn.transition = null;
    try {
        (D = 4), ji(e, t, n, r);
    } finally {
        (D = l), (nn.transition = o);
    }
}
function ji(e, t, n, r) {
    if (br) {
        var l = Bo(e, t, n, r);
        if (l === null) oo(e, t, r, el, n), Fu(e, r);
        else if (Sd(l, e, t, n, r)) r.stopPropagation();
        else if ((Fu(e, r), t & 4 && -1 < wd.indexOf(e))) {
            for (; l !== null; ) {
                var o = cr(l);
                if (
                    (o !== null && Pa(o),
                    (o = Bo(e, t, n, r)),
                    o === null && oo(e, t, r, el, n),
                    o === l)
                )
                    break;
                l = o;
            }
            l !== null && r.stopPropagation();
        } else oo(e, t, r, null, n);
    }
}
var el = null;
function Bo(e, t, n, r) {
    if (((el = null), (e = Ri(r)), (e = Tt(e)), e !== null))
        if (((t = It(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = wa(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (el = e), null;
}
function za(e) {
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
            switch (cd()) {
                case Oi:
                    return 1;
                case xa:
                    return 4;
                case qr:
                case fd:
                    return 16;
                case Ca:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var at = null,
    Fi = null,
    Dr = null;
function ja() {
    if (Dr) return Dr;
    var e,
        t = Fi,
        n = t.length,
        r,
        l = 'value' in at ? at.value : at.textContent,
        o = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
    return (Dr = l.slice(e, 1 < r ? 1 - r : void 0));
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
function xr() {
    return !0;
}
function Du() {
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
                ? xr
                : Du),
            (this.isPropagationStopped = Du),
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
                    (this.isDefaultPrevented = xr));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = xr));
            },
            persist: function () {},
            isPersistent: xr,
        }),
        t
    );
}
var mn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Ai = xe(mn),
    ar = V({}, mn, { view: 0, detail: 0 }),
    Cd = xe(ar),
    Gl,
    ql,
    Cn,
    kl = V({}, ar, {
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
        getModifierState: Di,
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
                : (e !== Cn &&
                      (Cn && e.type === 'mousemove'
                          ? ((Gl = e.screenX - Cn.screenX),
                            (ql = e.screenY - Cn.screenY))
                          : (ql = Gl = 0),
                      (Cn = e)),
                  Gl);
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : ql;
        },
    }),
    Mu = xe(kl),
    _d = V({}, kl, { dataTransfer: 0 }),
    Nd = xe(_d),
    Pd = V({}, ar, { relatedTarget: 0 }),
    Zl = xe(Pd),
    Td = V({}, mn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rd = xe(Td),
    Od = V({}, mn, {
        clipboardData: function (e) {
            return 'clipboardData' in e
                ? e.clipboardData
                : window.clipboardData;
        },
    }),
    Ld = xe(Od),
    zd = V({}, mn, { data: 0 }),
    Uu = xe(zd),
    jd = {
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
    Fd = {
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
    Ad = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    };
function Dd(e) {
    var t = this.nativeEvent;
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = Ad[e])
          ? !!t[e]
          : !1;
}
function Di() {
    return Dd;
}
var Md = V({}, ar, {
        key: function (e) {
            if (e.key) {
                var t = jd[e.key] || e.key;
                if (t !== 'Unidentified') return t;
            }
            return e.type === 'keypress'
                ? ((e = Mr(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                  ? Fd[e.keyCode] || 'Unidentified'
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
        getModifierState: Di,
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
    Ud = xe(Md),
    Id = V({}, kl, {
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
    Iu = xe(Id),
    Bd = V({}, ar, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Di,
    }),
    $d = xe(Bd),
    Hd = V({}, mn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Vd = xe(Hd),
    Wd = V({}, kl, {
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
    Qd = xe(Wd),
    Kd = [9, 13, 27, 32],
    Mi = Ze && 'CompositionEvent' in window,
    Dn = null;
Ze && 'documentMode' in document && (Dn = document.documentMode);
var Jd = Ze && 'TextEvent' in window && !Dn,
    Fa = Ze && (!Mi || (Dn && 8 < Dn && 11 >= Dn)),
    Bu = String.fromCharCode(32),
    $u = !1;
function Aa(e, t) {
    switch (e) {
        case 'keyup':
            return Kd.indexOf(t.keyCode) !== -1;
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
function Da(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Vt = !1;
function Xd(e, t) {
    switch (e) {
        case 'compositionend':
            return Da(t);
        case 'keypress':
            return t.which !== 32 ? null : (($u = !0), Bu);
        case 'textInput':
            return (e = t.data), e === Bu && $u ? null : e;
        default:
            return null;
    }
}
function Yd(e, t) {
    if (Vt)
        return e === 'compositionend' || (!Mi && Aa(e, t))
            ? ((e = ja()), (Dr = Fi = at = null), (Vt = !1), e)
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
            return Fa && t.locale !== 'ko' ? null : t.data;
        default:
            return null;
    }
}
var Gd = {
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
function Hu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === 'input' ? !!Gd[e.type] : t === 'textarea';
}
function Ma(e, t, n, r) {
    ha(r),
        (t = tl(t, 'onChange')),
        0 < t.length &&
            ((n = new Ai('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }));
}
var Mn = null,
    Yn = null;
function qd(e) {
    Xa(e, 0);
}
function El(e) {
    var t = Kt(e);
    if (ua(t)) return e;
}
function Zd(e, t) {
    if (e === 'change') return t;
}
var Ua = !1;
if (Ze) {
    var bl;
    if (Ze) {
        var eo = 'oninput' in document;
        if (!eo) {
            var Vu = document.createElement('div');
            Vu.setAttribute('oninput', 'return;'),
                (eo = typeof Vu.oninput == 'function');
        }
        bl = eo;
    } else bl = !1;
    Ua = bl && (!document.documentMode || 9 < document.documentMode);
}
function Wu() {
    Mn && (Mn.detachEvent('onpropertychange', Ia), (Yn = Mn = null));
}
function Ia(e) {
    if (e.propertyName === 'value' && El(Yn)) {
        var t = [];
        Ma(t, Yn, e, Ri(e)), ga(qd, t);
    }
}
function bd(e, t, n) {
    e === 'focusin'
        ? (Wu(), (Mn = t), (Yn = n), Mn.attachEvent('onpropertychange', Ia))
        : e === 'focusout' && Wu();
}
function ep(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return El(Yn);
}
function tp(e, t) {
    if (e === 'click') return El(t);
}
function np(e, t) {
    if (e === 'input' || e === 'change') return El(t);
}
function rp(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == 'function' ? Object.is : rp;
function Gn(e, t) {
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
        if (!Eo.call(t, l) || !Ue(e[l], t[l])) return !1;
    }
    return !0;
}
function Qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function Ku(e, t) {
    var n = Qu(e);
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
        n = Qu(n);
    }
}
function Ba(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Ba(e, t.parentNode)
                : 'contains' in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function $a() {
    for (var e = window, t = Xr(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string';
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Xr(e.document);
    }
    return t;
}
function Ui(e) {
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
function lp(e) {
    var t = $a(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Ba(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && Ui(n)) {
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
                    (l = Ku(n, o));
                var i = Ku(n, r);
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
var op = Ze && 'documentMode' in document && 11 >= document.documentMode,
    Wt = null,
    $o = null,
    Un = null,
    Ho = !1;
function Ju(e, t, n) {
    var r =
        n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Ho ||
        Wt == null ||
        Wt !== Xr(r) ||
        ((r = Wt),
        'selectionStart' in r && Ui(r)
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
        (Un && Gn(Un, r)) ||
            ((Un = r),
            (r = tl($o, 'onSelect')),
            0 < r.length &&
                ((t = new Ai('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = Wt))));
}
function Cr(e, t) {
    var n = {};
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    );
}
var Qt = {
        animationend: Cr('Animation', 'AnimationEnd'),
        animationiteration: Cr('Animation', 'AnimationIteration'),
        animationstart: Cr('Animation', 'AnimationStart'),
        transitionend: Cr('Transition', 'TransitionEnd'),
    },
    to = {},
    Ha = {};
Ze &&
    ((Ha = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete Qt.animationend.animation,
        delete Qt.animationiteration.animation,
        delete Qt.animationstart.animation),
    'TransitionEvent' in window || delete Qt.transitionend.transition);
function xl(e) {
    if (to[e]) return to[e];
    if (!Qt[e]) return e;
    var t = Qt[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in Ha) return (to[e] = t[n]);
    return e;
}
var Va = xl('animationend'),
    Wa = xl('animationiteration'),
    Qa = xl('animationstart'),
    Ka = xl('transitionend'),
    Ja = new Map(),
    Xu =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        );
function kt(e, t) {
    Ja.set(e, t), Ut(t, [e]);
}
for (var no = 0; no < Xu.length; no++) {
    var ro = Xu[no],
        ip = ro.toLowerCase(),
        up = ro[0].toUpperCase() + ro.slice(1);
    kt(ip, 'on' + up);
}
kt(Va, 'onAnimationEnd');
kt(Wa, 'onAnimationIteration');
kt(Qa, 'onAnimationStart');
kt('dblclick', 'onDoubleClick');
kt('focusin', 'onFocus');
kt('focusout', 'onBlur');
kt(Ka, 'onTransitionEnd');
on('onMouseEnter', ['mouseout', 'mouseover']);
on('onMouseLeave', ['mouseout', 'mouseover']);
on('onPointerEnter', ['pointerout', 'pointerover']);
on('onPointerLeave', ['pointerout', 'pointerover']);
Ut(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
);
Ut(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
);
Ut('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ut(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
Ut(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var jn =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    sp = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(jn)
    );
function Yu(e, t, n) {
    var r = e.type || 'unknown-event';
    (e.currentTarget = n), id(r, t, void 0, e), (e.currentTarget = null);
}
function Xa(e, t) {
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
                        a = u.currentTarget;
                    if (((u = u.listener), s !== o && l.isPropagationStopped()))
                        break e;
                    Yu(l, u, a), (o = s);
                }
            else
                for (i = 0; i < r.length; i++) {
                    if (
                        ((u = r[i]),
                        (s = u.instance),
                        (a = u.currentTarget),
                        (u = u.listener),
                        s !== o && l.isPropagationStopped())
                    )
                        break e;
                    Yu(l, u, a), (o = s);
                }
        }
    }
    if (Gr) throw ((e = Mo), (Gr = !1), (Mo = null), e);
}
function U(e, t) {
    var n = t[Jo];
    n === void 0 && (n = t[Jo] = new Set());
    var r = e + '__bubble';
    n.has(r) || (Ya(t, e, 2, !1), n.add(r));
}
function lo(e, t, n) {
    var r = 0;
    t && (r |= 4), Ya(n, e, r, t);
}
var _r = '_reactListening' + Math.random().toString(36).slice(2);
function qn(e) {
    if (!e[_r]) {
        (e[_r] = !0),
            na.forEach(function (n) {
                n !== 'selectionchange' &&
                    (sp.has(n) || lo(n, !1, e), lo(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[_r] || ((t[_r] = !0), lo('selectionchange', !1, t));
    }
}
function Ya(e, t, n, r) {
    switch (za(t)) {
        case 1:
            var l = Ed;
            break;
        case 4:
            l = xd;
            break;
        default:
            l = ji;
    }
    (n = l.bind(null, t, n, e)),
        (l = void 0),
        !Do ||
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
function oo(e, t, n, r, l) {
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
                    if (((i = Tt(u)), i === null)) return;
                    if (((s = i.tag), s === 5 || s === 6)) {
                        r = o = i;
                        continue e;
                    }
                    u = u.parentNode;
                }
            }
            r = r.return;
        }
    ga(function () {
        var a = o,
            h = Ri(n),
            d = [];
        e: {
            var m = Ja.get(e);
            if (m !== void 0) {
                var k = Ai,
                    y = e;
                switch (e) {
                    case 'keypress':
                        if (Mr(n) === 0) break e;
                    case 'keydown':
                    case 'keyup':
                        k = Ud;
                        break;
                    case 'focusin':
                        (y = 'focus'), (k = Zl);
                        break;
                    case 'focusout':
                        (y = 'blur'), (k = Zl);
                        break;
                    case 'beforeblur':
                    case 'afterblur':
                        k = Zl;
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
                        k = Mu;
                        break;
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        k = Nd;
                        break;
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        k = $d;
                        break;
                    case Va:
                    case Wa:
                    case Qa:
                        k = Rd;
                        break;
                    case Ka:
                        k = Vd;
                        break;
                    case 'scroll':
                        k = Cd;
                        break;
                    case 'wheel':
                        k = Qd;
                        break;
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        k = Ld;
                        break;
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        k = Iu;
                }
                var v = (t & 4) !== 0,
                    _ = !v && e === 'scroll',
                    f = v ? (m !== null ? m + 'Capture' : null) : m;
                v = [];
                for (var c = a, p; c !== null; ) {
                    p = c;
                    var w = p.stateNode;
                    if (
                        (p.tag === 5 &&
                            w !== null &&
                            ((p = w),
                            f !== null &&
                                ((w = Qn(c, f)),
                                w != null && v.push(Zn(c, w, p)))),
                        _)
                    )
                        break;
                    c = c.return;
                }
                0 < v.length &&
                    ((m = new k(m, y, null, n, h)),
                    d.push({ event: m, listeners: v }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === 'mouseover' || e === 'pointerover'),
                    (k = e === 'mouseout' || e === 'pointerout'),
                    m &&
                        n !== Fo &&
                        (y = n.relatedTarget || n.fromElement) &&
                        (Tt(y) || y[be]))
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
                          (k = a),
                          (y = y ? Tt(y) : null),
                          y !== null &&
                              ((_ = It(y)),
                              y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                              (y = null))
                        : ((k = null), (y = a)),
                    k !== y)
                ) {
                    if (
                        ((v = Mu),
                        (w = 'onMouseLeave'),
                        (f = 'onMouseEnter'),
                        (c = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((v = Iu),
                            (w = 'onPointerLeave'),
                            (f = 'onPointerEnter'),
                            (c = 'pointer')),
                        (_ = k == null ? m : Kt(k)),
                        (p = y == null ? m : Kt(y)),
                        (m = new v(w, c + 'leave', k, n, h)),
                        (m.target = _),
                        (m.relatedTarget = p),
                        (w = null),
                        Tt(h) === a &&
                            ((v = new v(f, c + 'enter', y, n, h)),
                            (v.target = p),
                            (v.relatedTarget = _),
                            (w = v)),
                        (_ = w),
                        k && y)
                    )
                        t: {
                            for (v = k, f = y, c = 0, p = v; p; p = Bt(p)) c++;
                            for (p = 0, w = f; w; w = Bt(w)) p++;
                            for (; 0 < c - p; ) (v = Bt(v)), c--;
                            for (; 0 < p - c; ) (f = Bt(f)), p--;
                            for (; c--; ) {
                                if (
                                    v === f ||
                                    (f !== null && v === f.alternate)
                                )
                                    break t;
                                (v = Bt(v)), (f = Bt(f));
                            }
                            v = null;
                        }
                    else v = null;
                    k !== null && Gu(d, m, k, v, !1),
                        y !== null && _ !== null && Gu(d, _, y, v, !0);
                }
            }
            e: {
                if (
                    ((m = a ? Kt(a) : window),
                    (k = m.nodeName && m.nodeName.toLowerCase()),
                    k === 'select' || (k === 'input' && m.type === 'file'))
                )
                    var x = Zd;
                else if (Hu(m))
                    if (Ua) x = np;
                    else {
                        x = ep;
                        var N = bd;
                    }
                else
                    (k = m.nodeName) &&
                        k.toLowerCase() === 'input' &&
                        (m.type === 'checkbox' || m.type === 'radio') &&
                        (x = tp);
                if (x && (x = x(e, a))) {
                    Ma(d, x, n, h);
                    break e;
                }
                N && N(e, m, a),
                    e === 'focusout' &&
                        (N = m._wrapperState) &&
                        N.controlled &&
                        m.type === 'number' &&
                        Ro(m, 'number', m.value);
            }
            switch (((N = a ? Kt(a) : window), e)) {
                case 'focusin':
                    (Hu(N) || N.contentEditable === 'true') &&
                        ((Wt = N), ($o = a), (Un = null));
                    break;
                case 'focusout':
                    Un = $o = Wt = null;
                    break;
                case 'mousedown':
                    Ho = !0;
                    break;
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    (Ho = !1), Ju(d, n, h);
                    break;
                case 'selectionchange':
                    if (op) break;
                case 'keydown':
                case 'keyup':
                    Ju(d, n, h);
            }
            var P;
            if (Mi)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var T = 'onCompositionStart';
                            break e;
                        case 'compositionend':
                            T = 'onCompositionEnd';
                            break e;
                        case 'compositionupdate':
                            T = 'onCompositionUpdate';
                            break e;
                    }
                    T = void 0;
                }
            else
                Vt
                    ? Aa(e, n) && (T = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (T = 'onCompositionStart');
            T &&
                (Fa &&
                    n.locale !== 'ko' &&
                    (Vt || T !== 'onCompositionStart'
                        ? T === 'onCompositionEnd' && Vt && (P = ja())
                        : ((at = h),
                          (Fi = 'value' in at ? at.value : at.textContent),
                          (Vt = !0))),
                (N = tl(a, T)),
                0 < N.length &&
                    ((T = new Uu(T, e, null, n, h)),
                    d.push({ event: T, listeners: N }),
                    P
                        ? (T.data = P)
                        : ((P = Da(n)), P !== null && (T.data = P)))),
                (P = Jd ? Xd(e, n) : Yd(e, n)) &&
                    ((a = tl(a, 'onBeforeInput')),
                    0 < a.length &&
                        ((h = new Uu(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            h
                        )),
                        d.push({ event: h, listeners: a }),
                        (h.data = P)));
        }
        Xa(d, t);
    });
}
function Zn(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function tl(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var l = e,
            o = l.stateNode;
        l.tag === 5 &&
            o !== null &&
            ((l = o),
            (o = Qn(e, n)),
            o != null && r.unshift(Zn(e, o, l)),
            (o = Qn(e, t)),
            o != null && r.push(Zn(e, o, l))),
            (e = e.return);
    }
    return r;
}
function Bt(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Gu(e, t, n, r, l) {
    for (var o = t._reactName, i = []; n !== null && n !== r; ) {
        var u = n,
            s = u.alternate,
            a = u.stateNode;
        if (s !== null && s === r) break;
        u.tag === 5 &&
            a !== null &&
            ((u = a),
            l
                ? ((s = Qn(n, o)), s != null && i.unshift(Zn(n, s, u)))
                : l || ((s = Qn(n, o)), s != null && i.push(Zn(n, s, u)))),
            (n = n.return);
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
}
var ap = /\r\n?/g,
    cp = /\u0000|\uFFFD/g;
function qu(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            ap,
            `
`
        )
        .replace(cp, '');
}
function Nr(e, t, n) {
    if (((t = qu(t)), qu(e) !== t && n)) throw Error(S(425));
}
function nl() {}
var Vo = null,
    Wo = null;
function Qo(e, t) {
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
var Ko = typeof setTimeout == 'function' ? setTimeout : void 0,
    fp = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Zu = typeof Promise == 'function' ? Promise : void 0,
    dp =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof Zu < 'u'
              ? function (e) {
                    return Zu.resolve(null).then(e).catch(pp);
                }
              : Ko;
function pp(e) {
    setTimeout(function () {
        throw e;
    });
}
function io(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if ((e.removeChild(n), l && l.nodeType === 8))
            if (((n = l.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(l), Xn(t);
                    return;
                }
                r--;
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
        n = l;
    } while (n);
    Xn(t);
}
function ht(e) {
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
function bu(e) {
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
var yn = Math.random().toString(36).slice(2),
    $e = '__reactFiber$' + yn,
    bn = '__reactProps$' + yn,
    be = '__reactContainer$' + yn,
    Jo = '__reactEvents$' + yn,
    hp = '__reactListeners$' + yn,
    mp = '__reactHandles$' + yn;
function Tt(e) {
    var t = e[$e];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[be] || n[$e])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = bu(e); e !== null; ) {
                    if ((n = e[$e])) return n;
                    e = bu(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function cr(e) {
    return (
        (e = e[$e] || e[be]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    );
}
function Kt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(S(33));
}
function Cl(e) {
    return e[bn] || null;
}
var Xo = [],
    Jt = -1;
function Et(e) {
    return { current: e };
}
function I(e) {
    0 > Jt || ((e.current = Xo[Jt]), (Xo[Jt] = null), Jt--);
}
function M(e, t) {
    Jt++, (Xo[Jt] = e.current), (e.current = t);
}
var St = {},
    se = Et(St),
    me = Et(!1),
    jt = St;
function un(e, t) {
    var n = e.type.contextTypes;
    if (!n) return St;
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
function rl() {
    I(me), I(se);
}
function es(e, t, n) {
    if (se.current !== St) throw Error(S(168));
    M(se, t), M(me, n);
}
function Ga(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(S(108, bf(e) || 'Unknown', l));
    return V({}, n, r);
}
function ll(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            St),
        (jt = se.current),
        M(se, e),
        M(me, me.current),
        !0
    );
}
function ts(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(S(169));
    n
        ? ((e = Ga(e, t, jt)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          I(me),
          I(se),
          M(se, e))
        : I(me),
        M(me, n);
}
var Je = null,
    _l = !1,
    uo = !1;
function qa(e) {
    Je === null ? (Je = [e]) : Je.push(e);
}
function yp(e) {
    (_l = !0), qa(e);
}
function xt() {
    if (!uo && Je !== null) {
        uo = !0;
        var e = 0,
            t = D;
        try {
            var n = Je;
            for (D = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Je = null), (_l = !1);
        } catch (l) {
            throw (Je !== null && (Je = Je.slice(e + 1)), Ea(Oi, xt), l);
        } finally {
            (D = t), (uo = !1);
        }
    }
    return null;
}
var Xt = [],
    Yt = 0,
    ol = null,
    il = 0,
    Ce = [],
    _e = 0,
    Ft = null,
    Xe = 1,
    Ye = '';
function Nt(e, t) {
    (Xt[Yt++] = il), (Xt[Yt++] = ol), (ol = e), (il = t);
}
function Za(e, t, n) {
    (Ce[_e++] = Xe), (Ce[_e++] = Ye), (Ce[_e++] = Ft), (Ft = e);
    var r = Xe;
    e = Ye;
    var l = 32 - De(r) - 1;
    (r &= ~(1 << l)), (n += 1);
    var o = 32 - De(t) + l;
    if (30 < o) {
        var i = l - (l % 5);
        (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (l -= i),
            (Xe = (1 << (32 - De(t) + l)) | (n << l) | r),
            (Ye = o + e);
    } else (Xe = (1 << o) | (n << l) | r), (Ye = e);
}
function Ii(e) {
    e.return !== null && (Nt(e, 1), Za(e, 1, 0));
}
function Bi(e) {
    for (; e === ol; )
        (ol = Xt[--Yt]), (Xt[Yt] = null), (il = Xt[--Yt]), (Xt[Yt] = null);
    for (; e === Ft; )
        (Ft = Ce[--_e]),
            (Ce[_e] = null),
            (Ye = Ce[--_e]),
            (Ce[_e] = null),
            (Xe = Ce[--_e]),
            (Ce[_e] = null);
}
var Se = null,
    we = null,
    B = !1,
    Ae = null;
function ba(e, t) {
    var n = Ne(5, null, null, 0);
    (n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ns(e, t) {
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
                    ? ((e.stateNode = t), (Se = e), (we = ht(t.firstChild)), !0)
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
                    ? ((n = Ft !== null ? { id: Xe, overflow: Ye } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = Ne(18, null, null, 0)),
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
function Yo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Go(e) {
    if (B) {
        var t = we;
        if (t) {
            var n = t;
            if (!ns(e, t)) {
                if (Yo(e)) throw Error(S(418));
                t = ht(n.nextSibling);
                var r = Se;
                t && ns(e, t)
                    ? ba(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e));
            }
        } else {
            if (Yo(e)) throw Error(S(418));
            (e.flags = (e.flags & -4097) | 2), (B = !1), (Se = e);
        }
    }
}
function rs(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return;
    Se = e;
}
function Pr(e) {
    if (e !== Se) return !1;
    if (!B) return rs(e), (B = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !Qo(e.type, e.memoizedProps))),
        t && (t = we))
    ) {
        if (Yo(e)) throw (ec(), Error(S(418)));
        for (; t; ) ba(e, t), (t = ht(t.nextSibling));
    }
    if ((rs(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(S(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === '/$') {
                        if (t === 0) {
                            we = ht(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
                }
                e = e.nextSibling;
            }
            we = null;
        }
    } else we = Se ? ht(e.stateNode.nextSibling) : null;
    return !0;
}
function ec() {
    for (var e = we; e; ) e = ht(e.nextSibling);
}
function sn() {
    (we = Se = null), (B = !1);
}
function $i(e) {
    Ae === null ? (Ae = [e]) : Ae.push(e);
}
var vp = nt.ReactCurrentBatchConfig;
function je(e, t) {
    if (e && e.defaultProps) {
        (t = V({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
var ul = Et(null),
    sl = null,
    Gt = null,
    Hi = null;
function Vi() {
    Hi = Gt = sl = null;
}
function Wi(e) {
    var t = ul.current;
    I(ul), (e._currentValue = t);
}
function qo(e, t, n) {
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
function rn(e, t) {
    (sl = e),
        (Hi = Gt = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (he = !0), (e.firstContext = null));
}
function Re(e) {
    var t = e._currentValue;
    if (Hi !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Gt === null)) {
            if (sl === null) throw Error(S(308));
            (Gt = e), (sl.dependencies = { lanes: 0, firstContext: e });
        } else Gt = Gt.next = e;
    return t;
}
var Rt = null;
function Qi(e) {
    Rt === null ? (Rt = [e]) : Rt.push(e);
}
function tc(e, t, n, r) {
    var l = t.interleaved;
    return (
        l === null ? ((n.next = n), Qi(t)) : ((n.next = l.next), (l.next = n)),
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
var it = !1;
function Ki(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function nc(e, t) {
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
function mt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), A & 2)) {
        var l = r.pending;
        return (
            l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
            (r.pending = t),
            et(e, n)
        );
    }
    return (
        (l = r.interleaved),
        l === null ? ((t.next = t), Qi(r)) : ((t.next = l.next), (l.next = t)),
        (r.interleaved = t),
        et(e, n)
    );
}
function Ur(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Li(e, n);
    }
}
function ls(e, t) {
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
function al(e, t, n, r) {
    var l = e.updateQueue;
    it = !1;
    var o = l.firstBaseUpdate,
        i = l.lastBaseUpdate,
        u = l.shared.pending;
    if (u !== null) {
        l.shared.pending = null;
        var s = u,
            a = s.next;
        (s.next = null), i === null ? (o = a) : (i.next = a), (i = s);
        var h = e.alternate;
        h !== null &&
            ((h = h.updateQueue),
            (u = h.lastBaseUpdate),
            u !== i &&
                (u === null ? (h.firstBaseUpdate = a) : (u.next = a),
                (h.lastBaseUpdate = s)));
    }
    if (o !== null) {
        var d = l.baseState;
        (i = 0), (h = a = s = null), (u = o);
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
                                d = y.call(k, d, m);
                                break e;
                            }
                            d = y;
                            break e;
                        case 3:
                            y.flags = (y.flags & -65537) | 128;
                        case 0:
                            if (
                                ((y = v.payload),
                                (m =
                                    typeof y == 'function'
                                        ? y.call(k, d, m)
                                        : y),
                                m == null)
                            )
                                break e;
                            d = V({}, d, m);
                            break e;
                        case 2:
                            it = !0;
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
                    h === null ? ((a = h = k), (s = d)) : (h = h.next = k),
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
            (h === null && (s = d),
            (l.baseState = s),
            (l.firstBaseUpdate = a),
            (l.lastBaseUpdate = h),
            (t = l.shared.interleaved),
            t !== null)
        ) {
            l = t;
            do (i |= l.lane), (l = l.next);
            while (l !== t);
        } else o === null && (l.shared.lanes = 0);
        (Dt |= i), (e.lanes = i), (e.memoizedState = d);
    }
}
function os(e, t, n) {
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
var rc = new ta.Component().refs;
function Zo(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : V({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Nl = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? It(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = vt(e),
            o = Ge(r, l);
        (o.payload = t),
            n != null && (o.callback = n),
            (t = mt(e, o, l)),
            t !== null && (Me(t, e, l, r), Ur(t, e, l));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = ce(),
            l = vt(e),
            o = Ge(r, l);
        (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = mt(e, o, l)),
            t !== null && (Me(t, e, l, r), Ur(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = ce(),
            r = vt(e),
            l = Ge(n, r);
        (l.tag = 2),
            t != null && (l.callback = t),
            (t = mt(e, l, r)),
            t !== null && (Me(t, e, r, n), Ur(t, e, r));
    },
};
function is(e, t, n, r, l, o, i) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, o, i)
            : t.prototype && t.prototype.isPureReactComponent
              ? !Gn(n, r) || !Gn(l, o)
              : !0
    );
}
function lc(e, t, n) {
    var r = !1,
        l = St,
        o = t.contextType;
    return (
        typeof o == 'object' && o !== null
            ? (o = Re(o))
            : ((l = ye(t) ? jt : se.current),
              (r = t.contextTypes),
              (o = (r = r != null) ? un(e, l) : St)),
        (t = new t(n, o)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Nl),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = l),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        t
    );
}
function us(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Nl.enqueueReplaceState(t, t.state, null);
}
function bo(e, t, n, r) {
    var l = e.stateNode;
    (l.props = n), (l.state = e.memoizedState), (l.refs = rc), Ki(e);
    var o = t.contextType;
    typeof o == 'object' && o !== null
        ? (l.context = Re(o))
        : ((o = ye(t) ? jt : se.current), (l.context = un(e, o))),
        (l.state = e.memoizedState),
        (o = t.getDerivedStateFromProps),
        typeof o == 'function' && (Zo(e, t, o, n), (l.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof l.getSnapshotBeforeUpdate == 'function' ||
            (typeof l.UNSAFE_componentWillMount != 'function' &&
                typeof l.componentWillMount != 'function') ||
            ((t = l.state),
            typeof l.componentWillMount == 'function' && l.componentWillMount(),
            typeof l.UNSAFE_componentWillMount == 'function' &&
                l.UNSAFE_componentWillMount(),
            t !== l.state && Nl.enqueueReplaceState(l, l.state, null),
            al(e, n, l, r),
            (l.state = e.memoizedState)),
        typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _n(e, t, n) {
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
                      u === rc && (u = l.refs = {}),
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
function Tr(e, t) {
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
function ss(e) {
    var t = e._init;
    return t(e._payload);
}
function oc(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
        }
    }
    function n(f, c) {
        if (!e) return null;
        for (; c !== null; ) t(f, c), (c = c.sibling);
        return null;
    }
    function r(f, c) {
        for (f = new Map(); c !== null; )
            c.key !== null ? f.set(c.key, c) : f.set(c.index, c),
                (c = c.sibling);
        return f;
    }
    function l(f, c) {
        return (f = gt(f, c)), (f.index = 0), (f.sibling = null), f;
    }
    function o(f, c, p) {
        return (
            (f.index = p),
            e
                ? ((p = f.alternate),
                  p !== null
                      ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
                      : ((f.flags |= 2), c))
                : ((f.flags |= 1048576), c)
        );
    }
    function i(f) {
        return e && f.alternate === null && (f.flags |= 2), f;
    }
    function u(f, c, p, w) {
        return c === null || c.tag !== 6
            ? ((c = mo(p, f.mode, w)), (c.return = f), c)
            : ((c = l(c, p)), (c.return = f), c);
    }
    function s(f, c, p, w) {
        var x = p.type;
        return x === Ht
            ? h(f, c, p.props.children, w, p.key)
            : c !== null &&
                (c.elementType === x ||
                    (typeof x == 'object' &&
                        x !== null &&
                        x.$$typeof === ot &&
                        ss(x) === c.type))
              ? ((w = l(c, p.props)), (w.ref = _n(f, c, p)), (w.return = f), w)
              : ((w = Wr(p.type, p.key, p.props, null, f.mode, w)),
                (w.ref = _n(f, c, p)),
                (w.return = f),
                w);
    }
    function a(f, c, p, w) {
        return c === null ||
            c.tag !== 4 ||
            c.stateNode.containerInfo !== p.containerInfo ||
            c.stateNode.implementation !== p.implementation
            ? ((c = yo(p, f.mode, w)), (c.return = f), c)
            : ((c = l(c, p.children || [])), (c.return = f), c);
    }
    function h(f, c, p, w, x) {
        return c === null || c.tag !== 7
            ? ((c = zt(p, f.mode, w, x)), (c.return = f), c)
            : ((c = l(c, p)), (c.return = f), c);
    }
    function d(f, c, p) {
        if ((typeof c == 'string' && c !== '') || typeof c == 'number')
            return (c = mo('' + c, f.mode, p)), (c.return = f), c;
        if (typeof c == 'object' && c !== null) {
            switch (c.$$typeof) {
                case vr:
                    return (
                        (p = Wr(c.type, c.key, c.props, null, f.mode, p)),
                        (p.ref = _n(f, null, c)),
                        (p.return = f),
                        p
                    );
                case $t:
                    return (c = yo(c, f.mode, p)), (c.return = f), c;
                case ot:
                    var w = c._init;
                    return d(f, w(c._payload), p);
            }
            if (Ln(c) || Sn(c))
                return (c = zt(c, f.mode, p, null)), (c.return = f), c;
            Tr(f, c);
        }
        return null;
    }
    function m(f, c, p, w) {
        var x = c !== null ? c.key : null;
        if ((typeof p == 'string' && p !== '') || typeof p == 'number')
            return x !== null ? null : u(f, c, '' + p, w);
        if (typeof p == 'object' && p !== null) {
            switch (p.$$typeof) {
                case vr:
                    return p.key === x ? s(f, c, p, w) : null;
                case $t:
                    return p.key === x ? a(f, c, p, w) : null;
                case ot:
                    return (x = p._init), m(f, c, x(p._payload), w);
            }
            if (Ln(p) || Sn(p)) return x !== null ? null : h(f, c, p, w, null);
            Tr(f, p);
        }
        return null;
    }
    function k(f, c, p, w, x) {
        if ((typeof w == 'string' && w !== '') || typeof w == 'number')
            return (f = f.get(p) || null), u(c, f, '' + w, x);
        if (typeof w == 'object' && w !== null) {
            switch (w.$$typeof) {
                case vr:
                    return (
                        (f = f.get(w.key === null ? p : w.key) || null),
                        s(c, f, w, x)
                    );
                case $t:
                    return (
                        (f = f.get(w.key === null ? p : w.key) || null),
                        a(c, f, w, x)
                    );
                case ot:
                    var N = w._init;
                    return k(f, c, p, N(w._payload), x);
            }
            if (Ln(w) || Sn(w))
                return (f = f.get(p) || null), h(c, f, w, x, null);
            Tr(c, w);
        }
        return null;
    }
    function y(f, c, p, w) {
        for (
            var x = null, N = null, P = c, T = (c = 0), Q = null;
            P !== null && T < p.length;
            T++
        ) {
            P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling);
            var j = m(f, P, p[T], w);
            if (j === null) {
                P === null && (P = Q);
                break;
            }
            e && P && j.alternate === null && t(f, P),
                (c = o(j, c, T)),
                N === null ? (x = j) : (N.sibling = j),
                (N = j),
                (P = Q);
        }
        if (T === p.length) return n(f, P), B && Nt(f, T), x;
        if (P === null) {
            for (; T < p.length; T++)
                (P = d(f, p[T], w)),
                    P !== null &&
                        ((c = o(P, c, T)),
                        N === null ? (x = P) : (N.sibling = P),
                        (N = P));
            return B && Nt(f, T), x;
        }
        for (P = r(f, P); T < p.length; T++)
            (Q = k(P, f, T, p[T], w)),
                Q !== null &&
                    (e &&
                        Q.alternate !== null &&
                        P.delete(Q.key === null ? T : Q.key),
                    (c = o(Q, c, T)),
                    N === null ? (x = Q) : (N.sibling = Q),
                    (N = Q));
        return (
            e &&
                P.forEach(function (Le) {
                    return t(f, Le);
                }),
            B && Nt(f, T),
            x
        );
    }
    function v(f, c, p, w) {
        var x = Sn(p);
        if (typeof x != 'function') throw Error(S(150));
        if (((p = x.call(p)), p == null)) throw Error(S(151));
        for (
            var N = (x = null), P = c, T = (c = 0), Q = null, j = p.next();
            P !== null && !j.done;
            T++, j = p.next()
        ) {
            P.index > T ? ((Q = P), (P = null)) : (Q = P.sibling);
            var Le = m(f, P, j.value, w);
            if (Le === null) {
                P === null && (P = Q);
                break;
            }
            e && P && Le.alternate === null && t(f, P),
                (c = o(Le, c, T)),
                N === null ? (x = Le) : (N.sibling = Le),
                (N = Le),
                (P = Q);
        }
        if (j.done) return n(f, P), B && Nt(f, T), x;
        if (P === null) {
            for (; !j.done; T++, j = p.next())
                (j = d(f, j.value, w)),
                    j !== null &&
                        ((c = o(j, c, T)),
                        N === null ? (x = j) : (N.sibling = j),
                        (N = j));
            return B && Nt(f, T), x;
        }
        for (P = r(f, P); !j.done; T++, j = p.next())
            (j = k(P, f, T, j.value, w)),
                j !== null &&
                    (e &&
                        j.alternate !== null &&
                        P.delete(j.key === null ? T : j.key),
                    (c = o(j, c, T)),
                    N === null ? (x = j) : (N.sibling = j),
                    (N = j));
        return (
            e &&
                P.forEach(function (gn) {
                    return t(f, gn);
                }),
            B && Nt(f, T),
            x
        );
    }
    function _(f, c, p, w) {
        if (
            (typeof p == 'object' &&
                p !== null &&
                p.type === Ht &&
                p.key === null &&
                (p = p.props.children),
            typeof p == 'object' && p !== null)
        ) {
            switch (p.$$typeof) {
                case vr:
                    e: {
                        for (var x = p.key, N = c; N !== null; ) {
                            if (N.key === x) {
                                if (((x = p.type), x === Ht)) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling),
                                            (c = l(N, p.props.children)),
                                            (c.return = f),
                                            (f = c);
                                        break e;
                                    }
                                } else if (
                                    N.elementType === x ||
                                    (typeof x == 'object' &&
                                        x !== null &&
                                        x.$$typeof === ot &&
                                        ss(x) === N.type)
                                ) {
                                    n(f, N.sibling),
                                        (c = l(N, p.props)),
                                        (c.ref = _n(f, N, p)),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                }
                                n(f, N);
                                break;
                            } else t(f, N);
                            N = N.sibling;
                        }
                        p.type === Ht
                            ? ((c = zt(p.props.children, f.mode, w, p.key)),
                              (c.return = f),
                              (f = c))
                            : ((w = Wr(
                                  p.type,
                                  p.key,
                                  p.props,
                                  null,
                                  f.mode,
                                  w
                              )),
                              (w.ref = _n(f, c, p)),
                              (w.return = f),
                              (f = w));
                    }
                    return i(f);
                case $t:
                    e: {
                        for (N = p.key; c !== null; ) {
                            if (c.key === N)
                                if (
                                    c.tag === 4 &&
                                    c.stateNode.containerInfo ===
                                        p.containerInfo &&
                                    c.stateNode.implementation ===
                                        p.implementation
                                ) {
                                    n(f, c.sibling),
                                        (c = l(c, p.children || [])),
                                        (c.return = f),
                                        (f = c);
                                    break e;
                                } else {
                                    n(f, c);
                                    break;
                                }
                            else t(f, c);
                            c = c.sibling;
                        }
                        (c = yo(p, f.mode, w)), (c.return = f), (f = c);
                    }
                    return i(f);
                case ot:
                    return (N = p._init), _(f, c, N(p._payload), w);
            }
            if (Ln(p)) return y(f, c, p, w);
            if (Sn(p)) return v(f, c, p, w);
            Tr(f, p);
        }
        return (typeof p == 'string' && p !== '') || typeof p == 'number'
            ? ((p = '' + p),
              c !== null && c.tag === 6
                  ? (n(f, c.sibling), (c = l(c, p)), (c.return = f), (f = c))
                  : (n(f, c), (c = mo(p, f.mode, w)), (c.return = f), (f = c)),
              i(f))
            : n(f, c);
    }
    return _;
}
var an = oc(!0),
    ic = oc(!1),
    fr = {},
    We = Et(fr),
    er = Et(fr),
    tr = Et(fr);
function Ot(e) {
    if (e === fr) throw Error(S(174));
    return e;
}
function Ji(e, t) {
    switch ((M(tr, t), M(er, e), M(We, fr), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Lo(null, '');
            break;
        default:
            (e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Lo(t, e));
    }
    I(We), M(We, t);
}
function cn() {
    I(We), I(er), I(tr);
}
function uc(e) {
    Ot(tr.current);
    var t = Ot(We.current),
        n = Lo(t, e.type);
    t !== n && (M(er, e), M(We, n));
}
function Xi(e) {
    er.current === e && (I(We), I(er));
}
var $ = Et(0);
function cl(e) {
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
var so = [];
function Yi() {
    for (var e = 0; e < so.length; e++)
        so[e]._workInProgressVersionPrimary = null;
    so.length = 0;
}
var Ir = nt.ReactCurrentDispatcher,
    ao = nt.ReactCurrentBatchConfig,
    At = 0,
    H = null,
    G = null,
    ee = null,
    fl = !1,
    In = !1,
    nr = 0,
    gp = 0;
function oe() {
    throw Error(S(321));
}
function Gi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ue(e[n], t[n])) return !1;
    return !0;
}
function qi(e, t, n, r, l, o) {
    if (
        ((At = o),
        (H = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ir.current = e === null || e.memoizedState === null ? Ep : xp),
        (e = n(r, l)),
        In)
    ) {
        o = 0;
        do {
            if (((In = !1), (nr = 0), 25 <= o)) throw Error(S(301));
            (o += 1),
                (ee = G = null),
                (t.updateQueue = null),
                (Ir.current = Cp),
                (e = n(r, l));
        } while (In);
    }
    if (
        ((Ir.current = dl),
        (t = G !== null && G.next !== null),
        (At = 0),
        (ee = G = H = null),
        (fl = !1),
        t)
    )
        throw Error(S(300));
    return e;
}
function Zi() {
    var e = nr !== 0;
    return (nr = 0), e;
}
function Be() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    };
    return ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e), ee;
}
function Oe() {
    if (G === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = G.next;
    var t = ee === null ? H.memoizedState : ee.next;
    if (t !== null) (ee = t), (G = e);
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
            ee === null ? (H.memoizedState = ee = e) : (ee = ee.next = e);
    }
    return ee;
}
function rr(e, t) {
    return typeof t == 'function' ? t(e) : t;
}
function co(e) {
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
            a = o;
        do {
            var h = a.lane;
            if ((At & h) === h)
                s !== null &&
                    (s = s.next =
                        {
                            lane: 0,
                            action: a.action,
                            hasEagerState: a.hasEagerState,
                            eagerState: a.eagerState,
                            next: null,
                        }),
                    (r = a.hasEagerState ? a.eagerState : e(r, a.action));
            else {
                var d = {
                    lane: h,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null,
                };
                s === null ? ((u = s = d), (i = r)) : (s = s.next = d),
                    (H.lanes |= h),
                    (Dt |= h);
            }
            a = a.next;
        } while (a !== null && a !== o);
        s === null ? (i = r) : (s.next = u),
            Ue(r, t.memoizedState) || (he = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        l = e;
        do (o = l.lane), (H.lanes |= o), (Dt |= o), (l = l.next);
        while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function fo(e) {
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
function sc() {}
function ac(e, t) {
    var n = H,
        r = Oe(),
        l = t(),
        o = !Ue(r.memoizedState, l);
    if (
        (o && ((r.memoizedState = l), (he = !0)),
        (r = r.queue),
        bi(dc.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || o || (ee !== null && ee.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            lr(9, fc.bind(null, n, r, l, t), void 0, null),
            te === null)
        )
            throw Error(S(349));
        At & 30 || cc(n, t, l);
    }
    return l;
}
function cc(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = H.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (H.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function fc(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), pc(t) && hc(e);
}
function dc(e, t, n) {
    return n(function () {
        pc(t) && hc(e);
    });
}
function pc(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Ue(e, n);
    } catch {
        return !0;
    }
}
function hc(e) {
    var t = et(e, 1);
    t !== null && Me(t, e, 1, -1);
}
function as(e) {
    var t = Be();
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: rr,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = kp.bind(null, H, e)),
        [t.memoizedState, e]
    );
}
function lr(e, t, n, r) {
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
function mc() {
    return Oe().memoizedState;
}
function Br(e, t, n, r) {
    var l = Be();
    (H.flags |= e),
        (l.memoizedState = lr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pl(e, t, n, r) {
    var l = Oe();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (G !== null) {
        var i = G.memoizedState;
        if (((o = i.destroy), r !== null && Gi(r, i.deps))) {
            l.memoizedState = lr(t, n, o, r);
            return;
        }
    }
    (H.flags |= e), (l.memoizedState = lr(1 | t, n, o, r));
}
function cs(e, t) {
    return Br(8390656, 8, e, t);
}
function bi(e, t) {
    return Pl(2048, 8, e, t);
}
function yc(e, t) {
    return Pl(4, 2, e, t);
}
function vc(e, t) {
    return Pl(4, 4, e, t);
}
function gc(e, t) {
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
function wc(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Pl(4, 4, gc.bind(null, t, e), n)
    );
}
function eu() {}
function Sc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gi(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e);
}
function kc(e, t) {
    var n = Oe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Gi(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ec(e, t, n) {
    return At & 21
        ? (Ue(n, t) ||
              ((n = _a()), (H.lanes |= n), (Dt |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (he = !0)),
          (e.memoizedState = n));
}
function wp(e, t) {
    var n = D;
    (D = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = ao.transition;
    ao.transition = {};
    try {
        e(!1), t();
    } finally {
        (D = n), (ao.transition = r);
    }
}
function xc() {
    return Oe().memoizedState;
}
function Sp(e, t, n) {
    var r = vt(e);
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Cc(e))
    )
        _c(t, n);
    else if (((n = tc(e, t, n, r)), n !== null)) {
        var l = ce();
        Me(n, e, r, l), Nc(n, t, r);
    }
}
function kp(e, t, n) {
    var r = vt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
    if (Cc(e)) _c(t, l);
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
                        ? ((l.next = l), Qi(t))
                        : ((l.next = s.next), (s.next = l)),
                        (t.interleaved = l);
                    return;
                }
            } catch {
            } finally {
            }
        (n = tc(e, t, l, r)),
            n !== null && ((l = ce()), Me(n, e, r, l), Nc(n, t, r));
    }
}
function Cc(e) {
    var t = e.alternate;
    return e === H || (t !== null && t === H);
}
function _c(e, t) {
    In = fl = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t);
}
function Nc(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), Li(e, n);
    }
}
var dl = {
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
    Ep = {
        readContext: Re,
        useCallback: function (e, t) {
            return (Be().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: Re,
        useEffect: cs,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                Br(4194308, 4, gc.bind(null, t, e), n)
            );
        },
        useLayoutEffect: function (e, t) {
            return Br(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Br(4, 2, e, t);
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
                (e = e.dispatch = Sp.bind(null, H, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Be();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: as,
        useDebugValue: eu,
        useDeferredValue: function (e) {
            return (Be().memoizedState = e);
        },
        useTransition: function () {
            var e = as(!1),
                t = e[0];
            return (e = wp.bind(null, e[1])), (Be().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = H,
                l = Be();
            if (B) {
                if (n === void 0) throw Error(S(407));
                n = n();
            } else {
                if (((n = t()), te === null)) throw Error(S(349));
                At & 30 || cc(r, t, n);
            }
            l.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
                (l.queue = o),
                cs(dc.bind(null, r, o, e), [e]),
                (r.flags |= 2048),
                lr(9, fc.bind(null, r, o, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Be(),
                t = te.identifierPrefix;
            if (B) {
                var n = Ye,
                    r = Xe;
                (n = (r & ~(1 << (32 - De(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = nr++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':');
            } else (n = gp++), (t = ':' + t + 'r' + n.toString(32) + ':');
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    xp = {
        readContext: Re,
        useCallback: Sc,
        useContext: Re,
        useEffect: bi,
        useImperativeHandle: wc,
        useInsertionEffect: yc,
        useLayoutEffect: vc,
        useMemo: kc,
        useReducer: co,
        useRef: mc,
        useState: function () {
            return co(rr);
        },
        useDebugValue: eu,
        useDeferredValue: function (e) {
            var t = Oe();
            return Ec(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = co(rr)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: ac,
        useId: xc,
        unstable_isNewReconciler: !1,
    },
    Cp = {
        readContext: Re,
        useCallback: Sc,
        useContext: Re,
        useEffect: bi,
        useImperativeHandle: wc,
        useInsertionEffect: yc,
        useLayoutEffect: vc,
        useMemo: kc,
        useReducer: fo,
        useRef: mc,
        useState: function () {
            return fo(rr);
        },
        useDebugValue: eu,
        useDeferredValue: function (e) {
            var t = Oe();
            return G === null
                ? (t.memoizedState = e)
                : Ec(t, G.memoizedState, e);
        },
        useTransition: function () {
            var e = fo(rr)[0],
                t = Oe().memoizedState;
            return [e, t];
        },
        useMutableSource: sc,
        useSyncExternalStore: ac,
        useId: xc,
        unstable_isNewReconciler: !1,
    };
function fn(e, t) {
    try {
        var n = '',
            r = t;
        do (n += Zf(r)), (r = r.return);
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
function po(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function ei(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var _p = typeof WeakMap == 'function' ? WeakMap : Map;
function Pc(e, t, n) {
    (n = Ge(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            hl || ((hl = !0), (ci = r)), ei(e, t);
        }),
        n
    );
}
function Tc(e, t, n) {
    (n = Ge(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == 'function') {
        var l = t.value;
        (n.payload = function () {
            return r(l);
        }),
            (n.callback = function () {
                ei(e, t);
            });
    }
    var o = e.stateNode;
    return (
        o !== null &&
            typeof o.componentDidCatch == 'function' &&
            (n.callback = function () {
                ei(e, t),
                    typeof r != 'function' &&
                        (yt === null ? (yt = new Set([this])) : yt.add(this));
                var i = t.stack;
                this.componentDidCatch(t.value, {
                    componentStack: i !== null ? i : '',
                });
            }),
        n
    );
}
function fs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new _p();
        var l = new Set();
        r.set(t, l);
    } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
    l.has(n) || (l.add(n), (e = Ip.bind(null, e, t, n)), t.then(e, e));
}
function ds(e) {
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
function ps(e, t, n, r, l) {
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
                        : ((t = Ge(-1, 1)), (t.tag = 2), mt(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var Np = nt.ReactCurrentOwner,
    he = !1;
function ae(e, t, n, r) {
    t.child = e === null ? ic(t, null, n, r) : an(t, e.child, n, r);
}
function hs(e, t, n, r, l) {
    n = n.render;
    var o = t.ref;
    return (
        rn(t, l),
        (r = qi(e, t, n, r, o, l)),
        (n = Zi()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              tt(e, t, l))
            : (B && n && Ii(t), (t.flags |= 1), ae(e, t, r, l), t.child)
    );
}
function ms(e, t, n, r, l) {
    if (e === null) {
        var o = n.type;
        return typeof o == 'function' &&
            !su(o) &&
            o.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = o), Rc(e, t, o, r, l))
            : ((e = Wr(n.type, null, r, t, t.mode, l)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
    }
    if (((o = e.child), !(e.lanes & l))) {
        var i = o.memoizedProps;
        if (
            ((n = n.compare),
            (n = n !== null ? n : Gn),
            n(i, r) && e.ref === t.ref)
        )
            return tt(e, t, l);
    }
    return (
        (t.flags |= 1),
        (e = gt(o, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    );
}
function Rc(e, t, n, r, l) {
    if (e !== null) {
        var o = e.memoizedProps;
        if (Gn(o, r) && e.ref === t.ref)
            if (((he = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
                e.flags & 131072 && (he = !0);
            else return (t.lanes = e.lanes), tt(e, t, l);
    }
    return ti(e, t, n, r, l);
}
function Oc(e, t, n) {
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
                M(Zt, ge),
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
                    M(Zt, ge),
                    (ge |= e),
                    null
                );
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = o !== null ? o.baseLanes : n),
                M(Zt, ge),
                (ge |= r);
        }
    else
        o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            M(Zt, ge),
            (ge |= r);
    return ae(e, t, l, n), t.child;
}
function Lc(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
}
function ti(e, t, n, r, l) {
    var o = ye(n) ? jt : se.current;
    return (
        (o = un(t, o)),
        rn(t, l),
        (n = qi(e, t, n, r, o, l)),
        (r = Zi()),
        e !== null && !he
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~l),
              tt(e, t, l))
            : (B && r && Ii(t), (t.flags |= 1), ae(e, t, n, l), t.child)
    );
}
function ys(e, t, n, r, l) {
    if (ye(n)) {
        var o = !0;
        ll(t);
    } else o = !1;
    if ((rn(t, l), t.stateNode === null))
        $r(e, t), lc(t, n, r), bo(t, n, r, l), (r = !0);
    else if (e === null) {
        var i = t.stateNode,
            u = t.memoizedProps;
        i.props = u;
        var s = i.context,
            a = n.contextType;
        typeof a == 'object' && a !== null
            ? (a = Re(a))
            : ((a = ye(n) ? jt : se.current), (a = un(t, a)));
        var h = n.getDerivedStateFromProps,
            d =
                typeof h == 'function' ||
                typeof i.getSnapshotBeforeUpdate == 'function';
        d ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== r || s !== a) && us(t, i, r, a)),
            (it = !1);
        var m = t.memoizedState;
        (i.state = m),
            al(t, r, i, l),
            (s = t.memoizedState),
            u !== r || m !== s || me.current || it
                ? (typeof h == 'function' &&
                      (Zo(t, n, h, r), (s = t.memoizedState)),
                  (u = it || is(t, n, u, r, m, s, a))
                      ? (d ||
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
                  (i.context = a),
                  (r = u))
                : (typeof i.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1));
    } else {
        (i = t.stateNode),
            nc(e, t),
            (u = t.memoizedProps),
            (a = t.type === t.elementType ? u : je(t.type, u)),
            (i.props = a),
            (d = t.pendingProps),
            (m = i.context),
            (s = n.contextType),
            typeof s == 'object' && s !== null
                ? (s = Re(s))
                : ((s = ye(n) ? jt : se.current), (s = un(t, s)));
        var k = n.getDerivedStateFromProps;
        (h =
            typeof k == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function') ||
            (typeof i.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof i.componentWillReceiveProps != 'function') ||
            ((u !== d || m !== s) && us(t, i, r, s)),
            (it = !1),
            (m = t.memoizedState),
            (i.state = m),
            al(t, r, i, l);
        var y = t.memoizedState;
        u !== d || m !== y || me.current || it
            ? (typeof k == 'function' &&
                  (Zo(t, n, k, r), (y = t.memoizedState)),
              (a = it || is(t, n, a, r, m, y, s) || !1)
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
              (r = a))
            : (typeof i.componentDidUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != 'function' ||
                  (u === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return ni(e, t, n, r, o, l);
}
function ni(e, t, n, r, l, o) {
    Lc(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && ts(t, n, !1), tt(e, t, o);
    (r = t.stateNode), (Np.current = t);
    var u =
        i && typeof n.getDerivedStateFromError != 'function'
            ? null
            : r.render();
    return (
        (t.flags |= 1),
        e !== null && i
            ? ((t.child = an(t, e.child, null, o)),
              (t.child = an(t, null, u, o)))
            : ae(e, t, u, o),
        (t.memoizedState = r.state),
        l && ts(t, n, !0),
        t.child
    );
}
function zc(e) {
    var t = e.stateNode;
    t.pendingContext
        ? es(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && es(e, t.context, !1),
        Ji(e, t.containerInfo);
}
function vs(e, t, n, r, l) {
    return sn(), $i(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var ri = { dehydrated: null, treeContext: null, retryLane: 0 };
function li(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function jc(e, t, n) {
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
        M($, l & 1),
        e === null)
    )
        return (
            Go(t),
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
                            : (o = Ol(i, r, 0, null)),
                        (e = zt(e, r, n, null)),
                        (o.return = t),
                        (e.return = t),
                        (o.sibling = e),
                        (t.child = o),
                        (t.child.memoizedState = li(n)),
                        (t.memoizedState = ri),
                        e)
                      : tu(t, i))
        );
    if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
        return Pp(e, t, i, r, u, l, n);
    if (o) {
        (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
        var s = { mode: 'hidden', children: r.children };
        return (
            !(i & 1) && t.child !== l
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = s),
                  (t.deletions = null))
                : ((r = gt(l, s)),
                  (r.subtreeFlags = l.subtreeFlags & 14680064)),
            u !== null
                ? (o = gt(u, o))
                : ((o = zt(o, i, n, null)), (o.flags |= 2)),
            (o.return = t),
            (r.return = t),
            (r.sibling = o),
            (t.child = r),
            (r = o),
            (o = t.child),
            (i = e.child.memoizedState),
            (i =
                i === null
                    ? li(n)
                    : {
                          baseLanes: i.baseLanes | n,
                          cachePool: null,
                          transitions: i.transitions,
                      }),
            (o.memoizedState = i),
            (o.childLanes = e.childLanes & ~n),
            (t.memoizedState = ri),
            r
        );
    }
    return (
        (o = e.child),
        (e = o.sibling),
        (r = gt(o, { mode: 'visible', children: r.children })),
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
function tu(e, t) {
    return (
        (t = Ol({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    );
}
function Rr(e, t, n, r) {
    return (
        r !== null && $i(r),
        an(t, e.child, null, n),
        (e = tu(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function Pp(e, t, n, r, l, o, i) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = po(Error(S(422)))), Rr(e, t, i, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((o = r.fallback),
                (l = t.mode),
                (r = Ol({ mode: 'visible', children: r.children }, l, 0, null)),
                (o = zt(o, l, i, null)),
                (o.flags |= 2),
                (r.return = t),
                (o.return = t),
                (r.sibling = o),
                (t.child = r),
                t.mode & 1 && an(t, e.child, null, i),
                (t.child.memoizedState = li(i)),
                (t.memoizedState = ri),
                o);
    if (!(t.mode & 1)) return Rr(e, t, i, null);
    if (l.data === '$!') {
        if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
        return (
            (r = u), (o = Error(S(419))), (r = po(o, r, void 0)), Rr(e, t, i, r)
        );
    }
    if (((u = (i & e.childLanes) !== 0), he || u)) {
        if (((r = te), r !== null)) {
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
                    ((o.retryLane = l), et(e, l), Me(r, e, l, -1));
        }
        return uu(), (r = po(Error(S(421)))), Rr(e, t, i, r);
    }
    return l.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = Bp.bind(null, e)),
          (l._reactRetry = t),
          null)
        : ((e = o.treeContext),
          (we = ht(l.nextSibling)),
          (Se = t),
          (B = !0),
          (Ae = null),
          e !== null &&
              ((Ce[_e++] = Xe),
              (Ce[_e++] = Ye),
              (Ce[_e++] = Ft),
              (Xe = e.id),
              (Ye = e.overflow),
              (Ft = t)),
          (t = tu(t, r.children)),
          (t.flags |= 4096),
          t);
}
function gs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), qo(e.return, t, n);
}
function ho(e, t, n, r, l) {
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
function Fc(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        o = r.tail;
    if ((ae(e, t, r.children, n), (r = $.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && gs(e, n, t);
                else if (e.tag === 19) gs(e, n, t);
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
    if ((M($, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (l) {
            case 'forwards':
                for (n = t.child, l = null; n !== null; )
                    (e = n.alternate),
                        e !== null && cl(e) === null && (l = n),
                        (n = n.sibling);
                (n = l),
                    n === null
                        ? ((l = t.child), (t.child = null))
                        : ((l = n.sibling), (n.sibling = null)),
                    ho(t, !1, l, n, o);
                break;
            case 'backwards':
                for (n = null, l = t.child, t.child = null; l !== null; ) {
                    if (((e = l.alternate), e !== null && cl(e) === null)) {
                        t.child = l;
                        break;
                    }
                    (e = l.sibling), (l.sibling = n), (n = l), (l = e);
                }
                ho(t, !0, n, null, o);
                break;
            case 'together':
                ho(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function $r(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function tt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Dt |= t.lanes),
        !(n & t.childLanes))
    )
        return null;
    if (e !== null && t.child !== e.child) throw Error(S(153));
    if (t.child !== null) {
        for (
            e = t.child, n = gt(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = gt(e, e.pendingProps)),
                (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function Tp(e, t, n) {
    switch (t.tag) {
        case 3:
            zc(t), sn();
            break;
        case 5:
            uc(t);
            break;
        case 1:
            ye(t.type) && ll(t);
            break;
        case 4:
            Ji(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            M(ul, r._currentValue), (r._currentValue = l);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (M($, $.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? jc(e, t, n)
                      : (M($, $.current & 1),
                        (e = tt(e, t, n)),
                        e !== null ? e.sibling : null);
            M($, $.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return Fc(e, t, n);
                t.flags |= 128;
            }
            if (
                ((l = t.memoizedState),
                l !== null &&
                    ((l.rendering = null),
                    (l.tail = null),
                    (l.lastEffect = null)),
                M($, $.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Oc(e, t, n);
    }
    return tt(e, t, n);
}
var Ac, oi, Dc, Mc;
Ac = function (e, t) {
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
oi = function () {};
Dc = function (e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        (e = t.stateNode), Ot(We.current);
        var o = null;
        switch (n) {
            case 'input':
                (l = Po(e, l)), (r = Po(e, r)), (o = []);
                break;
            case 'select':
                (l = V({}, l, { value: void 0 })),
                    (r = V({}, r, { value: void 0 })),
                    (o = []);
                break;
            case 'textarea':
                (l = Oo(e, l)), (r = Oo(e, r)), (o = []);
                break;
            default:
                typeof l.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = nl);
        }
        zo(n, r);
        var i;
        n = null;
        for (a in l)
            if (!r.hasOwnProperty(a) && l.hasOwnProperty(a) && l[a] != null)
                if (a === 'style') {
                    var u = l[a];
                    for (i in u)
                        u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
                } else
                    a !== 'dangerouslySetInnerHTML' &&
                        a !== 'children' &&
                        a !== 'suppressContentEditableWarning' &&
                        a !== 'suppressHydrationWarning' &&
                        a !== 'autoFocus' &&
                        (Vn.hasOwnProperty(a)
                            ? o || (o = [])
                            : (o = o || []).push(a, null));
        for (a in r) {
            var s = r[a];
            if (
                ((u = l != null ? l[a] : void 0),
                r.hasOwnProperty(a) && s !== u && (s != null || u != null))
            )
                if (a === 'style')
                    if (u) {
                        for (i in u)
                            !u.hasOwnProperty(i) ||
                                (s && s.hasOwnProperty(i)) ||
                                (n || (n = {}), (n[i] = ''));
                        for (i in s)
                            s.hasOwnProperty(i) &&
                                u[i] !== s[i] &&
                                (n || (n = {}), (n[i] = s[i]));
                    } else n || (o || (o = []), o.push(a, n)), (n = s);
                else
                    a === 'dangerouslySetInnerHTML'
                        ? ((s = s ? s.__html : void 0),
                          (u = u ? u.__html : void 0),
                          s != null && u !== s && (o = o || []).push(a, s))
                        : a === 'children'
                          ? (typeof s != 'string' && typeof s != 'number') ||
                            (o = o || []).push(a, '' + s)
                          : a !== 'suppressContentEditableWarning' &&
                            a !== 'suppressHydrationWarning' &&
                            (Vn.hasOwnProperty(a)
                                ? (s != null &&
                                      a === 'onScroll' &&
                                      U('scroll', e),
                                  o || u === s || (o = []))
                                : (o = o || []).push(a, s));
        }
        n && (o = o || []).push('style', n);
        var a = o;
        (t.updateQueue = a) && (t.flags |= 4);
    }
};
Mc = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function Nn(e, t) {
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
function Rp(e, t, n) {
    var r = t.pendingProps;
    switch ((Bi(t), t.tag)) {
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
            return ye(t.type) && rl(), ie(t), null;
        case 3:
            return (
                (r = t.stateNode),
                cn(),
                I(me),
                I(se),
                Yi(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (Pr(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Ae !== null && (pi(Ae), (Ae = null)))),
                oi(e, t),
                ie(t),
                null
            );
        case 5:
            Xi(t);
            var l = Ot(tr.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                Dc(e, t, n, r, l),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(S(166));
                    return ie(t), null;
                }
                if (((e = Ot(We.current)), Pr(t))) {
                    (r = t.stateNode), (n = t.type);
                    var o = t.memoizedProps;
                    switch (
                        ((r[$e] = t), (r[bn] = o), (e = (t.mode & 1) !== 0), n)
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
                            for (l = 0; l < jn.length; l++) U(jn[l], r);
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
                            Pu(r, o), U('invalid', r);
                            break;
                        case 'select':
                            (r._wrapperState = { wasMultiple: !!o.multiple }),
                                U('invalid', r);
                            break;
                        case 'textarea':
                            Ru(r, o), U('invalid', r);
                    }
                    zo(n, o), (l = null);
                    for (var i in o)
                        if (o.hasOwnProperty(i)) {
                            var u = o[i];
                            i === 'children'
                                ? typeof u == 'string'
                                    ? r.textContent !== u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Nr(r.textContent, u, e),
                                      (l = ['children', u]))
                                    : typeof u == 'number' &&
                                      r.textContent !== '' + u &&
                                      (o.suppressHydrationWarning !== !0 &&
                                          Nr(r.textContent, u, e),
                                      (l = ['children', '' + u]))
                                : Vn.hasOwnProperty(i) &&
                                  u != null &&
                                  i === 'onScroll' &&
                                  U('scroll', r);
                        }
                    switch (n) {
                        case 'input':
                            gr(r), Tu(r, o, !0);
                            break;
                        case 'textarea':
                            gr(r), Ou(r);
                            break;
                        case 'select':
                        case 'option':
                            break;
                        default:
                            typeof o.onClick == 'function' && (r.onclick = nl);
                    }
                    (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (i = l.nodeType === 9 ? l : l.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = ca(n)),
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
                        (e[bn] = r),
                        Ac(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((i = jo(n, r)), n)) {
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
                                for (l = 0; l < jn.length; l++) U(jn[l], e);
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
                                Pu(e, r), (l = Po(e, r)), U('invalid', e);
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
                                Ru(e, r), (l = Oo(e, r)), U('invalid', e);
                                break;
                            default:
                                l = r;
                        }
                        zo(n, l), (u = l);
                        for (o in u)
                            if (u.hasOwnProperty(o)) {
                                var s = u[o];
                                o === 'style'
                                    ? pa(e, s)
                                    : o === 'dangerouslySetInnerHTML'
                                      ? ((s = s ? s.__html : void 0),
                                        s != null && fa(e, s))
                                      : o === 'children'
                                        ? typeof s == 'string'
                                            ? (n !== 'textarea' || s !== '') &&
                                              Wn(e, s)
                                            : typeof s == 'number' &&
                                              Wn(e, '' + s)
                                        : o !==
                                              'suppressContentEditableWarning' &&
                                          o !== 'suppressHydrationWarning' &&
                                          o !== 'autoFocus' &&
                                          (Vn.hasOwnProperty(o)
                                              ? s != null &&
                                                o === 'onScroll' &&
                                                U('scroll', e)
                                              : s != null && _i(e, o, s, i));
                            }
                        switch (n) {
                            case 'input':
                                gr(e), Tu(e, r, !1);
                                break;
                            case 'textarea':
                                gr(e), Ou(e);
                                break;
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + wt(r.value));
                                break;
                            case 'select':
                                (e.multiple = !!r.multiple),
                                    (o = r.value),
                                    o != null
                                        ? bt(e, !!r.multiple, o, !1)
                                        : r.defaultValue != null &&
                                          bt(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          );
                                break;
                            default:
                                typeof l.onClick == 'function' &&
                                    (e.onclick = nl);
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
            if (e && t.stateNode != null) Mc(e, t, e.memoizedProps, r);
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(S(166));
                if (((n = Ot(tr.current)), Ot(We.current), Pr(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[$e] = t),
                        (o = r.nodeValue !== n) && ((e = Se), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                Nr(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 &&
                                    Nr(r.nodeValue, n, (e.mode & 1) !== 0);
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
                (I($),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (B && we !== null && t.mode & 1 && !(t.flags & 128))
                    ec(), sn(), (t.flags |= 98560), (o = !1);
                else if (((o = Pr(t)), r !== null && r.dehydrated !== null)) {
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
                        sn(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4);
                    ie(t), (o = !1);
                } else Ae !== null && (pi(Ae), (Ae = null)), (o = !0);
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
                              : uu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ie(t),
                  null);
        case 4:
            return (
                cn(),
                oi(e, t),
                e === null && qn(t.stateNode.containerInfo),
                ie(t),
                null
            );
        case 10:
            return Wi(t.type._context), ie(t), null;
        case 17:
            return ye(t.type) && rl(), ie(t), null;
        case 19:
            if ((I($), (o = t.memoizedState), o === null)) return ie(t), null;
            if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
                if (r) Nn(o, !1);
                else {
                    if (q !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((i = cl(e)), i !== null)) {
                                for (
                                    t.flags |= 128,
                                        Nn(o, !1),
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
                                return M($, ($.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    o.tail !== null &&
                        J() > dn &&
                        ((t.flags |= 128),
                        (r = !0),
                        Nn(o, !1),
                        (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = cl(i)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Nn(o, !0),
                            o.tail === null &&
                                o.tailMode === 'hidden' &&
                                !i.alternate &&
                                !B)
                        )
                            return ie(t), null;
                    } else
                        2 * J() - o.renderingStartTime > dn &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Nn(o, !1),
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
                  M($, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ie(t), null);
        case 22:
        case 23:
            return (
                iu(),
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
function Op(e, t) {
    switch ((Bi(t), t.tag)) {
        case 1:
            return (
                ye(t.type) && rl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 3:
            return (
                cn(),
                I(me),
                I(se),
                Yi(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            );
        case 5:
            return Xi(t), null;
        case 13:
            if (
                (I($),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(S(340));
                sn();
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 19:
            return I($), null;
        case 4:
            return cn(), null;
        case 10:
            return Wi(t.type._context), null;
        case 22:
        case 23:
            return iu(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var Or = !1,
    ue = !1,
    Lp = typeof WeakSet == 'function' ? WeakSet : Set,
    E = null;
function qt(e, t) {
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
function ii(e, t, n) {
    try {
        n();
    } catch (r) {
        W(e, t, r);
    }
}
var ws = !1;
function zp(e, t) {
    if (((Vo = br), (e = $a()), Ui(e))) {
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
                        a = 0,
                        h = 0,
                        d = e,
                        m = null;
                    t: for (;;) {
                        for (
                            var k;
                            d !== n ||
                                (l !== 0 && d.nodeType !== 3) ||
                                (u = i + l),
                                d !== o ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (s = i + r),
                                d.nodeType === 3 && (i += d.nodeValue.length),
                                (k = d.firstChild) !== null;

                        )
                            (m = d), (d = k);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (m === n && ++a === l && (u = i),
                                m === o && ++h === r && (s = i),
                                (k = d.nextSibling) !== null)
                            )
                                break;
                            (d = m), (m = d.parentNode);
                        }
                        d = k;
                    }
                    n = u === -1 || s === -1 ? null : { start: u, end: s };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (
        Wo = { focusedElem: e, selectionRange: n }, br = !1, E = t;
        E !== null;

    )
        if (
            ((t = E),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (E = e);
        else
            for (; E !== null; ) {
                t = E;
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
                                        _ = y.memoizedState,
                                        f = t.stateNode,
                                        c = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? v
                                                : je(t.type, v),
                                            _
                                        );
                                    f.__reactInternalSnapshotBeforeUpdate = c;
                                }
                                break;
                            case 3:
                                var p = t.stateNode.containerInfo;
                                p.nodeType === 1
                                    ? (p.textContent = '')
                                    : p.nodeType === 9 &&
                                      p.documentElement &&
                                      p.removeChild(p.documentElement);
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
                    (e.return = t.return), (E = e);
                    break;
                }
                E = t.return;
            }
    return (y = ws), (ws = !1), y;
}
function Bn(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var l = (r = r.next);
        do {
            if ((l.tag & e) === e) {
                var o = l.destroy;
                (l.destroy = void 0), o !== void 0 && ii(t, n, o);
            }
            l = l.next;
        } while (l !== r);
    }
}
function Tl(e, t) {
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
function ui(e) {
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
function Uc(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Uc(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[$e],
                delete t[bn],
                delete t[Jo],
                delete t[hp],
                delete t[mp])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function Ic(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ss(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || Ic(e.return)) return null;
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
function si(e, t, n) {
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
                  n != null || t.onclick !== null || (t.onclick = nl));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (si(e, t, n), e = e.sibling; e !== null; )
            si(e, t, n), (e = e.sibling);
}
function ai(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (ai(e, t, n), e = e.sibling; e !== null; )
            ai(e, t, n), (e = e.sibling);
}
var ne = null,
    Fe = !1;
function rt(e, t, n) {
    for (n = n.child; n !== null; ) Bc(e, t, n), (n = n.sibling);
}
function Bc(e, t, n) {
    if (Ve && typeof Ve.onCommitFiberUnmount == 'function')
        try {
            Ve.onCommitFiberUnmount(Sl, n);
        } catch {}
    switch (n.tag) {
        case 5:
            ue || qt(n, t);
        case 6:
            var r = ne,
                l = Fe;
            (ne = null),
                rt(e, t, n),
                (ne = r),
                (Fe = l),
                ne !== null &&
                    (Fe
                        ? ((e = ne),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : ne.removeChild(n.stateNode));
            break;
        case 18:
            ne !== null &&
                (Fe
                    ? ((e = ne),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? io(e.parentNode, n)
                          : e.nodeType === 1 && io(e, n),
                      Xn(e))
                    : io(ne, n.stateNode));
            break;
        case 4:
            (r = ne),
                (l = Fe),
                (ne = n.stateNode.containerInfo),
                (Fe = !0),
                rt(e, t, n),
                (ne = r),
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
                        i !== void 0 && (o & 2 || o & 4) && ii(n, t, i),
                        (l = l.next);
                } while (l !== r);
            }
            rt(e, t, n);
            break;
        case 1:
            if (
                !ue &&
                (qt(n, t),
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
function ks(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Lp()),
            t.forEach(function (r) {
                var l = $p.bind(null, e, r);
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
                            (ne = u.stateNode), (Fe = !1);
                            break e;
                        case 3:
                            (ne = u.stateNode.containerInfo), (Fe = !0);
                            break e;
                        case 4:
                            (ne = u.stateNode.containerInfo), (Fe = !0);
                            break e;
                    }
                    u = u.return;
                }
                if (ne === null) throw Error(S(160));
                Bc(o, i, l), (ne = null), (Fe = !1);
                var s = l.alternate;
                s !== null && (s.return = null), (l.return = null);
            } catch (a) {
                W(l, t, a);
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) $c(t, e), (t = t.sibling);
}
function $c(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((ze(t, e), Ie(e), r & 4)) {
                try {
                    Bn(3, e, e.return), Tl(3, e);
                } catch (v) {
                    W(e, e.return, v);
                }
                try {
                    Bn(5, e, e.return);
                } catch (v) {
                    W(e, e.return, v);
                }
            }
            break;
        case 1:
            ze(t, e), Ie(e), r & 512 && n !== null && qt(n, n.return);
            break;
        case 5:
            if (
                (ze(t, e),
                Ie(e),
                r & 512 && n !== null && qt(n, n.return),
                e.flags & 32)
            ) {
                var l = e.stateNode;
                try {
                    Wn(l, '');
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
                            sa(l, o),
                            jo(u, i);
                        var a = jo(u, o);
                        for (i = 0; i < s.length; i += 2) {
                            var h = s[i],
                                d = s[i + 1];
                            h === 'style'
                                ? pa(l, d)
                                : h === 'dangerouslySetInnerHTML'
                                  ? fa(l, d)
                                  : h === 'children'
                                    ? Wn(l, d)
                                    : _i(l, h, d, a);
                        }
                        switch (u) {
                            case 'input':
                                To(l, o);
                                break;
                            case 'textarea':
                                aa(l, o);
                                break;
                            case 'select':
                                var m = l._wrapperState.wasMultiple;
                                l._wrapperState.wasMultiple = !!o.multiple;
                                var k = o.value;
                                k != null
                                    ? bt(l, !!o.multiple, k, !1)
                                    : m !== !!o.multiple &&
                                      (o.defaultValue != null
                                          ? bt(
                                                l,
                                                !!o.multiple,
                                                o.defaultValue,
                                                !0
                                            )
                                          : bt(
                                                l,
                                                !!o.multiple,
                                                o.multiple ? [] : '',
                                                !1
                                            ));
                        }
                        l[bn] = o;
                    } catch (v) {
                        W(e, e.return, v);
                    }
            }
            break;
        case 6:
            if ((ze(t, e), Ie(e), r & 4)) {
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
                Ie(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    Xn(t.containerInfo);
                } catch (v) {
                    W(e, e.return, v);
                }
            break;
        case 4:
            ze(t, e), Ie(e);
            break;
        case 13:
            ze(t, e),
                Ie(e),
                (l = e.child),
                l.flags & 8192 &&
                    ((o = l.memoizedState !== null),
                    (l.stateNode.isHidden = o),
                    !o ||
                        (l.alternate !== null &&
                            l.alternate.memoizedState !== null) ||
                        (lu = J())),
                r & 4 && ks(e);
            break;
        case 22:
            if (
                ((h = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? ((ue = (a = ue) || h), ze(t, e), (ue = a))
                    : ze(t, e),
                Ie(e),
                r & 8192)
            ) {
                if (
                    ((a = e.memoizedState !== null),
                    (e.stateNode.isHidden = a) && !h && e.mode & 1)
                )
                    for (E = e, h = e.child; h !== null; ) {
                        for (d = E = h; E !== null; ) {
                            switch (((m = E), (k = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Bn(4, m, m.return);
                                    break;
                                case 1:
                                    qt(m, m.return);
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
                                    qt(m, m.return);
                                    break;
                                case 22:
                                    if (m.memoizedState !== null) {
                                        xs(d);
                                        continue;
                                    }
                            }
                            k !== null ? ((k.return = m), (E = k)) : xs(d);
                        }
                        h = h.sibling;
                    }
                e: for (h = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (h === null) {
                            h = d;
                            try {
                                (l = d.stateNode),
                                    a
                                        ? ((o = l.style),
                                          typeof o.setProperty == 'function'
                                              ? o.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (o.display = 'none'))
                                        : ((u = d.stateNode),
                                          (s = d.memoizedProps.style),
                                          (i =
                                              s != null &&
                                              s.hasOwnProperty('display')
                                                  ? s.display
                                                  : null),
                                          (u.style.display = da('display', i)));
                            } catch (v) {
                                W(e, e.return, v);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (h === null)
                            try {
                                d.stateNode.nodeValue = a
                                    ? ''
                                    : d.memoizedProps;
                            } catch (v) {
                                W(e, e.return, v);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        h === d && (h = null), (d = d.return);
                    }
                    h === d && (h = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling);
                }
            }
            break;
        case 19:
            ze(t, e), Ie(e), r & 4 && ks(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Ie(e);
    }
}
function Ie(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Ic(n)) {
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
                    r.flags & 32 && (Wn(l, ''), (r.flags &= -33));
                    var o = Ss(e);
                    ai(e, o, l);
                    break;
                case 3:
                case 4:
                    var i = r.stateNode.containerInfo,
                        u = Ss(e);
                    si(e, u, i);
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
function jp(e, t, n) {
    (E = e), Hc(e);
}
function Hc(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
        var l = E,
            o = l.child;
        if (l.tag === 22 && r) {
            var i = l.memoizedState !== null || Or;
            if (!i) {
                var u = l.alternate,
                    s = (u !== null && u.memoizedState !== null) || ue;
                u = Or;
                var a = ue;
                if (((Or = i), (ue = s) && !a))
                    for (E = l; E !== null; )
                        (i = E),
                            (s = i.child),
                            i.tag === 22 && i.memoizedState !== null
                                ? Cs(l)
                                : s !== null
                                  ? ((s.return = i), (E = s))
                                  : Cs(l);
                for (; o !== null; ) (E = o), Hc(o), (o = o.sibling);
                (E = l), (Or = u), (ue = a);
            }
            Es(e);
        } else
            l.subtreeFlags & 8772 && o !== null
                ? ((o.return = l), (E = o))
                : Es(e);
    }
}
function Es(e) {
    for (; E !== null; ) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            ue || Tl(5, t);
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
                            o !== null && os(t, o, r);
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
                                os(t, i, n);
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
                                var a = t.alternate;
                                if (a !== null) {
                                    var h = a.memoizedState;
                                    if (h !== null) {
                                        var d = h.dehydrated;
                                        d !== null && Xn(d);
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
                ue || (t.flags & 512 && ui(t));
            } catch (m) {
                W(t, t.return, m);
            }
        }
        if (t === e) {
            E = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), (E = n);
            break;
        }
        E = t.return;
    }
}
function xs(e) {
    for (; E !== null; ) {
        var t = E;
        if (t === e) {
            E = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), (E = n);
            break;
        }
        E = t.return;
    }
}
function Cs(e) {
    for (; E !== null; ) {
        var t = E;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        Tl(4, t);
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
                        ui(t);
                    } catch (s) {
                        W(t, o, s);
                    }
                    break;
                case 5:
                    var i = t.return;
                    try {
                        ui(t);
                    } catch (s) {
                        W(t, i, s);
                    }
            }
        } catch (s) {
            W(t, t.return, s);
        }
        if (t === e) {
            E = null;
            break;
        }
        var u = t.sibling;
        if (u !== null) {
            (u.return = t.return), (E = u);
            break;
        }
        E = t.return;
    }
}
var Fp = Math.ceil,
    pl = nt.ReactCurrentDispatcher,
    nu = nt.ReactCurrentOwner,
    Pe = nt.ReactCurrentBatchConfig,
    A = 0,
    te = null,
    X = null,
    re = 0,
    ge = 0,
    Zt = Et(0),
    q = 0,
    or = null,
    Dt = 0,
    Rl = 0,
    ru = 0,
    $n = null,
    pe = null,
    lu = 0,
    dn = 1 / 0,
    Ke = null,
    hl = !1,
    ci = null,
    yt = null,
    Lr = !1,
    ct = null,
    ml = 0,
    Hn = 0,
    fi = null,
    Hr = -1,
    Vr = 0;
function ce() {
    return A & 6 ? J() : Hr !== -1 ? Hr : (Hr = J());
}
function vt(e) {
    return e.mode & 1
        ? A & 2 && re !== 0
            ? re & -re
            : vp.transition !== null
              ? (Vr === 0 && (Vr = _a()), Vr)
              : ((e = D),
                e !== 0 ||
                    ((e = window.event), (e = e === void 0 ? 16 : za(e.type))),
                e)
        : 1;
}
function Me(e, t, n, r) {
    if (50 < Hn) throw ((Hn = 0), (fi = null), Error(S(185)));
    sr(e, n, r),
        (!(A & 2) || e !== te) &&
            (e === te && (!(A & 2) && (Rl |= n), q === 4 && st(e, re)),
            ve(e, r),
            n === 1 &&
                A === 0 &&
                !(t.mode & 1) &&
                ((dn = J() + 500), _l && xt()));
}
function ve(e, t) {
    var n = e.callbackNode;
    vd(e, t);
    var r = Zr(e, e === te ? re : 0);
    if (r === 0)
        n !== null && ju(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && ju(n), t === 1))
            e.tag === 0 ? yp(_s.bind(null, e)) : qa(_s.bind(null, e)),
                dp(function () {
                    !(A & 6) && xt();
                }),
                (n = null);
        else {
            switch (Na(r)) {
                case 1:
                    n = Oi;
                    break;
                case 4:
                    n = xa;
                    break;
                case 16:
                    n = qr;
                    break;
                case 536870912:
                    n = Ca;
                    break;
                default:
                    n = qr;
            }
            n = Gc(n, Vc.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function Vc(e, t) {
    if (((Hr = -1), (Vr = 0), A & 6)) throw Error(S(327));
    var n = e.callbackNode;
    if (ln() && e.callbackNode !== n) return null;
    var r = Zr(e, e === te ? re : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
    else {
        t = r;
        var l = A;
        A |= 2;
        var o = Qc();
        (te !== e || re !== t) && ((Ke = null), (dn = J() + 500), Lt(e, t));
        do
            try {
                Mp();
                break;
            } catch (u) {
                Wc(e, u);
            }
        while (1);
        Vi(),
            (pl.current = o),
            (A = l),
            X !== null ? (t = 0) : ((te = null), (re = 0), (t = q));
    }
    if (t !== 0) {
        if (
            (t === 2 && ((l = Uo(e)), l !== 0 && ((r = l), (t = di(e, l)))),
            t === 1)
        )
            throw ((n = or), Lt(e, 0), st(e, r), ve(e, J()), n);
        if (t === 6) st(e, r);
        else {
            if (
                ((l = e.current.alternate),
                !(r & 30) &&
                    !Ap(l) &&
                    ((t = yl(e, r)),
                    t === 2 &&
                        ((o = Uo(e)), o !== 0 && ((r = o), (t = di(e, o)))),
                    t === 1))
            )
                throw ((n = or), Lt(e, 0), st(e, r), ve(e, J()), n);
            switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(S(345));
                case 2:
                    Pt(e, pe, Ke);
                    break;
                case 3:
                    if (
                        (st(e, r),
                        (r & 130023424) === r && ((t = lu + 500 - J()), 10 < t))
                    ) {
                        if (Zr(e, 0) !== 0) break;
                        if (((l = e.suspendedLanes), (l & r) !== r)) {
                            ce(), (e.pingedLanes |= e.suspendedLanes & l);
                            break;
                        }
                        e.timeoutHandle = Ko(Pt.bind(null, e, pe, Ke), t);
                        break;
                    }
                    Pt(e, pe, Ke);
                    break;
                case 4:
                    if ((st(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, l = -1; 0 < r; ) {
                        var i = 31 - De(r);
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
                                          : 1960 * Fp(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Ko(Pt.bind(null, e, pe, Ke), r);
                        break;
                    }
                    Pt(e, pe, Ke);
                    break;
                case 5:
                    Pt(e, pe, Ke);
                    break;
                default:
                    throw Error(S(329));
            }
        }
    }
    return ve(e, J()), e.callbackNode === n ? Vc.bind(null, e) : null;
}
function di(e, t) {
    var n = $n;
    return (
        e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256),
        (e = yl(e, t)),
        e !== 2 && ((t = pe), (pe = n), t !== null && pi(t)),
        e
    );
}
function pi(e) {
    pe === null ? (pe = e) : pe.push.apply(pe, e);
}
function Ap(e) {
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
function st(e, t) {
    for (
        t &= ~ru,
            t &= ~Rl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - De(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function _s(e) {
    if (A & 6) throw Error(S(327));
    ln();
    var t = Zr(e, 0);
    if (!(t & 1)) return ve(e, J()), null;
    var n = yl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = Uo(e);
        r !== 0 && ((t = r), (n = di(e, r)));
    }
    if (n === 1) throw ((n = or), Lt(e, 0), st(e, t), ve(e, J()), n);
    if (n === 6) throw Error(S(345));
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Pt(e, pe, Ke),
        ve(e, J()),
        null
    );
}
function ou(e, t) {
    var n = A;
    A |= 1;
    try {
        return e(t);
    } finally {
        (A = n), A === 0 && ((dn = J() + 500), _l && xt());
    }
}
function Mt(e) {
    ct !== null && ct.tag === 0 && !(A & 6) && ln();
    var t = A;
    A |= 1;
    var n = Pe.transition,
        r = D;
    try {
        if (((Pe.transition = null), (D = 1), e)) return e();
    } finally {
        (D = r), (Pe.transition = n), (A = t), !(A & 6) && xt();
    }
}
function iu() {
    (ge = Zt.current), I(Zt);
}
function Lt(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), fp(n)), X !== null))
        for (n = X.return; n !== null; ) {
            var r = n;
            switch ((Bi(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && rl();
                    break;
                case 3:
                    cn(), I(me), I(se), Yi();
                    break;
                case 5:
                    Xi(r);
                    break;
                case 4:
                    cn();
                    break;
                case 13:
                    I($);
                    break;
                case 19:
                    I($);
                    break;
                case 10:
                    Wi(r.type._context);
                    break;
                case 22:
                case 23:
                    iu();
            }
            n = n.return;
        }
    if (
        ((te = e),
        (X = e = gt(e.current, null)),
        (re = ge = t),
        (q = 0),
        (or = null),
        (ru = Rl = Dt = 0),
        (pe = $n = null),
        Rt !== null)
    ) {
        for (t = 0; t < Rt.length; t++)
            if (((n = Rt[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var l = r.next,
                    o = n.pending;
                if (o !== null) {
                    var i = o.next;
                    (o.next = l), (r.next = i);
                }
                n.pending = r;
            }
        Rt = null;
    }
    return e;
}
function Wc(e, t) {
    do {
        var n = X;
        try {
            if ((Vi(), (Ir.current = dl), fl)) {
                for (var r = H.memoizedState; r !== null; ) {
                    var l = r.queue;
                    l !== null && (l.pending = null), (r = r.next);
                }
                fl = !1;
            }
            if (
                ((At = 0),
                (ee = G = H = null),
                (In = !1),
                (nr = 0),
                (nu.current = null),
                n === null || n.return === null)
            ) {
                (q = 1), (or = t), (X = null);
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
                    var a = s,
                        h = u,
                        d = h.tag;
                    if (!(h.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var m = h.alternate;
                        m
                            ? ((h.updateQueue = m.updateQueue),
                              (h.memoizedState = m.memoizedState),
                              (h.lanes = m.lanes))
                            : ((h.updateQueue = null),
                              (h.memoizedState = null));
                    }
                    var k = ds(i);
                    if (k !== null) {
                        (k.flags &= -257),
                            ps(k, i, u, o, t),
                            k.mode & 1 && fs(o, a, t),
                            (t = k),
                            (s = a);
                        var y = t.updateQueue;
                        if (y === null) {
                            var v = new Set();
                            v.add(s), (t.updateQueue = v);
                        } else y.add(s);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            fs(o, a, t), uu();
                            break e;
                        }
                        s = Error(S(426));
                    }
                } else if (B && u.mode & 1) {
                    var _ = ds(i);
                    if (_ !== null) {
                        !(_.flags & 65536) && (_.flags |= 256),
                            ps(_, i, u, o, t),
                            $i(fn(s, u));
                        break e;
                    }
                }
                (o = s = fn(s, u)),
                    q !== 4 && (q = 2),
                    $n === null ? ($n = [o]) : $n.push(o),
                    (o = i);
                do {
                    switch (o.tag) {
                        case 3:
                            (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                            var f = Pc(o, s, t);
                            ls(o, f);
                            break e;
                        case 1:
                            u = s;
                            var c = o.type,
                                p = o.stateNode;
                            if (
                                !(o.flags & 128) &&
                                (typeof c.getDerivedStateFromError ==
                                    'function' ||
                                    (p !== null &&
                                        typeof p.componentDidCatch ==
                                            'function' &&
                                        (yt === null || !yt.has(p))))
                            ) {
                                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                                var w = Tc(o, u, t);
                                ls(o, w);
                                break e;
                            }
                    }
                    o = o.return;
                } while (o !== null);
            }
            Jc(n);
        } catch (x) {
            (t = x), X === n && n !== null && (X = n = n.return);
            continue;
        }
        break;
    } while (1);
}
function Qc() {
    var e = pl.current;
    return (pl.current = dl), e === null ? dl : e;
}
function uu() {
    (q === 0 || q === 3 || q === 2) && (q = 4),
        te === null || (!(Dt & 268435455) && !(Rl & 268435455)) || st(te, re);
}
function yl(e, t) {
    var n = A;
    A |= 2;
    var r = Qc();
    (te !== e || re !== t) && ((Ke = null), Lt(e, t));
    do
        try {
            Dp();
            break;
        } catch (l) {
            Wc(e, l);
        }
    while (1);
    if ((Vi(), (A = n), (pl.current = r), X !== null)) throw Error(S(261));
    return (te = null), (re = 0), q;
}
function Dp() {
    for (; X !== null; ) Kc(X);
}
function Mp() {
    for (; X !== null && !sd(); ) Kc(X);
}
function Kc(e) {
    var t = Yc(e.alternate, e, ge);
    (e.memoizedProps = e.pendingProps),
        t === null ? Jc(e) : (X = t),
        (nu.current = null);
}
function Jc(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Op(n, t)), n !== null)) {
                (n.flags &= 32767), (X = n);
                return;
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (q = 6), (X = null);
                return;
            }
        } else if (((n = Rp(n, t, ge)), n !== null)) {
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
function Pt(e, t, n) {
    var r = D,
        l = Pe.transition;
    try {
        (Pe.transition = null), (D = 1), Up(e, t, n, r);
    } finally {
        (Pe.transition = l), (D = r);
    }
    return null;
}
function Up(e, t, n, r) {
    do ln();
    while (ct !== null);
    if (A & 6) throw Error(S(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(S(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var o = n.lanes | n.childLanes;
    if (
        (gd(e, o),
        e === te && ((X = te = null), (re = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            Lr ||
            ((Lr = !0),
            Gc(qr, function () {
                return ln(), null;
            })),
        (o = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || o)
    ) {
        (o = Pe.transition), (Pe.transition = null);
        var i = D;
        D = 1;
        var u = A;
        (A |= 4),
            (nu.current = null),
            zp(e, n),
            $c(n, e),
            lp(Wo),
            (br = !!Vo),
            (Wo = Vo = null),
            (e.current = n),
            jp(n),
            ad(),
            (A = u),
            (D = i),
            (Pe.transition = o);
    } else e.current = n;
    if (
        (Lr && ((Lr = !1), (ct = e), (ml = l)),
        (o = e.pendingLanes),
        o === 0 && (yt = null),
        dd(n.stateNode),
        ve(e, J()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (l = t[n]),
                r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw ((hl = !1), (e = ci), (ci = null), e);
    return (
        ml & 1 && e.tag !== 0 && ln(),
        (o = e.pendingLanes),
        o & 1 ? (e === fi ? Hn++ : ((Hn = 0), (fi = e))) : (Hn = 0),
        xt(),
        null
    );
}
function ln() {
    if (ct !== null) {
        var e = Na(ml),
            t = Pe.transition,
            n = D;
        try {
            if (((Pe.transition = null), (D = 16 > e ? 16 : e), ct === null))
                var r = !1;
            else {
                if (((e = ct), (ct = null), (ml = 0), A & 6))
                    throw Error(S(331));
                var l = A;
                for (A |= 4, E = e.current; E !== null; ) {
                    var o = E,
                        i = o.child;
                    if (E.flags & 16) {
                        var u = o.deletions;
                        if (u !== null) {
                            for (var s = 0; s < u.length; s++) {
                                var a = u[s];
                                for (E = a; E !== null; ) {
                                    var h = E;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Bn(8, h, o);
                                    }
                                    var d = h.child;
                                    if (d !== null) (d.return = h), (E = d);
                                    else
                                        for (; E !== null; ) {
                                            h = E;
                                            var m = h.sibling,
                                                k = h.return;
                                            if ((Uc(h), h === a)) {
                                                E = null;
                                                break;
                                            }
                                            if (m !== null) {
                                                (m.return = k), (E = m);
                                                break;
                                            }
                                            E = k;
                                        }
                                }
                            }
                            var y = o.alternate;
                            if (y !== null) {
                                var v = y.child;
                                if (v !== null) {
                                    y.child = null;
                                    do {
                                        var _ = v.sibling;
                                        (v.sibling = null), (v = _);
                                    } while (v !== null);
                                }
                            }
                            E = o;
                        }
                    }
                    if (o.subtreeFlags & 2064 && i !== null)
                        (i.return = o), (E = i);
                    else
                        e: for (; E !== null; ) {
                            if (((o = E), o.flags & 2048))
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Bn(9, o, o.return);
                                }
                            var f = o.sibling;
                            if (f !== null) {
                                (f.return = o.return), (E = f);
                                break e;
                            }
                            E = o.return;
                        }
                }
                var c = e.current;
                for (E = c; E !== null; ) {
                    i = E;
                    var p = i.child;
                    if (i.subtreeFlags & 2064 && p !== null)
                        (p.return = i), (E = p);
                    else
                        e: for (i = c; E !== null; ) {
                            if (((u = E), u.flags & 2048))
                                try {
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Tl(9, u);
                                    }
                                } catch (x) {
                                    W(u, u.return, x);
                                }
                            if (u === i) {
                                E = null;
                                break e;
                            }
                            var w = u.sibling;
                            if (w !== null) {
                                (w.return = u.return), (E = w);
                                break e;
                            }
                            E = u.return;
                        }
                }
                if (
                    ((A = l),
                    xt(),
                    Ve && typeof Ve.onPostCommitFiberRoot == 'function')
                )
                    try {
                        Ve.onPostCommitFiberRoot(Sl, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (D = n), (Pe.transition = t);
        }
    }
    return !1;
}
function Ns(e, t, n) {
    (t = fn(n, t)),
        (t = Pc(e, t, 1)),
        (e = mt(e, t, 1)),
        (t = ce()),
        e !== null && (sr(e, 1, t), ve(e, t));
}
function W(e, t, n) {
    if (e.tag === 3) Ns(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ns(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (yt === null || !yt.has(r)))
                ) {
                    (e = fn(n, e)),
                        (e = Tc(t, e, 1)),
                        (t = mt(t, e, 1)),
                        (e = ce()),
                        t !== null && (sr(t, 1, e), ve(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function Ip(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = ce()),
        (e.pingedLanes |= e.suspendedLanes & n),
        te === e &&
            (re & n) === n &&
            (q === 4 || (q === 3 && (re & 130023424) === re && 500 > J() - lu)
                ? Lt(e, 0)
                : (ru |= n)),
        ve(e, t);
}
function Xc(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = kr), (kr <<= 1), !(kr & 130023424) && (kr = 4194304))
            : (t = 1));
    var n = ce();
    (e = et(e, t)), e !== null && (sr(e, t, n), ve(e, n));
}
function Bp(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Xc(e, n);
}
function $p(e, t) {
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
    r !== null && r.delete(t), Xc(e, n);
}
var Yc;
Yc = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || me.current) he = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (he = !1), Tp(e, t, n);
            he = !!(e.flags & 131072);
        }
    else (he = !1), B && t.flags & 1048576 && Za(t, il, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            $r(e, t), (e = t.pendingProps);
            var l = un(t, se.current);
            rn(t, n), (l = qi(null, t, r, e, l, n));
            var o = Zi();
            return (
                (t.flags |= 1),
                typeof l == 'object' &&
                l !== null &&
                typeof l.render == 'function' &&
                l.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ye(r) ? ((o = !0), ll(t)) : (o = !1),
                      (t.memoizedState =
                          l.state !== null && l.state !== void 0
                              ? l.state
                              : null),
                      Ki(t),
                      (l.updater = Nl),
                      (t.stateNode = l),
                      (l._reactInternals = t),
                      bo(t, r, e, n),
                      (t = ni(null, t, r, !0, o, n)))
                    : ((t.tag = 0),
                      B && o && Ii(t),
                      ae(null, t, l, n),
                      (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    ($r(e, t),
                    (e = t.pendingProps),
                    (l = r._init),
                    (r = l(r._payload)),
                    (t.type = r),
                    (l = t.tag = Vp(r)),
                    (e = je(r, e)),
                    l)
                ) {
                    case 0:
                        t = ti(null, t, r, e, n);
                        break e;
                    case 1:
                        t = ys(null, t, r, e, n);
                        break e;
                    case 11:
                        t = hs(null, t, r, e, n);
                        break e;
                    case 14:
                        t = ms(null, t, r, je(r.type, e), n);
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
                ti(e, t, r, l, n)
            );
        case 1:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                ys(e, t, r, l, n)
            );
        case 3:
            e: {
                if ((zc(t), e === null)) throw Error(S(387));
                (r = t.pendingProps),
                    (o = t.memoizedState),
                    (l = o.element),
                    nc(e, t),
                    al(t, r, null, n);
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
                        (l = fn(Error(S(423)), t)), (t = vs(e, t, r, n, l));
                        break e;
                    } else if (r !== l) {
                        (l = fn(Error(S(424)), t)), (t = vs(e, t, r, n, l));
                        break e;
                    } else
                        for (
                            we = ht(t.stateNode.containerInfo.firstChild),
                                Se = t,
                                B = !0,
                                Ae = null,
                                n = ic(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((sn(), r === l)) {
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
                uc(t),
                e === null && Go(t),
                (r = t.type),
                (l = t.pendingProps),
                (o = e !== null ? e.memoizedProps : null),
                (i = l.children),
                Qo(r, l)
                    ? (i = null)
                    : o !== null && Qo(r, o) && (t.flags |= 32),
                Lc(e, t),
                ae(e, t, i, n),
                t.child
            );
        case 6:
            return e === null && Go(t), null;
        case 13:
            return jc(e, t, n);
        case 4:
            return (
                Ji(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = an(t, null, r, n)) : ae(e, t, r, n),
                t.child
            );
        case 11:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                hs(e, t, r, l, n)
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
                    M(ul, r._currentValue),
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
                                            var a = o.updateQueue;
                                            if (a !== null) {
                                                a = a.shared;
                                                var h = a.pending;
                                                h === null
                                                    ? (s.next = s)
                                                    : ((s.next = h.next),
                                                      (h.next = s)),
                                                    (a.pending = s);
                                            }
                                        }
                                        (o.lanes |= n),
                                            (s = o.alternate),
                                            s !== null && (s.lanes |= n),
                                            qo(o.return, n, t),
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
                                    qo(i, n, t),
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
                rn(t, n),
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
                ms(e, t, r, l, n)
            );
        case 15:
            return Rc(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (l = t.pendingProps),
                (l = t.elementType === r ? l : je(r, l)),
                $r(e, t),
                (t.tag = 1),
                ye(r) ? ((e = !0), ll(t)) : (e = !1),
                rn(t, n),
                lc(t, r, l),
                bo(t, r, l, n),
                ni(null, t, r, !0, e, n)
            );
        case 19:
            return Fc(e, t, n);
        case 22:
            return Oc(e, t, n);
    }
    throw Error(S(156, t.tag));
};
function Gc(e, t) {
    return Ea(e, t);
}
function Hp(e, t, n, r) {
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
function Ne(e, t, n, r) {
    return new Hp(e, t, n, r);
}
function su(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Vp(e) {
    if (typeof e == 'function') return su(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Pi)) return 11;
        if (e === Ti) return 14;
    }
    return 2;
}
function gt(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = Ne(e.tag, t, e.key, e.mode)),
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
function Wr(e, t, n, r, l, o) {
    var i = 2;
    if (((r = e), typeof e == 'function')) su(e) && (i = 1);
    else if (typeof e == 'string') i = 5;
    else
        e: switch (e) {
            case Ht:
                return zt(n.children, l, o, t);
            case Ni:
                (i = 8), (l |= 8);
                break;
            case xo:
                return (
                    (e = Ne(12, n, t, l | 2)),
                    (e.elementType = xo),
                    (e.lanes = o),
                    e
                );
            case Co:
                return (
                    (e = Ne(13, n, t, l)),
                    (e.elementType = Co),
                    (e.lanes = o),
                    e
                );
            case _o:
                return (
                    (e = Ne(19, n, t, l)),
                    (e.elementType = _o),
                    (e.lanes = o),
                    e
                );
            case oa:
                return Ol(n, l, o, t);
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case ra:
                            i = 10;
                            break e;
                        case la:
                            i = 9;
                            break e;
                        case Pi:
                            i = 11;
                            break e;
                        case Ti:
                            i = 14;
                            break e;
                        case ot:
                            (i = 16), (r = null);
                            break e;
                    }
                throw Error(S(130, e == null ? e : typeof e, ''));
        }
    return (
        (t = Ne(i, n, t, l)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = o),
        t
    );
}
function zt(e, t, n, r) {
    return (e = Ne(7, e, r, t)), (e.lanes = n), e;
}
function Ol(e, t, n, r) {
    return (
        (e = Ne(22, e, r, t)),
        (e.elementType = oa),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    );
}
function mo(e, t, n) {
    return (e = Ne(6, e, null, t)), (e.lanes = n), e;
}
function yo(e, t, n) {
    return (
        (t = Ne(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    );
}
function Wp(e, t, n, r, l) {
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
        (this.eventTimes = Yl(0)),
        (this.expirationTimes = Yl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = Yl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = l),
        (this.mutableSourceEagerHydrationData = null);
}
function au(e, t, n, r, l, o, i, u, s) {
    return (
        (e = new Wp(e, t, n, u, s)),
        t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
        (o = Ne(3, null, null, t)),
        (e.current = o),
        (o.stateNode = e),
        (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Ki(o),
        e
    );
}
function Qp(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: $t,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    };
}
function qc(e) {
    if (!e) return St;
    e = e._reactInternals;
    e: {
        if (It(e) !== e || e.tag !== 1) throw Error(S(170));
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
        if (ye(n)) return Ga(e, n, t);
    }
    return t;
}
function Zc(e, t, n, r, l, o, i, u, s) {
    return (
        (e = au(n, r, !0, e, l, o, i, u, s)),
        (e.context = qc(null)),
        (n = e.current),
        (r = ce()),
        (l = vt(n)),
        (o = Ge(r, l)),
        (o.callback = t ?? null),
        mt(n, o, l),
        (e.current.lanes = l),
        sr(e, l, r),
        ve(e, r),
        e
    );
}
function Ll(e, t, n, r) {
    var l = t.current,
        o = ce(),
        i = vt(l);
    return (
        (n = qc(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Ge(o, i)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = mt(l, t, i)),
        e !== null && (Me(e, l, i, o), Ur(e, l, i)),
        i
    );
}
function vl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Ps(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function cu(e, t) {
    Ps(e, t), (e = e.alternate) && Ps(e, t);
}
function Kp() {
    return null;
}
var bc =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e);
          };
function fu(e) {
    this._internalRoot = e;
}
zl.prototype.render = fu.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(S(409));
    Ll(e, t, null, null);
};
zl.prototype.unmount = fu.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Mt(function () {
            Ll(null, e, null, null);
        }),
            (t[be] = null);
    }
};
function zl(e) {
    this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Ra();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++);
        ut.splice(n, 0, e), n === 0 && La(e);
    }
};
function du(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function jl(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    );
}
function Ts() {}
function Jp(e, t, n, r, l) {
    if (l) {
        if (typeof r == 'function') {
            var o = r;
            r = function () {
                var a = vl(i);
                o.call(a);
            };
        }
        var i = Zc(t, r, e, 0, null, !1, !1, '', Ts);
        return (
            (e._reactRootContainer = i),
            (e[be] = i.current),
            qn(e.nodeType === 8 ? e.parentNode : e),
            Mt(),
            i
        );
    }
    for (; (l = e.lastChild); ) e.removeChild(l);
    if (typeof r == 'function') {
        var u = r;
        r = function () {
            var a = vl(s);
            u.call(a);
        };
    }
    var s = au(e, 0, !1, null, null, !1, !1, '', Ts);
    return (
        (e._reactRootContainer = s),
        (e[be] = s.current),
        qn(e.nodeType === 8 ? e.parentNode : e),
        Mt(function () {
            Ll(t, s, n, r);
        }),
        s
    );
}
function Fl(e, t, n, r, l) {
    var o = n._reactRootContainer;
    if (o) {
        var i = o;
        if (typeof l == 'function') {
            var u = l;
            l = function () {
                var s = vl(i);
                u.call(s);
            };
        }
        Ll(t, i, e, l);
    } else i = Jp(n, t, e, l, r);
    return vl(i);
}
Pa = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = zn(t.pendingLanes);
                n !== 0 &&
                    (Li(t, n | 1),
                    ve(t, J()),
                    !(A & 6) && ((dn = J() + 500), xt()));
            }
            break;
        case 13:
            Mt(function () {
                var r = et(e, 1);
                if (r !== null) {
                    var l = ce();
                    Me(r, e, 1, l);
                }
            }),
                cu(e, 1);
    }
};
zi = function (e) {
    if (e.tag === 13) {
        var t = et(e, 134217728);
        if (t !== null) {
            var n = ce();
            Me(t, e, 134217728, n);
        }
        cu(e, 134217728);
    }
};
Ta = function (e) {
    if (e.tag === 13) {
        var t = vt(e),
            n = et(e, t);
        if (n !== null) {
            var r = ce();
            Me(n, e, t, r);
        }
        cu(e, t);
    }
};
Ra = function () {
    return D;
};
Oa = function (e, t) {
    var n = D;
    try {
        return (D = e), t();
    } finally {
        D = n;
    }
};
Ao = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((To(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
                        var l = Cl(r);
                        if (!l) throw Error(S(90));
                        ua(r), To(r, l);
                    }
                }
            }
            break;
        case 'textarea':
            aa(e, n);
            break;
        case 'select':
            (t = n.value), t != null && bt(e, !!n.multiple, t, !1);
    }
};
ya = ou;
va = Mt;
var Xp = { usingClientEntryPoint: !1, Events: [cr, Kt, Cl, ha, ma, ou] },
    Pn = {
        findFiberByHostInstance: Tt,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
    },
    Yp = {
        bundleType: Pn.bundleType,
        version: Pn.version,
        rendererPackageName: Pn.rendererPackageName,
        rendererConfig: Pn.rendererConfig,
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
            return (e = Sa(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: Pn.findFiberByHostInstance || Kp,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zr.isDisabled && zr.supportsFiber)
        try {
            (Sl = zr.inject(Yp)), (Ve = zr);
        } catch {}
}
Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xp;
Ee.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!du(t)) throw Error(S(200));
    return Qp(e, t, null, n);
};
Ee.createRoot = function (e, t) {
    if (!du(e)) throw Error(S(299));
    var n = !1,
        r = '',
        l = bc;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
        (t = au(e, 1, !1, null, null, n, !1, r, l)),
        (e[be] = t.current),
        qn(e.nodeType === 8 ? e.parentNode : e),
        new fu(t)
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
    return (e = Sa(t)), (e = e === null ? null : e.stateNode), e;
};
Ee.flushSync = function (e) {
    return Mt(e);
};
Ee.hydrate = function (e, t, n) {
    if (!jl(t)) throw Error(S(200));
    return Fl(null, e, t, !0, n);
};
Ee.hydrateRoot = function (e, t, n) {
    if (!du(e)) throw Error(S(405));
    var r = (n != null && n.hydratedSources) || null,
        l = !1,
        o = '',
        i = bc;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (l = !0),
            n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
        (t = Zc(t, null, e, 1, n ?? null, l, !1, o, i)),
        (e[be] = t.current),
        qn(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (l = n._getVersion),
                (l = l(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, l])
                    : t.mutableSourceEagerHydrationData.push(n, l);
    return new zl(t);
};
Ee.render = function (e, t, n) {
    if (!jl(t)) throw Error(S(200));
    return Fl(null, e, t, !1, n);
};
Ee.unmountComponentAtNode = function (e) {
    if (!jl(e)) throw Error(S(40));
    return e._reactRootContainer
        ? (Mt(function () {
              Fl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[be] = null);
              });
          }),
          !0)
        : !1;
};
Ee.unstable_batchedUpdates = ou;
Ee.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!jl(n)) throw Error(S(200));
    if (e == null || e._reactInternals === void 0) throw Error(S(38));
    return Fl(e, t, n, !1, r);
};
Ee.version = '18.2.0-next-9e3b772b8-20220608';
function ef() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
        } catch (e) {
            console.error(e);
        }
}
ef(), (Zs.exports = Ee);
var Gp = Zs.exports,
    Rs = Gp;
(ko.createRoot = Rs.createRoot), (ko.hydrateRoot = Rs.hydrateRoot);
const qp = ({ blog: e }) => {
        const [t, n] = b.useState(!1),
            r = () => {
                n(!t);
            },
            l = {
                paddingTop: 10,
                paddingLeft: 2,
                border: 'solid',
                borderWidth: 1,
                marginBottom: 5,
            },
            o = { display: t ? '' : 'none' };
        return R.jsxs('div', {
            children: [
                R.jsxs('div', {
                    style: l,
                    children: [
                        R.jsxs('div', { children: [e.title, ' ', e.author] }),
                        R.jsx('button', {
                            onClick: r,
                            children: t ? 'hide' : 'view',
                        }),
                    ],
                }),
                R.jsxs('div', {
                    style: o,
                    children: [
                        R.jsx('p', { children: e.url }),
                        R.jsxs('p', {
                            children: [
                                e.likes,
                                ' likes ',
                                R.jsx('button', { children: 'like' }),
                            ],
                        }),
                        R.jsx('p', { children: e.user.name }),
                    ],
                }),
            ],
        });
    },
    Zp = ({ createBlog: e }) => {
        const [t, n] = b.useState(''),
            [r, l] = b.useState(''),
            [o, i] = b.useState(''),
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
    Os = ({ message: e, isError: t }) => {
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
    tf = b.forwardRef((e, t) => {
        const [n, r] = b.useState(!1),
            l = { display: n ? 'none' : '' },
            o = { display: n ? '' : 'none' },
            i = () => {
                r(!n);
            };
        return (
            b.useImperativeHandle(t, () => ({ toggleVisibility: i })),
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
tf.displayName = 'Togglable';
function nf(e, t) {
    return function () {
        return e.apply(t, arguments);
    };
}
const { toString: bp } = Object.prototype,
    { getPrototypeOf: pu } = Object,
    Al = ((e) => (t) => {
        const n = bp.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
    })(Object.create(null)),
    Qe = (e) => ((e = e.toLowerCase()), (t) => Al(t) === e),
    Dl = (e) => (t) => typeof t === e,
    { isArray: vn } = Array,
    ir = Dl('undefined');
function eh(e) {
    return (
        e !== null &&
        !ir(e) &&
        e.constructor !== null &&
        !ir(e.constructor) &&
        Te(e.constructor.isBuffer) &&
        e.constructor.isBuffer(e)
    );
}
const rf = Qe('ArrayBuffer');
function th(e) {
    let t;
    return (
        typeof ArrayBuffer < 'u' && ArrayBuffer.isView
            ? (t = ArrayBuffer.isView(e))
            : (t = e && e.buffer && rf(e.buffer)),
        t
    );
}
const nh = Dl('string'),
    Te = Dl('function'),
    lf = Dl('number'),
    Ml = (e) => e !== null && typeof e == 'object',
    rh = (e) => e === !0 || e === !1,
    Qr = (e) => {
        if (Al(e) !== 'object') return !1;
        const t = pu(e);
        return (
            (t === null ||
                t === Object.prototype ||
                Object.getPrototypeOf(t) === null) &&
            !(Symbol.toStringTag in e) &&
            !(Symbol.iterator in e)
        );
    },
    lh = Qe('Date'),
    oh = Qe('File'),
    ih = Qe('Blob'),
    uh = Qe('FileList'),
    sh = (e) => Ml(e) && Te(e.pipe),
    ah = (e) => {
        let t;
        return (
            e &&
            ((typeof FormData == 'function' && e instanceof FormData) ||
                (Te(e.append) &&
                    ((t = Al(e)) === 'formdata' ||
                        (t === 'object' &&
                            Te(e.toString) &&
                            e.toString() === '[object FormData]'))))
        );
    },
    ch = Qe('URLSearchParams'),
    fh = (e) =>
        e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
function dr(e, t, { allOwnKeys: n = !1 } = {}) {
    if (e === null || typeof e > 'u') return;
    let r, l;
    if ((typeof e != 'object' && (e = [e]), vn(e)))
        for (r = 0, l = e.length; r < l; r++) t.call(null, e[r], r, e);
    else {
        const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            i = o.length;
        let u;
        for (r = 0; r < i; r++) (u = o[r]), t.call(null, e[u], u, e);
    }
}
function of(e, t) {
    t = t.toLowerCase();
    const n = Object.keys(e);
    let r = n.length,
        l;
    for (; r-- > 0; ) if (((l = n[r]), t === l.toLowerCase())) return l;
    return null;
}
const uf = (() =>
        typeof globalThis < 'u'
            ? globalThis
            : typeof self < 'u'
              ? self
              : typeof window < 'u'
                ? window
                : global)(),
    sf = (e) => !ir(e) && e !== uf;
function hi() {
    const { caseless: e } = (sf(this) && this) || {},
        t = {},
        n = (r, l) => {
            const o = (e && of(t, l)) || l;
            Qr(t[o]) && Qr(r)
                ? (t[o] = hi(t[o], r))
                : Qr(r)
                  ? (t[o] = hi({}, r))
                  : vn(r)
                    ? (t[o] = r.slice())
                    : (t[o] = r);
        };
    for (let r = 0, l = arguments.length; r < l; r++)
        arguments[r] && dr(arguments[r], n);
    return t;
}
const dh = (e, t, n, { allOwnKeys: r } = {}) => (
        dr(
            t,
            (l, o) => {
                n && Te(l) ? (e[o] = nf(l, n)) : (e[o] = l);
            },
            { allOwnKeys: r }
        ),
        e
    ),
    ph = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    hh = (e, t, n, r) => {
        (e.prototype = Object.create(t.prototype, r)),
            (e.prototype.constructor = e),
            Object.defineProperty(e, 'super', { value: t.prototype }),
            n && Object.assign(e.prototype, n);
    },
    mh = (e, t, n, r) => {
        let l, o, i;
        const u = {};
        if (((t = t || {}), e == null)) return t;
        do {
            for (l = Object.getOwnPropertyNames(e), o = l.length; o-- > 0; )
                (i = l[o]),
                    (!r || r(i, e, t)) && !u[i] && ((t[i] = e[i]), (u[i] = !0));
            e = n !== !1 && pu(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
    },
    yh = (e, t, n) => {
        (e = String(e)),
            (n === void 0 || n > e.length) && (n = e.length),
            (n -= t.length);
        const r = e.indexOf(t, n);
        return r !== -1 && r === n;
    },
    vh = (e) => {
        if (!e) return null;
        if (vn(e)) return e;
        let t = e.length;
        if (!lf(t)) return null;
        const n = new Array(t);
        for (; t-- > 0; ) n[t] = e[t];
        return n;
    },
    gh = (
        (e) => (t) =>
            e && t instanceof e
    )(typeof Uint8Array < 'u' && pu(Uint8Array)),
    wh = (e, t) => {
        const r = (e && e[Symbol.iterator]).call(e);
        let l;
        for (; (l = r.next()) && !l.done; ) {
            const o = l.value;
            t.call(e, o[0], o[1]);
        }
    },
    Sh = (e, t) => {
        let n;
        const r = [];
        for (; (n = e.exec(t)) !== null; ) r.push(n);
        return r;
    },
    kh = Qe('HTMLFormElement'),
    Eh = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, l) {
            return r.toUpperCase() + l;
        }),
    Ls = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
            e.call(t, n)
    )(Object.prototype),
    xh = Qe('RegExp'),
    af = (e, t) => {
        const n = Object.getOwnPropertyDescriptors(e),
            r = {};
        dr(n, (l, o) => {
            let i;
            (i = t(l, o, e)) !== !1 && (r[o] = i || l);
        }),
            Object.defineProperties(e, r);
    },
    Ch = (e) => {
        af(e, (t, n) => {
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
    _h = (e, t) => {
        const n = {},
            r = (l) => {
                l.forEach((o) => {
                    n[o] = !0;
                });
            };
        return vn(e) ? r(e) : r(String(e).split(t)), n;
    },
    Nh = () => {},
    Ph = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
    vo = 'abcdefghijklmnopqrstuvwxyz',
    zs = '0123456789',
    cf = { DIGIT: zs, ALPHA: vo, ALPHA_DIGIT: vo + vo.toUpperCase() + zs },
    Th = (e = 16, t = cf.ALPHA_DIGIT) => {
        let n = '';
        const { length: r } = t;
        for (; e--; ) n += t[(Math.random() * r) | 0];
        return n;
    };
function Rh(e) {
    return !!(
        e &&
        Te(e.append) &&
        e[Symbol.toStringTag] === 'FormData' &&
        e[Symbol.iterator]
    );
}
const Oh = (e) => {
        const t = new Array(10),
            n = (r, l) => {
                if (Ml(r)) {
                    if (t.indexOf(r) >= 0) return;
                    if (!('toJSON' in r)) {
                        t[l] = r;
                        const o = vn(r) ? [] : {};
                        return (
                            dr(r, (i, u) => {
                                const s = n(i, l + 1);
                                !ir(s) && (o[u] = s);
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
    Lh = Qe('AsyncFunction'),
    zh = (e) => e && (Ml(e) || Te(e)) && Te(e.then) && Te(e.catch),
    g = {
        isArray: vn,
        isArrayBuffer: rf,
        isBuffer: eh,
        isFormData: ah,
        isArrayBufferView: th,
        isString: nh,
        isNumber: lf,
        isBoolean: rh,
        isObject: Ml,
        isPlainObject: Qr,
        isUndefined: ir,
        isDate: lh,
        isFile: oh,
        isBlob: ih,
        isRegExp: xh,
        isFunction: Te,
        isStream: sh,
        isURLSearchParams: ch,
        isTypedArray: gh,
        isFileList: uh,
        forEach: dr,
        merge: hi,
        extend: dh,
        trim: fh,
        stripBOM: ph,
        inherits: hh,
        toFlatObject: mh,
        kindOf: Al,
        kindOfTest: Qe,
        endsWith: yh,
        toArray: vh,
        forEachEntry: wh,
        matchAll: Sh,
        isHTMLForm: kh,
        hasOwnProperty: Ls,
        hasOwnProp: Ls,
        reduceDescriptors: af,
        freezeMethods: Ch,
        toObjectSet: _h,
        toCamelCase: Eh,
        noop: Nh,
        toFiniteNumber: Ph,
        findKey: of,
        global: uf,
        isContextDefined: sf,
        ALPHABET: cf,
        generateString: Th,
        isSpecCompliantForm: Rh,
        toJSONObject: Oh,
        isAsyncFn: Lh,
        isThenable: zh,
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
const ff = F.prototype,
    df = {};
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
    df[e] = { value: e };
});
Object.defineProperties(F, df);
Object.defineProperty(ff, 'isAxiosError', { value: !0 });
F.from = (e, t, n, r, l, o) => {
    const i = Object.create(ff);
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
const jh = null;
function mi(e) {
    return g.isPlainObject(e) || g.isArray(e);
}
function pf(e) {
    return g.endsWith(e, '[]') ? e.slice(0, -2) : e;
}
function js(e, t, n) {
    return e
        ? e
              .concat(t)
              .map(function (l, o) {
                  return (l = pf(l)), !n && o ? '[' + l + ']' : l;
              })
              .join(n ? '.' : '')
        : t;
}
function Fh(e) {
    return g.isArray(e) && !e.some(mi);
}
const Ah = g.toFlatObject(g, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
});
function Ul(e, t, n) {
    if (!g.isObject(e)) throw new TypeError('target must be an object');
    (t = t || new FormData()),
        (n = g.toFlatObject(
            n,
            { metaTokens: !0, dots: !1, indexes: !1 },
            !1,
            function (v, _) {
                return !g.isUndefined(_[v]);
            }
        ));
    const r = n.metaTokens,
        l = n.visitor || h,
        o = n.dots,
        i = n.indexes,
        s = (n.Blob || (typeof Blob < 'u' && Blob)) && g.isSpecCompliantForm(t);
    if (!g.isFunction(l)) throw new TypeError('visitor must be a function');
    function a(y) {
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
    function h(y, v, _) {
        let f = y;
        if (y && !_ && typeof y == 'object') {
            if (g.endsWith(v, '{}'))
                (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
            else if (
                (g.isArray(y) && Fh(y)) ||
                ((g.isFileList(y) || g.endsWith(v, '[]')) && (f = g.toArray(y)))
            )
                return (
                    (v = pf(v)),
                    f.forEach(function (p, w) {
                        !(g.isUndefined(p) || p === null) &&
                            t.append(
                                i === !0
                                    ? js([v], w, o)
                                    : i === null
                                      ? v
                                      : v + '[]',
                                a(p)
                            );
                    }),
                    !1
                );
        }
        return mi(y) ? !0 : (t.append(js(_, v, o), a(y)), !1);
    }
    const d = [],
        m = Object.assign(Ah, {
            defaultVisitor: h,
            convertValue: a,
            isVisitable: mi,
        });
    function k(y, v) {
        if (!g.isUndefined(y)) {
            if (d.indexOf(y) !== -1)
                throw Error('Circular reference detected in ' + v.join('.'));
            d.push(y),
                g.forEach(y, function (f, c) {
                    (!(g.isUndefined(f) || f === null) &&
                        l.call(t, f, g.isString(c) ? c.trim() : c, v, m)) ===
                        !0 && k(f, v ? v.concat(c) : [c]);
                }),
                d.pop();
        }
    }
    if (!g.isObject(e)) throw new TypeError('data must be an object');
    return k(e), t;
}
function Fs(e) {
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
function hu(e, t) {
    (this._pairs = []), e && Ul(e, this, t);
}
const hf = hu.prototype;
hf.append = function (t, n) {
    this._pairs.push([t, n]);
};
hf.toString = function (t) {
    const n = t
        ? function (r) {
              return t.call(this, r, Fs);
          }
        : Fs;
    return this._pairs
        .map(function (l) {
            return n(l[0]) + '=' + n(l[1]);
        }, '')
        .join('&');
};
function Dh(e) {
    return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']');
}
function mf(e, t, n) {
    if (!t) return e;
    const r = (n && n.encode) || Dh,
        l = n && n.serialize;
    let o;
    if (
        (l
            ? (o = l(t, n))
            : (o = g.isURLSearchParams(t)
                  ? t.toString()
                  : new hu(t, n).toString(r)),
        o)
    ) {
        const i = e.indexOf('#');
        i !== -1 && (e = e.slice(0, i)),
            (e += (e.indexOf('?') === -1 ? '?' : '&') + o);
    }
    return e;
}
class Mh {
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
const As = Mh,
    yf = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1,
    },
    Uh = typeof URLSearchParams < 'u' ? URLSearchParams : hu,
    Ih = typeof FormData < 'u' ? FormData : null,
    Bh = typeof Blob < 'u' ? Blob : null,
    $h = {
        isBrowser: !0,
        classes: { URLSearchParams: Uh, FormData: Ih, Blob: Bh },
        protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
    },
    vf = typeof window < 'u' && typeof document < 'u',
    Hh = ((e) => vf && ['ReactNative', 'NativeScript', 'NS'].indexOf(e) < 0)(
        typeof navigator < 'u' && navigator.product
    ),
    Vh = (() =>
        typeof WorkerGlobalScope < 'u' &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == 'function')(),
    Wh = Object.freeze(
        Object.defineProperty(
            {
                __proto__: null,
                hasBrowserEnv: vf,
                hasStandardBrowserEnv: Hh,
                hasStandardBrowserWebWorkerEnv: Vh,
            },
            Symbol.toStringTag,
            { value: 'Module' }
        )
    ),
    He = { ...Wh, ...$h };
function Qh(e, t) {
    return Ul(
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
function Kh(e) {
    return g
        .matchAll(/\w+|\[(\w*)]/g, e)
        .map((t) => (t[0] === '[]' ? '' : t[1] || t[0]));
}
function Jh(e) {
    const t = {},
        n = Object.keys(e);
    let r;
    const l = n.length;
    let o;
    for (r = 0; r < l; r++) (o = n[r]), (t[o] = e[o]);
    return t;
}
function gf(e) {
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
                  t(n, r, l[i], o) && g.isArray(l[i]) && (l[i] = Jh(l[i])),
                  !u)
        );
    }
    if (g.isFormData(e) && g.isFunction(e.entries)) {
        const n = {};
        return (
            g.forEachEntry(e, (r, l) => {
                t(Kh(r), l, n, 0);
            }),
            n
        );
    }
    return null;
}
function Xh(e, t, n) {
    if (g.isString(e))
        try {
            return (t || JSON.parse)(e), g.trim(e);
        } catch (r) {
            if (r.name !== 'SyntaxError') throw r;
        }
    return (n || JSON.stringify)(e);
}
const mu = {
    transitional: yf,
    adapter: ['xhr', 'http'],
    transformRequest: [
        function (t, n) {
            const r = n.getContentType() || '',
                l = r.indexOf('application/json') > -1,
                o = g.isObject(t);
            if (
                (o && g.isHTMLForm(t) && (t = new FormData(t)), g.isFormData(t))
            )
                return l ? JSON.stringify(gf(t)) : t;
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
                    return Qh(t, this.formSerializer).toString();
                if (
                    (u = g.isFileList(t)) ||
                    r.indexOf('multipart/form-data') > -1
                ) {
                    const s = this.env && this.env.FormData;
                    return Ul(
                        u ? { 'files[]': t } : t,
                        s && new s(),
                        this.formSerializer
                    );
                }
            }
            return o || l
                ? (n.setContentType('application/json', !1), Xh(t))
                : t;
        },
    ],
    transformResponse: [
        function (t) {
            const n = this.transitional || mu.transitional,
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
    mu.headers[e] = {};
});
const yu = mu,
    Yh = g.toObjectSet([
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
    Gh = (e) => {
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
                            !(!n || (t[n] && Yh[n])) &&
                                (n === 'set-cookie'
                                    ? t[n]
                                        ? t[n].push(r)
                                        : (t[n] = [r])
                                    : (t[n] = t[n] ? t[n] + ', ' + r : r));
                    }),
            t
        );
    },
    Ds = Symbol('internals');
function Tn(e) {
    return e && String(e).trim().toLowerCase();
}
function Kr(e) {
    return e === !1 || e == null ? e : g.isArray(e) ? e.map(Kr) : String(e);
}
function qh(e) {
    const t = Object.create(null),
        n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let r;
    for (; (r = n.exec(e)); ) t[r[1]] = r[2];
    return t;
}
const Zh = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function go(e, t, n, r, l) {
    if (g.isFunction(r)) return r.call(this, t, n);
    if ((l && (t = n), !!g.isString(t))) {
        if (g.isString(r)) return t.indexOf(r) !== -1;
        if (g.isRegExp(r)) return r.test(t);
    }
}
function bh(e) {
    return e
        .trim()
        .toLowerCase()
        .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function em(e, t) {
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
class Il {
    constructor(t) {
        t && this.set(t);
    }
    set(t, n, r) {
        const l = this;
        function o(u, s, a) {
            const h = Tn(s);
            if (!h) throw new Error('header name must be a non-empty string');
            const d = g.findKey(l, h);
            (!d ||
                l[d] === void 0 ||
                a === !0 ||
                (a === void 0 && l[d] !== !1)) &&
                (l[d || s] = Kr(u));
        }
        const i = (u, s) => g.forEach(u, (a, h) => o(a, h, s));
        return (
            g.isPlainObject(t) || t instanceof this.constructor
                ? i(t, n)
                : g.isString(t) && (t = t.trim()) && !Zh(t)
                  ? i(Gh(t), n)
                  : t != null && o(n, t, r),
            this
        );
    }
    get(t, n) {
        if (((t = Tn(t)), t)) {
            const r = g.findKey(this, t);
            if (r) {
                const l = this[r];
                if (!n) return l;
                if (n === !0) return qh(l);
                if (g.isFunction(n)) return n.call(this, l, r);
                if (g.isRegExp(n)) return n.exec(l);
                throw new TypeError('parser must be boolean|regexp|function');
            }
        }
    }
    has(t, n) {
        if (((t = Tn(t)), t)) {
            const r = g.findKey(this, t);
            return !!(
                r &&
                this[r] !== void 0 &&
                (!n || go(this, this[r], r, n))
            );
        }
        return !1;
    }
    delete(t, n) {
        const r = this;
        let l = !1;
        function o(i) {
            if (((i = Tn(i)), i)) {
                const u = g.findKey(r, i);
                u && (!n || go(r, r[u], u, n)) && (delete r[u], (l = !0));
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
            (!t || go(this, this[o], o, t, !0)) && (delete this[o], (l = !0));
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
                    (n[i] = Kr(l)), delete n[o];
                    return;
                }
                const u = t ? bh(o) : String(o).trim();
                u !== o && delete n[o], (n[u] = Kr(l)), (r[u] = !0);
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
        const r = (this[Ds] = this[Ds] = { accessors: {} }).accessors,
            l = this.prototype;
        function o(i) {
            const u = Tn(i);
            r[u] || (em(l, i), (r[u] = !0));
        }
        return g.isArray(t) ? t.forEach(o) : o(t), this;
    }
}
Il.accessor([
    'Content-Type',
    'Content-Length',
    'Accept',
    'Accept-Encoding',
    'User-Agent',
    'Authorization',
]);
g.reduceDescriptors(Il.prototype, ({ value: e }, t) => {
    let n = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(r) {
            this[n] = r;
        },
    };
});
g.freezeMethods(Il);
const qe = Il;
function wo(e, t) {
    const n = this || yu,
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
function wf(e) {
    return !!(e && e.__CANCEL__);
}
function pr(e, t, n) {
    F.call(this, e ?? 'canceled', F.ERR_CANCELED, t, n),
        (this.name = 'CanceledError');
}
g.inherits(pr, F, { __CANCEL__: !0 });
function tm(e, t, n) {
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
const nm = He.hasStandardBrowserEnv
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
function rm(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function lm(e, t) {
    return t ? e.replace(/\/?\/$/, '') + '/' + t.replace(/^\/+/, '') : e;
}
function Sf(e, t) {
    return e && !rm(t) ? lm(e, t) : t;
}
const om = He.hasStandardBrowserEnv
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
function im(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return (t && t[1]) || '';
}
function um(e, t) {
    e = e || 10;
    const n = new Array(e),
        r = new Array(e);
    let l = 0,
        o = 0,
        i;
    return (
        (t = t !== void 0 ? t : 1e3),
        function (s) {
            const a = Date.now(),
                h = r[o];
            i || (i = a), (n[l] = s), (r[l] = a);
            let d = o,
                m = 0;
            for (; d !== l; ) (m += n[d++]), (d = d % e);
            if (((l = (l + 1) % e), l === o && (o = (o + 1) % e), a - i < t))
                return;
            const k = h && a - h;
            return k ? Math.round((m * 1e3) / k) : void 0;
        }
    );
}
function Ms(e, t) {
    let n = 0;
    const r = um(50, 250);
    return (l) => {
        const o = l.loaded,
            i = l.lengthComputable ? l.total : void 0,
            u = o - n,
            s = r(u),
            a = o <= i;
        n = o;
        const h = {
            loaded: o,
            total: i,
            progress: i ? o / i : void 0,
            bytes: u,
            rate: s || void 0,
            estimated: s && i && a ? (i - o) / s : void 0,
            event: l,
        };
        (h[t ? 'download' : 'upload'] = !0), e(h);
    };
}
const sm = typeof XMLHttpRequest < 'u',
    am =
        sm &&
        function (e) {
            return new Promise(function (n, r) {
                let l = e.data;
                const o = qe.from(e.headers).normalize();
                let { responseType: i, withXSRFToken: u } = e,
                    s;
                function a() {
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
                        const [v, ..._] = h
                            ? h
                                  .split(';')
                                  .map((f) => f.trim())
                                  .filter(Boolean)
                            : [];
                        o.setContentType(
                            [v || 'multipart/form-data', ..._].join('; ')
                        );
                    }
                }
                let d = new XMLHttpRequest();
                if (e.auth) {
                    const v = e.auth.username || '',
                        _ = e.auth.password
                            ? unescape(encodeURIComponent(e.auth.password))
                            : '';
                    o.set('Authorization', 'Basic ' + btoa(v + ':' + _));
                }
                const m = Sf(e.baseURL, e.url);
                d.open(
                    e.method.toUpperCase(),
                    mf(m, e.params, e.paramsSerializer),
                    !0
                ),
                    (d.timeout = e.timeout);
                function k() {
                    if (!d) return;
                    const v = qe.from(
                            'getAllResponseHeaders' in d &&
                                d.getAllResponseHeaders()
                        ),
                        f = {
                            data:
                                !i || i === 'text' || i === 'json'
                                    ? d.responseText
                                    : d.response,
                            status: d.status,
                            statusText: d.statusText,
                            headers: v,
                            config: e,
                            request: d,
                        };
                    tm(
                        function (p) {
                            n(p), a();
                        },
                        function (p) {
                            r(p), a();
                        },
                        f
                    ),
                        (d = null);
                }
                if (
                    ('onloadend' in d
                        ? (d.onloadend = k)
                        : (d.onreadystatechange = function () {
                              !d ||
                                  d.readyState !== 4 ||
                                  (d.status === 0 &&
                                      !(
                                          d.responseURL &&
                                          d.responseURL.indexOf('file:') === 0
                                      )) ||
                                  setTimeout(k);
                          }),
                    (d.onabort = function () {
                        d &&
                            (r(new F('Request aborted', F.ECONNABORTED, e, d)),
                            (d = null));
                    }),
                    (d.onerror = function () {
                        r(new F('Network Error', F.ERR_NETWORK, e, d)),
                            (d = null);
                    }),
                    (d.ontimeout = function () {
                        let _ = e.timeout
                            ? 'timeout of ' + e.timeout + 'ms exceeded'
                            : 'timeout exceeded';
                        const f = e.transitional || yf;
                        e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
                            r(
                                new F(
                                    _,
                                    f.clarifyTimeoutError
                                        ? F.ETIMEDOUT
                                        : F.ECONNABORTED,
                                    e,
                                    d
                                )
                            ),
                            (d = null);
                    }),
                    He.hasStandardBrowserEnv &&
                        (u && g.isFunction(u) && (u = u(e)),
                        u || (u !== !1 && om(m))))
                ) {
                    const v =
                        e.xsrfHeaderName &&
                        e.xsrfCookieName &&
                        nm.read(e.xsrfCookieName);
                    v && o.set(e.xsrfHeaderName, v);
                }
                l === void 0 && o.setContentType(null),
                    'setRequestHeader' in d &&
                        g.forEach(o.toJSON(), function (_, f) {
                            d.setRequestHeader(f, _);
                        }),
                    g.isUndefined(e.withCredentials) ||
                        (d.withCredentials = !!e.withCredentials),
                    i && i !== 'json' && (d.responseType = e.responseType),
                    typeof e.onDownloadProgress == 'function' &&
                        d.addEventListener(
                            'progress',
                            Ms(e.onDownloadProgress, !0)
                        ),
                    typeof e.onUploadProgress == 'function' &&
                        d.upload &&
                        d.upload.addEventListener(
                            'progress',
                            Ms(e.onUploadProgress)
                        ),
                    (e.cancelToken || e.signal) &&
                        ((s = (v) => {
                            d &&
                                (r(!v || v.type ? new pr(null, e, d) : v),
                                d.abort(),
                                (d = null));
                        }),
                        e.cancelToken && e.cancelToken.subscribe(s),
                        e.signal &&
                            (e.signal.aborted
                                ? s()
                                : e.signal.addEventListener('abort', s)));
                const y = im(m);
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
                d.send(l || null);
            });
        },
    yi = { http: jh, xhr: am };
g.forEach(yi, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, 'name', { value: t });
        } catch {}
        Object.defineProperty(e, 'adapterName', { value: t });
    }
});
const Us = (e) => `- ${e}`,
    cm = (e) => g.isFunction(e) || e === null || e === !1,
    kf = {
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
                    !cm(n) &&
                        ((r = yi[(i = String(n)).toLowerCase()]), r === void 0))
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
                          o.map(Us).join(`
`)
                        : ' ' + Us(o[0])
                    : 'as no adapter specified';
                throw new F(
                    'There is no suitable adapter to dispatch the request ' + i,
                    'ERR_NOT_SUPPORT'
                );
            }
            return r;
        },
        adapters: yi,
    };
function So(e) {
    if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
    )
        throw new pr(null, e);
}
function Is(e) {
    return (
        So(e),
        (e.headers = qe.from(e.headers)),
        (e.data = wo.call(e, e.transformRequest)),
        ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
            e.headers.setContentType('application/x-www-form-urlencoded', !1),
        kf
            .getAdapter(e.adapter || yu.adapter)(e)
            .then(
                function (r) {
                    return (
                        So(e),
                        (r.data = wo.call(e, e.transformResponse, r)),
                        (r.headers = qe.from(r.headers)),
                        r
                    );
                },
                function (r) {
                    return (
                        wf(r) ||
                            (So(e),
                            r &&
                                r.response &&
                                ((r.response.data = wo.call(
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
const Bs = (e) => (e instanceof qe ? e.toJSON() : e);
function pn(e, t) {
    t = t || {};
    const n = {};
    function r(a, h, d) {
        return g.isPlainObject(a) && g.isPlainObject(h)
            ? g.merge.call({ caseless: d }, a, h)
            : g.isPlainObject(h)
              ? g.merge({}, h)
              : g.isArray(h)
                ? h.slice()
                : h;
    }
    function l(a, h, d) {
        if (g.isUndefined(h)) {
            if (!g.isUndefined(a)) return r(void 0, a, d);
        } else return r(a, h, d);
    }
    function o(a, h) {
        if (!g.isUndefined(h)) return r(void 0, h);
    }
    function i(a, h) {
        if (g.isUndefined(h)) {
            if (!g.isUndefined(a)) return r(void 0, a);
        } else return r(void 0, h);
    }
    function u(a, h, d) {
        if (d in t) return r(a, h);
        if (d in e) return r(void 0, a);
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
        headers: (a, h) => l(Bs(a), Bs(h), !0),
    };
    return (
        g.forEach(Object.keys(Object.assign({}, e, t)), function (h) {
            const d = s[h] || l,
                m = d(e[h], t[h], h);
            (g.isUndefined(m) && d !== u) || (n[h] = m);
        }),
        n
    );
}
const Ef = '1.6.7',
    vu = {};
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (e, t) => {
        vu[e] = function (r) {
            return typeof r === e || 'a' + (t < 1 ? 'n ' : ' ') + e;
        };
    }
);
const $s = {};
vu.transitional = function (t, n, r) {
    function l(o, i) {
        return (
            '[Axios v' +
            Ef +
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
                !$s[i] &&
                (($s[i] = !0),
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
function fm(e, t, n) {
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
const vi = { assertOptions: fm, validators: vu },
    lt = vi.validators;
class gl {
    constructor(t) {
        (this.defaults = t),
            (this.interceptors = { request: new As(), response: new As() });
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
            (n = pn(this.defaults, n));
        const { transitional: r, paramsSerializer: l, headers: o } = n;
        r !== void 0 &&
            vi.assertOptions(
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
                    : vi.assertOptions(
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
        const a = [];
        this.interceptors.response.forEach(function (v) {
            a.push(v.fulfilled, v.rejected);
        });
        let h,
            d = 0,
            m;
        if (!s) {
            const y = [Is.bind(this), void 0];
            for (
                y.unshift.apply(y, u),
                    y.push.apply(y, a),
                    m = y.length,
                    h = Promise.resolve(n);
                d < m;

            )
                h = h.then(y[d++], y[d++]);
            return h;
        }
        m = u.length;
        let k = n;
        for (d = 0; d < m; ) {
            const y = u[d++],
                v = u[d++];
            try {
                k = y(k);
            } catch (_) {
                v.call(this, _);
                break;
            }
        }
        try {
            h = Is.call(this, k);
        } catch (y) {
            return Promise.reject(y);
        }
        for (d = 0, m = a.length; d < m; ) h = h.then(a[d++], a[d++]);
        return h;
    }
    getUri(t) {
        t = pn(this.defaults, t);
        const n = Sf(t.baseURL, t.url);
        return mf(n, t.params, t.paramsSerializer);
    }
}
g.forEach(['delete', 'get', 'head', 'options'], function (t) {
    gl.prototype[t] = function (n, r) {
        return this.request(
            pn(r || {}, { method: t, url: n, data: (r || {}).data })
        );
    };
});
g.forEach(['post', 'put', 'patch'], function (t) {
    function n(r) {
        return function (o, i, u) {
            return this.request(
                pn(u || {}, {
                    method: t,
                    headers: r ? { 'Content-Type': 'multipart/form-data' } : {},
                    url: o,
                    data: i,
                })
            );
        };
    }
    (gl.prototype[t] = n()), (gl.prototype[t + 'Form'] = n(!0));
});
const Jr = gl;
class gu {
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
                r.reason || ((r.reason = new pr(o, i, u)), n(r.reason));
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
            token: new gu(function (l) {
                t = l;
            }),
            cancel: t,
        };
    }
}
const dm = gu;
function pm(e) {
    return function (n) {
        return e.apply(null, n);
    };
}
function hm(e) {
    return g.isObject(e) && e.isAxiosError === !0;
}
const gi = {
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
Object.entries(gi).forEach(([e, t]) => {
    gi[t] = e;
});
const mm = gi;
function xf(e) {
    const t = new Jr(e),
        n = nf(Jr.prototype.request, t);
    return (
        g.extend(n, Jr.prototype, t, { allOwnKeys: !0 }),
        g.extend(n, t, null, { allOwnKeys: !0 }),
        (n.create = function (l) {
            return xf(pn(e, l));
        }),
        n
    );
}
const Y = xf(yu);
Y.Axios = Jr;
Y.CanceledError = pr;
Y.CancelToken = dm;
Y.isCancel = wf;
Y.VERSION = Ef;
Y.toFormData = Ul;
Y.AxiosError = F;
Y.Cancel = Y.CanceledError;
Y.all = function (t) {
    return Promise.all(t);
};
Y.spread = pm;
Y.isAxiosError = hm;
Y.mergeConfig = pn;
Y.AxiosHeaders = qe;
Y.formToJSON = (e) => gf(g.isHTMLForm(e) ? new FormData(e) : e);
Y.getAdapter = kf.getAdapter;
Y.HttpStatusCode = mm;
Y.default = Y;
const Bl = Y,
    wu = '/api/blogs';
let Cf = null;
const ym = (e) => {
        Cf = `Bearer ${e}`;
    },
    vm = () => Bl.get(wu).then((t) => t.data),
    gm = async (e) => {
        const t = { headers: { Authorization: Cf } };
        return (await Bl.post(wu, e, t)).data;
    },
    wm = (e, t) => Bl.put(`${wu} /${e}`, t).then((r) => r.data),
    Rn = { getAll: vm, create: gm, update: wm, setToken: ym },
    Sm = '/api/login',
    km = async (e) => (await Bl.post(Sm, e)).data,
    Em = { login: km },
    xm = () => {
        const [e, t] = b.useState([]),
            [n, r] = b.useState(''),
            [l, o] = b.useState(''),
            [i, u] = b.useState(null),
            [s, a] = b.useState({ message: null, isError: !1 });
        b.useState(!1);
        const h = b.useRef();
        b.useEffect(() => {
            const _ = window.localStorage.getItem('loggedBlogAppUser');
            if (_) {
                const f = JSON.parse(_);
                u(f), Rn.setToken(f.token);
            }
        }, []),
            b.useEffect(() => {
                Rn.getAll().then((_) => t(_));
            }, []);
        const d = (_, f = !1) => {
                a({ message: _, isError: f }),
                    setTimeout(() => {
                        a({ message: null, isError: !1 });
                    }, 3e3);
            },
            m = async (_) => {
                h.current.toggleVisibility();
                try {
                    const f = await Rn.create(_);
                    t(e.concat(f)),
                        d(`A new blog ${f.title} by ${f.author} added`);
                } catch {
                    d('Failed to add blog', !0);
                }
            },
            k = async (_) => {
                _.preventDefault();
                try {
                    const f = await Em.login({ username: n, password: l });
                    window.localStorage.setItem(
                        'loggedBlogAppUser',
                        JSON.stringify(f)
                    ),
                        Rn.setToken(f.token),
                        u(f),
                        d('Logged in successfully'),
                        r(''),
                        o('');
                } catch {
                    d('Wrong username or password', !0),
                        setTimeout(() => {
                            setErrorMessage(null);
                        }, 3e3);
                }
            },
            y = () => {
                window.localStorage.removeItem('loggedBlogAppUser'),
                    u(null),
                    Rn.setToken(null);
            },
            v = () =>
                R.jsxs('div', {
                    children: [
                        R.jsx('h2', { children: 'Log in to application' }),
                        R.jsx(Os, { message: s.message, isError: s.isError }),
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
                                            onChange: ({ target: _ }) =>
                                                r(_.value),
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
                                            onChange: ({ target: _ }) =>
                                                o(_.value),
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
            ? v()
            : R.jsxs('div', {
                  children: [
                      R.jsx('h2', { children: 'Blogs' }),
                      R.jsx(Os, { message: s.message, isError: s.isError }),
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
                      R.jsx(tf, {
                          buttonLabel: 'create blog',
                          ref: h,
                          children: R.jsx(Zp, { createBlog: m }),
                      }),
                      R.jsx('br', {}),
                      e.map((_) => R.jsx(qp, { blog: _ }, _.id)),
                  ],
              });
    };
ko.createRoot(document.getElementById('root')).render(R.jsx(xm, {}));
