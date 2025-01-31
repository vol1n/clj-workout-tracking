goog.provide('workout_demo_frontend.auth');
workout_demo_frontend.auth.logged_in_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.auth.get_token = (function workout_demo_frontend$auth$get_token(){
return localStorage.getItem("jwt");
});
workout_demo_frontend.auth.decode_jwt = (function workout_demo_frontend$auth$decode_jwt(token){
try{var payload = (function (){var G__27576 = token;
var G__27576__$1 = (((G__27576 == null))?null:clojure.string.split.cljs$core$IFn$_invoke$arity$2(G__27576,/\./));
var G__27576__$2 = (((G__27576__$1 == null))?null:cljs.core.second(G__27576__$1));
var G__27576__$3 = (((G__27576__$2 == null))?null:atob(G__27576__$2));
if((G__27576__$3 == null)){
return null;
} else {
return JSON.parse(G__27576__$3);
}
})();
return payload;
}catch (e27575){if((e27575 instanceof Error)){
var _ = e27575;
return null;
} else {
throw e27575;

}
}});
workout_demo_frontend.auth.token_expired_QMARK_ = (function workout_demo_frontend$auth$token_expired_QMARK_(){
var token = workout_demo_frontend.auth.get_token();
var decoded = workout_demo_frontend.auth.decode_jwt(token);
if(cljs.core.truth_(decoded)){
var exp_time = ((1000) * new cljs.core.Keyword(null,"exp","exp",-261706262).cljs$core$IFn$_invoke$arity$1(decoded));
var now = (new Date()).getTime();
return (now > exp_time);
} else {
return null;
}
});
workout_demo_frontend.auth.logout_BANG_ = (function workout_demo_frontend$auth$logout_BANG_(){
localStorage.removeItem("auth-token");

return cljs.core.reset_BANG_(workout_demo_frontend.auth.logged_in_QMARK_,null);
});
workout_demo_frontend.auth.api_call = (function workout_demo_frontend$auth$api_call(method,url,opts){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["api-call"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["opts ",opts], 0));

var token = workout_demo_frontend.auth.get_token();
var headers = (cljs.core.truth_(token)?new cljs.core.PersistentArrayMap(null, 1, ["Authorization",["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null):cljs.core.PersistentArrayMap.EMPTY);
var user_error_handler = new cljs.core.Keyword(null,"error-handler","error-handler",-484945776).cljs$core$IFn$_invoke$arity$1(opts);
var default_error_handler = (function (p__27577){
var map__27578 = p__27577;
var map__27578__$1 = cljs.core.__destructure_map(map__27578);
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27578__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var response = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27578__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,(401))){
console.warn("Unauthorized! Logging out.");

return workout_demo_frontend.auth.logout_BANG_();
} else {
if(cljs.core.truth_(user_error_handler)){
var G__27579 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"response","response",-1068424192),response], null);
return (user_error_handler.cljs$core$IFn$_invoke$arity$1 ? user_error_handler.cljs$core$IFn$_invoke$arity$1(G__27579) : user_error_handler.call(null,G__27579));
} else {
return null;
}
}
});
var full_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"headers","headers",-835030129),headers,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),default_error_handler], null)], 0));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["token ",token], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["full-opts ",full_opts], 0));

return (method.cljs$core$IFn$_invoke$arity$2 ? method.cljs$core$IFn$_invoke$arity$2(url,full_opts) : method.call(null,url,full_opts));
});

//# sourceMappingURL=workout_demo_frontend.auth.js.map
