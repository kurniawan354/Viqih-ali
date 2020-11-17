var base_url = " https://api.football-data.org/v2/"
function status(response) {
    if (response.status !== 200) {
        console.log("Error : " + response.status);
        return Promise.reject(new Error(response.statusText));
    } else {
        return Promise.resolve(response);
    }
}
       
      function saveDetail(){
        console.log("tombol FAB di klik");
        var item = getDetailTeamsbyId();
        item.then(function(teams){
          saveForLater(teams);
        })
      }
      function DeleteDetail(){
        console.log("tombol FAB di klik");
        var item =getSavedTeam();
        item.then(function(teams){
          DeleteTeams(teams);
        })
      }
         
        
function json(response){
    return response.json();
}
  function error(error) {
    console.log("Error : " + error);
  }     
 
function getDataUefa(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2001 + "/standings"
    ,{
        headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(data) {
              let ligaHTML = ""
              ligaHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-league").innerHTML = ligaHTML
          var teamsHTML = "";
          let stands = data.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  teamsHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                      
                  document.getElementById("test1").innerHTML = teamsHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};

function  getDataBundesLiga(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2002 + "/standings"
    ,{
      method:"GET",
      headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(Bundes) {
              let BundesLigaHTML = ""
              BundesLigaHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-BundesLiga").innerHTML = BundesLigaHTML
          var bundesHTML = "";
          let stands = Bundes.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  bundesHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                 
                  document.getElementById("bundesliga").innerHTML = bundesHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};
function  getDataEredivisie(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2003 + "/standings"
    ,{
      method:"GET",
      headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(Bundes) {
              let ErendivisieLigaHTML = ""
              ErendivisieLigaHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-Eredivisie").innerHTML = ErendivisieLigaHTML
          var  eredivisieHTML = "";
          let stands = Bundes.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  eredivisieHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                 
                  document.getElementById("eredivisie").innerHTML = eredivisieHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};

function  getDataPrimierLeague(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2021 + "/standings"
    ,{
      method:"GET",
      headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(data) {
              let PrimierLeagueHTML = ""
              PrimierLeagueHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-PremierLeague").innerHTML = PrimierLeagueHTML
          var  primierleagueHTML = "";
          let stands = data.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  primierleagueHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                  
                  document.getElementById("premierleague").innerHTML = primierleagueHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};

function  getDataPrimeraDivision(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2014 + "/standings"
    ,{
      method:"GET",
      headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(data) {
              let PrimeraDivisionHTML = ""
              PrimeraDivisionHTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-PrimeraDivision").innerHTML = PrimeraDivisionHTML
          var  primeradivisionHTML = "";
          let stands = data.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  primeradivisionHTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
      
                  document.getElementById("primeradivision").innerHTML = primeradivisionHTML;
            })
              
          }
           
            

        })
  }     
   
                 
};
function  getDataLigeu1(){
  if ("caches" in window) {
    fetch(base_url + "competitions/"+ 2015 + "/standings"
    ,{
      method:"GET",
      headers: {
        
            'X-Auth-Token': "b1cbc09adafb4fa885b4e06a36de9e1f"
        },
        }).then(function(response) {
          if (response) {
            response.json().then(function(data) {
              let Ligue1HTML = ""
              Ligue1HTML = `<tr>
              <th>Pos</th>
              <th class="crest-team"></th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Draw</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
          </tr>`;
          document.getElementById("head-Ligue1").innerHTML = Ligue1HTML
          var  ligue1HTML = "";
          let stands = data.standings.filter(function(elem) { return elem.type === "TOTAL"; })
          stands.forEach(function(table) {

              table.table.forEach(function(team) {
                  ligue1HTML += `
                  <tr>
                  <td>${team.position}</td>
                  <td class="crest-team"><img width="20px" height="20px" class="responsive-img" src="${team.team.crestUrl}" /></td>
                  <td>${team.team.name}</td>
                  <td>${team.playedGames}</td>
                  <td>${team.won}</td>
                  <td>${team.draw}</td>
                  <td>${team.lost}</td>
                  <td>${team.goalsFor}</td>
                  <td>${team.goalsAgainst}</td>
                  <td>${team.goalDifference}</td>
                 <td>${team.points}</td>
              </tr>
          `;

                        })
                      });
                  document.getElementById("ligue1").innerHTML = ligue1HTML;
            })
              
          }
           
            

        })
  }     
   
                 
};
function getAllTeams(){
  fetch(base_url +'teams',{
     method:'GET',
     headers: {
       'X-Auth-Token':"b1cbc09adafb4fa885b4e06a36de9e1f"
     },
  }).then (status)
  .then (json)
  .then (function(data){
    var TeamCardHTML ="";
    data.teams.forEach(function(team){
      TeamCardHTML +=`<div class="card">
      <div class="card-image waves-effect waves-block waves-light">
      <img src ="${team.crestUrl}"class="responsive-img"style="width:100%;display:block;margin-left:auto;margin-right:auto;">
      </div>
      <h2>${team.shortName}</h2>
      <p class="title email">Email:${team.email}></p>
      <p class="phone">Phone:${team.phone}</p>
      <p><button style="border: none;outline: 0; display: inline-block;padding: 8px;color: white;
      background-color: blue;text-align: center;cursor: pointer; width: 100%;font-size: 18px;"><a href="/DetailTeams.html?id=${team.id}">Detail</a></button>
      </div>
      `;
    


    });
    document.getElementById("teams").innerHTML = TeamCardHTML;
   
  })
  .catch(error);
}
function getDetailTeamsbyId() {

  return new Promise(function(resolve, reject) {
      var urlParams = new URLSearchParams(window.location.search);
      var idParam = urlParams.get("id");

      if ("caches" in window) {
          caches.match(base_url + "teams/" + idParam, {
              method: 'GET',
              headers: {
                  'X-Auth-Token': 'b1cbc09adafb4fa885b4e06a36de9e1f',
              },
          }).then(function(response) {
              if (response) {
                  response.json().then(function(data) {
                    let CopetitionsHTML =``;
                    data.activeCompetitions.forEach(function(compe) {
                      CopetitionsHTML += `<p>${compe.name}</p>`
                  })
                    var DetailHTML =`
                    <div class="row">
                <div class="col s12">
                    <div class="detail-crest col s12 m3">
                        <img class="responsive-img" src="${data.crestUrl}" />
                    </div>
                    <div class="detail-overview col s12 m8">
                        <h2>${data.name}</h2>
                        <h6>setadium :<i class="material-icons">map</i>${data.venue}</h6>
                        <a href="${data.website}"> <i class="material-icons">language</i>${data.website}</a>
                        <h6 id="detail-compe">Competitions: </h6>
                        <div class="col s12 detail-btn-compe">
    
                        </div>
                        <div class="col s12 detail-btn-compe">
                        ${CopetitionsHTML}
                        <a class="waves-effect waves-light btn-small blue darken-1" id="saved" onclick="saveDetail()"><i class="material-icons right" style="color:#f7f7f7;">save</i>save</a>
                        </div>
                    </div>
                </div>
            </div>`;

                      document.getElementById("detail-teams").innerHTML = DetailHTML;
                      resolve(data);
                  });
              }
          });
      }
      fetch(base_url + "teams/" + idParam, {
              method: 'GET',
              headers: {
                  'X-Auth-Token': 'b1cbc09adafb4fa885b4e06a36de9e1f',
              },
          })
          .then(status)
          .then(json)
          .then(function(data) {
            let CopetitionsHTML =``;
            data.activeCompetitions.forEach(function(compe) {
              CopetitionsHTML += `<p>${compe.name}</p>`
          })
            var DetailHTML =`
            <div class="row">
            <div class="col s12">
                <div class="detail-crest col s12 m3">
                    <img class="responsive-img" src="${data.crestUrl}" />
                </div>
                <div class="detail-overview col s12 m8">
                    <h2>${data.name}</h2>
                    <h6>setadium :<i class="material-icons">map</i>${data.venue}</h6>
                    <a href="${data.website}"> <i class="material-icons">language</i>${data.website}</a>
                    <h6 id="detail-compe">Competitions: </h6>
                    <div class="col s12 detail-btn-compe">
                        ${CopetitionsHTML}
                    </div>
                    <div class="col s12 detail-btn-compe">
                 
                    <a class="waves-effect waves-light btn-small blue darken-1" id="saved" onclick="saveDetail()"><i class="material-icons right" style="color:#f7f7f7;">save</i>Save</a>
                    </div>
                </div>
            </div>
        </div>`;
             
              document.getElementById("detail-teams").innerHTML = DetailHTML;
              resolve(data);
           
             
          });
  });
}
function getSavedTeam() {
  var urlParams = new URLSearchParams(window.location.search);

  getAll().then(function(data) {
    
      var teamsHTML = "";
      data.forEach(function(team) {
          teamsHTML += `
              <div  class="col s12 m2">
              <div class="card team-card">
                  <div class="card-image">
                      <img class="responsive-img" src="${team.crestUrl}">
  
                  </div>
                  <div class="card-content">
                      <span class="card-title truncate">${team.shortName}</span>
                      <p class="flow-text truncate">${team.venue}</p>
                      <a href="./DetailTeams.html?id=${team.id}&saved=true">Club Profile <i class="material-icons" style="color: black; font-size: 12px;">arrow_forward</i></a>
                      <a class="waves-effect waves-light btn-small blue darken-1"  onclick=" DeleteDetail()">Delet Team</a>
                  </div>
              </div>
          </div>

      `;
      });
      // Sisipkan komponen card ke dalam elemen dengan id #body-content
      document.getElementById("teams").innerHTML = teamsHTML;
  });
}
function getSavedetailByid(){
  var urlParams = new URLSearchParams(window.location.search);
  var idParam = urlParams.get("id");

getById(idParam).then(function(data){
 
  let CopetitionsHTML =``;
  data.activeCompetitions.forEach(function(compe) {
    CopetitionsHTML += `<p>${compe.name}</p>`
})
var DetailHTML =`
            <div class="row">
            <div class="col s12">
                <div class="detail-crest col s12 m3">
                    <img class="responsive-img" src="${data.crestUrl}" />
                </div>
                <div class="detail-overview col s12 m8">
                    <h2>${data.name}</h2>
                    <h6>setadium :<i class="material-icons">map</i>${data.venue}</h6>
                    <a href="${data.website}"> <i class="material-icons">language</i>${data.website}</a>
                    <h6 id="detail-compe">Competitions: </h6>
                    <div class="col s12 detail-btn-compe">
                        ${CopetitionsHTML}
                    </div>
                    <div class="col s12 detail-btn-compe">
                 
                    <a class="waves-effect waves-light btn-small blue darken-1" onclick="saveDetail()"><i class="material-icons right" style="color:#f7f7f7;">save</i>delet</a>
                    
                    </div>
                </div>
            </div>
        </div>`;
               
              document.getElementById("detail-teams").innerHTML = DetailHTML;
              
  
});
}