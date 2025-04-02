export function getDeliveryOption (deliveryOptionId) {
    
            let deliveryOptions;
    
            deliveryOption.forEach((option) => {
                if (option.id === deliveryOptionId){
                    deliveryOptions = option ;
                }
            });
            return deliveryOptions;
        }

export const deliveryOption = [
    {
        id: '1',
        deliverydays:7,
        priceCents:0
    },{
        id: '2',
        deliverydays:3,
        priceCents:499
    },{
        id: '3',
        deliverydays:1,
        priceCents:999
    }
];