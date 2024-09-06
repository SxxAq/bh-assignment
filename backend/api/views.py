from rest_framework.views import APIView
from rest_framework.response import Response

class CandlestickDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"x": "2024-08-01", "open": 55, "high": 60, "low": 50, "close": 58},
                {"x": "2024-08-02", "open": 58, "high": 65, "low": 52, "close": 62},
                {"x": "2024-08-03", "open": 62, "high": 68, "low": 58, "close": 66},
                {"x": "2024-08-04", "open": 66, "high": 70, "low": 63, "close": 68},
                {"x": "2024-08-05", "open": 68, "high": 72, "low": 65, "close": 70},
            ]
        }
        return Response(data)

class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Aug", "value": 25},
                {"name": "Sep", "value": 35},
                {"name": "Oct", "value": 45},
                {"name": "Nov", "value": 50},
                {"name": "Dec", "value": 60},
            ]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Product X", "value": 180},
                {"name": "Product Y", "value": 220},
                {"name": "Product Z", "value": 150},
                {"name": "Product W", "value": 190},
            ]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Electronics", "value": 400},
                {"name": "Furniture", "value": 150},
                {"name": "Clothing", "value": 200},
                {"name": "Accessories", "value": 120},
            ]
        }
        return Response(data)
