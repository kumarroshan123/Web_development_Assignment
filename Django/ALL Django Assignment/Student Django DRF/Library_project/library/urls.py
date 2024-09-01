from django.urls import path
from .views import displayauthor,updatedeleteauthor ,displaybook,updatedeletebook,displayMember,updatedeletemember,BooksByAuthor,LoansByMember
# from .views import 

urlpatterns = [
    path("author/list/",displayauthor.as_view(),name="listauthor"),
    path("author/list/<int:pk>",updatedeleteauthor.as_view(),name="updatebook"),
    path("Book/list/",displaybook.as_view(),name="listauthor"),
    path("Book/list/<int:pk>",updatedeletebook.as_view(),name="updatebook"),
    path("Member/list/",displayMember.as_view(),name="listMember"),
    path("Member/list/<int:pk>",updatedeletemember.as_view(),name="updateMember"),
    path('author/books/<int:author_id>/', BooksByAuthor.as_view(), name='books-by-author'),
    path('Member/Loans/<int:member_id>/', LoansByMember.as_view(), name='books-by-author'),
]
