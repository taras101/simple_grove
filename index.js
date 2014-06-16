$(document).ready(function(){

var treeData = {
    name: "First Tree",
    contents: [
        {   name: "",
            contents: [
            {
                name: "",
                contents: [
                    { name: "two" },
                    { name: "three" },
                    { name: "4" }
                ]
            },
            {
                name: "",
                contents: [
                    { name: "9" }
                ]
            },
            {
                name: "",
                contents: [
                    {
                        name: "",
                        contents: [
                            { name: "6" },
                            { name: "7" },
                            { name: "8" }
                        ]
                    },
                    {
                        name: "",
                        contents: [
                            { name: "10" }
                        ]
                    },
                    {
                        name: "",
                        contents: [
                            { name: "11"},
                            {
                                name: "",
                                contents: [
                                { name: "12"},
                                { name: "13"},
                                { name: "14"}
                                ]
                             }
                        ]
                    },
                    {
                        name: "",
                        contents: [
                            { name: "1" }
                        ]
                    }
                ]
            },
            {
                name: "5",
                contents: []
            }
        ]
    }
    ]
};

function visit(parent, visitFn, childrenFn)
{
    if (!parent) return;

    visitFn(parent);

    var children = childrenFn(parent);
    if (children) {
        var count = children.length;
        for (var i = 0; i < count; i++) {
            visit(children[i], visitFn, childrenFn);
        }
    }
}

var ui;

function buildTree(containerName, customOptions)
{
    // build the options object
    var options = $.extend({
        nodeRadius: 5, fontSize: 22
    }, customOptions);


    // Calculate total nodes, max label length
    var totalNodes = 0;
    var maxLabelLength = 0;
    visit(treeData, function(d)
    {
        totalNodes++;
        maxLabelLength = Math.max(d.name.length, maxLabelLength);
    }, function(d)
    {
        return d.contents && d.contents.length > 0 ? d.contents : null;
    });

    // size of the diagram
    var padding  = 200;
    var size = { width:$(containerName).outerWidth() , height: (totalNodes * 17) + 200};

    var tree = d3.layout.tree()
        .sort(null)
        .size([size.height, size.width - maxLabelLength * options.fontSize])
        .children(function(d)
        {
            return (!d.contents || d.contents.length === 0) ? null : d.contents;
        });

    var nodes = tree.nodes(treeData);
    var links = tree.links(nodes);


    /*
     <svg>
     <g class="container" />
     </svg>
     */
    var svgRoot = d3.select(containerName)
        .append("svg:svg").attr("width", size.width).attr("height", size.height);

    // Add the clipping path
    svgRoot.append("svg:clipPath").attr("id", "clipper")
        .append("svg:rect")
        .attr('id', 'clip-rect');

    var layoutRoot = svgRoot
        .append("svg:g")
        .attr("class", "container")
        .attr("transform", "translate(" + maxLabelLength + ",600)");


    // Edges between nodes as a <path class="link" />
    var link = d3.svg.diagonal()
        .projection(function(d)
        {
            return [d.x, -d.y ];
        });

    var linkGroup = layoutRoot.append("svg:g");

    linkGroup.selectAll("path.link")
        .data(links)
        .enter()
        .append("svg:path")
        .attr("class", "link")
        .attr("d", link);


    var animGroup = layoutRoot.append("svg:g")
        .attr("clip-path", "url(#clipper)");

    /*
     Nodes as
     <g class="node">
     <circle class="node-dot" />
     <text />
     </g>
     */
    var nodeGroup = layoutRoot.selectAll("g.node")
        .data(nodes)
        .enter()
        .append("svg:g")
        .attr("class", "node")
        .attr("transform", function(d)
        {
            return "translate(" + d.x + "," + (-d.y) + ")";
        });

    // Cache the UI elements
    ui = {
        svgRoot: svgRoot,
        nodeGroup: nodeGroup,
        linkGroup: linkGroup,
        animGroup: animGroup
    };

    // Attach the hover and click handlers
    setupMouseEvents();

    nodeGroup.append("svg:circle")
        .attr("class", "node-dot")
        .attr("r", options.nodeRadius);

    nodeGroup.append("svg:text")
        .attr("text-anchor", function(d)
        {
            return d.children ? "end" : "start";
        })
        .attr("dx", function(d)
        {
            var gap = 2 * options.nodeRadius;
            return d.children ? -gap : gap;
        })
        .attr("dy", 3)
        .text(function(d)
        {
            return d.name;
        });

}

function setupMouseEvents()
{
    ui.nodeGroup.on('mouseover', function(d, i)
    {
        d3.select(this).select("circle").classed("hover", true);
    })
        .on('mouseout', function(d, i)
        {
            d3.select(this).select("circle").classed("hover", false);
        })
        .on('click', function(nd, i)
        {
            // Walk parent chain
            var ancestors = [];
            var parent = nd;
            while (!_.isUndefined(parent)) {
                ancestors.push(parent);
                parent = parent.parent;
            }

            // Get the matched links
            var matchedLinks = [];
            ui.linkGroup.selectAll('path.link')
                .filter(function(d, i)
                {
                    return _.any(ancestors, function(p)
                    {
                        return p === d.target;
                    });
                })
                .each(function(d)
                {
                    matchedLinks.push(d);
                });

            animateParentChain(matchedLinks);
        });
}

function animateParentChain(links)
{
    var linkRenderer = d3.svg.diagonal()
        .projection(function(d)
        {
            return [d.x, -d.y];
        });

    // Links
    ui.animGroup.selectAll("path.selected")
        .data([])
        .exit().remove();

    ui.animGroup
        .selectAll("path.selected")
        .data(links)
        .enter().append("svg:path")
        .attr("class", "selected")
        .attr("d", linkRenderer);

    // Animate the clipping path
    var overlayBox = ui.svgRoot.node().getBBox();

    ui.svgRoot.select("#clip-rect")
        .attr("x", overlayBox.x + overlayBox.width)
        .attr("y", overlayBox.y -600)
        .attr("width", 0)
        .attr("height", overlayBox.height)
        .transition().duration(3500)
        .attr("x", overlayBox.x- 20)
        .attr("width", overlayBox.width);
}
    $(function(){
        buildTree("#tree-container");
    });
    soundManager.setup({
  // where to find flash audio SWFs, as needed
  url: '/.',
  onready: function() {
    // SM2 is ready to play audio!
     soundManager.createSound({
      id: 'two', // optional: provide your own unique id
      url: 'PIano Improvs6-first tree2.mp3',
      multiShot: false
    });
      soundManager.createSound({
      id: 'three', // optional: provide your own unique id
      url: 'PIano Improvs6-first tree3.mp3',
      multiShot: false
    });


    ui.nodeGroup.on("click",click)
    function click(d)
{
    var track = d.name;
    soundManager.play(track);
}
    // $(playNode).on("click", function(){

    //     alert("hi")
    // })

    // playNode[0].on("click", function(){
    //     mySound.play();
    // })
    // mySound.play();
  }
});
});