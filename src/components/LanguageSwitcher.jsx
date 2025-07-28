import { div } from "framer-motion/client";
import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { LanguagesIcon } from "lucide-react";

const LanguageSwitcher = ({ isDarkMode }) => {
    const { i18n } = useTranslation();
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    //cerrar dropdown al hace click fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    };

    // Estilos ----
    const containerStyle = {
        position: 'relative',
        display: 'inline-block',
    };

    const iconButtonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: isDarkMode ? '#FFFFFF' : '#615FFF',
    };
    const dropdownStyle = {
        position: 'absolute',
        top: '100%', // Posiciona el menú debajo del botón
        right: 0,
        background: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        zIndex: 1000,
        marginTop: '8px',
    };
    const languageButtonStyle = {
        background: 'none',
        color: '#333',
        fontSize: '14px',
        padding: '8px 16px',
        margin: '0',
        cursor: 'pointer',
        border: 'none',
        display: 'block',
        width: '100%',
        textAlign: 'left',
        fontFamily: "'Montserrat', sans-serif",
        fontWeight: '500',
    };

    const activeLanguageButtonStyle = {
        ...languageButtonStyle,
        background: '#4f46e5',
        color: 'white',
    };

    return (
        <div style={containerStyle} ref={dropdownRef}>
            <button style={iconButtonStyle}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
            >
                <LanguagesIcon strokeWidth={1} size={36} />
            </button>
            {isDropdownOpen && (
                <div style={dropdownStyle}>
                    <button
                        style={i18n.language === 'es' ? activeLanguageButtonStyle : languageButtonStyle}
                        onClick={() => changeLanguage('es')}
                    >
                        Español
                    </button>
                    <button
                        style={i18n.language === 'en' ? activeLanguageButtonStyle : languageButtonStyle}
                        onClick={() => changeLanguage('en')}
                    >
                        English
                    </button>
                </div>
            )}

        </div>
    );
};

export default LanguageSwitcher;
