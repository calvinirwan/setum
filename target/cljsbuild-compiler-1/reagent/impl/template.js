// Compiled by ClojureScript 0.0-2322
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('reagent.impl.component');
goog.require('reagent.impl.util');
goog.require('reagent.ratom');
goog.require('clojure.string');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
goog.require('clojure.string');
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.DOM = (reagent.impl.util.React["DOM"]);
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$45,"className",cljs.core.constant$keyword$57,"htmlFor",cljs.core.constant$keyword$58,"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function hiccup_tag_QMARK_(x){return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function valid_tag_QMARK_(x){return (reagent.impl.template.hiccup_tag_QMARK_(x)) || (reagent.impl.util.clj_ifn_QMARK_(x));
});
reagent.impl.template.to_js_val = (function to_js_val(v){if(!(cljs.core.ifn_QMARK_(v)))
{return v;
} else
{if((v instanceof cljs.core.Keyword))
{return cljs.core.name(v);
} else
{if((v instanceof cljs.core.Symbol))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v));
} else
{if(cljs.core.coll_QMARK_(v))
{return cljs.core.clj__GT_js(v);
} else
{return (function() { 
var G__5471__delegate = function (args){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(v,args);
};
var G__5471 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__5471__delegate.call(this,args);};
G__5471.cljs$lang$maxFixedArity = 0;
G__5471.cljs$lang$applyTo = (function (arglist__5472){
var args = cljs.core.seq(arglist__5472);
return G__5471__delegate(args);
});
G__5471.cljs$core$IFn$_invoke$arity$variadic = G__5471__delegate;
return G__5471;
})()
;

}
}
}
}
});
reagent.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3558__auto__ = (reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.attr_aliases.cljs$core$IFn$_invoke$arity$1(n) : reagent.impl.template.attr_aliases.call(null,n));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return reagent.impl.util.dash_to_camel(n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1(reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1(reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_(val))
{return cljs.core.reduce_kv((function (res,k,v){var G__5474 = res;(G__5474[(reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.template.cached_prop_name.call(null,k))] = reagent.impl.template.to_js_val(v));
return G__5474;
}),{},val);
} else
{return reagent.impl.template.to_js_val(val);
}
});
reagent.impl.template.set_id_class = (function set_id_class(props,p__5475){var vec__5477 = p__5475;var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5477,(0),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5477,(1),null);var pid = (props["id"]);(props["id"] = ((!((pid == null)))?pid:id));
if((class$ == null))
{return null;
} else
{return (props["className"] = (function (){var old = (props["className"]);if(!((old == null)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(old));
} else
{return class$;
}
})());
}
});
reagent.impl.template.convert_props = (function convert_props(props,id_class){if((cljs.core.empty_QMARK_(props)) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type(props) === Object))
{return props;
} else
{var objprops = cljs.core.reduce_kv((function (o,k,v){var pname_5478 = (reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_prop_name.cljs$core$IFn$_invoke$arity$1(k) : reagent.impl.template.cached_prop_name.call(null,k));if(!((pname_5478 === "key")))
{(o[pname_5478] = reagent.impl.template.convert_prop_value(v));
} else
{}
return o;
}),{},props);if((id_class == null))
{} else
{reagent.impl.template.set_id_class(objprops,id_class);
}
return objprops;

}
}
});
reagent.impl.template.input_handle_change = (function input_handle_change(this$,on_change,e){var res = (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(e) : on_change.call(null,e));reagent.impl.batching.queue_render(this$);
return res;
});
reagent.impl.template.input_did_update = (function input_did_update(this$){var value = this$.cljsInputValue;if((value == null))
{return null;
} else
{var node = this$.getDOMNode();if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,node.value))
{return node.value = value;
} else
{return null;
}
}
});
reagent.impl.template.input_render_setup = (function input_render_setup(this$,jsprops){var on_change = (jsprops["onChange"]);var value = (((on_change == null))?null:(jsprops["value"]));this$.cljsInputValue = value;
if((value == null))
{return null;
} else
{reagent.impl.batching.mark_rendered(this$);
var G__5481 = jsprops;(G__5481["defaultValue"] = value);
(G__5481["value"] = null);
(G__5481["onChange"] = ((function (G__5481,on_change,value){
return (function (p1__5479_SHARP_){return reagent.impl.template.input_handle_change(this$,on_change,p1__5479_SHARP_);
});})(G__5481,on_change,value))
);
return G__5481;
}
});
reagent.impl.template.input_components = cljs.core.PersistentHashSet.fromArray([(reagent.impl.template.DOM["input"]),(reagent.impl.template.DOM["textarea"])], true);
reagent.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class,input_setup){var inprops = reagent.impl.util.js_props(this$);var argv = (inprops[reagent.impl.util.cljs_argv]);var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(argv,(1),null);var hasprops = ((props == null)) || (cljs.core.map_QMARK_(props));var jsargs = (reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3 ? reagent.impl.template.convert_args.cljs$core$IFn$_invoke$arity$3(argv,((hasprops)?(2):(1)),((inprops[reagent.impl.util.cljs_level]) + (1))) : reagent.impl.template.convert_args.call(null,argv,((hasprops)?(2):(1)),((inprops[reagent.impl.util.cljs_level]) + (1))));var jsprops = reagent.impl.template.convert_props(((hasprops)?props:null),id_class);if((input_setup == null))
{} else
{(input_setup.cljs$core$IFn$_invoke$arity$2 ? input_setup.cljs$core$IFn$_invoke$arity$2(this$,jsprops) : input_setup.call(null,this$,jsprops));
}
(jsargs[(0)] = jsprops);
return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = reagent.impl.util.js_props(C);var a1 = (inprops[reagent.impl.util.cljs_argv]);var a2 = (nextprops[reagent.impl.util.cljs_argv]);return cljs.core.not(reagent.impl.util.equal_args(a1,a2));
});
reagent.impl.template.add_input_methods = (function add_input_methods(spec){var G__5483 = spec;(G__5483["componentDidUpdate"] = ((function (G__5483){
return (function (){var C = this;return reagent.impl.template.input_did_update(C);
});})(G__5483))
);
(G__5483["componentWillUnmount"] = ((function (G__5483){
return (function (){var C = this;return reagent.impl.batching.dispose(C);
});})(G__5483))
);
return G__5483;
});
reagent.impl.template.wrap_component = (function wrap_component(comp,extras,name){var input_QMARK_ = (reagent.impl.template.input_components.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.input_components.cljs$core$IFn$_invoke$arity$1(comp) : reagent.impl.template.input_components.call(null,comp));var input_setup = (cljs.core.truth_(input_QMARK_)?reagent.impl.template.input_render_setup:null);var spec = {"displayName": (function (){var or__3558__auto__ = name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "ComponentWrapper";
}
})(), "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__5484_SHARP_,p2__5485_SHARP_){var C = this;return reagent.impl.template.wrapped_should_update(C,p1__5484_SHARP_,p2__5485_SHARP_);
});})(input_QMARK_,input_setup))
, "render": ((function (input_QMARK_,input_setup){
return (function (){var C = this;return reagent.impl.template.wrapped_render(C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
};if(cljs.core.truth_(input_QMARK_))
{reagent.impl.template.add_input_methods(spec);
} else
{}
return reagent.impl.util.React.createClass(spec);
});
reagent.impl.template.parse_tag = (function parse_tag(hiccup_tag){var vec__5487 = cljs.core.next(cljs.core.re_matches(reagent.impl.template.re_tag,cljs.core.name(hiccup_tag)));var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5487,(0),null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5487,(1),null);var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5487,(2),null);var comp = (reagent.impl.template.DOM[tag]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace(class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Unknown tag: '"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag)+"'"))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"comp","comp",-1462482139,null)], 0))))));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3558__auto__ = id;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function get_wrapper(tag){var vec__5489 = reagent.impl.template.parse_tag(tag);var comp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5489,(0),null);var id_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5489,(1),null);return reagent.impl.template.wrap_component(comp,id_class,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1(reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta(f);var withrender = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(spec,cljs.core.constant$keyword$59,f);var res = (reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.create_class.cljs$core$IFn$_invoke$arity$1(withrender) : reagent.impl.template.create_class.call(null,withrender));var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
reagent.impl.template.as_class = (function as_class(tag){if(reagent.impl.template.hiccup_tag_QMARK_(tag))
{return (reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1 ? reagent.impl.template.cached_wrapper.cljs$core$IFn$_invoke$arity$1(tag) : reagent.impl.template.cached_wrapper.call(null,tag));
} else
{var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(reagent.impl.util.React.isValidClass(tag)))
{return tag.cljsReactClass = reagent.impl.template.wrap_component(tag,null,null);
} else
{return reagent.impl.template.fn_to_class(tag);
}
}
}
});
reagent.impl.template.get_key = (function get_key(x){if(cljs.core.map_QMARK_(x))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,cljs.core.constant$keyword$60);
} else
{return null;
}
});
reagent.impl.template.vec_to_comp = (function vec_to_comp(v,level){if((cljs.core.count(v) > (0)))
{} else
{throw (new Error(("Assert failed: Hiccup form should not be empty\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))], 0))))));
}
if(reagent.impl.template.valid_tag_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("Invalid Hiccup form: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([v], 0)))))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"v","v",1661996586,null),(0)))], 0))))));
}
var c = reagent.impl.template.as_class(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(v,(0)));var jsprops = (function (){var obj5493 = {};(obj5493[reagent.impl.util.cljs_argv] = v);
(obj5493[reagent.impl.util.cljs_level] = level);
return obj5493;
})();var k_5494 = reagent.impl.template.get_key(cljs.core.meta(v));var k_SINGLEQUOTE__5495 = (((k_5494 == null))?reagent.impl.template.get_key(cljs.core.nth.cljs$core$IFn$_invoke$arity$3(v,(1),null)):k_5494);if((k_SINGLEQUOTE__5495 == null))
{} else
{(jsprops["key"] = k_SINGLEQUOTE__5495);
}
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(jsprops) : c.call(null,jsprops));
});
reagent.impl.template.tmp = {};
reagent.impl.template.warn_on_deref = (function warn_on_deref(x){if(cljs.core.truth_(reagent.impl.template.tmp.warned))
{return null;
} else
{if(!((console.log == null)))
{console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0)));
} else
{}
return reagent.impl.template.tmp.warned = true;
}
});
reagent.impl.template.as_component = (function() {
var as_component = null;
var as_component__1 = (function (x){return as_component.cljs$core$IFn$_invoke$arity$2(x,(0));
});
var as_component__2 = (function (x,level){if(cljs.core.vector_QMARK_(x))
{return reagent.impl.template.vec_to_comp(x,level);
} else
{if(cljs.core.seq_QMARK_(x))
{if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null))))
{return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(x,level) : reagent.impl.template.expand_seq.call(null,x,level));
} else
{var s = reagent.ratom.capture_derefed((function (){return (reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2 ? reagent.impl.template.expand_seq.cljs$core$IFn$_invoke$arity$2(x,level) : reagent.impl.template.expand_seq.call(null,x,level));
}),reagent.impl.template.tmp);if(cljs.core.truth_(reagent.ratom.captured(reagent.impl.template.tmp)))
{reagent.impl.template.warn_on_deref(x);
} else
{}
return s;
}
} else
{return x;

}
}
});
as_component = function(x,level){
switch(arguments.length){
case 1:
return as_component__1.call(this,x);
case 2:
return as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
as_component.cljs$core$IFn$_invoke$arity$1 = as_component__1;
as_component.cljs$core$IFn$_invoke$arity$2 = as_component__2;
return as_component;
})()
;
reagent.impl.template.create_class = (function create_class(spec){return reagent.impl.component.create_class(spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function expand_seq(s,level){var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(s);var level_SINGLEQUOTE_ = (level + (1));var n__4414__auto___5496 = a.length;var i_5497 = (0);while(true){
if((i_5497 < n__4414__auto___5496))
{(a[i_5497] = reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((a[i_5497]),level_SINGLEQUOTE_));
{
var G__5498 = (i_5497 + (1));
i_5497 = G__5498;
continue;
}
} else
{}
break;
}
return a;
});
reagent.impl.template.convert_args = (function convert_args(argv,first_child,level){var a = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(argv);var n__4414__auto___5499 = a.length;var i_5500 = (0);while(true){
if((i_5500 < n__4414__auto___5499))
{if((i_5500 >= first_child))
{(a[i_5500] = reagent.impl.template.as_component.cljs$core$IFn$_invoke$arity$2((a[i_5500]),level));
} else
{}
{
var G__5501 = (i_5500 + (1));
i_5500 = G__5501;
continue;
}
} else
{}
break;
}
if((first_child === (2)))
{a.shift();
} else
{}
return a;
});
