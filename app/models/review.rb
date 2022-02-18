class Review < ApplicationRecord

    validates :body, :title, presence: true
    validates :ratings, numericality: {greater_than: 0}

    belongs_to :author,
        foreign_key: :user_id,
        class_name: :User 

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product 

end
