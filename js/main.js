import { upgrades } from "./upgrades.js";

const vbuck = document.querySelector(".vbucks-count");
const vpcText = document.getElementById("vpc-text");
const vpsText = document.getElementById("vps-text");
var Prestige = document.querySelector(".Prestige")

let parsedVBuck = parseFloat(vbuck.innerHTML);
let vpc = 1;
let vps = 0;



export { parsedVBuck, vpc, vps, upgrades };

// gör funktioner globala
window.incrementVBuck = incrementVBuck;
window.buyUpgrade = buyUpgrade;
window.getParsedVBuck = () => parsedVBuck;
window.getVPC = () => vpc;
window.getVPS = () => vps;
window.resetGame = resetGame; 

 // increment vbucks
function incrementVBuck(event) {
    parsedVBuck += vpc;
    updateUI();

    VBuckClickAnimation(event, vpc);
    saveGame();
}

function buyUpgrade(upgradeName) {
    const upgrade = upgrades.find(u => u.name === upgradeName);
    if (!upgrade) return;

    if (parsedVBuck >= upgrade.parsedCost) {
        parsedVBuck -= upgrade.parsedCost;

        // +1 level
        upgrade.level.innerHTML = parseInt(upgrade.level.innerHTML) + 1;

        // profit multiplier
        upgrade.parsedProfit *= upgrade.vbucksMultiplier;
        upgrade.profit.innerHTML = upgrade.parsedProfit.toFixed(2);

        // cost multiplier
        upgrade.parsedCost *= upgrade.costMultiplier;
        upgrade.cost.innerHTML = Math.round(upgrade.parsedCost);

        // vpc/vps increase
        if (upgrade.name === 'Miner') {
            vpc += upgrade.parsedProfit;
        } else {
            vps += upgrade.parsedProfit;
        }

        updateUI();
        saveGame();
    }
}

// update ui för vbuck, vps, v pc
function updateUI() {
    vbuck.innerHTML = Math.round(parsedVBuck);
    vpcText.innerHTML = Math.round(vpc);
    vpsText.innerHTML = Math.round(vps);
}

// auto increment vbucks
setInterval(() => {
    parsedVBuck += vps / 10;
    parsedVBuck = parseFloat(parsedVBuck.toFixed(2));
    updateUI();

    if (parsedVBuck > 100000) {
        Prestige.style.display = "block"
    }
}, 100);

// save game, spara viktiga variabler
function saveGame() {
    const saveData = {
        parsedVBuck,
        vpc,
        vps,
        upgrades: upgrades.map(u => ({
            name: u.name,
            parsedCost: u.parsedCost,
            parsedProfit: u.parsedProfit,
            level: parseInt(u.level.innerHTML)
        }))
    };
    localStorage.setItem("vbucksSave", JSON.stringify(saveData));
}


// load game, läser av savedata
function loadGame() {
    const saveData = JSON.parse(localStorage.getItem("vbucksSave"));

    parsedVBuck = saveData.parsedVBuck;
    vpc = saveData.vpc;
    vps = saveData.vps;

    updateUI();

    saveData.upgrades.forEach(savedU => {
        const upgrade = upgrades.find(u => u.name === savedU.name);
        if (upgrade) {
            upgrade.parsedCost = savedU.parsedCost;
            upgrade.parsedProfit = savedU.parsedProfit;
            upgrade.level.innerHTML = savedU.level;
            upgrade.cost.innerHTML = Math.round(upgrade.parsedCost);
            upgrade.profit.innerHTML = upgrade.parsedProfit.toFixed(2);
        }
    });
}

setInterval(saveGame, 5000);

function resetGame() {
    if (confirm("Are you sure you want to cashout? This will reset your progress. (Reset Button)")) {
        localStorage.removeItem("vbucksSave");
        location.reload();
    }
}

// load game on start
loadGame();
