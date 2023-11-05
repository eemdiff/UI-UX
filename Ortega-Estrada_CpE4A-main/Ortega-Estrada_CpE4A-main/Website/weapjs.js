const weapons = {
    Primary: [
        {
            name: "Stinger",
            type: "SMG",
            damage: 160,
            fireRate: "16 rounds/sec",
            magazine: 20,
            image: "https://static.wikia.nocookie.net/valorant/images/b/b6/Stinger.png/revision/latest?cb=20230711205306",
        },
        {
            name: "Spectre",
            type: "SMG",
            damage: 160,
            fireRate: "13.33 rounds/sec",
            magazine: 30,
            image: "https://static.wikia.nocookie.net/valorant/images/9/90/Spectre.png/revision/latest?cb=20230711205305",
        },
        {
            name: "Bucky",
            type: "Shotgun",
            damage: 160,
            fireRate: "1.1 rounds/sec",
            magazine: 5,
            image: "https://static.wikia.nocookie.net/valorant/images/e/eb/Bucky.png/revision/latest?cb=20230711205254",
        },
        {
            name: "Judge",
            type: "Shotgun",
            damage: 160,
            fireRate: "3.5 rounds/sec",
            magazine: 5,
            image: "https://static.wikia.nocookie.net/valorant/images/8/8a/Judge.png/revision/latest?cb=20230711205259",
        },
        {
            name: "Bulldog",
            type: "Rifle",
            damage: 160,
            fireRate: "10 rounds/sec",
            magazine: 24,
            image: "https://static.wikia.nocookie.net/valorant/images/0/07/Bulldog.png/revision/latest?cb=20230711205255",
        },
        {
            name: "Guardian",
            type: "Rifle",
            damage: 160,
            fireRate: "5.25 rounds/sec 324 RPM",
            magazine: 12,
            image: "https://static.wikia.nocookie.net/valorant/images/f/fd/Guardian.png/revision/latest?cb=20230711205258",
        },
        {
            name: "Phantom",
            type: "Rifle",
            damage: 160,
            fireRate: "11 rounds/sec 660 RPM",
            magazine: 30,
            image: "https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest?cb=20230711205302",
        },
        {
            name: "Vandal",
            type: "Rifle",
            damage: 160,
            fireRate: "9.75 rounds/sec 585 rds/min",
            magazine: 25,
            image: "https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest?cb=20230711205307",
        },
        {
            name: "Marshal",
            type: "Sniper Rifle",
            damage: 160,
            fireRate: "1.5 rounds/secc",
            magazine: 5,
            image: "https://static.wikia.nocookie.net/valorant/images/b/b9/Marshal.png/revision/latest?cb=20230711205300",
        },
        {
            name: "Operator",
            type: "Sniper Rifle",
            damage: 160,
            fireRate: "0.6 rounds/sec",
            magazine: 5,
            image: "https://static.wikia.nocookie.net/valorant/images/1/17/Operator.png/revision/latest?cb=20230711205302",
        },
        {
            name: "Ares",
            type: "Machine Gun",
            damage: 160,
            fireRate: "13 rounds/sec",
            magazine: 50,
            image: "https://static.wikia.nocookie.net/valorant/images/0/05/Ares.png/revision/latest?cb=20230711205253",
        },
        {
            name: "Odin",
            type: "Sniper Rifle",
            damage: 160,
            fireRate: "12-15.6 rounds/sec",
            magazine: 25,
            image: "https://static.wikia.nocookie.net/valorant/images/5/58/Odin.png/revision/latest?cb=20230711205301",
        },
    ],


    Secondary: [
        {
            name: "Classic",
            type: "Sidearm",
            damage: 105,
            fireRate: "6.75 rounds/sec",
            magazine: 12,
            image: "https://static.wikia.nocookie.net/valorant/images/5/57/Classic.png/revision/latest?cb=20230711205256",
        },
        {
            name: "Shorty",
            type: "Sidearm",
            damage: 105,
            fireRate: "3.33 rounds/sec",
            magazine: 2,
            image: "https://static.wikia.nocookie.net/valorant/images/7/77/Shorty.png/revision/latest?cb=20230711205304",
        },
        {
            name: "Frenzy",
            type: "Sidearm",
            damage: 105,
            fireRate: "10 rounds/sec",
            magazine: 13,
            image: "https://static.wikia.nocookie.net/valorant/images/f/f1/Frenzy.png/revision/latest?cb=20230711205257",
        },
        {
            name: "Ghost",
            type: "Sidearm",
            damage: 105,
            fireRate: "6.75 rounds/sec",
            magazine: 15,
            image: "https://static.wikia.nocookie.net/valorant/images/a/ab/Ghost.png/revision/latest?cb=20230711205257  ",
        },
        {
            name: "Sheriff",
            type: "Sidearm",
            damage: 105,
            fireRate: "4 rounds/sec",
            magazine: 6,
            image: "https://static.wikia.nocookie.net/valorant/images/3/3e/Sheriff.png/revision/latest?cb=20230711205303",
        },
    ],
};

const primaryButton = document.getElementById("primary-btn");
const secondaryButton = document.getElementById("secondary-btn");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const weaponImage = document.getElementById("weapon-image");
const weaponInfo = document.getElementById("weapon-info");

function createWeaponButtons(weaponCategory) {
    if (weaponCategory === "Primary") {
        button1.style.display = "block";
        button2.style.display = "none";
        const buttonsContainer = button1;
        buttonsContainer.innerHTML = "";
        weapons[weaponCategory].forEach((weapon) => {
            const button = document.createElement("button");
            button.classList.add("weapon-button");
            button.textContent = weapon.name;
            button.addEventListener("click", () => displayWeapon(weapon));
            buttonsContainer.appendChild(button);
        });
    } else if (weaponCategory === "Secondary") {
        button1.style.display = "none";
        button2.style.display = "block";
        const buttonsContainer = button2;
        buttonsContainer.innerHTML = "";
        weapons[weaponCategory].forEach((weapon) => {
            const button = document.createElement("button");
            button.classList.add("weapon-button");
            button.textContent = weapon.name;
            button.addEventListener("click", () => displayWeapon(weapon));
            buttonsContainer.appendChild(button);
        });
    }
}

function displayWeapon(weapon) {
    weaponImage.src = weapon.image;
    weaponInfo.innerHTML = `
        <h2>${weapon.name}</h2>
        <p>Type: ${weapon.type}</p>
        <p>Damage: ${weapon.damage}</p>
        <p>Fire Rate: ${weapon.fireRate}</p>
        <p>Magazine: ${weapon.magazine}</p>
    `;
}

// Add click event listeners to the dropdown buttons
primaryButton.addEventListener("click", () => createWeaponButtons("Primary"));
secondaryButton.addEventListener("click", () => createWeaponButtons("Secondary"));

// Initially create and display primary weapon buttons
createWeaponButtons("Primary");
