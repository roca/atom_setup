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
function Progress(e,t){Base.call(this,e);var i=this,t=t||{},n=(this.stats,.5*Base.window.width|0),s=e.total,r=0,a=(Math.max,-1);t.open=t.open||"[",t.complete=t.complete||"▬",t.incomplete=t.incomplete||Base.symbols.dot,t.close=t.close||"]",t.verbose=!1,e.on("start",function(){console.log(),cursor.hide()}),e.on("test end",function(){r++;var e=r/s,i=n*e|0,o=n-i;(a!==i||t.verbose)&&(a=i,cursor.CR(),process.stdout.write("[J"),process.stdout.write(color("progress","  "+t.open)),process.stdout.write(Array(i).join(t.complete)),process.stdout.write(Array(o).join(t.incomplete)),process.stdout.write(color("progress",t.close)),t.verbose&&process.stdout.write(color("progress"," "+r+" of "+s)))}),e.on("end",function(){cursor.show(),console.log(),i.epilogue()})}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=Progress,Base.colors.progress=90,Progress.prototype.__proto__=Base.prototype;