(function() {

    //  var output = PUBNUB.$('output'), 
    //      input = PUBNUB.$('input'), 
    //      button = PUBNUB.$('button'),
    //      avatar = PUBNUB.$('avatar'),
    //      miaAvatar = PUBNUB.$('avatar'),
    //      presence = PUBNUB.$('presence');

    //var channel = 'mchat';
    
    // Assign a random avatar in random color
    // var faceNumber = ((Math.random() * 12 + 1) >>> 0);
    // var colorNumber = ((Math.random() * 9 + 1) >>> 0);
    // avatar.className = 'face-' + faceNumber + ' color-' + colorNumber;
    // miaAvatar.className = 'face-' + faceNumber + 1 + ' color-' + colorNumber + 1;

    // var p = PUBNUB.init({
    //     subscribe_key: 'sub-c-f762fb78-2724-11e4-a4df-02ee2ddab7fe',
    //     publish_key:   'pub-c-156a6d5f-22bd-4a13-848d-b5b4d4b36695'
    // });
    // 
    // var miaP = PUBNUB.init({
    //     subscribe_key: 'sub-c-f762fb78-2724-11e4-a4df-02ee2ddab7ff',
    //     publish_key:   'pub-c-156a6d5f-22bd-4a13-848d-b5b4d4b36696'
    // });

    // p.subscribe({
    //     channel  : channel,
    //     callback : function(m) { 
    //         output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p>' + output.innerHTML;
    //     },
    //     presence: function(m){
    //         if(m.occupancy > 1) {
    //             presence.textContent = m.occupancy + ' people online';
    //         } else {
    //             presence.textContent = 'Nobody else is online';
    //         }
    //     }
    // });
    // 
    // miaP.subscribe({
    //     channel  : channel,
    //     callback : function(m) { 
    //         output.innerHTML = '<p><i class="' + m.avatar + '"></i><span>' +  m.text.replace( /[<>]/ig, '' ) + '</span></p>' + output.innerHTML;
    //     },
    //     presence: function(m){
    //         if(m.occupancy > 1) {
    //             presence.textContent = m.occupancy + ' people online';
    //         } else {
    //             presence.textContent = 'Nobody else is online';
    //         }
    //     }
    // });
    
    document.getElementById("input").addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode == 13) {
        document.getElementById("button").click();
      }
    });

    // p.bind('keyup', input, function(e) {
    //     (e.keyCode || e.charCode) === 13 && publish()
    // });
    // 
    // miaP.bind('keyup', input, function(e) {
    //     (e.keyCode || e.charCode) === 13 && miaPublish()
    // });
    // 
    // p.bind('click', button, publish);
    // 
    // miaP.bind('click', button, publish);

    function publish() {
      var output = document.getElementById("output");
      var input = document.getElementById("input");
      output.innerHTML = "<p><span>" + input.value + "</span></p>" + output.innerHTML;
      input.value = "";
        // p.publish({
        //     channel : channel, 
        //     message : {avatar: avatar.className, text: input.value}, 
        //     x : (input.value='')
        // });
    }
    
    // function miaPublish() {        
    //     miaP.publish({
    //         channel : channel, 
    //         message : {avatar: miaAvatar.className, text: "Hello"},
    //         x : (input.value='')
    //     });
    // }


})();
