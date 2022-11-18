class AddUserInformation < ActiveRecord::Migration[6.1]
  def change

    add_column :users, :username, :string
    add_column :users, :password_digest, :string
    add_column :users, :employee_id, :integer

  end
end
