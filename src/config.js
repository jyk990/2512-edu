// ========== 환경변수 디버깅 및 설정 ==========
console.log('=== 환경변수 디버깅 (config.js) ===');
console.log('전체 import.meta.env:', import.meta.env);
console.log('VITE_OPENAI_API_KEY:', import.meta.env.VITE_OPENAI_API_KEY);
console.log('VITE_OPENAI_API_KEY 타입:', typeof import.meta.env.VITE_OPENAI_API_KEY);
console.log('VITE_OPENAI_API_KEY 존재 여부:', import.meta.env.VITE_OPENAI_API_KEY !== undefined);
console.log('VITE_OPENAI_API_KEY 값이 있는지:', !!import.meta.env.VITE_OPENAI_API_KEY);
console.log('VITE_OPENAI_API_KEY 길이:', import.meta.env.VITE_OPENAI_API_KEY ? import.meta.env.VITE_OPENAI_API_KEY.length : 0);
console.log('VITE_OPENAI_API_KEY 첫 10자:', import.meta.env.VITE_OPENAI_API_KEY ? import.meta.env.VITE_OPENAI_API_KEY.substring(0, 10) : '없음');
console.log('모든 VITE_ 접두사 환경변수:', Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
console.log('import.meta.env 키 목록:', Object.keys(import.meta.env));
console.log('import.meta.env.MODE:', import.meta.env.MODE);
console.log('import.meta.env.DEV:', import.meta.env.DEV);
console.log('===================================');

// .env 파일이 제대로 로드되지 않았을 경우 경고
if (!import.meta.env.VITE_OPENAI_API_KEY) {
    console.error('⚠️ VITE_OPENAI_API_KEY가 undefined입니다!');
    console.error('확인 사항:');
    console.error('1. .env 파일이 프로젝트 루트에 있는지 확인');
    console.error('2. Vite 개발 서버를 재시작했는지 확인 (중요!)');
    console.error('3. .env 파일 형식: VITE_OPENAI_API_KEY=sk-... (공백 없이)');
    console.error('4. vite.config.js에서 환경변수가 제대로 로드되는지 확인');
} else {
    console.log('✅ VITE_OPENAI_API_KEY가 성공적으로 로드되었습니다!');
}

// 환경변수에서 API Key 가져오기
export const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

// 전역 변수로도 노출 (index.html의 인라인 스크립트에서 사용하기 위해)
if (typeof window !== 'undefined') {
    window.VITE_OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
    console.log('전역 변수로 노출됨: window.VITE_OPENAI_API_KEY =', window.VITE_OPENAI_API_KEY);
}

