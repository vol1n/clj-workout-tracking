goog.provide('workout_demo_frontend.core');
workout_demo_frontend.core.app = (function workout_demo_frontend$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-10 ml-20 mr-20"], null),(((cljs.core.deref(workout_demo_frontend.auth.logged_in_QMARK_) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.login.login,workout_demo_frontend.auth.logged_in_QMARK_], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(workout_demo_frontend.components.tabs.current_tab),new cljs.core.Keyword(null,"insights","insights",-1580301985)))?"Insights":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(workout_demo_frontend.components.tabs.current_tab),new cljs.core.Keyword(null,"calendar","calendar",62308146)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.calendar], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(workout_demo_frontend.components.tabs.current_tab),new cljs.core.Keyword(null,"settings","settings",1556144875)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.templates.select_template], null):"Default"
))))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.tabs.tabs], null)], null);
});
workout_demo_frontend.core.init = (function workout_demo_frontend$core$init(){
var root = reagent.dom.client.create_root(document.getElementById("app"));
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.core.app], null));
});

//# sourceMappingURL=workout_demo_frontend.core.js.map
