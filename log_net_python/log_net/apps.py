from django.apps import AppConfig
import html
import pathlib
import os
from tensorflow import keras



class LogNetConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'log_net'
    MODEL_PATH = Path("model")
    predictor = keras.models.load_model(MODEL_PATH
    '/'+'model_sonic_logs')
