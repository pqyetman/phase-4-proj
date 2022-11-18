class ProjectsController < ApplicationController
    
    
    def index
        projects = Project.all
        render json: projects
    end

    def show
        project = Project.find(params[:id])
        render json: project
    end 

    def create        
            project = Project.create!(project_params)
            render json: project, status: :created       
    end 

    private

    def project_params
        params.permit(:open, :description, :customer_id, :estimated_total_hours)
    end 

end
