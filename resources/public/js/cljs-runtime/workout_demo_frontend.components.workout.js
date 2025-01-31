goog.provide('workout_demo_frontend.components.workout');
workout_demo_frontend.components.workout.workouts = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.components.workout.selected_workout = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.components.workout.exercises = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.components.workout.expanded = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.components.workout.workout_types = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"label","label",1718410804),"Track"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lifting","lifting",215077504),new cljs.core.Keyword(null,"label","label",1718410804),"Lifting"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"other","other",995793544),new cljs.core.Keyword(null,"label","label",1718410804),"Other"], null)], null);
workout_demo_frontend.components.workout.format_sets = (function workout_demo_frontend$components$workout$format_sets(sets){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout$format_sets_$_iter__49925(s__49926){
return (new cljs.core.LazySeq(null,(function (){
var s__49926__$1 = s__49926;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49926__$1);
if(temp__5804__auto__){
var s__49926__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49926__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49926__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49928 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49927 = (0);
while(true){
if((i__49927 < size__5522__auto__)){
var set = cljs.core._nth(c__5521__auto__,i__49927);
cljs.core.chunk_append(b__49928,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set)),"x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set))].join(''));

var G__50010 = (i__49927 + (1));
i__49927 = G__50010;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49928),workout_demo_frontend$components$workout$format_sets_$_iter__49925(cljs.core.chunk_rest(s__49926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49928),null);
}
} else {
var set = cljs.core.first(s__49926__$2);
return cljs.core.cons([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(set)),"x",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(set))].join(''),workout_demo_frontend$components$workout$format_sets_$_iter__49925(cljs.core.rest(s__49926__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(sets);
})());
});
workout_demo_frontend.components.workout.plus_sign = (function workout_demo_frontend$components$workout$plus_sign(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"12",new cljs.core.Keyword(null,"y1","y1",589123466),"5",new cljs.core.Keyword(null,"x2","x2",-1362513475),"12",new cljs.core.Keyword(null,"y2","y2",-718691301),"19",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"5",new cljs.core.Keyword(null,"y1","y1",589123466),"12",new cljs.core.Keyword(null,"x2","x2",-1362513475),"19",new cljs.core.Keyword(null,"y2","y2",-718691301),"12",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null);
});
workout_demo_frontend.components.workout.x_sign = (function workout_demo_frontend$components$workout$x_sign(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"5",new cljs.core.Keyword(null,"y1","y1",589123466),"5",new cljs.core.Keyword(null,"x2","x2",-1362513475),"19",new cljs.core.Keyword(null,"y2","y2",-718691301),"19",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"19",new cljs.core.Keyword(null,"y1","y1",589123466),"5",new cljs.core.Keyword(null,"x2","x2",-1362513475),"5",new cljs.core.Keyword(null,"y2","y2",-718691301),"19",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round"], null)], null)], null);
});
workout_demo_frontend.components.workout.fetch_workouts = (function workout_demo_frontend$components$workout$fetch_workouts(day,month,year){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/workouts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__49929_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.workouts,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"workouts","workouts",1343445337).cljs$core$IFn$_invoke$arity$1(p1__49929_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__49930_SHARP_){
return console.error("Failed to fetch summary",p1__49930_SHARP_);
})], null)], 0));
});
workout_demo_frontend.components.workout.fetch_exercises = (function workout_demo_frontend$components$workout$fetch_exercises(){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching exercises"], 0));

return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/exercises",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__49931_SHARP_){
return cljs.core.reset_BANG_(workout_demo_frontend.components.workout.exercises,new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(p1__49931_SHARP_));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__49932_SHARP_){
return console.error("Failed to fetch summary",p1__49932_SHARP_);
})], null)], 0));
});
workout_demo_frontend.components.workout.add_workout = (function workout_demo_frontend$components$workout$add_workout(workout,on_success){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["workout ",workout], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(workout)))){
return alert("Please add at least one exercise");
} else {
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/workouts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workout","workout",280057936),workout], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__49933_SHARP_){
return console.error("Failed to add workout",p1__49933_SHARP_);
})], null)], 0));
}
});
if((typeof workout_demo_frontend !== 'undefined') && (typeof workout_demo_frontend.components !== 'undefined') && (typeof workout_demo_frontend.components.workout !== 'undefined') && (typeof workout_demo_frontend.components.workout.expanded_change_trigger !== 'undefined')){
} else {
workout_demo_frontend.components.workout.expanded_change_trigger = (function (){var co__27520__auto__ = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["expanded ",cljs.core.deref(workout_demo_frontend.components.workout.expanded)], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true], 0));
cljs.core.deref(co__27520__auto__);

return co__27520__auto__;
})();
}
workout_demo_frontend.components.workout.remove_at = (function workout_demo_frontend$components$workout$remove_at(v,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1)))));
});
workout_demo_frontend.components.workout.weight_reps_input = (function workout_demo_frontend$components$workout$weight_reps_input(i,j){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-2 mt-2"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Weight:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"border p-2 rounded-md w-full",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(cljs.core.set),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49934_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),i,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"weight","weight",-1262796205)], null),parseInt(p1__49934_SHARP_.target.value));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Reps:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"class","class",-2030961996),"border p-2 rounded-md w-full",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"reps","reps",1391310856).cljs$core$IFn$_invoke$arity$1(cljs.core.set),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49935_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),i,new cljs.core.Keyword(null,"sets","sets",400955582),j,new cljs.core.Keyword(null,"reps","reps",1391310856)], null),parseInt(p1__49935_SHARP_.target.value));
})], null)], null)], null)], null);
});
workout_demo_frontend.components.workout.exercise_form = (function workout_demo_frontend$components$workout$exercise_form(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Exercises:"], null),(function (){var exercises_this_workout = new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout.selected_workout));
var current_expanded = cljs.core.deref(workout_demo_frontend.components.workout.expanded);
var current_selected = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.workout.selected_workout));
var exercise_options = (function (){var G__49938 = cljs.core.deref(workout_demo_frontend.components.workout.exercises);
return (current_selected.cljs$core$IFn$_invoke$arity$1 ? current_selected.cljs$core$IFn$_invoke$arity$1(G__49938) : current_selected.call(null,G__49938));
})();
cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout$exercise_form_$_iter__49939(s__49940){
return (new cljs.core.LazySeq(null,(function (){
var s__49940__$1 = s__49940;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49940__$1);
if(temp__5804__auto__){
var s__49940__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49940__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49940__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49942 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49941 = (0);
while(true){
if((i__49941 < size__5522__auto__)){
var vec__49943 = cljs.core._nth(c__5521__auto__,i__49941);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49943,(1),null);
cljs.core.chunk_append(b__49942,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout.expanded,((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (current){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current)){
return null;
} else {
return index;
}
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
);
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_expanded,index))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-4 mt-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout.selected_workout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"ident","ident",-742346)], null)),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.first(exercise_options),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49936_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index], null),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (option){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option),p1__49936_SHARP_.target.value);
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,exercise_options)));
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),(function (){var iter__5523__auto__ = ((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49946(s__49947){
return (new cljs.core.LazySeq(null,((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
var s__49947__$1 = s__49947;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49947__$1);
if(temp__5804__auto____$1){
var s__49947__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49947__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__49947__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__49949 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__49948 = (0);
while(true){
if((i__49948 < size__5522__auto____$1)){
var vec__49950 = cljs.core._nth(c__5521__auto____$1,i__49948);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49950,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49950,(1),null);
cljs.core.chunk_append(b__49949,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index__$1], null)));

var G__50023 = (i__49948 + (1));
i__49948 = G__50023;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49949),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49946(cljs.core.chunk_rest(s__49947__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49949),null);
}
} else {
var vec__49953 = cljs.core.first(s__49947__$2);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49953,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49953,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index__$1], null)),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49946(cljs.core.rest(s__49947__$2)));
}
} else {
return null;
}
break;
}
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,null,null));
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,exercise_options));
})()], null),(function (){var iter__5523__auto__ = ((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49956(s__49957){
return (new cljs.core.LazySeq(null,((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
var s__49957__$1 = s__49957;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49957__$1);
if(temp__5804__auto____$1){
var s__49957__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49957__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__49957__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__49959 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__49958 = (0);
while(true){
if((i__49958 < size__5522__auto____$1)){
var vec__49960 = cljs.core._nth(c__5521__auto____$1,i__49958);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49960,(1),null);
cljs.core.chunk_append(b__49959,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Set ",(j + (1)),": ",workout_demo_frontend.components.workout.format_sets(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise))], null),(function (){var exercise_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercises_this_workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var exercise_data = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49958,i__49941,exercise_name,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exercise_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__49937_SHARP_));
});})(i__49958,i__49941,exercise_name,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,exercise_options));
var tracking_type = new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,current_expanded)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("workout.exercise/weightxreps",tracking_type)){
return workout_demo_frontend.components.workout.weight_reps_input(index,j);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-red-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49958,i__49941,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),((function (i__49958,i__49941,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (sets){
return workout_demo_frontend.components.workout.remove_at(sets,j);
});})(i__49958,i__49941,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
);
});})(i__49958,i__49941,vec__49960,j,set,c__5521__auto____$1,size__5522__auto____$1,b__49959,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)));

var G__50024 = (i__49958 + (1));
i__49958 = G__50024;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49959),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49956(cljs.core.chunk_rest(s__49957__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49959),null);
}
} else {
var vec__49963 = cljs.core.first(s__49957__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49963,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49963,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Set ",(j + (1)),": ",workout_demo_frontend.components.workout.format_sets(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise))], null),(function (){var exercise_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercises_this_workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var exercise_data = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49941,exercise_name,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exercise_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__49937_SHARP_));
});})(i__49941,exercise_name,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,exercise_options));
var tracking_type = new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,current_expanded)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("workout.exercise/weightxreps",tracking_type)){
return workout_demo_frontend.components.workout.weight_reps_input(index,j);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-red-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49941,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),((function (i__49941,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (sets){
return workout_demo_frontend.components.workout.remove_at(sets,j);
});})(i__49941,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
);
});})(i__49941,vec__49963,j,set,s__49957__$2,temp__5804__auto____$1,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49956(cljs.core.rest(s__49957__$2)));
}
} else {
return null;
}
break;
}
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,null,null));
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 border-gray-200 rounded-full w-1/4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(0),new cljs.core.Keyword(null,"reps","reps",1391310856),(0)], null)], 0));
});})(i__49941,vec__49943,index,exercise,c__5521__auto__,size__5522__auto__,b__49942,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.plus_sign], null),"Add Set"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__50028 = (i__49941 + (1));
i__49941 = G__50028;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49942),workout_demo_frontend$components$workout$exercise_form_$_iter__49939(cljs.core.chunk_rest(s__49940__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49942),null);
}
} else {
var vec__49966 = cljs.core.first(s__49940__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49966,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49966,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout.expanded,(function (current){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,current)){
return null;
} else {
return index;
}
}));
});})(vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise)], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_expanded,index))?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-4 mt-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.workout.selected_workout,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"ident","ident",-742346)], null)),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.first(exercise_options),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49936_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index], null),cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (option){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option),p1__49936_SHARP_.target.value);
}),exercise_options)));
});})(vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),(function (){var iter__5523__auto__ = ((function (vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49969(s__49970){
return (new cljs.core.LazySeq(null,(function (){
var s__49970__$1 = s__49970;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49970__$1);
if(temp__5804__auto____$1){
var s__49970__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49970__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49970__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49972 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49971 = (0);
while(true){
if((i__49971 < size__5522__auto__)){
var vec__49973 = cljs.core._nth(c__5521__auto__,i__49971);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49973,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49973,(1),null);
cljs.core.chunk_append(b__49972,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index__$1], null)));

var G__50034 = (i__49971 + (1));
i__49971 = G__50034;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49972),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49969(cljs.core.chunk_rest(s__49970__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49972),null);
}
} else {
var vec__49976 = cljs.core.first(s__49970__$2);
var index__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49976,(0),null);
var option = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49976,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(option)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index__$1], null)),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49969(cljs.core.rest(s__49970__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,exercise_options));
})()], null),(function (){var iter__5523__auto__ = ((function (vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49979(s__49980){
return (new cljs.core.LazySeq(null,(function (){
var s__49980__$1 = s__49980;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__49980__$1);
if(temp__5804__auto____$1){
var s__49980__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49980__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49980__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49982 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49981 = (0);
while(true){
if((i__49981 < size__5522__auto__)){
var vec__49983 = cljs.core._nth(c__5521__auto__,i__49981);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49983,(1),null);
cljs.core.chunk_append(b__49982,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Set ",(j + (1)),": ",workout_demo_frontend.components.workout.format_sets(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise))], null),(function (){var exercise_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercises_this_workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var exercise_data = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (i__49981,exercise_name,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exercise_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__49937_SHARP_));
});})(i__49981,exercise_name,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,exercise_options));
var tracking_type = new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,current_expanded)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("workout.exercise/weightxreps",tracking_type)){
return workout_demo_frontend.components.workout.weight_reps_input(index,j);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-red-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__49981,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),((function (i__49981,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (sets){
return workout_demo_frontend.components.workout.remove_at(sets,j);
});})(i__49981,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
);
});})(i__49981,vec__49983,j,set,c__5521__auto__,size__5522__auto__,b__49982,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)));

var G__50043 = (i__49981 + (1));
i__49981 = G__50043;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49982),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49979(cljs.core.chunk_rest(s__49980__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49982),null);
}
} else {
var vec__49986 = cljs.core.first(s__49980__$2);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49986,(0),null);
var set = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49986,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-2"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Set ",(j + (1)),": ",workout_demo_frontend.components.workout.format_sets(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise))], null),(function (){var exercise_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(exercises_this_workout,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"name","name",1843675177)], null));
var exercise_data = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (exercise_name,vec__49986,j,set,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (p1__49937_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exercise_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__49937_SHARP_));
});})(exercise_name,vec__49986,j,set,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
,exercise_options));
var tracking_type = new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise_data);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(j,current_expanded)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("workout.exercise/weightxreps",tracking_type)){
return workout_demo_frontend.components.workout.weight_reps_input(index,j);
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-red-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__49986,j,set,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),(function (sets){
return workout_demo_frontend.components.workout.remove_at(sets,j);
}));
});})(vec__49986,j,set,s__49980__$2,temp__5804__auto____$1,vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),j], null)),workout_demo_frontend$components$workout$exercise_form_$_iter__49939_$_iter__49979(cljs.core.rest(s__49980__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
;
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(exercise)));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 border-gray-200 rounded-full w-1/4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(workout_demo_frontend.components.workout.selected_workout,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"sets","sets",400955582)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"weight","weight",-1262796205),(0),new cljs.core.Keyword(null,"reps","reps",1391310856),(0)], null)], 0));
});})(vec__49966,index,exercise,s__49940__$2,temp__5804__auto__,exercises_this_workout,current_expanded,current_selected,exercise_options))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.plus_sign], null),"Add Set"], null)], null):null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),workout_demo_frontend$components$workout$exercise_form_$_iter__49939(cljs.core.rest(s__49940__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,exercises_this_workout));
})());

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-gray-100 rounded-full bg-blue-500 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(workout_demo_frontend.components.workout.selected_workout,cljs.core.update,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exercise","exercise",-801618741),cljs.core.first(exercise_options),new cljs.core.Keyword(null,"sets","sets",400955582),cljs.core.PersistentVector.EMPTY], null)], 0));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.plus_sign], null),"Add Exercise"], null);
})()], null);
});
workout_demo_frontend.components.workout.workout_form = (function workout_demo_frontend$components$workout$workout_form(close_fn){
if((cljs.core.deref(workout_demo_frontend.components.workout.selected_workout) == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col gap-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/3"], null),"Workout Type:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"border-gray-200 bg-white rounded-md",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__49989_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.workout.selected_workout,cljs.core.assoc,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__49989_SHARP_.target.value));
})], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout$workout_form_$_iter__49990(s__49991){
return (new cljs.core.LazySeq(null,(function (){
var s__49991__$1 = s__49991;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__49991__$1);
if(temp__5804__auto__){
var s__49991__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49991__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__49991__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__49993 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__49992 = (0);
while(true){
if((i__49992 < size__5522__auto__)){
var vec__49994 = cljs.core._nth(c__5521__auto__,i__49992);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49994,(0),null);
var workout_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49994,(1),null);
cljs.core.chunk_append(b__49993,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout_type)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(workout_type)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout_type))].join('')], null)));

var G__50044 = (i__49992 + (1));
i__49992 = G__50044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49993),workout_demo_frontend$components$workout$workout_form_$_iter__49990(cljs.core.chunk_rest(s__49991__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49993),null);
}
} else {
var vec__49997 = cljs.core.first(s__49991__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(0),null);
var workout_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49997,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout_type)], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(workout_type)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout_type))].join('')], null)),workout_demo_frontend$components$workout$workout_form_$_iter__49990(cljs.core.rest(s__49991__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,workout_demo_frontend.components.workout.workout_types));
})()], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.exercise_form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute bottom-0 p-2 hover:bg-green-300 text-white rounded-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return workout_demo_frontend.components.workout.add_workout(cljs.core.deref(workout_demo_frontend.components.workout.selected_workout),close_fn);
})], null),"Submit"], null)], null);
}
});
workout_demo_frontend.components.workout.select_workout_from_day = (function workout_demo_frontend$components$workout$select_workout_from_day(day,month,year,close_fn){
if((cljs.core.deref(workout_demo_frontend.components.workout.workouts) == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching workouts"], 0));

workout_demo_frontend.components.workout.fetch_workouts(day,month,year);
} else {
}

if((cljs.core.deref(workout_demo_frontend.components.workout.exercises) == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching exercises"], 0));

workout_demo_frontend.components.workout.fetch_exercises();
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative p-4 bg-gray-50 min-h-screen"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.x_sign], null)], null),(((cljs.core.deref(workout_demo_frontend.components.workout.workouts) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):(((cljs.core.deref(workout_demo_frontend.components.workout.selected_workout) == null))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 items-center gap-y-4 mt-6"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$workout$select_workout_from_day_$_iter__50000(s__50001){
return (new cljs.core.LazySeq(null,(function (){
var s__50001__$1 = s__50001;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__50001__$1);
if(temp__5804__auto__){
var s__50001__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50001__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__50001__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__50003 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__50002 = (0);
while(true){
if((i__50002 < size__5522__auto__)){
var vec__50004 = cljs.core._nth(c__5521__auto__,i__50002);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50004,(0),null);
var workout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50004,(1),null);
cljs.core.chunk_append(b__50003,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50002,vec__50004,index,workout,c__5521__auto__,size__5522__auto__,b__50003,s__50001__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(workout_demo_frontend.components.workout.selected_workout,workout);
});})(i__50002,vec__50004,index,workout,c__5521__auto__,size__5522__auto__,b__50003,s__50001__$2,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)));

var G__50045 = (i__50002 + (1));
i__50002 = G__50045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50003),workout_demo_frontend$components$workout$select_workout_from_day_$_iter__50000(cljs.core.chunk_rest(s__50001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50003),null);
}
} else {
var vec__50007 = cljs.core.first(s__50001__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50007,(0),null);
var workout = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50007,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-4",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__50007,index,workout,s__50001__$2,temp__5804__auto__){
return (function (){
return cljs.core.reset_BANG_(workout_demo_frontend.components.workout.selected_workout,workout);
});})(vec__50007,index,workout,s__50001__$2,temp__5804__auto__))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-lg font-bold"], null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(workout)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),index], null)),workout_demo_frontend$components$workout$select_workout_from_day_$_iter__50000(cljs.core.rest(s__50001__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(workout_demo_frontend.components.workout.workouts),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null))));
})(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(workout_demo_frontend.components.workout.selected_workout,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"lifting","lifting",215077504)], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.plus_sign], null),"Add Workout"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout.workout_form,cljs.core.deref(workout_demo_frontend.components.workout.selected_workout),close_fn], null)
)
)], null);
});

//# sourceMappingURL=workout_demo_frontend.components.workout.js.map
