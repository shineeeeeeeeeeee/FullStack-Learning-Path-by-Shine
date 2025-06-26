MVC Pattern -> Model, View and Controller

We use mongoose for connection of backend server with mongodb, this is our model
Our mongoose contains schema and model -> provides tools to interact with db and data logic

Controller is business logic -> apart from db logic and functioning 

View is UI, which is not considered in backend -> respond sent comes under this

    Benefit is SOC -> separation of concern, entire logic, view and control resides here separately.

example: 
    button clicked -> api call -> request -> backend -> controller -> business logic -> model -> BL -> respond to UI

We'll make a backend app containing e-commerce cart doing CRUD operations for products
    /products -> view all