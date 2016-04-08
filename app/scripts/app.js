/**
 * Created by Venkat on 4/8/2016.
 */

'use strict';

angular.module('confusionApp',[])

    .controller('menuController', function() {
        var dishes=[
            {
                name: 'Uthapizza',
                image: 'images/uthapizza.png',
                category: 'mains',
                label: 'Hot',
                price: '4.99',
                description:'A unique combination of Indian Uthappam and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
            },
            {
                name: 'Zucchipakoda',
                image: 'images/zucchipakoda.png',
                category: 'appetizer',
                label:'',
                price:'1.99',
                description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
            },
            {
                name: 'Vadonut',
                image: 'images/vadonut.png',
                category: 'appetizer',
                label: 'New',
                price: '1.99',
                description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
            },
            {
                name:'ElaiCheese Cake',
                image: 'images/elaicheesecake.png',
                category: 'desserts',
                label:'',
                price:'2.99',
                description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
            }
        ];

        this.dishes = dishes;
        this.tab = 1;
        this.filtText = '';
        this.select = function(setTab) {
            this.tab = setTab;

            if (setTab === 2) {
                this.filtText = "appetizer";
            }
            else if (setTab === 3){
                this.filtText = "mains";
            }
            else if (setTab === 4){
                this.filtText = "desserts";
            }
            else{
                this.filtText = "";
            }
        };

        this.isSelected = function(checkTab) {
            return (this.tab === checkTab);
        };
    });