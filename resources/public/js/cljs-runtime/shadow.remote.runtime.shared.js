goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__31745,res){
var map__31748 = p__31745;
var map__31748__$1 = cljs.core.__destructure_map(map__31748);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31748__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31748__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__31751 = res;
var G__31751__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31751,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__31751);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31751__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__31751__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__31764 = arguments.length;
switch (G__31764) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__31772,msg,handlers,timeout_after_ms){
var map__31774 = p__31772;
var map__31774__$1 = cljs.core.__destructure_map(map__31774);
var runtime = map__31774__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31774__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___32065 = arguments.length;
var i__5770__auto___32066 = (0);
while(true){
if((i__5770__auto___32066 < len__5769__auto___32065)){
args__5775__auto__.push((arguments[i__5770__auto___32066]));

var G__32067 = (i__5770__auto___32066 + (1));
i__5770__auto___32066 = G__32067;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__31790,ev,args){
var map__31791 = p__31790;
var map__31791__$1 = cljs.core.__destructure_map(map__31791);
var runtime = map__31791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__31794 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31797 = null;
var count__31798 = (0);
var i__31799 = (0);
while(true){
if((i__31799 < count__31798)){
var ext = chunk__31797.cljs$core$IIndexed$_nth$arity$2(null,i__31799);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32070 = seq__31794;
var G__32071 = chunk__31797;
var G__32072 = count__31798;
var G__32073 = (i__31799 + (1));
seq__31794 = G__32070;
chunk__31797 = G__32071;
count__31798 = G__32072;
i__31799 = G__32073;
continue;
} else {
var G__32074 = seq__31794;
var G__32075 = chunk__31797;
var G__32076 = count__31798;
var G__32077 = (i__31799 + (1));
seq__31794 = G__32074;
chunk__31797 = G__32075;
count__31798 = G__32076;
i__31799 = G__32077;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31794);
if(temp__5804__auto__){
var seq__31794__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31794__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31794__$1);
var G__32079 = cljs.core.chunk_rest(seq__31794__$1);
var G__32080 = c__5568__auto__;
var G__32081 = cljs.core.count(c__5568__auto__);
var G__32082 = (0);
seq__31794 = G__32079;
chunk__31797 = G__32080;
count__31798 = G__32081;
i__31799 = G__32082;
continue;
} else {
var ext = cljs.core.first(seq__31794__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__32086 = cljs.core.next(seq__31794__$1);
var G__32087 = null;
var G__32088 = (0);
var G__32089 = (0);
seq__31794 = G__32086;
chunk__31797 = G__32087;
count__31798 = G__32088;
i__31799 = G__32089;
continue;
} else {
var G__32090 = cljs.core.next(seq__31794__$1);
var G__32091 = null;
var G__32092 = (0);
var G__32093 = (0);
seq__31794 = G__32090;
chunk__31797 = G__32091;
count__31798 = G__32092;
i__31799 = G__32093;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq31779){
var G__31780 = cljs.core.first(seq31779);
var seq31779__$1 = cljs.core.next(seq31779);
var G__31781 = cljs.core.first(seq31779__$1);
var seq31779__$2 = cljs.core.next(seq31779__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31780,G__31781,seq31779__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__31820,p__31821){
var map__31822 = p__31820;
var map__31822__$1 = cljs.core.__destructure_map(map__31822);
var runtime = map__31822__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31822__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31823 = p__31821;
var map__31823__$1 = cljs.core.__destructure_map(map__31823);
var msg = map__31823__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31823__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__31825 = cljs.core.deref(state_ref);
var map__31825__$1 = cljs.core.__destructure_map(map__31825);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31825__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__31839){
var map__31840 = p__31839;
var map__31840__$1 = cljs.core.__destructure_map(map__31840);
var runtime = map__31840__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31840__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__31841,msg){
var map__31842 = p__31841;
var map__31842__$1 = cljs.core.__destructure_map(map__31842);
var runtime = map__31842__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31842__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__31851,key,p__31852){
var map__31853 = p__31851;
var map__31853__$1 = cljs.core.__destructure_map(map__31853);
var state = map__31853__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31853__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__31854 = p__31852;
var map__31854__$1 = cljs.core.__destructure_map(map__31854);
var spec = map__31854__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31854__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__31861,key,spec){
var map__31862 = p__31861;
var map__31862__$1 = cljs.core.__destructure_map(map__31862);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31862__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__31865_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__31865_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__31866_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__31866_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__31867_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__31867_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__31869_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__31869_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__31870_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__31870_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__31879,key){
var map__31880 = p__31879;
var map__31880__$1 = cljs.core.__destructure_map(map__31880);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31880__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__31893,msg){
var map__31896 = p__31893;
var map__31896__$1 = cljs.core.__destructure_map(map__31896);
var runtime = map__31896__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31896__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__31933,p__31934){
var map__31938 = p__31933;
var map__31938__$1 = cljs.core.__destructure_map(map__31938);
var runtime = map__31938__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31938__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__31939 = p__31934;
var map__31939__$1 = cljs.core.__destructure_map(map__31939);
var msg = map__31939__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31939__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31939__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__31967 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__31969 = null;
var count__31970 = (0);
var i__31971 = (0);
while(true){
if((i__31971 < count__31970)){
var map__32003 = chunk__31969.cljs$core$IIndexed$_nth$arity$2(null,i__31971);
var map__32003__$1 = cljs.core.__destructure_map(map__32003);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32003__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32163 = seq__31967;
var G__32164 = chunk__31969;
var G__32165 = count__31970;
var G__32166 = (i__31971 + (1));
seq__31967 = G__32163;
chunk__31969 = G__32164;
count__31970 = G__32165;
i__31971 = G__32166;
continue;
} else {
var G__32167 = seq__31967;
var G__32168 = chunk__31969;
var G__32169 = count__31970;
var G__32170 = (i__31971 + (1));
seq__31967 = G__32167;
chunk__31969 = G__32168;
count__31970 = G__32169;
i__31971 = G__32170;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31967);
if(temp__5804__auto__){
var seq__31967__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31967__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31967__$1);
var G__32172 = cljs.core.chunk_rest(seq__31967__$1);
var G__32173 = c__5568__auto__;
var G__32174 = cljs.core.count(c__5568__auto__);
var G__32175 = (0);
seq__31967 = G__32172;
chunk__31969 = G__32173;
count__31970 = G__32174;
i__31971 = G__32175;
continue;
} else {
var map__32010 = cljs.core.first(seq__31967__$1);
var map__32010__$1 = cljs.core.__destructure_map(map__32010);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32010__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__32176 = cljs.core.next(seq__31967__$1);
var G__32177 = null;
var G__32178 = (0);
var G__32179 = (0);
seq__31967 = G__32176;
chunk__31969 = G__32177;
count__31970 = G__32178;
i__31971 = G__32179;
continue;
} else {
var G__32180 = cljs.core.next(seq__31967__$1);
var G__32181 = null;
var G__32182 = (0);
var G__32183 = (0);
seq__31967 = G__32180;
chunk__31969 = G__32181;
count__31970 = G__32182;
i__31971 = G__32183;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
