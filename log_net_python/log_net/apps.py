from django.apps import AppConfig
import html
import pathlib
import os



class LogNetConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'log_net'
    MODEL_PATH = Path("model")
    
