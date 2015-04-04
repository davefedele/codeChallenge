var app = app || {};

app.FeedCollection = Backbone.Collection.extend({
  model: app.FeedItem,

  fetch : function(){
    var that = this;
    var result = {};

    $.ajax({
      type: 'GET',
      url: "http://10.0.1.2:3005/v.1.3.1/feed/gaming",
      headers: {
        'x-auth-token' : '519a42825b56a06706c1d8286468c78400e3497c781f6e2247fc5cd9c328d8b30ad90259a119a0f45dc512313aca07eb41906ce66f2c78731437dd8e3ecf46432dc68ce46644b56b18e3013fe48bc50f2cfa1ae93ce878f0bf9cfc42e9d072e1',
        'Access-Control-Allow-Origin' : 'http://localhost:8000'
      },
      success: function(data) {
        result = data;
        console.log(result);
        console.log("Successfully fetched gaming feed!");
      },
      error: function(data){
        alert("error fetching");
      }
    });
    
  },

  createFeedItems: function(data){
    _.each(data.feeds[0].assertions, function(item){
      var newModel = new app.FeedItemModel(item);
      feedCollection.add(newModel);
      var newView = new app.FeedItemView({model: newModel});

    });
  },

  data: {
    "meta": {
      "limit": 10,
      "offset": 10,
      "next_offset": 20,
      "fid": "f/gaming",
      "type": "feeds",
      "window_token": "{\"keys\":\"16105,16104,16093,15936,15892,15875,15648,15609,15599,15482\",\"session_date\":1428110185884}",
      "request_url": "/v1.3.1/feed/gaming?limit=10&offset=10",
      "request_time_ms": 4
    },
    "feeds": [
      {
        "fid": "f/gaming",
        "title": "Gaming",
        "score": 10,
        "assertions": [
          {
            "aid": "a16105",
            "title": "Dice is losing it.",
            "slab_text": "Dice is\nlosing\nit",
            "type": [
              "topic"
            ],
            "media": [],
            "event": [],
            "quote": {},
            "feeds": [
              "f/popular",
              "f/today",
              "f/gaming",
              "t/ea",
              "t/dice",
              "t/influencer",
              "t/david-powell",
              "t/february4"
            ],
            "tags": [
              "ea",
              "dice",
              "influencer",
              "david-powell",
              "february4"
            ],
            "created": "2015-02-04T22:56:27.553Z",
            "expired": "2015-02-18T22:56:27.553Z",
            "status": "A",
            "score": 1423090587553,
            "creator": {
              "uid": "u18389",
              "username": "David Powell",
              "display_name": "David Powell",
              "is_contributor": true,
              "is_guest": false,
              "profile_url": "http://media.staance.com/user/photo/18389"
            },
            "stat_agrees": 1,
            "stat_disagrees": 0,
            "stat_agrees_male": 0,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a16104",
            "title": "Battlefield: Hardline can't be worse than BF4.",
            "slab_text": "Battlefield:\nHardline\ncan't\nbe worse\nthan BF4",
            "type": [],
            "media": [],
            "event": [],
            "quote": {},
            "feeds": [
              "f/popular",
              "f/today",
              "f/gaming",
              "t/ea",
              "t/dice",
              "t/influencer",
              "t/david-powell",
              "t/february4"
            ],
            "tags": [
              "ea",
              "dice",
              "influencer",
              "david-powell",
              "february4"
            ],
            "created": "2015-02-04T22:55:55.370Z",
            "expired": "2015-02-18T22:55:55.370Z",
            "status": "A",
            "score": 1423090555370,
            "creator": {
              "uid": "u18389",
              "username": "David Powell",
              "display_name": "David Powell",
              "is_contributor": true,
              "is_guest": false,
              "profile_url": "http://media.staance.com/user/photo/18389"
            },
            "stat_agrees": 0,
            "stat_disagrees": 0,
            "stat_agrees_male": 0,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a16093",
            "title": "Battlefield Hard Line will be the best yet.",
            "slab_text": "Battlefield\nHard Line\nwill\nbe the\nbest yet",
            "type": [
              "local"
            ],
            "media": [
              {
                "mid": "m/16093/img",
                "url": "http://cdn.cheatcc.com/news/large/hardline.jpg?1422589439",
                "type": "img",
                "score": 0
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/gaming",
              "t/ea",
              "t/dice",
              "t/influencer",
              "t/david-powell",
              "t/january30"
            ],
            "tags": [
              "ea",
              "dice",
              "influencer",
              "david-powell",
              "january30"
            ],
            "created": "2015-01-30T19:38:39.980Z",
            "expired": "2015-02-13T19:38:39.980Z",
            "status": "A",
            "score": 1422646719980,
            "creator": {
              "uid": "u16823",
              "username": "David Powell",
              "display_name": "David Powell",
              "is_contributor": true,
              "is_guest": false,
              "profile_url": "http://media.staance.com/user/photo/16823"
            },
            "stat_agrees": 0,
            "stat_disagrees": 0,
            "stat_agrees_male": 0,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15936",
            "title": "The Unreal Engine will change gaming.",
            "slab_text": "Unreal\nEngine\nWill\nChange\nGaming",
            "type": [
              "local",
              "contributor"
            ],
            "media": [
              {
                "mid": "m/15936/brief",
                "text": "PCGamer.com is the official web counterpart to the PC Gamer print magazine. Exclusive reviews, demos, and updates and news on all your favourite PC gaming franchises.",
                "type": "brief",
                "score": 0
              },
              {
                "mid": "m/15936/link",
                "text": "pcgamer\n        PC Game Reviews, News, & Features | PC Gamer    ",
                "url": "http://www.pcgamer.com/tag/unreal-engine-4/",
                "favicon": "http://www.google.com/s2/favicons?domain=http://www.pcgamer.com/tag/unreal-engine-4/",
                "type": "link",
                "score": 1
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/gaming",
              "t/unrealengine",
              "t/pcgaming",
              "t/pc",
              "t/august28"
            ],
            "tags": [
              "unrealengine",
              "pcgaming",
              "pc",
              "august28"
            ],
            "created": "2014-08-28T21:45:00.968Z",
            "expired": null,
            "status": "A",
            "score": 1409262300968,
            "creator": {
              "uid": "u16823",
              "username": "David Powell",
              "display_name": "David Powell",
              "is_contributor": true,
              "is_guest": false,
              "profile_url": "http://media.staance.com/user/photo/16823"
            },
            "stat_agrees": 36,
            "stat_disagrees": 19,
            "stat_agrees_male": 0,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15892",
            "title": "Pokken is a sell-out game.",
            "slab_text": "pokken\nis a sell-out\ngame",
            "type": [
              "local"
            ],
            "media": [
              {
                "mid": "m/15892/iframe",
                "url": "<iframe src=\"http://www.youtube.com/embed/3-WqRkiLe1A?rel=0\" frameborder=\"0\" width=\"100%\" height=\"100%\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" scrolling=\"no\" class=\"queued\"></iframe>",
                "type": "iframe",
                "score": 0
              },
              {
                "mid": "m/15892/brief",
                "text": "A Pokémon/Tekken crossover game is being called a fraud by Pokémon fans who thing the series is losing its roots.",
                "type": "brief",
                "score": 1
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/gaming",
              "t/pokemon",
              "t/tekken",
              "t/pokken",
              "t/august26"
            ],
            "tags": [
              "pokemon",
              "tekken",
              "pokken",
              "august26"
            ],
            "created": "2014-08-27T00:35:22.789Z",
            "expired": null,
            "status": "A",
            "score": 1409099722789,
            "creator": null,
            "stat_agrees": 24,
            "stat_disagrees": 18,
            "stat_agrees_male": 0,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15875",
            "title": "Madden 15 is amazing.",
            "slab_text": "The new\nMadden\nis absolutely\namazing",
            "type": [
              "topic"
            ],
            "media": [
              {
                "mid": "m/15875/iframe",
                "url": "<iframe src=\"http://www.youtube.com/embed/RYIeJ5H8oe0?rel=0\" frameborder=\"0\" width=\"100%\" height=\"100%\" webkitallowfullscreen=\"\" mozallowfullscreen=\"\" allowfullscreen=\"\" scrolling=\"no\" class=\"queued\"></iframe>",
                "type": "iframe",
                "score": 0
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/popular",
              "f/today",
              "f/gaming",
              "t/madden15",
              "t/madden",
              "t/easports",
              "t/august26"
            ],
            "tags": [
              "madden15",
              "madden",
              "easports",
              "august26"
            ],
            "created": "2014-08-26T15:45:16.933Z",
            "expired": null,
            "status": "A",
            "score": 1409067916933,
            "creator": null,
            "stat_agrees": 501,
            "stat_disagrees": 330,
            "stat_agrees_male": 1,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15648",
            "title": "Playstation 4 won the console wars.",
            "slab_text": "ps 4 won the\nconsole\nwars",
            "type": [
              "local"
            ],
            "media": [
              {
                "mid": "m/15648/brief",
                "text": "Sony has announced shipments of over 10mil Playstation 4 consoles, compared to 5mil Xbox Ones.",
                "type": "brief",
                "score": 0
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/gaming",
              "t/playstation4",
              "t/sony",
              "t/xboxone",
              "t/wiiu",
              "t/august12"
            ],
            "tags": [
              "playstation4",
              "sony",
              "xboxone",
              "wiiu",
              "august12"
            ],
            "created": "2014-08-12T23:13:21.126Z",
            "expired": null,
            "status": "A",
            "score": 1407885201126,
            "creator": null,
            "stat_agrees": 147,
            "stat_disagrees": 78,
            "stat_agrees_male": 2,
            "stat_disagrees_male": 1,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15609",
            "title": "No one plays Zynga games anymore.",
            "slab_text": "No one\nplays\nZynga\ngames\nanymore",
            "type": [
              "topic"
            ],
            "media": [
              {
                "mid": "m/15609/img",
                "url": "http://imgur.com/GzCW4k6.jpg",
                "type": "img",
                "score": 0
              },
              {
                "mid": "m/15609/brief",
                "text": "Zynga's game sales have dropped.",
                "type": "brief",
                "score": 1
              },
              {
                "mid": "m/15609/link",
                "text": "CNET\nZynga presses pause on game launches as sales outlook drops",
                "url": "http://www.cnet.com/news/zynga-presses-pause-game-launches-sales-outlook-drops/",
                "favicon": "http://www.google.com/s2/favicons?domain=http://www.cnet.com/news/zynga-presses-pause-game-launches-sales-outlook-drops/",
                "type": "link",
                "score": 2
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/popular",
              "f/today",
              "f/gaming",
              "t/zynga",
              "t/app",
              "t/august10"
            ],
            "tags": [
              "zynga",
              "app",
              "august10"
            ],
            "created": "2014-08-11T03:32:14.920Z",
            "expired": null,
            "status": "A",
            "score": 1407727934920,
            "creator": null,
            "stat_agrees": 549,
            "stat_disagrees": 203,
            "stat_agrees_male": 2,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15599",
            "title": "Micromon will never be as good as Pokemon.",
            "slab_text": "Micromon\nwill never\nbe as good\nas Pokemon",
            "type": [
              "local"
            ],
            "media": [
              {
                "mid": "m/15599/img",
                "url": "http://i.imgur.com/CuoMTNn.jpg",
                "type": "img",
                "score": 0
              },
              {
                "mid": "m/15599/link",
                "text": "Polygon\nMicromon is the iOS app store's top paid title and basically a Pokémon game",
                "url": "http://www.polygon.com/2014/8/8/5982367/micromon-ios-pokemon",
                "favicon": "http://www.google.com/s2/favicons?domain=http://www.polygon.com/2014/8/8/5982367/micromon-ios-pokemon",
                "type": "link",
                "score": 1
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/gaming",
              "t/micromon",
              "t/pokemon",
              "t/rpg",
              "t/august10"
            ],
            "tags": [
              "micromon",
              "pokemon",
              "rpg",
              "august10"
            ],
            "created": "2014-08-10T18:20:44.635Z",
            "expired": null,
            "status": "A",
            "score": 1407694844635,
            "creator": null,
            "stat_agrees": 73,
            "stat_disagrees": 14,
            "stat_agrees_male": 2,
            "stat_disagrees_male": 0,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          },
          {
            "aid": "a15482",
            "title": "Flappy Bird will be popular again.",
            "slab_text": "Flappy\nBird\nwill be\npopular\nagain",
            "type": [
              "topic"
            ],
            "media": [
              {
                "mid": "m/15482/img",
                "url": "http://i.imgur.com/aF1tLDd.jpg",
                "type": "img",
                "score": 0
              },
              {
                "mid": "m/15482/link",
                "text": "IGN\nFlappy Bird returns with new features",
                "url": "http://www.ign.com/articles/2014/08/01/flappy-bird-returns-with-new-features",
                "favicon": "http://www.google.com/s2/favicons?domain=http://www.ign.com/articles/2014/08/01/flappy-bird-returns-with-new-features",
                "type": "link",
                "score": 1
              }
            ],
            "event": [],
            "quote": {},
            "feeds": [
              "f/popular",
              "f/today",
              "f/gaming",
              "t/flappybird",
              "t/mobile",
              "t/app",
              "t/august3"
            ],
            "tags": [
              "flappybird",
              "mobile",
              "app",
              "august3"
            ],
            "created": "2014-08-04T00:05:25.475Z",
            "expired": null,
            "status": "A",
            "score": 1407110725475,
            "creator": null,
            "stat_agrees": 496,
            "stat_disagrees": 764,
            "stat_agrees_male": 2,
            "stat_disagrees_male": 2,
            "stat_agrees_female": 0,
            "stat_disagrees_female": 0
          }
        ]
      }
    ]
  }


});