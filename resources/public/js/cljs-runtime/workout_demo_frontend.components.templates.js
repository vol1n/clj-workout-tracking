goog.provide('workout_demo_frontend.components.templates');
workout_demo_frontend.components.templates.settings_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"templates","templates",-1237401733),null,new cljs.core.Keyword(null,"selected-template","selected-template",-599817793),null,new cljs.core.Keyword(null,"new-template","new-template",1491286162),null], null));
workout_demo_frontend.components.templates.form_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY], null));
workout_demo_frontend.components.templates.form_valid_QMARK_ = (function workout_demo_frontend$components$templates$form_valid_QMARK_(){
var map__27887 = cljs.core.deref(workout_demo_frontend.components.templates.form_data);
var map__27887__$1 = cljs.core.__destructure_map(map__27887);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27887__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27887__$1,new cljs.core.Keyword(null,"symbol","symbol",-1038572696));
var exercises = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27887__$1,new cljs.core.Keyword(null,"exercises","exercises",-277203742));
var invalid_symbol = (((symbol == null)) || (cljs.core.not(cljs.core.re_matches(/.{1,2}/,symbol))));
var invalid_name = (((name == null)) || (cljs.core.empty_QMARK_(name)));
var invalid_exercises = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27885_SHARP_){
var or__5045__auto__ = (((new cljs.core.Keyword(null,"num-sets","num-sets",1969437196).cljs$core$IFn$_invoke$arity$1(p1__27885_SHARP_) < (1)))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"num-sets","num-sets",1969437196),true], null):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27885_SHARP_))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),true], null);
} else {
return null;
}
}
}),exercises);
var errors = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),invalid_name,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),invalid_symbol,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,err){
if(cljs.core.truth_(err)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([i,err]);
} else {
return null;
}
}),invalid_exercises)], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc,new cljs.core.Keyword(null,"errors","errors",-908790718),errors);

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["errors ",errors], 0));

return cljs.core.not_any_QMARK_(cljs.core.identity,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27886_SHARP_){
if(cljs.core.seq_QMARK_(p1__27886_SHARP_)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(any? %) ",cljs.core.any_QMARK_(p1__27886_SHARP_)], 0));
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(identity %) ",cljs.core.identity(p1__27886_SHARP_)], 0));
}
}),cljs.core.vals(errors)));
});
workout_demo_frontend.components.templates.update_templates = (function workout_demo_frontend$components$templates$update_templates(){
var on_success = (function (p1__27888_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"templates","templates",-1237401733),p1__27888_SHARP_);
});
return workout_demo_frontend.util.templates.fetch_templates(on_success);
});
workout_demo_frontend.components.templates.update_template = (function workout_demo_frontend$components$templates$update_template(id){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching template"], 0));

var on_success = (function (p1__27889_SHARP_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.templates.settings_state,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"selected-template","selected-template",-599817793),id);
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(workout_demo_frontend.components.templates.form_data,(function (prev){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(prev,new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__27889_SHARP_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.vec(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(p1__27889_SHARP_)),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__27889_SHARP_),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(p1__27889_SHARP_)], 0));
}));
});
return workout_demo_frontend.util.templates.fetch_template(id,on_success);
});
workout_demo_frontend.components.templates.save_template = (function workout_demo_frontend$components$templates$save_template(on_success){
var current_form_state = cljs.core.deref(workout_demo_frontend.components.templates.form_data);
var get_tracking_type_kw = (function (p1__27890_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__27890_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),new cljs.core.Keyword(null,"ident","ident",-742346)], null));
});
var get_tracking_type_str = (function (p1__27891_SHARP_){
return [cljs.core.namespace(get_tracking_type_kw(p1__27891_SHARP_)),"/",cljs.core.name(get_tracking_type_kw(p1__27891_SHARP_))].join('');
});
var data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(current_form_state,new cljs.core.Keyword(null,"expanded","expanded",-3020742)),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(current_form_state),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__27892_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__27892_SHARP_,new cljs.core.Keyword(null,"num-sets","num-sets",1969437196),parseInt(new cljs.core.Keyword(null,"num-sets","num-sets",1969437196).cljs$core$IFn$_invoke$arity$1(p1__27892_SHARP_)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),get_tracking_type_str(p1__27892_SHARP_)], 0));
}),new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(current_form_state))], 0)),new cljs.core.Keyword(null,"template","template",-702405684));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["form-valid? ",workout_demo_frontend.components.templates.form_valid_QMARK_()], 0));

if(workout_demo_frontend.components.templates.form_valid_QMARK_()){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["data ",data], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["current-form-state ",current_form_state], 0));

return workout_demo_frontend.auth.api_call(ajax.core.POST,"http://localhost:3000/templates",new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
workout_demo_frontend.components.templates.update_templates();

if(cljs.core.truth_(on_success)){
return (on_success.cljs$core$IFn$_invoke$arity$0 ? on_success.cljs$core$IFn$_invoke$arity$0() : on_success.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27893_SHARP_){
return console.error("Failed to add template",p1__27893_SHARP_);
})], null));
} else {
return null;
}
});
workout_demo_frontend.components.templates.new_template = (function workout_demo_frontend$components$templates$new_template(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.settings_state,cljs.core.assoc,new cljs.core.Keyword(null,"new-template","new-template",1491286162),true);
});
workout_demo_frontend.components.templates.remove_at = (function workout_demo_frontend$components$templates$remove_at(v,i){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(v,(i + (1)))));
});
workout_demo_frontend.components.templates.remove_exercise = (function workout_demo_frontend$components$templates$remove_exercise(index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.vec(workout_demo_frontend.components.templates.remove_at(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data)),index)));
});
workout_demo_frontend.components.templates.add_exercise = (function workout_demo_frontend$components$templates$add_exercise(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"New exercise",new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.Keyword("workout.exercise","weightxreps","workout.exercise/weightxreps",-787260663)], null),new cljs.core.Keyword(null,"num-sets","num-sets",1969437196),(1)], null)));
});
workout_demo_frontend.components.templates.template_editor = (function workout_demo_frontend$components$templates$template_editor(close_fn){
var data = new cljs.core.Keyword(null,"exercises","exercises",-277203742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data));
var symbol = new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data));
var errors = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.form_data));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["exercises ",data], 0));

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-x-4"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold w-1/8 border-2 border-gray-100 bg-white rounded-md",(cljs.core.truth_(new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(errors))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"value","value",305978217),symbol,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27894_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),p1__27894_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-2xl font-bold border-2 border-gray-100 bg-white rounded-md",(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(errors))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"value","value",305978217),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__27895_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc,new cljs.core.Keyword(null,"name","name",1843675177),p1__27895_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500",new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.icons.x_sign], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 items-center gap-y-4 mt-6"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function workout_demo_frontend$components$templates$template_editor_$_iter__27899(s__27900){
return (new cljs.core.LazySeq(null,(function (){
var s__27900__$1 = s__27900;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27900__$1);
if(temp__5804__auto__){
var s__27900__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27900__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27900__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27902 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27901 = (0);
while(true){
if((i__27901 < size__5522__auto__)){
var vec__27903 = cljs.core._nth(c__5521__auto__,i__27901);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27903,(1),null);
cljs.core.chunk_append(b__27902,(function (){var tracking_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row justify-between items-center rounded-md bg-gray-50 border-gray-100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-2 border-gray-100 bg-white rounded-md text-lg font-bold",(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"name","name",1843675177)], null)))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27896_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27896_SHARP_.target.value);
});})(i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),tracking_type,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27897_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611)], null),p1__27897_SHARP_.target.value);
});})(i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workout.exercise","weightxreps","workout.exercise/weightxreps",-787260663)], null),"Weight x Reps"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"weightxreps"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workout.exercise","time","workout.exercise/time",462488211)], null),"Time"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"time"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-2 border-gray-100 bg-white rounded-md text-lg font-bold",(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"num-sets","num-sets",1969437196)], null)))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"num-sets","num-sets",1969437196).cljs$core$IFn$_invoke$arity$1(exercise),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27898_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"num-sets","num-sets",1969437196)], null),p1__27898_SHARP_.target.value);
});})(i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-red-700 rounded-full bg-red-500 transition duration-200 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (){
return workout_demo_frontend.components.templates.remove_exercise(index);
});})(i__27901,tracking_type,vec__27903,index,exercise,c__5521__auto__,size__5522__auto__,b__27902,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.icons.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["exercise",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null));
})());

var G__27919 = (i__27901 + (1));
i__27901 = G__27919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27902),workout_demo_frontend$components$templates$template_editor_$_iter__27899(cljs.core.chunk_rest(s__27900__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27902),null);
}
} else {
var vec__27906 = cljs.core.first(s__27900__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27906,(0),null);
var exercise = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27906,(1),null);
return cljs.core.cons((function (){var tracking_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ident","ident",-742346).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611).cljs$core$IFn$_invoke$arity$1(exercise)));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-row justify-between items-center rounded-md bg-gray-50 border-gray-100"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-2 border-gray-100 bg-white rounded-md text-lg font-bold",(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"name","name",1843675177)], null)))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(exercise),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27896_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"name","name",1843675177)], null),p1__27896_SHARP_.target.value);
});})(tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),tracking_type,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27897_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"tracking-type","tracking-type",-1546580611)], null),p1__27897_SHARP_.target.value);
});})(tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workout.exercise","weightxreps","workout.exercise/weightxreps",-787260663)], null),"Weight x Reps"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"weightxreps"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword("workout.exercise","time","workout.exercise/time",462488211)], null),"Time"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"time"], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["border-2 border-gray-100 bg-white rounded-md text-lg font-bold",(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(errors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"num-sets","num-sets",1969437196)], null)))?" border-red-500":null)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"num-sets","num-sets",1969437196).cljs$core$IFn$_invoke$arity$1(exercise),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (p1__27898_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.templates.form_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exercises","exercises",-277203742),index,new cljs.core.Keyword(null,"num-sets","num-sets",1969437196)], null),p1__27898_SHARP_.target.value);
});})(tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center gap-2 p-2 hover:bg-red-700 rounded-full bg-red-500 transition duration-200 text-white",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors){
return (function (){
return workout_demo_frontend.components.templates.remove_exercise(index);
});})(tracking_type,vec__27906,index,exercise,s__27900__$2,temp__5804__auto__,data,name,symbol,errors))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.icons.x_sign], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["exercise",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null));
})(),workout_demo_frontend$components$templates$template_editor_$_iter__27899(cljs.core.rest(s__27900__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,data));
})()),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add Exercise",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"icon","icon",1679606541),workout_demo_frontend.components.icons.plus_sign,new cljs.core.Keyword(null,"on-click","on-click",1632826543),workout_demo_frontend.components.templates.add_exercise,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/3"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"add-exercise"], null)),cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Save Template",new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"icon","icon",1679606541),workout_demo_frontend.components.icons.check_mark,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return workout_demo_frontend.components.templates.save_template(close_fn);
}),new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/3 bg-green-300 hover:bg-green-400"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"save-template"], null))], null)], null);
});
workout_demo_frontend.components.templates.select_template = (function workout_demo_frontend$components$templates$select_template(){
if((new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.templates.settings_state)) == null)){
workout_demo_frontend.components.templates.update_templates();
} else {
}

var close_fn = (function (){
cljs.core.reset_BANG_(workout_demo_frontend.components.templates.form_data,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"exercises","exercises",-277203742),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null));

return cljs.core.reset_BANG_(workout_demo_frontend.components.templates.settings_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"templates","templates",-1237401733),null,new cljs.core.Keyword(null,"selected-template","selected-template",-599817793),null], null));
});
var current_settings_state = cljs.core.deref(workout_demo_frontend.components.templates.settings_state);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["current-settings-state",current_settings_state], 0));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative p-4 bg-gray-50 min-h-screen"], null),(((new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(current_settings_state) == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Loading..."], null):(((((new cljs.core.Keyword(null,"selected-template","selected-template",-599817793).cljs$core$IFn$_invoke$arity$1(current_settings_state) == null)) && ((new cljs.core.Keyword(null,"new-template","new-template",1491286162).cljs$core$IFn$_invoke$arity$1(current_settings_state) == null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-1 items-center gap-y-4 mt-6"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$templates$select_template_$_iter__27909(s__27910){
return (new cljs.core.LazySeq(null,(function (){
var s__27910__$1 = s__27910;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27910__$1);
if(temp__5804__auto__){
var s__27910__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27910__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27910__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27912 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27911 = (0);
while(true){
if((i__27911 < size__5522__auto__)){
var vec__27913 = cljs.core._nth(c__5521__auto__,i__27911);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27913,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27913,(1),null);
cljs.core.chunk_append(b__27912,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state){
return (function (){
return ((function (i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(template)], null);
});
;})(i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state))
});})(i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state){
return (function (){
return workout_demo_frontend.components.templates.update_template(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
});})(i__27911,vec__27913,index,template,c__5521__auto__,size__5522__auto__,b__27912,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["template",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__27920 = (i__27911 + (1));
i__27911 = G__27920;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27912),workout_demo_frontend$components$templates$select_template_$_iter__27909(cljs.core.chunk_rest(s__27910__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27912),null);
}
} else {
var vec__27916 = cljs.core.first(s__27910__$2);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(0),null);
var template = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27916,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"icon","icon",1679606541),((function (vec__27916,index,template,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state){
return (function (){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-2xl"], null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(template)], null);
});
});})(vec__27916,index,template,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state))
,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27916,index,template,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state){
return (function (){
return workout_demo_frontend.components.templates.update_template(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template));
});})(vec__27916,index,template,s__27910__$2,temp__5804__auto__,close_fn,current_settings_state))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["template",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),workout_demo_frontend$components$templates$select_template_$_iter__27909(cljs.core.rest(s__27910__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"templates","templates",-1237401733).cljs$core$IFn$_invoke$arity$1(current_settings_state)));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.list_button.list_button,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),"Add Template",new cljs.core.Keyword(null,"icon","icon",1679606541),workout_demo_frontend.components.icons.plus_sign,new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),workout_demo_frontend.components.templates.new_template,new cljs.core.Keyword(null,"extra-classes","extra-classes",-630819843),"w-1/3"], null)], null)], null):workout_demo_frontend.components.templates.template_editor(close_fn)
)
)], null);
});

//# sourceMappingURL=workout_demo_frontend.components.templates.js.map
