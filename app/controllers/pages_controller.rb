class PagesController < ActionController::Base
  before_action :set_page, only: %i[ show update destroy ]

def index
  @pages = Page.all
end

  def show
    render json: @page
  end

  def create
    @page = Page.new(page_params)
    if @page.save
      render json: @page, status: :created
    else
      render json: @page.errors, status: :unprocessable_entity
    end
  end

  def update
    if @page.update(page_params)
      render json: @page
    else
      render json: @page.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @page.destroy
  end

  private

  def set_page
    @page = Page.find(params[:id])
  end

  def page_params
    params.require(:page).permit(:title, content: {})
  end
end
