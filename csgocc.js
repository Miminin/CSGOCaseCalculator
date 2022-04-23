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
    let CS, WL, WK;

    wallet = document.getElementById('wallet').value;
    Case = document.getElementById('case').value;
    key = document.getElementById('case').value;

    WL = wallet % key;
    CS = intWARI(wallet, key);
    WK = intWARI(WL, Case);

    while (CS >= WK) {
        CS--;
        WL += key;
        WK = intWARI(WL, Case);
    }

    document.getElementById('canopen').innerHTML = 'you can open ${CS} cases\n'
    document.getElementById('walletleft').innerHTML = '${WL - Case * CS} meny left'


}