const matches=[
  {league:"Süper Lig",minute:"67'",home:"Galatasaray",away:"Fenerbahçe",hs:2,as:1},
  {league:"Premier League",minute:"42'",home:"Arsenal",away:"Chelsea",hs:1,as:0},
  {league:"La Liga",minute:"28'",home:"Real Madrid",away:"Barcelona",hs:0,as:0}
];

const el=document.querySelector("#matches");
el.innerHTML=matches.map(m=>`
  <article class="match">
    <div class="match-top"><span>${m.league}</span><span class="live">● CANLI ${m.minute}</span></div>
    <div class="teams">
      <div class="team">${m.home}</div>
      <div class="score">${m.hs} - ${m.as}</div>
      <div class="team">${m.away}</div>
    </div>
  </article>
`).join("");

document.querySelector("#liveCount").textContent=`${matches.length} maç`;
