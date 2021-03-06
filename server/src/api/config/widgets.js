'use strict';

const moment = require('moment');
const modelGenerator = require('../models/widget/generator');

function generateWidgetsModel(widgetsConfig) {
    let services = Object.keys(widgetsConfig);
    services.forEach(function (service) {
        let serviceObj = widgetsConfig[service];
        let widgets = Object.keys(serviceObj);
        widgets.forEach(function (widget) {
            if (widget !== 'name' && widget !== 'controller') {
                let widgetObj = serviceObj[widget];
                if (widgetObj.model === undefined)
                    widgetObj.model = modelGenerator(widgetObj.modelName, widgetObj.params)
            }
        });
    });
}

let widgets = function () {
    let widgetsConfig = {
        weather: {
            name: "weather",
            current: {
                name: 'current',
                description: 'Daily weather',
                controller: require('../controllers/weather/current'),
                modelName: 'weatherCurrent',
                params: {
                    city: {type: String, default: 'Nancy'},
                    country: {type: String, default: 'France'},
                },
            },
            forecast: {
                name: 'forecast',
                description: 'Weekly weather',
                controller: require('../controllers/weather/forecast'),
                modelName: 'weatherForecast',
                params: {
                    city: {type: String, default: 'Nancy'},
                    country: {type: String, default: 'France'},
                },
            },
        },
        pokemon: {
            name: 'pokemon',
            favorite: {
                name: 'favorite',
                description: 'My favorite pokemon',
                controller: require('../controllers/pokemon/favorite'),
                modelName: 'pokemonFavorite',
                params: {
                    pokemon: {type: String, default: 'pikachu'},
                    shiny: {type: Number, default: 0}
                },
                paramsInfo: {
                    pokemon: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                    },
                    shiny: {
                        type: 'Boolean',
                    }
                },
            },
            blind: {
                name: 'blind',
                description: 'Blindtest pokemon',
                controller: require('../controllers/pokemon/blind'),
                modelName: 'pokemonBlind',
                params: {
                    max_generation: {type: Number, default: 7},
                    min_generation: {type: Number, default: 1},
                    language: {type: String, default: 'en'},
                    shiny: {type: Number, default: 0},
                },
                paramsInfo: {
                    language: {
                        type: 'List',
                        content: ['de', 'en', 'fr', 'ja', 'ko', 'ru', 'zh-Hans', 'zh-Hant']
                    },
                    shiny: {
                        type: 'Boolean',
                    }
                },
            },
            type: {
                name: 'type',
                description: 'Type of pokemon',
                controller: require('../controllers/pokemon/type'),
                modelName: 'pokemonType',
                params: {
                    type: {type: String, default: '1'}
                },
                paramsInfo: {
                    type: {
                        type: 'List',
                        content: require('../controllers/pokemon/typeList').getWidgetInfo,
                    },
                },
            },
            team: {
                name: 'team',
                description: 'My team of pokemon',
                controller: require('../controllers/pokemon/team'),
                modelName: 'pokemonTeam',
                params: {
                    pokemon1: {type: String, default: 'pikachu'},
                    pokemon2: {type: String, default: 'venusaur'},
                    pokemon3: {type: String, default: 'lapras'},
                    pokemon4: {type: String, default: 'charizard'},
                    pokemon5: {type: String, default: 'snorlax'},
                    pokemon6: {type: String, default: 'blastoise'},
                    shiny: {type: Number, default: 0}
                },
                paramsInfo: {
                    pokemon1: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    pokemon2: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    pokemon3: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    pokemon4: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    pokemon5: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    pokemon6: {
                        type: 'List',
                        content: require('../controllers/pokemon/PokemonList').getWidgetInfo
                    },
                    shiny: {
                        type: 'Boolean',
                    }
                }
            },
        },
        nasa: {
            name: 'nasa',
            apod: {
                name: 'apod',
                description: 'Get picture of the day',
                controller: require('../controllers/nasa/apod'),
                modelName: 'nasaApod',
                params: {
                    date: {type: String, default: moment().format('YYYY-MM-DD')},
                    hd: {type: Number, default: 0}
                },
                paramsInfo: {
                    date: {
                        type: 'Date',
                        format: 'YYYY-MM-DD'
                    },
                    hd: {
                        type: 'Boolean',
                    }
                },
            },
            marsPhotos: {
                name: 'marsPhotos',
                description: 'Photos of Mars Rovers',
                controller: require('../controllers/nasa/marsPhotos'),
                modelName: 'nasaMarsPhoto',
                params: {
                    martianDay: {type: Number, default: 1000},
                    camera: {type: String, default: 'NAVCAM'},
                    page: {type: Number, default: 1},
                    rover: {type: String, default: 'Curiosity'}
                },
                paramsInfo: {
                    camera: {
                        type: 'List',
                        content: require('../controllers/nasa/marsPhotos').getCameraList,
                    },
                    rover: {
                        type: 'List',
                        content: require('../controllers/nasa/marsPhotos').getRoverList,
                    },
                },
            },
        },
        epitech: {
            name: 'epitech',
            messages: {
                name: 'messages',
                description: 'My notification epitech',
                controller: require('../controllers/epitech/message'),
                modelName: 'epitechMessage',
                params: {
                    autologin: {type: String, default: ''},
                    message: {type: String, default: 'message'}
                },
                paramsInfo: {
                    message: {
                        type: 'List',
                        content: ['coming', 'message', 'alert', 'missed']
                    },
                    autologin: {
                        type: 'Secret'
                    }
                },
            },
            partner: {
                name: 'partner',
                description: 'My best partner',
                controller: require('../controllers/epitech/partner'),
                modelName: 'epitechPartner',
                params: {
                    autologin: {type: String, default: null},
                    partner: {type: Number, default: 3}
                },
                paramsInfo: {
                    autologin: {
                        type: 'Secret'
                    }
                },
            },
            planning: {
                name: 'planning',
                description: 'My planning',
                controller: require('../controllers/epitech/planning'),
                modelName: 'epitechPlanning',
                params: {
                    autologin: {type: String, default: null},
                    begin: {type: String, default: moment().format('YYYY-MM-DD')},
                    days: {type: Number, default: 0},
                    semester: {type: String, default: '0'}
                },
                paramsInfo: {
                    begin: {
                        type: 'Date',
                        format: 'YYYY-MM-DD'
                    },
                    autologin: {
                        type: 'Secret'
                    },
                    semester: {
                        type: 'Checklist',
                        content: [
                            {
                              name:'semester 0',
                              value: '0'
                            },
                            {
                                name:'semester 1',
                                value: '1'
                            },
                            {
                                name:'semester 2',
                                value: '2'
                            },
                            {
                                name:'semester 3',
                                value: '3'
                            },
                            {
                                name:'semester 4',
                                value: '4'
                            },
                            {
                                name:'semester 5',
                                value: '5'
                            },
                            {
                                name:'semester 6',
                                value: '6'
                            },
                            {
                                name:'semester 7',
                                value: '7'
                            },
                            {
                                name:'semester 8',
                                value: '8'
                            },
                            {
                                name:'semester 9',
                                value: '9'
                            },
                            {
                                name:'semester 10',
                                value: '10'
                            },
                        ]
                    }
                },
            },
            user: {
                name: 'user',
                description: 'My profile epitech',
                controller: require('../controllers/epitech/user'),
                modelName: 'epitechUser',
                params: {
                    autologin: {type: String, default: null},
                },
                paramsInfo: {
                    autologin: {
                        type: 'Secret'
                    }
                },
            }
        },
        youtube: {
            name: 'youtube',
            videoInfo: {
                name: 'videoInfo',
                description: 'Information of Youtube video',
                controller: require('../controllers/youtube/videoInfo'),
                modelName: 'youtubeVideoInfo',
                params: {
                    videoUrl: {type: String, default: 'https://www.youtube.com/watch?v=MQP9MWCP0hk'}
                },
            },
            channelInfo: {
                name: 'channelInfo',
                description: 'Information of Youtube channel',
                controller: require('../controllers/youtube/channelInfo'),
                modelName: 'youtubeChannelInfo',
                params: {
                    channelUrl: {type: String, default: 'https://www.youtube.com/channel/UCHBuuCq9m1zUkIUqzWlhbIQ'}
                },
            },
        },
        github: {
            name: 'github',
            repos: {
                name:'repos',
                description: 'repository of user selected',
                controller: require('../controllers/gitHub/repo'),
                modelName: 'githubRepo',
                params: {
                    token: {type: String, default: ''},
                    user: {type: String, default:''}
                },
            },
            profile: {
                name:'profile',
                description: 'profile of user selected',
                controller: require('../controllers/gitHub/profile'),
                modelName: 'githubProfile',
                params: {
                    token: {type: String, default: ''},
                    user: {type: String, default:''}
                },
            }
        }
    };
    generateWidgetsModel(widgetsConfig);
    return widgetsConfig;
};


module.exports = widgets();