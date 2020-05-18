import '../styles/style.css';
import '../styles/style.scss';

async function babelTest(){
    return await Promise.resolve('babelTest');
}
babelTest().then(console.log);
console.log("hello app.js");