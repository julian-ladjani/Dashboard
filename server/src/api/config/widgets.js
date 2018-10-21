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
                    p1   : {
                        name: {type:String, default:'pikachu'}
                    },
                    p2   : {
                        name: {type:String, default:'venusaur'}
                    },
                    p3   : {
                        name: {type:String, default:'lapras'}
                    },
                    p4   : {
                        name: {type:String, default:'charizard'}
                    },
                    p5   : {
                        name: {type:String, default:'snorlax'}
                    },
                    p6   : {
                        name: {type:String, default:'blastoise'}
                    },
                    shiny   : { type: Number, default: 0}
                },
                paramsInfo: {
                    p1   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    },
                    p2   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    },
                    p3   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    },
                    p4   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    },
                    p5   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    },
                    p6   : {
                        name: {
                            type: 'List',
                            content: require('../controllers/pokemon/PokemonList').getWidgetInfo,
                        }
                    }
                },
            }
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
                },
            },
            partner: {
                name: 'partner',
                description: 'My best partner',
                controller: require('../controllers/epitech/partner'),
                modelName: 'epitechpartner',
                params: {
                    autologin: {type: String, default: null},
                    partner: {type: Number, default: 3}
                },
            },
            planning: {
                name: 'planning',
                description: 'My planning',
                controller: require('../controllers/epitech/planning'),
                modelName: 'epitechplanning',
                params: {
                    autologin: {type: String, default: null},
                    begin: {type: String, default: moment().format('YYYY-MM-DD')},
                    days: {type: Number, default: 0},
                    semester: {type: String, default: '[0]'}
                },
                paramsInfo: {
                    begin: {
                        type: 'Date',
                        format: 'YYYY-MM-DD'
                    },
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
        }
    };
    generateWidgetsModel(widgetsConfig);
    return widgetsConfig;
};


module.exports = widgets();