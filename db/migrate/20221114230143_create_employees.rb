class CreateEmployees < ActiveRecord::Migration[6.1]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :title
      t.integer :task_id
      t.integer :project_id

      t.timestamps
    end
  end
end
