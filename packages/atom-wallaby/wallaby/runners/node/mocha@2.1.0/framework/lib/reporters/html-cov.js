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
function HTMLCov(e){var t=require("jade"),i=__dirname+"/templates/coverage.jade",n=fs.readFileSync(i,"utf8"),s=t.compile(n,{filename:i}),r=this;JSONCov.call(this,e,!1),e.on("end",function(){process.stdout.write(s({cov:r.cov,coverageClass:coverageClass}))})}function coverageClass(e){return e>=75?"high":e>=50?"medium":e>=25?"low":"terrible"}var JSONCov=require("./json-cov"),fs=require("fs");exports=module.exports=HTMLCov;