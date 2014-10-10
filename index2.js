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
                            { name: "two",
                            value: 6 },
                            { name: "three",
                            value: -16 },
                            { name: "4",
                            value: -5 }
                        ]
                    },
                    {
                        name: "",
                        value: 7,
                        contents: [
                            { name: "9" ,
                            value: 19
                        },
                        { name: "15" ,
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
                                    { name: "6",
                                    value: 19 },
                                    { name: "7",
                                    value: -55 },
                                    { name: "8",
                                    value: -19 }
                                ]
                            },
                            {
                                name: "",
                                value: 5,
                                contents: [
                                    { name: "ten",
                                    value: -12 }
                                ]
                            },
                            {
                                name: "",
                                value: -12,
                                contents: [
                                    { name: "11",
                                    value: 4},
                                    {
                                        name: "",
                                        value: 4,
                                        contents: [
                                        { name: "4",
                                        value: 4},
                                        { name: "13",
                                        value: 1},
                                        { name: "14",
                                        value: 6}
                                        ]
                                     }
                                ]
                            },
                            {
                                name: "",
                                value: 3,
                                contents: [
                                    { name: "1",
                                    value: -4 }
                                ]
                            }
                        ]
                    },
                    {
                        name: "5",
                        value: -20,
                        contents: []
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

        // jQuery("img.svg").each(function(){
        //     var $img = jQuery(this);
        //     var imgID = $img.attr('id');
        //     var imgClass = $img.attr('class');
        //     var imgURL = $img.attr('src');


        //     jQuery.get(imgURL, function(data) {
        //         // Get the SVG tag, ignore the rest
        //         var $svg = jQuery(data).find('svg');

        //         // Add replaced image's ID to the new SVG
        //         if(typeof imgID !== 'undefined') {
        //             $svg = $svg.attr('id', imgID);
        //         }
        //         // Add replaced image's classes to the new SVG
        //         if(typeof imgClass !== 'undefined') {
        //             $svg = $svg.attr('class', imgClass+' replaced-svg');
        //         }

        //         // Remove any invalid XML tags as per http://validator.w3.org
        //         $svg = $svg.removeAttr('xmlns:a');

        //         // Replace image with new SVG
        //         $img.replaceWith($svg);
        //         console.log($svg);
        //     }, 'xml');

        // });
        nodeGroup.append("svg:image")
            .attr("id", "leaf")
            .attr("xlink:href", "svg-leave3.svg")
            .attr("width", 20)
            .attr("height", 20)
            .attr("transform", "translate(-10,-10)");


        // var leaf = document.getElementById("leaf");
        //  $('img.svg').each(function(){
        //     var $img = jQuery(this);
        //     var imgID = $img.attr('id');
        //     var imgClass = $img.attr('class');
        //     var imgURL = $img.attr('src');

        //     jQuery.get(imgURL, function(data) {
        //         // Get the SVG tag, ignore the rest
        //         var $svg = jQuery(data).find('svg');

        //         // Add replaced image's ID to the new SVG
        //         if(typeof imgID !== 'undefined') {
        //             $svg = $svg.attr('id', imgID);
        //         }
        //         // Add replaced image's classes to the new SVG
        //         if(typeof imgClass !== 'undefined') {
        //             $svg = $svg.attr('class', imgClass+' replaced-svg');
        //         }

        //         // Remove any invalid XML tags as per http://validator.w3.org
        //         $svg = $svg.removeAttr('xmlns:a');
        //         console.log($svg);
        //         // Replace image with new SVG
        //         $img.replaceWith($svg);

        //     }, 'xml');

        // });

        // var svgDoc = leaf.contentDocument;
        // console.log(leaf);
        // var svgItem = svgDoc.getElementById("leaf");
        // svgItem.setAttribute("fill", "purple");

        // var svg = nodeGroup.append("svg:path")
        //     .attr("width", 2)   // <-- Here
        //     .attr("height",2);

        // svg.attr("class", "leaf")
        //     .attr("d","m 15, 0 c 0.114788,-0.7208 -0.509927,-3.54 -0.677201,-4.1167 -0.168553,-0.5771 -1.391953,-2.6968 -1.391953,-2.6968 l 0.009,-0.065 c -0.50566,-2.179 -1.627074,-2.9144 -1.627074,-2.9144 -0.921711,-2.2609 -3.017748,-5.7708 -3.153444,-6.5926 -0.136123,-0.8214 -0.593138,-0.8185 -0.593138,-0.8185 -1.156832,5.5741 -7.352773,9.4127 -7.352773,9.4127 -2.270139,1.5325 -4.366603,3.5925 -4.366603,3.5925 -0.625568,1.0536 -2.235574,2.192 -2.7681177,2.5424 -0.5333972,0.3499 -0.7625446,0.7082 -1.183715,1.1321 -0.4207437,0.4239 -0.8542889,1.1739 -1.0761821,1.7117 -0.2231734,0.5383 -0.8939736,1.543 -0.8939736,1.543 -0.078516,0.1349 -0.1369764,0.2702 -0.1805016,0.413 -0.1600192,0.5241 -0.1280153,1.1476 -0.2026909,2.2 -0.094305,1.3388 0.2573108,2.3757 0.2573108,2.3757 1.162379,7.8516 7.1214921,5.7394 7.1214921,5.7394 1.100505,-0.6552 2.717338,-0.294 2.717338,-0.294 0.159166,1.5698 -3.449159,5.5649 -3.449159,5.5649 0.377219,0.5241 0.832953,0.1566 0.832953,0.1566 1.319838,-1.7113 3.410755,-5.3506 3.800348,-5.5402 0.390447,-0.1892 0.958835,0.1202 0.958835,0.1202 1.758077,2.8422 3.252016,2.8213 4.150257,2.9337 0.898667,0.1131 1.659932,-0.1195 2.187781,-0.2017 0.528277,-0.082 1.792642,-0.6686 2.389193,-1.0403 0.596551,-0.3716 0.853009,-0.9354 1.217852,-1.396 0.364844,-0.461 0.704511,-1.2749 0.704511,-1.2749 1.867744,-2.3273 1.883959,-4.1526 1.883959,-4.1526 -0.184342,-0.9166 0.128442,-2.367 0.128442,-2.367 1.095385,-4.0331 0.442933,-5.2471 0.557293,-5.9674 z")
        //     .attr("transform", "scale(.5)")
        //     .style("width", " 5")
        //     .style("height", "5")
        //     .attr("transform", "translate(0,-14)");


        // nodeGroup.select(".leaf").style("height", 5).style("width", 5).style("stroke", "orange");

        // nodeGroup.append("svg:text")
        //     .attr("text-anchor", function(d)
        //     {
        //         return d.children ? "end" : "start";
        //     })
        //     .attr("dx", function(d)
        //     {
        //         var gap = 2 * options.nodeRadius;
        //         return d.children ? -gap : gap;
        //     })
        //     .attr("dy", 3)
        //     .text(function(d)
        //     {
        //         return d.name;
        //     });
    }// close build tree

    var dur = 0;
    var matchedLinks = [];

    function setupMouseEvents(){

        ui.nodeGroup.on('mouseover', function(d, i)
        {
            d3.select(this).select("image")
            .attr('href','svg-leave4.svg')
            .attr("height", "30px")
            .attr("width", "30px")
            .classed("hovers", true);

        })
            .on('mouseout', function(d, i)
            {
            d3.select(this).select("image")
            .attr('href','svg-leave3.svg')
            .attr("height", "20px")
            .attr("width", "20px")
            .classed("hovers", false);
            })
            .on('click', function(nd, i)
            {
                 d3.select(this)
                .append("svg:image")
                .attr("xlink:href", "svg-leave4.svg")
                .attr("width", 22)
                .attr("height", 22)
                .attr("transform", "translate(-9,-11)");

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
                soundManager.play(track);

           });
        }

    function animateParentChain(links){
        var linkRenderer = d3.svg.diagonal()
            .projection(function(d){
                  if(d.value !=undefined){
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
            .attr("y", overlayBox.y -940)
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
          id: 'two', // optional: provide your own unique id
          url: 'PIano Improvs6-first tree2.mp3',
          multiShot: false,
          onload: function() {
            if( this.readyState === 2 ) {
            soundDuration = this.duration;
            // console.log(soundDuration);
            setTimeout(function(){
            //     dur = soundManager.getSoundById(track).duration
            // var dur = soundManager.getSoundById(track).duration;
            //     console.log(dur);
            animateParentChain(matchedLinks,soundManager);
                },2500);
                }
            }
        });
          soundManager.createSound({
          id: 'three', // optional: provide your own unique id
          url: 'PIano Improvs6-first tree3.mp3',
          multiShot: false,
          onload: function() {
            if( this.readyState === 3 ) {
            soundDuration = this.duration;
            console.log(soundDuration);
                }
            }
        });
          soundManager.createSound({
          id: 'ten', // optional: provide your own unique id
          url: 'http://api.soundcloud.com/tracks/155037359' + sid,
          multiShot: false,
            onload: function() {
              if( this.readyState === 3 ) {
                soundDuration = this.duration + 1000;
                    // setTimeout(function(){
                    //     dur = soundManager.getSoundById(track).duration
                    // var dur = soundManager.getSoundById(track).duration;
                    //     console.log(dur);
                    animateParentChain(matchedLinks,soundManager);
                    // },2500);
              }
          console.log(soundDuration);
            }
          });
        }//close onreay
    });//close soundmanager setup

    $(function(){
        buildTree("#tree-container");
    });
});