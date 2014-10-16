$(document).ready(function(){

    var treeData = {
        name: "Grove",
        value: 1,
        contents: [
            {name: "First Tree",
            value: -6,
            contents: [
                {   name: "",
                    value: -13,
                    contents: [
                    {
                        name: "",
                        value: -17,
                        contents: [
                            { name: "1T2",
                            value: 6 },
                            { name: "1T3",
                            value: -16 },
                            { name: "1T4",
                            value: -5 }
                        ]
                    },
                    {
                        name: "",
                        value: 7,
                        contents: [
                            { name: "1T9" ,
                            value: 19
                            },
                            { name: "1T15" ,
                                value: -5}
                            ]
                        },
                    {
                        name: "",
                        value: 1,
                        contents: [
                            {
                                name: "",
                                value: -18,
                                contents: [
                                    { name: "1T6",
                                    value: 19 },
                                    { name: "1T7",
                                    value: -55 },
                                    { name: "1T8",
                                    value: -19 }
                                ]
                            },
                            {
                                name: "",
                                value: 5,
                                contents: [
                                    { name: "1T10",
                                    value: -12 }
                                ]
                            },
                            {
                                name: "",
                                value: -12,
                                contents: [
                                    { name: "1T11",
                                    value: 4},
                                    {
                                        name: "",
                                        value: 4,
                                        contents: [
                                        { name: "1T12",
                                        value: 4},
                                        { name: "1T13",
                                        value: 1},
                                        { name: "1T14",
                                        value: 6}
                                        ]
                                     }
                                ]
                            },
                            {
                                name: "",
                                value: 3,
                                contents: [
                                    { name: "1T1",
                                    value: -4 }
                                ]
                            }
                        ]
                    },
                    {
                        name: "1T5",
                        value: -20
                    }
                ]
                },
                ]

            },
            {
            name: "Second Tree",
            value: 4,
            contents: [
                {   name: "",
                    value: 4,
                    contents: [
                            {
                                name: "2T1",
                                value: 4
                             }
                        ]
                    },
                    {
                        name: "",
                        value: 6,
                        contents: [
                            {
                                name: "2T2",
                                value: 14
                                 },
                            {
                                name: "2T3",
                                value: 4 }
                        ]
                    },
                    {
                        name: "",
                        value: 4,
                        contents: [
                            {
                                name: "2T4",
                                value: -39 },
                            {
                                name: "2T5",
                                value: 6 },
                            {
                                name: "2T6",
                                value: -14 },
                            {
                                name: "2T7",
                                value: 6 },
                            {
                                name: "2T8",
                                value: 60 },
                            {
                                name: "",
                                value: 4,
                                contents: [
                                    {
                                        name: "2T9",
                                        value: -6 },
                                    {
                                        name: "2T10",
                                        value: 2,
                                        contents: [
                                            {
                                                name: "2T11",
                                                value: 18
                                            },
                                            {
                                                name: "2T12",
                                                value: 15
                                            },
                                        ]
                                    },
                                    ]
                            },
                            {
                                name: "",
                                value: 2,
                                contents: [
                                    {
                                        name: "2T13",
                                        value: 15 },
                                    {
                                        name: "2T14",
                                        value: -6 },
                                    {
                                        name: "2T15",
                                        value: 4
                                    }
                                    ]
                            },
                        ]
                }
            ]
        },
        {
        name: "Third Tree",
        value: 6,
        contents: [
            {
                name: "",
                value: 14,
                contents: [
                {
                    name: "",
                    value: 4,
                    contents: [
                        {
                        name: "",
                        value: 4,
                        contents:[
                            {
                                name: "3T1",
                                value: -4 }
                        ]
                    },
                    ]
                },
                {
                    name: "",
                    value: 4,
                    contents: [
                        {
                            name: "3T2",
                            value: 7 },
                        {
                            name: "3T3",
                            value: -4 },
                        {
                            name: "3T4",
                            value: 4 },
                        {
                            name: "3T5",
                            value: 1,
                            contents: [
                                {
                                    name: "3T12",
                                    value: -9 },
                                {
                                    name: "3T13",
                                    value: 12 },
                                {
                                    name: "3T14",
                                    value: 8 },
                                {
                                    name: "3T15",
                                    value: -6 },
                                {
                                    name: "3T16",
                                    value: 4 }
                                ]
                                },
                        {
                            name: "3T6",
                            value: 2 },
                        {
                            name: "3T7",
                            value: -44 },
                        {
                            name: "3T8",
                            value: 7 },
                        {
                            name: "3T9",
                            value: -23 },
                        {
                            name: "3T10",
                            value: 9 },
                        {
                            name: "3T11",
                            value: 4 }
                    ]
                },
                {
                    name: "",
                    value: -6,
                    contents: [
                        {
                            name: "",
                            value: -2,
                            contents: [
                                {
                                    name: "3T17",
                                    value: -3 },
                                {
                                    name: "3T18",
                                    value: 8 },
                                {
                                    name: "",
                                    value: 12,
                                    contents: [
                                        {
                                            name: "3T19",
                                            value: 11  },
                                        {
                                            name: "3T20",
                                            value: -4 }
                                        ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 2,
                    contents: [
                        {
                            name: "",
                            value: -2,
                            contents: [
                                {
                                    name: "3T21",
                                    value: 8 },
                                {
                                    name: "3T22",
                                    value: -2 },
                                {
                                    name: "",
                                    value: -12,
                                    contents: [
                                        {
                                            name: "3T24",
                                            value: 11  },
                                        {
                                            name: "3T25",
                                            value: -4 }
                                        ]
                                },
                                {
                                    name: "",
                                    value: 2,
                                    contents: [
                                        {
                                            name: "3T23",
                                            value: -4 }
                                        ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 28,
                    contents: [
                        {
                            name: "",
                            value: -10,
                            contents: [
                            {
                                    name: "3T26",
                                    value: -42  },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 6,
                    contents: [
                    {
                            name: "",
                            value: 10,
                            contents: [
                            {
                                    name: "3T27",
                                    value: 1  },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 4,
                    contents: [
                    {
                            name: "",
                            value: -4,
                            contents: [
                            {
                                    name: "3T28",
                                    value: 12  },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 3,
                    contents: [
                    {
                            name: "",
                            value: -18,
                            contents: [
                            {
                                    name: "3T29",
                                    value: -15  },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 12,
                    contents: [
                    {
                            name: "",
                            value: 6,
                            contents: [
                            {
                                    name: "",
                                    value: 7,
                                    contents: [
                                    {
                                            name: "3T30",
                                            value: 12  },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "",
                    value: 6,
                    contents: [
                    {
                            name: "",
                            value: -10,
                            contents: [
                            {
                                    name: "3T31",
                                    value: 12  },
                            ]
                        },
                    ]
                }
                ]
            }
            ]
        },
        {
        name: "Forth Tree",
        value: 6,
        contents: [
            {
                 name: "",
                value: 4,
                contents: [
                {
                        name: "",
                        value: 4,
                        contents: [
                        {
                                name: "4T1",
                                value: 4 },
                        ]
                    }
                    ]
                },
                {
                 name: "",
                value: 6,
                contents: [
                {
                        name: "",
                        value: -10,
                        contents: [
                        {
                                name: "4T2",
                                value: 13  },
                        {
                                name: "4T3",
                                value: 2  },
                        {
                                name: "",
                                value: -12,
                                contents: [
                            {
                                    name: "4T4",
                                    value: 6  }
                                ]
                            },
                        ]
                    }
                    ]
                },
                {
                 name: "",
                value: -4,
                contents: [
                {
                        name: "4T5",
                        value: 14,

                    }
                    ]
                },
                {
                 name: "",
                value: 6,
                contents: [
                {
                        name: "",
                        value: -10,
                        contents: [
                        {
                                name: "4T6",
                                value: 13  },
                        {
                                name: "",
                                value: -12,
                                contents: [
                            {
                                    name: "4T7",
                                    value: 19 }
                                ]
                            },
                            {
                            name: "",
                            value: 2,
                            contents: [
                                {
                                        name: "4T8",
                                        value: -5  }
                                    ]
                            },
                            {
                            name: "",
                            value: -2,
                            contents: [
                                {
                                        name: "",
                                        value: 8 ,
                                        contents: [
                                    {
                                            name: "4T9",
                                            value: -7  }
                                        ]
                                        },
                                    ]
                            },
                            {
                            name: "",
                            value: 4,
                            contents: [
                                {
                                        name: "4T10",
                                        value: 6,
                                        contents: [
                                    {
                                            name: "4T9",
                                            value: 13  }
                                        ]  }
                                    ]
                            },
                            {
                            name: "",
                            value: 2,
                            contents: [
                                {
                                        name: "4T11",
                                        value: 17 }
                                    ]
                            },
                        ]
                    },
                    ]
                },
                ]
        },
        {
        name: "Fifth Tree",
        value: 6,
        contents: [
            {
                 name: "",
                value: 4,
                contents: [
                {
                        name: "5T1",
                        value: 4
                    }
                    ]
                },
                {
                 name: "",
                value: 6,
                contents: [
                {
                        name: "5T2",
                        value: -10
                    }
                    ]
                },
                {
                 name: "",
                value: -4,
                contents: [
                {
                        name: "5T3",
                        value: 14,

                    }
                    ]
                },
                {
                 name: "",
                value: 16,
                contents: [
                {
                        name: "",
                        value: 10,
                        contents: [
                        {
                                name: "5T6",
                                value: 13  }
                        ]
                    },
                    ]
                },
                {
                 name: "",
                value: -4,
                contents: [
                {
                        name: "5T4",
                        value: 14,

                    }
                    ]
                },
                {
                 name: "",
                value: 10,
                contents: [
                {
                        name: "5T5",
                        value: -14,

                    }
                    ]
                },
                {
                 name: "",
                value: -4,
                contents: [
                {
                        name: "5T7",
                        value: -33,

                    }
                    ]
                },
                {
                 name: "",
                value: -4,
                contents: [
                {
                        name: "5T8",
                        value: -69,

                    }
                    ]
                },
                {
                 name: "",
                value: 4,
                contents: [
                {
                        name: "5T9",
                        value: 19,

                    }
                    ]
                },
                {
                 name: "",
                value: 14,
                contents: [
                {
                        name: "5T10",
                        value: 5

                    }
                    ]
                }
                ]
         },
        {
        name: "Sixth Tree",
        value: 16,
        contents: [
            {
                 name: "",
                value: 4,
                contents: [
                    {
                         name: "",
                        value: 4,
                        contents: [
                            {
                                 name: "",
                                value: 4,
                                contents: [
                                {
                                        name: "6T1",
                                        value: 4
                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 6,
                                contents: [
                                {
                                        name: "6T2",
                                        value: -10
                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "6T3",
                                        value: 14,

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 16,
                                contents: [
                                {
                                        name: "6T6",
                                        value: 10
                                    },
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "6T4",
                                        value: -23,

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 10,
                                contents: [
                                {
                                        name: "6T5",
                                        value: 34,

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "",
                                        value: -3,
                                        contents: [
                                        {
                                                name: "6T12",
                                                value: 21
                                        }
                                        ]
                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "",
                                        value: -2,
                                        contents: [
                                        {
                                                name: "",
                                                value: 6,
                                                contents: [
                                                {
                                                    name: "6T14",
                                                    value: 16,

                                                }
                                                ]
                                        }
                                        ]
                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "",
                                        value: -9,
                                        contents: [
                                        {
                                                name: "6T13",
                                                value: -21
                                        }
                                        ]
                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 1,
                                contents: [
                                {
                                        name: "6T10",
                                        value: 5

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: -4,
                                contents: [
                                {
                                        name: "6T11",
                                        value: -15

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 16,
                                contents: [
                                {
                                        name: "6T7",
                                        value: -45

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 11,
                                contents: [
                                {
                                        name: "6T9",
                                        value: -15

                                    }
                                    ]
                                },
                                {
                                 name: "",
                                value: 14,
                                contents: [
                                {
                                        name: "6T8",
                                        value: -25

                                    }
                                    ]
                                }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
        name: "Seventh Tree",
        value: 10,
        contents: [
            {
                 name: "",
                value: 4,
                    contents: [
                    {
                            name: "7T1",
                            value: 14
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 6,
                    contents: [
                    {
                            name: "7T2",
                            value: -1
                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "7T3",
                            value: 44,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: 16,
                    contents: [
                    {
                            name: "7T4",
                            value: 13
                        },
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "7T5",
                            value: 3,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: 10,
                    contents: [
                    {
                            name: "7T6",
                            value: 11,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "",
                            value: 9,
                            contents: [
                            {
                                    name: "7T7",
                                    value:-66
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "",
                            value: -8,
                            contents: [
                            {
                                    name: "7T8",
                                    value: 16
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 4,
                    contents: [
                    {
                            name: "",
                            value: -9,
                            contents: [
                            {
                                    name: "7T9",
                                    value: -13
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 1,
                    contents: [
                    {
                            name: "",
                            value: 5,
                            contents: [
                            {
                                    name: "7T10",
                                    value: 5
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "",
                            value: 0,
                            contents: [
                            {
                                    name: "7T11",
                                    value: -19
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 16,
                    contents: [
                    {
                            name: "",
                            value: -5,
                            contents: [
                            {
                                    name: "7T12",
                                    value: -13
                            }
                            ]
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 11,
                    contents: [
                    {
                            name: "7T13",
                            value: -15

                        }
                        ]
                    },
                    {
                     name: "",
                    value: 14,
                    contents: [
                    {
                            name: "7T14",
                            value: -25

                    },
                    {
                            name: "7T15",
                            value: 4
                        }
                        ]
                    },
                    {
                     name: "",
                    value: 6,
                    contents: [
                    {
                            name: "7T16",
                            value: -10
                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "7T17",
                            value: 14,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: 16,
                    contents: [
                    {
                            name: "7T18",
                            value: 10
                        },
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "7T19",
                            value: -23,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: 10,
                    contents: [
                    {
                            name: "7T20",
                            value: 34,

                        }
                        ]
                    },
                    {
                     name: "",
                    value: -4,
                    contents: [
                    {
                            name: "",
                            value: -3,
                            contents: [
                            {
                                    name: "7T21",
                                    value: 21
                            }
                            ]
                        }
                        ]
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
        };
    }

    var ui;

    function buildTree(containerName, customOptions)
    {
        // build the options object
        var options = $.extend({
            nodeRadius: 4, fontSize: 12
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
        var size = { width:$(containerName).outerWidth() , height: (totalNodes * 4) };
        var tree = d3.layout.tree()
            .sort(null)
            .size([size.width -15, size.height - 40])
            .children(function(d)
            {
                return (!d.contents || d.contents.length === 0) ? null : d.contents;
            });

        var nodes = tree.nodes(treeData);
        var links = tree.links(nodes);
        var svgRoot = d3.select(containerName)
            .append("svg:svg").attr("height", size.height+10).attr("width", size.width);
                 // Add the clipping path
        svgRoot.append("svg:clipPath").attr("id", "clipper")
            .append("svg:rect")
            .attr('id', 'clip-rect');

        var layoutRoot = svgRoot
            .append("svg:g")
            .attr("class", "container")
            .attr("transform", "translate(5," + size.height + ")");

        // Edges between nodes as a <path class="link" />
        var link = d3.svg.diagonal()
            .projection(function(d)
            { if(d.value !=undefined){
                return [(d.x - d.value) , (-d.y + d.value) ];
            }
            else{
                return [d.x , (-d.y ) ];
            }
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

        var nodeGroup = layoutRoot.selectAll("g.node")
            .data(nodes)
            .enter()
            .append("svg:g")
            .attr("class", "node")
            .attr("transform", function(d)
            {
                var transpointx = d.x - d.value;
                var transpointy = -d.y + d.value;
                return "translate(" + transpointx + "," + transpointy + ")";
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

            nodeGroup.append("svg:image")
                .attr("id", "leaf")
                .attr("xlink:href", "svg-leave3.svg")
                .attr("width", 20)
                .attr("height", 20)
                .attr("transform", "translate(-10,-10)");

    }// close build tree

    var dur = 0;
    var matchedLinks = [];

    function setupMouseEvents(){
        ui.nodeGroup.on('mouseover', function(d, i)
            {if(d.name != ""){
                    d3.select(this).select("image")
                    .attr('href','svg-leave4.svg')
                    .attr("height", "24px")
                    .attr("width", "24px")
                    .classed("hovers", true);
                    }
            })
            .on('mouseout', function(d, i)
            {if(d.name != ""){
                    d3.select(this).select("image")
                    .attr('href','svg-leave3.svg')
                    .attr("height", "20px")
                    .attr("width", "20px")
                    .classed("hovers", false);
                    }
            })
            .on('click', function(nd, i)
            {if(nd.name != ""){
                d3.select(this).select("image")
                    .attr('href','svg-leave4.svg')
                    .attr("height", "24px")
                    .attr("width", "24px");
                //animate leaf falling
                d3.select(this).select("image")
                    .transition()
                    .attr("transform", "translate(-25,35) rotate(75)")
                    .duration(1600)
                    .delay(800)
                    .transition()
                    .attr("transform", "translate(15,80) rotate(25)")
                    .duration(1600)
                    .delay(2000)
                    .transition()
                    .attr("transform", "translate(-25,135) rotate(75)")
                    .duration(1600)
                    .delay(3200)
                    .transition()
                    .attr("transform", "translate(35,185) rotate(25)")
                    .duration(1600)
                    .delay(4400)
                    .transition()
                    .attr("transform", "translate(-45,235) rotate(75)")
                    .duration(1600)
                    .delay(5600)
                    .transition()
                    .attr("transform", "translate(35,285) rotate(25)")
                    .duration(1600)
                    .delay(6800)
                    .transition()
                    .attr("transform", "translate(-45,335) rotate(75)")
                    .duration(1600)
                    .delay(8000)
                    .transition()
                    .attr("transform", "translate(35,385) rotate(25)")
                    .duration(1600)
                    .delay(9200)
                    .transition()
                    .attr("transform", "translate(-45,435) rotate(75)")
                    .duration(1600)
                    .delay(10400)
                    .transition()
                    .attr("transform", "translate(35,485) rotate(25)")
                    .duration(1600)
                    .delay(11600)
                    .transition()
                    .attr("transform", "translate(-45,535) rotate(75)")
                    .duration(1600)
                    .delay(12800)
                    .transition()
                    .attr("transform", "translate(35,585) rotate(25)")
                    .duration(1600)
                    .delay(14000)
                    .transition()
                    .attr("transform", "translate(-45,635) rotate(75)")
                    .duration(1600)
                    .delay(15200)
                    .transition()
                    .attr("transform", "translate(35,685) rotate(25)")
                    .duration(1600)
                    .delay(16400)
                    .transition()
                    .attr("transform", "translate(-45,735) rotate(75)")
                    .duration(1600)
                    .delay(17600)
                    .transition()
                    .attr("transform", "translate(35,785) rotate(25)")
                    .duration(1600)
                    .delay(18800)
                    .remove();

                // Walk parent chain
                var ancestors = [];
                var parent = nd;
                while (!_.isUndefined(parent)) {
                    ancestors.push(parent);
                    parent = parent.parent;
                };

                // Get the matched links
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
                var last_element = matchedLinks[matchedLinks.length - 1];

                // SC.initialize({
                //     client_id: "d99a29c1a7bd281b1ef4a833d3ab6dad"
                //     //client secret e2e93639e0df982ea9aed3b69a7492f5
                // });
                var track = last_element.target.name;
                //play track
                soundManager.play(track);
                //set node to empty name so mouseout does not happen
                nd.name ="";
            }
           });
        }
        var nodeVPosition=0;
    function animateParentChain(links){
        var linkRenderer = d3.svg.diagonal()
            .projection(function(d){
                if(d.value !=undefined){
                    nodeVPosition = d.y;
                    return [(d.x - d.value) , (-d.y + d.value) ];
                    }
                else{
                    return [d.x , (-d.y ) ];
                    }
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
            .attr("x", overlayBox.x )
            .attr("y", 0)
            .attr("width", overlayBox.width)
            .attr("height", 50)
            .transition().duration(soundDuration)
            .ease("linear")
            .attr("y", overlayBox.y -(115 + nodeVPosition))
            .attr("height", 50);
    }
    //Soundmanager
    //set client id for soundcloud
    var sid = "/stream?client_id=d99a29c1a7bd281b1ef4a833d3ab6dad";

    soundManager.setup({
    // where to find flash audio SWFs, as needed
        url: '/.',
        onready: function() {
          soundManager.createSound({
            id: '1T1', // optional: provide your own unique id
            url: 'http://api.soundcloud.com/tracks/172116974' + sid + "&secret_token=s-CYxGt", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration;
                  animateParentChain(matchedLinks);
                  //animateParentChain(matchedLinks,soundManager);
                  }
              }
          });
          soundManager.createSound({
          id: '1T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172116956' + sid + "&secret_token=s-9HnGy", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172117721' + sid + "&secret_token=s-qzcMJ", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172119138' + sid + "&secret_token=s-lwzOl", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172119225' + sid + "&secret_token=s-cpQ68", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172118665' + sid + "&secret_token=s-MTWmf", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172118772' + sid + "&secret_token=s-VKzZY", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172119433' + sid + "&secret_token=s-WEo5Q", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172120469' + sid + "&secret_token=s-nV7U4", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172120103' + sid + "&secret_token=s-77h8w", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172121977' + sid + "&secret_token=s-zji5n", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T12', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172122199' + sid + "&secret_token=s-ymPae", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T13', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172121753' + sid + "&secret_token=s-IKMb3", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T14', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172122959' + sid + "&secret_token=s-0QnY4", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '1T15', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172122372' + sid + "&secret_token=s-HDAgE", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172305171' + sid + "&secret_token=s-RwJvB", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172311943' + sid + "&secret_token=s-c4m6L", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172313481' + sid + "&secret_token=s-qcVGw", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172314174' + sid + "&secret_token=s-iHBC7", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172314583' + sid + "&secret_token=s-Qs05v", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172314947' + sid + "&secret_token=s-Ar6Tw", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172315678' + sid + "&secret_token=s-uPKDC", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172317069' + sid + "&secret_token=s-U9now", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172318026' + sid + "&secret_token=s-HYM5t", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172319028' + sid + "&secret_token=s-NrWhz", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172320171' + sid + "&secret_token=s-L8cXc", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T12', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172321274' + sid + "&secret_token=s-Z7GYo", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T13', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172306530' + sid + "&secret_token=s-ts8qh", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T14', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172308438' + sid + "&secret_token=s-TuiD5", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '2T15', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172310642' + sid + "&secret_token=s-fXD8V", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/172322142' + sid + "&secret_token=s-x3Plg", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-lONGh", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T12', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T13', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T14', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T15', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T16', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T17', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T18', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T19', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T20', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-oY3JD", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T21', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka" , multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T22', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid  + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T23', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T24', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T25', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T26', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T27', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T28', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T29', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T30', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '3T31', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '4T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '5T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T12', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T13', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '6T14', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T1', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T2', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T3', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T4', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T5', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T6', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T7', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T8', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T9', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T10', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T11', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T12', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T13', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T14', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T15', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T16', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T17', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T18', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T19', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T20', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
          soundManager.createSound({
          id: '7T21', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid + "&secret_token=s-7IDka", multiShot: false,
            onload: function() {
              if( this.readyState ===3 ) {
                  soundDuration = this.duration ;
                  animateParentChain(matchedLinks);
                  }
              }
          });
        }//close onready
    });//close soundmanager setup

    $(function(){
        buildTree("#tree-container");
    });
});