function createPlayer(x) { 
    
    playerSection = document.createElement('div');
    playerSection.id = 'player-section';
    videoPlayer = document.createElement('iframe');
    videoPlayer.src = 'https://player.vimeo.com/video/' + x.vimeoId;
    videoPlayer.id = 'video-player';
    playerSection.appendChild(videoPlayer);

    metaData = document.createElement('div');
    
    videoActions = document.createElement('div');
    
    para1 = document.createElement('p');
    span = document.createElement('span');
    span.id = 'views-count';
    span.innerHTML = x.views + 'views';
    para1.appendChild(span);
    videoActions.appendChild(para1);
  

    iconContainer = document.createElement('div');
    icon1 = document.createElement('i');    
    icon1.className = 'far fa-heart';
    iconContainer.appendChild(icon1);

    icon2 = document.createElement('i');
    icon2.className = 'far fa-comment-alt';
    iconContainer.appendChild(icon2);

    icon3 = document.createElement('i');
    icon3.className = 'far fa-bookmark';
    iconContainer.appendChild(icon3);
    videoActions.appendChild(iconContainer);
    metaData.appendChild(videoActions);

    videoTitle = document.createElement('h3');
    videoTitle.innerHTML = x.title;
    videoTitle.id = 'video-title';
    metaData.appendChild(videoTitle);

    videoDesc = document.createElement('p');
    videoDesc.innerHTML = x.description;
    videoDesc.id = 'video-description';
    metaData.appendChild(videoDesc);
    playerSection.appendChild(metaData);

    return playerSection;
}

player = document.getElementById('player-section');

function getplayer(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                var response = JSON.parse(this.responseText);
                    player.appendChild(createPlayer(response));
            } else{
              console.log("x");
            }
        }
    }
    http.open('GET', 'http://5d76bf96515d1a0014085cf9.mockapi.io/video/1', true);
    http.send();
}

getplayer()

var playlistWrapper = document.getElementById('playlist-wrapper')

function createCard(obj) {  
    
    var card = document.createElement('div');
    card.className = 'playlist-card';
    card.id = 'card' + obj.id;

    var thumbImg = document.createElement('img');
    thumbImg.className = 'thumbnail';
    thumbImg.src = obj.thumbnail;
    card.appendChild(thumbImg);

    var videoTitle = document.createElement('h3');
    videoTitle.className = 'video-card-title';
    videoTitle.innerHTML = obj.title;
    card.appendChild(videoTitle);

    return card;
}

function getPlaylist(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState === 4){
            if(this.status === 200){
                var response = JSON.parse(this.responseText);  //contents of this http (id, title, thumbnail)
                for(var i=0; i<response.length; i++){
                    playlistWrapper.appendChild(createCard(response[i]));
                }
            } else{
              console.log("XYZ");
            }
        }
    }
    http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', true);
    http.send();
}

getPlaylist();

