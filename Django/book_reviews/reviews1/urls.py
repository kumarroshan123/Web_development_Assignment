from django.urls import include,path
from rest_framework.routers import DefaultRouter
from .views import BookViewSet, ReviewViewSet
from rest_framework_simplejwt.views import(
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)

router=DefaultRouter()
router.register(r'books',BookViewSet)
router.register(r'reviews',ReviewViewSet)

urlpatterns=[
    path('api/token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
    path('api/token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),
    path('api/token/verify/',TokenVerifyView.as_view(),name='token_verify'),
]

urlpatterns = [
    path('',include(router.urls)),
]
