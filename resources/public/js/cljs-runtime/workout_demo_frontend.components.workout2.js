goog.provide('workout_demo_frontend.components.workout2');
workout_demo_frontend.components.workout2.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"templates","templates",-1237401733),null,new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093),null,new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847),null,new cljs.core.Keyword(null,"new-workout","new-workout",464370035),null], null));
workout_demo_frontend.components.workout2.form_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null));
workout_demo_frontend.components.workout2.last_save = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof workout_demo_frontend !== 'undefined') && (typeof workout_demo_frontend.components !== 'undefined') && (typeof workout_demo_frontend.components.workout2 !== 'undefined') && (typeof workout_demo_frontend.components.workout2.save_timeout !== 'undefined')){
} else {
workout_demo_frontend.components.workout2.save_timeout = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
workout_demo_frontend.components.workout2.format_time = (function workout_demo_frontend$components$workout2$format_time(timestamp){
var date = (new Date(timestamp));
var hours = date.getHours();
var minutes = date.getMinutes();
var padded_minutes = (((minutes < (10)))?["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(minutes)].join(''):minutes);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["hours ",hours], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["minutes ",minutes], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["date ",date], 0));

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(hours),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(padded_minutes)].join('');
});
workout_demo_frontend.components.workout2.fetch_workouts = (function workout_demo_frontend$components$workout2$fetch_workouts(day,month,year,on_success){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching workouts"], 0));

return workout_demo_frontend.auth.api_call(ajax.core.GET,"http://localhost:3000/workouts",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27588_SHARP_){
return console.error("Failed to fetch summary",p1__27588_SHARP_);
})], null));
});
workout_demo_frontend.components.workout2.update_templates_BANG_ = (function workout_demo_frontend$components$workout2$update_templates_BANG_(){
var on_success = (function (p1__27589_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.app_state,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"templates","templates",-1237401733),p1__27589_SHARP_);
}));
});
return workout_demo_frontend.util.templates.fetch_templates(on_success);
});
workout_demo_frontend.components.workout2.save_workout_BANG_ = (function workout_demo_frontend$components$workout2$save_workout_BANG_(){
var current_form_state = cljs.core.deref(workout_demo_frontend.components.workout2.form_state);
return workout_demo_frontend.auth.api_call(ajax.core.POST,"http://localhost:3000/workouts",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),current_form_state,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["workout saved"], 0));

cljs.core.reset_BANG_(workout_demo_frontend.components.workout2.last_save,(new Date()));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27590_SHARP_){
return console.error("Failed to add workout",p1__27590_SHARP_);
})], null));
});
workout_demo_frontend.components.workout2.update_template_BANG_ = (function workout_demo_frontend$components$workout2$update_template_BANG_(id){
var on_success = (function (p1__27591_SHARP_){
var exercises = new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(p1__27591_SHARP_);
var build_new_exercise = (function (exercise){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exercise","exercise",-801618741),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise),new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise)], null),new cljs.core.Keyword(null,"sets","sets",400955582),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout2$update_template_BANG__$_iter__27597(s__27598){
return (new cljs.core.LazySeq(null,(function (){
var s__27598__$1 = s__27598;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27598__$1);
if(temp__5804__auto__){
var s__27598__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27598__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27598__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27600 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27599 = (0);
while(true){
if((i__27599 < size__5522__auto__)){
var _ = cljs.core._nth(c__5521__auto__,i__27599);
cljs.core.chunk_append(b__27600,(function (){var G__27608 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercise,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),new cljs.core.Keyword(null,"ident","ident",-742346)], null)));
var G__27608__$1 = (((G__27608 instanceof cljs.core.Keyword))?G__27608.fqn:null);
switch (G__27608__$1) {
case "workout.exercise/weightxreps":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(0),new cljs.core.Keyword(null,"reps","reps",1391310856),(0)], null);

break;
case "workout.exercise/time":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27608__$1)].join('')));

}
})());

var G__27690 = (i__27599 + (1));
i__27599 = G__27690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27600),workout_demo_frontend$components$workout2$update_template_BANG__$_iter__27597(cljs.core.chunk_rest(s__27598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27600),null);
}
} else {
var _ = cljs.core.first(s__27598__$2);
return cljs.core.cons((function (){var G__27612 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercise,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),new cljs.core.Keyword(null,"ident","ident",-742346)], null)));
var G__27612__$1 = (((G__27612 instanceof cljs.core.Keyword))?G__27612.fqn:null);
switch (G__27612__$1) {
case "workout.exercise/weightxreps":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(0),new cljs.core.Keyword(null,"reps","reps",1391310856),(0)], null);

break;
case "workout.exercise/time":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"time","time",1385887882),(0)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27612__$1)].join('')));

}
})(),workout_demo_frontend$components$workout2$update_template_BANG__$_iter__27597(cljs.core.rest(s__27598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"num-sets","num-sets",1969437196).cljs$core$IFn$_invoke$arity$1(exercise)));
})()], null);
});
var new_exercises = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_new_exercise,exercises);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.form_state,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prev,new cljs.core.Keyword(null,"template","template",-702405684),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742),new_exercises], 0));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.app_state,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"new-workout","new-workout",464370035),false);
}));
});
return workout_demo_frontend.util.templates.fetch_template(id,on_success);
});
if((typeof workout_demo_frontend !== 'undefined') && (typeof workout_demo_frontend.components !== 'undefined') && (typeof workout_demo_frontend.components.workout2 !== 'undefined') && (typeof workout_demo_frontend.components.workout2.select_workout_trigger !== 'undefined')){
} else {
workout_demo_frontend.components.workout2.select_workout_trigger = (function (){var co__27520__auto__ = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
var selected_workout_id = new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state));
var exercises = new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state));
var selected_workout = cljs.core.some((function (p1__27613_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27613_SHARP_),selected_workout_id)){
return p1__27613_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state)));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["selected-workout-id ",selected_workout_id], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["selected-workout ",selected_workout], 0));

if(cljs.core.truth_((function (){var and__5043__auto__ = selected_workout_id;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exercises),(0));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc,new cljs.core.Keyword(null,"exercises","exercises",-277203742),new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(selected_workout));
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true], 0));
cljs.core.deref(co__27520__auto__);

return co__27520__auto__;
})();
}
workout_demo_frontend.components.workout2.schedule_save_BANG_ = (function workout_demo_frontend$components$workout2$schedule_save_BANG_(){
if(cljs.core.truth_(cljs.core.deref(workout_demo_frontend.components.workout2.save_timeout))){
clearTimeout(cljs.core.deref(workout_demo_frontend.components.workout2.save_timeout));
} else {
}

return cljs.core.reset_BANG_(workout_demo_frontend.components.workout2.save_timeout,setTimeout((function (){
cljs.core.reset_BANG_(workout_demo_frontend.components.workout2.save_timeout,null);

return workout_demo_frontend.components.workout2.save_workout_BANG_();
}),(3000)));
});
if((typeof workout_demo_frontend !== 'undefined') && (typeof workout_demo_frontend.components !== 'undefined') && (typeof workout_demo_frontend.components.workout2 !== 'undefined') && (typeof workout_demo_frontend.components.workout2.auto_save_workout_trigger !== 'undefined')){
} else {
workout_demo_frontend.components.workout2.auto_save_workout_trigger = (function (){var co__27520__auto__ = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state))))){
return workout_demo_frontend.components.workout2.schedule_save_BANG_();
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true], 0));
cljs.core.deref(co__27520__auto__);

return co__27520__auto__;
})();
}
workout_demo_frontend.components.workout2.update_workouts_BANG_ = (function workout_demo_frontend$components$workout2$update_workouts_BANG_(day,month,year){
var on_success = (function (p1__27624_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.app_state,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093),p1__27624_SHARP_);
}));
});
return workout_demo_frontend.components.workout2.fetch_workouts(day,month,year,on_success);
});
workout_demo_frontend.components.workout2.time_entry = (function workout_demo_frontend$components$workout2$time_entry(value,on_change){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], null)], null);
});
workout_demo_frontend.components.workout2.set_entry = (function workout_demo_frontend$components$workout2$set_entry(weight_value,reps_value,on_weight_change,on_reps_change){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Weight:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"border p-2 rounded-md w-full",new cljs.core.Keyword(null,"value","value",305978217),weight_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27625_SHARP_){
var G__27627 = parseInt(p1__27625_SHARP_.target.value);
return (on_weight_change.cljs$core$IFn$_invoke$arity$1 ? on_weight_change.cljs$core$IFn$_invoke$arity$1(G__27627) : on_weight_change.call(null,G__27627));
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Reps:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"border p-2 rounded-md w-full",new cljs.core.Keyword(null,"value","value",305978217),reps_value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27626_SHARP_){
var G__27628 = parseInt(p1__27626_SHARP_.target.value);
return (on_reps_change.cljs$core$IFn$_invoke$arity$1 ? on_reps_change.cljs$core$IFn$_invoke$arity$1(G__27628) : on_reps_change.call(null,G__27628));
})], null)], null)], null);
});
workout_demo_frontend.components.workout2.workout_form = (function workout_demo_frontend$components$workout2$workout_form(){
var workout_id = new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state));
var workout_name = cljs.core.some((function (p1__27629_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27629_SHARP_),workout_id)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(p1__27629_SHARP_));
} else {
return null;
}
}),new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state)));
var exercises = new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl font-bold"], null),workout_name], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Exercises:"], null),(function (){var current_expanded = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout2$workout_form_$_iter__27633(s__27634){
return (new cljs.core.LazySeq(null,(function (){
var s__27634__$1 = s__27634;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27634__$1);
if(temp__5804__auto__){
var s__27634__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27634__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27634__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27636 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27635 = (0);
while(true){
if((i__27635 < size__5522__auto__)){
var vec__27637 = cljs.core._nth(c__5521__auto__,i__27635);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27637,(1),null);
cljs.core.chunk_append(b__27636,(function (){var exercise_template = new cljs.core.Keyword(null,"exercise","exercise",-801618741).cljs$core$IFn$_invoke$arity$1(exercise);
var sets = new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.form_state,((function (i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (current_form_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_expanded)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_form_state,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_form_state,new cljs.core.Keyword(null,"expanded","expanded",-3020742),index);
}
});})(i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
);
});})(i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise_template)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_expanded,index))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-4 mt-2"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = ((function (i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27640(s__27641){
return (new cljs.core.LazySeq(null,((function (i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (){
var s__27641__$1 = s__27641;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27641__$1);
if(temp__5804__auto____$1){
var s__27641__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27641__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__27641__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__27643 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__27642 = (0);
while(true){
if((i__27642 < size__5522__auto____$1)){
var vec__27645 = cljs.core._nth(c__5521__auto____$1,i__27642);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27645,(1),null);
cljs.core.chunk_append(b__27643,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["foregin "], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state))], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["index ",index], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-in",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"sets","sets",400955582),j], null))], 0)),(function (){var G__27648 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)));
var G__27648__$1 = (((G__27648 instanceof cljs.core.Keyword))?G__27648.fqn:null);
switch (G__27648__$1) {
case "workout.exercise/weightxreps":
var on_weight_change = ((function (i__27642,i__27635,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27630_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),p1__27630_SHARP_);
});})(i__27642,i__27635,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
var on_reps_change = ((function (i__27642,i__27635,on_weight_change,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27631_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"reps","reps",1391310856)], null),p1__27631_SHARP_);
});})(i__27642,i__27635,on_weight_change,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.set_entry,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set),new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set),on_weight_change,on_reps_change], null);

break;
case "workout.exercise/time":
var on_time_change = ((function (i__27642,i__27635,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27632_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,p1__27632_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"time","time",1385887882)], null));
});})(i__27642,i__27635,G__27648,G__27648__$1,vec__27645,j,set,c__5521__auto____$1,size__5522__auto____$1,b__27643,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.time_entry,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(set),on_time_change], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27648__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)));

var G__27707 = (i__27642 + (1));
i__27642 = G__27707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27643),workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27640(cljs.core.chunk_rest(s__27641__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27643),null);
}
} else {
var vec__27649 = cljs.core.first(s__27641__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27649,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["foregin "], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state))], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["index ",index], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-in",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"sets","sets",400955582),j], null))], 0)),(function (){var G__27652 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)));
var G__27652__$1 = (((G__27652 instanceof cljs.core.Keyword))?G__27652.fqn:null);
switch (G__27652__$1) {
case "workout.exercise/weightxreps":
var on_weight_change = ((function (i__27635,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27630_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),p1__27630_SHARP_);
});})(i__27635,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
var on_reps_change = ((function (i__27635,on_weight_change,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27631_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"reps","reps",1391310856)], null),p1__27631_SHARP_);
});})(i__27635,on_weight_change,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.set_entry,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set),new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set),on_weight_change,on_reps_change], null);

break;
case "workout.exercise/time":
var on_time_change = ((function (i__27635,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27632_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,p1__27632_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"time","time",1385887882)], null));
});})(i__27635,G__27652,G__27652__$1,vec__27649,j,set,s__27641__$2,temp__5804__auto____$1,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.time_entry,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(set),on_time_change], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27652__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)),workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27640(cljs.core.rest(s__27641__$2)));
}
} else {
return null;
}
break;
}
});})(i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
,null,null));
});})(i__27635,exercise_template,sets,vec__27637,index,exercise,c__5521__auto__,size__5522__auto__,b__27636,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,sets));
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
})());

var G__27711 = (i__27635 + (1));
i__27635 = G__27711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27636),workout_demo_frontend$components$workout2$workout_form_$_iter__27633(cljs.core.chunk_rest(s__27634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27636),null);
}
} else {
var vec__27654 = cljs.core.first(s__27634__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27654,(1),null);
return cljs.core.cons((function (){var exercise_template = new cljs.core.Keyword(null,"exercise","exercise",-801618741).cljs$core$IFn$_invoke$arity$1(exercise);
var sets = new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout2.form_state,(function (current_form_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current_expanded)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_form_state,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_form_state,new cljs.core.Keyword(null,"expanded","expanded",-3020742),index);
}
}));
});})(exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise_template)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_expanded,index))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-4 mt-2"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = ((function (exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27657(s__27658){
return (new cljs.core.LazySeq(null,(function (){
var s__27658__$1 = s__27658;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__27658__$1);
if(temp__5804__auto____$1){
var s__27658__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__27658__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27658__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27660 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27659 = (0);
while(true){
if((i__27659 < size__5522__auto__)){
var vec__27661 = cljs.core._nth(c__5521__auto__,i__27659);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27661,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27661,(1),null);
cljs.core.chunk_append(b__27660,cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["foregin "], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state))], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["index ",index], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-in",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"sets","sets",400955582),j], null))], 0)),(function (){var G__27664 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)));
var G__27664__$1 = (((G__27664 instanceof cljs.core.Keyword))?G__27664.fqn:null);
switch (G__27664__$1) {
case "workout.exercise/weightxreps":
var on_weight_change = ((function (i__27659,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27630_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),p1__27630_SHARP_);
});})(i__27659,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
var on_reps_change = ((function (i__27659,on_weight_change,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27631_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"reps","reps",1391310856)], null),p1__27631_SHARP_);
});})(i__27659,on_weight_change,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.set_entry,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set),new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set),on_weight_change,on_reps_change], null);

break;
case "workout.exercise/time":
var on_time_change = ((function (i__27659,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27632_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,p1__27632_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"time","time",1385887882)], null));
});})(i__27659,G__27664,G__27664__$1,vec__27661,j,set,c__5521__auto__,size__5522__auto__,b__27660,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.time_entry,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(set),on_time_change], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27664__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)));

var G__27721 = (i__27659 + (1));
i__27659 = G__27721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27660),workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27657(cljs.core.chunk_rest(s__27658__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27660),null);
}
} else {
var vec__27665 = cljs.core.first(s__27658__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27665,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27665,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["foregin "], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state))], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["index ",index], 0)),cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["get-in",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.form_state)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"sets","sets",400955582),j], null))], 0)),(function (){var G__27668 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_template)));
var G__27668__$1 = (((G__27668 instanceof cljs.core.Keyword))?G__27668.fqn:null);
switch (G__27668__$1) {
case "workout.exercise/weightxreps":
var on_weight_change = ((function (G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27630_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),p1__27630_SHARP_);
});})(G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
var on_reps_change = ((function (on_weight_change,G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27631_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"reps","reps",1391310856)], null),p1__27631_SHARP_);
});})(on_weight_change,G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.set_entry,new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set),new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set),on_weight_change,on_reps_change], null);

break;
case "workout.exercise/time":
var on_time_change = ((function (G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises){
return (function (p1__27632_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.form_state,cljs.core.assoc_in,p1__27632_SHARP_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"time","time",1385887882)], null));
});})(G__27668,G__27668__$1,vec__27665,j,set,s__27658__$2,temp__5804__auto____$1,exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.time_entry,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(set),on_time_change], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27668__$1)].join('')));

}
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)),workout_demo_frontend$components$workout2$workout_form_$_iter__27633_$_iter__27657(cljs.core.rest(s__27658__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(exercise_template,sets,vec__27654,index,exercise,s__27634__$2,temp__5804__auto__,current_expanded,workout_id,workout_name,exercises))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,sets));
})())], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null));
})(),workout_demo_frontend$components$workout2$workout_form_$_iter__27633(cljs.core.rest(s__27634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,exercises));
})());
})()], null);
});
workout_demo_frontend.components.workout2.select_template = (function workout_demo_frontend$components$workout2$select_template(){
if((new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state)) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 items-center gap-y-4 mt-6"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout2$select_template_$_iter__27669(s__27670){
return (new cljs.core.LazySeq(null,(function (){
var s__27670__$1 = s__27670;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27670__$1);
if(temp__5804__auto__){
var s__27670__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27670__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27670__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27672 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27671 = (0);
while(true){
if((i__27671 < size__5522__auto__)){
var vec__27673 = cljs.core._nth(c__5521__auto__,i__27671);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27673,(1),null);
cljs.core.chunk_append(b__27672,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__){
return (function (){
return ((function (i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(template)], null);
});
;})(i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__))
});})(i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__){
return (function (){
return workout_demo_frontend.components.workout2.update_template_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
});})(i__27671,vec__27673,index,template,c__5521__auto__,size__5522__auto__,b__27672,s__27670__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__27727 = (i__27671 + (1));
i__27671 = G__27727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27672),workout_demo_frontend$components$workout2$select_template_$_iter__27669(cljs.core.chunk_rest(s__27670__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27672),null);
}
} else {
var vec__27676 = cljs.core.first(s__27670__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27676,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (vec__27676,index,template,s__27670__$2,temp__5804__auto__){
return (function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(template)], null);
});
});})(vec__27676,index,template,s__27670__$2,temp__5804__auto__))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27676,index,template,s__27670__$2,temp__5804__auto__){
return (function (){
return workout_demo_frontend.components.workout2.update_template_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
});})(vec__27676,index,template,s__27670__$2,temp__5804__auto__))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),workout_demo_frontend$components$workout2$select_template_$_iter__27669(cljs.core.rest(s__27670__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state))));
})()], null);

}
});
workout_demo_frontend.components.workout2.select_workout = (function workout_demo_frontend$components$workout2$select_workout(day,month,year,close_fn){
if((new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state)) == null)){
workout_demo_frontend.components.workout2.update_workouts_BANG_(day,month,year);
} else {
}

if((new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state)) == null)){
workout_demo_frontend.components.workout2.update_templates_BANG_();
} else {
}

var current_app_state = cljs.core.deref(workout_demo_frontend.components.workout2.app_state);
var current_form_state = cljs.core.deref(workout_demo_frontend.components.workout2.form_state);
var wrapped_close_fn = (function (){
cljs.core.reset_BANG_(workout_demo_frontend.components.workout2.app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093),null,new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847),null,new cljs.core.Keyword(null,"new-workout","new-workout",464370035),null], null));

cljs.core.reset_BANG_(workout_demo_frontend.components.workout2.form_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null));

return (close_fn.cljs$core$IFn$_invoke$arity$0 ? close_fn.cljs$core$IFn$_invoke$arity$0() : close_fn.call(null));
});
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["current-app-state ",current_app_state], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["current-form-state ",current_form_state], 0));

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative p-4 bg-gray-50 min-h-screen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500",new cljs.core.Keyword(null,"on-click","on-click",1632826543),wrapped_close_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.icons.x_sign], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"new-workout","new-workout",464370035).cljs$core$IFn$_invoke$arity$1(current_app_state))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.select_template], null):(((new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093).cljs$core$IFn$_invoke$arity$1(current_app_state) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(current_form_state)),(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 items-center gap-y-4 mt-6"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout2$select_workout_$_iter__27679(s__27680){
return (new cljs.core.LazySeq(null,(function (){
var s__27680__$1 = s__27680;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27680__$1);
if(temp__5804__auto__){
var s__27680__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27680__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27680__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27682 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27681 = (0);
while(true){
if((i__27681 < size__5522__auto__)){
var vec__27683 = cljs.core._nth(c__5521__auto__,i__27681);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(0),null);
var workout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27683,(1),null);
cljs.core.chunk_append(b__27682,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"subtext","subtext",1186196563),workout_demo_frontend.components.workout2.format_time(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(workout)),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn){
return (function (){
return ((function (i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null))], null);
});
;})(i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn))
});})(i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(workout));
});})(i__27681,vec__27683,index,workout,c__5521__auto__,size__5522__auto__,b__27682,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn))
,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/2"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__27728 = (i__27681 + (1));
i__27681 = G__27728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27682),workout_demo_frontend$components$workout2$select_workout_$_iter__27679(cljs.core.chunk_rest(s__27680__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27682),null);
}
} else {
var vec__27686 = cljs.core.first(s__27680__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27686,(0),null);
var workout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27686,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"subtext","subtext",1186196563),workout_demo_frontend.components.workout2.format_time(new cljs.core.Keyword(null,"timestamp","timestamp",579478971).cljs$core$IFn$_invoke$arity$1(workout)),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (vec__27686,index,workout,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn){
return (function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"symbol","symbol",-1038572696)], null))], null);
});
});})(vec__27686,index,workout,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27686,index,workout,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(workout));
});})(vec__27686,index,workout,s__27680__$2,temp__5804__auto__,current_app_state,current_form_state,wrapped_close_fn))
,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/2"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),workout_demo_frontend$components$workout2$select_workout_$_iter__27679(cljs.core.rest(s__27680__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"todays-workouts","todays-workouts",-866678093).cljs$core$IFn$_invoke$arity$1(current_app_state)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add Workout",new cljs.core.Keyword(null,"icon","icon",1679606541),workout_demo_frontend.components.icons.plus_sign,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout2.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"new-workout","new-workout",464370035),true);
}),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/3"], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.workout_form,new cljs.core.Keyword(null,"selected-workout","selected-workout",-798385847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout2.app_state))], null)
)
))], null);
});

//# sourceMappingURL=workout_demo_frontend.components.workout2.js.map
