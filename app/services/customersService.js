(function(){
	var customersService = function(){
		var customers = [
			{
				id: 1,
				joinedDate: '2008-12-06',
				name: 'Chirag Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 1,
						product: 'Shoes',
						total: 9.5975
					}
				],
				orderTotal: 9.5975
			},
			{
				id: 2,
				joinedDate: '2008-12-06',
				name: 'Palak Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 23,
						product: 'Dress',
						total: 21
					}
				],
				orderTotal: 21
			},
			{
				id: 3,
				joinedDate: '2008-12-06',
				name: 'Rajni Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 99,
						product: 'Diamond',
						total: 1000
					}
				],
				orderTotal: 1000
			},
			{
				id: 4,
				joinedDate: '2008-12-06',
				name: 'Deepak Aggarwal',
				city: 'New Delhi',
				orders:[
					{
						id: 4,
						product: 'T Shirt',
						total: 500
					}
				],
				orderTotal: 500
			}
		];
		
		this.getCustomers = function(){
			return customers;
		};

		this.getCustomer = function(customerId){
			for(var i=0, len=customers.length; i<len; i++){
				if(customers[i].id === parseInt(customerId)){
					return customers[i]
				}
			}
			return false;
		}
	}
	angular.module('customersApp').service('customersService', customersService);
}());