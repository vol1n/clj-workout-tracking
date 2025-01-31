goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35426 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35426(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35436 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35436(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34314 = coll;
var G__34315 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34314,G__34315) : shadow.dom.lazy_native_coll_seq.call(null,G__34314,G__34315));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__34345 = arguments.length;
switch (G__34345) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__34364 = arguments.length;
switch (G__34364) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__34381 = arguments.length;
switch (G__34381) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__34394 = arguments.length;
switch (G__34394) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__34406 = arguments.length;
switch (G__34406) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__34414 = arguments.length;
switch (G__34414) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34422){if((e34422 instanceof Object)){
var e = e34422;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34422;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34430 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34431 = null;
var count__34432 = (0);
var i__34433 = (0);
while(true){
if((i__34433 < count__34432)){
var el = chunk__34431.cljs$core$IIndexed$_nth$arity$2(null,i__34433);
var handler_35468__$1 = ((function (seq__34430,chunk__34431,count__34432,i__34433,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34430,chunk__34431,count__34432,i__34433,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35468__$1);


var G__35475 = seq__34430;
var G__35476 = chunk__34431;
var G__35477 = count__34432;
var G__35478 = (i__34433 + (1));
seq__34430 = G__35475;
chunk__34431 = G__35476;
count__34432 = G__35477;
i__34433 = G__35478;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34430);
if(temp__5804__auto__){
var seq__34430__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34430__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34430__$1);
var G__35479 = cljs.core.chunk_rest(seq__34430__$1);
var G__35480 = c__5568__auto__;
var G__35481 = cljs.core.count(c__5568__auto__);
var G__35482 = (0);
seq__34430 = G__35479;
chunk__34431 = G__35480;
count__34432 = G__35481;
i__34433 = G__35482;
continue;
} else {
var el = cljs.core.first(seq__34430__$1);
var handler_35483__$1 = ((function (seq__34430,chunk__34431,count__34432,i__34433,el,seq__34430__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34430,chunk__34431,count__34432,i__34433,el,seq__34430__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35483__$1);


var G__35489 = cljs.core.next(seq__34430__$1);
var G__35490 = null;
var G__35491 = (0);
var G__35492 = (0);
seq__34430 = G__35489;
chunk__34431 = G__35490;
count__34432 = G__35491;
i__34433 = G__35492;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__34461 = arguments.length;
switch (G__34461) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__34472 = cljs.core.seq(events);
var chunk__34473 = null;
var count__34474 = (0);
var i__34475 = (0);
while(true){
if((i__34475 < count__34474)){
var vec__34491 = chunk__34473.cljs$core$IIndexed$_nth$arity$2(null,i__34475);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34491,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34491,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35502 = seq__34472;
var G__35503 = chunk__34473;
var G__35504 = count__34474;
var G__35505 = (i__34475 + (1));
seq__34472 = G__35502;
chunk__34473 = G__35503;
count__34474 = G__35504;
i__34475 = G__35505;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34472);
if(temp__5804__auto__){
var seq__34472__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34472__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34472__$1);
var G__35506 = cljs.core.chunk_rest(seq__34472__$1);
var G__35507 = c__5568__auto__;
var G__35508 = cljs.core.count(c__5568__auto__);
var G__35509 = (0);
seq__34472 = G__35506;
chunk__34473 = G__35507;
count__34474 = G__35508;
i__34475 = G__35509;
continue;
} else {
var vec__34496 = cljs.core.first(seq__34472__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34496,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34496,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35510 = cljs.core.next(seq__34472__$1);
var G__35511 = null;
var G__35512 = (0);
var G__35513 = (0);
seq__34472 = G__35510;
chunk__34473 = G__35511;
count__34474 = G__35512;
i__34475 = G__35513;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__34507 = cljs.core.seq(styles);
var chunk__34508 = null;
var count__34509 = (0);
var i__34510 = (0);
while(true){
if((i__34510 < count__34509)){
var vec__34524 = chunk__34508.cljs$core$IIndexed$_nth$arity$2(null,i__34510);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34524,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35514 = seq__34507;
var G__35515 = chunk__34508;
var G__35516 = count__34509;
var G__35517 = (i__34510 + (1));
seq__34507 = G__35514;
chunk__34508 = G__35515;
count__34509 = G__35516;
i__34510 = G__35517;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34507);
if(temp__5804__auto__){
var seq__34507__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34507__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34507__$1);
var G__35518 = cljs.core.chunk_rest(seq__34507__$1);
var G__35519 = c__5568__auto__;
var G__35520 = cljs.core.count(c__5568__auto__);
var G__35521 = (0);
seq__34507 = G__35518;
chunk__34508 = G__35519;
count__34509 = G__35520;
i__34510 = G__35521;
continue;
} else {
var vec__34535 = cljs.core.first(seq__34507__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34535,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35531 = cljs.core.next(seq__34507__$1);
var G__35532 = null;
var G__35533 = (0);
var G__35534 = (0);
seq__34507 = G__35531;
chunk__34508 = G__35532;
count__34509 = G__35533;
i__34510 = G__35534;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__34562_35535 = key;
var G__34562_35536__$1 = (((G__34562_35535 instanceof cljs.core.Keyword))?G__34562_35535.fqn:null);
switch (G__34562_35536__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_35542 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_35542,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_35542,"aria-");
}
})())){
el.setAttribute(ks_35542,value);
} else {
(el[ks_35542] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34594){
var map__34595 = p__34594;
var map__34595__$1 = cljs.core.__destructure_map(map__34595);
var props = map__34595__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34595__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34596 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34596,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34599 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34599,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34599;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34612 = arguments.length;
switch (G__34612) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34633){
var vec__34637 = p__34633;
var seq__34638 = cljs.core.seq(vec__34637);
var first__34639 = cljs.core.first(seq__34638);
var seq__34638__$1 = cljs.core.next(seq__34638);
var nn = first__34639;
var first__34639__$1 = cljs.core.first(seq__34638__$1);
var seq__34638__$2 = cljs.core.next(seq__34638__$1);
var np = first__34639__$1;
var nc = seq__34638__$2;
var node = vec__34637;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34644 = nn;
var G__34645 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34644,G__34645) : create_fn.call(null,G__34644,G__34645));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34654 = nn;
var G__34655 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34654,G__34655) : create_fn.call(null,G__34654,G__34655));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34663 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34663,(1),null);
var seq__34666_35552 = cljs.core.seq(node_children);
var chunk__34667_35553 = null;
var count__34668_35554 = (0);
var i__34669_35555 = (0);
while(true){
if((i__34669_35555 < count__34668_35554)){
var child_struct_35560 = chunk__34667_35553.cljs$core$IIndexed$_nth$arity$2(null,i__34669_35555);
var children_35561 = shadow.dom.dom_node(child_struct_35560);
if(cljs.core.seq_QMARK_(children_35561)){
var seq__34705_35563 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35561));
var chunk__34707_35564 = null;
var count__34708_35565 = (0);
var i__34709_35566 = (0);
while(true){
if((i__34709_35566 < count__34708_35565)){
var child_35568 = chunk__34707_35564.cljs$core$IIndexed$_nth$arity$2(null,i__34709_35566);
if(cljs.core.truth_(child_35568)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35568);


var G__35571 = seq__34705_35563;
var G__35572 = chunk__34707_35564;
var G__35573 = count__34708_35565;
var G__35574 = (i__34709_35566 + (1));
seq__34705_35563 = G__35571;
chunk__34707_35564 = G__35572;
count__34708_35565 = G__35573;
i__34709_35566 = G__35574;
continue;
} else {
var G__35579 = seq__34705_35563;
var G__35580 = chunk__34707_35564;
var G__35581 = count__34708_35565;
var G__35582 = (i__34709_35566 + (1));
seq__34705_35563 = G__35579;
chunk__34707_35564 = G__35580;
count__34708_35565 = G__35581;
i__34709_35566 = G__35582;
continue;
}
} else {
var temp__5804__auto___35583 = cljs.core.seq(seq__34705_35563);
if(temp__5804__auto___35583){
var seq__34705_35584__$1 = temp__5804__auto___35583;
if(cljs.core.chunked_seq_QMARK_(seq__34705_35584__$1)){
var c__5568__auto___35585 = cljs.core.chunk_first(seq__34705_35584__$1);
var G__35587 = cljs.core.chunk_rest(seq__34705_35584__$1);
var G__35588 = c__5568__auto___35585;
var G__35589 = cljs.core.count(c__5568__auto___35585);
var G__35590 = (0);
seq__34705_35563 = G__35587;
chunk__34707_35564 = G__35588;
count__34708_35565 = G__35589;
i__34709_35566 = G__35590;
continue;
} else {
var child_35592 = cljs.core.first(seq__34705_35584__$1);
if(cljs.core.truth_(child_35592)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35592);


var G__35598 = cljs.core.next(seq__34705_35584__$1);
var G__35599 = null;
var G__35600 = (0);
var G__35601 = (0);
seq__34705_35563 = G__35598;
chunk__34707_35564 = G__35599;
count__34708_35565 = G__35600;
i__34709_35566 = G__35601;
continue;
} else {
var G__35602 = cljs.core.next(seq__34705_35584__$1);
var G__35603 = null;
var G__35604 = (0);
var G__35605 = (0);
seq__34705_35563 = G__35602;
chunk__34707_35564 = G__35603;
count__34708_35565 = G__35604;
i__34709_35566 = G__35605;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35561);
}


var G__35606 = seq__34666_35552;
var G__35607 = chunk__34667_35553;
var G__35608 = count__34668_35554;
var G__35609 = (i__34669_35555 + (1));
seq__34666_35552 = G__35606;
chunk__34667_35553 = G__35607;
count__34668_35554 = G__35608;
i__34669_35555 = G__35609;
continue;
} else {
var temp__5804__auto___35611 = cljs.core.seq(seq__34666_35552);
if(temp__5804__auto___35611){
var seq__34666_35612__$1 = temp__5804__auto___35611;
if(cljs.core.chunked_seq_QMARK_(seq__34666_35612__$1)){
var c__5568__auto___35613 = cljs.core.chunk_first(seq__34666_35612__$1);
var G__35614 = cljs.core.chunk_rest(seq__34666_35612__$1);
var G__35615 = c__5568__auto___35613;
var G__35616 = cljs.core.count(c__5568__auto___35613);
var G__35617 = (0);
seq__34666_35552 = G__35614;
chunk__34667_35553 = G__35615;
count__34668_35554 = G__35616;
i__34669_35555 = G__35617;
continue;
} else {
var child_struct_35618 = cljs.core.first(seq__34666_35612__$1);
var children_35619 = shadow.dom.dom_node(child_struct_35618);
if(cljs.core.seq_QMARK_(children_35619)){
var seq__34716_35620 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35619));
var chunk__34718_35621 = null;
var count__34719_35622 = (0);
var i__34720_35623 = (0);
while(true){
if((i__34720_35623 < count__34719_35622)){
var child_35624 = chunk__34718_35621.cljs$core$IIndexed$_nth$arity$2(null,i__34720_35623);
if(cljs.core.truth_(child_35624)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35624);


var G__35625 = seq__34716_35620;
var G__35626 = chunk__34718_35621;
var G__35627 = count__34719_35622;
var G__35628 = (i__34720_35623 + (1));
seq__34716_35620 = G__35625;
chunk__34718_35621 = G__35626;
count__34719_35622 = G__35627;
i__34720_35623 = G__35628;
continue;
} else {
var G__35629 = seq__34716_35620;
var G__35630 = chunk__34718_35621;
var G__35631 = count__34719_35622;
var G__35632 = (i__34720_35623 + (1));
seq__34716_35620 = G__35629;
chunk__34718_35621 = G__35630;
count__34719_35622 = G__35631;
i__34720_35623 = G__35632;
continue;
}
} else {
var temp__5804__auto___35633__$1 = cljs.core.seq(seq__34716_35620);
if(temp__5804__auto___35633__$1){
var seq__34716_35634__$1 = temp__5804__auto___35633__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34716_35634__$1)){
var c__5568__auto___35635 = cljs.core.chunk_first(seq__34716_35634__$1);
var G__35636 = cljs.core.chunk_rest(seq__34716_35634__$1);
var G__35637 = c__5568__auto___35635;
var G__35638 = cljs.core.count(c__5568__auto___35635);
var G__35639 = (0);
seq__34716_35620 = G__35636;
chunk__34718_35621 = G__35637;
count__34719_35622 = G__35638;
i__34720_35623 = G__35639;
continue;
} else {
var child_35640 = cljs.core.first(seq__34716_35634__$1);
if(cljs.core.truth_(child_35640)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35640);


var G__35641 = cljs.core.next(seq__34716_35634__$1);
var G__35642 = null;
var G__35643 = (0);
var G__35644 = (0);
seq__34716_35620 = G__35641;
chunk__34718_35621 = G__35642;
count__34719_35622 = G__35643;
i__34720_35623 = G__35644;
continue;
} else {
var G__35645 = cljs.core.next(seq__34716_35634__$1);
var G__35646 = null;
var G__35647 = (0);
var G__35648 = (0);
seq__34716_35620 = G__35645;
chunk__34718_35621 = G__35646;
count__34719_35622 = G__35647;
i__34720_35623 = G__35648;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35619);
}


var G__35649 = cljs.core.next(seq__34666_35612__$1);
var G__35650 = null;
var G__35651 = (0);
var G__35652 = (0);
seq__34666_35552 = G__35649;
chunk__34667_35553 = G__35650;
count__34668_35554 = G__35651;
i__34669_35555 = G__35652;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__34740 = cljs.core.seq(node);
var chunk__34741 = null;
var count__34742 = (0);
var i__34743 = (0);
while(true){
if((i__34743 < count__34742)){
var n = chunk__34741.cljs$core$IIndexed$_nth$arity$2(null,i__34743);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35694 = seq__34740;
var G__35695 = chunk__34741;
var G__35696 = count__34742;
var G__35697 = (i__34743 + (1));
seq__34740 = G__35694;
chunk__34741 = G__35695;
count__34742 = G__35696;
i__34743 = G__35697;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34740);
if(temp__5804__auto__){
var seq__34740__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34740__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34740__$1);
var G__35704 = cljs.core.chunk_rest(seq__34740__$1);
var G__35705 = c__5568__auto__;
var G__35706 = cljs.core.count(c__5568__auto__);
var G__35707 = (0);
seq__34740 = G__35704;
chunk__34741 = G__35705;
count__34742 = G__35706;
i__34743 = G__35707;
continue;
} else {
var n = cljs.core.first(seq__34740__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35716 = cljs.core.next(seq__34740__$1);
var G__35717 = null;
var G__35718 = (0);
var G__35719 = (0);
seq__34740 = G__35716;
chunk__34741 = G__35717;
count__34742 = G__35718;
i__34743 = G__35719;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__34769 = arguments.length;
switch (G__34769) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__34781 = arguments.length;
switch (G__34781) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__34806 = arguments.length;
switch (G__34806) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35745 = arguments.length;
var i__5770__auto___35746 = (0);
while(true){
if((i__5770__auto___35746 < len__5769__auto___35745)){
args__5775__auto__.push((arguments[i__5770__auto___35746]));

var G__35747 = (i__5770__auto___35746 + (1));
i__5770__auto___35746 = G__35747;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34838_35748 = cljs.core.seq(nodes);
var chunk__34839_35749 = null;
var count__34840_35750 = (0);
var i__34841_35751 = (0);
while(true){
if((i__34841_35751 < count__34840_35750)){
var node_35752 = chunk__34839_35749.cljs$core$IIndexed$_nth$arity$2(null,i__34841_35751);
fragment.appendChild(shadow.dom._to_dom(node_35752));


var G__35753 = seq__34838_35748;
var G__35754 = chunk__34839_35749;
var G__35755 = count__34840_35750;
var G__35756 = (i__34841_35751 + (1));
seq__34838_35748 = G__35753;
chunk__34839_35749 = G__35754;
count__34840_35750 = G__35755;
i__34841_35751 = G__35756;
continue;
} else {
var temp__5804__auto___35758 = cljs.core.seq(seq__34838_35748);
if(temp__5804__auto___35758){
var seq__34838_35759__$1 = temp__5804__auto___35758;
if(cljs.core.chunked_seq_QMARK_(seq__34838_35759__$1)){
var c__5568__auto___35760 = cljs.core.chunk_first(seq__34838_35759__$1);
var G__35761 = cljs.core.chunk_rest(seq__34838_35759__$1);
var G__35762 = c__5568__auto___35760;
var G__35763 = cljs.core.count(c__5568__auto___35760);
var G__35764 = (0);
seq__34838_35748 = G__35761;
chunk__34839_35749 = G__35762;
count__34840_35750 = G__35763;
i__34841_35751 = G__35764;
continue;
} else {
var node_35765 = cljs.core.first(seq__34838_35759__$1);
fragment.appendChild(shadow.dom._to_dom(node_35765));


var G__35766 = cljs.core.next(seq__34838_35759__$1);
var G__35767 = null;
var G__35768 = (0);
var G__35769 = (0);
seq__34838_35748 = G__35766;
chunk__34839_35749 = G__35767;
count__34840_35750 = G__35768;
i__34841_35751 = G__35769;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34834){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34834));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34852_35770 = cljs.core.seq(scripts);
var chunk__34853_35771 = null;
var count__34854_35772 = (0);
var i__34855_35773 = (0);
while(true){
if((i__34855_35773 < count__34854_35772)){
var vec__34871_35774 = chunk__34853_35771.cljs$core$IIndexed$_nth$arity$2(null,i__34855_35773);
var script_tag_35775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35774,(0),null);
var script_body_35776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34871_35774,(1),null);
eval(script_body_35776);


var G__35777 = seq__34852_35770;
var G__35778 = chunk__34853_35771;
var G__35779 = count__34854_35772;
var G__35780 = (i__34855_35773 + (1));
seq__34852_35770 = G__35777;
chunk__34853_35771 = G__35778;
count__34854_35772 = G__35779;
i__34855_35773 = G__35780;
continue;
} else {
var temp__5804__auto___35781 = cljs.core.seq(seq__34852_35770);
if(temp__5804__auto___35781){
var seq__34852_35782__$1 = temp__5804__auto___35781;
if(cljs.core.chunked_seq_QMARK_(seq__34852_35782__$1)){
var c__5568__auto___35784 = cljs.core.chunk_first(seq__34852_35782__$1);
var G__35788 = cljs.core.chunk_rest(seq__34852_35782__$1);
var G__35789 = c__5568__auto___35784;
var G__35790 = cljs.core.count(c__5568__auto___35784);
var G__35791 = (0);
seq__34852_35770 = G__35788;
chunk__34853_35771 = G__35789;
count__34854_35772 = G__35790;
i__34855_35773 = G__35791;
continue;
} else {
var vec__34876_35792 = cljs.core.first(seq__34852_35782__$1);
var script_tag_35793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34876_35792,(0),null);
var script_body_35794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34876_35792,(1),null);
eval(script_body_35794);


var G__35795 = cljs.core.next(seq__34852_35782__$1);
var G__35796 = null;
var G__35797 = (0);
var G__35798 = (0);
seq__34852_35770 = G__35795;
chunk__34853_35771 = G__35796;
count__34854_35772 = G__35797;
i__34855_35773 = G__35798;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34886){
var vec__34887 = p__34886;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34887,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__34894 = arguments.length;
switch (G__34894) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__34907 = cljs.core.seq(style_keys);
var chunk__34908 = null;
var count__34909 = (0);
var i__34910 = (0);
while(true){
if((i__34910 < count__34909)){
var it = chunk__34908.cljs$core$IIndexed$_nth$arity$2(null,i__34910);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35809 = seq__34907;
var G__35810 = chunk__34908;
var G__35811 = count__34909;
var G__35812 = (i__34910 + (1));
seq__34907 = G__35809;
chunk__34908 = G__35810;
count__34909 = G__35811;
i__34910 = G__35812;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__34907);
if(temp__5804__auto__){
var seq__34907__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__34907__$1);
var G__35813 = cljs.core.chunk_rest(seq__34907__$1);
var G__35814 = c__5568__auto__;
var G__35815 = cljs.core.count(c__5568__auto__);
var G__35816 = (0);
seq__34907 = G__35813;
chunk__34908 = G__35814;
count__34909 = G__35815;
i__34910 = G__35816;
continue;
} else {
var it = cljs.core.first(seq__34907__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35817 = cljs.core.next(seq__34907__$1);
var G__35818 = null;
var G__35819 = (0);
var G__35820 = (0);
seq__34907 = G__35817;
chunk__34908 = G__35818;
count__34909 = G__35819;
i__34910 = G__35820;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34919,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__34929 = k34919;
var G__34929__$1 = (((G__34929 instanceof cljs.core.Keyword))?G__34929.fqn:null);
switch (G__34929__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34919,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__34934){
var vec__34935 = p__34934;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34918){
var self__ = this;
var G__34918__$1 = this;
return (new cljs.core.RecordIter((0),G__34918__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34920,other34921){
var self__ = this;
var this34920__$1 = this;
return (((!((other34921 == null)))) && ((((this34920__$1.constructor === other34921.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34920__$1.x,other34921.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34920__$1.y,other34921.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34920__$1.__extmap,other34921.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34919){
var self__ = this;
var this__5350__auto____$1 = this;
var G__34959 = k34919;
var G__34959__$1 = (((G__34959 instanceof cljs.core.Keyword))?G__34959.fqn:null);
switch (G__34959__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34919);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34918){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__34960 = cljs.core.keyword_identical_QMARK_;
var expr__34961 = k__5352__auto__;
if(cljs.core.truth_((pred__34960.cljs$core$IFn$_invoke$arity$2 ? pred__34960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34961) : pred__34960.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34961)))){
return (new shadow.dom.Coordinate(G__34918,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34960.cljs$core$IFn$_invoke$arity$2 ? pred__34960.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34961) : pred__34960.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34961)))){
return (new shadow.dom.Coordinate(self__.x,G__34918,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34918),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34918){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34918,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34922){
var extmap__5385__auto__ = (function (){var G__34988 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34922,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34922)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34988);
} else {
return G__34988;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34922),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34922),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k34998,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__35005 = k34998;
var G__35005__$1 = (((G__35005 instanceof cljs.core.Keyword))?G__35005.fqn:null);
switch (G__35005__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34998,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__35008){
var vec__35009 = p__35008;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35009,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35009,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34997){
var self__ = this;
var G__34997__$1 = this;
return (new cljs.core.RecordIter((0),G__34997__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34999,other35000){
var self__ = this;
var this34999__$1 = this;
return (((!((other35000 == null)))) && ((((this34999__$1.constructor === other35000.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34999__$1.w,other35000.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34999__$1.h,other35000.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34999__$1.__extmap,other35000.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k34998){
var self__ = this;
var this__5350__auto____$1 = this;
var G__35032 = k34998;
var G__35032__$1 = (((G__35032 instanceof cljs.core.Keyword))?G__35032.fqn:null);
switch (G__35032__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k34998);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__34997){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__35035 = cljs.core.keyword_identical_QMARK_;
var expr__35036 = k__5352__auto__;
if(cljs.core.truth_((pred__35035.cljs$core$IFn$_invoke$arity$2 ? pred__35035.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35036) : pred__35035.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35036)))){
return (new shadow.dom.Size(G__34997,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35035.cljs$core$IFn$_invoke$arity$2 ? pred__35035.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35036) : pred__35035.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35036)))){
return (new shadow.dom.Size(self__.w,G__34997,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__34997),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__34997){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34997,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35002){
var extmap__5385__auto__ = (function (){var G__35047 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35002,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35002)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35047);
} else {
return G__35047;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35002),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35002),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__35852 = (i + (1));
var G__35853 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35852;
ret = G__35853;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35073){
var vec__35074 = p__35073;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35074,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35081 = arguments.length;
switch (G__35081) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__35857 = ps;
var G__35858 = (i + (1));
el__$1 = G__35857;
i = G__35858;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35108 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35108,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35111_35859 = cljs.core.seq(props);
var chunk__35112_35860 = null;
var count__35113_35861 = (0);
var i__35114_35862 = (0);
while(true){
if((i__35114_35862 < count__35113_35861)){
var vec__35121_35863 = chunk__35112_35860.cljs$core$IIndexed$_nth$arity$2(null,i__35114_35862);
var k_35864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121_35863,(0),null);
var v_35865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35121_35863,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_35864);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35864),v_35865);


var G__35866 = seq__35111_35859;
var G__35867 = chunk__35112_35860;
var G__35868 = count__35113_35861;
var G__35869 = (i__35114_35862 + (1));
seq__35111_35859 = G__35866;
chunk__35112_35860 = G__35867;
count__35113_35861 = G__35868;
i__35114_35862 = G__35869;
continue;
} else {
var temp__5804__auto___35870 = cljs.core.seq(seq__35111_35859);
if(temp__5804__auto___35870){
var seq__35111_35871__$1 = temp__5804__auto___35870;
if(cljs.core.chunked_seq_QMARK_(seq__35111_35871__$1)){
var c__5568__auto___35872 = cljs.core.chunk_first(seq__35111_35871__$1);
var G__35873 = cljs.core.chunk_rest(seq__35111_35871__$1);
var G__35874 = c__5568__auto___35872;
var G__35875 = cljs.core.count(c__5568__auto___35872);
var G__35876 = (0);
seq__35111_35859 = G__35873;
chunk__35112_35860 = G__35874;
count__35113_35861 = G__35875;
i__35114_35862 = G__35876;
continue;
} else {
var vec__35124_35877 = cljs.core.first(seq__35111_35871__$1);
var k_35878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35877,(0),null);
var v_35879 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35124_35877,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_35878);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35878),v_35879);


var G__35881 = cljs.core.next(seq__35111_35871__$1);
var G__35882 = null;
var G__35883 = (0);
var G__35884 = (0);
seq__35111_35859 = G__35881;
chunk__35112_35860 = G__35882;
count__35113_35861 = G__35883;
i__35114_35862 = G__35884;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35134 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35134,(1),null);
var seq__35139_35887 = cljs.core.seq(node_children);
var chunk__35141_35888 = null;
var count__35142_35889 = (0);
var i__35143_35890 = (0);
while(true){
if((i__35143_35890 < count__35142_35889)){
var child_struct_35891 = chunk__35141_35888.cljs$core$IIndexed$_nth$arity$2(null,i__35143_35890);
if((!((child_struct_35891 == null)))){
if(typeof child_struct_35891 === 'string'){
var text_35892 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35892),child_struct_35891].join(''));
} else {
var children_35893 = shadow.dom.svg_node(child_struct_35891);
if(cljs.core.seq_QMARK_(children_35893)){
var seq__35176_35894 = cljs.core.seq(children_35893);
var chunk__35178_35895 = null;
var count__35179_35896 = (0);
var i__35180_35897 = (0);
while(true){
if((i__35180_35897 < count__35179_35896)){
var child_35899 = chunk__35178_35895.cljs$core$IIndexed$_nth$arity$2(null,i__35180_35897);
if(cljs.core.truth_(child_35899)){
node.appendChild(child_35899);


var G__35901 = seq__35176_35894;
var G__35902 = chunk__35178_35895;
var G__35903 = count__35179_35896;
var G__35904 = (i__35180_35897 + (1));
seq__35176_35894 = G__35901;
chunk__35178_35895 = G__35902;
count__35179_35896 = G__35903;
i__35180_35897 = G__35904;
continue;
} else {
var G__35905 = seq__35176_35894;
var G__35906 = chunk__35178_35895;
var G__35907 = count__35179_35896;
var G__35908 = (i__35180_35897 + (1));
seq__35176_35894 = G__35905;
chunk__35178_35895 = G__35906;
count__35179_35896 = G__35907;
i__35180_35897 = G__35908;
continue;
}
} else {
var temp__5804__auto___35909 = cljs.core.seq(seq__35176_35894);
if(temp__5804__auto___35909){
var seq__35176_35910__$1 = temp__5804__auto___35909;
if(cljs.core.chunked_seq_QMARK_(seq__35176_35910__$1)){
var c__5568__auto___35911 = cljs.core.chunk_first(seq__35176_35910__$1);
var G__35912 = cljs.core.chunk_rest(seq__35176_35910__$1);
var G__35913 = c__5568__auto___35911;
var G__35914 = cljs.core.count(c__5568__auto___35911);
var G__35915 = (0);
seq__35176_35894 = G__35912;
chunk__35178_35895 = G__35913;
count__35179_35896 = G__35914;
i__35180_35897 = G__35915;
continue;
} else {
var child_35916 = cljs.core.first(seq__35176_35910__$1);
if(cljs.core.truth_(child_35916)){
node.appendChild(child_35916);


var G__35917 = cljs.core.next(seq__35176_35910__$1);
var G__35918 = null;
var G__35919 = (0);
var G__35920 = (0);
seq__35176_35894 = G__35917;
chunk__35178_35895 = G__35918;
count__35179_35896 = G__35919;
i__35180_35897 = G__35920;
continue;
} else {
var G__35921 = cljs.core.next(seq__35176_35910__$1);
var G__35922 = null;
var G__35923 = (0);
var G__35924 = (0);
seq__35176_35894 = G__35921;
chunk__35178_35895 = G__35922;
count__35179_35896 = G__35923;
i__35180_35897 = G__35924;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35893);
}
}


var G__35927 = seq__35139_35887;
var G__35928 = chunk__35141_35888;
var G__35929 = count__35142_35889;
var G__35930 = (i__35143_35890 + (1));
seq__35139_35887 = G__35927;
chunk__35141_35888 = G__35928;
count__35142_35889 = G__35929;
i__35143_35890 = G__35930;
continue;
} else {
var G__35931 = seq__35139_35887;
var G__35932 = chunk__35141_35888;
var G__35933 = count__35142_35889;
var G__35934 = (i__35143_35890 + (1));
seq__35139_35887 = G__35931;
chunk__35141_35888 = G__35932;
count__35142_35889 = G__35933;
i__35143_35890 = G__35934;
continue;
}
} else {
var temp__5804__auto___35935 = cljs.core.seq(seq__35139_35887);
if(temp__5804__auto___35935){
var seq__35139_35936__$1 = temp__5804__auto___35935;
if(cljs.core.chunked_seq_QMARK_(seq__35139_35936__$1)){
var c__5568__auto___35937 = cljs.core.chunk_first(seq__35139_35936__$1);
var G__35938 = cljs.core.chunk_rest(seq__35139_35936__$1);
var G__35939 = c__5568__auto___35937;
var G__35940 = cljs.core.count(c__5568__auto___35937);
var G__35941 = (0);
seq__35139_35887 = G__35938;
chunk__35141_35888 = G__35939;
count__35142_35889 = G__35940;
i__35143_35890 = G__35941;
continue;
} else {
var child_struct_35942 = cljs.core.first(seq__35139_35936__$1);
if((!((child_struct_35942 == null)))){
if(typeof child_struct_35942 === 'string'){
var text_35943 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35943),child_struct_35942].join(''));
} else {
var children_35945 = shadow.dom.svg_node(child_struct_35942);
if(cljs.core.seq_QMARK_(children_35945)){
var seq__35196_35947 = cljs.core.seq(children_35945);
var chunk__35198_35948 = null;
var count__35199_35949 = (0);
var i__35200_35950 = (0);
while(true){
if((i__35200_35950 < count__35199_35949)){
var child_35951 = chunk__35198_35948.cljs$core$IIndexed$_nth$arity$2(null,i__35200_35950);
if(cljs.core.truth_(child_35951)){
node.appendChild(child_35951);


var G__35952 = seq__35196_35947;
var G__35953 = chunk__35198_35948;
var G__35954 = count__35199_35949;
var G__35955 = (i__35200_35950 + (1));
seq__35196_35947 = G__35952;
chunk__35198_35948 = G__35953;
count__35199_35949 = G__35954;
i__35200_35950 = G__35955;
continue;
} else {
var G__35956 = seq__35196_35947;
var G__35957 = chunk__35198_35948;
var G__35958 = count__35199_35949;
var G__35959 = (i__35200_35950 + (1));
seq__35196_35947 = G__35956;
chunk__35198_35948 = G__35957;
count__35199_35949 = G__35958;
i__35200_35950 = G__35959;
continue;
}
} else {
var temp__5804__auto___35960__$1 = cljs.core.seq(seq__35196_35947);
if(temp__5804__auto___35960__$1){
var seq__35196_35961__$1 = temp__5804__auto___35960__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35196_35961__$1)){
var c__5568__auto___35962 = cljs.core.chunk_first(seq__35196_35961__$1);
var G__35963 = cljs.core.chunk_rest(seq__35196_35961__$1);
var G__35964 = c__5568__auto___35962;
var G__35965 = cljs.core.count(c__5568__auto___35962);
var G__35966 = (0);
seq__35196_35947 = G__35963;
chunk__35198_35948 = G__35964;
count__35199_35949 = G__35965;
i__35200_35950 = G__35966;
continue;
} else {
var child_35967 = cljs.core.first(seq__35196_35961__$1);
if(cljs.core.truth_(child_35967)){
node.appendChild(child_35967);


var G__35968 = cljs.core.next(seq__35196_35961__$1);
var G__35969 = null;
var G__35970 = (0);
var G__35971 = (0);
seq__35196_35947 = G__35968;
chunk__35198_35948 = G__35969;
count__35199_35949 = G__35970;
i__35200_35950 = G__35971;
continue;
} else {
var G__35972 = cljs.core.next(seq__35196_35961__$1);
var G__35973 = null;
var G__35974 = (0);
var G__35975 = (0);
seq__35196_35947 = G__35972;
chunk__35198_35948 = G__35973;
count__35199_35949 = G__35974;
i__35200_35950 = G__35975;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35945);
}
}


var G__35976 = cljs.core.next(seq__35139_35936__$1);
var G__35977 = null;
var G__35978 = (0);
var G__35979 = (0);
seq__35139_35887 = G__35976;
chunk__35141_35888 = G__35977;
count__35142_35889 = G__35978;
i__35143_35890 = G__35979;
continue;
} else {
var G__35980 = cljs.core.next(seq__35139_35936__$1);
var G__35981 = null;
var G__35982 = (0);
var G__35983 = (0);
seq__35139_35887 = G__35980;
chunk__35141_35888 = G__35981;
count__35142_35889 = G__35982;
i__35143_35890 = G__35983;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35985 = arguments.length;
var i__5770__auto___35986 = (0);
while(true){
if((i__5770__auto___35986 < len__5769__auto___35985)){
args__5775__auto__.push((arguments[i__5770__auto___35986]));

var G__35987 = (i__5770__auto___35986 + (1));
i__5770__auto___35986 = G__35987;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35222){
var G__35223 = cljs.core.first(seq35222);
var seq35222__$1 = cljs.core.next(seq35222);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35223,seq35222__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35233 = arguments.length;
switch (G__35233) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__30533__auto___35995 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30534__auto__ = (function (){var switch__30170__auto__ = (function (state_35245){
var state_val_35246 = (state_35245[(1)]);
if((state_val_35246 === (1))){
var state_35245__$1 = state_35245;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35245__$1,(2),once_or_cleanup);
} else {
if((state_val_35246 === (2))){
var inst_35242 = (state_35245[(2)]);
var inst_35243 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35245__$1 = (function (){var statearr_35262 = state_35245;
(statearr_35262[(7)] = inst_35242);

return statearr_35262;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35245__$1,inst_35243);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__30171__auto__ = null;
var shadow$dom$state_machine__30171__auto____0 = (function (){
var statearr_35270 = [null,null,null,null,null,null,null,null];
(statearr_35270[(0)] = shadow$dom$state_machine__30171__auto__);

(statearr_35270[(1)] = (1));

return statearr_35270;
});
var shadow$dom$state_machine__30171__auto____1 = (function (state_35245){
while(true){
var ret_value__30172__auto__ = (function (){try{while(true){
var result__30173__auto__ = switch__30170__auto__(state_35245);
if(cljs.core.keyword_identical_QMARK_(result__30173__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30173__auto__;
}
break;
}
}catch (e35273){var ex__30174__auto__ = e35273;
var statearr_35279_35997 = state_35245;
(statearr_35279_35997[(2)] = ex__30174__auto__);


if(cljs.core.seq((state_35245[(4)]))){
var statearr_35281_35999 = state_35245;
(statearr_35281_35999[(1)] = cljs.core.first((state_35245[(4)])));

} else {
throw ex__30174__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30172__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36004 = state_35245;
state_35245 = G__36004;
continue;
} else {
return ret_value__30172__auto__;
}
break;
}
});
shadow$dom$state_machine__30171__auto__ = function(state_35245){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__30171__auto____0.call(this);
case 1:
return shadow$dom$state_machine__30171__auto____1.call(this,state_35245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__30171__auto____0;
shadow$dom$state_machine__30171__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__30171__auto____1;
return shadow$dom$state_machine__30171__auto__;
})()
})();
var state__30535__auto__ = (function (){var statearr_35292 = f__30534__auto__();
(statearr_35292[(6)] = c__30533__auto___35995);

return statearr_35292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30535__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
