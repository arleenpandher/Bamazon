class Service < ApplicationRecord

    has_one_attached :photo

    has_many :products, 
        foreign_key: :service_id,
        class_name: :Product 
end
