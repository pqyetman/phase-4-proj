class EmployeesController < ApplicationController
    skip_before_action :authorize, only: :index
    
    def index
        employees = Employee.all
        render json: employees
    end
end
