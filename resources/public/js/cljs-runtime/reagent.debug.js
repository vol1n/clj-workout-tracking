goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27485__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27485 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27486__i = 0, G__27486__a = new Array(arguments.length -  0);
while (G__27486__i < G__27486__a.length) {G__27486__a[G__27486__i] = arguments[G__27486__i + 0]; ++G__27486__i;}
  args = new cljs.core.IndexedSeq(G__27486__a,0,null);
} 
return G__27485__delegate.call(this,args);};
G__27485.cljs$lang$maxFixedArity = 0;
G__27485.cljs$lang$applyTo = (function (arglist__27487){
var args = cljs.core.seq(arglist__27487);
return G__27485__delegate(args);
});
G__27485.cljs$core$IFn$_invoke$arity$variadic = G__27485__delegate;
return G__27485;
})()
);

(o.error = (function() { 
var G__27488__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27488 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27489__i = 0, G__27489__a = new Array(arguments.length -  0);
while (G__27489__i < G__27489__a.length) {G__27489__a[G__27489__i] = arguments[G__27489__i + 0]; ++G__27489__i;}
  args = new cljs.core.IndexedSeq(G__27489__a,0,null);
} 
return G__27488__delegate.call(this,args);};
G__27488.cljs$lang$maxFixedArity = 0;
G__27488.cljs$lang$applyTo = (function (arglist__27490){
var args = cljs.core.seq(arglist__27490);
return G__27488__delegate(args);
});
G__27488.cljs$core$IFn$_invoke$arity$variadic = G__27488__delegate;
return G__27488;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
