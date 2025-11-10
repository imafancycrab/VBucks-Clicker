import { defaultValues } from "./defaultValues.js";

// skapa elements från devaultvalues.js
function createUpgrades() {
    const upgradesContainer = document.getElementById('upgrades-container')
    const template = document.getElementById('upgrade-template').textContent

    defaultValues.forEach((obj) => {
      let html = template;

      Object.keys(obj).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, `g`)
        html = html.replace(regex, obj[key])
      })

      upgradesContainer.innerHTML += html
    })
}

createUpgrades()

// array with upgrades
export const upgrades = [
    {
        name: 'Miner',
        cost: document.querySelector(".Miner-cost"),
        parsedCost: parseFloat(document.querySelector(".Miner-cost").innerHTML),
        profit: document.querySelector(".Miner-profit"),
        parsedProfit: parseFloat(document.querySelector(".Miner-profit").innerHTML),
        level: document.querySelector(".Miner-level"),
        vbucksMultiplier: 1.08,
        costMultiplier: 1.15,
    },
    {
        name: 'Victory',
        cost: document.querySelector(".Victory-cost"),
        parsedCost: parseFloat(document.querySelector(".Victory-cost").innerHTML),
        profit: document.querySelector(".Victory-profit"),
        parsedProfit: parseFloat(document.querySelector(".Victory-profit").innerHTML),
        level: document.querySelector(".Victory-level"),
        vbucksMultiplier: 1.12,
        costMultiplier: 1.18,
    },
    {
        name: 'TakeTheL',
        cost: document.querySelector(".TakeTheL-cost"),
        parsedCost: parseFloat(document.querySelector(".TakeTheL-cost").innerHTML),
        profit: document.querySelector(".TakeTheL-profit"),
        parsedProfit: parseFloat(document.querySelector(".TakeTheL-profit").innerHTML),
        level: document.querySelector(".TakeTheL-level"),
        vbucksMultiplier: 1.20,
        costMultiplier: 1.22,
    },
    {
        name: 'ChugJug',
        cost: document.querySelector(".ChugJug-cost"),
        parsedCost: parseFloat(document.querySelector(".ChugJug-cost").innerHTML),
        profit: document.querySelector(".ChugJug-profit"),
        parsedProfit: parseFloat(document.querySelector(".ChugJug-profit").innerHTML),
        level: document.querySelector(".ChugJug-level"),
        vbucksMultiplier: 1.25,
        costMultiplier: 1.29,
    },
    {
        name: 'Scar',
        cost: document.querySelector(".Scar-cost"),
        parsedCost: parseFloat(document.querySelector(".Scar-cost").innerHTML),
        profit: document.querySelector(".Scar-profit"),
        parsedProfit: parseFloat(document.querySelector(".Scar-profit").innerHTML),
        level: document.querySelector(".Scar-level"),
        vbucksMultiplier: 1.30,
        costMultiplier: 1.35,
    }
]
