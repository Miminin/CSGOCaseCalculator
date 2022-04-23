function intWARI(a, b)
{
    let ans;
    ans = a % b;
    ans = (a - ans) / b;

    return ans;
}

function csgocasecalc()
{
    let wallet = 0;
    let Case = 0;
    let key = 0;

    wallet = document.getElementById('wallet').value;
    Case = document.getElementById('case').value;
    key = document.getElementById('keyprice').value;
    key = Number(key);

    let WL = wallet % key;
    let CS = intWARI(wallet, key);
    let WK = intWARI(WL, Case);

    while (CS > WK) {
        CS--;
        WL += key;
        WK = intWARI(WL, Case);
    }

    document.getElementById('canopen').innerText = CS;
    document.getElementById('walletleft').innerText = WL-Case*CS;
    document.getElementById('whatkey').innerText = key;
}
