new Vue({
    el:'#vue-catalog-app',
    data:{
        guantityItem: 8,
        title: "VUE",
        typeSelect:["diaper", "panties"],
        slideCatalog:[],
        catalog:[
            {
                name:"Подгузники Pampers Active Baby-Dry 4 (Maxi), 132 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/01.jpg"
            },
            {
                name:"Подгузники Pampers Premium Care 5 (Junior), 88 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/02.jpg"
            },
            {
                name:"Подгузники Pampers Premium Care 4 (Maxi), 104 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/03.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 3 (Midi), 120 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/04.jpg"
            },
            {
                name:"Подгузники Pampers Active Baby-Dry 3 (Midi), 150 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/05.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 5 (Junior), 96 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/06.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 4 (Maxi), 104 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/07.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 6 (Extra Large), 88 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/08.jpg"
            },
            {
                name:"Подгузники Pampers Active Baby-Dry 4+ (Maxi Plus), 120 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/09.jpg"
            },
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Maxi), 147 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/10.jpg"
            },
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Midi), 174 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/11.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Premium Care Pants 5 (Junior), 40 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/12.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Premium Care Pants 4 (Maxi), 44 шт. ",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/13.jpg"},
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Midi), 126 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/14.jpg"
            },
            {
                name:"Подгузники  Pampers Premium Care 3 (Midi), 120 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/15.jpg"
            },
            {
                name:"Подгузники Pampers Premium Care (Mini), 148 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/16.jpg"
            },
            {
                name:"Подгузники Pampers Active Baby-Dry 4 (Maxi), 132 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/01.jpg"
            },
            {
                name:"Подгузники Pampers Premium Care 5 (Junior), 88 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/02.jpg"
            },
            {
                name:"Подгузники Pampers Premium Care 4 (Maxi), 104 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/03.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 3 (Midi), 120 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/04.jpg"
            },
            {
                name:"Подгузники Pampers Active Baby-Dry 3 (Midi), 150 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/05.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 5 (Junior), 96 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/06.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 4 (Maxi), 104 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/07.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Pants 6 (Extra Large), 88 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/08.jpg"
            },
            {
                name:"Подгузники Pampers Active Baby-Dry 4+ (Maxi Plus), 120 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/09.jpg"
            },
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Maxi), 147 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/10.jpg"
            },
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Midi), 174 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/11.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Premium Care Pants 5 (Junior), 40 шт.",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/12.jpg"
            },
            {
                name:"Трусики для мальчиков и девочек Pampers Premium Care Pants 4 (Maxi), 44 шт. ",
                type: "panties",
                availability: true,
                imgURL: "img/catalog/13.jpg"},
            {
                name:"Подгузники дет.однораз.Pampers Active Baby-Dry (Midi), 126 шт.",
                type: "diaper",
                availability: true,
                imgURL: "img/catalog/14.jpg"
            }
        ],
        indicator:[]
    },
    methods:{
        selectType: function () {
            $('#myCarousel').carousel(0);

            var selectProduct = [];
            this.indicator = [];
            this.slideCatalog = [];

            for (var i=0; i < this.catalog.length; i++){
                for(var k = 0; k<this.typeSelect.length; k++){
                    if(this.catalog[i].type == this.typeSelect[k]){
                        selectProduct.push(this.catalog[i]);
                    }
                }
            };

            for (var j=0; j<(selectProduct.length/this.guantityItem); j++){
                this.indicator.push(j);
            };

            var productItem = [];
            for (var i=1; i<=(selectProduct.length); i++){
                productItem.push(selectProduct[i-1]);
                if(!Boolean(i%this.guantityItem)){
                    this.slideCatalog.push(productItem);
                    productItem=[];
                }
                if(selectProduct.length == i){
                    this.slideCatalog.push(productItem);
                }
            };
        }
    },
    created: function () {
        for (var i=0; i<(this.catalog.length/this.guantityItem); i++){
            this.indicator.push(i);
        };

        var productItem = [];
        for (var i=1; i<=(this.catalog.length); i++){
            productItem.push(this.catalog[i-1]);
            if(!Boolean(i%this.guantityItem)){
                this.slideCatalog.push(productItem);
                productItem=[];
            }
            if(this.catalog.length == i){
                this.slideCatalog.push(productItem);
            }
        };
    }
});
