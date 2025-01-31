goog.provide('workout_demo_frontend.util.templates');
workout_demo_frontend.util.templates.fetch_templates = (function workout_demo_frontend$util$templates$fetch_templates(on_success){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching templates"], 0));

return workout_demo_frontend.auth.api_call(ajax.core.GET,"http://localhost:3000/templates",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27580_SHARP_){
return console.error("Failed to fetch templates",p1__27580_SHARP_);
})], null));
});
workout_demo_frontend.util.templates.fetch_template = (function workout_demo_frontend$util$templates$fetch_template(id,on_success){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching template"], 0));

return workout_demo_frontend.auth.api_call(ajax.core.GET,"http://localhost:3000/template",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27583_SHARP_){
return console.error("Failed to fetch template",p1__27583_SHARP_);
})], null));
});

//# sourceMappingURL=workout_demo_frontend.util.templates.js.map
