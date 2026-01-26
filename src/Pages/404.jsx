import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

export default function NotFoundPage() {
  const navigate = useNavigate();
  const t = useTranslation();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Number with gradient */}
        <div className="mb-8" data-aos="zoom-in">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent mb-4 animate-pulse">
            404
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-[#6366f1] to-[#a855f7] mx-auto rounded-full"></div>
        </div>

        {/* Message */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            {t.notFound?.title || "Oops! Page Not Found"}
          </h2>
          <p className="text-lg text-gray-400 max-w-md mx-auto leading-relaxed">
            {t.notFound?.description || "The page you are looking for may have moved, been deleted, or may not have existed."}
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-8" data-aos="fade-up" data-aos-delay="400">
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#6366f1]/20 to-[#a855f7]/20 rounded-full flex items-center justify-center mb-6 backdrop-blur-xl border border-white/10">
            <div className="text-6xl animate-bounce">🔍</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" data-aos="fade-up" data-aos-delay="600">
          <button
            onClick={handleGoBack}
            className="group flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 backdrop-blur-xl border border-white/10"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
            {t.notFound?.goBack || "Go Back"}
          </button>
          
          <button
            onClick={handleGoHome}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl hover:shadow-lg hover:shadow-[#6366f1]/50 transition-all duration-300 hover:scale-105"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform duration-300" />
            {t.notFound?.goHome || "Go Home"}
          </button>
        </div>
      </div>
    </div>
  );
}