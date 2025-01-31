goog.provide('workout_demo_frontend.components.tabs');
workout_demo_frontend.components.tabs.tabs_list = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"insights","insights",-1580301985),new cljs.core.Keyword(null,"label","label",1718410804),"\uD83D\uDCC8"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"calendar","calendar",62308146),new cljs.core.Keyword(null,"label","label",1718410804),"\uD83D\uDCC5"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"label","label",1718410804),"\u2699\uFE0F"], null)], null);
workout_demo_frontend.components.tabs.current_tab = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"calendar","calendar",62308146));
workout_demo_frontend.components.tabs.tabs = (function workout_demo_frontend$components$tabs$tabs(){
var selected = cljs.core.deref(workout_demo_frontend.components.tabs.current_tab);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed bottom-0 flex items-center w-full bg-white border-t border-gray-200"], null),(function (){var iter__5523__auto__ = (function workout_demo_frontend$components$tabs$tabs_$_iter__28083(s__28084){
return (new cljs.core.LazySeq(null,(function (){
var s__28084__$1 = s__28084;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28084__$1);
if(temp__5804__auto__){
var s__28084__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28084__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28084__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28086 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28085 = (0);
while(true){
if((i__28085 < size__5522__auto__)){
var tab = cljs.core._nth(c__5521__auto__,i__28085);
cljs.core.chunk_append(b__28086,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),selected))?"flex items-center justify-center w-full h-16 bg-gray-100 text-blue-500":"flex items-center justify-center w-full h-16 hover:bg-gray-200 text-gray-500"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__28085,tab,c__5521__auto__,size__5522__auto__,b__28086,s__28084__$2,temp__5804__auto__,selected){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked tab:",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),"Current tab:",selected], 0));

cljs.core.reset_BANG_(workout_demo_frontend.components.tabs.current_tab,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New current tab:",cljs.core.deref(workout_demo_frontend.components.tabs.current_tab)], 0));
});})(i__28085,tab,c__5521__auto__,size__5522__auto__,b__28086,s__28084__$2,temp__5804__auto__,selected))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-6xl"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab)], null)));

var G__28087 = (i__28085 + (1));
i__28085 = G__28087;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28086),workout_demo_frontend$components$tabs$tabs_$_iter__28083(cljs.core.chunk_rest(s__28084__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28086),null);
}
} else {
var tab = cljs.core.first(s__28084__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),selected))?"flex items-center justify-center w-full h-16 bg-gray-100 text-blue-500":"flex items-center justify-center w-full h-16 hover:bg-gray-200 text-gray-500"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (tab,s__28084__$2,temp__5804__auto__,selected){
return (function (){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Clicked tab:",new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab),"Current tab:",selected], 0));

cljs.core.reset_BANG_(workout_demo_frontend.components.tabs.current_tab,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["New current tab:",cljs.core.deref(workout_demo_frontend.components.tabs.current_tab)], 0));
});})(tab,s__28084__$2,temp__5804__auto__,selected))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-6xl"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(tab)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tab)], null)),workout_demo_frontend$components$tabs$tabs_$_iter__28083(cljs.core.rest(s__28084__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(workout_demo_frontend.components.tabs.tabs_list);
})()], null);
});

//# sourceMappingURL=workout_demo_frontend.components.tabs.js.map
