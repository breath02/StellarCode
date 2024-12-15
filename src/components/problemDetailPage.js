import React from "react";
import { useNavigate } from "react-router-dom";
import CodeEditor from './CodeEditor';
import "./css/scrollbar.css";

function ProblemDetailPage() {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-800">
            {/* 스마트폰 비율 컨테이너 */}
            <div className="aspect-[9/16] w-full max-w-md bg-[#1A202C] shadow-xl rounded-xl p-6 overflow-auto">
                {/* 헤더 */}
                <header className="flex justify-between items-center border-b pb-4 mb-6">
                    <h1 className="text-2xl font-extrabold text-yellow-500">문제 제목</h1>
                    <button
                        onClick={() => navigate("/problem-list")}
                        className="text-sm text-blue-400 hover:text-blue-500 hover:underline transition duration-200"
                    >
                        ← 뒤로가기
                    </button>
                </header>

                {/* 문제 내용 */}
                <div className="mb-6">
                    <h2 className="text-xl font-semibold text-yellow-500 mb-2">문제 설명</h2>
                    <p className="text-sm text-gray-300">
                        주어진 숫자 배열에서 최대값을 찾아 반환하는 함수를 작성하세요.
                    </p>
                </div>

                {/* 입력 및 출력 예제 */}
                <div className="mb-6">
                    <h3 className="text-md font-medium text-yellow-500">입력 예제</h3>
                    <pre className="bg-gray-700 p-3 rounded-md text-sm text-gray-300 mb-4">
                        [1, 2, 3, 4, 5]
                    </pre>
                    <h3 className="text-md font-medium text-yellow-500">출력 예제</h3>
                    <pre className="bg-gray-700 p-3 rounded-md text-sm text-gray-300">
                        5
                    </pre>
                </div>

                {/* 코드 작성 영역 */}
                <main className="flex-grow flex flex-col items-center justify-between py-8">
                    <CodeEditor /> {/* 코드 편집기 추가 */}
                </main>

                {/* 실행 버튼 */}
                <button
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-yellow-500 transition duration-200 mt-4"
                >
                    제출하기
                </button>
            </div>
        </div>
    );
}

export default ProblemDetailPage;
