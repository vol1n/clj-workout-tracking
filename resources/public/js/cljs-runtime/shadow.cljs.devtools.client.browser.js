goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37390 = arguments.length;
var i__5770__auto___37391 = (0);
while(true){
if((i__5770__auto___37391 < len__5769__auto___37390)){
args__5775__auto__.push((arguments[i__5770__auto___37391]));

var G__37392 = (i__5770__auto___37391 + (1));
i__5770__auto___37391 = G__37392;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37000){
var G__37001 = cljs.core.first(seq37000);
var seq37000__$1 = cljs.core.next(seq37000);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37001,seq37000__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37006 = cljs.core.seq(sources);
var chunk__37007 = null;
var count__37008 = (0);
var i__37009 = (0);
while(true){
if((i__37009 < count__37008)){
var map__37018 = chunk__37007.cljs$core$IIndexed$_nth$arity$2(null,i__37009);
var map__37018__$1 = cljs.core.__destructure_map(map__37018);
var src = map__37018__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37018__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37020){var e_37393 = e37020;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37393);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37393.message)].join('')));
}

var G__37394 = seq__37006;
var G__37395 = chunk__37007;
var G__37396 = count__37008;
var G__37397 = (i__37009 + (1));
seq__37006 = G__37394;
chunk__37007 = G__37395;
count__37008 = G__37396;
i__37009 = G__37397;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37006);
if(temp__5804__auto__){
var seq__37006__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37006__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37006__$1);
var G__37398 = cljs.core.chunk_rest(seq__37006__$1);
var G__37399 = c__5568__auto__;
var G__37400 = cljs.core.count(c__5568__auto__);
var G__37401 = (0);
seq__37006 = G__37398;
chunk__37007 = G__37399;
count__37008 = G__37400;
i__37009 = G__37401;
continue;
} else {
var map__37025 = cljs.core.first(seq__37006__$1);
var map__37025__$1 = cljs.core.__destructure_map(map__37025);
var src = map__37025__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37027){var e_37402 = e37027;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_37402);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_37402.message)].join('')));
}

var G__37403 = cljs.core.next(seq__37006__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__37006 = G__37403;
chunk__37007 = G__37404;
count__37008 = G__37405;
i__37009 = G__37406;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37031 = cljs.core.seq(js_requires);
var chunk__37032 = null;
var count__37033 = (0);
var i__37034 = (0);
while(true){
if((i__37034 < count__37033)){
var js_ns = chunk__37032.cljs$core$IIndexed$_nth$arity$2(null,i__37034);
var require_str_37407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37407);


var G__37408 = seq__37031;
var G__37409 = chunk__37032;
var G__37410 = count__37033;
var G__37411 = (i__37034 + (1));
seq__37031 = G__37408;
chunk__37032 = G__37409;
count__37033 = G__37410;
i__37034 = G__37411;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37031);
if(temp__5804__auto__){
var seq__37031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37031__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37031__$1);
var G__37412 = cljs.core.chunk_rest(seq__37031__$1);
var G__37413 = c__5568__auto__;
var G__37414 = cljs.core.count(c__5568__auto__);
var G__37415 = (0);
seq__37031 = G__37412;
chunk__37032 = G__37413;
count__37033 = G__37414;
i__37034 = G__37415;
continue;
} else {
var js_ns = cljs.core.first(seq__37031__$1);
var require_str_37416 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37416);


var G__37417 = cljs.core.next(seq__37031__$1);
var G__37418 = null;
var G__37419 = (0);
var G__37420 = (0);
seq__37031 = G__37417;
chunk__37032 = G__37418;
count__37033 = G__37419;
i__37034 = G__37420;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37040){
var map__37041 = p__37040;
var map__37041__$1 = cljs.core.__destructure_map(map__37041);
var msg = map__37041__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37041__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37042(s__37043){
return (new cljs.core.LazySeq(null,(function (){
var s__37043__$1 = s__37043;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__37043__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__37048 = cljs.core.first(xs__6360__auto__);
var map__37048__$1 = cljs.core.__destructure_map(map__37048);
var src = map__37048__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37048__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__37043__$1,map__37048,map__37048__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37041,map__37041__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37042_$_iter__37044(s__37045){
return (new cljs.core.LazySeq(null,((function (s__37043__$1,map__37048,map__37048__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37041,map__37041__$1,msg,info,reload_info){
return (function (){
var s__37045__$1 = s__37045;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__37045__$1);
if(temp__5804__auto____$1){
var s__37045__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37045__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__37045__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__37047 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__37046 = (0);
while(true){
if((i__37046 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__37046);
cljs.core.chunk_append(b__37047,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37423 = (i__37046 + (1));
i__37046 = G__37423;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37047),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37042_$_iter__37044(cljs.core.chunk_rest(s__37045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37047),null);
}
} else {
var warning = cljs.core.first(s__37045__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37042_$_iter__37044(cljs.core.rest(s__37045__$2)));
}
} else {
return null;
}
break;
}
});})(s__37043__$1,map__37048,map__37048__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37041,map__37041__$1,msg,info,reload_info))
,null,null));
});})(s__37043__$1,map__37048,map__37048__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__37041,map__37041__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37042(cljs.core.rest(s__37043__$1)));
} else {
var G__37428 = cljs.core.rest(s__37043__$1);
s__37043__$1 = G__37428;
continue;
}
} else {
var G__37429 = cljs.core.rest(s__37043__$1);
s__37043__$1 = G__37429;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37049_37430 = cljs.core.seq(warnings);
var chunk__37050_37431 = null;
var count__37051_37432 = (0);
var i__37052_37433 = (0);
while(true){
if((i__37052_37433 < count__37051_37432)){
var map__37057_37434 = chunk__37050_37431.cljs$core$IIndexed$_nth$arity$2(null,i__37052_37433);
var map__37057_37435__$1 = cljs.core.__destructure_map(map__37057_37434);
var w_37436 = map__37057_37435__$1;
var msg_37437__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37435__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37435__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37435__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37440 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37057_37435__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37440)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37438),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37439),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37437__$1)].join(''));


var G__37441 = seq__37049_37430;
var G__37442 = chunk__37050_37431;
var G__37443 = count__37051_37432;
var G__37444 = (i__37052_37433 + (1));
seq__37049_37430 = G__37441;
chunk__37050_37431 = G__37442;
count__37051_37432 = G__37443;
i__37052_37433 = G__37444;
continue;
} else {
var temp__5804__auto___37445 = cljs.core.seq(seq__37049_37430);
if(temp__5804__auto___37445){
var seq__37049_37446__$1 = temp__5804__auto___37445;
if(cljs.core.chunked_seq_QMARK_(seq__37049_37446__$1)){
var c__5568__auto___37447 = cljs.core.chunk_first(seq__37049_37446__$1);
var G__37448 = cljs.core.chunk_rest(seq__37049_37446__$1);
var G__37449 = c__5568__auto___37447;
var G__37450 = cljs.core.count(c__5568__auto___37447);
var G__37451 = (0);
seq__37049_37430 = G__37448;
chunk__37050_37431 = G__37449;
count__37051_37432 = G__37450;
i__37052_37433 = G__37451;
continue;
} else {
var map__37059_37452 = cljs.core.first(seq__37049_37446__$1);
var map__37059_37453__$1 = cljs.core.__destructure_map(map__37059_37452);
var w_37454 = map__37059_37453__$1;
var msg_37455__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37453__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37453__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37453__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37059_37453__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37458)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37456),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37457),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37455__$1)].join(''));


var G__37459 = cljs.core.next(seq__37049_37446__$1);
var G__37460 = null;
var G__37461 = (0);
var G__37462 = (0);
seq__37049_37430 = G__37459;
chunk__37050_37431 = G__37460;
count__37051_37432 = G__37461;
i__37052_37433 = G__37462;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37037_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37037_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37063){
var map__37064 = p__37063;
var map__37064__$1 = cljs.core.__destructure_map(map__37064);
var msg = map__37064__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37064__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37064__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37065 = cljs.core.seq(updates);
var chunk__37067 = null;
var count__37068 = (0);
var i__37069 = (0);
while(true){
if((i__37069 < count__37068)){
var path = chunk__37067.cljs$core$IIndexed$_nth$arity$2(null,i__37069);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37233_37467 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37237_37468 = null;
var count__37238_37469 = (0);
var i__37239_37470 = (0);
while(true){
if((i__37239_37470 < count__37238_37469)){
var node_37471 = chunk__37237_37468.cljs$core$IIndexed$_nth$arity$2(null,i__37239_37470);
if(cljs.core.not(node_37471.shadow$old)){
var path_match_37472 = shadow.cljs.devtools.client.browser.match_paths(node_37471.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37472)){
var new_link_37473 = (function (){var G__37267 = node_37471.cloneNode(true);
G__37267.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37472),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37267;
})();
(node_37471.shadow$old = true);

(new_link_37473.onload = ((function (seq__37233_37467,chunk__37237_37468,count__37238_37469,i__37239_37470,seq__37065,chunk__37067,count__37068,i__37069,new_link_37473,path_match_37472,node_37471,path,map__37064,map__37064__$1,msg,updates,reload_info){
return (function (e){
var seq__37272_37474 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37274_37475 = null;
var count__37275_37476 = (0);
var i__37276_37477 = (0);
while(true){
if((i__37276_37477 < count__37275_37476)){
var map__37282_37478 = chunk__37274_37475.cljs$core$IIndexed$_nth$arity$2(null,i__37276_37477);
var map__37282_37479__$1 = cljs.core.__destructure_map(map__37282_37478);
var task_37480 = map__37282_37479__$1;
var fn_str_37481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282_37479__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37282_37479__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37484 = goog.getObjectByName(fn_str_37481,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37482)].join(''));

(fn_obj_37484.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37484.cljs$core$IFn$_invoke$arity$2(path,new_link_37473) : fn_obj_37484.call(null,path,new_link_37473));


var G__37485 = seq__37272_37474;
var G__37486 = chunk__37274_37475;
var G__37487 = count__37275_37476;
var G__37488 = (i__37276_37477 + (1));
seq__37272_37474 = G__37485;
chunk__37274_37475 = G__37486;
count__37275_37476 = G__37487;
i__37276_37477 = G__37488;
continue;
} else {
var temp__5804__auto___37489 = cljs.core.seq(seq__37272_37474);
if(temp__5804__auto___37489){
var seq__37272_37490__$1 = temp__5804__auto___37489;
if(cljs.core.chunked_seq_QMARK_(seq__37272_37490__$1)){
var c__5568__auto___37491 = cljs.core.chunk_first(seq__37272_37490__$1);
var G__37492 = cljs.core.chunk_rest(seq__37272_37490__$1);
var G__37493 = c__5568__auto___37491;
var G__37494 = cljs.core.count(c__5568__auto___37491);
var G__37495 = (0);
seq__37272_37474 = G__37492;
chunk__37274_37475 = G__37493;
count__37275_37476 = G__37494;
i__37276_37477 = G__37495;
continue;
} else {
var map__37283_37496 = cljs.core.first(seq__37272_37490__$1);
var map__37283_37497__$1 = cljs.core.__destructure_map(map__37283_37496);
var task_37498 = map__37283_37497__$1;
var fn_str_37499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283_37497__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37283_37497__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37501 = goog.getObjectByName(fn_str_37499,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37500)].join(''));

(fn_obj_37501.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37501.cljs$core$IFn$_invoke$arity$2(path,new_link_37473) : fn_obj_37501.call(null,path,new_link_37473));


var G__37503 = cljs.core.next(seq__37272_37490__$1);
var G__37504 = null;
var G__37505 = (0);
var G__37506 = (0);
seq__37272_37474 = G__37503;
chunk__37274_37475 = G__37504;
count__37275_37476 = G__37505;
i__37276_37477 = G__37506;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37471);
});})(seq__37233_37467,chunk__37237_37468,count__37238_37469,i__37239_37470,seq__37065,chunk__37067,count__37068,i__37069,new_link_37473,path_match_37472,node_37471,path,map__37064,map__37064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37472], 0));

goog.dom.insertSiblingAfter(new_link_37473,node_37471);


var G__37508 = seq__37233_37467;
var G__37509 = chunk__37237_37468;
var G__37510 = count__37238_37469;
var G__37511 = (i__37239_37470 + (1));
seq__37233_37467 = G__37508;
chunk__37237_37468 = G__37509;
count__37238_37469 = G__37510;
i__37239_37470 = G__37511;
continue;
} else {
var G__37512 = seq__37233_37467;
var G__37513 = chunk__37237_37468;
var G__37514 = count__37238_37469;
var G__37515 = (i__37239_37470 + (1));
seq__37233_37467 = G__37512;
chunk__37237_37468 = G__37513;
count__37238_37469 = G__37514;
i__37239_37470 = G__37515;
continue;
}
} else {
var G__37516 = seq__37233_37467;
var G__37517 = chunk__37237_37468;
var G__37518 = count__37238_37469;
var G__37519 = (i__37239_37470 + (1));
seq__37233_37467 = G__37516;
chunk__37237_37468 = G__37517;
count__37238_37469 = G__37518;
i__37239_37470 = G__37519;
continue;
}
} else {
var temp__5804__auto___37520 = cljs.core.seq(seq__37233_37467);
if(temp__5804__auto___37520){
var seq__37233_37521__$1 = temp__5804__auto___37520;
if(cljs.core.chunked_seq_QMARK_(seq__37233_37521__$1)){
var c__5568__auto___37522 = cljs.core.chunk_first(seq__37233_37521__$1);
var G__37523 = cljs.core.chunk_rest(seq__37233_37521__$1);
var G__37524 = c__5568__auto___37522;
var G__37525 = cljs.core.count(c__5568__auto___37522);
var G__37526 = (0);
seq__37233_37467 = G__37523;
chunk__37237_37468 = G__37524;
count__37238_37469 = G__37525;
i__37239_37470 = G__37526;
continue;
} else {
var node_37527 = cljs.core.first(seq__37233_37521__$1);
if(cljs.core.not(node_37527.shadow$old)){
var path_match_37528 = shadow.cljs.devtools.client.browser.match_paths(node_37527.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37528)){
var new_link_37529 = (function (){var G__37287 = node_37527.cloneNode(true);
G__37287.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37528),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37287;
})();
(node_37527.shadow$old = true);

(new_link_37529.onload = ((function (seq__37233_37467,chunk__37237_37468,count__37238_37469,i__37239_37470,seq__37065,chunk__37067,count__37068,i__37069,new_link_37529,path_match_37528,node_37527,seq__37233_37521__$1,temp__5804__auto___37520,path,map__37064,map__37064__$1,msg,updates,reload_info){
return (function (e){
var seq__37288_37530 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37290_37531 = null;
var count__37291_37532 = (0);
var i__37292_37533 = (0);
while(true){
if((i__37292_37533 < count__37291_37532)){
var map__37296_37534 = chunk__37290_37531.cljs$core$IIndexed$_nth$arity$2(null,i__37292_37533);
var map__37296_37535__$1 = cljs.core.__destructure_map(map__37296_37534);
var task_37536 = map__37296_37535__$1;
var fn_str_37537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37296_37535__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37296_37535__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37539 = goog.getObjectByName(fn_str_37537,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37538)].join(''));

(fn_obj_37539.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37539.cljs$core$IFn$_invoke$arity$2(path,new_link_37529) : fn_obj_37539.call(null,path,new_link_37529));


var G__37540 = seq__37288_37530;
var G__37541 = chunk__37290_37531;
var G__37542 = count__37291_37532;
var G__37543 = (i__37292_37533 + (1));
seq__37288_37530 = G__37540;
chunk__37290_37531 = G__37541;
count__37291_37532 = G__37542;
i__37292_37533 = G__37543;
continue;
} else {
var temp__5804__auto___37544__$1 = cljs.core.seq(seq__37288_37530);
if(temp__5804__auto___37544__$1){
var seq__37288_37545__$1 = temp__5804__auto___37544__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37288_37545__$1)){
var c__5568__auto___37546 = cljs.core.chunk_first(seq__37288_37545__$1);
var G__37547 = cljs.core.chunk_rest(seq__37288_37545__$1);
var G__37548 = c__5568__auto___37546;
var G__37549 = cljs.core.count(c__5568__auto___37546);
var G__37550 = (0);
seq__37288_37530 = G__37547;
chunk__37290_37531 = G__37548;
count__37291_37532 = G__37549;
i__37292_37533 = G__37550;
continue;
} else {
var map__37297_37555 = cljs.core.first(seq__37288_37545__$1);
var map__37297_37556__$1 = cljs.core.__destructure_map(map__37297_37555);
var task_37557 = map__37297_37556__$1;
var fn_str_37558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297_37556__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37297_37556__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37560 = goog.getObjectByName(fn_str_37558,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37559)].join(''));

(fn_obj_37560.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37560.cljs$core$IFn$_invoke$arity$2(path,new_link_37529) : fn_obj_37560.call(null,path,new_link_37529));


var G__37561 = cljs.core.next(seq__37288_37545__$1);
var G__37562 = null;
var G__37563 = (0);
var G__37564 = (0);
seq__37288_37530 = G__37561;
chunk__37290_37531 = G__37562;
count__37291_37532 = G__37563;
i__37292_37533 = G__37564;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37527);
});})(seq__37233_37467,chunk__37237_37468,count__37238_37469,i__37239_37470,seq__37065,chunk__37067,count__37068,i__37069,new_link_37529,path_match_37528,node_37527,seq__37233_37521__$1,temp__5804__auto___37520,path,map__37064,map__37064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37528], 0));

goog.dom.insertSiblingAfter(new_link_37529,node_37527);


var G__37565 = cljs.core.next(seq__37233_37521__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37233_37467 = G__37565;
chunk__37237_37468 = G__37566;
count__37238_37469 = G__37567;
i__37239_37470 = G__37568;
continue;
} else {
var G__37569 = cljs.core.next(seq__37233_37521__$1);
var G__37570 = null;
var G__37571 = (0);
var G__37572 = (0);
seq__37233_37467 = G__37569;
chunk__37237_37468 = G__37570;
count__37238_37469 = G__37571;
i__37239_37470 = G__37572;
continue;
}
} else {
var G__37573 = cljs.core.next(seq__37233_37521__$1);
var G__37574 = null;
var G__37575 = (0);
var G__37576 = (0);
seq__37233_37467 = G__37573;
chunk__37237_37468 = G__37574;
count__37238_37469 = G__37575;
i__37239_37470 = G__37576;
continue;
}
}
} else {
}
}
break;
}


var G__37577 = seq__37065;
var G__37578 = chunk__37067;
var G__37579 = count__37068;
var G__37580 = (i__37069 + (1));
seq__37065 = G__37577;
chunk__37067 = G__37578;
count__37068 = G__37579;
i__37069 = G__37580;
continue;
} else {
var G__37581 = seq__37065;
var G__37582 = chunk__37067;
var G__37583 = count__37068;
var G__37584 = (i__37069 + (1));
seq__37065 = G__37581;
chunk__37067 = G__37582;
count__37068 = G__37583;
i__37069 = G__37584;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37065);
if(temp__5804__auto__){
var seq__37065__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37065__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37065__$1);
var G__37585 = cljs.core.chunk_rest(seq__37065__$1);
var G__37586 = c__5568__auto__;
var G__37587 = cljs.core.count(c__5568__auto__);
var G__37588 = (0);
seq__37065 = G__37585;
chunk__37067 = G__37586;
count__37068 = G__37587;
i__37069 = G__37588;
continue;
} else {
var path = cljs.core.first(seq__37065__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37298_37589 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37302_37590 = null;
var count__37303_37591 = (0);
var i__37304_37592 = (0);
while(true){
if((i__37304_37592 < count__37303_37591)){
var node_37593 = chunk__37302_37590.cljs$core$IIndexed$_nth$arity$2(null,i__37304_37592);
if(cljs.core.not(node_37593.shadow$old)){
var path_match_37594 = shadow.cljs.devtools.client.browser.match_paths(node_37593.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37594)){
var new_link_37595 = (function (){var G__37337 = node_37593.cloneNode(true);
G__37337.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37594),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37337;
})();
(node_37593.shadow$old = true);

(new_link_37595.onload = ((function (seq__37298_37589,chunk__37302_37590,count__37303_37591,i__37304_37592,seq__37065,chunk__37067,count__37068,i__37069,new_link_37595,path_match_37594,node_37593,path,seq__37065__$1,temp__5804__auto__,map__37064,map__37064__$1,msg,updates,reload_info){
return (function (e){
var seq__37338_37596 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37340_37597 = null;
var count__37341_37598 = (0);
var i__37342_37599 = (0);
while(true){
if((i__37342_37599 < count__37341_37598)){
var map__37346_37601 = chunk__37340_37597.cljs$core$IIndexed$_nth$arity$2(null,i__37342_37599);
var map__37346_37602__$1 = cljs.core.__destructure_map(map__37346_37601);
var task_37603 = map__37346_37602__$1;
var fn_str_37604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346_37602__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37346_37602__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37606 = goog.getObjectByName(fn_str_37604,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37605)].join(''));

(fn_obj_37606.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37606.cljs$core$IFn$_invoke$arity$2(path,new_link_37595) : fn_obj_37606.call(null,path,new_link_37595));


var G__37607 = seq__37338_37596;
var G__37608 = chunk__37340_37597;
var G__37609 = count__37341_37598;
var G__37610 = (i__37342_37599 + (1));
seq__37338_37596 = G__37607;
chunk__37340_37597 = G__37608;
count__37341_37598 = G__37609;
i__37342_37599 = G__37610;
continue;
} else {
var temp__5804__auto___37611__$1 = cljs.core.seq(seq__37338_37596);
if(temp__5804__auto___37611__$1){
var seq__37338_37612__$1 = temp__5804__auto___37611__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37338_37612__$1)){
var c__5568__auto___37613 = cljs.core.chunk_first(seq__37338_37612__$1);
var G__37614 = cljs.core.chunk_rest(seq__37338_37612__$1);
var G__37615 = c__5568__auto___37613;
var G__37616 = cljs.core.count(c__5568__auto___37613);
var G__37617 = (0);
seq__37338_37596 = G__37614;
chunk__37340_37597 = G__37615;
count__37341_37598 = G__37616;
i__37342_37599 = G__37617;
continue;
} else {
var map__37347_37618 = cljs.core.first(seq__37338_37612__$1);
var map__37347_37619__$1 = cljs.core.__destructure_map(map__37347_37618);
var task_37620 = map__37347_37619__$1;
var fn_str_37621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37347_37619__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37347_37619__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37623 = goog.getObjectByName(fn_str_37621,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37622)].join(''));

(fn_obj_37623.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37623.cljs$core$IFn$_invoke$arity$2(path,new_link_37595) : fn_obj_37623.call(null,path,new_link_37595));


var G__37624 = cljs.core.next(seq__37338_37612__$1);
var G__37625 = null;
var G__37626 = (0);
var G__37627 = (0);
seq__37338_37596 = G__37624;
chunk__37340_37597 = G__37625;
count__37341_37598 = G__37626;
i__37342_37599 = G__37627;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37593);
});})(seq__37298_37589,chunk__37302_37590,count__37303_37591,i__37304_37592,seq__37065,chunk__37067,count__37068,i__37069,new_link_37595,path_match_37594,node_37593,path,seq__37065__$1,temp__5804__auto__,map__37064,map__37064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37594], 0));

goog.dom.insertSiblingAfter(new_link_37595,node_37593);


var G__37628 = seq__37298_37589;
var G__37629 = chunk__37302_37590;
var G__37630 = count__37303_37591;
var G__37631 = (i__37304_37592 + (1));
seq__37298_37589 = G__37628;
chunk__37302_37590 = G__37629;
count__37303_37591 = G__37630;
i__37304_37592 = G__37631;
continue;
} else {
var G__37632 = seq__37298_37589;
var G__37633 = chunk__37302_37590;
var G__37634 = count__37303_37591;
var G__37635 = (i__37304_37592 + (1));
seq__37298_37589 = G__37632;
chunk__37302_37590 = G__37633;
count__37303_37591 = G__37634;
i__37304_37592 = G__37635;
continue;
}
} else {
var G__37637 = seq__37298_37589;
var G__37638 = chunk__37302_37590;
var G__37639 = count__37303_37591;
var G__37640 = (i__37304_37592 + (1));
seq__37298_37589 = G__37637;
chunk__37302_37590 = G__37638;
count__37303_37591 = G__37639;
i__37304_37592 = G__37640;
continue;
}
} else {
var temp__5804__auto___37641__$1 = cljs.core.seq(seq__37298_37589);
if(temp__5804__auto___37641__$1){
var seq__37298_37642__$1 = temp__5804__auto___37641__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37298_37642__$1)){
var c__5568__auto___37643 = cljs.core.chunk_first(seq__37298_37642__$1);
var G__37644 = cljs.core.chunk_rest(seq__37298_37642__$1);
var G__37645 = c__5568__auto___37643;
var G__37646 = cljs.core.count(c__5568__auto___37643);
var G__37647 = (0);
seq__37298_37589 = G__37644;
chunk__37302_37590 = G__37645;
count__37303_37591 = G__37646;
i__37304_37592 = G__37647;
continue;
} else {
var node_37648 = cljs.core.first(seq__37298_37642__$1);
if(cljs.core.not(node_37648.shadow$old)){
var path_match_37651 = shadow.cljs.devtools.client.browser.match_paths(node_37648.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37651)){
var new_link_37652 = (function (){var G__37348 = node_37648.cloneNode(true);
G__37348.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37651),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37348;
})();
(node_37648.shadow$old = true);

(new_link_37652.onload = ((function (seq__37298_37589,chunk__37302_37590,count__37303_37591,i__37304_37592,seq__37065,chunk__37067,count__37068,i__37069,new_link_37652,path_match_37651,node_37648,seq__37298_37642__$1,temp__5804__auto___37641__$1,path,seq__37065__$1,temp__5804__auto__,map__37064,map__37064__$1,msg,updates,reload_info){
return (function (e){
var seq__37349_37656 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__37351_37657 = null;
var count__37352_37658 = (0);
var i__37353_37659 = (0);
while(true){
if((i__37353_37659 < count__37352_37658)){
var map__37357_37660 = chunk__37351_37657.cljs$core$IIndexed$_nth$arity$2(null,i__37353_37659);
var map__37357_37661__$1 = cljs.core.__destructure_map(map__37357_37660);
var task_37662 = map__37357_37661__$1;
var fn_str_37663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357_37661__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37357_37661__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37665 = goog.getObjectByName(fn_str_37663,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37664)].join(''));

(fn_obj_37665.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37665.cljs$core$IFn$_invoke$arity$2(path,new_link_37652) : fn_obj_37665.call(null,path,new_link_37652));


var G__37666 = seq__37349_37656;
var G__37667 = chunk__37351_37657;
var G__37668 = count__37352_37658;
var G__37669 = (i__37353_37659 + (1));
seq__37349_37656 = G__37666;
chunk__37351_37657 = G__37667;
count__37352_37658 = G__37668;
i__37353_37659 = G__37669;
continue;
} else {
var temp__5804__auto___37670__$2 = cljs.core.seq(seq__37349_37656);
if(temp__5804__auto___37670__$2){
var seq__37349_37671__$1 = temp__5804__auto___37670__$2;
if(cljs.core.chunked_seq_QMARK_(seq__37349_37671__$1)){
var c__5568__auto___37672 = cljs.core.chunk_first(seq__37349_37671__$1);
var G__37673 = cljs.core.chunk_rest(seq__37349_37671__$1);
var G__37674 = c__5568__auto___37672;
var G__37675 = cljs.core.count(c__5568__auto___37672);
var G__37676 = (0);
seq__37349_37656 = G__37673;
chunk__37351_37657 = G__37674;
count__37352_37658 = G__37675;
i__37353_37659 = G__37676;
continue;
} else {
var map__37358_37677 = cljs.core.first(seq__37349_37671__$1);
var map__37358_37678__$1 = cljs.core.__destructure_map(map__37358_37677);
var task_37679 = map__37358_37678__$1;
var fn_str_37680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358_37678__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_37681 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37358_37678__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_37682 = goog.getObjectByName(fn_str_37680,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_37681)].join(''));

(fn_obj_37682.cljs$core$IFn$_invoke$arity$2 ? fn_obj_37682.cljs$core$IFn$_invoke$arity$2(path,new_link_37652) : fn_obj_37682.call(null,path,new_link_37652));


var G__37683 = cljs.core.next(seq__37349_37671__$1);
var G__37684 = null;
var G__37685 = (0);
var G__37686 = (0);
seq__37349_37656 = G__37683;
chunk__37351_37657 = G__37684;
count__37352_37658 = G__37685;
i__37353_37659 = G__37686;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_37648);
});})(seq__37298_37589,chunk__37302_37590,count__37303_37591,i__37304_37592,seq__37065,chunk__37067,count__37068,i__37069,new_link_37652,path_match_37651,node_37648,seq__37298_37642__$1,temp__5804__auto___37641__$1,path,seq__37065__$1,temp__5804__auto__,map__37064,map__37064__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37651], 0));

goog.dom.insertSiblingAfter(new_link_37652,node_37648);


var G__37687 = cljs.core.next(seq__37298_37642__$1);
var G__37688 = null;
var G__37689 = (0);
var G__37690 = (0);
seq__37298_37589 = G__37687;
chunk__37302_37590 = G__37688;
count__37303_37591 = G__37689;
i__37304_37592 = G__37690;
continue;
} else {
var G__37691 = cljs.core.next(seq__37298_37642__$1);
var G__37692 = null;
var G__37693 = (0);
var G__37694 = (0);
seq__37298_37589 = G__37691;
chunk__37302_37590 = G__37692;
count__37303_37591 = G__37693;
i__37304_37592 = G__37694;
continue;
}
} else {
var G__37695 = cljs.core.next(seq__37298_37642__$1);
var G__37696 = null;
var G__37697 = (0);
var G__37698 = (0);
seq__37298_37589 = G__37695;
chunk__37302_37590 = G__37696;
count__37303_37591 = G__37697;
i__37304_37592 = G__37698;
continue;
}
}
} else {
}
}
break;
}


var G__37699 = cljs.core.next(seq__37065__$1);
var G__37700 = null;
var G__37701 = (0);
var G__37702 = (0);
seq__37065 = G__37699;
chunk__37067 = G__37700;
count__37068 = G__37701;
i__37069 = G__37702;
continue;
} else {
var G__37703 = cljs.core.next(seq__37065__$1);
var G__37704 = null;
var G__37705 = (0);
var G__37706 = (0);
seq__37065 = G__37703;
chunk__37067 = G__37704;
count__37068 = G__37705;
i__37069 = G__37706;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__37361){
var map__37362 = p__37361;
var map__37362__$1 = cljs.core.__destructure_map(map__37362);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37362__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__37367){
var map__37371 = p__37367;
var map__37371__$1 = cljs.core.__destructure_map(map__37371);
var _ = map__37371__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37371__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__37372,done,error){
var map__37373 = p__37372;
var map__37373__$1 = cljs.core.__destructure_map(map__37373);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37373__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__37374,done,error){
var map__37375 = p__37374;
var map__37375__$1 = cljs.core.__destructure_map(map__37375);
var msg = map__37375__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__37376){
var map__37377 = p__37376;
var map__37377__$1 = cljs.core.__destructure_map(map__37377);
var src = map__37377__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37377__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__37379 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__37379) : done.call(null,G__37379));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__37380){
var map__37381 = p__37380;
var map__37381__$1 = cljs.core.__destructure_map(map__37381);
var msg__$1 = map__37381__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37381__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e37382){var ex = e37382;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__37383){
var map__37384 = p__37383;
var map__37384__$1 = cljs.core.__destructure_map(map__37384);
var env = map__37384__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37384__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__37386){
var map__37387 = p__37386;
var map__37387__$1 = cljs.core.__destructure_map(map__37387);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37387__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__37388){
var map__37389 = p__37388;
var map__37389__$1 = cljs.core.__destructure_map(map__37389);
var svc = map__37389__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37389__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
