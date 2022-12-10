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
            name: "BRISTLEBACK", 
            imageUrl: "https://i.pinimg.com/originals/68/b0/8c/68b08c1d3bdb1b9ed37af9094aaf8827.jpg",
            description: `The enforcer at a local pub, Rigwarl's never failed to collect a tab. That is, until he met one tough customer from the north. For the first time in his life, Rigwarl felt the need to train. His Thorny Back deters attack while peppering foes with constant baarrage of Quill Sprays. From his nose he blows Thick Gobs of Snot, slowing and covering opponents in goo. When it comes to a fight, he really puts his back into it. With every volley and every Sneeze, Rigwarl works himself into a fury, adding rage to each blow as he goes on the Warpath in search of a rematch.`
        },
        {
            name: "SVEN", 
            imageUrl: "https://i.pinimg.com/originals/4b/ae/47/4bae47114ce56ce29e704dcb7aa10e4f.jpg",
            description: `The Rogue Knight lives by two creeds: Honor, as ordained by his own personal code, and Solitude. Always eager to charge into a fight. Using his iron gauntlet, he launches a Storm Hammer, stunning grouped enemies as he transports himself into battle, then closes in to cut them down with Great Cleave. Letting out a truly frightening Warcry, he ignites and calls upon God's Strength, a few swings of his gargantuan sword are often more than enough to slay on his hapless foes.`
        },
        {
            name: "DRAGON NIGHT", 
            imageUrl: "https://i.pinimg.com/originals/80/f3/4b/80f34b5d1cbf668b3ddf49d8fdf338c7.jpg",
            description: "As Sir Davion slew Slyrak in arranged combat, the Eldwurm's blood mingled with his own, sealing their essences together. He was no longer a dragon-slayer, but a Dragon Knight. The infusion of Dragon Blood caused his wounds to heal with inhuman speed, and granted him great new powers. While nowhere as grand as Slyrak, he found himself with the ability to Breathe Fire and launch Fireballs, immolating packs of foes at once. But when Davion took on his Elder Dragon Form, he became the formidable Eldwurm itself, and upon his awestruck enemies he rained projectiles of acid, fire, and ice."
        },
        {
            name: "WRAITH KING", 
            imageUrl: "https://i.pinimg.com/originals/49/0a/b3/490ab3c519cc95b1cd7e48ceff691358.jpg",
            description: "On the millennial solstice known as Wraith-Night, Ostarion stood frozen amid the carnage, absorbing innumerable souls as his champions sacrificed their lives for the King. Now brimming with Wraith Essence, Ostarion immobilizes his adversaries with Wraithfire Blast, stunning and searing them over time. His great-sword smashes foes in one Mortal Strike, sapping their essence to feed his Vampiric Spirit. Only fools trust the erratic reports of Ostarion's death. For when slain, the wraith energies that bind his body begin to reconstitute his parts, joining limb to torso until the Wraith King's Reincarnation comes full circle as his strides fearlessly towards his enemies, again."
        }, 
        {
            name:"TIDEHUNTER", 
            imageUrl:"https://i.pinimg.com/originals/af/1b/94/af1b947e12b58663865a14fa58959704.jpg", 
            description: "Tired of undersea politics, Leviathan rises from the waves to stalk the shallows for victims. Travelers who cross him are blasted with a Gush of foamy brine, impairing their movement as the Tidehunter's Tendrils lumber after them on land. Wielding a souvenir stolen from a hated rival, Leviathan pulverizes armor and flesh alike with a hefty Anchor Smash. Spears and arrows bend against his Kraken Shell, allowing no chance for interruption as the Tidehunter summons his abyssal god to Ravage enemies in a sea of flailing tentacles."
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
            name: "LUNA", 
            imageUrl: "https://i.pinimg.com/originals/cf/34/60/cf3460421435a6048b840e9a4958e32e.jpg", 
            details: "Renouncing her savage past, Luna swore her service to Selemene, and embraced the title of Moon Rider. The goddess bestows a Lunar Blessing on her new champion, boosting her strength and heightening her nocturnal senses. Saddled on top of Nova, her beastly mount, Luna bounds across the Nightsilver Woods to smite trespassers with a searing Lucent Beam. Superior numbers are no advantage against the Moon Rider. Through divine will, the midday sun gives way to night, and every foe is struck by rays of lunar energy as Luna tears through their ranks with flying Moon Glaives. By Selemene's wrath or through her own hand, the Moon Rider levels the battlefield under the brief darkness of the Eclipse."
        },
        {
            name: "VIPER", 
            imageUrl: "https://i.pinimg.com/originals/19/78/d8/1978d81765ac3151986d5454880a46a3.jpg", 
            details:"It was foolhardy to try and tame a Netherdrake, a lesson the old wizard learned in death. Freed from his captor, Viper spread his wings and went forth to explore the surface world. With Poison Attacks imbued with virulent liquid, causing joints to harden, crippling foes whether they choose to flee or fight. Nethertoxin spreads throughout their bodies, turning wounds into fatalities, and fatigue into death. The Netherdrake's tough, Corrosive Skin protects against spell-craft, and burns assailants with acid. But it is the dreaded Viper Strike that signals the beginning of the end. The afflicted victim staggers to a crawl, barely able to take its next step. If the Netherdrake doesn't finish his targets off, the venom in their veins will."
        }
    ],
    "intelligence": [
        {
            name: "ZUES", 
            imageUrl: "https://i.pinimg.com/originals/28/58/07/285807beb0541bc96b3eb37046cf3e99.jpg", 
            details: "Charged with godly might, a Static Field constantly surrounds Zeus, making enemies more susceptible to his lightning. As the Lord of Heaven Jumping around, Zeus calls down Lightning Bolts to smite foes and reveal the surroundings, sends Arc of Lightning through his nearest enemies, and calls forth a terrifying Nimbus upon his enemies that repeatedly strikes enemies with Lightning Bolts. "
        },
        {
            name: "LICH", 
            imageUrl: "https://i.pinimg.com/originals/ac/98/8a/ac988a864fec449c7c649d89dbec8f17.jpg", 
            details: "Resurrected by a curious geomancer, Ethreain bewitched his savior with a Sinister Gaze, then promptly made the man his newest sacrifice. Finally freed from the depths of the Black Pool, the Lich returns to wreak icy destruction on the world. Cloaking his followers with a Frost Shield, Ethreain floats across the battlefield to Blast any who cross him. A frozen orb descends on his foes, traveling between foes and Ice Spires until the Chain Frost brings all opposition to their demise."
        },
        {
            name: "OGRE MAGI", 
            imageUrl: "https://i.pinimg.com/originals/54/61/d7/5461d71cfda40be9c210a6f840bb38ce.jpg", 
            details:"Ogres were not known for their intelligence. Thankfully, a two-headed ogre is born once every generation, a blessed individual whose combined brainpower puts him on par with the dullest of single-headed creatures. What he lacks in wits, he makes up for with luck. The Ogre Magi possesses an innate chance to Multicast each ability they cast, Ignite enemies to cinder, quashing enemies by doubling, tripling, even quadrupling the damage from an Unrefined and simple Fireblast, boosting the power of his allies in a frenzied Bloodlust or protecting them in Orbs of Fire. Of course, luck can be difficult to rely upon..."
        },
        {
            name: "CRYSTAL MAIDEN", 
            imageUrl: "https://i.pinimg.com/originals/1c/dc/88/1cdc8800e771b647a6af90333abbe14e.jpg", 
            details:"Queen of Pain strikes without warning, she Blinks past defenses, wracking her victims with her deafening Screams. Should an enemy survive her onslaught, she slows their escape with a hurl of Shadow Strikes, drawing out their suffering over time. Running is futile. There is only one release from such torture."
        }, 
        {
            name: "LION", 
            imageUrl:"https://i.gifer.com/7NkP.gif", 
            details: "Betrayed by his demon partner, Lion went to Hell and back for his vengeance, retrieving the demon's hand and grafting it onto his own body. Lion gives enemies little chance to retaliate. Stunning targets with a damaging row of Earth Spikes, or temporarily transforming them into a harmless critter using a simple Hex, allowing him to Mana Drain them without interruption."
        }
    ]
}

