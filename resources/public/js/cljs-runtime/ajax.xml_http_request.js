goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__27609 = e.target.readyState;
var fexpr__27608 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__27608.cljs$core$IFn$_invoke$arity$1 ? fexpr__27608.cljs$core$IFn$_invoke$arity$1(G__27609) : fexpr__27608.call(null,G__27609));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__27615,handler){
var map__27616 = p__27615;
var map__27616__$1 = cljs.core.__destructure_map(map__27616);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27616__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27616__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27616__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27616__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27616__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27616__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27616__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__27614_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__27614_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___27666 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___27666)){
var response_type_27667 = temp__5804__auto___27666;
(this$__$1.responseType = cljs.core.name(response_type_27667));
} else {
}

var seq__27618_27668 = cljs.core.seq(headers);
var chunk__27619_27669 = null;
var count__27620_27670 = (0);
var i__27621_27671 = (0);
while(true){
if((i__27621_27671 < count__27620_27670)){
var vec__27644_27672 = chunk__27619_27669.cljs$core$IIndexed$_nth$arity$2(null,i__27621_27671);
var k_27673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27644_27672,(0),null);
var v_27674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27644_27672,(1),null);
this$__$1.setRequestHeader(k_27673,v_27674);


var G__27675 = seq__27618_27668;
var G__27676 = chunk__27619_27669;
var G__27677 = count__27620_27670;
var G__27678 = (i__27621_27671 + (1));
seq__27618_27668 = G__27675;
chunk__27619_27669 = G__27676;
count__27620_27670 = G__27677;
i__27621_27671 = G__27678;
continue;
} else {
var temp__5804__auto___27679 = cljs.core.seq(seq__27618_27668);
if(temp__5804__auto___27679){
var seq__27618_27680__$1 = temp__5804__auto___27679;
if(cljs.core.chunked_seq_QMARK_(seq__27618_27680__$1)){
var c__5568__auto___27681 = cljs.core.chunk_first(seq__27618_27680__$1);
var G__27682 = cljs.core.chunk_rest(seq__27618_27680__$1);
var G__27683 = c__5568__auto___27681;
var G__27684 = cljs.core.count(c__5568__auto___27681);
var G__27685 = (0);
seq__27618_27668 = G__27682;
chunk__27619_27669 = G__27683;
count__27620_27670 = G__27684;
i__27621_27671 = G__27685;
continue;
} else {
var vec__27652_27686 = cljs.core.first(seq__27618_27680__$1);
var k_27687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27652_27686,(0),null);
var v_27688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27652_27686,(1),null);
this$__$1.setRequestHeader(k_27687,v_27688);


var G__27689 = cljs.core.next(seq__27618_27680__$1);
var G__27690 = null;
var G__27691 = (0);
var G__27692 = (0);
seq__27618_27668 = G__27689;
chunk__27619_27669 = G__27690;
count__27620_27670 = G__27691;
i__27621_27671 = G__27692;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
