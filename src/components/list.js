import React from "react";
import { FaCheckCircle, FaTimesCircle, FaCode, FaGraduationCap } from "react-icons/fa";
import Footer from "./footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "./css/scrollbar.css";

// 문제 항목을 위한 컴포넌트
const ProblemItem = ({ title, difficulty, tags, status, language, correctRate }) => {
    const statusIcon = status === 'solved' ? <FaCheckCircle className="text-green-600 mr-2" /> : <FaTimesCircle className="text-red-600 mr-2" />;
    const statusText = status === 'solved' ? "문제 해결됨" : "풀지 않음";

    return (
        <li className={`p-6 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl bg-gray-700 border-2 border-white w-[420px] h-[210px]`}>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-yellow-500">{title}</h2>
                <span className="text-sm text-gray-500 text-white">{difficulty}</span>
            </div>

            <div className="mt-2 text-sm text-white">
                <span className="mr-2">{tags.join(", ")}</span>
            </div>

            {/* 언어와 정답률 정보 추가 */}
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center text-white">
                    <FaCode className="w-4 h-4 mr-1 text-white dark:text-gray-400"/>
                    {language}
                </span>
                <span className="flex items-center text-white">
                    <FaGraduationCap className="w-4 h-4 mr-1 text-white dark:text-gray-400"/>
                    {correctRate}%
                </span>
            </div>

            <div className="mt-2 flex items-center space-x-2 text-sm">
                <div className="flex items-center text-white">
                    {statusIcon}
                    <span className="text-white">{statusText}</span>
                </div>
            </div>

            {/* 문제 풀러 가는 버튼 */}
            <div className="mt-4">
                <Link to="/problem-detail"
                      className="w-full inline-block bg-gray-900 hover:bg-yellow-500 text-white py-2 rounded-lg text-center">
                    문제 풀러 가기
                </Link>
            </div>
        </li>
    );
};

function ProblemListPage() {
    const problems = [
        {title: '문제 1', difficulty: '쉬움', tags: ['배열', '정렬'], status: 'solved', language: 'Java', correctRate: 85 },
        { title: '문제 2', difficulty: '중간', tags: ['문자열', 'DP'], status: 'unsolved', language: 'Python', correctRate: 65 },
        { title: '문제 3', difficulty: '어려움', tags: ['그래프', 'DFS'], status: 'solved', language: 'JavaScript', correctRate: 92 },
        { title: '문제 4', difficulty: '중간', tags: ['배열', '정렬'], status: 'unsolved', language: 'Java', correctRate: 70 },
    ];

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            {/* 스마트폰 비율 컨테이너 */}
            <div className="aspect-[9/16] w-full max-w-md bg-gradient-to-b from-primary via-secondary to-background shadow-lg rounded-lg overflow-hidden relative">
                {/* 콘텐츠 */}
                <div className="relative z-10 flex flex-col h-full">
                    {/* 헤더 */}
                    <div className="flex-shrink-0">
                        <Navbar />
                    </div>

                    {/* 문제 리스트 콘텐츠 */}
                    <main className="flex-grow flex flex-col items-center justify-between py-5">
                        <ul className="space-y-6 w-full px-4 overflow-y-auto max-h-[70%]">
                            {problems.map((problem, index) => (
                                <ProblemItem
                                    key={index}
                                    title={problem.title}
                                    difficulty={problem.difficulty}
                                    tags={problem.tags}
                                    status={problem.status}
                                    language={problem.language}
                                    correctRate={problem.correctRate}
                                />
                            ))}
                        </ul>
                    </main>

                    {/* 푸터 */}
                    <div className="absolute bottom-0 w-full">
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProblemListPage;
