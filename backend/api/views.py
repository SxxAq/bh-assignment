from rest_framework.views import APIView
from rest_framework.response import Response

class CandlestickDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
                {"x": "2023-01-03", "open": 40, "high": 50, "low": 35, "close": 45},
            ]
        }
        return Response(data)

class LineChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Jan", "value": 10},
                {"name": "Feb", "value": 20},
                {"name": "Mar", "value": 30},
                {"name": "Apr", "value": 40},
            ]
        }
        return Response(data)

class BarChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Product A", "value": 100},
                {"name": "Product B", "value": 150},
                {"name": "Product C", "value": 200},
            ]
        }
        return Response(data)

class PieChartDataView(APIView):
    def get(self, request):
        data = {
            "data": [
                {"name": "Red", "value": 300},
                {"name": "Blue", "value": 50},
                {"name": "Yellow", "value": 100},
            ]
        }
        return Response(data)