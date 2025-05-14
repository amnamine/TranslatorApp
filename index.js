// Language translations
const translations = {
    en: {
        'hero-title': 'Smart Historical Documents Translator',
        'hero-subtitle': 'Translate historical documents with advanced AI technology',
        'feature1-title': 'Multi-Language Support',
        'feature1-desc': 'Translate between Arabic, English, French, and Latin with high accuracy',
        'feature2-title': 'PDF Integration',
        'feature2-desc': 'Load PDF documents and save translations as PDF files',
        'feature3-title': 'Text-to-Speech',
        'feature3-desc': 'Listen to translations in natural-sounding voices',
        'feature4-title': 'Modern Interface',
        'feature4-desc': 'Clean and intuitive design for seamless translation experience',
        'cta-title': 'Ready to Start Translating?',
        'cta-subtitle': 'Download our application and experience the power of smart translation',
        'download-installer-btn': 'Download Installer',
        'download-app-btn': 'Download Application',
        'download-drive-btn': 'Download from Google Drive',
        'footer-text': '© 2024 Smart Historical Documents Translator. All rights reserved.',
        'download-success': 'Download started!',
        'download-error': 'Error starting download. Please try again.'
    },
    fr: {
        'hero-title': 'Traducteur Intelligent de Documents Historiques',
        'hero-subtitle': 'Traduisez des documents historiques avec une technologie IA avancée',
        'feature1-title': 'Support Multilingue',
        'feature1-desc': 'Traduisez entre l\'arabe, l\'anglais, le français et le latin avec une grande précision',
        'feature2-title': 'Intégration PDF',
        'feature2-desc': 'Chargez des documents PDF et enregistrez les traductions en fichiers PDF',
        'feature3-title': 'Synthèse Vocale',
        'feature3-desc': 'Écoutez les traductions avec des voix naturelles',
        'feature4-title': 'Interface Moderne',
        'feature4-desc': 'Design épuré et intuitif pour une expérience de traduction fluide',
        'cta-title': 'Prêt à Commencer la Traduction ?',
        'cta-subtitle': 'Téléchargez notre application et découvrez la puissance de la traduction intelligente',
        'download-installer-btn': 'Télécharger l\'Installateur',
        'download-app-btn': 'Télécharger l\'Application',
        'download-drive-btn': 'Télécharger depuis Google Drive',
        'footer-text': '© 2024 Traducteur Intelligent de Documents Historiques. Tous droits réservés.',
        'download-success': 'Téléchargement commencé !',
        'download-error': 'Erreur lors du téléchargement. Veuillez réessayer.'
    },
    ar: {
        'hero-title': 'مترجم المستندات التاريخية الذكي',
        'hero-subtitle': 'ترجمة المستندات التاريخية باستخدام تقنية الذكاء الاصطناعي المتقدمة',
        'feature1-title': 'دعم متعدد اللغات',
        'feature1-desc': 'ترجمة بين العربية والإنجليزية والفرنسية واللاتينية بدقة عالية',
        'feature2-title': 'تكامل PDF',
        'feature2-desc': 'تحميل مستندات PDF وحفظ الترجمات كملفات PDF',
        'feature3-title': 'تحويل النص إلى كلام',
        'feature3-desc': 'استمع إلى الترجمات بأصوات طبيعية',
        'feature4-title': 'واجهة حديثة',
        'feature4-desc': 'تصميم أنيق وبديهي لتجربة ترجمة سلسة',
        'cta-title': 'هل أنت مستعد للبدء في الترجمة؟',
        'cta-subtitle': 'قم بتنزيل تطبيقنا واختبر قوة الترجمة الذكية',
        'download-installer-btn': 'تنزيل المثبت',
        'download-app-btn': 'تنزيل التطبيق',
        'download-drive-btn': 'تنزيل من Google Drive',
        'footer-text': '© 2024 مترجم المستندات التاريخية الذكي. جميع الحقوق محفوظة.',
        'download-success': 'بدأ التنزيل!',
        'download-error': 'خطأ في بدء التنزيل. يرجى المحاولة مرة أخرى.'
    }
};

// Language switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const langTexts = document.querySelectorAll('.lang-text');
    
    // Set initial language
    let currentLang = 'en';
    updateLanguage(currentLang);

    // Add click event listeners to language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                updateLanguage(lang);
                
                // Update active button state
                langButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Update document direction for Arabic
                document.documentElement.lang = lang;
                document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
            }
        });
    });

    // Function to update all text elements with translations
    function updateLanguage(lang) {
        langTexts.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
    }

    // Google Drive link functionality
    const driveBtn = document.querySelector('.drive-btn');
    driveBtn.addEventListener('click', () => {
        window.open('https://drive.google.com/drive/folders/1H8q5Cv5BnQ4YRjguV0C_OHnc1KtRH-rc?usp=drive_link', '_blank');
    });

    // Add smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}); 