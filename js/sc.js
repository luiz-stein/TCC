//funcoes javascript e integracao solidity

function enviarGarantiaVenda()
{
    document.getElementById('status_garantia_venda').innerHTML = "<b>Sim, transferido 2 ethers</b>";;
    document.getElementById('id-garantia-vendedor').style.display = 'none'
}

function enviarGarantiaCompra()
{
    document.getElementById('status_garantia_compra').innerHTML = "<b>Sim, transferido 2 ethers</b>";;
    document.getElementById('id-garantia-comprador').style.display = 'none'
}