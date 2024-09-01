from django.urls import path
from .import views

urlpatterns = [
    path("list/",views.displayCreateCar,name="Display_Create_Cars"),
    path("list/<int:pk>/",views.Update_DeleteCar,name="Update-delete-car"),
    path("manufacturers/", views.displayCreateManufacturer, name="display_create_manufacturer"),
    path("manufacturers/<int:pk>/", views.Update_DeleteManufacturer, name="update_delete_manufacturer"),
    path("dealerships/", views.displayCreateDealership, name="display_create_dealership"),
    path("dealerships/<int:pk>/", views.Update_DeleteDealership, name="update_delete_dealership"),
]
