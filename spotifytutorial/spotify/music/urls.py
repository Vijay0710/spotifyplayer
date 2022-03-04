from django.urls import path
from django.urls.resolvers import URLPattern
from . import views


urlpatterns = [
    path('test/',views.data,name='test'),
    path('home/<str:pk>/',views.home,name='home'),
    path('music/<str:song>/',views.music,name='music')
]
