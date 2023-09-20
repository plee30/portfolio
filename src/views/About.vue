<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Paul Lee</strong>. 
        <br/><br/>
        I graduated from the University of California, Santa Cruz in June of 2022, where I received a B.S. in Computer Science: Computer 
        Game Design. During my time at UCSC, I learned how to program, how to design and create games, and how to work on short-term 
        and long-term projects with a team of people!
        <br/><br/>
        Most recenlty, I've had the opportunity to work as an WOARior (external contractor) at Riot Games as an Encoding Operator, working for the encoding team for live esports broadcasts!
        I've also interned as a Quality Assurance Tester at Activision in 2016 and 2017, where I worked on Call of Duty: WWII & Call of Duty: Infinite Warfare!
        <br/><br/>
        Aside from making games, I love learning speedruns, watching esports, connecting with communities, and doing community management for streamers on Twitch!
      </div> <br/>

      <div style="margin-top: 20px;">If you want to see what I've done, you can check out my  <router-link to="/game-projects">games</router-link>, my <router-link to="/other-projects">non-games projects</router-link>, or my <router-link to="/resume">resume</router-link>!</div>

      <div style="margin-top: 40px;">I'm <strong>currently looking for work</strong> in software development and/or game design! Although I'm a programmer at heart, I also love working with 
        people and helping them reach and surpass their goals! You can reach me at <a href="mailto:leepaul99@gmail.com">leepaul99@gmail.com</a> or <router-link to="/contact">through here</router-link>.
      </div>
    </div>

    <div class="photo">
      <img src="img/avatar.png" alt="Avatar of Paul" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>