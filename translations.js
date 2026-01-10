// Translations for My Money Map
const translations = {
    en: {
        // Navigation
        "nav.about": "About Marcia",
        "nav.services": "Services",
        "nav.resources": "Resources",
        "nav.book": "Book a Free Discovery Call",
        "nav.dropdown.coaching": "Coaching",
        "nav.dropdown.events": "Events",
        "nav.dropdown.partners": "Partnerships",

        // Hero Section
        "hero.tag": "Unlock Your Wealth",
        "hero.title": "Your Personal <br>Finance Guide",
        "hero.desc": "Expert coaching on budgeting, debt management, and investing. Let's map out your journey to financial freedom together.",
        "hero.cta": "Start Your Journey",
        "hero.meet": "Meet Marcia",
        "hero.float1.label": "Monthly Savings",
        "hero.float1.val": "+24% Growth",
        "hero.float2.label": "Budget Goal",
        "hero.float2.val": "On Track",

        // Services Section
        "services.tag": "Strategic Solutions",
        "services.title": "Comprehensive <br>Financial Coaching",
        "services.card1.title": "Budgeting & Planning",
        "services.card1.desc": "Create a realistic spending plan that fits your lifestyle while prioritizing your long-term goals.",
        "services.card2.title": "Debt Management",
        "services.card2.desc": "Strategies to tackle debt efficiently and regain control of your financial health.",
        "services.card3.title": "Investing Basics",
        "services.card3.desc": "Demystifying the stock market and building a diversified portfolio for future growth.",
        "services.card4.title": "Miles & Discounts",
        "services.card4.desc": "Learn how to maximize rewards, travel for less, and find hidden savings in your daily life.",

        // About Section
        "about.tag": "About Marcia",
        "about.title": "Your Partner in <br>Wealth Building",
        "about.desc": "Financial freedom isn't just about the numbers; it's about the confidence to live the life you want. As a Certified Personal Finance Consultant, I bridge the gap between complex financial concepts and actionable daily habits.",
        "about.creds.1": "Certified Personal Finance Consultant (C.P.F.E.®️)",
        "about.creds.2": "Specialised in Savings & Miles Optimisation",
        "about.creds.3": "1-on-1 Mentoring Sessions",
        "about.creds.4": "Tailored Roadmaps for Every Client",
        "about.btn": "Book a Free Discovery Call",

        // Footer
        "footer.tagline": "Empowering your financial future.",
        "footer.copyright": "© 2026 My Money Map. All rights reserved."
    },

    pt: {
        // Navigation
        "nav.about": "Sobre a Marcia",
        "nav.services": "Serviços",
        "nav.resources": "Recursos",
        "nav.book": "Agende uma Chamada Grátis",
        "nav.dropdown.coaching": "Coaching",
        "nav.dropdown.events": "Eventos",
        "nav.dropdown.partners": "Parcerias",

        // Hero Section
        "hero.tag": "Desbloqueie Sua Riqueza",
        "hero.title": "Seu Guia Pessoal <br>de Finanças",
        "hero.desc": "Coaching especializado em orçamento, gestão de dívidas e investimentos. Vamos mapear juntos sua jornada para a liberdade financeira.",
        "hero.cta": "Comece Sua Jornada",
        "hero.meet": "Conheça a Marcia",
        "hero.float1.label": "Poupança Mensal",
        "hero.float1.val": "+24% Crescimento",
        "hero.float2.label": "Meta de Orçamento",
        "hero.float2.val": "No Caminho Certo",

        // Services Section
        "services.tag": "Soluções Estratégicas",
        "services.title": "Coaching Financeiro <br>Completo",
        "services.card1.title": "Orçamento e Planejamento",
        "services.card1.desc": "Crie um plano de gastos realista que se adapte ao seu estilo de vida enquanto prioriza seus objetivos de longo prazo.",
        "services.card2.title": "Gestão de Dívidas",
        "services.card2.desc": "Estratégias para enfrentar dívidas de forma eficiente e retomar o controle da sua saúde financeira.",
        "services.card3.title": "Fundamentos de Investimento",
        "services.card3.desc": "Desmistificando o mercado de ações e construindo uma carteira diversificada para crescimento futuro.",
        "services.card4.title": "Milhas e Descontos",
        "services.card4.desc": "Aprenda como maximizar recompensas, viajar por menos e encontrar economias ocultas no seu dia a dia.",

        // About Section
        "about.tag": "Sobre a Marcia",
        "about.title": "Sua Parceira na <br>Construção de Patrimônio",
        "about.desc": "Liberdade financeira não é apenas sobre números; é sobre a confiança de viver a vida que você deseja. Como Consultora Certificada em Finanças Pessoais, eu conecto conceitos financeiros complexos com hábitos diários práticos.",
        "about.creds.1": "Consultora Certificada em Finanças Pessoais (C.P.F.E.®️)",
        "about.creds.2": "Especializada em Poupança e Otimização de Milhas",
        "about.creds.3": "Sessões de Mentoria Individual",
        "about.creds.4": "Roteiros Personalizados para Cada Cliente",
        "about.btn": "Agende uma Chamada Grátis",

        // Footer
        "footer.tagline": "Capacitando seu futuro financeiro.",
        "footer.copyright": "© 2026 My Money Map. Todos os direitos reservados."
    }
};

// Language Switcher Logic
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.init();
    }

    init() {
        // Apply saved language on load
        this.setLanguage(this.currentLang);

        // Set up button listeners
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update active button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-GB';

        // Update page title
        if (lang === 'pt') {
            document.title = 'My Money Map | Seu Guia Pessoal de Finanças';
        } else {
            document.title = 'My Money Map | Your Personal Finance Guide';
        }
    }
}

// Initialise when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new I18n();
});
