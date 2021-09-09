from django.shortcuts import render
from .apps import LogNetConfig
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import pandas as pd
import json
# Create your views here.


class call_model(APIView):
    def get(self, request):
        #if request.method == 'POST':
        #params = request.GET.get('query')
        print("\n")
        print("params:")
        #print(params)
        print("\n")
        #print(params[0])
        print("\n")
        print("data")
        print(request)
        print(request.GET.get())
        #data_df = pd.DataFrame({0:data}).transpose()
        #print("data_df")
        #print(data_df)
        #response = LogNetConfig.predictor.predict(data_df)
        #print("Response")
        #print(response)
        #data_df = pd.DataFrame(params)
        print("dataframe:")
        print("\n")
        #print(data_df)
        print("\n")
        #response = LogNetConfig.predictor.predict(data_df)
        #print(response)
        return JsonResponse({"DTC":0, "DTS":0});
