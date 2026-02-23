function ativarCarrinhoUI() {

    const cartPanel = document.getElementById("cartPanel");
    const cartIcon = document.getElementById("cartIcon");

    if (!cartIcon) return;

    cartIcon.onclick = () => {
        cartPanel.classList.toggle("active");
    };
}

function renderCartUI(carrinho) {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";

    let total = 0;

    carrinho.forEach((item, index) => {

        total += item.preco;

        const div = document.createElement("div");
        div.classList.add("cart-item");

        div.innerHTML = `
            <span>${item.nome}</span>
            <div style="display:flex; align-items:center; gap:10px;">
                <span>R$ ${item.preco.toFixed(2)}</span>
                <span class="remove-item" data-index="${index}">✖</span>
            </div>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.innerText = total.toFixed(2);

    // 🔴 EVENTO DE REMOÇÃO
    document.querySelectorAll(".remove-item").forEach(botao => {
        botao.addEventListener("click", () => {
            const index = botao.dataset.index;
            carrinho.splice(index, 1);
            atualizarCarrinho();
        });
    });

}