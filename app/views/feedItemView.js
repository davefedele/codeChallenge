var app = app || {};

app.FeedItemView = Backbone.View.extend({
  tagName: "td",
  template: _.template(
    '<div class="row feed-item <%= aid %>">' +
      '<div class="col-md-7 feed-item-content">' +
        '<div class="col-md-5">' +
          '<div class="staance-buttons">' +
            '<a href="#" class="btn btn-default btn-circle agree">V</a>' +
            '<a href="#" class="btn btn-danger btn-circle disagree">D</i></a>' +
            '<p>' +
              '<span class="staance-text"><strong>agree</strong></span>' +
              '<span class="staance-text"><strong>disagree</strong></span>' +
              '</p>' +
            '</div>' +
        '</div>' +
        '<div class=col-md-7>' +
        // '<div class="creator">' +
        //   '<a href="profile/<%= creator.uid.slice(1) %>" class="creator-link">' +
        //     '<img src="<%= creator.profile_url %>" class="profile-img">' +
        //   '</a>' +
        //   '<span class="creator-display-name"><%= creator.display_name %></span>' +
        //   '<span class="created-date"><%= moment(created).format("MMMM D") %></span>' +
        // '</div>' +
        '<div class="assertion">'+
          '<% if(media.length){ %>' +
            '<% _.each(media, function(item){ %>' +
              '<% if(item.type === "img"){ %>' +
                '<div>' +
                  '<img src=<%= media[0].url %> class="img-container">' +
                '</div>' +
              '<% } %>' +    
            '<% }); %>' +
          '<% } %>' +
          '<% if(media.length){ %>' +
            '<% _.each(media, function(item){ %>' +
              '<% if(item.type === "iframe"){ %>' +
                '<div class="iframe-container">' +
                  '<%= media[0].url %>' +
                '</div>' +                
              '<% } %>' +    
            '<% }); %>' +
          '<% } %>' +
          '<h1 class="inline"><%= title %></h1>' +
          '<% if(media.length){ %>' +
            '<% _.each(media, function(item){ %>' +
              '<% if(item.type === "brief"){ %>' +
                '<span><i class="fa fa-info-circle fa-inverse"></i></span>' +
                '<h4 class="brief hidden"><%= item.text %></h4>'+
              '<% } %>' +    
            '<% }); %>' +
          '<% } %>' +     
          '<% if(media.length){ %>' +
            '<% _.each(media, function(item){ %>' +
              '<% if(item.type === "link"){ %>' +
                '<span><i class="fa fa-link fa-inverse"></i></span>' +
                '<h4 class="link hidden">' +
                  '<a href="<%= item.url %>" target="_blank"><%= item.url %></a>' +
                '</h4>'+
              '<% } %>' +    
            '<% }); %>' +
          '<% } %>' +          
          '<p class="tag-margin"><%= tagString %></p>' +
        '</div>' +
      '</div>' +
    '</div>'
  ),

  initialize: function(){
    this.render();
    var that = this;
    $(document).ready(function(){
      $('.pie-button').on('click',function(e){
        var classes =$(e.currentTarget).find('.pieChart').attr('class').split(' ');
        that.createPieChart(5, true, '#modal-chart', classes[1]);
      });
    });
  },

  events: {
    "click .fa-info-circle": function(){this.show('brief')},
    "click .fa-link": function(){this.show('link')},
    "click .inline-pie": function(){this.enlarge()}
  },

  render: function(){
    this.concatTags();
    this.checkCreator();
    this.createPieChart(1, false, '#chart');
    this.$el.html(this.template(this.model.attributes));
    this.$el.appendTo('.wide-container');
  },

  concatTags: function(){
    var tags = this.model.attributes.tags;
    var tagString = "";
    _.each(tags, function(tag){
      tagString += ('<a href="/tag/' + tag + '"><span class="tag">' + tag + '</span></a>');
    });
    this.model.set('tagString', tagString);
  },

  checkCreator: function(){
    var creator = this.model.attributes.creator;
    if(creator === null){
      this.model.set('creator', {
        'username': 'null', 
        'uid': 'unull'
      });
    }
  },

  createPieChart: function(size, labels, location, subset){
    var w = 35 * size;
    var h = 35 * size;
    var r = Math.min(w, h) / 2;;
    var color = d3.scale.category10();
    var agrees = disagrees = 0;
    if(subset){
      _.forEach(feedCollection.data.feeds[0].assertions, function(item){
        if(item.aid === subset){
          agrees = item.stat_agrees;
          disagrees = item.stat_disagrees;
        }
      });
    }else{
      agrees = this.model.attributes.stat_agrees;
      disagrees = this.model.attributes.stat_disagrees;
    }
    
    if(agrees === 0 && disagrees === 0){
      agrees = disagrees =1;
    }
    var data = [
      {"label":"Agree", "value": agrees}, 
      {"label":"Disagree", "value": disagrees}
    ];
    console.log(data);
    var vis = d3.select(location)
      .append('div').classed("inline-pie", true).classed(this.model.attributes.aid, true)
      .append('button').classed('pie-button', true)
      .attr('type', 'button').attr('data-toggle', 'modal').attr('data-target','#myModal')
      .append("svg").data([data])
      .attr("width", w)
      .attr("height", h)
      .append("g")
      .classed("pieChart", true)
      .classed(this.model.attributes.aid, true)
      .attr("transform", "translate(" + r + "," + r + ")");
    
    var pie = d3.layout.pie()
      .value(function(d){return d.value;});

    var arc = d3.svg.arc().outerRadius(r);

    var arcs = vis.selectAll("g.slice")
      .data(pie).enter()
      .append("g")
      .attr("class", "slice");
    
    arcs.append("path")
        .attr("fill", function(d, i){
            if(i % 2 === 1){
                return "#B80000";
              }else{
                return "#008A2E";
              }
        })
        .attr("d", function (d) {
            return arc(d);
        });

    if(labels){
      arcs.append("text")
        .attr("transform", function(d){
            d.innerRadius = 0;
            d.outerRadius = r;
          return "translate(" + arc.centroid(d) + ")";}).attr("text-anchor", "middle").text( function(d, i) {
          return data[i].label;}
          );
    }
  },

  show: function(type){
    var matchString1 = "." + this.model.attributes.aid + " ." + type;
    var matchString2 = "." + this.model.attributes.aid + " ." + type;
    if($(matchString2).hasClass("hidden")){
       $(matchString1).removeClass("hidden");
    }else{
       $(matchString2).addClass("hidden");
    }
  },

  enlarge: function(){
    console.log('working');
  }

});
