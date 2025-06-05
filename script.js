// Efeito de carregamento suave
document.addEventListener("DOMContentLoaded", () => {
document.body.style.opacity = "1";
});
// Efeito de hover dinâmico nos botões
document.querySelectorAll('.botao-link').forEach(botao => {
botao.addEventListener('mouseenter', () => {
botao.style.transform = 'scale(1.05)';
});
botao.addEventListener('mouseleave', () => {
botao.style.transform = 'scale(1)';
});
});