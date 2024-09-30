import os
from django.shortcuts import render
from django.http import HttpResponse
from django.utils import timezone
from django.conf import settings
from django.contrib.auth import logout as auth_logout
from django.shortcuts import render, redirect
# # Create your views here.


# from rest_framework import generics
# from .serializers import UserSerializer
# from django.contrib.auth.models import User

# class UserCreate(generics.CreateAPIView):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# 아이디 기억하기1
def login(request):
    if request.method == 'GET' :
        return render(request, '../src/pages/Login.jsx')
    else:
        id = request.POST['id']
        pw = request.POST['pw']

        # POST로 값을 꺼내올 때 값이 없을 경우 오류, 따라서 get함수를 사용
        remember = request.POST.get('remember', '')
        response = HttpResponse('로그인 성공!')

        if(id == pw):
            # 로그인 성공 시 remember를 확인
            if remember == '':
                response.delete_cookie('id')
            else:
                response.set_cookie('id', id, max_age=604800)
            return response
        else:
            return render(request, '../src/pages/Login.jsx')
        

def logout(request):
    auth_logout(request)
    return redirect('login')        