import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

// ========== 환경변수 디버깅 ==========
console.log('=== 환경변수 디버깅 ===');
console.log('전체 import.meta.env:', import.meta.env);
console.log('VITE_OPENAI_API_KEY:', import.meta.env.VITE_OPENAI_API_KEY);
console.log('VITE_OPENAI_API_KEY 타입:', typeof import.meta.env.VITE_OPENAI_API_KEY);
console.log('VITE_OPENAI_API_KEY 존재 여부:', import.meta.env.VITE_OPENAI_API_KEY !== undefined);
console.log('VITE_OPENAI_API_KEY 값이 있는지:', !!import.meta.env.VITE_OPENAI_API_KEY);
console.log('========================');

// 환경변수를 전역 변수로 노출 (index.html에서 사용하기 위해)
window.VITE_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
