document.getElementById("btAlterarTema").addEventListener("click", alterarTema);

function alterarTema() {
    const tema = document.body.getAttribute("data-theme");
    const novoTema = tema === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", novoTema);
    const icon = document.querySelector("#btAlterarTema .icon");
    icon.textContent = novoTema === "dark" ? "🌙" : "☀️"; // Alterna entre lua e sol
    localStorage.setItem("tema", novoTema);
}

document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema") || "light";
    document.body.setAttribute("data-theme", temaSalvo);
    const icon = document.querySelector("#btAlterarTema .icon");
    icon.textContent = temaSalvo === "dark" ? "🌙" : "☀️";
});