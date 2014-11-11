// Compiled by ClojureScript 0.0-2322
goog.provide('setum.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
goog.require('reagent.core');
goog.require('reagent.core');
setum.core.selid = (function selid(id){return document.getElementById(id);
});
setum.core.read_class = (function read_class(id){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(setum.core.selid(id).className));
});
setum.core.apapun = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
setum.core.home_component = (function home_component(){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,"melikey!"], null)], null);
});
setum.core.quiz_component = (function quiz_component(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$61,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$62,"I am a hero"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$63,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(setum.core.apapun) : cljs.core.deref.call(null,setum.core.apapun))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$65,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$66,(function (){return (setum.core.ambil_jawaban.cljs$core$IFn$_invoke$arity$0 ? setum.core.ambil_jawaban.cljs$core$IFn$_invoke$arity$0() : setum.core.ambil_jawaban.call(null));
})], null)], null)], null);
});
setum.core.page = (function page(page__$1){return setum.core.read_class(setum.core.selid(page__$1));
});
setum.core.ambil_callback = (function ambil_callback(response){return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(setum.core.apapun,cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(response)) : cljs.core.reset_BANG_.call(null,setum.core.apapun,cljs.core.constant$keyword$64.cljs$core$IFn$_invoke$arity$1(response)));
});
setum.core.ambil_jawaban = (function ambil_jawaban(){return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic("/jawab/",cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$37,setum.core.ambil_callback], null)], 0));
});
setum.core.start = (function start(page){var pred__6894 = cljs.core._EQ_;var expr__6895 = page;if(cljs.core.truth_((pred__6894.cljs$core$IFn$_invoke$arity$2 ? pred__6894.cljs$core$IFn$_invoke$arity$2("quiz",expr__6895) : pred__6894.call(null,"quiz",expr__6895))))
{setum.core.ambil_jawaban();
return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [setum.core.quiz_component], null),setum.core.selid("soal"));
} else
{if(cljs.core.truth_((pred__6894.cljs$core$IFn$_invoke$arity$2 ? pred__6894.cljs$core$IFn$_invoke$arity$2("home",expr__6895) : pred__6894.call(null,"home",expr__6895))))
{return reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [setum.core.home_component], null),setum.core.selid("body"));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__6895))));
}
}
});
setum.core.start(setum.core.read_class("body"));
