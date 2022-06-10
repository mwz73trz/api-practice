from rest_framework import viewsets
from .models import *
from .serializers import  *

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.filter(completed=False)
    serializer_class = TaskSerializer
