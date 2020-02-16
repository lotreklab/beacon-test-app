from rest_framework import viewsets
from points.models import Point
from .serializers import PointSerializer



class PointViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    serializer_class = PointSerializer
    queryset = Point.objects.all()
    lookup_field = 'beacon_address__iexact'
