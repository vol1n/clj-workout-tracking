goog.provide('ajax.protocols');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

var ajax$protocols$AjaxImpl$_js_ajax_request$dyn_27574 = (function (this$,request,handler){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__5394__auto__.call(null,this$,request,handler));
} else {
var m__5392__auto__ = (ajax.protocols._js_ajax_request["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(this$,request,handler) : m__5392__auto__.call(null,this$,request,handler));
} else {
throw cljs.core.missing_protocol("AjaxImpl.-js-ajax-request",this$);
}
}
});
/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
return ajax$protocols$AjaxImpl$_js_ajax_request$dyn_27574(this$,request,handler);
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

var ajax$protocols$AjaxRequest$_abort$dyn_27575 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._abort[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._abort["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxRequest.-abort",this$);
}
}
});
/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
return ajax$protocols$AjaxRequest$_abort$dyn_27575(this$);
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

var ajax$protocols$AjaxResponse$_status$dyn_27577 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._status[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._status["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status",this$);
}
}
});
/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_status$dyn_27577(this$);
}
});

var ajax$protocols$AjaxResponse$_status_text$dyn_27578 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._status_text[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._status_text["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-status-text",this$);
}
}
});
/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_status_text$dyn_27578(this$);
}
});

var ajax$protocols$AjaxResponse$_get_all_headers$dyn_27581 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._get_all_headers[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._get_all_headers["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-all-headers",this$);
}
}
});
/**
 * Returns all headers as a map.
 */
ajax.protocols._get_all_headers = (function ajax$protocols$_get_all_headers(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_get_all_headers$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_get_all_headers$dyn_27581(this$);
}
});

var ajax$protocols$AjaxResponse$_body$dyn_27582 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._body["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-body",this$);
}
}
});
/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_body$dyn_27582(this$);
}
});

var ajax$protocols$AjaxResponse$_get_response_header$dyn_27583 = (function (this$,header){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5394__auto__.call(null,this$,header));
} else {
var m__5392__auto__ = (ajax.protocols._get_response_header["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,header) : m__5392__auto__.call(null,this$,header));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-get-response-header",this$);
}
}
});
/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
return ajax$protocols$AjaxResponse$_get_response_header$dyn_27583(this$,header);
}
});

var ajax$protocols$AjaxResponse$_was_aborted$dyn_27585 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (ajax.protocols._was_aborted["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("AjaxResponse.-was-aborted",this$);
}
}
});
/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
return ajax$protocols$AjaxResponse$_was_aborted$dyn_27585(this$);
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

var ajax$protocols$Interceptor$_process_request$dyn_27588 = (function (this$,request){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._process_request[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__5394__auto__.call(null,this$,request));
} else {
var m__5392__auto__ = (ajax.protocols._process_request["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,request) : m__5392__auto__.call(null,this$,request));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-request",this$);
}
}
});
/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
return ajax$protocols$Interceptor$_process_request$dyn_27588(this$,request);
}
});

var ajax$protocols$Interceptor$_process_response$dyn_27589 = (function (this$,response){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (ajax.protocols._process_response[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,response) : m__5394__auto__.call(null,this$,response));
} else {
var m__5392__auto__ = (ajax.protocols._process_response["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,response) : m__5392__auto__.call(null,this$,response));
} else {
throw cljs.core.missing_protocol("Interceptor.-process-response",this$);
}
}
});
/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((((!((this$ == null)))) && ((!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
return ajax$protocols$Interceptor$_process_response$dyn_27589(this$,response);
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
 * @implements {ajax.protocols.AjaxResponse}
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
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k27560,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__27564 = k27560;
var G__27564__$1 = (((G__27564 instanceof cljs.core.Keyword))?G__27564.fqn:null);
switch (G__27564__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k27560,else__5346__auto__);

}
}));

(ajax.protocols.Response.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__27565){
var vec__27566 = p__27565;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27566,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#ajax.protocols.Response{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27559){
var self__ = this;
var G__27559__$1 = this;
return (new cljs.core.RecordIter((0),G__27559__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-473222333 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27561,other27562){
var self__ = this;
var this27561__$1 = this;
return (((!((other27562 == null)))) && ((((this27561__$1.constructor === other27562.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.status,other27562.status)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.body,other27562.body)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.status_text,other27562.status_text)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.headers,other27562.headers)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.was_aborted,other27562.was_aborted)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this27561__$1.__extmap,other27562.__extmap)))))))))))))));
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
}));

(ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
}));

(ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(ajax.protocols.Response.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k27560){
var self__ = this;
var this__5350__auto____$1 = this;
var G__27569 = k27560;
var G__27569__$1 = (((G__27569 instanceof cljs.core.Keyword))?G__27569.fqn:null);
switch (G__27569__$1) {
case "status":
case "body":
case "status-text":
case "headers":
case "was-aborted":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k27560);

}
}));

(ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__27559){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__27570 = cljs.core.keyword_identical_QMARK_;
var expr__27571 = k__5352__auto__;
if(cljs.core.truth_((pred__27570.cljs$core$IFn$_invoke$arity$2 ? pred__27570.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413),expr__27571) : pred__27570.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__27571)))){
return (new ajax.protocols.Response(G__27559,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27570.cljs$core$IFn$_invoke$arity$2 ? pred__27570.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"body","body",-2049205669),expr__27571) : pred__27570.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__27571)))){
return (new ajax.protocols.Response(self__.status,G__27559,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27570.cljs$core$IFn$_invoke$arity$2 ? pred__27570.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__27571) : pred__27570.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__27571)))){
return (new ajax.protocols.Response(self__.status,self__.body,G__27559,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27570.cljs$core$IFn$_invoke$arity$2 ? pred__27570.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"headers","headers",-835030129),expr__27571) : pred__27570.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__27571)))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__27559,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__27570.cljs$core$IFn$_invoke$arity$2 ? pred__27570.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__27571) : pred__27570.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__27571)))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__27559,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__27559),null));
}
}
}
}
}
}));

(ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status","status",-1997798413),self__.status,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"body","body",-2049205669),self__.body,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted,null))], null),self__.__extmap));
}));

(ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__27559){
var self__ = this;
var this__5342__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__27559,self__.__extmap,self__.__hash));
}));

(ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
}));

(ajax.protocols.Response.cljs$lang$type = true);

(ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"ajax.protocols/Response",null,(1),null));
}));

(ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"ajax.protocols/Response");
}));

/**
 * Positional factory function for ajax.protocols/Response.
 */
ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

/**
 * Factory function for ajax.protocols/Response, taking a map of keywords to field values.
 */
ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__27563){
var extmap__5385__auto__ = (function (){var G__27573 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__27563,new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], 0));
if(cljs.core.record_QMARK_(G__27563)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__27573);
} else {
return G__27573;
}
})();
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__27563),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__27563),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__27563),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__27563),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__27563),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


//# sourceMappingURL=ajax.protocols.js.map
