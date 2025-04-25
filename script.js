// Script principal para o site Esperança Canina

document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle para dispositivos móveis
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Renderizar cards de cães
    renderDogs(dogs);
    
    // Configurar filtros de cães
    setupDogFilters();
    
    // Renderizar depoimentos
    renderTestimonials(testimonials);
    
    // Configurar slider de depoimentos
    setupTestimonialSlider();
    
    // Renderizar doações recentes
    renderDonations(donations);
    
    // Configurar botões de valor de doação
    setupDonationButtons();
    
    // Configurar formulário de contato
    setupContactForm();
});

// Função para renderizar os cards de cães
function renderDogs(dogsData) {
    const dogContainer = document.getElementById('dogContainer');
    if (!dogContainer) return;
    
    dogContainer.innerHTML = '';
    
    if (dogsData.length === 0) {
        dogContainer.innerHTML = '<p class="no-results">Nenhum cão encontrado com os filtros selecionados.</p>';
        return;
    }
    
    dogsData.forEach(dog => {
        // Determinar classe de status
        let statusClass = '';
        let statusText = '';
        
        switch (dog.status) {
            case 'disponível':
                statusClass = 'status-available';
                statusText = 'Disponível para adoção';
                break;
            case 'reservado':
                statusClass = 'status-pending';
                statusText = 'Reservado';
                break;
            case 'adotado':
                statusClass = 'status-adopted';
                statusText = 'Adotado';
                break;
            default:
                statusClass = 'status-available';
                statusText = 'Disponível para adoção';
        }
        
        const dogCard = document.createElement('div');
        dogCard.className = 'dog-card';
        dogCard.innerHTML = `
            <div class="dog-image">
                <img src="${dog.imageUrl}" alt="${dog.name}">
            </div>
            <div class="dog-info">
                <h3 class="dog-name">${dog.name}</h3>
                <div class="dog-status ${statusClass}">${statusText}</div>
                <div class="dog-meta">
                    <div class="dog-meta-item">
                        <i class="fas fa-birthday-cake"></i> ${dog.age}
                    </div>
                    <div class="dog-meta-item">
                        <i class="fas fa-venus-mars"></i> ${dog.gender}
                    </div>
                    <div class="dog-meta-item">
                        <i class="fas fa-ruler"></i> ${dog.size}
                    </div>
                </div>
                <p class="dog-description">${truncateText(dog.description, 100)}</p>
                <a href="#" class="btn-primary" onclick="showDogDetails(${dog.id}); return false;">Ver Detalhes</a>
            </div>
        `;
        
        dogContainer.appendChild(dogCard);
    });
}

// Função para configurar os filtros de cães
function setupDogFilters() {
    const ageFilter = document.getElementById('age');
    const genderFilter = document.getElementById('gender');
    const sizeFilter = document.getElementById('size');
    
    if (!ageFilter || !genderFilter || !sizeFilter) return;
    
    const applyFilters = () => {
        const ageValue = ageFilter.value;
        const genderValue = genderFilter.value;
        const sizeValue = sizeFilter.value;
        
        const filteredDogs = dogs.filter(dog => {
            return (ageValue === 'todos' || dog.age.toLowerCase().includes(ageValue.toLowerCase())) &&
                   (genderValue === 'todos' || dog.gender.toLowerCase() === genderValue.toLowerCase()) &&
                   (sizeValue === 'todos' || dog.size.toLowerCase() === sizeValue.toLowerCase());
        });
        
        renderDogs(filteredDogs);
    };
    
    ageFilter.addEventListener('change', applyFilters);
    genderFilter.addEventListener('change', applyFilters);
    sizeFilter.addEventListener('change', applyFilters);
}

// Função para mostrar detalhes de um cão (seria implementada completamente em uma versão real)
function showDogDetails(dogId) {
    const dog = dogs.find(d => d.id === dogId);
    
    if (!dog) {
        alert('Cão não encontrado!');
        return;
    }
    
    alert(`Detalhes de ${dog.name}:\n\nRaça: ${dog.breed}\nIdade: ${dog.age}\nGênero: ${dog.gender}\nPorte: ${dog.size}\nStatus: ${dog.status}\n\n${dog.description}`);
    
    // Em uma versão completa, isso abriria uma página de detalhes ou um modal
}

// Função para renderizar os depoimentos
function renderTestimonials(testimonialsData) {
    const testimonialContainer = document.getElementById('testimonialContainer');
    const sliderDots = document.getElementById('sliderDots');
    
    if (!testimonialContainer || !sliderDots) return;
    
    testimonialContainer.innerHTML = '';
    sliderDots.innerHTML = '';
    
    testimonialsData.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
        slide.dataset.index = index;
        
        slide.innerHTML = `
            <div class="testimonial-card">
                <div class="testimonial-text">${testimonial.text}</div>
                <div class="testimonial-author">
                    <div class="author-image">
                        <img src="${testimonial.imageUrl}" alt="${testimonial.author}">
                    </div>
                    <div class="author-name">${testimonial.author}</div>
                    <div class="author-info">${testimonial.location}</div>
                </div>
            </div>
        `;
        
        testimonialContainer.appendChild(slide);
        
        const dot = document.createElement('div');
        dot.className = `slider-dot ${index === 0 ? 'active' : ''}`;
        dot.dataset.index = index;
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        
        sliderDots.appendChild(dot);
    });
}

// Função para configurar o slider de depoimentos
function setupTestimonialSlider() {
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    
    if (!prevButton || !nextButton) return;
    
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    
    if (slides.length === 0) return;
    
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(currentSlide);
    });
    
    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    });
    
    // Auto rotate slides every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }, 5000);
}

// Função para ir para um slide específico
function goToSlide(index) {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.slider-dot');
    
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

// Função para renderizar as doações recentes
function renderDonations(donationsData) {
    const donationsContainer = document.getElementById('donationsContainer');
    
    if (!donationsContainer) return;
    
    donationsContainer.innerHTML = '';
    
    donationsData.forEach(donation => {
        const donationItem = document.createElement('div');
        donationItem.className = 'donation-item';
        
        donationItem.innerHTML = `
            <div class="donor-info">
                <div class="donor-avatar">
                    <img src="${donation.imageUrl}" alt="${donation.name}">
                </div>
                <div>
                    <div class="donor-name">${donation.name}</div>
                    <div class="donation-date">${donation.date}</div>
                </div>
            </div>
            <div class="donation-value">R$${donation.amount}</div>
        `;
        
        donationsContainer.appendChild(donationItem);
    });
}

// Função para configurar os botões de valor de doação
function setupDonationButtons() {
    const amountButtons = document.querySelectorAll('.amount-btn');
    
    amountButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe 'selected' de todos os botões no mesmo grupo
            const parent = this.parentElement;
            parent.querySelectorAll('.amount-btn').forEach(btn => {
                btn.classList.remove('selected');
            });
            
            // Adicionar classe 'selected' ao botão clicado
            this.classList.add('selected');
            
            // Se for botão de valor personalizado, pedir ao usuário
            if (this.classList.contains('custom')) {
                const customValue = prompt('Digite o valor da doação em reais:');
                if (customValue && !isNaN(customValue) && customValue > 0) {
                    this.setAttribute('data-value', customValue);
                    this.textContent = `R$${customValue}`;
                } else {
                    this.classList.remove('selected');
                }
            }
        });
    });
}

// Função para configurar o formulário de contato
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validação simples
        if (!name || !email || !subject || !message) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Simulação de envio (em uma versão real, isso enviaria para o servidor)
        alert(`Mensagem enviada com sucesso!\n\nNome: ${name}\nEmail: ${email}\nAssunto: ${subject}\n\nObrigado pelo contato! Responderemos em breve.`);
        contactForm.reset();
    });
}

// Função utilitária para truncar texto
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}