class Product < ApplicationRecord

    has_one_attached :photo 

    belongs_to :service,
        foreign_key: :service_id, 
        class_name: :Service 

    has_many :presence_in_cart,
        foreign_key: :product_id,
        class_name: :Cart 
        
    has_many :reviews, 
        foreign_key: :product_id,
        class_name: :Review 
end
