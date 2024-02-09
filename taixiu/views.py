import random
import time
from django.http import JsonResponse
from django.shortcuts import render
from django.core.cache import  cache
from rest_framework.views import APIView 
# Create your views here.

def index(request):
    return render(request, 'index.html')

class login(APIView):
    def get(self, request):
        username = request.GET.get('username')
        password = request.GET.get('password')

        user_data = cache.get(username, None) #username : [password, money]
        
        # if username in all_key_user and password!=user_data[1]:
        #     return JsonResponse({
        #         'status':'error',
        #     })
        
        if user_data:
            if user_data[0] == password:
                return JsonResponse({
                    'status':'success',
                    'money':user_data[1]
                })  
            return JsonResponse({
                'status':'error',
            })
        else:
            cache.set(username, [password, 100000])
            user_data = cache.get(username)
            return JsonResponse({
                'status':'success',
                'money':user_data[1]
            })

def get_money(request):
    username = request.GET.get('username')

    user_data = cache.get(username)
    return JsonResponse({
        'status':'success',
        'money':user_data[1]
    })
    


def handleResult(request):
    data = request.GET

    username = data.get('username')
    money = data.get('money')

    user_data = cache.get(username)
    user_data[1] += int(money)*1.98
   


    cache.set(username, user_data)
    return JsonResponse({
        'status':'success'
    })


def truMoney(request):
    data = request.GET

    username = data.get('username')
    money = data.get('money')

    user_data = cache.get(username)
    user_data[1] -= int(money)

    cache.set(username, user_data)
    return JsonResponse({
        'status':'success'
    })