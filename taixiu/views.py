import random
import time
from django.http import JsonResponse
from django.shortcuts import render
from django.core.cache import  cache
from .models import UserModel
from rest_framework.views import APIView 
# Create your views here.

def index(request):
    return render(request, 'index.html')

class login(APIView):
    def get(self, request):
        username = request.GET.get('username')
        password = request.GET.get('password')

        try:
            user = UserModel.objects.get(username = username)
            return JsonResponse({
                'status':'login',
                'money':user.money
            })
        except UserModel.DoesNotExist:
            user = UserModel.objects.create(username = username, password=password)
            return JsonResponse({
                'status':'create',
                'money':user.money
            })
        

def get_money(request):
    username = request.GET.get('username')

    user = UserModel.objects.get(username = username)
    return JsonResponse({
        'status':'success',
        'money':user.money
    })
    


def handleResult(request):
    data = request.GET

    username = data.get('username')
    status = data.get('status')
    money = data.get('money')

    user = UserModel.objects.get(username =username)
    money_db = user.money
    if status == 'cong':
        user.money = int(money_db)-int(money)+int(money)*1.98
    elif status == 'tru':
        user.money = int(money_db)- int(money)


    user.save()
    return JsonResponse({
        'status':'success'
    })