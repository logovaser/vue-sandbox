/**
 * Created by logov on 05-May-17.
 */

export function wait(importFn) {
    return res => importFn.then(success => res(success.default))
}

export function waitAll(importFnList) {
    return res => Promise.all(importFnList).then(success => res(success.default))
}
