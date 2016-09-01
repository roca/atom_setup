/*
 * Wallaby.js - v1.0.279
 * http://wallabyjs.com
 * Copyright (c) 2014-2016 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
var Suite=require("../suite"),Test=require("../test"),escapeRe=require("escape-string-regexp"),utils=require("../utils");module.exports=function(e){var t=[e];e.on("pre-require",function(e,i,n){e.before=function(e,i){t[0].beforeAll(e,i)},e.after=function(e,i){t[0].afterAll(e,i)},e.beforeEach=function(e,i){t[0].beforeEach(e,i)},e.afterEach=function(e,i){t[0].afterEach(e,i)},e.suite=function(e){t.length>1&&t.shift();var n=Suite.create(t[0],e);return n.file=i,t.unshift(n),n},e.suite.only=function(t,i){var s=e.suite(t,i);n.grep(s.fullTitle())},e.test=function(e,n){var s=new Test(e,n);return s.file=i,t[0].addTest(s),s},e.test.only=function(t,i){var s=e.test(t,i),r="^"+escapeRe(s.fullTitle())+"$";n.grep(new RegExp(r))},e.test.skip=function(t){e.test(t)}})};