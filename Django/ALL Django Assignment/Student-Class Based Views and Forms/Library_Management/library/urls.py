from django.urls import path
from .import views
urlpatterns = [
    path('',views.BookListView.as_view(),name="book_List"),
    path('<int:pk>/',views.BookDetailView.as_view(),name="book_Detail"),
    path('add/',views.BookCreateView.as_view(),name="book_Form"),
    path('edit/<int:pk>/',views.BookUpdateView.as_view(),name="book_update"),
    path('delete/<int:pk>',views.BookDeleteView.as_view(),name="book_delete"),
    path('custom-form/', views.BookFormView.as_view(), name='book_custom_form'),
    path('success/', views.success_page, name='book_success'),
]
