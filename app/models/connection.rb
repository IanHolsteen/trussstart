class Connection < ApplicationRecord
  belongs_to :user
  belongs_to :connected_user, class_name: "User"

  validates :status, inclusion: { in: %w[pending accepted blocked] }

end
