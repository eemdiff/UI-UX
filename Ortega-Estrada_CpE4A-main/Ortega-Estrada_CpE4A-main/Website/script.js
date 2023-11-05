// Define agent data
const agents = [
    {
        name: "BrimStone",
        image: "https://static.wikia.nocookie.net/valorant/images/8/81/Brimstone_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202719",
        description: "Joining from the USA, Brimstone's orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.",
    },

    {
        name: "Viper",
        image: "https://static.wikia.nocookie.net/valorant/images/8/85/Viper_Artwork_Full.png/revision/latest?cb=20220810202837",
        description: "The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and choke the enemy's vision. If the toxins don't kill her prey, her mind games surely will.",
    },

    
    {
        name: "Omen",
        image: "https://static.wikia.nocookie.net/valorant/images/0/0e/Omen_Artwork_Full.png/revision/latest?cb=20220810202807",
        description: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
    },

    
    {
        name: "KillJoy",
        image: "https://static.wikia.nocookie.net/valorant/images/8/81/Killjoy_Artwork_Full.png/revision/latest?cb=20220810202751",
        description: "The genius of Germany, Killjoy effortlessly secures key battlefield positions with her arsenal of inventions. If their damage doesn't take her enemies out, the debuff her robots provide will make short work of them.",
    },

    
    {
        name: "Cypher",
        image: "https://static.wikia.nocookie.net/valorant/images/5/55/Cypher_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202731",
        description: "The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy’s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
    },

    
    {
        name: "Sova",
        image: "https://static.wikia.nocookie.net/valorant/images/c/c5/Sova_Artwork_Full.png/revision/latest?cb=20220810202832",
        description: "TBorn from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.",
    },

    
    {
        name: "Sage",
        image: "https://static.wikia.nocookie.net/valorant/images/7/7e/Sage_Artwork_Full.png/revision/latest?cb=20220810202824",
        description: "The bastion of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.",
    },

    
    {
        name: "Phoenix",
        image: "https://static.wikia.nocookie.net/valorant/images/9/90/Phoenix_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202811",
        description: "Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his own terms.",
    },

    
    {
        name: "Jett",
        image: "https://static.wikia.nocookie.net/valorant/images/e/e3/Jett_Artwork_Full.png/revision/latest?cb=20220810202742",
        description: "Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.",
    },

    
    {
        name: "Reyna",
        image: "https://static.wikia.nocookie.net/valorant/images/3/36/Reyna_Artwork_Full.png/revision/latest?cb=20220810202820",
        description: "Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.",
    },
    
    {
        name: "Raze",
        image: "https://static.wikia.nocookie.net/valorant/images/6/6f/Raze_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202815",
        description: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
    },
    
    {
        name: "Breach",
        image: "https://static.wikia.nocookie.net/valorant/images/2/24/Breach_Artwork_Full.png/revision/latest?cb=20220810202713",
        description: "Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.",
    },
    
    {
        name: "Skye",
        image: "https://static.wikia.nocookie.net/valorant/images/7/7f/Skye_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202828",
        description: "Hailing from Australia, Skye and her band of beasts trail-blaze the way through hostile territory. With her creations hampering the enemy, and her power to heal others, the team is strongest and safest by Skye's side.",
    },
    
    {
        name: "Yoru",
        image: "https://static.wikia.nocookie.net/valorant/images/1/1e/Yoru_Artwork_Full.png/revision/latest?cb=20220810202841",
        description: "Japanese native Yoru rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.",
    },
    
    {
        name: "Astra",
        image: "https://static.wikia.nocookie.net/valorant/images/e/e0/Astra_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202708",
        description: "Ghanaian Agent Astra harnesses the energies of the cosmos to reshape battlefields to her whim. With full command of her astral form and a talent for deep strategic foresight, she’s always eons ahead of her enemy’s next move.",
    },
    
    {
        name: "KAY/O",
        image: "https://static.wikia.nocookie.net/valorant/images/5/57/KAYO_Artwork_Full.png/revision/latest?cb=20220810202747",
        description: "KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities dismantles his opponents' capacity to fight back, securing him and his allies the ultimate edge.",
    },
    
    {
        name: "Chamber",
        image: "https://static.wikia.nocookie.net/valorant/images/5/5d/Chamber_Artwork_Full.png/revision/latest?cb=20220810202725",
        description: "Well-dressed and well-armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.",
    },
    
    {
        name: "Neon",
        image: "https://static.wikia.nocookie.net/valorant/images/f/fe/Neon_Artwork_Full.png/revision/latest?cb=20220810202800",
        description: "Filipino Agent, Neon, surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.",
    },
    
    {
        name: "Fade",
        image: "https://static.wikia.nocookie.net/valorant/images/e/e8/Fade_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20220810202738",
        description: "Turkish bounty hunter Fade unleashes the power of raw nightmare to seize enemy secrets. Attuned with terror itself, she hunts down targets and reveals their deepest fears - before crushing them in the dark.",
    },
    
    {
        name: "Harbor",
        image: "https://static.wikia.nocookie.net/valorant/images/5/5c/Harbor_Artwork_Full.png/revision/latest?cb=20221018133900",
        description: "Hailing from India's coast, Harbor storms the field wielding ancient technology with dominion over water. He unleashes frothing rapids and crushing waves to shield his allies, or pummel those that oppose him.",
    },
    
    {
        name: "Gekko",
        image: "https://static.wikia.nocookie.net/valorant/images/a/a4/Gekko_Artwork_Full.png/revision/latest?cb=20230304203025",
        description: "Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.",
    },
    
    {
        name: "Deadlock",
        image: "https://static.wikia.nocookie.net/valorant/images/a/aa/Deadlock_Artwork_Full.png/revision/latest?cb=20230627132700",
        description: "Norwegian operative Deadlock deploys an array of cutting-edge nanowire to secure the battlefield from even the most lethal assault. No one escapes her vigilant watch, nor survives",
    },
    
    {
        name: "Iso",
        image: "https://static.wikia.nocookie.net/valorant/images/5/5f/Iso_Artwork_Full.png/revision/latest/scale-to-width-down/1000?cb=20231031131018",
        description: "Chinese fixer for hire Iso goes into a flow state to dismantle the opposition. Reconfiguring ambient energy into bulletproof protection, he advances with focus towards his next duel to the death.",
    },


];


const agentList = document.querySelector(".agent-list");

agents.forEach(agent => {
    const agentCard = document.createElement("div");
    agentCard.classList.add("agent-card");

    agentCard.innerHTML = `
        <img src="${agent.image}" alt="${agent.name} Image">
        <h2>${agent.name}</h2>
        <p>${agent.description}</p>
        <button>Learn More</button>
    `;

    agentList.appendChild(agentCard);
});
