goog.provide('workout_demo_frontend.components.calendar');
workout_demo_frontend.components.calendar.months = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null);
workout_demo_frontend.components.calendar.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], null);
workout_demo_frontend.components.calendar.decrement_month = (function workout_demo_frontend$components$calendar$decrement_month(month,year){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(11),(year - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(month - (1)),year], null);
}
});
workout_demo_frontend.components.calendar.increment_month = (function workout_demo_frontend$components$calendar$increment_month(month,year){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(month,(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(year + (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(month + (1)),year], null);
}
});
workout_demo_frontend.components.calendar.current_date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"month","month",-1960248533),(new Date()).getMonth(),new cljs.core.Keyword(null,"year","year",335913393),(new Date()).getFullYear(),new cljs.core.Keyword(null,"day","day",-274800446),(new Date()).getDate()], null);
workout_demo_frontend.components.calendar.selected_month = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var map__27692 = workout_demo_frontend.components.calendar.current_date;
var map__27692__$1 = cljs.core.__destructure_map(map__27692);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27692__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27692__$1,new cljs.core.Keyword(null,"year","year",335913393));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null);
})());
workout_demo_frontend.components.calendar.first_day_of_month = (function workout_demo_frontend$components$calendar$first_day_of_month(month,year){
var first_of_month = (new Date(year,month,(1)));
return first_of_month.getDay();
});
workout_demo_frontend.components.calendar.get_days_in_month = (function workout_demo_frontend$components$calendar$get_days_in_month(month,year){
var vec__27693 = workout_demo_frontend.components.calendar.increment_month(month,year);
var next_month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27693,(0),null);
var next_year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27693,(1),null);
var last_of_this_month = (new Date(next_year,next_month,(0)));
return last_of_this_month.getDate();
});
workout_demo_frontend.components.calendar.chevron_right = (function workout_demo_frontend$components$calendar$chevron_right(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M9 5l7 7-7 7"], null)], null)], null);
});
workout_demo_frontend.components.calendar.chevron_left = (function workout_demo_frontend$components$calendar$chevron_left(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-6 h-6",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"d","d",1972142424),"M15 19l-7-7 7-7"], null)], null)], null);
});
workout_demo_frontend.components.calendar.month_summary = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
workout_demo_frontend.components.calendar.calendar_header = (function workout_demo_frontend$components$calendar$calendar_header(){
var map__27696 = cljs.core.deref(workout_demo_frontend.components.calendar.selected_month);
var map__27696__$1 = cljs.core.__destructure_map(map__27696);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27696__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27696__$1,new cljs.core.Keyword(null,"year","year",335913393));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between mb-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 hover:bg-gray-100 rounded-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var vec__27697 = workout_demo_frontend.components.calendar.decrement_month(month,year);
var new_month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27697,(0),null);
var new_year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27697,(1),null);
return cljs.core.reset_BANG_(workout_demo_frontend.components.calendar.selected_month,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),new_month,new cljs.core.Keyword(null,"year","year",335913393),new_year], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.chevron_left], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-bold"], null),(workout_demo_frontend.components.calendar.months.cljs$core$IFn$_invoke$arity$1 ? workout_demo_frontend.components.calendar.months.cljs$core$IFn$_invoke$arity$1(month) : workout_demo_frontend.components.calendar.months.call(null,month))," ",year], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-2 hover:bg-gray-100 rounded-full",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var vec__27700 = workout_demo_frontend.components.calendar.increment_month(month,year);
var new_month = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27700,(0),null);
var new_year = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27700,(1),null);
return cljs.core.reset_BANG_(workout_demo_frontend.components.calendar.selected_month,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),new_month,new cljs.core.Keyword(null,"year","year",335913393),new_year], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.chevron_right], null)], null)], null);
});
workout_demo_frontend.components.calendar.is_past_date_QMARK_ = (function workout_demo_frontend$components$calendar$is_past_date_QMARK_(day,month,year){
var date = (new Date(year,month,day));
var today = (new Date());
return (date.getTime() < today.setHours((0),(0),(0),(0)));
});
workout_demo_frontend.components.calendar.is_current_date_QMARK_ = (function workout_demo_frontend$components$calendar$is_current_date_QMARK_(input_day,input_month,input_year){
var map__27703 = workout_demo_frontend.components.calendar.current_date;
var map__27703__$1 = cljs.core.__destructure_map(map__27703);
var day = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27703__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27703__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27703__$1,new cljs.core.Keyword(null,"year","year",335913393));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_day,day)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_month,month)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_year,year)))));
});
workout_demo_frontend.components.calendar.selected_day = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
workout_demo_frontend.components.calendar.day_cell = (function workout_demo_frontend$components$calendar$day_cell(day,month,year,summary){
var past_QMARK_ = workout_demo_frontend.components.calendar.is_past_date_QMARK_(day,month,year);
var current_QMARK_ = workout_demo_frontend.components.calendar.is_current_date_QMARK_(day,month,year);
var symbols = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(day))));
var symbols_string = clojure.string.join.cljs$core$IFn$_invoke$arity$2("",symbols);
var base_classes = "w-10 h-10 flex items-center justify-center rounded-full";
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[base_classes," ",((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(symbols),(0)))?"bg-green-300 hover:bg-green-400 transition duration-200 text-white":((current_QMARK_)?"bg-blue-500 hover:bg-blue-600 transition duration-200 text-white":((past_QMARK_)?"bg-gray-100 hover:bg-gray-200 transition duration-200":"hover:bg-gray-50"
)))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(workout_demo_frontend.components.calendar.selected_day,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"day","day",-274800446),day,new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null));
})], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(((symbols_string).length),(0)))?symbols_string:day
)], null)], null);
});
workout_demo_frontend.components.calendar.update_month_summary_BANG_ = (function workout_demo_frontend$components$calendar$update_month_summary_BANG_(month,year){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["fetching summary"], 0));

return workout_demo_frontend.auth.api_call(ajax.core.GET,"http://localhost:3000/summary",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__27705_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(workout_demo_frontend.components.calendar.month_summary,cljs.core.assoc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null),p1__27705_SHARP_);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__27706_SHARP_){
return console.error("Failed to fetch summary",p1__27706_SHARP_);
})], null));
});
if((typeof workout_demo_frontend !== 'undefined') && (typeof workout_demo_frontend.components !== 'undefined') && (typeof workout_demo_frontend.components.calendar !== 'undefined') && (typeof workout_demo_frontend.components.calendar.fetch_trigger !== 'undefined')){
} else {
workout_demo_frontend.components.calendar.fetch_trigger = (function (){var co__27520__auto__ = reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
var map__27708 = cljs.core.deref(workout_demo_frontend.components.calendar.selected_month);
var map__27708__$1 = cljs.core.__destructure_map(map__27708);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27708__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27708__$1,new cljs.core.Keyword(null,"year","year",335913393));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["@logged-in?",cljs.core.deref(workout_demo_frontend.auth.logged_in_QMARK_)], 0));

if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(workout_demo_frontend.components.calendar.month_summary),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(cljs.core.deref(workout_demo_frontend.auth.logged_in_QMARK_));
}
})())){
return null;
} else {
return workout_demo_frontend.components.calendar.update_month_summary_BANG_(month,year);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"auto-run","auto-run",1958400437),true], 0));
cljs.core.deref(co__27520__auto__);

return co__27520__auto__;
})();
}
workout_demo_frontend.components.calendar.calendar = (function workout_demo_frontend$components$calendar$calendar(){
if((cljs.core.deref(workout_demo_frontend.components.calendar.selected_day) == null)){
var map__27710 = cljs.core.deref(workout_demo_frontend.components.calendar.selected_month);
var map__27710__$1 = cljs.core.__destructure_map(map__27710);
var month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27710__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27710__$1,new cljs.core.Keyword(null,"year","year",335913393));
var summary = cljs.core.deref(workout_demo_frontend.components.calendar.month_summary);
var this_month = cljs.core.get.cljs$core$IFn$_invoke$arity$2(summary,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"month","month",-1960248533),month,new cljs.core.Keyword(null,"year","year",335913393),year], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col items-center"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.calendar_header], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"grid grid-cols-7 gap-2 w-full mt-4 gap-y-10"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$calendar$calendar_$_iter__27712(s__27713){
return (new cljs.core.LazySeq(null,(function (){
var s__27713__$1 = s__27713;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27713__$1);
if(temp__5804__auto__){
var s__27713__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27713__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27713__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27715 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27714 = (0);
while(true){
if((i__27714 < size__5522__auto__)){
var day = cljs.core._nth(c__5521__auto__,i__27714);
cljs.core.chunk_append(b__27715,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-10 font-semibold"], null),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),day], null)));

var G__27729 = (i__27714 + (1));
i__27714 = G__27729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27715),workout_demo_frontend$components$calendar$calendar_$_iter__27712(cljs.core.chunk_rest(s__27713__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27715),null);
}
} else {
var day = cljs.core.first(s__27713__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-10 font-semibold"], null),day], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),day], null)),workout_demo_frontend$components$calendar$calendar_$_iter__27712(cljs.core.rest(s__27713__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(workout_demo_frontend.components.calendar.days);
})(),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$calendar$calendar_$_iter__27716(s__27717){
return (new cljs.core.LazySeq(null,(function (){
var s__27717__$1 = s__27717;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27717__$1);
if(temp__5804__auto__){
var s__27717__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27717__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27717__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27719 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27718 = (0);
while(true){
if((i__27718 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__27718);
cljs.core.chunk_append(b__27719,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-10"], null),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__27730 = (i__27718 + (1));
i__27718 = G__27730;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27719),workout_demo_frontend$components$calendar$calendar_$_iter__27716(cljs.core.chunk_rest(s__27717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27719),null);
}
} else {
var i = cljs.core.first(s__27717__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-center h-10"], null),""], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),workout_demo_frontend$components$calendar$calendar_$_iter__27716(cljs.core.rest(s__27717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(workout_demo_frontend.components.calendar.first_day_of_month(month,year)));
})(),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$calendar$calendar_$_iter__27722(s__27723){
return (new cljs.core.LazySeq(null,(function (){
var s__27723__$1 = s__27723;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__27723__$1);
if(temp__5804__auto__){
var s__27723__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27723__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__27723__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__27725 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__27724 = (0);
while(true){
if((i__27724 < size__5522__auto__)){
var day = cljs.core._nth(c__5521__auto__,i__27724);
cljs.core.chunk_append(b__27725,cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.day_cell,day,month,year,this_month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),day], null)));

var G__27731 = (i__27724 + (1));
i__27724 = G__27731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27725),workout_demo_frontend$components$calendar$calendar_$_iter__27722(cljs.core.chunk_rest(s__27723__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27725),null);
}
} else {
var day = cljs.core.first(s__27723__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.calendar.day_cell,day,month,year,this_month], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),day], null)),workout_demo_frontend$components$calendar$calendar_$_iter__27722(cljs.core.rest(s__27723__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(workout_demo_frontend.components.calendar.get_days_in_month(month,year) + (1))));
})()], null)], null);
} else {
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [workout_demo_frontend.components.workout2.select_workout,new cljs.core.Keyword(null,"day","day",-274800446).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.calendar.selected_day)),new cljs.core.Keyword(null,"month","month",-1960248533).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.calendar.selected_day)),new cljs.core.Keyword(null,"year","year",335913393).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(workout_demo_frontend.components.calendar.selected_day)),(function (){
return cljs.core.reset_BANG_(workout_demo_frontend.components.calendar.selected_day,null);
})], null);
}
});

//# sourceMappingURL=workout_demo_frontend.components.calendar.js.map
