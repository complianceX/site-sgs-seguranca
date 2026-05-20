document.addEventListener('DOMContentLoaded', () => {

    // 1. Inicializar Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Mudança de Estado da Navbar no Scroll
    const header = document.getElementById('header');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Verifica no carregamento inicial

    // 3. Menu Mobile Toggle
    const mobileMenuToggle = document.querySelector('.mobile-nav-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
        mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
        mobileMenu.classList.toggle('open');
        mobileMenu.setAttribute('aria-hidden', isExpanded);
        document.body.style.overflow = isExpanded ? '' : 'hidden'; // Evita scroll do body com menu aberto
    }

    mobileMenuToggle.addEventListener('click', toggleMenu);

    // Fechar menu mobile ao clicar em um link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // 4. Animação Scroll Reveal com Intersection Observer
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona classe para disparar animação CSS
                entry.target.classList.add('active');
                // Remove o observador do elemento após animar uma vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1, // Elemento aparece se 10% estiver visível
        rootMargin: '0px 0px -50px 0px' // Margem inferior sutil para melhor experiência
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 5. Máscara Dinâmica de Telefone
    const inputTelefone = document.getElementById('telefone');

    function aplicarMascaraTelefone(value) {
        if (!value) return "";
        value = value.replace(/\D/g, ""); // Remove não dígitos
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2"); // Adiciona parênteses no DDD
        
        if (value.length > 9) {
            value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Máscara para celular: (XX) XXXXX-XXXX
        } else {
            value = value.replace(/(\d{4})(\d)/, "$1-$2"); // Máscara para fixo: (XX) XXXX-XXXX (enquanto digita)
        }
        return value;
    }

    inputTelefone.addEventListener('input', (e) => {
        let value = e.target.value;
        // Limita o tamanho máximo digitável formatado
        value = value.replace(/\D/g, "");
        if (value.length > 11) value = value.substring(0, 11);
        
        e.target.value = aplicarMascaraTelefone(value);
    });

    // 6. Validação e Envio de Formulário Interativo
    const form = document.getElementById('orcamento-form');
    const formFeedback = document.getElementById('form-feedback');
    const btnCloseFeedback = document.getElementById('btn-close-feedback');
    const btnSubmitForm = document.getElementById('btn-submit-form');

    // Validador de Email Corporativo/Geral
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Validador de Telefone Mínimo
    function isValidPhone(phone) {
        const cleanPhone = phone.replace(/\D/g, "");
        return cleanPhone.length >= 10 && cleanPhone.length <= 11;
    }

    function validateField(fieldId, validatorFn, errorMsgId) {
        const fieldGroup = document.getElementById(fieldId).closest('.form-group');
        const fieldValue = document.getElementById(fieldId).value.trim();
        
        let isValid = true;
        if (validatorFn) {
            isValid = validatorFn(fieldValue);
        } else {
            isValid = fieldValue !== "";
        }

        if (!isValid) {
            fieldGroup.classList.add('has-error');
        } else {
            fieldGroup.classList.remove('has-error');
        }

        return isValid;
    }

    // Remover erro ao digitar ou interagir com o campo
    const formInputs = form.querySelectorAll('input, select, textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', () => {
            const group = input.closest('.form-group');
            if (group.classList.contains('has-error')) {
                group.classList.remove('has-error');
            }
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Executar validações de todos os campos obrigatórios
        const isNomeValid = validateField('nome', null);
        const isEmailValid = validateField('email', isValidEmail);
        const isTelefoneValid = validateField('telefone', isValidPhone);
        const isServicoValid = validateField('servico', null);

        const isFormValid = isNomeValid && isEmailValid && isTelefoneValid && isServicoValid;

        if (isFormValid) {
            // Efeito visual de processamento no botão de envio
            btnSubmitForm.disabled = true;
            const originalBtnContent = btnSubmitForm.innerHTML;
            btnSubmitForm.innerHTML = '<span>Processando Envio...</span><i class="animate-spin" style="border: 2px solid currentColor; border-top-color: transparent; border-radius: 50%; width: 16px; height: 16px; display: inline-block;"></i>';

            // Simula envio por rede (API local / Servidor)
            setTimeout(() => {
                // Exibe modal com animação de sucesso
                formFeedback.classList.add('show');
                
                // Restaura o botão e limpa o formulário
                btnSubmitForm.disabled = false;
                btnSubmitForm.innerHTML = originalBtnContent;
                form.reset();
            }, 1800);
        }
    });

    // Fechar modal de sucesso
    btnCloseFeedback.addEventListener('click', () => {
        formFeedback.classList.remove('show');
    });

    // 7. Navegação Suave e Destaque Dinâmico de Links da Navbar ao Rolar
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 100; // Offset do header

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Remove active de todos os links desktop
                document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                // Adiciona no link atual
                const activeLink = document.querySelector(`.desktop-nav a[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);
    highlightNavigation(); // Roda na inicialização para setar a primeira seção ativa
});
