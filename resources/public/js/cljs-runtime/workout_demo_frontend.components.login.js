goog.provide('workout_demo_frontend.components.login');
workout_demo_frontend.components.login.login_form_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"username","username",1605666410),"",new cljs.core.Keyword(null,"password","password",417022471),"",new cljs.core.Keyword(null,"error","error",-978969032),null], null));
workout_demo_frontend.components.login.post_login = (function workout_demo_frontend$components$login$post_login(on_success,on_error){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/login",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref(workout_demo_frontend.components.login.login_form_state),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_error], null)], 0));
});
workout_demo_frontend.components.login.login = (function workout_demo_frontend$components$login$login(logged_in_QMARK_){
if(cljs.core.truth_((function (){var and__5043__auto__ = workout_demo_frontend.auth.get_token();
if(cljs.core.truth_(and__5043__auto__)){
var and__5043__auto____$1 = workout_demo_frontend.auth.decode_jwt(workout_demo_frontend.auth.get_token());
if(cljs.core.truth_(and__5043__auto____$1)){
return cljs.core.not(workout_demo_frontend.auth.token_expired_QMARK_());
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
cljs.core.reset_BANG_(logged_in_QMARK_,true);
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center justify-center h-1/2 gap-y-4 border-2 border-gray-200 rounded-md p-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold"], null),"Login"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-2 border-gray-200 rounded-md",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Username",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.login.login_form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27575_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.login.login_form_state,cljs.core.assoc,new cljs.core.Keyword(null,"username","username",1605666410),p1__27575_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-2 border-gray-200 rounded-md",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Password",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.login.login_form_state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27576_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.login.login_form_state,cljs.core.assoc,new cljs.core.Keyword(null,"password","password",417022471),p1__27576_SHARP_.target.value);
})], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.login.login_form_state)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-red-500 text-sm"], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.login.login_form_state))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-1/3",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return workout_demo_frontend.components.login.post_login((function (response){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["response ",response], 0));

localStorage.setItem("jwt",new cljs.core.Keyword(null,"jwt","jwt",1504015441).cljs$core$IFn$_invoke$arity$1(response));

return cljs.core.reset_BANG_(logged_in_QMARK_,true);
}),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.login.login_form_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),"Username or password is incorrect");
}));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold"], null),"Login"], null)], null)], null);
});

//# sourceMappingURL=workout_demo_frontend.components.login.js.map
