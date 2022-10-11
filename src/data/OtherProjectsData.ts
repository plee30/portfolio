import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("cqbot", "CQBot", "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/177550190/original/0f40ebee9fd42623497cab9db00ec09a61de062a/create-a-twitch-chat-bot-with-your-ideas.jpeg", `
    <div class="paragraph">
      <strong>CQBot</strong>, or ChampionsQueue Bot, is a WIP Twitch bot used to integrate information from
      <a href="https://championsqueue.lolesports.com/en-us/about/">Champions Queue</a> & Riot Games API into Twitch chat.
      <br/>
      The bot is currently unavailable due to changes made in how <a href="https://twitter.com/ChampionsQueue">@ChampionsQueue</a> operates.
      <br/><br/>Solo project, created July-August 2022.
      <br/>Thumbnail image from <a href="https://www.fiverr.com/printnico/create-a-twitch-chat-bot-with-your-ideas" target="blank">printnico</a>.    
      </div>
          <div class="paragraph">
            Main features :
            <ul>
            <li>!team (username) command to list out players in that player's ChampionsQueue game
            <li>!challenger (region) command to show the Summoner Name & LP of the lowest Challenger player in the region, for the purpose of allowing streamers trying to hit Challenger to know and share an up-to-date LP goal. 
            </ul>
        </div>
        <div class="paragraph center">
          <iframe class="youtube" src="https://www.youtube.com/embed/xA8_HZGzu4k" frameborder="0" allowfullscreen></iframe>
          <img class="pc-screenshot" src="https://user-images.githubusercontent.com/63633754/182134672-1670d4f6-880c-4f63-a4fd-d7c6b388eaeb.png" alt="CQBot Screenshot" />
        </div>
        <div class="notice">
            Source code is available on <a href="https://github.com/plee30/CQBot" target="_blank">GitHub</a>.
        </div>
    `, "#9047ff"),

    new ProjectData("javaGoap", "AI as Herobrine Mod", "img/projects/herobrine/thumbnail.png", `
    <div class="paragraph">
      <strong>AI as Herobrine</strong> is a Minecraft mod implementing the Herobrine entity with a Goal-Oriented Action Planning AI system.
      <br/>Team Project with Santiago Ponce, Robert Box, and Naman Bhushan. Created December 2021.
    </div>
    <div class="paragraph center">
      <iframe class="youtube" src="https://www.youtube.com/embed/wmgxXmspOzE" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class="paragraph">
      Main features :
      <ul>
        <li>Goal was to implement GOAP onto an entity in Minecraft in order to create an AI that constantly hunts the player down.</li>
        <li>Actions exist as custom AI events provided by Minecraft Forge API.</li>
        <li>Once a plan is formed, actions are given to Herobrine in decreasing importance so that they run in order.</li>
        <li>Once an action is finished, it is removed from the task list and the next task on the list can start.</li>
      </ul>
      What I did:
      <ul>
        <li>I implemented the <a href="https://github.com/ph1387/JavaGOAP" target="_blank">JavaGOAP library</a> to be used with Minecraft's API.</li>
        <li>I created custom actions that could be recognized and used by <a href="https://files.minecraftforge.net/net/minecraftforge/forge/" target="_blank">Minecraft Forge</a>.
      </ul>
    </div>`, "#47882b"),

    new ProjectData("mod", "Community Moderation", "https://www.twitch.tv/creatorcamp/assets/uploads/445x280-thumbnail-cc-moderation-and-safety-final.jpg", `
    <div class="paragraph">
      I do <strong>online community moderation</strong> for various streamers & content creators.
    </div>
    Thumbnail image from <a href="https://www.twitch.tv/creatorcamp/en/setting-up-your-stream/moderation-and-safety/" target="_blank">Twitch</a>.

    <div class="paragraph">
      Main Roles:
      <ul>
        <li>Currently a Twitch/Discord moderator for 
          <a href="https://twitch.tv/imls target="_blank">LS</a>, 
          <a href="https://twitch.tv/corejj target="_blank">CoreJJ</a>, 
          <a href="https://twitch.tv/olleh target="_blank">Olleh</a>, 
          <a href="https://twitch.tv/shrimp9710 target="_blank">Shrimp</a>, 
          <a href="https://twitch.tv/heokong98 target="_blank">Heokong</a>, 
          <a href="https://twitch.tv/malrang0209 target="_blank">Malrang</a>, and
          <a href="https://twitch.tv/eddaket target="_blank">Eddaket</a>, 
        </li>
        <li>Formerly Twitch/Discord/Reddit moderator for <a href="https://www.youtube.com/c/OfflineTVgg" target="_blank">OfflineTV</a> and <a href="https://twitter.com/watchvenn" target="_blank">Venn</a>.
        <li>Worked in and with different teams to create/enforce community guidelines, organize virtual events, and foster engagement</li>
        <li>Worked with content creators to create and publish content, ensure compliance with platform guidelines, and grow their online community</li>
        <li>Minor Korean-to-English live translation for Korean content creators to their English audience</li>
      </ul>
    </div>`),
];