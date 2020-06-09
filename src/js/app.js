import add from "./module1";

import {sum,mul} from "./module2";

import {name,age} from "./module3";
import data from "../json/data";

import "../less/01.less";
import "../less/02.less"

console.log(add(5,4));
console.log(sum(1,2,3,4,5));
console.log(mul(2,3));
console.log(name,age);
console.log(data);