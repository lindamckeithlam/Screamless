class Api::OrdersController < ApplicationController
  def create
    @order = Order.new(uparams)
    if @order.save
      render json: @order, status: 200
    else
      render json: @order.errors.full_messages, status: 400
    end
  end

  def show
    @order = Order.find_by(id: params[:id])
    @restaurant = @order.restaurant
    @user = @order.user

    if @order
      render :show
      # render json: @order, status: 200
    else
      render json: @order.errors.full_messages, status: 400
    end
  end

  def update
    @order = Order.find_by(id: params[:id])
    if params[:instruction]
      @order.delivery_instructions = params[:instruction]
      @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: 400
    end
  end

  def index
    @orders = Order.all.where(user_id: params[:user_id]).order({id: :desc})
    if @orders
      render json: @orders, status: 200
    else
      render json: @orders.errors.full_messages, status: 400
    end
  end

  def uparams
    params.require(:order).permit(:id, :user_id, :subtotal, :tax, :tip, :delivery_fee, :total, :instruction, :restaurant_id, :restaurant_name, :items)
  end
end
