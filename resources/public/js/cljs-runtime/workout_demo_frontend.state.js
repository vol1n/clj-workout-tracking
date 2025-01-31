goog.provide('workout_demo_frontend.state');
workout_demo_frontend.state.logged_in_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.state.api_call = (function workout_demo_frontend$state$api_call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___28121 = arguments.length;
var i__5770__auto___28122 = (0);
while(true){
if((i__5770__auto___28122 < len__5769__auto___28121)){
args__5775__auto__.push((arguments[i__5770__auto___28122]));

var G__28123 = (i__5770__auto___28122 + (1));
i__5770__auto___28122 = G__28123;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return workout_demo_frontend.state.api_call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(workout_demo_frontend.state.api_call.cljs$core$IFn$_invoke$arity$variadic = (function (method,url,params){
var token = (workout_demo_frontend.state.get_token.cljs$core$IFn$_invoke$arity$0 ? workout_demo_frontend.state.get_token.cljs$core$IFn$_invoke$arity$0() : workout_demo_frontend.state.get_token.call(null));
var headers = (cljs.core.truth_(token)?new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null):cljs.core.PersistentArrayMap.EMPTY);
var opts = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,params);
var user_error_handler = new cljs.core.Keyword(null,"error-handler","error-handler",-484945776).cljs$core$IFn$_invoke$arity$1(opts);
var default_error_handler = (function (p__28116){
var map__28117 = p__28116;
var map__28117__$1 = cljs.core.__destructure_map(map__28117);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28117__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28117__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(401))){
console.warn("Unauthorized! Logging out.");

return (workout_demo_frontend.state.logout_BANG_.cljs$core$IFn$_invoke$arity$0 ? workout_demo_frontend.state.logout_BANG_.cljs$core$IFn$_invoke$arity$0() : workout_demo_frontend.state.logout_BANG_.call(null));
} else {
if(cljs.core.truth_(user_error_handler)){
var G__28118 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),response], null);
return (user_error_handler.cljs$core$IFn$_invoke$arity$1 ? user_error_handler.cljs$core$IFn$_invoke$arity$1(G__28118) : user_error_handler.call(null,G__28118));
} else {
return null;
}
}
});
var G__28119 = url;
var G__28120 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),default_error_handler], null)], 0));
return (method.cljs$core$IFn$_invoke$arity$2 ? method.cljs$core$IFn$_invoke$arity$2(G__28119,G__28120) : method.call(null,G__28119,G__28120));
}));

(workout_demo_frontend.state.api_call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(workout_demo_frontend.state.api_call.cljs$lang$applyTo = (function (seq28113){
var G__28114 = cljs.core.first(seq28113);
var seq28113__$1 = cljs.core.next(seq28113);
var G__28115 = cljs.core.first(seq28113__$1);
var seq28113__$2 = cljs.core.next(seq28113__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28114,G__28115,seq28113__$2);
}));


//# sourceMappingURL=workout_demo_frontend.state.js.map
