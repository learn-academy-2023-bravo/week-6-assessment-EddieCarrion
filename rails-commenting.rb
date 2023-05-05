# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) Below we have a class called "BlogPostsCOntroller" that will coordinate the interaction between the user and the model.
class BlogPostsController < ApplicationController
  def index
    # ---2) Here we have a instance call that will access and save the content from the database 
    @posts = BlogPost.all
  end

  # ---3) Here the show method will allow you to access one particular item according to it's ID. The Id will come form the url prams.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The new method allows the user to add information to the database. They could add a new blog potentially.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) Here the create method is calling the strong params method to protect the data in the app
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This will allow the user to edit a specific instance based on the ID of the particular instance
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) This will allow the user to identify the item in the database via ID number. Calling the strong params method is necessary since the request will modify the database content.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) This will delete a particular item based on it's ID number. Once the item is deleted the user will be redirected and the item will no longer be visisble.
      redirect_to blog_posts_path
    end
  end

  # ---9) The private method restricts where a method can be called. This will ensure the controller methods can be called from somewhere else in the program.
  private
  def blog_post_params
    # ---10) This restricts methods to be called from outside the program.
    params.require(:blog_post).permit(:title, :content)
  end
end
