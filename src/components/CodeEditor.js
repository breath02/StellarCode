import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react';

function CodeEditor() {
    const [code, setCode] = useState(`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`);
    const handleEditorChange = (value) => {
        setCode(value);
    };

    return (
        <div><h3 className="text-xl font-semibold text-yellow-500 mb-3">코드 작성</h3>
             <div className="mb-6 p-3 border-2 border-gray-300 rounded-lg shadow-md">
                <Editor
                    height="200px" // 에디터 높이
                    width="350px" // 전체 너비를 사용
                    language="java" // 언어 설정
                    value={code}
                    onChange={handleEditorChange}
                    theme="vs-dark" // 어두운 테마
                    options={{
                        selectOnLineNumbers: true, // 라인 번호 클릭 시 선택
                        minimap: { enabled: false }, // 미니맵 비활성화
                        fontSize: 14, // 폰트 크기
                        lineNumbers: 'on', // 라인 번호 표시
                        automaticLayout: true, // 자동 레이아웃
                    }}
                />
            </div>
        </div>
    );
}

export default CodeEditor;
