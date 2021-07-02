const ClientsUser = document.querySelector("#data>tbody");

                  function LoadClients () {
                    const request = new XMLHttpRequest();

                    request.open("get", "C:\Users\jignesh\Desktop\argon-dashboard-master\info.js");
                    request.onload = ( ) =>{
                         try{
                           const json = JSON.parse(request.responseTest);
                           populateClients(json);

                         }  catch (e) {
                             console.warn("could not load clients data");
                         }
                    };

                      request.send();
                  }

                  function populateClients (json) {
                      while(ClientsUser.firstChild) {
                           ClientsUser.removeChild(ClientsUser.firstChild);
                      }
                  }
                  document.addEventListener("DOMContentLoaded", () +> {LoadClients(); });