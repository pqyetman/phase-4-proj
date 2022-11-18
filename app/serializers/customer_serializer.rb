class CustomerSerializer < ActiveModel::Serializer
  attributes :name, :address, :id
end
