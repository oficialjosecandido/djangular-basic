from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path('', views.IndexView.as_view()),
    path('department/', views.departmentAPI),
    path('department/([0-9]+)', views.departmentAPI),
    #path('snippets/<int:pk>/', views.SnippetDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)