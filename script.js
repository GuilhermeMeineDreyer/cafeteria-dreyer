let carrinho = [];

const botoes = document.querySelectorAll(".add-to-cart");

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        const nome = botao.dataset.name;
        const preco = parseFloat(botao.dataset.price);

        carrinho.push({ nome, preco });

        atualizarCarrinho();

    });
});

function atualizarCarrinho() {

    const iconeCarrinho = document.querySelector(".icons");

    iconeCarrinho.innerHTML = `
        <img src="assets/cart.png" id="cartIcon">
        <span style="color:white; font-size:1.5rem;">
            (${carrinho.length})
        </span>
    `;

    if (typeof ativarCarrinhoUI === "function") {
        ativarCarrinhoUI();
    }

    if (typeof renderCartUI === "function") {
        renderCartUI(carrinho);
    }
}

if (typeof ativarCarrinhoUI === "function") {
    ativarCarrinhoUI();
}

if (typeof renderCartUI === "function") {
    renderCartUI(carrinho);
}

let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (window.innerWidth <= 768) {

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add("hide");
        } else {
            header.classList.remove("hide");
        }

        lastScroll = currentScroll;
    }
});