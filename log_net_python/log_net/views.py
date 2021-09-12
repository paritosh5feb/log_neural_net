from django.shortcuts import render
from .apps import LogNetConfig
from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404
#from sklearn.linear_model import LinearRegression, RidgeCV
from sklearn.preprocessing import StandardScaler
from django.core.files.storage import FileSystemStorage
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import numpy as np
import pandas as pd
import json
import os

# Create your views here.

'''
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
'''

def getResults(request):
    '''
    Receive Test Data from the User
    '''
    fileObj=request.FILES['filePath']
    fs = FileSystemStorage()
    filePathName = fs.save(fileObj.name, fileObj)
    filePathName = fs.url(filePathName)
    filePath = '.'+filePathName
    #________________________________________________
    '''
    Load the train Data to fit the scaler

    '''
    p = os.path.join("c:/","Users/","parit/","log_neural_net/","data/")
    df1 = pd.read_csv(p+"train.csv")
    df1.replace(['-999', -999], np.nan, inplace=True)
    df1.dropna(axis=0, inplace=True)
    df1_data= df1.values
    x_trainwell1 = df1_data[:,:-2]
    scaler = StandardScaler()
    scaler.fit(x_trainwell1)
    #___________________________________________________
    '''
    Load the test data received and preprocess it
    '''
    df2 = pd.read_csv(filePath)
    # Remove missing
    for col in df2.columns.tolist():
        df2[col][df2[col]==-999] = np.nan
    df2.dropna(axis=0, inplace=True)
    df2_data = np.array(df2)
    x_trainwell2 = df2_data
    x_trainwell2 = scaler.transform(x_trainwell2)
    #______________________________________________________

    '''
    Do the Prediction
    '''
    well2_predict = LogNetConfig.predictor.predict(x_trainwell2)
    d_df = pd.DataFrame(well2_predict, columns=['DTC', 'DTS'])
    d={}
    d["result"] = list(d_df.T.to_dict().values())
    #djson = json.loads(json.dumps(d))
    #djson2 = d_df.to_json()
    #return JsonResponse({'result':djson['result']})
    #d = {}
    #d['DTC'] = d_df['DTC'].to_list()
    #d['DTS'] = d_df['DTS'].to_list()
    return JsonResponse({"result":d})
