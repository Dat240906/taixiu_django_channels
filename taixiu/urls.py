from django.urls import path
from . import views
urlpatterns = [
    path('', views.index),
    path('get-data-user/', views.login.as_view(), name='login'),
    path('get-money/', views.get_money, name='getmoney'),
    path('handleResult/', views.handleResult, name='handleResult')

]