"use strict";

((App) => {

    const web3_BSC = App.Web3;

    const ssContractAddress = "0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2";

    const ssContract = new web3_BSC.eth.Contract([{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "minTokensBeforeSwap", "type": "uint256" }], "name": "MinTokensBeforeSwapUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "tokensSwapped", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "ethReceived", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "tokensIntoLiqudity", "type": "uint256" }], "name": "SwapAndLiquify", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "bool", "name": "enabled", "type": "bool" }], "name": "SwapAndLiquifyEnabledUpdated", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "_liquidityFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_maxTxAmount", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "_taxFee", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }], "name": "deliver", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "excludeFromReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "geUnlockTime", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInFee", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "includeInReward", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromFee", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "isExcludedFromReward", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "time", "type": "uint256" }], "name": "lock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "tAmount", "type": "uint256" }, { "internalType": "bool", "name": "deductTransferFee", "type": "bool" }], "name": "reflectionFromToken", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "liquidityFee", "type": "uint256" }], "name": "setLiquidityFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "maxTxPercent", "type": "uint256" }], "name": "setMaxTxPercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "bool", "name": "_enabled", "type": "bool" }], "name": "setSwapAndLiquifyEnabled", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "taxFee", "type": "uint256" }], "name": "setTaxFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "swapAndLiquifyEnabled", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "rAmount", "type": "uint256" }], "name": "tokenFromReflection", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalFees", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "uniswapV2Pair", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "uniswapV2Router", "outputs": [{ "internalType": "contract IUniswapV2Router02", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "unlock", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "stateMutability": "payable", "type": "receive" }], ssContractAddress);


    // Unpkg imports
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;

    const participantsListEl = document.getElementById('participantsList');
    const yourTicketsEl = document.getElementById('yourTickets');
    const myTicketsTotalSpentEl = document.getElementById('myTicketsTotalSpent');
    const participantsCountEl = document.getElementById('participantsCount');
    const wrongChainWarningMessageEl = document.getElementById('wrongChainWarningMessage');
    const btnConnetEl = document.getElementById("connectWallet");
    const buyLotteryEl = document.getElementById("buyLottery");
    const approveLotteryEl = document.getElementById("approveLottery");
    const prizePoolEl = document.getElementById('prizePool');
    const totalOfTokenEl = document.getElementById('totalOfToken');
    const buyTicketInputEl = document.getElementById('buyTicketInput');
    const buyTicketNumberEl = document.querySelectorAll('.js-ticket-number');

    let LottoData = null;
    let provider = null;
    let selectedAccount = null;
    let accounts = null;
    let web3 = null;
    let wrongChainWarningNode = null;
    let wrongNetworkWarning = false;
    let luckyBalls = [];
    let myLuckyBalls = [];

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

    // const providerOptions = {
    //     walletconnect: {
    //         package: WalletConnectProvider,
    //         options: {
    //             infuraId: "2f1263880a2349efb50e2f786638f3fd"
    //         }
    //     }
    // };

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

    const fetchAccountData = async () => {
        const _chainId = await web3.eth.getChainId();

        removeWrongChainWarning();

        if (_chainId != 56) {
            renderWrongChainWarning();
            document.getElementById("prepare").style.display = "flex";
            document.getElementById("connected").style.display = "none";
            return;
        }

        const selectedAccountEl = document.getElementById("selectedAccount");
        const accountBalance = document.getElementById("accountBalance");

        accounts = await web3.eth.getAccounts();

        selectedAccount = accounts[0];

        const ssAmount = await ssContract.methods.balanceOf(selectedAccount).call();
        const ssBalance = web3_BSC.utils.fromWei(ssAmount, "nanoether");

        const humanFriendlyBalance = parseFloat(ssBalance).toFixed(0);

        selectedAccountEl.textContent = selectedAccount;
        accountBalance.textContent = App.Utils.formatAmount(humanFriendlyBalance);

        document.getElementById("prepare").style.display = "none";
        document.getElementById("connected").style.display = "block";
    };


    const refreshAccountData = async () => {
        document.getElementById("connected").style.display = "none";
        document.getElementById("prepare").style.display = "flex";

        btnConnetEl.setAttribute("disabled", "disabled");

        buyTicketSection.style.display = "flex";

        buyLotteryEl.setAttribute("disabled", "disabled");
        buyLotteryEl.style.display = "none";

        approveLotteryEl.setAttribute("disabled", "disabled");
        approveLotteryEl.style.display = "none";

        await fetchAccountData(provider);

        setMyticketsNumber();

        if (LottoData.lottoInfo.lottoStatus == "3") {
            document.getElementById('endedLottery').style.display = "flex";
            return;
        }

        const allowance = await ssContract.methods.allowance(selectedAccount, LottoData.lottoInfo.contractAddress).call();

        if (web3_BSC.utils.toBN(allowance).gt(web3_BSC.utils.toBN(LottoData.lottoInfo.ticketPrice))) {
            buyLotteryEl.innerHTML = "Buy ticket(s)";
            buyLotteryEl.removeAttribute("disabled");
            buyLotteryEl.style.display = "block";
        } else {
            approveLotteryEl.removeAttribute("disabled");
            approveLotteryEl.style.display = "block";
        }

        btnConnetEl.removeAttribute("disabled");
    };

    const approveAllowance = async () => {

        try {
            const data_ = ssContract.methods.approve(LottoData.lottoInfo.contractAddress, '5000000000000000000000000000').encodeABI();

            web3.eth.sendTransaction({
                to: ssContractAddress,
                from: selectedAccount,
                data: data_
            })
                .on('transactionHash', () => {
                    approveLotteryEl.setAttribute("disabled", "disabled");
                    approveLotteryEl.innerHTML = "Please wait...";
                })
                .on('receipt', (receipt) => {
                    if (receipt.status) {
                        buyLotteryEl.removeAttribute("disabled");
                        buyLotteryEl.style.display = "block";

                        approveLotteryEl.setAttribute("disabled", "disabled");
                        approveLotteryEl.style.display = "none";
                    }
                })
                .on('error', (error) => {
                    console.log("allowance apprve failed: ", error);
                });

        } catch (err) {
            console.log("approveAllowance failed: ", err);
        }
    };

    const buyTicket = async () => {
        const lottoContract = new web3_BSC.eth.Contract(LottoData.lottoInfo.contractAbi, LottoData.lottoInfo.contractAddress);
        // const data_ = lottoContract.methods.purchaseTicket(LottoData.lottoInfo.ticketPrice).encodeABI();
        const tickets = buyTicketInputEl.value;

        if (tickets > 0 && tickets <= 500) {
            const data_ = lottoContract.methods.purchaseTickets(tickets).encodeABI();

            web3.eth.sendTransaction({
                to: LottoData.lottoInfo.contractAddress,
                from: selectedAccount,
                data: data_
            })
                .on('transactionHash', () => {
                    buyLotteryEl.setAttribute("disabled", "disabled");
                    buyLotteryEl.innerHTML = "Please wait...";
                })
                .on('receipt', (receipt) => {
                    if (receipt.status) {
                        buyLotteryEl.removeAttribute("disabled");
                        buyLotteryEl.innerHTML = "Ticket purchased. Buy more...";
                    }
                })
                .on('error', (error) => {
                    console.log("buy ticket failed: ", error);
                });
        }

    };

    const setMyticketsNumber = () => {
        let numbers = "";
        let numbersCount = 0;
        const ticketPrice = (web3_BSC.utils.fromWei(LottoData.lottoInfo.ticketPrice, "nanoether") - 0) * 0.9;

        myLuckyBalls = [];

        for (const item in LottoData.participants) {
            if (selectedAccount == LottoData.participants[item].address) {

                myLuckyBalls.push("-" + item + "-");
                numbers += '<span class="mx-5 lucky-number lucky-number-' + item + '">' + item + '</span>';
                numbersCount++;
            }
        }

        yourTicketsEl.innerHTML = numbers || "-";
        myTicketsTotalSpentEl.innerHTML = App.Utils.formatAmount(numbersCount * ticketPrice);

        highlightNumbers();
    };

    const highlightNumbers = () => {
        if (!luckyBalls.length || !myLuckyBalls.length) { return; }

        const cachesColouredBalls = document.querySelectorAll(".lucky-number");

        for (const balle of cachesColouredBalls) {
            App.Utils.removeClass(balle, "bg-3");
        }

        for (const ball of myLuckyBalls) {
            if (luckyBalls.indexOf(ball) > -1) {
                const num = ball.replace("-", "").replace("-", "");
                const winningNumbers = document.querySelectorAll(".lucky-number-" + num);

                for (const bally of winningNumbers) {
                    App.Utils.addClass(bally, "bg-3");
                }

            }
        }

    };

    const onConnect = async () => {
        const chainId = await web3.eth.getChainId();

        if (chainId != 56) {
            renderWrongChainWarning();
            return;
        }

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

    const removeWrongChainWarning = () => {
        if (wrongChainWarningNode) {
            wrongChainWarningMessageEl.removeChild(wrongChainWarningNode);
            wrongChainWarningNode = null;
            wrongNetworkWarning = false;
        }
    };

    const renderWrongChainWarning = () => {
        if (wrongNetworkWarning) {
            return;
        }
        wrongChainWarningNode = document.createElement("H3");
        const copy = document.createTextNode("Wrong network selected! Please select Binance Smart Chain network.");

        wrongChainWarningNode.className = "warningMessageText";

        wrongChainWarningNode.appendChild(copy);
        wrongChainWarningMessageEl.appendChild(wrongChainWarningNode);
        wrongNetworkWarning = true;
    };

    const renderLottoStats = async () => {
        const amount = LottoData.lottoInfo.participantsCount * (LottoData.lottoInfo.ticketPrice * 0.9);
        const ssBalance = web3_BSC.utils.fromWei(web3_BSC.utils.toBN(amount), "nanoether");
        const humanFriendlyBalance = parseFloat(ssBalance).toFixed(0);


        participantsCountEl.innerHTML = LottoData.lottoInfo.participantsCount;
        prizePoolEl.innerHTML = App.Utils.formatAmount(humanFriendlyBalance);

        setTimings();
        renderParticipantList();
    };

    const setTimings = () => {
        const startTimeHoursEl = document.getElementById('startTimeHours');
        const startTimeDayEl = document.getElementById('startTimeDay');
        const endTimeHoursEl = document.getElementById('endTimeHours');
        const endTimeDayEl = document.getElementById('endTimeDay');
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        const endTime = LOTTO_DRAW_INFO.end_time;
        const startTime = LOTTO_DRAW_INFO.start_time;

        startTimeHoursEl.innerHTML = new Date(startTime).getHours() + ":00";
        startTimeDayEl.innerHTML = days[new Date(startTime).getDay()];
        endTimeHoursEl.innerHTML = new Date(endTime).getHours() + ":00";
        endTimeDayEl.innerHTML = days[new Date(endTime).getDay()];
    };

    const renderParticipantList = () => {
        participantsListEl.innerHTML = "";

        for (const item in LottoData.participants) {

            const line = document.createElement("DIV");
            const participant = document.createElement("DIV");
            const address = document.createElement("DIV");
            const addressText = document.createTextNode(LottoData.participants[item].address);
            const entryNum = document.createTextNode(item);

            participant.appendChild(entryNum);
            address.appendChild(addressText);

            participant.className = "participantsList_ParticipantNumber";
            address.className = "participantsList_ParticipantAddress";
            line.className = "participantsList_Participant";

            line.appendChild(participant);
            line.appendChild(address);

            participantsListEl.appendChild(line);
        }

    };

    // DO UPDATE THIS WITH CARE //
    // BECAUSE VERSIONS MIGHT BE DIFFERNT //
    // HENCE LUCKY BALL NOT TO MESS UP //
    const renderLuckyNumbers = () => {
        const winnersRound1El = document.getElementById('winnersRound1');
        const winnersRound2El = document.getElementById('winnersRound2');
        const winnersRound3El = document.getElementById('winnersRound3');

        const luckyNumbers = LottoData.lottoInfo.luckyNumbers;
        const luckyWinners = Math.floor((LottoData.lottoInfo.participantsCount - 0) / LOTTO_DRAW_INFO.prize_pool_winners);

        const numArray = luckyNumbers;

        if (luckyNumbers && luckyNumbers.length) {
            let sortedArr = luckyNumbers.slice();
            let r1w = [];
            let r2w = [];
            let r1balls = [];
            let r2balls = [];
            let num10array = [];
            let num5array = [];
            let lNumbers = "";
            let l2Numbers = "";
            let l3Numbers = "";

            const lottoParticipants = LottoData.participants;
            const lottoHash = LottoData.lottoInfo.lottoEndBlockHash;

            const luckyNumberLine = (item) => {
                return '<span class="mx-5 lucky-number lucky-number-' + item + '">' + item + '</span>';
            }

            const sortBalls = (arr) => {
                arr.sort(function (a, b) {
                    const _a = web3_BSC.utils.toBN(a);
                    const _b = web3_BSC.utils.toBN(b);
                    return _b.sub(_a);
                });
            }

            sortBalls(sortedArr);

            for (let i = 0; i < luckyWinners; i++) {
                const which = numArray.indexOf(sortedArr[i]) + 1;
                const myrng = new Math.seedrandom(lottoParticipants[which].txHash + lottoHash);

                r1balls.push(which);
                luckyBalls.push("-" + which + "-");
                r1w.push(myrng.int32());

                lNumbers += luckyNumberLine(which);
            }

            let addys = {};

            for (let t = 0; t < r1balls.length; t++) {
                addys[r1balls[t]] = lottoParticipants[r1balls[t]].address;
            }

            console.log("which ", JSON.stringify(addys));
            console.log("which ", addys);

            num10array = r1w.slice();
            sortBalls(num10array);

            for (let k = 0; k < LOTTO_DRAW_INFO.jackpot_winners; k++) {
                const which = r1w.indexOf(num10array[k]) + 1;
                const ball = r1balls[which - 1];
                const myrng = new Math.seedrandom(lottoParticipants[which].txHash + lottoHash + which);

                r2balls.push(ball);
                r2w.push(myrng.int32());

                l2Numbers += luckyNumberLine(ball);
            }

            num5array = r2w.slice();
            sortBalls(num5array);

            for (let z = 0; z < LOTTO_DRAW_INFO.super_jackpot_winners; z++) {
                const which = r2w.indexOf(num5array[z]);
                const ball = r2balls[which];

                l3Numbers += luckyNumberLine(ball);
            }

            winnersRound1El.innerHTML = lNumbers;
            winnersRound2El.innerHTML = l2Numbers;
            winnersRound3El.innerHTML = l3Numbers;

            highlightNumbers()
        }

    };

    const getLottodata = async () => {

        try {
            await fetch('/api/' + LOTTO_DRAW_INFO.path + '.json')
                .then(response => response.json())
                .then((data) => {
                    LottoData = data;
                });
        } catch (err) {
            console.log("error during json request; ", err);
            setTimeout(() => { getLottodata(); }, 5000);
            return;
        }

        renderLottoStats();
        setMyticketsNumber();

        if (LottoData.lottoInfo.lottoStatus == "3") {
            renderLuckyNumbers();
            return;
        }

        setTimeout(() => { getLottodata(); }, 5000);
    };

    const initBuyTicketWidget = () => {
        const validChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "Backspace", "ArrowLeft", "ArrowRight"];

        updateTicketBuyTokenTotal();

        buyTicketInputEl.addEventListener("keydown", (e) => {
            const total = e.target.value + (e.key == "Backspace" ? "" : e.key);

            if (
                !validChars.includes(e.key) ||
                total > 500 ||
                e.target.value == "" && e.key == "0"
            ) {
                e.preventDefault();
            }
        });

        buyTicketInputEl.addEventListener("keyup", (e) => {
            const total = e.target.value || 1;

            updateTicketBuyTokenTotal(total - 0);
        });

        for (const button of buyTicketNumberEl) {
            button.addEventListener("click", (e) => {
                const type = e.target.dataset["type"];
                const inputVal = buyTicketInputEl.value;
                let total = 0;

                if ((inputVal == "1" && type == "-1") || (inputVal == "" && type == "-1") || ((inputVal - 0) >= 500 && type == "1")) {
                    return;
                }

                buyTicketInputEl.value = total = (inputVal - 0) + (type - 0);
                updateTicketBuyTokenTotal(total);

            });
        }
    };

    const updateTicketBuyTokenTotal = (amount = 1) => {
        const total = App.Utils.formatAmount((web3_BSC.utils.fromWei(LottoData.lottoInfo.ticketPrice, "nanoether") - 0) * amount);

        totalOfTokenEl.textContent = total + " " + LOTTO_DRAW_INFO.currency;
    };

    window.addEventListener('load', async () => {
        const wConnetProvider = web3Modal.cachedProvider;

        await getLottodata();

        initBuyTicketWidget();

        if (wConnetProvider) {
            loadWallet();
        } else {
            btnConnetEl.addEventListener("click", loadWallet);
        }

        approveLotteryEl.addEventListener("click", approveAllowance);
        buyLotteryEl.addEventListener("click", buyTicket);

    });

})(App);
