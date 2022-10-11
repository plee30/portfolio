import ProjectData from '@/data/ProjectData.ts'

export default [
    // Draftle
    new ProjectData("draftle", "Draftle - May 2022", "img/projects/draftle/draftle-thumbnail.gif", `
    <div class="paragraph">
     <strong>Draftle</strong> is a Wordle clone based on drafts from professional League of Legends matches.
     <br/>Solo Project, created in May 2022
    </div>
    <div class="paragraph center">
        <img src="https://i.imgur.com/cR6ilPK.gif">
    </div>
    <div class="paragraph">
        About The Game:
        <ul>
            <li>League of Legends team composition puzzle.</li>
            <li>Guess the set of 5 characters in their respective roles. </li>
            <li>All team compositions are from the 2022 LCS Regular Spring Season.</li>
            <li>After each guess, the color of the tiles will change to show how close your guess was to the answer.</li>
        </ul>
        What I did:
        <ul>
            <li>I used HTML, JavaScript, and CSS to code the entirety of this project.</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://plee30.github.io/draftle/build/index.html" target="_blank">GitHub Pages</a>.
            Source code is available on <a href="https://github.com/plee30/draftle" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/draftle/img1.png" alt="Draftle Screenshot" />
        <img class="phone-screenshot" src="img/projects/draftle/img2.png" alt="Draftle Screenshot" />
    </div>
    `, "#00ADB5", true, true),

    // Combat Poker
    new ProjectData("combat poker", "Combat Poker - January-April 2022", "img/projects/combat_poker/thumbnail.gif", `
    <div class="paragraph">
        <strong>Combat Poker</strong> is a card-based auto-battler with poker mechanics.
        <br/>Team Project with Eric Shen, Jacob Yu, Ellen Kim, Christian Rouse, and Cameron Henritzy, created from January-April 2022
    </div>
    <div class="paragraph center">
        <video class="gdriveVideo" preload="auto" controls width="600" height="auto">
            <source src="https://drive.google.com/uc?export=download&id=1cxaWb_ymIB1wp0MRSo1aTNUgx2xH3hed" type='video/mp4'>
        </video>
    </div>
    <div class="paragraph">
        About The Game:
        <ul>
            <li>One game consists of several rounds.</li>
            <li>Each round, players build a hand of cards as they bet and put money into the pot, such as in poker.</li>
            <li>At the end of the betting phase, each player uses the cards in their hand to battle the other players.</li>
            <li>The player who wins the battle wins the pot, and a new round begins.</li>
            <li>The game ends once a single player remains.</li>
            <li>Game built in Godot.</li>
        </ul>
        What I did:
        <ul>
            <li>I primarily worked as the producer.
            <li>I set up meetings with our class mentor.
            <li>I set up and ran weekly team meetings.
            <li>I managed and mediated communication between team members.
            <li>I created and maintained a production sheet.
            <li>I organized play tests.
            <li>I created the tutorial for the game.
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Windows download available on <a href="https://eshen34.wixsite.com/combat-poker" target="_blank">our website</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/combat_poker/img1.jpg" alt="Combat Poker Screenshot"/>
        <img class="pc-screenshot" src="img/projects/combat_poker/img2.png" alt="Combat Poker"/>        
        <img src="img/projects/combat_poker/img3.png" alt="Draftle Screenshot" width="900" height="auto" alt="Combat Poker"/>

    </div>
    `, "#471919"),

    // Queen of the Hill
    new ProjectData("qoth", "Queen of the Hill - November 2021", "img/projects/qoth/thumbnail.gif", `
    <div class="paragraph">
        <strong>Queen of the Hill</strong> is an original incremental (aka idle) game that is driven by growth and discovery.
        <br/>Team Project with Milo Fisher, Jared Nolen, Jalen Pastor, William Propp, Alexander Shaham, and Alexis Sanchez, created in November 2021
    </div>
    <div class="paragraph center">
        <img src="img/projects/qoth/thumbnail.gif">
    </div>
    <div class="paragraph">
        About The Game:
        <ul>
            <li>Goal is to grow your ant colony to big numbers.</li>
            <li>Allocate ants to different roles to progress forward.</li>
            <li>Gain sugar passively through ants and upgrades</li>
            <li>Use sugar to unlock upgrades</li>
        </ul>
        What I did:
        <ul>
            <li>I primarily worked as the producer.
            <li>I helped set up and run team meetings.
            <li>I created and tested the initial values for gameplay progression (upgrade costs, resource gains, etc.)
            <li>I helped organize and run playtests.
            <li>I created and maintained a production sheet.
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://thedreadnite.itch.io/queen-of-the-hill" target="_blank">itch.io</a>.
            Source code is available on <a href="https://github.com/MiloFisher/idle-clicker" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="phone-screenshot" src="img/projects/qoth/img1.png" alt="Qoth Screenshot"/>
        <img class="pc-screenshot" src="img/projects/qoth/img2.png" alt="Qoth Screenshot"/>        
        <img src="https://i.imgur.com/QXlFBZr.gif" alt="Qoth Screenshot" width="600" height="auto"/>
    </div>
    `, "#523a3a"),

    // Plonk
    new ProjectData("plonk", "Plonk - October 2021", "img/projects/plonk/plonk-thumbnail.gif", `
    <div class="paragraph">
        <strong>Plonk</strong> is a one-button web game using Kenta Cho's <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, 
        "a JavaScript library for creating browser games quickly and easily."
        <br/>Solo Project, created in October 2021
    </div>
    <div class="paragraph center">
        <img src="https://i.imgur.com/hp4gziG.gif" width="800" height="auto">
    </div>
    <div class="paragraph">
        About The Game:
        <ul>
        <li>Move the mouse to move the red box. Click any button when the white box overlaps with a target.</li>
        <li>Successfully hitting target gives points depending on accuracy and time.</li>
        <li>The game ends once the player successfully hits 20 targets.</li>
        </ul>
        What I did:
        <ul>
            <li>I used the Crisp Game Library to code the entirety of this project.</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://deadfracture.itch.io/plonk" target="_blank">itch.io</a>.
            Source code is available on <a href="https://github.com/plee30/Crisp_Circles" target="_blank">GitHub</a>.
        </div>
    </div>
    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/plonk/cover.png" alt="Plonk Screenshot" />
    </div>
    `, "#616161"),

    // Fast Food
    new ProjectData("fast food", "Fast Food - October 2021", "img/projects/fast_food/fast_food-thumbnail.gif", `
    <div class="paragraph">
        <strong>Fast Food</strong> is a one-button web game using Kenta Cho's <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, 
        "a JavaScript library for creating browser games quickly and easily."
        <br/>Duo Project with Brian Cao, created in October 2021
    </div>
    <div class="paragraph center">
        <img src="https://i.imgur.com/ptiLcmE.gif" width="600" height="auto">
    </div>
    <div class="paragraph">
        About The Game:
        <ul>
            <li>Click a patty on the grill once it changes color to plate it.</li>
            <li>Press and hold the cyan plate, and let go once the blue bar fills up, to serve a patty.</li>
            <li>Earn points for successfully plating and serving patties.</li>
            <li>Game ends once a patty stays on the grill too long and overcooks.</li>
        </ul>
        What I did:
        <ul>
            <li>I used the Crisp Game Library to help create this project.</li>
            <li>I coded the gameplay of moving the patties from the grill to the plate, as well as serving the patty by interacting with the plate.</li>
            <li>I helped create and playtest the scoring system & fail condition.</li>
        </ul>
    </div>
    <div class="paragraph">
        <div class="notice">
            Playable in the browser on <a href="https://deadfracture.itch.io/fast-food" target="_blank">itch.io</a>.
            Source code is available on <a href="https://github.com/plee30/Crisp-FastFood" target="_blank">GitHub</a>.
        </div>
    </div>
    `, "#e91e63"),

    // Transport Trouble
    new ProjectData("transport trouble", "Transport Trouble - October 2021", "img/projects/transport_trouble/fast_food_thumbnail.gif", `
    <div class="paragraph">
        <strong>Transport Trouble</strong> is a one-button web game using Kenta Cho's <a href="https://github.com/abagames/crisp-game-lib" target="_blank">crisp-game-lib</a>, 
        "a JavaScript library for creating browser games quickly and easily."
        <br/>Team Project with Brian Cao, Jake Nguyen, Noor Haider, and Pierce Sullivan, created in October 2021
        </div>
        <div class="paragraph center">
            <img src="img/projects/transport_trouble/cover.gif" width="600" height="auto">
        </div>
        <div class="paragraph">
            About The Game:
            <ul>
                <li>Tap an input button to move right</li>
                <li>Press and hold an input button, to move left.</li>
                <li>Earn points for successfully making it to the other side without hitting a hazard.</li>
                <li>Game ends once you hit a hazard.</li>
            </ul>
            What I did:
            <ul>
                <li>I used the Crisp Game Library to help create this project.</li>
                <li>I helped bug-fix the animation of the hazards bouncing up and down.</li>
                <li>I implemented an indicator showing when letting go will move the player left.</li>
            </ul>
        </div>
        <div class="paragraph">
            <div class="notice">
                Playable in the browser on <a href="https://deadfracture.itch.io/transport-trouble" target="_blank">itch.io</a>.
                Source code is available on <a href="https://github.com/plee30/Transport_Trouble" target="_blank">GitHub</a>.
            </div>
        </div>
    `, "#ffc107")
];