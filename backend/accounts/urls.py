from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from accounts import views

urlpatterns = [
    path('profile/', views.ProfileView.as_view()),
    path('api/auth/', views.CustomAuthToken.as_view()),
    path('register/', views.RegisterView.as_view({'post': 'list'})),
    #path('snippets/<int:pk>/', views.SnippetDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)