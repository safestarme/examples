<script type="text/javascript" src="https://safestar.me/wp-content/themes/safestar-new/scripts/web3.js"></script>
<script type="text/javascript" src="https://safestar.me/wp-content/themes/safestar-new/scripts/w3modal.js?v=1.0.3"></script>
<script type="text/javascript" src="https://safestar.me/wp-content/themes/safestar-new/scripts/evm-chains.js"></script>
<script type="text/javascript" src="https://safestar.me/wp-content/themes/safestar-new/scripts/umd.js"></script>

<script type="text/javascript">
    App = {};
    App.Web3 = new Web3("https://bsc-dataseed1.binance.org:443");
</script>


<script type="text/javascript">
((App) => {

	const web3_BSC = App.Web3;

	const Web3Modal = window.Web3Modal.default;
	const WalletConnectProvider = window.WalletConnectProvider.default;

	let provider = null;
    let selectedAccount = null;
    let accounts = null;
    let web3 = null;

	const providerOptions = {
        /* See Provider Options Section */
        walletconnect: {
            package: WalletConnectProvider, // required
            options: {
                rpc: { 56: 'https://bsc-dataseed1.defibit.io/', },
                network: "binance",
            }
        },
        // Other Providers Go Here
    };

    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions, // required
        disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    });

    const loadWallet = async () => {

        try {
            provider = await web3Modal.connect();
        } catch (e) {
            console.log("Could not get a wallet connection", e);
            return;
        }

        web3 = new Web3(provider);

        onConnect();
    };

    const onConnect = async () => {
        const chainId = await web3.eth.getChainId();


        if (wrongNetworkWarning) {
            removeWrongChainWarning();
        }

        // Subscribe to accounts change
        provider.on("accountsChanged", async () => {
            refreshAccountData();
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            fetchAccountData();
        });

        // Subscribe to networkId change
        provider.on("networkChanged", async (networkId) => {
            fetchAccountData();
        });

        await refreshAccountData();
    };

})(App);

</script>
