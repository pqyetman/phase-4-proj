class TaskSerializer < ActiveModel::Serializer
  belongs_to :employee
  attributes :id, :employee_id, :project_id, :hours, :open, :description  

end
