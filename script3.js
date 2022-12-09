let parameters = new URLSearchParams(window.location.search)

let heroName = parameters.get("heroName")

let details = parameters.get("heroDetails")

let newP = document.createElement("p")
alert(heroName)
newP.innerHTML = `fgf`

let mainHero = document.getElementById("mainDiv")
mainHero.appendChild(newP)

let heroes = {
    "strength": [
        {
            name: "AXE", 
            imageUrl: "https://preview.redd.it/ah5fdbbsw0971.gif?width=700&auto=webp&s=b8b365cda257f9c67784167df647971e665970c4",
            description: `One by one the soldiers of the Red Mist fell, some in battle, others to Mogul Khan's ambitions, until the self-declared general found himself a commander without troops. "No matter", Axe thought, "For a one-man army is the best army of all." — Leaping into battle, Mogul Khan compels nearby foes to attack him with a taunting Berserker's Call. Absorbing blows from every direction, the indomitable Axe reacts by swinging his axe full circle in a Counter Helix, easily dispatching the swarm he had gathered. But alas, not all stay long enough to meet their end. The few limping away from Mogul Khan feel an inexplicable Battle Hunger, a hunger never sated before Axe slams his Culling Blade through a weakened enemy, sending them to an early grave. Axe, Axe is always charging onward.`
        },
        {
            name: "SVEN", 
            imageUrl: "https://i.pinimg.com/originals/4b/ae/47/4bae47114ce56ce29e704dcb7aa10e4f.jpg",
            description: `The Rogue Knight lives by two creeds: Honor, as ordained by his own personal code, and Solitude. Always eager to charge into a fight. Using his iron gauntlet, he launches a Storm Hammer, stunning grouped enemies as he transports himself into battle, then closes in to cut them down with Great Cleave. Letting out a truly frightening Warcry, he ignites and calls upon God's Strength, a few swings of his gargantuan sword are often more than enough to slay on his hapless foes.`
        },
        {
            name: "DRAGON NIGHT", 
            imageUrl: "https://i.pinimg.com/originals/80/f3/4b/80f34b5d1cbf668b3ddf49d8fdf338c7.jpg"
        },
        {
            name: "PUDGE", 
            imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/96105795495328122/AF288857909FE04B841395EC0ACE94525426662C/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        }, 
        {
            name:"SLARDAR", 
            imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/1892100688983858263/EC617D0FA10FCD61FA99BAE8AA2175D188D8F9A0/?imw=200&imh=200&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
            details: "Born under the immense pressure of the deep, always ready to find and demolish his foes, Slardar quickly slithers and Sprints into battle with one muscular tail, chasing down legged foes with alarming swiftness."
        }
    ],
    "agility": [
        {
            name: "DROW RANGER", 
            imageUrl: "https://i.pinimg.com/originals/50/67/be/5067be609f0ab8956ecb49fa28b1910e.jpg"
        },
        {
            name: "PHANTOM ASSASIN", 
            imageUrl: "https://i.pinimg.com/originals/cf/1e/ef/cf1eef830f1980d2a7424f4321e8e484.jpg", 
            details: "Of all the assassins raised by the Sisters of the Veil, only one is known by name: Mortred. Through meditation and prophecy, the order identifies the next target to die at her hands. Attacks miss against the Phantom Assassin as she Blurs into her surroundings, traversing undetected across the land to catch her victims unaware. She opens the encounter with a Stifling Dagger, thrown from the shadows, then leaps upon the crippled target to deliver a flurry of Phantom Strikes, followed by a Fan of Knives hurled into all directions."
        }, 
        {
            name: "SNIPER", 
            imageUrl: "https://media.tenor.com/Lz5eSoFfVZUAAAAC/sniper-dota2.gif", 
            details: "With a single bullet, Kardel Sharpeye pierced the steep-stalker's central eye from the valley floor, an ominous act that resulted in his ritual exile. He would win acclaim on a field of battle, or never return. Like his mountain kin, the Sniper is one with his firearm. He Takes Aim from great distances, and scores Headshots that stop his targets dead. Armed with a modular rifle, Kardel launches incendiary rounds to rain burning Shrapnel or throwing a Grenade knocking back his enemies over entrenched positions."
        }, 
        {
            name: "SHADOW FIEND", 
            imageUrl: "https://thumbs.gfycat.com/BoringWellinformedAmericanbulldog-size_restricted.gif", 
            details: "from every kill he makes, Shadow Fiend is always gathering his power. Armor fails within the Presence of the Dark Lord, leaving foes no choice but to scramble. Every assault, each carefully aimed Shadowraze kills an enemy, brings him closer to his acme of potency. The Shadow Fiend pauses to charge his demonic energies, then, with a flourish of his lightless wings, unleashes his gathered souls in all directions to obliterate enemies in a howling Requiem of Souls."
        },
        {
            name: "MEDUSA", 
            imageUrl: "https://cdna.artstation.com/p/assets/images/images/040/122/650/original/eleonora-noura-abdrakhmanova-medusa-loadout.gif?1627932960", 
            details:"Constant attack is the key to Medusa's success. Encased in a Mana Shield, she survives against even the most unfavorable odds. Foes bitten by Mystic Snake charge it up with energy, a resource that returns to Medusa for her defensive use. "
        }
    ],
    "intelligence": [
        {
            name: "ZUES", 
            imageUrl: "https://i.pinimg.com/originals/28/58/07/285807beb0541bc96b3eb37046cf3e99.jpg", 
            details: "Charged with godly might, a Static Field constantly surrounds Zeus, making enemies more susceptible to his lightning. As the Lord of Heaven Jumping around, Zeus calls down Lightning Bolts to smite foes and reveal the surroundings, sends Arc of Lightning through his nearest enemies, and calls forth a terrifying Nimbus upon his enemies that repeatedly strikes enemies with Lightning Bolts. "
        },
        {
            name: "TINKER", 
            imageUrl: "https://i.pinimg.com/originals/d8/d8/97/d8d897e6cbb26afc6e696fbc718ac9ab.gif", 
            details: "Compared to magic, the study of natural law was much more consistent, but no less dangerous. From their subterranean laboratory, Boush and his colleagues opened a portal to a distant world, a Conveyance through which untold horrors began to pass into this realm. Laser cutting his way to freedom, Boush surfaced as the only Tinker to survive the Violet Plateau incident. Equipped with contraptions befitting a maniacal researcher, he launches Heat-Seeking Missiles from his shoulders, firing Warping Flares to dislocate his enemies."
        },
        {
            name: "INVOKER", 
            imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/936066702124697029/B3FC060EC2E85524B195DC92A316A51C8E4ABD36/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", 
            details:"A competent wizard knows perhaps two spells; an exceptional one, three or four. Wielding the elements of Quas, Wex and Exort, the Invoker surpasses them all. Forging Spirits of ice and fire to melt away the armor of enemies with great Alacrity while Snapping their heat-deprived cold bodies. Conjuring an Ice Wall to stop foes in their paths before vanishing into thin air, chilling nearby enemies like a Ghost Wandering through their ranks. Lifting enemies off the ground with a Tornado that reaches through half the battlefield, while charging up an Extractive Mana Pulse for the whirling foes to land into. Pulling down a gigantic Meteor from space to crush enemies along a path while at the same time unleashing a Deafening Blast to push them along meteor's path."
        },
        {
            name: "QUEEN OF PAIN", 
            imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/1689394984429732104/AEE999CF9AB3DB7F0740208C77B656F856161BE8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", details:"Queen of Pain strikes without warning, she Blinks past defenses, wracking her victims with her deafening Screams. Should an enemy survive her onslaught, she slows their escape with a hurl of Shadow Strikes, drawing out their suffering over time. Running is futile. There is only one release from such torture."
        }, 
        {
            name: "LION", 
            imageUrl:"https://i.gifer.com/7NkP.gif", 
            details: "Betrayed by his demon partner, Lion went to Hell and back for his vengeance, retrieving the demon's hand and grafting it onto his own body. Lion gives enemies little chance to retaliate. Stunning targets with a damaging row of Earth Spikes, or temporarily transforming them into a harmless critter using a simple Hex, allowing him to Mana Drain them without interruption."
        }
    ]
}

