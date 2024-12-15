import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 import
import Footer from "./footer";
import Navbar from "./Navbar"; // Navbar 컴포넌트 임포트

function StartPage() {
    const navigate = useNavigate(); // navigate 함수를 사용하여 페이지 이동

    const handleStartClick = () => {
        navigate("/problem-list"); // 문제 리스트 페이지로 이동
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            {/* 스마트폰 비율 컨테이너 */}
            <div className="aspect-[9/16] w-full max-w-md bg-gradient-to-b from-primary via-secondary to-background shadow-lg rounded-lg overflow-hidden relative flex flex-col">
                {/* Navbar */}
                <div className="flex-shrink-0">
                    <Navbar />
                </div>

                {/* 별 배경 */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-highlight rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-highlight rounded-full animate-ping"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-highlight rounded-full animate-bounce"></div>
                </div>

                {/* 콘텐츠 */}
                <div className="relative z-10 flex flex-col flex-grow">
                    {/* 메인 콘텐츠 */}
                    <main className="flex-grow flex flex-col items-center justify-between py-8">
                        {/* 중앙 콘텐츠 */}
                        <div className="mb-6 p-4 bg-gray-800 rounded-lg shadow-md">
                            <p className="text-yellow-400 text-center text-lg font-semibold mb-2">
                                스마트폰에서도 코딩을 시작하세요!
                            </p>
                            <p className="text-gray-300 text-center text-sm mb-4">
                                언제 어디서든 코딩 문제를 해결할 수 있습니다.
                            </p>

                            <div className="border-2 border-gray-600 bg-gray-900 p-4 rounded-md mb-4">
        <pre className="text-gray-200 text-sm font-mono">
            {/* 코드 스타일 적용 */}
            <code>
                {'public class Main {'}<br/>
                {'   public static void main(String[] args) {'}<br/>
                {'       System.out.println("지금 당장 시작!");'}<br/>
                {'   }'}<br/>
                {'}'}
            </code>
        </pre>
                            </div>

                            <p className="text-white text-center text-lg">버튼을 눌러 시작하세요!</p>
                        </div>


                        {/* 버튼 */}
                        <button
                            onClick={handleStartClick} // 버튼 클릭 시 페이지 이동
                            className="bg-highlight text-white py-2 px-6 rounded-full hover:bg-yellow-500"
                        >
                            시작하기
                        </button>
                    </main>
                </div>

                {/* 푸터 */}
                <div className="flex-shrink-0">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default StartPage;
