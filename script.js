/*

*/
let num = Number(undefined);
console.log(typeof num);
console.log(num);

// [タスク] シンプルなページ (https://ja.javascript.info/alert-prompt-confirm)
/* my answer */
// let firstName = prompt("What is your first name?", "");
// alert(`${firstName}`);

// let isBoss = confirm("Are you the boss?");
// alert( isBoss ); // 'OK'を押すと'true'で、'cancel'を押すと'false'になる。

// [タスク]文字列の引用符　(https://ja.javascript.info/types)
/* my answer
let name = "Ilya";
alert( `hello ${1}` ); // hello ${1}
alert( `hello ${"name"}` ); // hello ${"name"}
alert( `hello ${name}` ); // hello Ilya
*/

/* correct answer
let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya
"${}"の中にいかなるものが入っても、"${}"は文字列としては表示されない。
*/


/* note
以下の値は、'object'になるがこれは言語上のバグ。実際には、nullはそれ自身の型を持つ。
互換性を維持するために、あえてバグを保持しままにしている。
*/
// console.log(typeof null);

// [タスク]大文字のconst? (https://ja.javascript.info/variables)
/* my answer
	'BIRTHDAY'がconstと決まっている(代入を受け付けない)なら、ageも大文字でいい。
	なぜなら、年齢が一意に定まるから。
*/
/* correct answer
	age は実行時に評価されます。 今日はある年齢で、1年後に別の年齢になります。
	コード実行によって変化しないという意味で一定ですがそれは birthday より “定数ではありません”。
	それは計算されるので、小文字を維持する必要があります。
*/

// [タスク]正しい名前を与える (https://ja.javascript.info/variables)
// my answer
// const EARTH ="The Earth";
// let currentUser;
// correct answer
// let ourPlanetName = "Earth";
// let currentUserName = "John";

//　[タスク]変数の操作 (https://ja.javascript.info/variables)
// let admin;
// let name = "John";
// admin = name;
// alert(admin);

// [タスク]外部スクリプトで alert を表示しましょう (https://ja.javascript.info/hello-world)
// import { alertGreeting, str } from "./alert.js";
// alertGreeting(str);

// [タスク]alert を表示しましょう (https://ja.javascript.info/hello-world)
// alert("I'm JavaScript.")