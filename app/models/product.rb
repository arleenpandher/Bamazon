class Product < ApplicationRecord

    has_one_attached :photo 

    belongs_to :service,
        foreign_key: :service_id, 
        class_name: :Service 
        
end
