goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__30619 = arguments.length;
switch (G__30619) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30620 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30620 = (function (f,blockable,meta30621){
this.f = f;
this.blockable = blockable;
this.meta30621 = meta30621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30622,meta30621__$1){
var self__ = this;
var _30622__$1 = this;
return (new cljs.core.async.t_cljs$core$async30620(self__.f,self__.blockable,meta30621__$1));
}));

(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30622){
var self__ = this;
var _30622__$1 = this;
return self__.meta30621;
}));

(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async30620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async30620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30621","meta30621",-562180078,null)], null);
}));

(cljs.core.async.t_cljs$core$async30620.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30620");

(cljs.core.async.t_cljs$core$async30620.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30620");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30620.
 */
cljs.core.async.__GT_t_cljs$core$async30620 = (function cljs$core$async$__GT_t_cljs$core$async30620(f__$1,blockable__$1,meta30621){
return (new cljs.core.async.t_cljs$core$async30620(f__$1,blockable__$1,meta30621));
});

}

return (new cljs.core.async.t_cljs$core$async30620(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__30638 = arguments.length;
switch (G__30638) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__30658 = arguments.length;
switch (G__30658) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__30710 = arguments.length;
switch (G__30710) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34303 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34303) : fn1.call(null,val_34303));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34303) : fn1.call(null,val_34303));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__30736 = arguments.length;
switch (G__30736) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___34309 = n;
var x_34310 = (0);
while(true){
if((x_34310 < n__5636__auto___34309)){
(a[x_34310] = x_34310);

var G__34311 = (x_34310 + (1));
x_34310 = G__34311;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30750 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30750 = (function (flag,meta30751){
this.flag = flag;
this.meta30751 = meta30751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30752,meta30751__$1){
var self__ = this;
var _30752__$1 = this;
return (new cljs.core.async.t_cljs$core$async30750(self__.flag,meta30751__$1));
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30752){
var self__ = this;
var _30752__$1 = this;
return self__.meta30751;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30750.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async30750.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30751","meta30751",-1968941736,null)], null);
}));

(cljs.core.async.t_cljs$core$async30750.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30750");

(cljs.core.async.t_cljs$core$async30750.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30750");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30750.
 */
cljs.core.async.__GT_t_cljs$core$async30750 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30750(flag__$1,meta30751){
return (new cljs.core.async.t_cljs$core$async30750(flag__$1,meta30751));
});

}

return (new cljs.core.async.t_cljs$core$async30750(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30770 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30770 = (function (flag,cb,meta30771){
this.flag = flag;
this.cb = cb;
this.meta30771 = meta30771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30772,meta30771__$1){
var self__ = this;
var _30772__$1 = this;
return (new cljs.core.async.t_cljs$core$async30770(self__.flag,self__.cb,meta30771__$1));
}));

(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30772){
var self__ = this;
var _30772__$1 = this;
return self__.meta30771;
}));

(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async30770.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async30770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30771","meta30771",719378844,null)], null);
}));

(cljs.core.async.t_cljs$core$async30770.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30770");

(cljs.core.async.t_cljs$core$async30770.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async30770");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30770.
 */
cljs.core.async.__GT_t_cljs$core$async30770 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30770(flag__$1,cb__$1,meta30771){
return (new cljs.core.async.t_cljs$core$async30770(flag__$1,cb__$1,meta30771));
});

}

return (new cljs.core.async.t_cljs$core$async30770(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__30776_SHARP_){
var G__30782 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30776_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30782) : fret.call(null,G__30782));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__30777_SHARP_){
var G__30783 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30777_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__30783) : fret.call(null,G__30783));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34316 = (i + (1));
i = G__34316;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34320 = arguments.length;
var i__5770__auto___34321 = (0);
while(true){
if((i__5770__auto___34321 < len__5769__auto___34320)){
args__5775__auto__.push((arguments[i__5770__auto___34321]));

var G__34322 = (i__5770__auto___34321 + (1));
i__5770__auto___34321 = G__34322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30804){
var map__30807 = p__30804;
var map__30807__$1 = cljs.core.__destructure_map(map__30807);
var opts = map__30807__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30794){
var G__30795 = cljs.core.first(seq30794);
var seq30794__$1 = cljs.core.next(seq30794);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30795,seq30794__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__30850 = arguments.length;
switch (G__30850) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__30533__auto___34328 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_30946){
var state_val_30947 = (state_30946[(1)]);
if((state_val_30947 === (7))){
var inst_30930 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30961_34333 = state_30946__$1;
(statearr_30961_34333[(2)] = inst_30930);

(statearr_30961_34333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (1))){
var state_30946__$1 = state_30946;
var statearr_30962_34337 = state_30946__$1;
(statearr_30962_34337[(2)] = null);

(statearr_30962_34337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (4))){
var inst_30893 = (state_30946[(7)]);
var inst_30893__$1 = (state_30946[(2)]);
var inst_30899 = (inst_30893__$1 == null);
var state_30946__$1 = (function (){var statearr_30969 = state_30946;
(statearr_30969[(7)] = inst_30893__$1);

return statearr_30969;
})();
if(cljs.core.truth_(inst_30899)){
var statearr_30975_34341 = state_30946__$1;
(statearr_30975_34341[(1)] = (5));

} else {
var statearr_30977_34342 = state_30946__$1;
(statearr_30977_34342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (13))){
var state_30946__$1 = state_30946;
var statearr_30978_34344 = state_30946__$1;
(statearr_30978_34344[(2)] = null);

(statearr_30978_34344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (6))){
var inst_30893 = (state_30946[(7)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30946__$1,(11),to,inst_30893);
} else {
if((state_val_30947 === (3))){
var inst_30939 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30946__$1,inst_30939);
} else {
if((state_val_30947 === (12))){
var state_30946__$1 = state_30946;
var statearr_30990_34346 = state_30946__$1;
(statearr_30990_34346[(2)] = null);

(statearr_30990_34346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (2))){
var state_30946__$1 = state_30946;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30946__$1,(4),from);
} else {
if((state_val_30947 === (11))){
var inst_30920 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
if(cljs.core.truth_(inst_30920)){
var statearr_30991_34347 = state_30946__$1;
(statearr_30991_34347[(1)] = (12));

} else {
var statearr_30992_34352 = state_30946__$1;
(statearr_30992_34352[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (9))){
var state_30946__$1 = state_30946;
var statearr_30993_34356 = state_30946__$1;
(statearr_30993_34356[(2)] = null);

(statearr_30993_34356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (5))){
var state_30946__$1 = state_30946;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30994_34357 = state_30946__$1;
(statearr_30994_34357[(1)] = (8));

} else {
var statearr_30995_34358 = state_30946__$1;
(statearr_30995_34358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (14))){
var inst_30926 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30998_34363 = state_30946__$1;
(statearr_30998_34363[(2)] = inst_30926);

(statearr_30998_34363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (10))){
var inst_30912 = (state_30946[(2)]);
var state_30946__$1 = state_30946;
var statearr_30999_34365 = state_30946__$1;
(statearr_30999_34365[(2)] = inst_30912);

(statearr_30999_34365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30947 === (8))){
var inst_30904 = cljs.core.async.close_BANG_(to);
var state_30946__$1 = state_30946;
var statearr_31004_34366 = state_30946__$1;
(statearr_31004_34366[(2)] = inst_30904);

(statearr_31004_34366[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_31021 = [null,null,null,null,null,null,null,null];
(statearr_31021[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_31021[(1)] = (1));

return statearr_31021;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_30946){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_30946);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31024){var ex__30174__auto__ = e31024;
var statearr_31025_34370 = state_30946;
(statearr_31025_34370[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_30946[(4)]))){
var statearr_31027_34371 = state_30946;
(statearr_31027_34371[(1)] = cljs.core.first((state_30946[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34376 = state_30946;
state_30946 = G__34376;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_30946){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_30946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31032 = f__30534__auto__();
(statearr_31032[(6)] = c__30533__auto___34328);

return statearr_31032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31040){
var vec__31041 = p__31040;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31041,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31041,(1),null);
var job = vec__31041;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__30533__auto___34389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31048){
var state_val_31049 = (state_31048[(1)]);
if((state_val_31049 === (1))){
var state_31048__$1 = state_31048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31048__$1,(2),res,v);
} else {
if((state_val_31049 === (2))){
var inst_31045 = (state_31048[(2)]);
var inst_31046 = cljs.core.async.close_BANG_(res);
var state_31048__$1 = (function (){var statearr_31052 = state_31048;
(statearr_31052[(7)] = inst_31045);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31048__$1,inst_31046);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_31054 = [null,null,null,null,null,null,null,null];
(statearr_31054[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__);

(statearr_31054[(1)] = (1));

return statearr_31054;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1 = (function (state_31048){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31048);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31055){var ex__30174__auto__ = e31055;
var statearr_31056_34393 = state_31048;
(statearr_31056_34393[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31048[(4)]))){
var statearr_31057_34395 = state_31048;
(statearr_31057_34395[(1)] = cljs.core.first((state_31048[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34396 = state_31048;
state_31048 = G__34396;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = function(state_31048){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1.call(this,state_31048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31058 = f__30534__auto__();
(statearr_31058[(6)] = c__30533__auto___34389);

return statearr_31058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31063){
var vec__31065 = p__31063;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31065,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31065,(1),null);
var job = vec__31065;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___34397 = n;
var __34398 = (0);
while(true){
if((__34398 < n__5636__auto___34397)){
var G__31078_34399 = type;
var G__31078_34400__$1 = (((G__31078_34399 instanceof cljs.core.Keyword))?G__31078_34399.fqn:null);
switch (G__31078_34400__$1) {
case "compute":
var c__30533__auto___34402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34398,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = ((function (__34398,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function (state_31095){
var state_val_31096 = (state_31095[(1)]);
if((state_val_31096 === (1))){
var state_31095__$1 = state_31095;
var statearr_31097_34403 = state_31095__$1;
(statearr_31097_34403[(2)] = null);

(statearr_31097_34403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31096 === (2))){
var state_31095__$1 = state_31095;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31095__$1,(4),jobs);
} else {
if((state_val_31096 === (3))){
var inst_31093 = (state_31095[(2)]);
var state_31095__$1 = state_31095;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31095__$1,inst_31093);
} else {
if((state_val_31096 === (4))){
var inst_31085 = (state_31095[(2)]);
var inst_31086 = process__$1(inst_31085);
var state_31095__$1 = state_31095;
if(cljs.core.truth_(inst_31086)){
var statearr_31098_34405 = state_31095__$1;
(statearr_31098_34405[(1)] = (5));

} else {
var statearr_31100_34407 = state_31095__$1;
(statearr_31100_34407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31096 === (5))){
var state_31095__$1 = state_31095;
var statearr_31105_34408 = state_31095__$1;
(statearr_31105_34408[(2)] = null);

(statearr_31105_34408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31096 === (6))){
var state_31095__$1 = state_31095;
var statearr_31107_34409 = state_31095__$1;
(statearr_31107_34409[(2)] = null);

(statearr_31107_34409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31096 === (7))){
var inst_31091 = (state_31095[(2)]);
var state_31095__$1 = state_31095;
var statearr_31108_34410 = state_31095__$1;
(statearr_31108_34410[(2)] = inst_31091);

(statearr_31108_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34398,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
;
return ((function (__34398,switch__30170__auto__,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_31109 = [null,null,null,null,null,null,null];
(statearr_31109[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__);

(statearr_31109[(1)] = (1));

return statearr_31109;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1 = (function (state_31095){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31095);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31110){var ex__30174__auto__ = e31110;
var statearr_31111_34411 = state_31095;
(statearr_31111_34411[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31095[(4)]))){
var statearr_31112_34412 = state_31095;
(statearr_31112_34412[(1)] = cljs.core.first((state_31095[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34415 = state_31095;
state_31095 = G__34415;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = function(state_31095){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1.call(this,state_31095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__;
})()
;})(__34398,switch__30170__auto__,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
})();
var state__30535__auto__ = (function (){var statearr_31113 = f__30534__auto__();
(statearr_31113[(6)] = c__30533__auto___34402);

return statearr_31113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
});})(__34398,c__30533__auto___34402,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
);


break;
case "async":
var c__30533__auto___34416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34398,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = ((function (__34398,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function (state_31126){
var state_val_31127 = (state_31126[(1)]);
if((state_val_31127 === (1))){
var state_31126__$1 = state_31126;
var statearr_31134_34417 = state_31126__$1;
(statearr_31134_34417[(2)] = null);

(statearr_31134_34417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (2))){
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31126__$1,(4),jobs);
} else {
if((state_val_31127 === (3))){
var inst_31124 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31126__$1,inst_31124);
} else {
if((state_val_31127 === (4))){
var inst_31116 = (state_31126[(2)]);
var inst_31117 = async(inst_31116);
var state_31126__$1 = state_31126;
if(cljs.core.truth_(inst_31117)){
var statearr_31143_34418 = state_31126__$1;
(statearr_31143_34418[(1)] = (5));

} else {
var statearr_31144_34419 = state_31126__$1;
(statearr_31144_34419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (5))){
var state_31126__$1 = state_31126;
var statearr_31151_34420 = state_31126__$1;
(statearr_31151_34420[(2)] = null);

(statearr_31151_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (6))){
var state_31126__$1 = state_31126;
var statearr_31161_34421 = state_31126__$1;
(statearr_31161_34421[(2)] = null);

(statearr_31161_34421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31127 === (7))){
var inst_31122 = (state_31126[(2)]);
var state_31126__$1 = state_31126;
var statearr_31172_34423 = state_31126__$1;
(statearr_31172_34423[(2)] = inst_31122);

(statearr_31172_34423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34398,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
;
return ((function (__34398,switch__30170__auto__,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_31177 = [null,null,null,null,null,null,null];
(statearr_31177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__);

(statearr_31177[(1)] = (1));

return statearr_31177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1 = (function (state_31126){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31126);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31179){var ex__30174__auto__ = e31179;
var statearr_31180_34424 = state_31126;
(statearr_31180_34424[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31126[(4)]))){
var statearr_31181_34425 = state_31126;
(statearr_31181_34425[(1)] = cljs.core.first((state_31126[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34426 = state_31126;
state_31126 = G__34426;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = function(state_31126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1.call(this,state_31126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__;
})()
;})(__34398,switch__30170__auto__,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
})();
var state__30535__auto__ = (function (){var statearr_31183 = f__30534__auto__();
(statearr_31183[(6)] = c__30533__auto___34416);

return statearr_31183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
});})(__34398,c__30533__auto___34416,G__31078_34399,G__31078_34400__$1,n__5636__auto___34397,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31078_34400__$1)].join('')));

}

var G__34427 = (__34398 + (1));
__34398 = G__34427;
continue;
} else {
}
break;
}

var c__30533__auto___34428 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31224){
var state_val_31225 = (state_31224[(1)]);
if((state_val_31225 === (7))){
var inst_31216 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
var statearr_31226_34429 = state_31224__$1;
(statearr_31226_34429[(2)] = inst_31216);

(statearr_31226_34429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (1))){
var state_31224__$1 = state_31224;
var statearr_31227_34434 = state_31224__$1;
(statearr_31227_34434[(2)] = null);

(statearr_31227_34434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (4))){
var inst_31194 = (state_31224[(7)]);
var inst_31194__$1 = (state_31224[(2)]);
var inst_31195 = (inst_31194__$1 == null);
var state_31224__$1 = (function (){var statearr_31235 = state_31224;
(statearr_31235[(7)] = inst_31194__$1);

return statearr_31235;
})();
if(cljs.core.truth_(inst_31195)){
var statearr_31238_34435 = state_31224__$1;
(statearr_31238_34435[(1)] = (5));

} else {
var statearr_31239_34436 = state_31224__$1;
(statearr_31239_34436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (6))){
var inst_31194 = (state_31224[(7)]);
var inst_31204 = (state_31224[(8)]);
var inst_31204__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31208 = [inst_31194,inst_31204__$1];
var inst_31209 = (new cljs.core.PersistentVector(null,2,(5),inst_31207,inst_31208,null));
var state_31224__$1 = (function (){var statearr_31248 = state_31224;
(statearr_31248[(8)] = inst_31204__$1);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31224__$1,(8),jobs,inst_31209);
} else {
if((state_val_31225 === (3))){
var inst_31220 = (state_31224[(2)]);
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31224__$1,inst_31220);
} else {
if((state_val_31225 === (2))){
var state_31224__$1 = state_31224;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31224__$1,(4),from);
} else {
if((state_val_31225 === (9))){
var inst_31213 = (state_31224[(2)]);
var state_31224__$1 = (function (){var statearr_31256 = state_31224;
(statearr_31256[(9)] = inst_31213);

return statearr_31256;
})();
var statearr_31259_34439 = state_31224__$1;
(statearr_31259_34439[(2)] = null);

(statearr_31259_34439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (5))){
var inst_31198 = cljs.core.async.close_BANG_(jobs);
var state_31224__$1 = state_31224;
var statearr_31264_34440 = state_31224__$1;
(statearr_31264_34440[(2)] = inst_31198);

(statearr_31264_34440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31225 === (8))){
var inst_31204 = (state_31224[(8)]);
var inst_31211 = (state_31224[(2)]);
var state_31224__$1 = (function (){var statearr_31265 = state_31224;
(statearr_31265[(10)] = inst_31211);

return statearr_31265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31224__$1,(9),results,inst_31204);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_31270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__);

(statearr_31270[(1)] = (1));

return statearr_31270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1 = (function (state_31224){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31224);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31271){var ex__30174__auto__ = e31271;
var statearr_31272_34442 = state_31224;
(statearr_31272_34442[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31224[(4)]))){
var statearr_31277_34443 = state_31224;
(statearr_31277_34443[(1)] = cljs.core.first((state_31224[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34454 = state_31224;
state_31224 = G__34454;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = function(state_31224){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1.call(this,state_31224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31292 = f__30534__auto__();
(statearr_31292[(6)] = c__30533__auto___34428);

return statearr_31292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


var c__30533__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31373){
var state_val_31374 = (state_31373[(1)]);
if((state_val_31374 === (7))){
var inst_31368 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31379_34456 = state_31373__$1;
(statearr_31379_34456[(2)] = inst_31368);

(statearr_31379_34456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (20))){
var state_31373__$1 = state_31373;
var statearr_31380_34457 = state_31373__$1;
(statearr_31380_34457[(2)] = null);

(statearr_31380_34457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (1))){
var state_31373__$1 = state_31373;
var statearr_31382_34459 = state_31373__$1;
(statearr_31382_34459[(2)] = null);

(statearr_31382_34459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (4))){
var inst_31306 = (state_31373[(7)]);
var inst_31306__$1 = (state_31373[(2)]);
var inst_31311 = (inst_31306__$1 == null);
var state_31373__$1 = (function (){var statearr_31387 = state_31373;
(statearr_31387[(7)] = inst_31306__$1);

return statearr_31387;
})();
if(cljs.core.truth_(inst_31311)){
var statearr_31389_34462 = state_31373__$1;
(statearr_31389_34462[(1)] = (5));

} else {
var statearr_31390_34463 = state_31373__$1;
(statearr_31390_34463[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (15))){
var inst_31340 = (state_31373[(8)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31373__$1,(18),to,inst_31340);
} else {
if((state_val_31374 === (21))){
var inst_31363 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31393_34465 = state_31373__$1;
(statearr_31393_34465[(2)] = inst_31363);

(statearr_31393_34465[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (13))){
var inst_31365 = (state_31373[(2)]);
var state_31373__$1 = (function (){var statearr_31394 = state_31373;
(statearr_31394[(9)] = inst_31365);

return statearr_31394;
})();
var statearr_31395_34466 = state_31373__$1;
(statearr_31395_34466[(2)] = null);

(statearr_31395_34466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (6))){
var inst_31306 = (state_31373[(7)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31373__$1,(11),inst_31306);
} else {
if((state_val_31374 === (17))){
var inst_31358 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
if(cljs.core.truth_(inst_31358)){
var statearr_31399_34467 = state_31373__$1;
(statearr_31399_34467[(1)] = (19));

} else {
var statearr_31402_34468 = state_31373__$1;
(statearr_31402_34468[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (3))){
var inst_31370 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31373__$1,inst_31370);
} else {
if((state_val_31374 === (12))){
var inst_31335 = (state_31373[(10)]);
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31373__$1,(14),inst_31335);
} else {
if((state_val_31374 === (2))){
var state_31373__$1 = state_31373;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31373__$1,(4),results);
} else {
if((state_val_31374 === (19))){
var state_31373__$1 = state_31373;
var statearr_31406_34469 = state_31373__$1;
(statearr_31406_34469[(2)] = null);

(statearr_31406_34469[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (11))){
var inst_31335 = (state_31373[(2)]);
var state_31373__$1 = (function (){var statearr_31409 = state_31373;
(statearr_31409[(10)] = inst_31335);

return statearr_31409;
})();
var statearr_31415_34470 = state_31373__$1;
(statearr_31415_34470[(2)] = null);

(statearr_31415_34470[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (9))){
var state_31373__$1 = state_31373;
var statearr_31420_34471 = state_31373__$1;
(statearr_31420_34471[(2)] = null);

(statearr_31420_34471[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (5))){
var state_31373__$1 = state_31373;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31423_34477 = state_31373__$1;
(statearr_31423_34477[(1)] = (8));

} else {
var statearr_31428_34478 = state_31373__$1;
(statearr_31428_34478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (14))){
var inst_31340 = (state_31373[(8)]);
var inst_31348 = (state_31373[(11)]);
var inst_31340__$1 = (state_31373[(2)]);
var inst_31347 = (inst_31340__$1 == null);
var inst_31348__$1 = cljs.core.not(inst_31347);
var state_31373__$1 = (function (){var statearr_31429 = state_31373;
(statearr_31429[(8)] = inst_31340__$1);

(statearr_31429[(11)] = inst_31348__$1);

return statearr_31429;
})();
if(inst_31348__$1){
var statearr_31432_34482 = state_31373__$1;
(statearr_31432_34482[(1)] = (15));

} else {
var statearr_31433_34483 = state_31373__$1;
(statearr_31433_34483[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (16))){
var inst_31348 = (state_31373[(11)]);
var state_31373__$1 = state_31373;
var statearr_31439_34484 = state_31373__$1;
(statearr_31439_34484[(2)] = inst_31348);

(statearr_31439_34484[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (10))){
var inst_31326 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31442_34485 = state_31373__$1;
(statearr_31442_34485[(2)] = inst_31326);

(statearr_31442_34485[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (18))){
var inst_31355 = (state_31373[(2)]);
var state_31373__$1 = state_31373;
var statearr_31443_34489 = state_31373__$1;
(statearr_31443_34489[(2)] = inst_31355);

(statearr_31443_34489[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31374 === (8))){
var inst_31315 = cljs.core.async.close_BANG_(to);
var state_31373__$1 = state_31373;
var statearr_31446_34490 = state_31373__$1;
(statearr_31446_34490[(2)] = inst_31315);

(statearr_31446_34490[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_31450 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31450[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__);

(statearr_31450[(1)] = (1));

return statearr_31450;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1 = (function (state_31373){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31373);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31457){var ex__30174__auto__ = e31457;
var statearr_31458_34494 = state_31373;
(statearr_31458_34494[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31373[(4)]))){
var statearr_31460_34495 = state_31373;
(statearr_31460_34495[(1)] = cljs.core.first((state_31373[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34499 = state_31373;
state_31373 = G__34499;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__ = function(state_31373){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1.call(this,state_31373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31465 = f__30534__auto__();
(statearr_31465[(6)] = c__30533__auto__);

return statearr_31465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

return c__30533__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__31471 = arguments.length;
switch (G__31471) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__31481 = arguments.length;
switch (G__31481) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__31492 = arguments.length;
switch (G__31492) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__30533__auto___34527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31520){
var state_val_31521 = (state_31520[(1)]);
if((state_val_31521 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31525_34528 = state_31520__$1;
(statearr_31525_34528[(2)] = inst_31516);

(statearr_31525_34528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (1))){
var state_31520__$1 = state_31520;
var statearr_31529_34530 = state_31520__$1;
(statearr_31529_34530[(2)] = null);

(statearr_31529_34530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (4))){
var inst_31497 = (state_31520[(7)]);
var inst_31497__$1 = (state_31520[(2)]);
var inst_31498 = (inst_31497__$1 == null);
var state_31520__$1 = (function (){var statearr_31531 = state_31520;
(statearr_31531[(7)] = inst_31497__$1);

return statearr_31531;
})();
if(cljs.core.truth_(inst_31498)){
var statearr_31532_34542 = state_31520__$1;
(statearr_31532_34542[(1)] = (5));

} else {
var statearr_31533_34543 = state_31520__$1;
(statearr_31533_34543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (13))){
var state_31520__$1 = state_31520;
var statearr_31534_34553 = state_31520__$1;
(statearr_31534_34553[(2)] = null);

(statearr_31534_34553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (6))){
var inst_31497 = (state_31520[(7)]);
var inst_31503 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31497) : p.call(null,inst_31497));
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31503)){
var statearr_31535_34559 = state_31520__$1;
(statearr_31535_34559[(1)] = (9));

} else {
var statearr_31536_34560 = state_31520__$1;
(statearr_31536_34560[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31520__$1,inst_31518);
} else {
if((state_val_31521 === (12))){
var state_31520__$1 = state_31520;
var statearr_31541_34561 = state_31520__$1;
(statearr_31541_34561[(2)] = null);

(statearr_31541_34561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31520__$1,(4),ch);
} else {
if((state_val_31521 === (11))){
var inst_31497 = (state_31520[(7)]);
var inst_31507 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31520__$1,(8),inst_31507,inst_31497);
} else {
if((state_val_31521 === (9))){
var state_31520__$1 = state_31520;
var statearr_31542_34564 = state_31520__$1;
(statearr_31542_34564[(2)] = tc);

(statearr_31542_34564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (5))){
var inst_31500 = cljs.core.async.close_BANG_(tc);
var inst_31501 = cljs.core.async.close_BANG_(fc);
var state_31520__$1 = (function (){var statearr_31547 = state_31520;
(statearr_31547[(8)] = inst_31500);

return statearr_31547;
})();
var statearr_31549_34565 = state_31520__$1;
(statearr_31549_34565[(2)] = inst_31501);

(statearr_31549_34565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (14))){
var inst_31514 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31551_34566 = state_31520__$1;
(statearr_31551_34566[(2)] = inst_31514);

(statearr_31551_34566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (10))){
var state_31520__$1 = state_31520;
var statearr_31555_34567 = state_31520__$1;
(statearr_31555_34567[(2)] = fc);

(statearr_31555_34567[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31521 === (8))){
var inst_31509 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31509)){
var statearr_31556_34568 = state_31520__$1;
(statearr_31556_34568[(1)] = (12));

} else {
var statearr_31557_34569 = state_31520__$1;
(statearr_31557_34569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_31562 = [null,null,null,null,null,null,null,null,null];
(statearr_31562[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_31562[(1)] = (1));

return statearr_31562;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_31520){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31520);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31565){var ex__30174__auto__ = e31565;
var statearr_31567_34570 = state_31520;
(statearr_31567_34570[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31520[(4)]))){
var statearr_31571_34571 = state_31520;
(statearr_31571_34571[(1)] = cljs.core.first((state_31520[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34572 = state_31520;
state_31520 = G__34572;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31572 = f__30534__auto__();
(statearr_31572[(6)] = c__30533__auto___34527);

return statearr_31572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30533__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31610){
var state_val_31611 = (state_31610[(1)]);
if((state_val_31611 === (7))){
var inst_31606 = (state_31610[(2)]);
var state_31610__$1 = state_31610;
var statearr_31614_34573 = state_31610__$1;
(statearr_31614_34573[(2)] = inst_31606);

(statearr_31614_34573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (1))){
var inst_31579 = init;
var inst_31586 = inst_31579;
var state_31610__$1 = (function (){var statearr_31615 = state_31610;
(statearr_31615[(7)] = inst_31586);

return statearr_31615;
})();
var statearr_31616_34576 = state_31610__$1;
(statearr_31616_34576[(2)] = null);

(statearr_31616_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (4))){
var inst_31591 = (state_31610[(8)]);
var inst_31591__$1 = (state_31610[(2)]);
var inst_31592 = (inst_31591__$1 == null);
var state_31610__$1 = (function (){var statearr_31618 = state_31610;
(statearr_31618[(8)] = inst_31591__$1);

return statearr_31618;
})();
if(cljs.core.truth_(inst_31592)){
var statearr_31619_34578 = state_31610__$1;
(statearr_31619_34578[(1)] = (5));

} else {
var statearr_31620_34579 = state_31610__$1;
(statearr_31620_34579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (6))){
var inst_31586 = (state_31610[(7)]);
var inst_31591 = (state_31610[(8)]);
var inst_31597 = (state_31610[(9)]);
var inst_31597__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31586,inst_31591) : f.call(null,inst_31586,inst_31591));
var inst_31598 = cljs.core.reduced_QMARK_(inst_31597__$1);
var state_31610__$1 = (function (){var statearr_31621 = state_31610;
(statearr_31621[(9)] = inst_31597__$1);

return statearr_31621;
})();
if(inst_31598){
var statearr_31622_34580 = state_31610__$1;
(statearr_31622_34580[(1)] = (8));

} else {
var statearr_31624_34581 = state_31610__$1;
(statearr_31624_34581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (3))){
var inst_31608 = (state_31610[(2)]);
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31610__$1,inst_31608);
} else {
if((state_val_31611 === (2))){
var state_31610__$1 = state_31610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31610__$1,(4),ch);
} else {
if((state_val_31611 === (9))){
var inst_31597 = (state_31610[(9)]);
var inst_31586 = inst_31597;
var state_31610__$1 = (function (){var statearr_31629 = state_31610;
(statearr_31629[(7)] = inst_31586);

return statearr_31629;
})();
var statearr_31633_34584 = state_31610__$1;
(statearr_31633_34584[(2)] = null);

(statearr_31633_34584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (5))){
var inst_31586 = (state_31610[(7)]);
var state_31610__$1 = state_31610;
var statearr_31634_34585 = state_31610__$1;
(statearr_31634_34585[(2)] = inst_31586);

(statearr_31634_34585[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (10))){
var inst_31604 = (state_31610[(2)]);
var state_31610__$1 = state_31610;
var statearr_31635_34586 = state_31610__$1;
(statearr_31635_34586[(2)] = inst_31604);

(statearr_31635_34586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31611 === (8))){
var inst_31597 = (state_31610[(9)]);
var inst_31600 = cljs.core.deref(inst_31597);
var state_31610__$1 = state_31610;
var statearr_31636_34587 = state_31610__$1;
(statearr_31636_34587[(2)] = inst_31600);

(statearr_31636_34587[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__30171__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30171__auto____0 = (function (){
var statearr_31637 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31637[(0)] = cljs$core$async$reduce_$_state_machine__30171__auto__);

(statearr_31637[(1)] = (1));

return statearr_31637;
});
var cljs$core$async$reduce_$_state_machine__30171__auto____1 = (function (state_31610){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31610);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31638){var ex__30174__auto__ = e31638;
var statearr_31639_34590 = state_31610;
(statearr_31639_34590[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31610[(4)]))){
var statearr_31641_34592 = state_31610;
(statearr_31641_34592[(1)] = cljs.core.first((state_31610[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34593 = state_31610;
state_31610 = G__34593;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30171__auto__ = function(state_31610){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30171__auto____1.call(this,state_31610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30171__auto____0;
cljs$core$async$reduce_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30171__auto____1;
return cljs$core$async$reduce_$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31642 = f__30534__auto__();
(statearr_31642[(6)] = c__30533__auto__);

return statearr_31642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

return c__30533__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__30533__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31648){
var state_val_31649 = (state_31648[(1)]);
if((state_val_31649 === (1))){
var inst_31643 = cljs.core.async.reduce(f__$1,init,ch);
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31648__$1,(2),inst_31643);
} else {
if((state_val_31649 === (2))){
var inst_31645 = (state_31648[(2)]);
var inst_31646 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31645) : f__$1.call(null,inst_31645));
var state_31648__$1 = state_31648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31648__$1,inst_31646);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__30171__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30171__auto____0 = (function (){
var statearr_31654 = [null,null,null,null,null,null,null];
(statearr_31654[(0)] = cljs$core$async$transduce_$_state_machine__30171__auto__);

(statearr_31654[(1)] = (1));

return statearr_31654;
});
var cljs$core$async$transduce_$_state_machine__30171__auto____1 = (function (state_31648){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31648);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31661){var ex__30174__auto__ = e31661;
var statearr_31665_34600 = state_31648;
(statearr_31665_34600[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31648[(4)]))){
var statearr_31668_34601 = state_31648;
(statearr_31668_34601[(1)] = cljs.core.first((state_31648[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_31648;
state_31648 = G__34602;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30171__auto__ = function(state_31648){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30171__auto____1.call(this,state_31648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30171__auto____0;
cljs$core$async$transduce_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30171__auto____1;
return cljs$core$async$transduce_$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31669 = f__30534__auto__();
(statearr_31669[(6)] = c__30533__auto__);

return statearr_31669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

return c__30533__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__31673 = arguments.length;
switch (G__31673) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__30533__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_31703){
var state_val_31704 = (state_31703[(1)]);
if((state_val_31704 === (7))){
var inst_31680 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31705_34615 = state_31703__$1;
(statearr_31705_34615[(2)] = inst_31680);

(statearr_31705_34615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (1))){
var inst_31674 = cljs.core.seq(coll);
var inst_31675 = inst_31674;
var state_31703__$1 = (function (){var statearr_31706 = state_31703;
(statearr_31706[(7)] = inst_31675);

return statearr_31706;
})();
var statearr_31707_34616 = state_31703__$1;
(statearr_31707_34616[(2)] = null);

(statearr_31707_34616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (4))){
var inst_31675 = (state_31703[(7)]);
var inst_31678 = cljs.core.first(inst_31675);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31703__$1,(7),ch,inst_31678);
} else {
if((state_val_31704 === (13))){
var inst_31695 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31710_34623 = state_31703__$1;
(statearr_31710_34623[(2)] = inst_31695);

(statearr_31710_34623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (6))){
var inst_31683 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
if(cljs.core.truth_(inst_31683)){
var statearr_31713_34627 = state_31703__$1;
(statearr_31713_34627[(1)] = (8));

} else {
var statearr_31714_34628 = state_31703__$1;
(statearr_31714_34628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (3))){
var inst_31699 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31703__$1,inst_31699);
} else {
if((state_val_31704 === (12))){
var state_31703__$1 = state_31703;
var statearr_31718_34629 = state_31703__$1;
(statearr_31718_34629[(2)] = null);

(statearr_31718_34629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (2))){
var inst_31675 = (state_31703[(7)]);
var state_31703__$1 = state_31703;
if(cljs.core.truth_(inst_31675)){
var statearr_31719_34632 = state_31703__$1;
(statearr_31719_34632[(1)] = (4));

} else {
var statearr_31720_34635 = state_31703__$1;
(statearr_31720_34635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (11))){
var inst_31689 = cljs.core.async.close_BANG_(ch);
var state_31703__$1 = state_31703;
var statearr_31721_34640 = state_31703__$1;
(statearr_31721_34640[(2)] = inst_31689);

(statearr_31721_34640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (9))){
var state_31703__$1 = state_31703;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31722_34641 = state_31703__$1;
(statearr_31722_34641[(1)] = (11));

} else {
var statearr_31724_34642 = state_31703__$1;
(statearr_31724_34642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (5))){
var inst_31675 = (state_31703[(7)]);
var state_31703__$1 = state_31703;
var statearr_31726_34643 = state_31703__$1;
(statearr_31726_34643[(2)] = inst_31675);

(statearr_31726_34643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (10))){
var inst_31697 = (state_31703[(2)]);
var state_31703__$1 = state_31703;
var statearr_31728_34653 = state_31703__$1;
(statearr_31728_34653[(2)] = inst_31697);

(statearr_31728_34653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31704 === (8))){
var inst_31675 = (state_31703[(7)]);
var inst_31685 = cljs.core.next(inst_31675);
var inst_31675__$1 = inst_31685;
var state_31703__$1 = (function (){var statearr_31731 = state_31703;
(statearr_31731[(7)] = inst_31675__$1);

return statearr_31731;
})();
var statearr_31732_34656 = state_31703__$1;
(statearr_31732_34656[(2)] = null);

(statearr_31732_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_31736 = [null,null,null,null,null,null,null,null];
(statearr_31736[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_31736[(1)] = (1));

return statearr_31736;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_31703){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_31703);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e31737){var ex__30174__auto__ = e31737;
var statearr_31738_34657 = state_31703;
(statearr_31738_34657[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_31703[(4)]))){
var statearr_31740_34658 = state_31703;
(statearr_31740_34658[(1)] = cljs.core.first((state_31703[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34659 = state_31703;
state_31703 = G__34659;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_31703){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_31703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_31744 = f__30534__auto__();
(statearr_31744[(6)] = c__30533__auto__);

return statearr_31744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

return c__30533__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__31759 = arguments.length;
switch (G__31759) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34662 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34662(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34670 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34670(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34677 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34677(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34685 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34685(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31846 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31846 = (function (ch,cs,meta31847){
this.ch = ch;
this.cs = cs;
this.meta31847 = meta31847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31848,meta31847__$1){
var self__ = this;
var _31848__$1 = this;
return (new cljs.core.async.t_cljs$core$async31846(self__.ch,self__.cs,meta31847__$1));
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31848){
var self__ = this;
var _31848__$1 = this;
return self__.meta31847;
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async31846.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async31846.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31847","meta31847",185791331,null)], null);
}));

(cljs.core.async.t_cljs$core$async31846.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31846");

(cljs.core.async.t_cljs$core$async31846.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async31846");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31846.
 */
cljs.core.async.__GT_t_cljs$core$async31846 = (function cljs$core$async$mult_$___GT_t_cljs$core$async31846(ch__$1,cs__$1,meta31847){
return (new cljs.core.async.t_cljs$core$async31846(ch__$1,cs__$1,meta31847));
});

}

return (new cljs.core.async.t_cljs$core$async31846(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__30533__auto___34722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_32062){
var state_val_32064 = (state_32062[(1)]);
if((state_val_32064 === (7))){
var inst_32050 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32083_34724 = state_32062__$1;
(statearr_32083_34724[(2)] = inst_32050);

(statearr_32083_34724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (20))){
var inst_31925 = (state_32062[(7)]);
var inst_31944 = cljs.core.first(inst_31925);
var inst_31945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31944,(0),null);
var inst_31946 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31944,(1),null);
var state_32062__$1 = (function (){var statearr_32094 = state_32062;
(statearr_32094[(8)] = inst_31945);

return statearr_32094;
})();
if(cljs.core.truth_(inst_31946)){
var statearr_32096_34726 = state_32062__$1;
(statearr_32096_34726[(1)] = (22));

} else {
var statearr_32099_34727 = state_32062__$1;
(statearr_32099_34727[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (27))){
var inst_31984 = (state_32062[(9)]);
var inst_31986 = (state_32062[(10)]);
var inst_31993 = (state_32062[(11)]);
var inst_31886 = (state_32062[(12)]);
var inst_31993__$1 = cljs.core._nth(inst_31984,inst_31986);
var inst_31995 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31993__$1,inst_31886,done);
var state_32062__$1 = (function (){var statearr_32105 = state_32062;
(statearr_32105[(11)] = inst_31993__$1);

return statearr_32105;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32107_34728 = state_32062__$1;
(statearr_32107_34728[(1)] = (30));

} else {
var statearr_32109_34729 = state_32062__$1;
(statearr_32109_34729[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (1))){
var state_32062__$1 = state_32062;
var statearr_32111_34730 = state_32062__$1;
(statearr_32111_34730[(2)] = null);

(statearr_32111_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (24))){
var inst_31925 = (state_32062[(7)]);
var inst_31951 = (state_32062[(2)]);
var inst_31953 = cljs.core.next(inst_31925);
var inst_31897 = inst_31953;
var inst_31898 = null;
var inst_31899 = (0);
var inst_31900 = (0);
var state_32062__$1 = (function (){var statearr_32112 = state_32062;
(statearr_32112[(13)] = inst_31951);

(statearr_32112[(14)] = inst_31897);

(statearr_32112[(15)] = inst_31898);

(statearr_32112[(16)] = inst_31899);

(statearr_32112[(17)] = inst_31900);

return statearr_32112;
})();
var statearr_32113_34731 = state_32062__$1;
(statearr_32113_34731[(2)] = null);

(statearr_32113_34731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (39))){
var state_32062__$1 = state_32062;
var statearr_32123_34732 = state_32062__$1;
(statearr_32123_34732[(2)] = null);

(statearr_32123_34732[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (4))){
var inst_31886 = (state_32062[(12)]);
var inst_31886__$1 = (state_32062[(2)]);
var inst_31887 = (inst_31886__$1 == null);
var state_32062__$1 = (function (){var statearr_32128 = state_32062;
(statearr_32128[(12)] = inst_31886__$1);

return statearr_32128;
})();
if(cljs.core.truth_(inst_31887)){
var statearr_32133_34733 = state_32062__$1;
(statearr_32133_34733[(1)] = (5));

} else {
var statearr_32134_34734 = state_32062__$1;
(statearr_32134_34734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (15))){
var inst_31900 = (state_32062[(17)]);
var inst_31897 = (state_32062[(14)]);
var inst_31898 = (state_32062[(15)]);
var inst_31899 = (state_32062[(16)]);
var inst_31921 = (state_32062[(2)]);
var inst_31922 = (inst_31900 + (1));
var tmp32115 = inst_31898;
var tmp32116 = inst_31899;
var tmp32117 = inst_31897;
var inst_31897__$1 = tmp32117;
var inst_31898__$1 = tmp32115;
var inst_31899__$1 = tmp32116;
var inst_31900__$1 = inst_31922;
var state_32062__$1 = (function (){var statearr_32136 = state_32062;
(statearr_32136[(18)] = inst_31921);

(statearr_32136[(14)] = inst_31897__$1);

(statearr_32136[(15)] = inst_31898__$1);

(statearr_32136[(16)] = inst_31899__$1);

(statearr_32136[(17)] = inst_31900__$1);

return statearr_32136;
})();
var statearr_32141_34735 = state_32062__$1;
(statearr_32141_34735[(2)] = null);

(statearr_32141_34735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (21))){
var inst_31956 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32146_34736 = state_32062__$1;
(statearr_32146_34736[(2)] = inst_31956);

(statearr_32146_34736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (31))){
var inst_31993 = (state_32062[(11)]);
var inst_31999 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31993);
var state_32062__$1 = state_32062;
var statearr_32148_34737 = state_32062__$1;
(statearr_32148_34737[(2)] = inst_31999);

(statearr_32148_34737[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (32))){
var inst_31986 = (state_32062[(10)]);
var inst_31983 = (state_32062[(19)]);
var inst_31984 = (state_32062[(9)]);
var inst_31985 = (state_32062[(20)]);
var inst_32001 = (state_32062[(2)]);
var inst_32002 = (inst_31986 + (1));
var tmp32143 = inst_31984;
var tmp32144 = inst_31985;
var tmp32145 = inst_31983;
var inst_31983__$1 = tmp32145;
var inst_31984__$1 = tmp32143;
var inst_31985__$1 = tmp32144;
var inst_31986__$1 = inst_32002;
var state_32062__$1 = (function (){var statearr_32150 = state_32062;
(statearr_32150[(21)] = inst_32001);

(statearr_32150[(19)] = inst_31983__$1);

(statearr_32150[(9)] = inst_31984__$1);

(statearr_32150[(20)] = inst_31985__$1);

(statearr_32150[(10)] = inst_31986__$1);

return statearr_32150;
})();
var statearr_32151_34739 = state_32062__$1;
(statearr_32151_34739[(2)] = null);

(statearr_32151_34739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (40))){
var inst_32020 = (state_32062[(22)]);
var inst_32024 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32020);
var state_32062__$1 = state_32062;
var statearr_32155_34744 = state_32062__$1;
(statearr_32155_34744[(2)] = inst_32024);

(statearr_32155_34744[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (33))){
var inst_32007 = (state_32062[(23)]);
var inst_32011 = cljs.core.chunked_seq_QMARK_(inst_32007);
var state_32062__$1 = state_32062;
if(inst_32011){
var statearr_32157_34745 = state_32062__$1;
(statearr_32157_34745[(1)] = (36));

} else {
var statearr_32158_34746 = state_32062__$1;
(statearr_32158_34746[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (13))){
var inst_31912 = (state_32062[(24)]);
var inst_31915 = cljs.core.async.close_BANG_(inst_31912);
var state_32062__$1 = state_32062;
var statearr_32159_34751 = state_32062__$1;
(statearr_32159_34751[(2)] = inst_31915);

(statearr_32159_34751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (22))){
var inst_31945 = (state_32062[(8)]);
var inst_31948 = cljs.core.async.close_BANG_(inst_31945);
var state_32062__$1 = state_32062;
var statearr_32162_34752 = state_32062__$1;
(statearr_32162_34752[(2)] = inst_31948);

(statearr_32162_34752[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (36))){
var inst_32007 = (state_32062[(23)]);
var inst_32013 = cljs.core.chunk_first(inst_32007);
var inst_32014 = cljs.core.chunk_rest(inst_32007);
var inst_32015 = cljs.core.count(inst_32013);
var inst_31983 = inst_32014;
var inst_31984 = inst_32013;
var inst_31985 = inst_32015;
var inst_31986 = (0);
var state_32062__$1 = (function (){var statearr_32186 = state_32062;
(statearr_32186[(19)] = inst_31983);

(statearr_32186[(9)] = inst_31984);

(statearr_32186[(20)] = inst_31985);

(statearr_32186[(10)] = inst_31986);

return statearr_32186;
})();
var statearr_32187_34753 = state_32062__$1;
(statearr_32187_34753[(2)] = null);

(statearr_32187_34753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (41))){
var inst_32007 = (state_32062[(23)]);
var inst_32026 = (state_32062[(2)]);
var inst_32028 = cljs.core.next(inst_32007);
var inst_31983 = inst_32028;
var inst_31984 = null;
var inst_31985 = (0);
var inst_31986 = (0);
var state_32062__$1 = (function (){var statearr_32189 = state_32062;
(statearr_32189[(25)] = inst_32026);

(statearr_32189[(19)] = inst_31983);

(statearr_32189[(9)] = inst_31984);

(statearr_32189[(20)] = inst_31985);

(statearr_32189[(10)] = inst_31986);

return statearr_32189;
})();
var statearr_32190_34755 = state_32062__$1;
(statearr_32190_34755[(2)] = null);

(statearr_32190_34755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (43))){
var state_32062__$1 = state_32062;
var statearr_32194_34756 = state_32062__$1;
(statearr_32194_34756[(2)] = null);

(statearr_32194_34756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (29))){
var inst_32038 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32201_34757 = state_32062__$1;
(statearr_32201_34757[(2)] = inst_32038);

(statearr_32201_34757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (44))){
var inst_32047 = (state_32062[(2)]);
var state_32062__$1 = (function (){var statearr_32204 = state_32062;
(statearr_32204[(26)] = inst_32047);

return statearr_32204;
})();
var statearr_32205_34764 = state_32062__$1;
(statearr_32205_34764[(2)] = null);

(statearr_32205_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (6))){
var inst_31974 = (state_32062[(27)]);
var inst_31973 = cljs.core.deref(cs);
var inst_31974__$1 = cljs.core.keys(inst_31973);
var inst_31975 = cljs.core.count(inst_31974__$1);
var inst_31976 = cljs.core.reset_BANG_(dctr,inst_31975);
var inst_31982 = cljs.core.seq(inst_31974__$1);
var inst_31983 = inst_31982;
var inst_31984 = null;
var inst_31985 = (0);
var inst_31986 = (0);
var state_32062__$1 = (function (){var statearr_32210 = state_32062;
(statearr_32210[(27)] = inst_31974__$1);

(statearr_32210[(28)] = inst_31976);

(statearr_32210[(19)] = inst_31983);

(statearr_32210[(9)] = inst_31984);

(statearr_32210[(20)] = inst_31985);

(statearr_32210[(10)] = inst_31986);

return statearr_32210;
})();
var statearr_32212_34770 = state_32062__$1;
(statearr_32212_34770[(2)] = null);

(statearr_32212_34770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (28))){
var inst_31983 = (state_32062[(19)]);
var inst_32007 = (state_32062[(23)]);
var inst_32007__$1 = cljs.core.seq(inst_31983);
var state_32062__$1 = (function (){var statearr_32218 = state_32062;
(statearr_32218[(23)] = inst_32007__$1);

return statearr_32218;
})();
if(inst_32007__$1){
var statearr_32219_34772 = state_32062__$1;
(statearr_32219_34772[(1)] = (33));

} else {
var statearr_32221_34776 = state_32062__$1;
(statearr_32221_34776[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (25))){
var inst_31986 = (state_32062[(10)]);
var inst_31985 = (state_32062[(20)]);
var inst_31988 = (inst_31986 < inst_31985);
var inst_31989 = inst_31988;
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_31989)){
var statearr_32228_34777 = state_32062__$1;
(statearr_32228_34777[(1)] = (27));

} else {
var statearr_32229_34778 = state_32062__$1;
(statearr_32229_34778[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (34))){
var state_32062__$1 = state_32062;
var statearr_32234_34780 = state_32062__$1;
(statearr_32234_34780[(2)] = null);

(statearr_32234_34780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (17))){
var state_32062__$1 = state_32062;
var statearr_32239_34782 = state_32062__$1;
(statearr_32239_34782[(2)] = null);

(statearr_32239_34782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (3))){
var inst_32052 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32062__$1,inst_32052);
} else {
if((state_val_32064 === (12))){
var inst_31963 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32242_34783 = state_32062__$1;
(statearr_32242_34783[(2)] = inst_31963);

(statearr_32242_34783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (2))){
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32062__$1,(4),ch);
} else {
if((state_val_32064 === (23))){
var state_32062__$1 = state_32062;
var statearr_32249_34790 = state_32062__$1;
(statearr_32249_34790[(2)] = null);

(statearr_32249_34790[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (35))){
var inst_32034 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32250_34791 = state_32062__$1;
(statearr_32250_34791[(2)] = inst_32034);

(statearr_32250_34791[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (19))){
var inst_31925 = (state_32062[(7)]);
var inst_31930 = cljs.core.chunk_first(inst_31925);
var inst_31931 = cljs.core.chunk_rest(inst_31925);
var inst_31932 = cljs.core.count(inst_31930);
var inst_31897 = inst_31931;
var inst_31898 = inst_31930;
var inst_31899 = inst_31932;
var inst_31900 = (0);
var state_32062__$1 = (function (){var statearr_32251 = state_32062;
(statearr_32251[(14)] = inst_31897);

(statearr_32251[(15)] = inst_31898);

(statearr_32251[(16)] = inst_31899);

(statearr_32251[(17)] = inst_31900);

return statearr_32251;
})();
var statearr_32253_34798 = state_32062__$1;
(statearr_32253_34798[(2)] = null);

(statearr_32253_34798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (11))){
var inst_31897 = (state_32062[(14)]);
var inst_31925 = (state_32062[(7)]);
var inst_31925__$1 = cljs.core.seq(inst_31897);
var state_32062__$1 = (function (){var statearr_32254 = state_32062;
(statearr_32254[(7)] = inst_31925__$1);

return statearr_32254;
})();
if(inst_31925__$1){
var statearr_32255_34799 = state_32062__$1;
(statearr_32255_34799[(1)] = (16));

} else {
var statearr_32256_34800 = state_32062__$1;
(statearr_32256_34800[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (9))){
var inst_31965 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32257_34801 = state_32062__$1;
(statearr_32257_34801[(2)] = inst_31965);

(statearr_32257_34801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (5))){
var inst_31894 = cljs.core.deref(cs);
var inst_31895 = cljs.core.seq(inst_31894);
var inst_31897 = inst_31895;
var inst_31898 = null;
var inst_31899 = (0);
var inst_31900 = (0);
var state_32062__$1 = (function (){var statearr_32258 = state_32062;
(statearr_32258[(14)] = inst_31897);

(statearr_32258[(15)] = inst_31898);

(statearr_32258[(16)] = inst_31899);

(statearr_32258[(17)] = inst_31900);

return statearr_32258;
})();
var statearr_32259_34802 = state_32062__$1;
(statearr_32259_34802[(2)] = null);

(statearr_32259_34802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (14))){
var state_32062__$1 = state_32062;
var statearr_32260_34805 = state_32062__$1;
(statearr_32260_34805[(2)] = null);

(statearr_32260_34805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (45))){
var inst_32044 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32261_34807 = state_32062__$1;
(statearr_32261_34807[(2)] = inst_32044);

(statearr_32261_34807[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (26))){
var inst_31974 = (state_32062[(27)]);
var inst_32040 = (state_32062[(2)]);
var inst_32041 = cljs.core.seq(inst_31974);
var state_32062__$1 = (function (){var statearr_32262 = state_32062;
(statearr_32262[(29)] = inst_32040);

return statearr_32262;
})();
if(inst_32041){
var statearr_32264_34808 = state_32062__$1;
(statearr_32264_34808[(1)] = (42));

} else {
var statearr_32265_34810 = state_32062__$1;
(statearr_32265_34810[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (16))){
var inst_31925 = (state_32062[(7)]);
var inst_31927 = cljs.core.chunked_seq_QMARK_(inst_31925);
var state_32062__$1 = state_32062;
if(inst_31927){
var statearr_32267_34811 = state_32062__$1;
(statearr_32267_34811[(1)] = (19));

} else {
var statearr_32268_34812 = state_32062__$1;
(statearr_32268_34812[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (38))){
var inst_32031 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32269_34813 = state_32062__$1;
(statearr_32269_34813[(2)] = inst_32031);

(statearr_32269_34813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (30))){
var state_32062__$1 = state_32062;
var statearr_32271_34814 = state_32062__$1;
(statearr_32271_34814[(2)] = null);

(statearr_32271_34814[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (10))){
var inst_31898 = (state_32062[(15)]);
var inst_31900 = (state_32062[(17)]);
var inst_31911 = cljs.core._nth(inst_31898,inst_31900);
var inst_31912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31911,(0),null);
var inst_31913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31911,(1),null);
var state_32062__$1 = (function (){var statearr_32272 = state_32062;
(statearr_32272[(24)] = inst_31912);

return statearr_32272;
})();
if(cljs.core.truth_(inst_31913)){
var statearr_32273_34815 = state_32062__$1;
(statearr_32273_34815[(1)] = (13));

} else {
var statearr_32274_34816 = state_32062__$1;
(statearr_32274_34816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (18))){
var inst_31961 = (state_32062[(2)]);
var state_32062__$1 = state_32062;
var statearr_32275_34817 = state_32062__$1;
(statearr_32275_34817[(2)] = inst_31961);

(statearr_32275_34817[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (42))){
var state_32062__$1 = state_32062;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32062__$1,(45),dchan);
} else {
if((state_val_32064 === (37))){
var inst_32007 = (state_32062[(23)]);
var inst_32020 = (state_32062[(22)]);
var inst_31886 = (state_32062[(12)]);
var inst_32020__$1 = cljs.core.first(inst_32007);
var inst_32021 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32020__$1,inst_31886,done);
var state_32062__$1 = (function (){var statearr_32276 = state_32062;
(statearr_32276[(22)] = inst_32020__$1);

return statearr_32276;
})();
if(cljs.core.truth_(inst_32021)){
var statearr_32277_34818 = state_32062__$1;
(statearr_32277_34818[(1)] = (39));

} else {
var statearr_32278_34819 = state_32062__$1;
(statearr_32278_34819[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32064 === (8))){
var inst_31900 = (state_32062[(17)]);
var inst_31899 = (state_32062[(16)]);
var inst_31902 = (inst_31900 < inst_31899);
var inst_31903 = inst_31902;
var state_32062__$1 = state_32062;
if(cljs.core.truth_(inst_31903)){
var statearr_32282_34825 = state_32062__$1;
(statearr_32282_34825[(1)] = (10));

} else {
var statearr_32286_34826 = state_32062__$1;
(statearr_32286_34826[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__30171__auto__ = null;
var cljs$core$async$mult_$_state_machine__30171__auto____0 = (function (){
var statearr_32288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32288[(0)] = cljs$core$async$mult_$_state_machine__30171__auto__);

(statearr_32288[(1)] = (1));

return statearr_32288;
});
var cljs$core$async$mult_$_state_machine__30171__auto____1 = (function (state_32062){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_32062);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e32289){var ex__30174__auto__ = e32289;
var statearr_32290_34832 = state_32062;
(statearr_32290_34832[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_32062[(4)]))){
var statearr_32291_34833 = state_32062;
(statearr_32291_34833[(1)] = cljs.core.first((state_32062[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34835 = state_32062;
state_32062 = G__34835;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30171__auto__ = function(state_32062){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30171__auto____1.call(this,state_32062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30171__auto____0;
cljs$core$async$mult_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30171__auto____1;
return cljs$core$async$mult_$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_32292 = f__30534__auto__();
(statearr_32292[(6)] = c__30533__auto___34722);

return statearr_32292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32301 = arguments.length;
switch (G__32301) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34842 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34842(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34844 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34844(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34850 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34850(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34851 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34851(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34856 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34856(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___34864 = arguments.length;
var i__5770__auto___34865 = (0);
while(true){
if((i__5770__auto___34865 < len__5769__auto___34864)){
args__5775__auto__.push((arguments[i__5770__auto___34865]));

var G__34866 = (i__5770__auto___34865 + (1));
i__5770__auto___34865 = G__34866;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32346){
var map__32347 = p__32346;
var map__32347__$1 = cljs.core.__destructure_map(map__32347);
var opts = map__32347__$1;
var statearr_32348_34870 = state;
(statearr_32348_34870[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32349_34874 = state;
(statearr_32349_34874[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_32350_34875 = state;
(statearr_32350_34875[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32342){
var G__32343 = cljs.core.first(seq32342);
var seq32342__$1 = cljs.core.next(seq32342);
var G__32344 = cljs.core.first(seq32342__$1);
var seq32342__$2 = cljs.core.next(seq32342__$1);
var G__32345 = cljs.core.first(seq32342__$2);
var seq32342__$3 = cljs.core.next(seq32342__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32343,G__32344,G__32345,seq32342__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32365 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32365 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32366){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32366 = meta32366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32367,meta32366__$1){
var self__ = this;
var _32367__$1 = this;
return (new cljs.core.async.t_cljs$core$async32365(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32366__$1));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32367){
var self__ = this;
var _32367__$1 = this;
return self__.meta32366;
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32365.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32366","meta32366",1490354130,null)], null);
}));

(cljs.core.async.t_cljs$core$async32365.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32365");

(cljs.core.async.t_cljs$core$async32365.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32365");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32365.
 */
cljs.core.async.__GT_t_cljs$core$async32365 = (function cljs$core$async$mix_$___GT_t_cljs$core$async32365(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32366){
return (new cljs.core.async.t_cljs$core$async32365(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32366));
});

}

return (new cljs.core.async.t_cljs$core$async32365(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30533__auto___34898 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_32476){
var state_val_32477 = (state_32476[(1)]);
if((state_val_32477 === (7))){
var inst_32433 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
if(cljs.core.truth_(inst_32433)){
var statearr_32479_34899 = state_32476__$1;
(statearr_32479_34899[(1)] = (8));

} else {
var statearr_32480_34900 = state_32476__$1;
(statearr_32480_34900[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (20))){
var inst_32425 = (state_32476[(7)]);
var state_32476__$1 = state_32476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32476__$1,(23),out,inst_32425);
} else {
if((state_val_32477 === (1))){
var inst_32403 = calc_state();
var inst_32405 = cljs.core.__destructure_map(inst_32403);
var inst_32407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32405,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32405,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32405,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_32411 = inst_32403;
var state_32476__$1 = (function (){var statearr_32481 = state_32476;
(statearr_32481[(8)] = inst_32407);

(statearr_32481[(9)] = inst_32408);

(statearr_32481[(10)] = inst_32410);

(statearr_32481[(11)] = inst_32411);

return statearr_32481;
})();
var statearr_32482_34901 = state_32476__$1;
(statearr_32482_34901[(2)] = null);

(statearr_32482_34901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (24))){
var inst_32414 = (state_32476[(12)]);
var inst_32411 = inst_32414;
var state_32476__$1 = (function (){var statearr_32483 = state_32476;
(statearr_32483[(11)] = inst_32411);

return statearr_32483;
})();
var statearr_32484_34902 = state_32476__$1;
(statearr_32484_34902[(2)] = null);

(statearr_32484_34902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (4))){
var inst_32425 = (state_32476[(7)]);
var inst_32428 = (state_32476[(13)]);
var inst_32424 = (state_32476[(2)]);
var inst_32425__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32424,(0),null);
var inst_32426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32424,(1),null);
var inst_32428__$1 = (inst_32425__$1 == null);
var state_32476__$1 = (function (){var statearr_32486 = state_32476;
(statearr_32486[(7)] = inst_32425__$1);

(statearr_32486[(14)] = inst_32426);

(statearr_32486[(13)] = inst_32428__$1);

return statearr_32486;
})();
if(cljs.core.truth_(inst_32428__$1)){
var statearr_32488_34903 = state_32476__$1;
(statearr_32488_34903[(1)] = (5));

} else {
var statearr_32489_34904 = state_32476__$1;
(statearr_32489_34904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (15))){
var inst_32415 = (state_32476[(15)]);
var inst_32449 = (state_32476[(16)]);
var inst_32449__$1 = cljs.core.empty_QMARK_(inst_32415);
var state_32476__$1 = (function (){var statearr_32491 = state_32476;
(statearr_32491[(16)] = inst_32449__$1);

return statearr_32491;
})();
if(inst_32449__$1){
var statearr_32492_34905 = state_32476__$1;
(statearr_32492_34905[(1)] = (17));

} else {
var statearr_32493_34906 = state_32476__$1;
(statearr_32493_34906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (21))){
var inst_32414 = (state_32476[(12)]);
var inst_32411 = inst_32414;
var state_32476__$1 = (function (){var statearr_32494 = state_32476;
(statearr_32494[(11)] = inst_32411);

return statearr_32494;
})();
var statearr_32495_34911 = state_32476__$1;
(statearr_32495_34911[(2)] = null);

(statearr_32495_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (13))){
var inst_32442 = (state_32476[(2)]);
var inst_32443 = calc_state();
var inst_32411 = inst_32443;
var state_32476__$1 = (function (){var statearr_32498 = state_32476;
(statearr_32498[(17)] = inst_32442);

(statearr_32498[(11)] = inst_32411);

return statearr_32498;
})();
var statearr_32500_34912 = state_32476__$1;
(statearr_32500_34912[(2)] = null);

(statearr_32500_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (22))){
var inst_32469 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
var statearr_32501_34913 = state_32476__$1;
(statearr_32501_34913[(2)] = inst_32469);

(statearr_32501_34913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (6))){
var inst_32426 = (state_32476[(14)]);
var inst_32431 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32426,change);
var state_32476__$1 = state_32476;
var statearr_32502_34914 = state_32476__$1;
(statearr_32502_34914[(2)] = inst_32431);

(statearr_32502_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (25))){
var state_32476__$1 = state_32476;
var statearr_32506_34915 = state_32476__$1;
(statearr_32506_34915[(2)] = null);

(statearr_32506_34915[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (17))){
var inst_32418 = (state_32476[(18)]);
var inst_32426 = (state_32476[(14)]);
var inst_32451 = (inst_32418.cljs$core$IFn$_invoke$arity$1 ? inst_32418.cljs$core$IFn$_invoke$arity$1(inst_32426) : inst_32418.call(null,inst_32426));
var inst_32452 = cljs.core.not(inst_32451);
var state_32476__$1 = state_32476;
var statearr_32510_34916 = state_32476__$1;
(statearr_32510_34916[(2)] = inst_32452);

(statearr_32510_34916[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (3))){
var inst_32473 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32476__$1,inst_32473);
} else {
if((state_val_32477 === (12))){
var state_32476__$1 = state_32476;
var statearr_32511_34917 = state_32476__$1;
(statearr_32511_34917[(2)] = null);

(statearr_32511_34917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (2))){
var inst_32411 = (state_32476[(11)]);
var inst_32414 = (state_32476[(12)]);
var inst_32414__$1 = cljs.core.__destructure_map(inst_32411);
var inst_32415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_32418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_32419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_32476__$1 = (function (){var statearr_32515 = state_32476;
(statearr_32515[(12)] = inst_32414__$1);

(statearr_32515[(15)] = inst_32415);

(statearr_32515[(18)] = inst_32418);

return statearr_32515;
})();
return cljs.core.async.ioc_alts_BANG_(state_32476__$1,(4),inst_32419);
} else {
if((state_val_32477 === (23))){
var inst_32460 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
if(cljs.core.truth_(inst_32460)){
var statearr_32516_34923 = state_32476__$1;
(statearr_32516_34923[(1)] = (24));

} else {
var statearr_32518_34924 = state_32476__$1;
(statearr_32518_34924[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (19))){
var inst_32455 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
var statearr_32519_34925 = state_32476__$1;
(statearr_32519_34925[(2)] = inst_32455);

(statearr_32519_34925[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (11))){
var inst_32426 = (state_32476[(14)]);
var inst_32439 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32426);
var state_32476__$1 = state_32476;
var statearr_32526_34926 = state_32476__$1;
(statearr_32526_34926[(2)] = inst_32439);

(statearr_32526_34926[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (9))){
var inst_32415 = (state_32476[(15)]);
var inst_32426 = (state_32476[(14)]);
var inst_32446 = (state_32476[(19)]);
var inst_32446__$1 = (inst_32415.cljs$core$IFn$_invoke$arity$1 ? inst_32415.cljs$core$IFn$_invoke$arity$1(inst_32426) : inst_32415.call(null,inst_32426));
var state_32476__$1 = (function (){var statearr_32527 = state_32476;
(statearr_32527[(19)] = inst_32446__$1);

return statearr_32527;
})();
if(cljs.core.truth_(inst_32446__$1)){
var statearr_32528_34928 = state_32476__$1;
(statearr_32528_34928[(1)] = (14));

} else {
var statearr_32530_34930 = state_32476__$1;
(statearr_32530_34930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (5))){
var inst_32428 = (state_32476[(13)]);
var state_32476__$1 = state_32476;
var statearr_32531_34931 = state_32476__$1;
(statearr_32531_34931[(2)] = inst_32428);

(statearr_32531_34931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (14))){
var inst_32446 = (state_32476[(19)]);
var state_32476__$1 = state_32476;
var statearr_32535_34932 = state_32476__$1;
(statearr_32535_34932[(2)] = inst_32446);

(statearr_32535_34932[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (26))){
var inst_32465 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
var statearr_32536_34933 = state_32476__$1;
(statearr_32536_34933[(2)] = inst_32465);

(statearr_32536_34933[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (16))){
var inst_32457 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
if(cljs.core.truth_(inst_32457)){
var statearr_32538_34941 = state_32476__$1;
(statearr_32538_34941[(1)] = (20));

} else {
var statearr_32541_34942 = state_32476__$1;
(statearr_32541_34942[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (10))){
var inst_32471 = (state_32476[(2)]);
var state_32476__$1 = state_32476;
var statearr_32545_34943 = state_32476__$1;
(statearr_32545_34943[(2)] = inst_32471);

(statearr_32545_34943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (18))){
var inst_32449 = (state_32476[(16)]);
var state_32476__$1 = state_32476;
var statearr_32547_34944 = state_32476__$1;
(statearr_32547_34944[(2)] = inst_32449);

(statearr_32547_34944[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32477 === (8))){
var inst_32425 = (state_32476[(7)]);
var inst_32437 = (inst_32425 == null);
var state_32476__$1 = state_32476;
if(cljs.core.truth_(inst_32437)){
var statearr_32548_34945 = state_32476__$1;
(statearr_32548_34945[(1)] = (11));

} else {
var statearr_32551_34946 = state_32476__$1;
(statearr_32551_34946[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__30171__auto__ = null;
var cljs$core$async$mix_$_state_machine__30171__auto____0 = (function (){
var statearr_32554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32554[(0)] = cljs$core$async$mix_$_state_machine__30171__auto__);

(statearr_32554[(1)] = (1));

return statearr_32554;
});
var cljs$core$async$mix_$_state_machine__30171__auto____1 = (function (state_32476){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_32476);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e32555){var ex__30174__auto__ = e32555;
var statearr_32557_34947 = state_32476;
(statearr_32557_34947[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_32476[(4)]))){
var statearr_32560_34951 = state_32476;
(statearr_32560_34951[(1)] = cljs.core.first((state_32476[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34952 = state_32476;
state_32476 = G__34952;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30171__auto__ = function(state_32476){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30171__auto____1.call(this,state_32476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30171__auto____0;
cljs$core$async$mix_$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30171__auto____1;
return cljs$core$async$mix_$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_32567 = f__30534__auto__();
(statearr_32567[(6)] = c__30533__auto___34898);

return statearr_32567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34953 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34953(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34954 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34954(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34955 = (function() {
var G__34956 = null;
var G__34956__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34956__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34956 = function(p,v){
switch(arguments.length){
case 1:
return G__34956__1.call(this,p);
case 2:
return G__34956__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34956.cljs$core$IFn$_invoke$arity$1 = G__34956__1;
G__34956.cljs$core$IFn$_invoke$arity$2 = G__34956__2;
return G__34956;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32625 = arguments.length;
switch (G__32625) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34955(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34955(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__32644 = arguments.length;
switch (G__32644) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__32635_SHARP_){
if(cljs.core.truth_((p1__32635_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32635_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32635_SHARP_.call(null,topic)))){
return p1__32635_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32635_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32667 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32667 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32668){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32668 = meta32668;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32669,meta32668__$1){
var self__ = this;
var _32669__$1 = this;
return (new cljs.core.async.t_cljs$core$async32667(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32668__$1));
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32669){
var self__ = this;
var _32669__$1 = this;
return self__.meta32668;
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async32667.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async32667.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta32668","meta32668",-2015257419,null)], null);
}));

(cljs.core.async.t_cljs$core$async32667.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32667.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32667");

(cljs.core.async.t_cljs$core$async32667.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async32667");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32667.
 */
cljs.core.async.__GT_t_cljs$core$async32667 = (function cljs$core$async$__GT_t_cljs$core$async32667(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32668){
return (new cljs.core.async.t_cljs$core$async32667(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32668));
});

}

return (new cljs.core.async.t_cljs$core$async32667(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30533__auto___34964 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_32822){
var state_val_32823 = (state_32822[(1)]);
if((state_val_32823 === (7))){
var inst_32816 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32830_34965 = state_32822__$1;
(statearr_32830_34965[(2)] = inst_32816);

(statearr_32830_34965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (20))){
var state_32822__$1 = state_32822;
var statearr_32836_34966 = state_32822__$1;
(statearr_32836_34966[(2)] = null);

(statearr_32836_34966[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (1))){
var state_32822__$1 = state_32822;
var statearr_32840_34967 = state_32822__$1;
(statearr_32840_34967[(2)] = null);

(statearr_32840_34967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (24))){
var inst_32794 = (state_32822[(7)]);
var inst_32808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32794);
var state_32822__$1 = state_32822;
var statearr_32845_34968 = state_32822__$1;
(statearr_32845_34968[(2)] = inst_32808);

(statearr_32845_34968[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (4))){
var inst_32708 = (state_32822[(8)]);
var inst_32708__$1 = (state_32822[(2)]);
var inst_32709 = (inst_32708__$1 == null);
var state_32822__$1 = (function (){var statearr_32849 = state_32822;
(statearr_32849[(8)] = inst_32708__$1);

return statearr_32849;
})();
if(cljs.core.truth_(inst_32709)){
var statearr_32852_34973 = state_32822__$1;
(statearr_32852_34973[(1)] = (5));

} else {
var statearr_32854_34974 = state_32822__$1;
(statearr_32854_34974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (15))){
var inst_32787 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32857_34975 = state_32822__$1;
(statearr_32857_34975[(2)] = inst_32787);

(statearr_32857_34975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (21))){
var inst_32813 = (state_32822[(2)]);
var state_32822__$1 = (function (){var statearr_32858 = state_32822;
(statearr_32858[(9)] = inst_32813);

return statearr_32858;
})();
var statearr_32861_34976 = state_32822__$1;
(statearr_32861_34976[(2)] = null);

(statearr_32861_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (13))){
var inst_32738 = (state_32822[(10)]);
var inst_32757 = cljs.core.chunked_seq_QMARK_(inst_32738);
var state_32822__$1 = state_32822;
if(inst_32757){
var statearr_32865_34981 = state_32822__$1;
(statearr_32865_34981[(1)] = (16));

} else {
var statearr_32866_34982 = state_32822__$1;
(statearr_32866_34982[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (22))){
var inst_32804 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32804)){
var statearr_32874_34983 = state_32822__$1;
(statearr_32874_34983[(1)] = (23));

} else {
var statearr_32876_34984 = state_32822__$1;
(statearr_32876_34984[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (6))){
var inst_32708 = (state_32822[(8)]);
var inst_32794 = (state_32822[(7)]);
var inst_32797 = (state_32822[(11)]);
var inst_32794__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32708) : topic_fn.call(null,inst_32708));
var inst_32796 = cljs.core.deref(mults);
var inst_32797__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32796,inst_32794__$1);
var state_32822__$1 = (function (){var statearr_32882 = state_32822;
(statearr_32882[(7)] = inst_32794__$1);

(statearr_32882[(11)] = inst_32797__$1);

return statearr_32882;
})();
if(cljs.core.truth_(inst_32797__$1)){
var statearr_32884_34985 = state_32822__$1;
(statearr_32884_34985[(1)] = (19));

} else {
var statearr_32885_34986 = state_32822__$1;
(statearr_32885_34986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (25))){
var inst_32810 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32893_34987 = state_32822__$1;
(statearr_32893_34987[(2)] = inst_32810);

(statearr_32893_34987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (17))){
var inst_32738 = (state_32822[(10)]);
var inst_32772 = cljs.core.first(inst_32738);
var inst_32776 = cljs.core.async.muxch_STAR_(inst_32772);
var inst_32777 = cljs.core.async.close_BANG_(inst_32776);
var inst_32781 = cljs.core.next(inst_32738);
var inst_32718 = inst_32781;
var inst_32719 = null;
var inst_32720 = (0);
var inst_32721 = (0);
var state_32822__$1 = (function (){var statearr_32919 = state_32822;
(statearr_32919[(12)] = inst_32777);

(statearr_32919[(13)] = inst_32718);

(statearr_32919[(14)] = inst_32719);

(statearr_32919[(15)] = inst_32720);

(statearr_32919[(16)] = inst_32721);

return statearr_32919;
})();
var statearr_32922_34989 = state_32822__$1;
(statearr_32922_34989[(2)] = null);

(statearr_32922_34989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (3))){
var inst_32818 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32822__$1,inst_32818);
} else {
if((state_val_32823 === (12))){
var inst_32789 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32925_34990 = state_32822__$1;
(statearr_32925_34990[(2)] = inst_32789);

(statearr_32925_34990[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (2))){
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32822__$1,(4),ch);
} else {
if((state_val_32823 === (23))){
var state_32822__$1 = state_32822;
var statearr_32929_34991 = state_32822__$1;
(statearr_32929_34991[(2)] = null);

(statearr_32929_34991[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (19))){
var inst_32797 = (state_32822[(11)]);
var inst_32708 = (state_32822[(8)]);
var inst_32802 = cljs.core.async.muxch_STAR_(inst_32797);
var state_32822__$1 = state_32822;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32822__$1,(22),inst_32802,inst_32708);
} else {
if((state_val_32823 === (11))){
var inst_32718 = (state_32822[(13)]);
var inst_32738 = (state_32822[(10)]);
var inst_32738__$1 = cljs.core.seq(inst_32718);
var state_32822__$1 = (function (){var statearr_32938 = state_32822;
(statearr_32938[(10)] = inst_32738__$1);

return statearr_32938;
})();
if(inst_32738__$1){
var statearr_32939_34993 = state_32822__$1;
(statearr_32939_34993[(1)] = (13));

} else {
var statearr_32942_34995 = state_32822__$1;
(statearr_32942_34995[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (9))){
var inst_32792 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32944_34996 = state_32822__$1;
(statearr_32944_34996[(2)] = inst_32792);

(statearr_32944_34996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (5))){
var inst_32715 = cljs.core.deref(mults);
var inst_32716 = cljs.core.vals(inst_32715);
var inst_32717 = cljs.core.seq(inst_32716);
var inst_32718 = inst_32717;
var inst_32719 = null;
var inst_32720 = (0);
var inst_32721 = (0);
var state_32822__$1 = (function (){var statearr_32947 = state_32822;
(statearr_32947[(13)] = inst_32718);

(statearr_32947[(14)] = inst_32719);

(statearr_32947[(15)] = inst_32720);

(statearr_32947[(16)] = inst_32721);

return statearr_32947;
})();
var statearr_32951_35001 = state_32822__$1;
(statearr_32951_35001[(2)] = null);

(statearr_32951_35001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (14))){
var state_32822__$1 = state_32822;
var statearr_32957_35003 = state_32822__$1;
(statearr_32957_35003[(2)] = null);

(statearr_32957_35003[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (16))){
var inst_32738 = (state_32822[(10)]);
var inst_32760 = cljs.core.chunk_first(inst_32738);
var inst_32762 = cljs.core.chunk_rest(inst_32738);
var inst_32764 = cljs.core.count(inst_32760);
var inst_32718 = inst_32762;
var inst_32719 = inst_32760;
var inst_32720 = inst_32764;
var inst_32721 = (0);
var state_32822__$1 = (function (){var statearr_32960 = state_32822;
(statearr_32960[(13)] = inst_32718);

(statearr_32960[(14)] = inst_32719);

(statearr_32960[(15)] = inst_32720);

(statearr_32960[(16)] = inst_32721);

return statearr_32960;
})();
var statearr_32963_35004 = state_32822__$1;
(statearr_32963_35004[(2)] = null);

(statearr_32963_35004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (10))){
var inst_32719 = (state_32822[(14)]);
var inst_32721 = (state_32822[(16)]);
var inst_32718 = (state_32822[(13)]);
var inst_32720 = (state_32822[(15)]);
var inst_32730 = cljs.core._nth(inst_32719,inst_32721);
var inst_32731 = cljs.core.async.muxch_STAR_(inst_32730);
var inst_32732 = cljs.core.async.close_BANG_(inst_32731);
var inst_32733 = (inst_32721 + (1));
var tmp32953 = inst_32719;
var tmp32954 = inst_32720;
var tmp32955 = inst_32718;
var inst_32718__$1 = tmp32955;
var inst_32719__$1 = tmp32953;
var inst_32720__$1 = tmp32954;
var inst_32721__$1 = inst_32733;
var state_32822__$1 = (function (){var statearr_32969 = state_32822;
(statearr_32969[(17)] = inst_32732);

(statearr_32969[(13)] = inst_32718__$1);

(statearr_32969[(14)] = inst_32719__$1);

(statearr_32969[(15)] = inst_32720__$1);

(statearr_32969[(16)] = inst_32721__$1);

return statearr_32969;
})();
var statearr_32972_35006 = state_32822__$1;
(statearr_32972_35006[(2)] = null);

(statearr_32972_35006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (18))){
var inst_32784 = (state_32822[(2)]);
var state_32822__$1 = state_32822;
var statearr_32974_35007 = state_32822__$1;
(statearr_32974_35007[(2)] = inst_32784);

(statearr_32974_35007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32823 === (8))){
var inst_32721 = (state_32822[(16)]);
var inst_32720 = (state_32822[(15)]);
var inst_32724 = (inst_32721 < inst_32720);
var inst_32725 = inst_32724;
var state_32822__$1 = state_32822;
if(cljs.core.truth_(inst_32725)){
var statearr_32977_35012 = state_32822__$1;
(statearr_32977_35012[(1)] = (10));

} else {
var statearr_32979_35013 = state_32822__$1;
(statearr_32979_35013[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_32981 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32981[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_32981[(1)] = (1));

return statearr_32981;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_32822){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_32822);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e32984){var ex__30174__auto__ = e32984;
var statearr_32986_35014 = state_32822;
(statearr_32986_35014[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_32822[(4)]))){
var statearr_32987_35015 = state_32822;
(statearr_32987_35015[(1)] = cljs.core.first((state_32822[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35016 = state_32822;
state_32822 = G__35016;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_32822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_32822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_32991 = f__30534__auto__();
(statearr_32991[(6)] = c__30533__auto___34964);

return statearr_32991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__32994 = arguments.length;
switch (G__32994) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33022 = arguments.length;
switch (G__33022) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33042 = arguments.length;
switch (G__33042) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__30533__auto___35027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33110){
var state_val_33111 = (state_33110[(1)]);
if((state_val_33111 === (7))){
var state_33110__$1 = state_33110;
var statearr_33116_35028 = state_33110__$1;
(statearr_33116_35028[(2)] = null);

(statearr_33116_35028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (1))){
var state_33110__$1 = state_33110;
var statearr_33117_35029 = state_33110__$1;
(statearr_33117_35029[(2)] = null);

(statearr_33117_35029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (4))){
var inst_33061 = (state_33110[(7)]);
var inst_33060 = (state_33110[(8)]);
var inst_33063 = (inst_33061 < inst_33060);
var state_33110__$1 = state_33110;
if(cljs.core.truth_(inst_33063)){
var statearr_33121_35030 = state_33110__$1;
(statearr_33121_35030[(1)] = (6));

} else {
var statearr_33123_35031 = state_33110__$1;
(statearr_33123_35031[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (15))){
var inst_33096 = (state_33110[(9)]);
var inst_33101 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33096);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33110__$1,(17),out,inst_33101);
} else {
if((state_val_33111 === (13))){
var inst_33096 = (state_33110[(9)]);
var inst_33096__$1 = (state_33110[(2)]);
var inst_33097 = cljs.core.some(cljs.core.nil_QMARK_,inst_33096__$1);
var state_33110__$1 = (function (){var statearr_33128 = state_33110;
(statearr_33128[(9)] = inst_33096__$1);

return statearr_33128;
})();
if(cljs.core.truth_(inst_33097)){
var statearr_33131_35033 = state_33110__$1;
(statearr_33131_35033[(1)] = (14));

} else {
var statearr_33132_35034 = state_33110__$1;
(statearr_33132_35034[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (6))){
var state_33110__$1 = state_33110;
var statearr_33133_35038 = state_33110__$1;
(statearr_33133_35038[(2)] = null);

(statearr_33133_35038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (17))){
var inst_33103 = (state_33110[(2)]);
var state_33110__$1 = (function (){var statearr_33140 = state_33110;
(statearr_33140[(10)] = inst_33103);

return statearr_33140;
})();
var statearr_33144_35039 = state_33110__$1;
(statearr_33144_35039[(2)] = null);

(statearr_33144_35039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (3))){
var inst_33108 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33110__$1,inst_33108);
} else {
if((state_val_33111 === (12))){
var _ = (function (){var statearr_33146 = state_33110;
(statearr_33146[(4)] = cljs.core.rest((state_33110[(4)])));

return statearr_33146;
})();
var state_33110__$1 = state_33110;
var ex33135 = (state_33110__$1[(2)]);
var statearr_33151_35040 = state_33110__$1;
(statearr_33151_35040[(5)] = ex33135);


if((ex33135 instanceof Object)){
var statearr_33156_35041 = state_33110__$1;
(statearr_33156_35041[(1)] = (11));

(statearr_33156_35041[(5)] = null);

} else {
throw ex33135;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (2))){
var inst_33059 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33060 = cnt;
var inst_33061 = (0);
var state_33110__$1 = (function (){var statearr_33166 = state_33110;
(statearr_33166[(11)] = inst_33059);

(statearr_33166[(8)] = inst_33060);

(statearr_33166[(7)] = inst_33061);

return statearr_33166;
})();
var statearr_33167_35043 = state_33110__$1;
(statearr_33167_35043[(2)] = null);

(statearr_33167_35043[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (11))){
var inst_33075 = (state_33110[(2)]);
var inst_33076 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33110__$1 = (function (){var statearr_33171 = state_33110;
(statearr_33171[(12)] = inst_33075);

return statearr_33171;
})();
var statearr_33177_35044 = state_33110__$1;
(statearr_33177_35044[(2)] = inst_33076);

(statearr_33177_35044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (9))){
var inst_33061 = (state_33110[(7)]);
var _ = (function (){var statearr_33178 = state_33110;
(statearr_33178[(4)] = cljs.core.cons((12),(state_33110[(4)])));

return statearr_33178;
})();
var inst_33082 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33061) : chs__$1.call(null,inst_33061));
var inst_33083 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33061) : done.call(null,inst_33061));
var inst_33084 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33082,inst_33083);
var ___$1 = (function (){var statearr_33180 = state_33110;
(statearr_33180[(4)] = cljs.core.rest((state_33110[(4)])));

return statearr_33180;
})();
var state_33110__$1 = state_33110;
var statearr_33182_35045 = state_33110__$1;
(statearr_33182_35045[(2)] = inst_33084);

(statearr_33182_35045[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (5))){
var inst_33094 = (state_33110[(2)]);
var state_33110__$1 = (function (){var statearr_33183 = state_33110;
(statearr_33183[(13)] = inst_33094);

return statearr_33183;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33110__$1,(13),dchan);
} else {
if((state_val_33111 === (14))){
var inst_33099 = cljs.core.async.close_BANG_(out);
var state_33110__$1 = state_33110;
var statearr_33184_35046 = state_33110__$1;
(statearr_33184_35046[(2)] = inst_33099);

(statearr_33184_35046[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (16))){
var inst_33106 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33185_35048 = state_33110__$1;
(statearr_33185_35048[(2)] = inst_33106);

(statearr_33185_35048[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (10))){
var inst_33061 = (state_33110[(7)]);
var inst_33087 = (state_33110[(2)]);
var inst_33088 = (inst_33061 + (1));
var inst_33061__$1 = inst_33088;
var state_33110__$1 = (function (){var statearr_33190 = state_33110;
(statearr_33190[(14)] = inst_33087);

(statearr_33190[(7)] = inst_33061__$1);

return statearr_33190;
})();
var statearr_33194_35049 = state_33110__$1;
(statearr_33194_35049[(2)] = null);

(statearr_33194_35049[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33111 === (8))){
var inst_33092 = (state_33110[(2)]);
var state_33110__$1 = state_33110;
var statearr_33196_35050 = state_33110__$1;
(statearr_33196_35050[(2)] = inst_33092);

(statearr_33196_35050[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_33197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33197[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_33197[(1)] = (1));

return statearr_33197;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_33110){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33110);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e33202){var ex__30174__auto__ = e33202;
var statearr_33203_35054 = state_33110;
(statearr_33203_35054[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33110[(4)]))){
var statearr_33204_35055 = state_33110;
(statearr_33204_35055[(1)] = cljs.core.first((state_33110[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35056 = state_33110;
state_33110 = G__35056;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_33110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_33110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_33209 = f__30534__auto__();
(statearr_33209[(6)] = c__30533__auto___35027);

return statearr_33209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33217 = arguments.length;
switch (G__33217) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33256){
var state_val_33257 = (state_33256[(1)]);
if((state_val_33257 === (7))){
var inst_33229 = (state_33256[(7)]);
var inst_33230 = (state_33256[(8)]);
var inst_33229__$1 = (state_33256[(2)]);
var inst_33230__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33229__$1,(0),null);
var inst_33231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33229__$1,(1),null);
var inst_33232 = (inst_33230__$1 == null);
var state_33256__$1 = (function (){var statearr_33272 = state_33256;
(statearr_33272[(7)] = inst_33229__$1);

(statearr_33272[(8)] = inst_33230__$1);

(statearr_33272[(9)] = inst_33231);

return statearr_33272;
})();
if(cljs.core.truth_(inst_33232)){
var statearr_33273_35059 = state_33256__$1;
(statearr_33273_35059[(1)] = (8));

} else {
var statearr_33274_35060 = state_33256__$1;
(statearr_33274_35060[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (1))){
var inst_33219 = cljs.core.vec(chs);
var inst_33220 = inst_33219;
var state_33256__$1 = (function (){var statearr_33278 = state_33256;
(statearr_33278[(10)] = inst_33220);

return statearr_33278;
})();
var statearr_33280_35061 = state_33256__$1;
(statearr_33280_35061[(2)] = null);

(statearr_33280_35061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (4))){
var inst_33220 = (state_33256[(10)]);
var state_33256__$1 = state_33256;
return cljs.core.async.ioc_alts_BANG_(state_33256__$1,(7),inst_33220);
} else {
if((state_val_33257 === (6))){
var inst_33250 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33285_35062 = state_33256__$1;
(statearr_33285_35062[(2)] = inst_33250);

(statearr_33285_35062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (3))){
var inst_33252 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33256__$1,inst_33252);
} else {
if((state_val_33257 === (2))){
var inst_33220 = (state_33256[(10)]);
var inst_33222 = cljs.core.count(inst_33220);
var inst_33223 = (inst_33222 > (0));
var state_33256__$1 = state_33256;
if(cljs.core.truth_(inst_33223)){
var statearr_33291_35063 = state_33256__$1;
(statearr_33291_35063[(1)] = (4));

} else {
var statearr_33294_35064 = state_33256__$1;
(statearr_33294_35064[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (11))){
var inst_33220 = (state_33256[(10)]);
var inst_33243 = (state_33256[(2)]);
var tmp33289 = inst_33220;
var inst_33220__$1 = tmp33289;
var state_33256__$1 = (function (){var statearr_33298 = state_33256;
(statearr_33298[(11)] = inst_33243);

(statearr_33298[(10)] = inst_33220__$1);

return statearr_33298;
})();
var statearr_33299_35065 = state_33256__$1;
(statearr_33299_35065[(2)] = null);

(statearr_33299_35065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (9))){
var inst_33230 = (state_33256[(8)]);
var state_33256__$1 = state_33256;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33256__$1,(11),out,inst_33230);
} else {
if((state_val_33257 === (5))){
var inst_33248 = cljs.core.async.close_BANG_(out);
var state_33256__$1 = state_33256;
var statearr_33311_35066 = state_33256__$1;
(statearr_33311_35066[(2)] = inst_33248);

(statearr_33311_35066[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (10))){
var inst_33246 = (state_33256[(2)]);
var state_33256__$1 = state_33256;
var statearr_33314_35068 = state_33256__$1;
(statearr_33314_35068[(2)] = inst_33246);

(statearr_33314_35068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33257 === (8))){
var inst_33220 = (state_33256[(10)]);
var inst_33229 = (state_33256[(7)]);
var inst_33230 = (state_33256[(8)]);
var inst_33231 = (state_33256[(9)]);
var inst_33238 = (function (){var cs = inst_33220;
var vec__33225 = inst_33229;
var v = inst_33230;
var c = inst_33231;
return (function (p1__33210_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33210_SHARP_);
});
})();
var inst_33239 = cljs.core.filterv(inst_33238,inst_33220);
var inst_33220__$1 = inst_33239;
var state_33256__$1 = (function (){var statearr_33322 = state_33256;
(statearr_33322[(10)] = inst_33220__$1);

return statearr_33322;
})();
var statearr_33323_35072 = state_33256__$1;
(statearr_33323_35072[(2)] = null);

(statearr_33323_35072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_33326 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33326[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_33326[(1)] = (1));

return statearr_33326;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_33256){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33256);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e33327){var ex__30174__auto__ = e33327;
var statearr_33328_35077 = state_33256;
(statearr_33328_35077[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33256[(4)]))){
var statearr_33329_35078 = state_33256;
(statearr_33329_35078[(1)] = cljs.core.first((state_33256[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35079 = state_33256;
state_33256 = G__35079;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_33256){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_33256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_33330 = f__30534__auto__();
(statearr_33330[(6)] = c__30533__auto___35058);

return statearr_33330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35086 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33382){
var state_val_33383 = (state_33382[(1)]);
if((state_val_33383 === (7))){
var inst_33364 = (state_33382[(7)]);
var inst_33364__$1 = (state_33382[(2)]);
var inst_33365 = (inst_33364__$1 == null);
var inst_33366 = cljs.core.not(inst_33365);
var state_33382__$1 = (function (){var statearr_33384 = state_33382;
(statearr_33384[(7)] = inst_33364__$1);

return statearr_33384;
})();
if(inst_33366){
var statearr_33385_35087 = state_33382__$1;
(statearr_33385_35087[(1)] = (8));

} else {
var statearr_33386_35088 = state_33382__$1;
(statearr_33386_35088[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (1))){
var inst_33355 = (0);
var state_33382__$1 = (function (){var statearr_33390 = state_33382;
(statearr_33390[(8)] = inst_33355);

return statearr_33390;
})();
var statearr_33391_35089 = state_33382__$1;
(statearr_33391_35089[(2)] = null);

(statearr_33391_35089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (4))){
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33382__$1,(7),ch);
} else {
if((state_val_33383 === (6))){
var inst_33377 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33392_35090 = state_33382__$1;
(statearr_33392_35090[(2)] = inst_33377);

(statearr_33392_35090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (3))){
var inst_33379 = (state_33382[(2)]);
var inst_33380 = cljs.core.async.close_BANG_(out);
var state_33382__$1 = (function (){var statearr_33393 = state_33382;
(statearr_33393[(9)] = inst_33379);

return statearr_33393;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33382__$1,inst_33380);
} else {
if((state_val_33383 === (2))){
var inst_33355 = (state_33382[(8)]);
var inst_33357 = (inst_33355 < n);
var state_33382__$1 = state_33382;
if(cljs.core.truth_(inst_33357)){
var statearr_33394_35091 = state_33382__$1;
(statearr_33394_35091[(1)] = (4));

} else {
var statearr_33395_35092 = state_33382__$1;
(statearr_33395_35092[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (11))){
var inst_33355 = (state_33382[(8)]);
var inst_33369 = (state_33382[(2)]);
var inst_33370 = (inst_33355 + (1));
var inst_33355__$1 = inst_33370;
var state_33382__$1 = (function (){var statearr_33396 = state_33382;
(statearr_33396[(10)] = inst_33369);

(statearr_33396[(8)] = inst_33355__$1);

return statearr_33396;
})();
var statearr_33397_35093 = state_33382__$1;
(statearr_33397_35093[(2)] = null);

(statearr_33397_35093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (9))){
var state_33382__$1 = state_33382;
var statearr_33398_35094 = state_33382__$1;
(statearr_33398_35094[(2)] = null);

(statearr_33398_35094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (5))){
var state_33382__$1 = state_33382;
var statearr_33400_35095 = state_33382__$1;
(statearr_33400_35095[(2)] = null);

(statearr_33400_35095[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (10))){
var inst_33374 = (state_33382[(2)]);
var state_33382__$1 = state_33382;
var statearr_33401_35096 = state_33382__$1;
(statearr_33401_35096[(2)] = inst_33374);

(statearr_33401_35096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33383 === (8))){
var inst_33364 = (state_33382[(7)]);
var state_33382__$1 = state_33382;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33382__$1,(11),out,inst_33364);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_33402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33402[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_33402[(1)] = (1));

return statearr_33402;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_33382){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33382);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e33405){var ex__30174__auto__ = e33405;
var statearr_33406_35097 = state_33382;
(statearr_33406_35097[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33382[(4)]))){
var statearr_33407_35098 = state_33382;
(statearr_33407_35098[(1)] = cljs.core.first((state_33382[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35099 = state_33382;
state_33382 = G__35099;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_33382){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_33382);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_33408 = f__30534__auto__();
(statearr_33408[(6)] = c__30533__auto___35086);

return statearr_33408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33426 = (function (f,ch,meta33427){
this.f = f;
this.ch = ch;
this.meta33427 = meta33427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33428,meta33427__$1){
var self__ = this;
var _33428__$1 = this;
return (new cljs.core.async.t_cljs$core$async33426(self__.f,self__.ch,meta33427__$1));
}));

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33428){
var self__ = this;
var _33428__$1 = this;
return self__.meta33427;
}));

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33438 = (function (f,ch,meta33427,_,fn1,meta33439){
this.f = f;
this.ch = ch;
this.meta33427 = meta33427;
this._ = _;
this.fn1 = fn1;
this.meta33439 = meta33439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33440,meta33439__$1){
var self__ = this;
var _33440__$1 = this;
return (new cljs.core.async.t_cljs$core$async33438(self__.f,self__.ch,self__.meta33427,self__._,self__.fn1,meta33439__$1));
}));

(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33440){
var self__ = this;
var _33440__$1 = this;
return self__.meta33439;
}));

(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33438.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33413_SHARP_){
var G__33452 = (((p1__33413_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33413_SHARP_) : self__.f.call(null,p1__33413_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33452) : f1.call(null,G__33452));
});
}));

(cljs.core.async.t_cljs$core$async33438.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33427","meta33427",1606476895,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33426","cljs.core.async/t_cljs$core$async33426",1492309080,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33439","meta33439",907621236,null)], null);
}));

(cljs.core.async.t_cljs$core$async33438.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33438.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33438");

(cljs.core.async.t_cljs$core$async33438.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33438");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33438.
 */
cljs.core.async.__GT_t_cljs$core$async33438 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33438(f__$1,ch__$1,meta33427__$1,___$2,fn1__$1,meta33439){
return (new cljs.core.async.t_cljs$core$async33438(f__$1,ch__$1,meta33427__$1,___$2,fn1__$1,meta33439));
});

}

return (new cljs.core.async.t_cljs$core$async33438(self__.f,self__.ch,self__.meta33427,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33473 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33473) : self__.f.call(null,G__33473));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33427","meta33427",1606476895,null)], null);
}));

(cljs.core.async.t_cljs$core$async33426.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33426");

(cljs.core.async.t_cljs$core$async33426.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33426");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33426.
 */
cljs.core.async.__GT_t_cljs$core$async33426 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33426(f__$1,ch__$1,meta33427){
return (new cljs.core.async.t_cljs$core$async33426(f__$1,ch__$1,meta33427));
});

}

return (new cljs.core.async.t_cljs$core$async33426(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33506 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33506 = (function (f,ch,meta33507){
this.f = f;
this.ch = ch;
this.meta33507 = meta33507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33508,meta33507__$1){
var self__ = this;
var _33508__$1 = this;
return (new cljs.core.async.t_cljs$core$async33506(self__.f,self__.ch,meta33507__$1));
}));

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33508){
var self__ = this;
var _33508__$1 = this;
return self__.meta33507;
}));

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33506.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33507","meta33507",1988839480,null)], null);
}));

(cljs.core.async.t_cljs$core$async33506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33506");

(cljs.core.async.t_cljs$core$async33506.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33506.
 */
cljs.core.async.__GT_t_cljs$core$async33506 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33506(f__$1,ch__$1,meta33507){
return (new cljs.core.async.t_cljs$core$async33506(f__$1,ch__$1,meta33507));
});

}

return (new cljs.core.async.t_cljs$core$async33506(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33551 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33551 = (function (p,ch,meta33552){
this.p = p;
this.ch = ch;
this.meta33552 = meta33552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33553,meta33552__$1){
var self__ = this;
var _33553__$1 = this;
return (new cljs.core.async.t_cljs$core$async33551(self__.p,self__.ch,meta33552__$1));
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33553){
var self__ = this;
var _33553__$1 = this;
return self__.meta33552;
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33551.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33552","meta33552",1247034604,null)], null);
}));

(cljs.core.async.t_cljs$core$async33551.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33551");

(cljs.core.async.t_cljs$core$async33551.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33551");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33551.
 */
cljs.core.async.__GT_t_cljs$core$async33551 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33551(p__$1,ch__$1,meta33552){
return (new cljs.core.async.t_cljs$core$async33551(p__$1,ch__$1,meta33552));
});

}

return (new cljs.core.async.t_cljs$core$async33551(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35128 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33616){
var state_val_33617 = (state_33616[(1)]);
if((state_val_33617 === (7))){
var inst_33612 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33622_35130 = state_33616__$1;
(statearr_33622_35130[(2)] = inst_33612);

(statearr_33622_35130[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (1))){
var state_33616__$1 = state_33616;
var statearr_33625_35131 = state_33616__$1;
(statearr_33625_35131[(2)] = null);

(statearr_33625_35131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (4))){
var inst_33598 = (state_33616[(7)]);
var inst_33598__$1 = (state_33616[(2)]);
var inst_33599 = (inst_33598__$1 == null);
var state_33616__$1 = (function (){var statearr_33626 = state_33616;
(statearr_33626[(7)] = inst_33598__$1);

return statearr_33626;
})();
if(cljs.core.truth_(inst_33599)){
var statearr_33628_35132 = state_33616__$1;
(statearr_33628_35132[(1)] = (5));

} else {
var statearr_33631_35133 = state_33616__$1;
(statearr_33631_35133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (6))){
var inst_33598 = (state_33616[(7)]);
var inst_33603 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33598) : p.call(null,inst_33598));
var state_33616__$1 = state_33616;
if(cljs.core.truth_(inst_33603)){
var statearr_33632_35137 = state_33616__$1;
(statearr_33632_35137[(1)] = (8));

} else {
var statearr_33635_35138 = state_33616__$1;
(statearr_33635_35138[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (3))){
var inst_33614 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33616__$1,inst_33614);
} else {
if((state_val_33617 === (2))){
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33616__$1,(4),ch);
} else {
if((state_val_33617 === (11))){
var inst_33606 = (state_33616[(2)]);
var state_33616__$1 = state_33616;
var statearr_33640_35145 = state_33616__$1;
(statearr_33640_35145[(2)] = inst_33606);

(statearr_33640_35145[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (9))){
var state_33616__$1 = state_33616;
var statearr_33641_35146 = state_33616__$1;
(statearr_33641_35146[(2)] = null);

(statearr_33641_35146[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (5))){
var inst_33601 = cljs.core.async.close_BANG_(out);
var state_33616__$1 = state_33616;
var statearr_33642_35153 = state_33616__$1;
(statearr_33642_35153[(2)] = inst_33601);

(statearr_33642_35153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (10))){
var inst_33609 = (state_33616[(2)]);
var state_33616__$1 = (function (){var statearr_33648 = state_33616;
(statearr_33648[(8)] = inst_33609);

return statearr_33648;
})();
var statearr_33649_35154 = state_33616__$1;
(statearr_33649_35154[(2)] = null);

(statearr_33649_35154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33617 === (8))){
var inst_33598 = (state_33616[(7)]);
var state_33616__$1 = state_33616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33616__$1,(11),out,inst_33598);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_33657 = [null,null,null,null,null,null,null,null,null];
(statearr_33657[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_33657[(1)] = (1));

return statearr_33657;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_33616){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33616);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e33660){var ex__30174__auto__ = e33660;
var statearr_33662_35155 = state_33616;
(statearr_33662_35155[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33616[(4)]))){
var statearr_33663_35156 = state_33616;
(statearr_33663_35156[(1)] = cljs.core.first((state_33616[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35157 = state_33616;
state_33616 = G__35157;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_33616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_33616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_33668 = f__30534__auto__();
(statearr_33668[(6)] = c__30533__auto___35128);

return statearr_33668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33676 = arguments.length;
switch (G__33676) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30533__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33761){
var state_val_33762 = (state_33761[(1)]);
if((state_val_33762 === (7))){
var inst_33755 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33773_35159 = state_33761__$1;
(statearr_33773_35159[(2)] = inst_33755);

(statearr_33773_35159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (20))){
var inst_33716 = (state_33761[(7)]);
var inst_33731 = (state_33761[(2)]);
var inst_33732 = cljs.core.next(inst_33716);
var inst_33702 = inst_33732;
var inst_33703 = null;
var inst_33704 = (0);
var inst_33705 = (0);
var state_33761__$1 = (function (){var statearr_33774 = state_33761;
(statearr_33774[(8)] = inst_33731);

(statearr_33774[(9)] = inst_33702);

(statearr_33774[(10)] = inst_33703);

(statearr_33774[(11)] = inst_33704);

(statearr_33774[(12)] = inst_33705);

return statearr_33774;
})();
var statearr_33779_35166 = state_33761__$1;
(statearr_33779_35166[(2)] = null);

(statearr_33779_35166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (1))){
var state_33761__$1 = state_33761;
var statearr_33782_35168 = state_33761__$1;
(statearr_33782_35168[(2)] = null);

(statearr_33782_35168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (4))){
var inst_33691 = (state_33761[(13)]);
var inst_33691__$1 = (state_33761[(2)]);
var inst_33692 = (inst_33691__$1 == null);
var state_33761__$1 = (function (){var statearr_33787 = state_33761;
(statearr_33787[(13)] = inst_33691__$1);

return statearr_33787;
})();
if(cljs.core.truth_(inst_33692)){
var statearr_33789_35169 = state_33761__$1;
(statearr_33789_35169[(1)] = (5));

} else {
var statearr_33790_35170 = state_33761__$1;
(statearr_33790_35170[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (15))){
var state_33761__$1 = state_33761;
var statearr_33796_35171 = state_33761__$1;
(statearr_33796_35171[(2)] = null);

(statearr_33796_35171[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (21))){
var state_33761__$1 = state_33761;
var statearr_33797_35172 = state_33761__$1;
(statearr_33797_35172[(2)] = null);

(statearr_33797_35172[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (13))){
var inst_33705 = (state_33761[(12)]);
var inst_33702 = (state_33761[(9)]);
var inst_33703 = (state_33761[(10)]);
var inst_33704 = (state_33761[(11)]);
var inst_33712 = (state_33761[(2)]);
var inst_33713 = (inst_33705 + (1));
var tmp33791 = inst_33704;
var tmp33792 = inst_33702;
var tmp33793 = inst_33703;
var inst_33702__$1 = tmp33792;
var inst_33703__$1 = tmp33793;
var inst_33704__$1 = tmp33791;
var inst_33705__$1 = inst_33713;
var state_33761__$1 = (function (){var statearr_33803 = state_33761;
(statearr_33803[(14)] = inst_33712);

(statearr_33803[(9)] = inst_33702__$1);

(statearr_33803[(10)] = inst_33703__$1);

(statearr_33803[(11)] = inst_33704__$1);

(statearr_33803[(12)] = inst_33705__$1);

return statearr_33803;
})();
var statearr_33807_35174 = state_33761__$1;
(statearr_33807_35174[(2)] = null);

(statearr_33807_35174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (22))){
var state_33761__$1 = state_33761;
var statearr_33811_35175 = state_33761__$1;
(statearr_33811_35175[(2)] = null);

(statearr_33811_35175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (6))){
var inst_33691 = (state_33761[(13)]);
var inst_33700 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33691) : f.call(null,inst_33691));
var inst_33701 = cljs.core.seq(inst_33700);
var inst_33702 = inst_33701;
var inst_33703 = null;
var inst_33704 = (0);
var inst_33705 = (0);
var state_33761__$1 = (function (){var statearr_33816 = state_33761;
(statearr_33816[(9)] = inst_33702);

(statearr_33816[(10)] = inst_33703);

(statearr_33816[(11)] = inst_33704);

(statearr_33816[(12)] = inst_33705);

return statearr_33816;
})();
var statearr_33822_35182 = state_33761__$1;
(statearr_33822_35182[(2)] = null);

(statearr_33822_35182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (17))){
var inst_33716 = (state_33761[(7)]);
var inst_33724 = cljs.core.chunk_first(inst_33716);
var inst_33725 = cljs.core.chunk_rest(inst_33716);
var inst_33726 = cljs.core.count(inst_33724);
var inst_33702 = inst_33725;
var inst_33703 = inst_33724;
var inst_33704 = inst_33726;
var inst_33705 = (0);
var state_33761__$1 = (function (){var statearr_33831 = state_33761;
(statearr_33831[(9)] = inst_33702);

(statearr_33831[(10)] = inst_33703);

(statearr_33831[(11)] = inst_33704);

(statearr_33831[(12)] = inst_33705);

return statearr_33831;
})();
var statearr_33833_35183 = state_33761__$1;
(statearr_33833_35183[(2)] = null);

(statearr_33833_35183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (3))){
var inst_33757 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33761__$1,inst_33757);
} else {
if((state_val_33762 === (12))){
var inst_33742 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33840_35184 = state_33761__$1;
(statearr_33840_35184[(2)] = inst_33742);

(statearr_33840_35184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (2))){
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33761__$1,(4),in$);
} else {
if((state_val_33762 === (23))){
var inst_33753 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33851_35186 = state_33761__$1;
(statearr_33851_35186[(2)] = inst_33753);

(statearr_33851_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (19))){
var inst_33737 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33857_35187 = state_33761__$1;
(statearr_33857_35187[(2)] = inst_33737);

(statearr_33857_35187[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (11))){
var inst_33702 = (state_33761[(9)]);
var inst_33716 = (state_33761[(7)]);
var inst_33716__$1 = cljs.core.seq(inst_33702);
var state_33761__$1 = (function (){var statearr_33861 = state_33761;
(statearr_33861[(7)] = inst_33716__$1);

return statearr_33861;
})();
if(inst_33716__$1){
var statearr_33862_35188 = state_33761__$1;
(statearr_33862_35188[(1)] = (14));

} else {
var statearr_33863_35189 = state_33761__$1;
(statearr_33863_35189[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (9))){
var inst_33745 = (state_33761[(2)]);
var inst_33746 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33761__$1 = (function (){var statearr_33864 = state_33761;
(statearr_33864[(15)] = inst_33745);

return statearr_33864;
})();
if(cljs.core.truth_(inst_33746)){
var statearr_33866_35191 = state_33761__$1;
(statearr_33866_35191[(1)] = (21));

} else {
var statearr_33867_35192 = state_33761__$1;
(statearr_33867_35192[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (5))){
var inst_33694 = cljs.core.async.close_BANG_(out);
var state_33761__$1 = state_33761;
var statearr_33869_35193 = state_33761__$1;
(statearr_33869_35193[(2)] = inst_33694);

(statearr_33869_35193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (14))){
var inst_33716 = (state_33761[(7)]);
var inst_33722 = cljs.core.chunked_seq_QMARK_(inst_33716);
var state_33761__$1 = state_33761;
if(inst_33722){
var statearr_33873_35194 = state_33761__$1;
(statearr_33873_35194[(1)] = (17));

} else {
var statearr_33874_35195 = state_33761__$1;
(statearr_33874_35195[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (16))){
var inst_33740 = (state_33761[(2)]);
var state_33761__$1 = state_33761;
var statearr_33880_35202 = state_33761__$1;
(statearr_33880_35202[(2)] = inst_33740);

(statearr_33880_35202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33762 === (10))){
var inst_33703 = (state_33761[(10)]);
var inst_33705 = (state_33761[(12)]);
var inst_33710 = cljs.core._nth(inst_33703,inst_33705);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33761__$1,(13),out,inst_33710);
} else {
if((state_val_33762 === (18))){
var inst_33716 = (state_33761[(7)]);
var inst_33729 = cljs.core.first(inst_33716);
var state_33761__$1 = state_33761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33761__$1,(20),out,inst_33729);
} else {
if((state_val_33762 === (8))){
var inst_33705 = (state_33761[(12)]);
var inst_33704 = (state_33761[(11)]);
var inst_33707 = (inst_33705 < inst_33704);
var inst_33708 = inst_33707;
var state_33761__$1 = state_33761;
if(cljs.core.truth_(inst_33708)){
var statearr_33890_35203 = state_33761__$1;
(statearr_33890_35203[(1)] = (10));

} else {
var statearr_33892_35205 = state_33761__$1;
(statearr_33892_35205[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____0 = (function (){
var statearr_33898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33898[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__);

(statearr_33898[(1)] = (1));

return statearr_33898;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____1 = (function (state_33761){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33761);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e33899){var ex__30174__auto__ = e33899;
var statearr_33901_35208 = state_33761;
(statearr_33901_35208[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33761[(4)]))){
var statearr_33904_35209 = state_33761;
(statearr_33904_35209[(1)] = cljs.core.first((state_33761[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35210 = state_33761;
state_33761 = G__35210;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__ = function(state_33761){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____1.call(this,state_33761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30171__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_33905 = f__30534__auto__();
(statearr_33905[(6)] = c__30533__auto__);

return statearr_33905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

return c__30533__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33907 = arguments.length;
switch (G__33907) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33911 = arguments.length;
switch (G__33911) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33921 = arguments.length;
switch (G__33921) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35219 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_33958){
var state_val_33959 = (state_33958[(1)]);
if((state_val_33959 === (7))){
var inst_33950 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_33964_35221 = state_33958__$1;
(statearr_33964_35221[(2)] = inst_33950);

(statearr_33964_35221[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (1))){
var inst_33924 = null;
var state_33958__$1 = (function (){var statearr_33972 = state_33958;
(statearr_33972[(7)] = inst_33924);

return statearr_33972;
})();
var statearr_33973_35224 = state_33958__$1;
(statearr_33973_35224[(2)] = null);

(statearr_33973_35224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (4))){
var inst_33933 = (state_33958[(8)]);
var inst_33933__$1 = (state_33958[(2)]);
var inst_33934 = (inst_33933__$1 == null);
var inst_33935 = cljs.core.not(inst_33934);
var state_33958__$1 = (function (){var statearr_33981 = state_33958;
(statearr_33981[(8)] = inst_33933__$1);

return statearr_33981;
})();
if(inst_33935){
var statearr_33986_35225 = state_33958__$1;
(statearr_33986_35225[(1)] = (5));

} else {
var statearr_33990_35226 = state_33958__$1;
(statearr_33990_35226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (6))){
var state_33958__$1 = state_33958;
var statearr_33995_35227 = state_33958__$1;
(statearr_33995_35227[(2)] = null);

(statearr_33995_35227[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (3))){
var inst_33955 = (state_33958[(2)]);
var inst_33956 = cljs.core.async.close_BANG_(out);
var state_33958__$1 = (function (){var statearr_34000 = state_33958;
(statearr_34000[(9)] = inst_33955);

return statearr_34000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33958__$1,inst_33956);
} else {
if((state_val_33959 === (2))){
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33958__$1,(4),ch);
} else {
if((state_val_33959 === (11))){
var inst_33933 = (state_33958[(8)]);
var inst_33943 = (state_33958[(2)]);
var inst_33924 = inst_33933;
var state_33958__$1 = (function (){var statearr_34013 = state_33958;
(statearr_34013[(10)] = inst_33943);

(statearr_34013[(7)] = inst_33924);

return statearr_34013;
})();
var statearr_34015_35228 = state_33958__$1;
(statearr_34015_35228[(2)] = null);

(statearr_34015_35228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (9))){
var inst_33933 = (state_33958[(8)]);
var state_33958__$1 = state_33958;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33958__$1,(11),out,inst_33933);
} else {
if((state_val_33959 === (5))){
var inst_33933 = (state_33958[(8)]);
var inst_33924 = (state_33958[(7)]);
var inst_33938 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33933,inst_33924);
var state_33958__$1 = state_33958;
if(inst_33938){
var statearr_34022_35229 = state_33958__$1;
(statearr_34022_35229[(1)] = (8));

} else {
var statearr_34023_35230 = state_33958__$1;
(statearr_34023_35230[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (10))){
var inst_33946 = (state_33958[(2)]);
var state_33958__$1 = state_33958;
var statearr_34024_35231 = state_33958__$1;
(statearr_34024_35231[(2)] = inst_33946);

(statearr_34024_35231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33959 === (8))){
var inst_33924 = (state_33958[(7)]);
var tmp34020 = inst_33924;
var inst_33924__$1 = tmp34020;
var state_33958__$1 = (function (){var statearr_34025 = state_33958;
(statearr_34025[(7)] = inst_33924__$1);

return statearr_34025;
})();
var statearr_34026_35234 = state_33958__$1;
(statearr_34026_35234[(2)] = null);

(statearr_34026_35234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_34031 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34031[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_34031[(1)] = (1));

return statearr_34031;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_33958){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_33958);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e34032){var ex__30174__auto__ = e34032;
var statearr_34033_35235 = state_33958;
(statearr_34033_35235[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_33958[(4)]))){
var statearr_34034_35236 = state_33958;
(statearr_34034_35236[(1)] = cljs.core.first((state_33958[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35237 = state_33958;
state_33958 = G__35237;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_33958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_33958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_34035 = f__30534__auto__();
(statearr_34035[(6)] = c__30533__auto___35219);

return statearr_34035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34037 = arguments.length;
switch (G__34037) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_34084){
var state_val_34085 = (state_34084[(1)]);
if((state_val_34085 === (7))){
var inst_34080 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34087_35240 = state_34084__$1;
(statearr_34087_35240[(2)] = inst_34080);

(statearr_34087_35240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (1))){
var inst_34045 = (new Array(n));
var inst_34046 = inst_34045;
var inst_34047 = (0);
var state_34084__$1 = (function (){var statearr_34088 = state_34084;
(statearr_34088[(7)] = inst_34046);

(statearr_34088[(8)] = inst_34047);

return statearr_34088;
})();
var statearr_34089_35247 = state_34084__$1;
(statearr_34089_35247[(2)] = null);

(statearr_34089_35247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (4))){
var inst_34050 = (state_34084[(9)]);
var inst_34050__$1 = (state_34084[(2)]);
var inst_34051 = (inst_34050__$1 == null);
var inst_34052 = cljs.core.not(inst_34051);
var state_34084__$1 = (function (){var statearr_34093 = state_34084;
(statearr_34093[(9)] = inst_34050__$1);

return statearr_34093;
})();
if(inst_34052){
var statearr_34094_35248 = state_34084__$1;
(statearr_34094_35248[(1)] = (5));

} else {
var statearr_34095_35249 = state_34084__$1;
(statearr_34095_35249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (15))){
var inst_34074 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34096_35250 = state_34084__$1;
(statearr_34096_35250[(2)] = inst_34074);

(statearr_34096_35250[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (13))){
var state_34084__$1 = state_34084;
var statearr_34099_35251 = state_34084__$1;
(statearr_34099_35251[(2)] = null);

(statearr_34099_35251[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (6))){
var inst_34047 = (state_34084[(8)]);
var inst_34070 = (inst_34047 > (0));
var state_34084__$1 = state_34084;
if(cljs.core.truth_(inst_34070)){
var statearr_34101_35256 = state_34084__$1;
(statearr_34101_35256[(1)] = (12));

} else {
var statearr_34102_35257 = state_34084__$1;
(statearr_34102_35257[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (3))){
var inst_34082 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34084__$1,inst_34082);
} else {
if((state_val_34085 === (12))){
var inst_34046 = (state_34084[(7)]);
var inst_34072 = cljs.core.vec(inst_34046);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34084__$1,(15),out,inst_34072);
} else {
if((state_val_34085 === (2))){
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34084__$1,(4),ch);
} else {
if((state_val_34085 === (11))){
var inst_34064 = (state_34084[(2)]);
var inst_34065 = (new Array(n));
var inst_34046 = inst_34065;
var inst_34047 = (0);
var state_34084__$1 = (function (){var statearr_34108 = state_34084;
(statearr_34108[(10)] = inst_34064);

(statearr_34108[(7)] = inst_34046);

(statearr_34108[(8)] = inst_34047);

return statearr_34108;
})();
var statearr_34109_35265 = state_34084__$1;
(statearr_34109_35265[(2)] = null);

(statearr_34109_35265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (9))){
var inst_34046 = (state_34084[(7)]);
var inst_34062 = cljs.core.vec(inst_34046);
var state_34084__$1 = state_34084;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34084__$1,(11),out,inst_34062);
} else {
if((state_val_34085 === (5))){
var inst_34046 = (state_34084[(7)]);
var inst_34047 = (state_34084[(8)]);
var inst_34050 = (state_34084[(9)]);
var inst_34055 = (state_34084[(11)]);
var inst_34054 = (inst_34046[inst_34047] = inst_34050);
var inst_34055__$1 = (inst_34047 + (1));
var inst_34057 = (inst_34055__$1 < n);
var state_34084__$1 = (function (){var statearr_34112 = state_34084;
(statearr_34112[(12)] = inst_34054);

(statearr_34112[(11)] = inst_34055__$1);

return statearr_34112;
})();
if(cljs.core.truth_(inst_34057)){
var statearr_34114_35271 = state_34084__$1;
(statearr_34114_35271[(1)] = (8));

} else {
var statearr_34115_35272 = state_34084__$1;
(statearr_34115_35272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (14))){
var inst_34077 = (state_34084[(2)]);
var inst_34078 = cljs.core.async.close_BANG_(out);
var state_34084__$1 = (function (){var statearr_34117 = state_34084;
(statearr_34117[(13)] = inst_34077);

return statearr_34117;
})();
var statearr_34119_35274 = state_34084__$1;
(statearr_34119_35274[(2)] = inst_34078);

(statearr_34119_35274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (10))){
var inst_34068 = (state_34084[(2)]);
var state_34084__$1 = state_34084;
var statearr_34120_35280 = state_34084__$1;
(statearr_34120_35280[(2)] = inst_34068);

(statearr_34120_35280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34085 === (8))){
var inst_34046 = (state_34084[(7)]);
var inst_34055 = (state_34084[(11)]);
var tmp34116 = inst_34046;
var inst_34046__$1 = tmp34116;
var inst_34047 = inst_34055;
var state_34084__$1 = (function (){var statearr_34122 = state_34084;
(statearr_34122[(7)] = inst_34046__$1);

(statearr_34122[(8)] = inst_34047);

return statearr_34122;
})();
var statearr_34123_35282 = state_34084__$1;
(statearr_34123_35282[(2)] = null);

(statearr_34123_35282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_34125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34125[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_34125[(1)] = (1));

return statearr_34125;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_34084){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_34084);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e34126){var ex__30174__auto__ = e34126;
var statearr_34127_35284 = state_34084;
(statearr_34127_35284[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_34084[(4)]))){
var statearr_34128_35289 = state_34084;
(statearr_34128_35289[(1)] = cljs.core.first((state_34084[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35290 = state_34084;
state_34084 = G__35290;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_34084){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_34084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_34129 = f__30534__auto__();
(statearr_34129[(6)] = c__30533__auto___35239);

return statearr_34129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__30533__auto___35297 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_34211){
var state_val_34212 = (state_34211[(1)]);
if((state_val_34212 === (7))){
var inst_34207 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34220_35298 = state_34211__$1;
(statearr_34220_35298[(2)] = inst_34207);

(statearr_34220_35298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (1))){
var inst_34153 = [];
var inst_34154 = inst_34153;
var inst_34155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34211__$1 = (function (){var statearr_34221 = state_34211;
(statearr_34221[(7)] = inst_34154);

(statearr_34221[(8)] = inst_34155);

return statearr_34221;
})();
var statearr_34225_35299 = state_34211__$1;
(statearr_34225_35299[(2)] = null);

(statearr_34225_35299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (4))){
var inst_34158 = (state_34211[(9)]);
var inst_34158__$1 = (state_34211[(2)]);
var inst_34159 = (inst_34158__$1 == null);
var inst_34160 = cljs.core.not(inst_34159);
var state_34211__$1 = (function (){var statearr_34226 = state_34211;
(statearr_34226[(9)] = inst_34158__$1);

return statearr_34226;
})();
if(inst_34160){
var statearr_34227_35301 = state_34211__$1;
(statearr_34227_35301[(1)] = (5));

} else {
var statearr_34228_35302 = state_34211__$1;
(statearr_34228_35302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (15))){
var inst_34154 = (state_34211[(7)]);
var inst_34199 = cljs.core.vec(inst_34154);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34211__$1,(18),out,inst_34199);
} else {
if((state_val_34212 === (13))){
var inst_34194 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34230_35304 = state_34211__$1;
(statearr_34230_35304[(2)] = inst_34194);

(statearr_34230_35304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (6))){
var inst_34154 = (state_34211[(7)]);
var inst_34196 = inst_34154.length;
var inst_34197 = (inst_34196 > (0));
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34197)){
var statearr_34231_35305 = state_34211__$1;
(statearr_34231_35305[(1)] = (15));

} else {
var statearr_34232_35306 = state_34211__$1;
(statearr_34232_35306[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (17))){
var inst_34204 = (state_34211[(2)]);
var inst_34205 = cljs.core.async.close_BANG_(out);
var state_34211__$1 = (function (){var statearr_34234 = state_34211;
(statearr_34234[(10)] = inst_34204);

return statearr_34234;
})();
var statearr_34235_35307 = state_34211__$1;
(statearr_34235_35307[(2)] = inst_34205);

(statearr_34235_35307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (3))){
var inst_34209 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34211__$1,inst_34209);
} else {
if((state_val_34212 === (12))){
var inst_34154 = (state_34211[(7)]);
var inst_34181 = cljs.core.vec(inst_34154);
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34211__$1,(14),out,inst_34181);
} else {
if((state_val_34212 === (2))){
var state_34211__$1 = state_34211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34211__$1,(4),ch);
} else {
if((state_val_34212 === (11))){
var inst_34154 = (state_34211[(7)]);
var inst_34158 = (state_34211[(9)]);
var inst_34162 = (state_34211[(11)]);
var inst_34178 = inst_34154.push(inst_34158);
var tmp34239 = inst_34154;
var inst_34154__$1 = tmp34239;
var inst_34155 = inst_34162;
var state_34211__$1 = (function (){var statearr_34241 = state_34211;
(statearr_34241[(12)] = inst_34178);

(statearr_34241[(7)] = inst_34154__$1);

(statearr_34241[(8)] = inst_34155);

return statearr_34241;
})();
var statearr_34242_35308 = state_34211__$1;
(statearr_34242_35308[(2)] = null);

(statearr_34242_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (9))){
var inst_34155 = (state_34211[(8)]);
var inst_34174 = cljs.core.keyword_identical_QMARK_(inst_34155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34211__$1 = state_34211;
var statearr_34244_35309 = state_34211__$1;
(statearr_34244_35309[(2)] = inst_34174);

(statearr_34244_35309[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (5))){
var inst_34158 = (state_34211[(9)]);
var inst_34162 = (state_34211[(11)]);
var inst_34155 = (state_34211[(8)]);
var inst_34163 = (state_34211[(13)]);
var inst_34162__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34158) : f.call(null,inst_34158));
var inst_34163__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34162__$1,inst_34155);
var state_34211__$1 = (function (){var statearr_34245 = state_34211;
(statearr_34245[(11)] = inst_34162__$1);

(statearr_34245[(13)] = inst_34163__$1);

return statearr_34245;
})();
if(inst_34163__$1){
var statearr_34247_35310 = state_34211__$1;
(statearr_34247_35310[(1)] = (8));

} else {
var statearr_34248_35311 = state_34211__$1;
(statearr_34248_35311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (14))){
var inst_34158 = (state_34211[(9)]);
var inst_34162 = (state_34211[(11)]);
var inst_34183 = (state_34211[(2)]);
var inst_34190 = [];
var inst_34191 = inst_34190.push(inst_34158);
var inst_34154 = inst_34190;
var inst_34155 = inst_34162;
var state_34211__$1 = (function (){var statearr_34249 = state_34211;
(statearr_34249[(14)] = inst_34183);

(statearr_34249[(15)] = inst_34191);

(statearr_34249[(7)] = inst_34154);

(statearr_34249[(8)] = inst_34155);

return statearr_34249;
})();
var statearr_34251_35316 = state_34211__$1;
(statearr_34251_35316[(2)] = null);

(statearr_34251_35316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (16))){
var state_34211__$1 = state_34211;
var statearr_34252_35321 = state_34211__$1;
(statearr_34252_35321[(2)] = null);

(statearr_34252_35321[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (10))){
var inst_34176 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
if(cljs.core.truth_(inst_34176)){
var statearr_34253_35331 = state_34211__$1;
(statearr_34253_35331[(1)] = (11));

} else {
var statearr_34254_35332 = state_34211__$1;
(statearr_34254_35332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (18))){
var inst_34201 = (state_34211[(2)]);
var state_34211__$1 = state_34211;
var statearr_34256_35333 = state_34211__$1;
(statearr_34256_35333[(2)] = inst_34201);

(statearr_34256_35333[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34212 === (8))){
var inst_34163 = (state_34211[(13)]);
var state_34211__$1 = state_34211;
var statearr_34257_35334 = state_34211__$1;
(statearr_34257_35334[(2)] = inst_34163);

(statearr_34257_35334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__30171__auto__ = null;
var cljs$core$async$state_machine__30171__auto____0 = (function (){
var statearr_34259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34259[(0)] = cljs$core$async$state_machine__30171__auto__);

(statearr_34259[(1)] = (1));

return statearr_34259;
});
var cljs$core$async$state_machine__30171__auto____1 = (function (state_34211){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_34211);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e34260){var ex__30174__auto__ = e34260;
var statearr_34261_35342 = state_34211;
(statearr_34261_35342[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_34211[(4)]))){
var statearr_34263_35343 = state_34211;
(statearr_34263_35343[(1)] = cljs.core.first((state_34211[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35344 = state_34211;
state_34211 = G__35344;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
cljs$core$async$state_machine__30171__auto__ = function(state_34211){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30171__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30171__auto____1.call(this,state_34211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30171__auto____0;
cljs$core$async$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30171__auto____1;
return cljs$core$async$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_34264 = f__30534__auto__();
(statearr_34264[(6)] = c__30533__auto___35297);

return statearr_34264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
