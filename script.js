document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema") || "light";
    document.body.setAttribute("data-theme", temaSalvo);

    const icon = document.querySelector("#btAlterarTema .icon");
    icon.textContent = temaSalvo === "dark" ? "🌙" : "☀️";

    const projectBoxes = document.querySelectorAll('.projetos .projetos-box');
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.appendChild(overlay);

    projectBoxes.forEach(box => {
        box.addEventListener('click', (e) => {
            projectBoxes.forEach(b => b.classList.remove('expansivo'));
            box.classList.add('expansivo');
            overlay.style.display = 'block';
            e.stopPropagation();
        });
    });

    document.body.addEventListener('click', () => {
        projectBoxes.forEach(box => box.classList.remove('expansivo'));
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', () => {
        projectBoxes.forEach(box => box.classList.remove('expansivo'));
        overlay.style.display = 'none';
    });

    const botaoTema = document.querySelector("#btAlterarTema");
    botaoTema.addEventListener("click", () => {
        const temaAtual = document.body.getAttribute("data-theme");
        const novoTema = temaAtual === "dark" ? "light" : "dark";
        document.body.setAttribute("data-theme", novoTema);

        icon.textContent = novoTema === "dark" ? "🌙" : "☀️";

        localStorage.setItem("tema", novoTema);
    });

    let bntMenu = document.getElementById('btn-menu');
    let menu = document.getElementById('menu-mobile');
    let overlai = document.getElementById('overlay-menu');

    bntMenu.addEventListener('click', () => {
        menu.classList.add('abrir-menu');
    });

    menu.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });

    overlai.addEventListener('click', () => {
        menu.classList.remove('abrir-menu');
    });

    const btnTopo = document.getElementById("btn-topo");

    // Mostra o botão ao rolar a página
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { // Exibe o botão após rolar 300px
            btnTopo.style.display = "flex";
        } else {
            btnTopo.style.display = "none";
        }
    });

    // Rola para o topo ao clicar no botão
    btnTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Rolagem suave
        });
    });

    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
    });
});