let heroes = {
    "strength": [
        {
            name: "BRISTLEBACK", 
            imageUrl:"https://cdna.artstation.com/p/assets/images/images/020/831/362/original/andrey-chuloshnikov-11.gif?1569339556"},
        {
            name: "SVEN", 
            imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/872996352009142292/4C89B631A03C793EF1B5FEFB2A74F298B4542B56/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        },
        {
            name: "DRAGON NIGHT", 
            imageUrl:"https://cdnb.artstation.com/p/assets/images/images/017/974/441/original/julia-lapshina-lox.gif?1558043775"},
        {
            name: "WRAITH KING", 
            imageUrl: "https://64.media.tumblr.com/8b88dd6a7c00775aab50c8348b64297e/tumblr_ozzugi1hXK1s58c1so2_400.gifv"
        }, 
        {
            name:"TIDEHUNTER", 
            imageUrl:"https://steamuserimages-a.akamaihd.net/ugc/804367508869842959/BC90D13A33D3D605A3643486971386DF7B10E6ED/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", 
        }
    ],
    "agility": [
        {
            name: "DROW RANGER", 
            imageUrl: "https://64.media.tumblr.com/c7eb9b0ca332fc2c52166d24ca9f2236/eaf766a8f4f8eb38-a0/s540x810/f19e29e5ba0f3f7ac951111756b5ce0b020f5690.gif", details:"Dwelling deep within the forest, few have ever caught glimpse of the solitary and impossibly beautiful Drow Ranger. Her presence was known only from the chill of Frost Arrows, driving deep into her enemies' hearts. Named and raised by the sympathetic Drow, Traxex draws on her heritage to send forth a powerful Gust, silencing and repulsing assailants who venture too close."
        },
        {
            name: "PHANTOM ASSASIN", 
            imageUrl: "https://thumbs.gfycat.com/UnfoldedPessimisticDwarfmongoose-size_restricted.gif", 
            details: "Of all the assassins raised by the Sisters of the Veil, only one is known by name: Mortred. Through meditation and prophecy, the order identifies the next target to die at her hands. Attacks miss against the Phantom Assassin as she Blurs into her surroundings, traversing undetected across the land to catch her victims unaware. She opens the encounter with a Stifling Dagger, thrown from the shadows, then leaps upon the crippled target to deliver a flurry of Phantom Strikes, followed by a Fan of Knives hurled into all directions."
        }, 
        {
            name: "SNIPER", 
            imageUrl: "https://media.tenor.com/Lz5eSoFfVZUAAAAC/sniper-dota2.gif", 
            details: "With a single bullet, Kardel Sharpeye pierced the steep-stalker's central eye from the valley floor, an ominous act that resulted in his ritual exile. He would win acclaim on a field of battle, or never return. Like his mountain kin, the Sniper is one with his firearm. He Takes Aim from great distances, and scores Headshots that stop his targets dead. Armed with a modular rifle, Kardel launches incendiary rounds to rain burning Shrapnel or throwing a Grenade knocking back his enemies over entrenched positions."
        }, 
        {
            name: "LUNA", 
            imageUrl: "https://cdna.artstation.com/p/assets/images/images/017/043/916/original/stephanie-everett-lunaid.gif?1554410142", 
        },
        {
            name: "VIPER", 
            imageUrl: "https://thumbs.gfycat.com/CraftyRemoteDonkey-size_restricted.gif", 
        }
    ],
    "intelligence": [
        {
            name: "ZUES", 
            imageUrl: "https://i.pinimg.com/originals/bb/56/5e/bb565e7c437bd55296deed430453fa2d.gif", 
            details: "Charged with godly might, a Static Field constantly surrounds Zeus, making enemies more susceptible to his lightning. As the Lord of Heaven Jumping around, Zeus calls down Lightning Bolts to smite foes and reveal the surroundings, sends Arc of Lightning through his nearest enemies, and calls forth a terrifying Nimbus upon his enemies that repeatedly strikes enemies with Lightning Bolts. "
        },
        {
            name: "LICH", 
            imageUrl: "https://static.gosugamers.net/66/82/22/450db1aedeb1805475f8a53b6ee32c23269612d24d8f9f4fea64a48dc5.gif",
            
        },
        {
            name: "OGRE MAGI", 
            imageUrl: "https://markmoroz.files.wordpress.com/2014/05/ogre_run_front.gif", 
            details:"A competent wizard knows perhaps two spells; an exceptional one, three or four. Wielding the elements of Quas, Wex and Exort, the Invoker surpasses them all. Forging Spirits of ice and fire to melt away the armor of enemies with great Alacrity while Snapping their heat-deprived cold bodies. Conjuring an Ice Wall to stop foes in their paths before vanishing into thin air, chilling nearby enemies like a Ghost Wandering through their ranks. Lifting enemies off the ground with a Tornado that reaches through half the battlefield, while charging up an Extractive Mana Pulse for the whirling foes to land into. Pulling down a gigantic Meteor from space to crush enemies along a path while at the same time unleashing a Deafening Blast to push them along meteor's path."
        },
        {
            name: "CRYSTAL MAIDEN", 
            imageUrl: "https://steamuserimages-a.akamaihd.net/ugc/986736921511296862/DC7891183CFAE4C149BA01893ECD899B1D32D658/?imw=512&imh=384&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", 
        }, 
        {
            name: "LION", 
            imageUrl:"https://i.gifer.com/7NkP.gif", 
            details: "Betrayed by his demon partner, Lion went to Hell and back for his vengeance, retrieving the demon's hand and grafting it onto his own body. Lion gives enemies little chance to retaliate. Stunning targets with a damaging row of Earth Spikes, or temporarily transforming them into a harmless critter using a simple Hex, allowing him to Mana Drain them without interruption."
        }
    ]
};

function character(type) {

    let heroDiv = document.getElementById("heroes")
   
    heroDiv.innerHTML = ""

   if (type === "strength"){

    

    heroes.strength.map((hero, i) => {
        let heroInfo = document.createElement("a")
        heroInfo.setAttribute("href", `index3.html?heroName=${hero.name}&heroDetails=${hero.details}`)
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "hero-container")
    
        let newA = document.createElement("p")
        newA.innerHTML = `${hero.name}`
        let imageHero = document.createElement("img")
        imageHero.setAttribute(
            "src", `${hero.imageUrl}`
        );
        imageHero.setAttribute("class", "hero-image")
        newDiv.appendChild(newA)
        newDiv.appendChild(imageHero)
        heroInfo.appendChild(newDiv)
   
    heroDiv.appendChild(heroInfo)


    })
   }

   if (type === "agility"){
    heroes.agility.map((hero, i) => {
        let heroInfo = document.createElement("a")
        heroInfo.setAttribute("href", "index3.html")
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "hero-container")
    
        let newA = document.createElement("p")
        newA.innerHTML = `${hero.name}`
        let imageHero = document.createElement("img")
        imageHero.setAttribute(
            "src", `${hero.imageUrl}`
        );
        imageHero.setAttribute("class", "hero-image")
        newDiv.append(newA)
        newDiv.appendChild(imageHero)
        heroInfo.appendChild(newDiv)
        
   
    heroDiv.appendChild(heroInfo)

    })
   }
   if (type === "intelligence"){
    heroes.intelligence.map((hero, i) => {
        let heroInfo = document.createElement("a")
        heroInfo.setAttribute("href", `index3.html?heroName=${hero.name}&heroDetails=${hero.details}`)
        let newDiv = document.createElement("div")
        newDiv.setAttribute("class", "hero-container")
    
        let newA = document.createElement("p")
        newA.innerHTML = `${hero.name}`
        let imageHero = document.createElement("img")
        imageHero.setAttribute(
            "src", `${hero.imageUrl}`
        );
        imageHero.setAttribute("class", "hero-image")
        newDiv.append(newA)
        newDiv.appendChild(imageHero)
        heroInfo.appendChild(newDiv)
        
   
    heroDiv.appendChild(heroInfo)

    })
   }
    
    



}
    