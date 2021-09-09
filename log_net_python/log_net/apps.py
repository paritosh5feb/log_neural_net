from django.apps import AppConfig
import html
import pathlib
import os
from tensorflow import keras
from django.urls import path


class LogNetConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'log_net'
    #MODEL_PATH = pathlib.Path("model")
    PATH = os.path.join("c:/","Users/","parit/","log_neural_net/","log_net_python/","log_net/","model/")
    predictor = keras.models.load_model(PATH+"model_sonic_logs")
