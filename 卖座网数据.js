//正在热映数据
let nowPlayingArr = [{
    "id": 4311,
    "name": "碟中谍6：全面瓦解",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/f250c1b1b54861e1d81bcb532d42fd93.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/4733acd323f10449cf83cd49ea240110.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/4733acd323f10449cf83cd49ea240110.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "全面瓦解",
    "premiereAt": 1535644800000,
    "grade": "8.5",
    "watchCount": 0,
    "cinemaCount": 217,
    "scheduleCount": 4746,
    "isPromotion": true,
    "isNowPlaying": true,
    "isComingSoon": "",
    "isPresold": ""
}, {
    "id": 4356,
    "name": "阿尔法：狼伴归途",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/b355fb24a76b25fe7baac548cf660d19.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/d59714f3db7ee5188eda9b4711e8bd7b.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/d59714f3db7ee5188eda9b4711e8bd7b.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "狼性仁心  非凡历险",
    "premiereAt": 1536249600000,
    "grade": "8.5",
    "watchCount": 0,
    "cinemaCount": 217,
    "scheduleCount": 2139,
    "isPromotion": true,
    "isNowPlaying": true,
    "isComingSoon": "",
    "isPresold": ""
}, {
    "id": 4360,
    "name": "黄金兄弟",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/89e79e0e2560f5d26e695b476e8997fd.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/7affbfe709c89903bb2a08880841513d.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/7affbfe709c89903bb2a08880841513d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "好兄弟 有今生  有来世",
    "premiereAt": 1537459200000,
    "grade": "8.0",
    "watchCount": 0,
    "cinemaCount": 7,
    "scheduleCount": 73,
    "isPromotion": true,
    "isNowPlaying": true,
    "isComingSoon": "",
    "isPresold": ""
}, {
    "id": 4355,
    "name": "传奇的诞生",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/56e484a7b91e59d1b005dfa93c80482f.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/56e484a7b91e59d1b005dfa93c80482f.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/56e484a7b91e59d1b005dfa93c80482f.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "梦想造就王者   奋斗成就传奇",
    "premiereAt": 1536249600000,
    "grade": "8.0",
    "watchCount": 0,
    "cinemaCount": 193,
    "scheduleCount": 960,
    "isPromotion": true,
    "isNowPlaying": true,
    "isComingSoon": "",
    "isPresold": ""
}, {
    "id": 4365,
    "name": "李宗伟：败者为王",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/d15469628d30ef35d0275decf520711e.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/d15469628d30ef35d0275decf520711e.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/d15469628d30ef35d0275decf520711e.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "相信那些相信你可以的人",
    "premiereAt": 1536249600000,
    "grade": "7.2",
    "watchCount": 0,
    "cinemaCount": 106,
    "scheduleCount": 284,
    "isPromotion": true,
    "isNowPlaying": true,
    "isComingSoon": "",
    "isPresold": ""
}];
//即将上映数据
let commingSoonArr = [{
    "id": 4360,
    "name": "黄金兄弟",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/89e79e0e2560f5d26e695b476e8997fd.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/7affbfe709c89903bb2a08880841513d.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/7affbfe709c89903bb2a08880841513d.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "好兄弟 有今生  有来世",
    "premiereAt": 1537459200000,
    "grade": "8.0",
    "watchCount": 0,
    "cinemaCount": 0,
    "scheduleCount": 0,
    "isPromotion": true,
    "isNowPlaying": "",
    "isComingSoon": true,
    "isPresold": ""
}, {
    "id": 4186,
    "name": "低压槽：欲望之城",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/8340b722e6472470d02138656c623806.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/a6e3e55f806bf57bbe1fcf49f168d3ff.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/a6e3e55f806bf57bbe1fcf49f168d3ff.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "真相往往不止一层",
    "premiereAt": 1546185600000,
    "grade": "8.3",
    "watchCount": 72396,
    "cinemaCount": 0,
    "scheduleCount": 0,
    "isPromotion": true,
    "isNowPlaying": "",
    "isComingSoon": true,
    "isPresold": ""
}, {
    "id": 4379,
    "name": "美丽战争",
    "cover": {"origin": "https://pic.maizuo.com/usr/movie/338daae5a880b9785a52454ea30fe522.jpg"},
    "poster": {
        "origin": "https://pic.maizuo.com/usr/movie/0c4caed8638508dfbbe5a7fceba92247.jpg",
        "thumbnail": "https://pic.maizuo.com/usr/movie/0c4caed8638508dfbbe5a7fceba92247.jpg?x-oss-process=image/resize,m_fixed,h_0,w_300"
    },
    "intro": "伤口不会痛一辈子 但遗憾会 ",
    "premiereAt": 1536854400000,
    "grade": "8.0",
    "watchCount": 0,
    "cinemaCount": 0,
    "scheduleCount": 0,
    "isPromotion": true,
    "isNowPlaying": "",
    "isComingSoon": true,
    "isPresold": ""
}];
										