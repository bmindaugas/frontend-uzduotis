var products = new Vue ({
    el: '#products',
    data: 
    {
        newCode: '',
        newName: '',
        newBasePrice: '',
        newPvm:'21',
        newBaseSum: '',
        newTotalSum: '',
        sum: '',
        totalSum: '',
        totalTax: '',

        products: [],
        nextProductId: 1,
    },
    methods: {
        add_product: function () {
            this.products.push({ 
                id: this.nextProductId++,

                code: this.newCode,
                name: this.newName,

                base_price: this.newBasePrice = eval(this.newBasePrice),
                pvm: this.newPvm = eval(this.newPvm),

                total_price: this.newBasePrice / 100 * this.newPvm + this.newBasePrice,
              }),
              this.sum = this.newBaseSum/1 + this.newBasePrice,
              this.totalSum = this.sum / 100 * this.newPvm + this.sum,
              this.totalTax = this.totalSum - this.sum,
              
              this.newCode = '',
              this.newName = '',
              this.newTotalPrice = ''
            },
            removeRow: function(index) {
                this.products.splice(index, 1);
                // this.sum = '';
                // this.totalSum = '';
                // this.totalTax = '';
            }
            
    },
    watch: { 
        products: function () {
            this.newBaseSum = this.newBaseSum/1 + this.newBasePrice;
        }        
    }
});