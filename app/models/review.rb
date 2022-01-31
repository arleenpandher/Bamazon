class Review < ApplicationRecord

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product 

end
