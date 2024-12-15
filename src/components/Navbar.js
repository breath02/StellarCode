import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaBatteryFull, FaBars } from "react-icons/fa";

function Navbar() {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 상태 추가

    // 시간 업데이트 효과
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        }, 1000);

        return () => clearInterval(timer); // 컴포넌트가 언마운트되면 타이머 정리
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // 메뉴 열림/닫힘 토글
    };

    return (
        <nav className="bg-primary text-white shadow-lg">
            {/* 상태 표시줄 */}
            <div className="flex justify-between items-center px-4 py-1 bg-gray-800 text-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                    <FaWifi className="text-white" />
                    <span>WiFi</span>
                </div>
                <span className="text-white">{currentTime}</span>
                <FaBatteryFull className="text-white" />
            </div>

            {/* 네비게이션 바 */}
            <div className="flex justify-between items-center h-16 px-6 bg-primary text-white">
                {/* 햄버거 메뉴 아이콘 */}
                <div className="flex items-center">
                    <button
                        onClick={toggleMenu}
                        className="text-white text-2xl focus:outline-none"
                    >
                        <FaBars />
                    </button>
                </div>

                {/* 로고와 텍스트 */}
                <Link to="/" className="flex items-center space-x-3">
                    {/* 로고 이미지 */}
                    <div className="w-20 h-16 flex items-center justify-center">
                        <img
                            src="image/logo2.png"
                            alt="StellarCode"
                            className="object-contain w-full h-full"
                        />
                    </div>
                    {/* 로고 텍스트 */}
                    <div>
                        <span className="text-3xl font-bold text-yellow-500">StellarCode</span>
                    </div>
                </Link>

                {/* 빈 공간 (오른쪽 여백 확보) */}
                <div />
            </div>

            {/* 드롭다운 메뉴 */}
            {menuOpen && (
                <div className="absolute top-[4.5rem] left-0 w-full bg-gray-800 text-white z-50 shadow-lg">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/profile">프로필</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/settings">설정</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/logout">로그아웃</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
