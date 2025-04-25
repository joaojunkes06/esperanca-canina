// Dados para o site da Esperança Canina
// Estes dados seriam normalmente carregados de uma API

// Dados dos cães disponíveis para adoção
const dogs = [
    {
        id: 1,
        name: "Luna",
        age: "Jovem",
        gender: "Fêmea",
        size: "Médio",
        breed: "Vira-lata",
        status: "disponível",
        description: "Luna é muito carinhosa e brincalhona. Ama passear e é ótima com crianças. Está vacinada e vermifugada.",
        imageUrl: "https://images.unsplash.com/photo-1567529684892-09290a1b2d05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Thor",
        age: "Adulto",
        gender: "Macho",
        size: "Grande",
        breed: "Pastor Alemão",
        status: "disponível",
        description: "Thor é um cão muito leal e protetor. Precisa de espaço e de exercício regular. Está castrado e vacinado.",
        imageUrl: "https://images.unsplash.com/photo-1554226115-64f4aaeef617?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Pipoca",
        age: "Filhote",
        gender: "Fêmea",
        size: "Pequeno",
        breed: "Shih Tzu",
        status: "reservado",
        description: "Pipoca é muito dócil e amorosa. Adora ficar no colo e brincar com bolinhas. Está vacinada.",
        imageUrl: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Max",
        age: "Adulto",
        gender: "Macho",
        size: "Médio",
        breed: "Golden Retriever",
        status: "adotado",
        description: "Max é um cão extremamente amigável e inteligente. Adora nadar e buscar objetos. Está castrado e vacinado.",
        imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Nina",
        age: "Idoso",
        gender: "Fêmea",
        size: "Pequeno",
        breed: "Poodle",
        status: "disponível",
        description: "Nina é muito tranquila e afetuosa. Gosta de ambientes calmos e de dormir no sofá. Está castrada e vacinada.",
        imageUrl: "https://images.unsplash.com/photo-1524511751214-b0a384dd9afe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 6,
        name: "Zé",
        age: "Jovem",
        gender: "Macho",
        size: "Grande",
        breed: "Labrador",
        status: "disponível",
        description: "Zé é muito brincalhão e cheio de energia. Adora correr e brincar com outros cães. Está castrado e vacinado.",
        imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    }
];

// Dados dos depoimentos
const testimonials = [
    {
        id: 1,
        text: "Adotar a Luna foi a melhor decisão que tomamos. Ela trouxe tanta alegria para nossa família e se adaptou perfeitamente ao nosso estilo de vida. O processo de adoção foi simples e a equipe da Esperança Canina nos deu todo o suporte necessário!",
        author: "Ana Souza",
        location: "São Paulo, SP",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
        id: 2,
        text: "O Thor chegou para completar nossa família. Ele é extremamente protetor e carinhoso, principalmente com as crianças. Agradeço muito à Esperança Canina por nos ajudar a encontrar esse parceiro incrível!",
        author: "Carlos Oliveira",
        location: "Rio de Janeiro, RJ",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
        id: 3,
        text: "Adotar o Max mudou minha vida completamente. Ele me ajudou a superar um momento difícil e se tornou meu melhor amigo. Ele é incrivelmente inteligente e aprende comandos muito rápido. Recomendo a todos adotar um cão da Esperança Canina!",
        author: "Mariana Silva",
        location: "Belo Horizonte, MG",
        imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
];

// Dados das doações recentes
const donations = [
    {
        id: 1,
        name: "João Silva",
        amount: 100,
        date: "23/04/2023",
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: 2,
        name: "Maria Oliveira",
        amount: 50,
        date: "20/04/2023",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: 3,
        name: "Pedro Santos",
        amount: 200,
        date: "18/04/2023",
        imageUrl: "https://randomuser.me/api/portraits/men/62.jpg"
    },
    {
        id: 4,
        name: "Ana Ferreira",
        amount: 75,
        date: "15/04/2023",
        imageUrl: "https://randomuser.me/api/portraits/women/58.jpg"
    },
    {
        id: 5,
        name: "Lucas Costa",
        amount: 150,
        date: "10/04/2023",
        imageUrl: "https://randomuser.me/api/portraits/men/41.jpg"
    }
];